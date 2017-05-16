$(function () {
    $('.my-slider').unslider({
        autoplay: true,
        speed: 1000,
        delay: 5000,
        arrows: false
    });

    // Выравнивание описание товара в карточке
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each( function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
        columns.height(tallestcolumn);
    }

    $(document).ready(function() { setEqualHeight($(".products-text")); });
});

