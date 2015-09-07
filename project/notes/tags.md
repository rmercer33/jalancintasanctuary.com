# Overview

## Listing of Tags

Tags are used to classify posts according to topic. A listing of all posts
for a given tag is supported - but there is some setup work to do.

Note: tag listings do not support pagination.

Note: the tag list page requires _data/taglist.yml - see below.

## Tag Setup

One or more tags are specified in the front matter of a post. A post containing
a single tag uses the 'tag' attribute where a post with multiple tags uses the
'tags' attribute like this:

tag: wom
tags: [wom, jcs, raj]

Follow these steps for each unique tag.

1. Add an entry in _data/tags.yml
2. Add a file in the blog/tag directory for the tag - copy an existing file, rename and edit.
3. Add an entry in _data/taglist.yml

All should just magically work.

# Tag File Front Matter

Tag front matter defines attributes used for the listing of posts by tag

1.  layout: unify-blog-tag

    Defines the layout to use when displaying the post. This is the only layout
    currently available but more may follow.

2.  tag: jcs

    Specify the name of the tag.

3.  title: "Jalan Cinta Gazette - Tag"

    The title of the tag listing page. The layout will append the tag name following the
    title.

4.  permalink: /blog/tag/jcs/

    This is a fixed format: use /blog/tag/<tag>/

5.  id: news

    id indicates a banner should be displayed on the page and indicates the
    name of the background image to use via a css class called 'jcs-{{id}}'. Make sure
    you define this class and specify the desired background image.

6.  social: blog

    The meta data file to use when generating the page. Contents of this file are inserted
    into the head of the page and read by Fb when a post references the url of the page.
