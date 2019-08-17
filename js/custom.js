$(document).ready(() => {
    $('#closeMobile').click(() => {
        $('#navbarSupportedContent').removeClass('show')
    })
    $('.nav-item').click(() => {
        $('#navbarSupportedContent').removeClass('show')
    })
    $('#videoBanner').click(() => {
        $('#playerBanner').get(0).play()
    })
    $("#videoModal").on('hide.bs.modal', function(){
        $("#playerBanner").get(0).pause();
    });
    $('.play-video').click((e) => {
        console.log('clicks', e.target)
        $(e.target).css('display', 'none');
        $('video').each(function() {
            $(this).get(0).pause();
            // $(this).prev().show()
            // $(this).attr('controls', 'false');

        })
        $(e.target).next().get(0).play()
        $(e.target).next().attr('controls', 'true');
    })
    $('#messenger').click(() => {
        console.log('in mesenger', $('iframe').find(`[data-testid=dialog_iframe]`));
        $('#fb-root').find(`[data-testid=dialog_iframe]`).attr('class', ' fb_customer_chat_bounce_in_v2')
    })

})
