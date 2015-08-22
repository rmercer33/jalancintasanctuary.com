/* see: eslint.org */
/*eslint-env node */
/*global Parse */

Parse.Cloud.beforeSave("ContactInfo", function(req, resp) {
  "use strict";

  var Mailgun = require("mailgun");
  var text = "Comment from JalanCintaSanctuary.net\n" +
      "From: " + req.object.get("name") + "\n" +
      "Email: " + req.object.get("email") + "\n" +
      "Phone: " + req.object.get("phone") + "\n\n" +
      "Message: \n" + req.object.get("message");

  console.log("Mailgun.sendMail() %s", text);
  Mailgun.initialize("mg.thewayoflove.com", "key-5d441d817e61642bedd485c2b2337deb");

  Mailgun.sendEmail({
    to: "Sandy <sandy@thewayoflove.com>, "
        + "Love <love@thewayoflove.com>, "
        + "Rick <rick@thewayoflove.com>",
    from: req.object.get("name") + "<" + req.object.get("email") + ">",
    subject: "JCS Contact Form Submission",
    text: text
  },
  {
    success: function() {
      // console.log("Mail Sent");
      resp.success();
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      resp.error("Uh oh, something went wrong");
    }
  });
});


