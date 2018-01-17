/* see eslint.org */
/*eslint-env browser, jquery */
/*global console, grecaptcha, Parse */

/*eslint no-console:0 */

$(document).ready(function() {

  function initContactForm(id) {
    $("#" + id ).on("submit", function(e) {
      e.preventDefault();
      var form = $(this);

      //console.log("#" + e.currentTarget.id + " submitted");
      //console.log("action: " + form.attr("action"));
      //console.log("e: ", e);

      // clear submit message
      $(".form-message").html("<p>Please wait ...</p>");

      if (location.port === "3000") {
        $(".form-message")
          .addClass("text-success")
          .html("<p>Thank you Rick. You have made contact. NOT!</p>");

        return false;
      }

      var target = $(e.target);
      var data = {
        destination: $(target).find("[name='destination']").val(),
        name: $(target).find("[name='name']").val(),
        email: $(target).find("[name='email']").val(),
        phone: $(target).find("[name='phone']").val(),
        message: $(target).find("[name='message']").val()
      };

      $.post(form.attr("action"), form.serialize())
        .done(function() {
          $(".form-message")
            .removeClass("text-danger")
            .addClass("text-success")
            .html("<p><i class='fa fa-check'></i> Thank you " 
              + data.name + ". You have made contact.</p>");
          form[0].reset();
        })
        .fail(function(e) {
          $(".form-message")
            .removeClass("text-success")
            .addClass("text-danger")
            .html("<p><i class='fa fa-bolt'></i> There was an error sending your request,"
              + " please check if your email address is correct.</p>");
        });
    });
  }

  "use strict";

  initContactForm("jcs-contact-form");
  //initContactForm("kate-contact-form");
  //initContactForm("rod-contact-form");
  //initContactForm("sandy-contact-form");
  //initContactForm("rick-contact-form");


  $("#jcs-subscribe-form" ).on("submit", function(e) {
    e.preventDefault();
    console.log("#jcs-subscribe-form submitted");

    $(".submit-message")
      .html("<i class='fa fa-spin fa-spinner'></i>&nbsp;Working ...");

    var form = $(this);

    $.post(form.attr("action"), form.serialize())
      .done(function() {
        $(".submit-message")
          .html("<i class='fa fa-check'></i> Thank you.");
        form[0].reset();
      })
      .fail(function(e) {
        $(".submit-message")
          .html("<i class='fa fa-bolt'></i> There was an error.");
      });

   /*
    var target = $(e.target);
    var data = {
      name: $(target).find("[name='sname']").val(),
      email: $(target).find("[name='semail']").val()
    };
   */
  });


});


 // vim:ft=javascript

