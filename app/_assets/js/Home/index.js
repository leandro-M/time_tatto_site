var homeIndex = {

    changeContentMiddle: function() {
        $('[data-class="list-middle"]').click(function(){
            var target = $(this).attr('data-target');

            console.log(target);

            $('[data-class="list-middle"]').removeClass('active');
            $(this).addClass('active');

            $('.toToggle').fadeOut();
            $('[data-class="item-'+target+'"]').fadeIn();
        });
    },

    ready: function() {
        homeIndex.changeContentMiddle();
    }
}

$(document).ready(homeIndex.ready);