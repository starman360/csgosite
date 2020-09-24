$(document).ready(function () {
    $("#connect").attr("disabled", true);
    $('#trouble').hide();
    $('#help').hide();
    $("#toscheck").change(function () {
        if (this.checked) {
            $("#connect").attr("disabled", false);
            $("#connect").removeClass("btn-outline-light");
            $("#connect").addClass("btn-light");
            $('#trouble').show();
        }
        if (!this.checked) {
            $("#connect").attr("disabled", true);
            $("#connect").removeClass("btn-light");
            $("#connect").addClass("btn-outline-light");
            $('#trouble').hide();
            $('#help').hide();
        }
    });
    $('#trouble').click(function () {
        $('#help').toggle();
    });

});

wordlist = ['128 Tick', 'FF ON ', 'Buy Armor & Kits ', '20K Max $ ', 'BEST of 20!']

function wordChange() {
    setTimeout(function () {
        let randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        $("#Word").html(randomWord);
        wordChange();
    }, 1000);
}

wordChange();