$(function () {
    // vitricuaedu = $('#khoiedu').offset().top;
    //console.log(vitricuaedu);

    $(".xuong,.kn").click(function () {
        $('body,html').animate({ scrollTop: $('#khoiedu').offset().top }, 500)
    })

    $(".sp").click(function () {
        $('body,html').animate({ scrollTop: $('#khoisanpham').offset().top }, 500)
    })
    $(".cm").click(function () {
        $('body,html').animate({ scrollTop: $('#khoicomment').offset().top }, 500)
    })
})


