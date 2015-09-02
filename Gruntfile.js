module.exports = function(grunt) {
  require("jit-grunt")(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    aws: grunt.file.readJSON("aws-keys.json"),
    watch: {
        options: {
          livereload: true,
        },
        contact: {
          files: ['contact_.html'],
          tasks: ['preprocess:dev'],
        },
        js: {
          files: ['public/js/*.js']
        },
      },
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.AWSAccessKeyId %>", // Use the variables
        secretAccessKey: "<%= aws.AWSSecretKey %>", // You can also use env variables
        region: "ap-southeast-1",
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },
      prod: {
        options: {
          bucket: "jalancintasanctuary.com",
          differential: true,
          gzipRename: "ext"
        },
        files: [
          {action: "upload", expand: true, cwd: "./_site", src: ["**"], dest: "/"}
        ]
      },
      dev: {
        options: {
          bucket: "jalancintasanctuary.net",
          differential: true,
          gzipRename: "ext"
        },
        files: [
          {action: "upload", expand: true, cwd: "./_site", src: ["**"], dest: "/"}
        ]
      },
      cdn: {
        options: {
          bucket: 'jcs.assets',
          differential: true, // Only uploads the files that have changed 
          gzipRename: 'ext' // when uploading a gz file, keep the original extension 
        },
        files: [
          {action: 'upload', expand: true, cwd: './cdn', src: ['**/*'], dest: '/'}
        ]
      }
    },
    preprocess: {
      options: {
        context: {
          DEBUG: true,
        }
      },
      dev: {
        files: [
          {src: './contact_.html', dest: './contact.html'}
        ],
        options: {
          context: {
            deploy_target: 'jcs.net',
            sitekey: '6LdG4gUTAAAAACEqWM-bIkIlC9Psp-nkWMFbq9OZ'
          }
        }
      },
      prod: {
        files: [
          {src: './contact_.html', dest: './contact.html'}
        ],
        options: {
          context: {
            deploy_target: 'jcs.com',
            sitekey: '6LeF9QUTAAAAABtvrWM734ZPyF3-wnyjgl8NlZ74'
          }
        }
      }
    },
    exec: {
      dev: {
        cmd: "open http://jalancintasanctuary.net"
      },
      buildDev: {
        cmd: "jekyll build --config _config.yml"
      },
      buildProd: {
        cmd: "jekyll build --config _configProd.yml"
      }
    }
  });

  grunt.registerTask("ppd", ["preprocess:dev"]);
  grunt.registerTask("ppp", ["preprocess:prod"]);
  grunt.registerTask("deploy-cdn", ["aws_s3:cdn"]);
  grunt.registerTask("deploy-dev", ["preprocess:dev","exec:buildDev","aws_s3:dev"]);
  grunt.registerTask("deploy-prod", ["preprocess:prod","exec:buildProd","aws_s3:prod"]);
};

