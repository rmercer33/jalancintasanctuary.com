# Overview

## Listing of Posts

A list of posts is displayed _layout/unify-blog in a two column
layout, one for each post and the other for blog specific info
such as a list of categories/tags and whatever.

Each post can be of the following types

1. regular - nothing fancy
2. slider - displays a slider of images on the list page
3. vimeo - displays a vimeo video

Each post is displayed in the list with an image, video, or slider followed
by the title, author, date, and excerpt.

Additional layouts for listing posts can be defined.

## Individual Post Display

Individual posts are displayed using _layout/unify-blog-post. There is a two 
column display with the post on the left and other stuff on the right. Posts
can contain text, images, videos (not implemented), links, and other cool
stuff.

The post page can optionally display a banner. 

With this layout JCS header and footer elements are included. We can design additional layouts
for post display as well.

# Post Front Matter

Post front matter defines attributes of the post and are described here.

1.  layout: unify-blog-post

    Defines the layout to use when displaying the post. This is the only layout
    currently available but more may follow.

2.  title: "Setting Up the Blog"

    The title of the post is displayed on the post-list page and post display page.

3.  date: 2015-08-26T14:31:40+08:00

    The date of the post

4.  author-id: rick | rod | kate | sandy

    Author-id identifies the author and makes author name, profile image, and by-line availabe
    for display. If author-id is not specified it will default to jcs and the post will be
    made for JCS.

    Valid values are: rick, sandy, rod, kate, jcs, and wol. Invalid values cause jcs to be
    used.

5.  post-id: ants

    Post-id indicates a banner should be displayed on the post display page and indicates the
    name of the background image to use via a css class called 'jcs-{{post-id}}'. Make sure
    you define this class and specify the desired background image.

6.  list-image: <path to image>

    The image to display on the post list page for a 'type: regular' post - see below. If this
    item is not present it will default to the author's profile image previously established.

7.  type: regular

    The type of post used to properly display the post on the post list page. Valid values
    are regular, slider, and vimeo. When type is not specified or invalid it defaults
    to regular.

8.  excerpt: "text..."

    The text used as the post excerpt displayed on the post list page. If not specified the first
    paragraph of the post is used. This does not work if html is present as the first component
    of the post text.

9.  social-images: 

    Optional, one or more images that will be added to the Fb metadata in the header of the
    blog post page. Values can be entered as a single image or as an array of images.

    **Single Image**

    social-images: /public/img/blog/sandy/img/temple-site.jpg

    **An Array of Images**

    social-images:
    - /public/img/blog/sandy/img/image1.jpg
    - /public/img/blog/sandy/img/image2.jpg
    - /public/img/blog/sandy/img/image3.jpg

10. comments: true | false - default

    Optional, indicates if the post will allow readers to comment. Default is false.

11. facebook: true | false - default

    Optional, specifies if fb like and share buttons will be included on page. Default is false.

12. hypothesis: true | false - default

    Optional, specifies if hypothesis (annotations) will be included on page. Default is false.

13. category: category name

    Use only one category. When used the category must have an entry in _data/categories.yml
    and _data/catlist.yml and there must be an associated file in blog/category/<cat name>.md

14. tags: [t1, t2, t3 ...]

    one or more tags between brackets separated by comma's

    When used each tag must have an entry in both _data/tags.yml and _data/taglist.yml and
    there must be an associated file in blog/tag/<tag name>.md


