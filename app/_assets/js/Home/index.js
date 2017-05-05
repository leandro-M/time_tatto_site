const homeIndex = {
    ready: function() {
        $(document).scroll(function(e) {
            var top = $(window).scrollTop();

            if(top > 200) {
                $('.header').addClass('scrolled');
            }else {
                $('.header').removeClass('scrolled');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', homeIndex.ready, false);