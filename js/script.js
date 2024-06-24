$(document).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(function() {
            window.location.href = "pollo.html";
        }, 3000); // 3000 milisegundos = 3 segundos
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});
