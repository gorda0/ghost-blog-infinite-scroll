Ghost blog infinite scroll
==========================

#WORKING: http://youtu.be/KZ0rzEnJOWs



Just an infinite scroll for ghost blog using jquery


Open your default.hbs and before ```</body>``` put the code:

```javascript
    <script>
    var max_pages = parseInt('{{pagination.pages}}');
    </script>
```


Now create an archive named infinitescroll.js in your assets folder.
open it and put the code:

```javascript
$().ready(function(){
    var page = 2;
    var url_blog = window.location;
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $.get(
                (url_blog +'/page/'+page),
                function(content) {
                    if(page <= max_pages){
                        $('.content').append($(content).children(".post"));
                        page = page + 1;
                    }
                }
            );
        }
    });
});
```
Open the default.hbs again and import the infinitescroll.js

```html
<script type="text/javascript" src="{{asset "js/infinitescroll.js"}}"></script>
```

If you utilize a custom theme you will have to edit the following line:
```
$('.content').append($(content).children(".post"));
```
* Replace ```.content``` with the appropriate selector for the main container of the posts.
* Replace ```.post``` with the appropriate selector for your articles/blogs


Ask any questions over at [Facebook](https://www.facebook.com/profile.php?id=100007972269711) or [Google+](https://plus.google.com/113913189482409702580)

