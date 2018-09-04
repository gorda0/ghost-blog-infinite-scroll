$().ready(function () {
    var page = 2;
    var url_blog = window.location;

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {

            if (url_blog.charAt(url_blog.length - 1) != '/') {
                url_blog = url_blog + '/';
            }
            var nextPage = url_blog + 'page/' + page;

            $.get((nextPage),
                function (content) {
                    if (page <= max_pages) {
                        $('.content').append($(content).children(".post").fadeIn());
                        page = page + 1;
                    }
                });
        }
    });
});