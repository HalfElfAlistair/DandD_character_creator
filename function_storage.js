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

function traitsProcess(traits) {
    for (let t = 0; t < traits.length; t++) {
        $("#traits-card").append(`<p class="additional-trait"><b>${traits[t][0]}:</b> ${traits[t][1]}</p>`);
    }
}

function subraceSelectorProcess(subraceObject) {
    // Loops through the relevant subrace titles and prints each one as a selector option in HTML
    for (let s = 0; s < subraceObject.length; s++) {
        $("#subrace-selector").append(`<option class="subrace-option">${subraceObject[s][0]}</option>`);
    }
}

function languageProcess(languageAllowance, languageDefault, raceSelection) {
    // Displays the additional language selector if applicable to the race selection
    if (languageAllowance === 1) {
        $("#language-section").show();

        // Removes the 'Elvish' option if previously added
        $("#elvish-language-option").remove();

        // Adds an 'Elvish' option if the selected race is 'Human' (otherwise removing the option).
        if (raceSelection === "Human") {
            $("#language-selector").append(`<option id="elvish-language-option">Elvish</option>`);
        } else {
            $("#elvish-language-option").remove();
        }

        // Appends the updated language information to #languages-card
        $("#language-selector").change(function() {
            $("#languages-card").text(languageDefault + ", " + $("#language-selector option:selected").val());
        })
    } else {
        $("#language-section").hide();
    }
}