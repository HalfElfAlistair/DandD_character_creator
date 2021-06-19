function raceChangeResets() {
    // Resets subrace, language and draconic-ancestry selectors when race selection is changed
    $("#subrace-selector").val($('#subrace-selector').find("option[selected]").val());
    $("#language-selector").val($('#language-selector').find("option[selected]").val());
    $("#draconic-ancestry-selector").val($('#draconic-ancestry-selector').find("option[selected]").val());

    // Defaults to refresh by removing the #dragon-type-card, selector and table data when user changes their race selection 
    $("#dragon-type-area, .dragon-select, .dragon-data").remove();

    // Defaults to hiding draconic ancestry & language sections, as well as #subrace-subject when the selected race changes
    $("#draconic-ancestry-section, #language-section, #subrace-subject").hide();

    // Defaults to remove and size, speed, darkvision, subrace and language information
    $("#size-card").text("");
    $("#speed-card").text("");
    $("#darkvision-card").text("");
    $("#subrace-card").text("");
    $("#languages-card").text("");
}

function raceDependenciesProcess(sizeValue, speedValue, darkvisionValue, languageDefault) {
    $("#size-card").text(sizeValue);
    $("#speed-card").text(speedValue + "ft");
    $("#darkvision-card").text(darkvisionValue + "ft");
    $("#languages-card").text(languageDefault);
}