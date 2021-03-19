$(document).ready(function() {

    $("#character-card").hide();

    $("#race-list").click(function() {
        $("#character-card").show();
    });

    $("#submit-button").click(function() {
        let raceSelection = $("#race-list option:selected").val();
        $("#race-card").text("Race: " + raceSelection);
    });

});