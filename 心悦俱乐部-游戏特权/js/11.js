$(function () {
    var section = $('#section');
    var x = 0;

    function polling() {
        x += 5;
        section.animate({
            'background-position-y': x + '%',
        }, 600, 'linear');
        setTimeout(polling, 300)
    }

    polling();
})