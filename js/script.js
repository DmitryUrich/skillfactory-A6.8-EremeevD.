function init() {
}

let progressBar = 0;

$('#addOne').click(function() {
    progressBar = progressBar + 1;
    $('#myProgressBar').attr("style", "width: " + progressBar + "%");
});

$('#addThree').click(function() {
    progressBar = progressBar + 3;
    $('#myProgressBar').attr("style", "width: " + progressBar + "%");
});

$('#addSeven').click(function() {
    progressBar = progressBar + 7;
    $('#myProgressBar').attr("style", "width: " + progressBar + "%");
});

$(document).ready(init);