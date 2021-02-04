$(function () {
    // vitricuaedu = $('#khoiedu').offset().top;
    //console.log(vitricuaedu);

    $(".xuong,.kn").click(function () {
        $('body,html').animate({ scrollTop: $('#khoiedu').offset().top }, 900)
    })

    $(".sp").click(function () {
        $('body,html').animate({ scrollTop: $('#khoisanpham').offset().top }, 900)
    })
})
