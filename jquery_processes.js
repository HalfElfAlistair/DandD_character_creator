$(document).ready(function() {

    $("#character-card").hide();
    $("#name-section").hide();

    $("#race-list").change(function() {
        let raceSelection = $("#race-list option:selected").val();
        $("#race-card").text("Race: " + raceSelection);
    });

    $("#character-name").change(function() {
        let nameSelection = $("#character-name").val();
        $("#name-card").text("Name: " + nameSelection);
    });

    $("#next-1").click(function() {
        $("#race-section").hide();
        $("#name-section").show();
    });

    $("#previous-2").click(function() {
        $("#name-section").hide();
        $("#race-section").show();
    });

    $("#show").click(function() {
        $("#character-card").show();
    });

    $("#hide").click(function() {
        $("#character-card").hide();
    });

});