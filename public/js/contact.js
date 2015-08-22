/* see eslint.org */
/*eslint-env browser, jquery */
/*global console, grecaptcha, Parse */

/*eslint no-console:0 */

$(document).ready(function() {
  "use strict";

  // See: http://parse.com
  // When form reCaptcha validates, data is persisted in jcs app at parse.com
  // - a beforeSave() is called that uses form data to send an email
  var parseApplId = "SfjRvg0cm4Db87Bxqcn66vpFUlqUtI9lN3mtfQKu";
  var parseJSId = "QG2GJuxCcd7KmAebNxrTtUqLmAkcJTahkiyPH0wT";

  Parse.initialize(parseApplId, parseJSId);
  var Contact = Parse.Object.extend("ContactInfo");
  var Subscriber = Parse.Object.extend("Subscriber");
  var Activity = Parse.Object.extend("Activity");

  $("#subscribe-form" ).on("submit", function(e) {
    e.preventDefault();

    $(".submit-message")
      .html("<i class='fa fa-spin fa-spinner'></i>&nbsp;Working ...");

    var target = $(e.target);
    var data = {
      name: $(target).find("[name='sname']").val(),
      email: $(target).find("[name='semail']").val()
    };

    //validate email
    console.dir(data);
    var subscriber = new Subscriber();
    subscriber.save(data, {
      success: function() {
        $(".submit-message")
          .html("<i class='fa fa-check'></i> Thank you.");

        $("[name='sname']").val("");
        $("[name='semail']").val("");
      },
      error: function() {
        $(".submit-message")
          .html("<i class='fa fa-bolt'></i> There was an error.");
      }
    });

    var activity = new Activity();
    var jcsData = store.get('jcsActivity');
    jcsData.subscription = data;
    var sData = {
      event: "Subscription",
      activity: jcsData
    };
    activity.save(sData, {
      success: function() {
        console.log('subscription activity saved');
      },
      error: function() {
        console.log('subscription activity save error');
      }
    });
  });

  $("#contact-form" ).on("submit", function(e) {
    e.preventDefault();

    // clear submit message
    $(".form-message").html("<p>Please wait ...</p>");

    if (location.port === "4000") {
      $(".form-message")
        .addClass("text-success")
        .html("<p>Thank you Rick. You have made contact. NOT!</p>");

      return false;
    }
    else {
      if (grecaptcha.getResponse().length === 0) {
        $(".form-message")
          .addClass("text-danger")
          .html("<p><i class='fa fa-exclamation'></i> Please verify Captcha</p>");

        return false;
      }
    }

    var target = $(e.target);
    var data = {
      name: $(target).find("#name").val(),
      email: $(target).find("#email").val(),
      phone: $(target).find("#phone").val(),
      message: $(target).find("[name='message']").val()
    };

    var contact = new Contact();
    contact.save(data, {
      success: function() {
        $(".form-message")
          .removeClass("text-danger")
          .addClass("text-success")
          .html("<p><i class='fa fa-check'></i> Thank you " 
            + data.name + ". You have made contact.</p>");

        $(target).find("#name").val("");
        $(target).find("#email").val("");
        $(target).find("#phone").val("");
        $(target).find("[name='message']").val("");
      },
      error: function() {
        $(".form-message")
          .removeClass("text-success")
          .addClass("text-danger")
          .html("<p><i class='fa fa-bolt'></i> There was an error sending your request,"
            + " please check if your email address is correct.</p>");
      }
    });

    var activity = new Activity();
    var jcsData = store.get('jcsActivity');
    jcsData.contact = {
      name: data.name,
      email: data.email,
      phone: data.phone
    };

    var aData = {
      event: "Contact Form",
      activity: jcsData
    };
    activity.save(aData, {
      success: function() {
        console.log('contact form activity saved');
      },
      error: function() {
        console.log('contact form activity save error');
      }
    });
  });

});


 // vim:ft=javascript
