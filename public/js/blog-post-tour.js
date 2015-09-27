$(document).ready(function() {
  "use strict";

var tour = {
  id: 'blog-post-tour',
  steps: [
    {
      target: 'post-author',
      title: 'Welcome to the JCS blog!',
      content: 
               'This tutorial is to support you in getting to know JCS blog posts and what ' +
               'you can do within the articles. This tutorial is only available when viewing ' +
               'a blog post.<br/><br/>Above, is information about ' +
                'the post, the date published, the author, and, if comments are enabled, ' +
                'the number of comments. In most cases, <strong>Like</strong> and <strong>Share</strong> ' +
                'Facebook buttons are also found.<br/><br/>You can click on the author\'s name to view a ' +
                'a list of all posts writen by the author.' ,
      placement: 'bottom',
      width: '400',
      arrowOffset: 60
    },
    {
      target: 'post-category',
      title: 'Categories &amp; Tags',
      content: 'Categories are used to classify posts according to subject and Tags describe ' +
                'topics mentioned in the post.<br/><br/>You can click on category and tag links ' +
                'to view the list of posts classified by the category or referencing a topic.',
      placement: 'bottom',
      arrowOffset: 60
    },
    {
      target: 'post-title',
      title: 'The Post Title',
      content: 'This is the title of the blog post. The text of the post flows from ' +
                'here to the bottom of the page, followed by the comment section.',
      placement: 'bottom',
      arrowoffset: 60
    },
    {
      target: 'post-comments',
      title: 'Post Comments',
      content: 'Comments are displayed by clicking on the \'Show Comments\' link. Go ahead &ndash; ' +
                '<strong>click on the link now!</strong><br/><br/>Like this blog, all comments are ' +
                'public once approved by the moderator, and can be seen by anyone.  ' +
                '<br/><br/>We use the Disqus comment system on our blog. Disqus takes care of all ' +
                'the details of storing and managing comments.' +
                '<br/><br/>Signup or sign&ndash;in instructions are given ' +
                'when you first make a comment.<br/><br/> Please, join in and add your comment. ' +
                'You can reply to comments &ndash; even your own. It\'s a great way to get a ' +
                'dialog going!<br/><br/>Please <a href="/profile/rick/index.html?id=contact">' +
                'let us know</a> if you have any trouble using Disqus. Thanks.',
      placement: 'top',
      arrowoffset: 60
    },
    {
      target: 'sb-control',
      title: 'Side Panel Control',
      content: 'Press this button to display the side panel. Go ahead, <strong>give it a try!</strong> ' +
                'Use it to quickly navigate to post listings by author, category, and tag. ' +
                'Click the button again to hide it.',
      placement: 'left',
      arrowOffset: 90,
      xOffset: -30,
      width: '500',
      yOffset: -100
    },
    {
      // target: 'tour-stop-h',
      target: 'hyp-tour-stop',
      title: 'Discover Hypothes.is',
      content: 'Look over to the far right - do you see the 3 symbols displayed vertically ' +
                'in the corner? This is the Hypothes.is interface used for fine grained annotation ' +
                'of web content.<br/><br/> ' +
                'Hypothes.is allows you to make notes or highlights of any text you select. ' +
                'Notes can be viewed by anyone who visits the page unless you make them private, ' +
                'in which case only you can see them. Highlights are private and can only be ' +
                'seen by you.<br/><br/> ' +
                'The Hypothes.is sidebar will pop-out when you click the &lt; symbol. Go ahead, ' +
                'give it a whirl.',
      placement: 'left'
    },
    {
      target: 'hyp-tour-stop',
      title: 'Sign In or Create an Account',
      content: 'Notes and highlights can be made once you create an account or \'sign-in\' ' +
                'to an existing account. In this way the notes and highlights you create ' +
                'will display each time you return to the page.<br/><br/>' +
                'Notes and highlights, collectively called \'annotations\', are a powerful ' +
                'way to collaboratively participate in conversation. Use this feature to comment ' +
                'on a post and to communicate more specifically to the author and others.' +
                '<br/><br/>Check it out and give it a try. We hope you enjoy this feature.',
      placement: 'left'
    },
    {
      target: 'tour-stop-h',
      title: 'Make an Annotation',
      content: 'Now that you\'re logged in, highlight an arbritary amount of text below to ' +
                'make make a note or highlight. Play around and learn how this ' +
                'feature works. Remember &ndash; your notes are public and only you can ' +
                'delete them.',
      placement: 'top'
    },
    {
      target: 'post-title',
      title: 'Tutorial Complete',
      content: 'Thanks for taking the time to complete this tutorial, please know you are welcome ' +
                'to join us, share your comments, and discuss points that are raised.',
      placement: 'bottom',
      arrowoffset: 60
    }
  ],
  showPrevButton: true,
  scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'tour',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('blog-post-tour:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    if (! jcs.featureDisplayedBefore('jcs-tour')) {
      $.wait(100).then(function() {
        mgr.createCallout({
          id: calloutId,
          target: startBtnId,
          placement: 'left',
          title: 'Discover Page Features',
          content: 'Press this button to begin a short tour of the features on'
                   + ' this page. You may be surprised by what you find.',
          yOffset: 10,
          xOffset: -210,
          arrowOffset: 30,
          width: 200
        });
      });
    }
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

$.wait = function(time) {
  return $.Deferred(function( dfd ) {
    setTimeout(dfd.resolve, time);
  }).promise();
};

init();

});
