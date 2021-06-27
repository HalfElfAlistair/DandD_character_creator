$(document).ready(function() {

    // Hides certain sections on opening
    $("#card-display-toggle, #nav-section, #character-card, #physical-creation, #subrace-section, #language-section, #draconic-ancestry-section, #draconic-ancestry-table, #name-section, #age-section, #physique-section, #sumbit-section, #subrace-subject").hide();

    // Assigns a variable to access localStorage
    let storedData = Object.entries(localStorage);

    // Loops through localStorage and prints stored character names as select options
    $(window).ready(function() {
        for (let i = 0; storedData.length; i++) {
            $("#character-selector").append(`<option class="character-option">${storedData[i][0]}</option>`);
        }
    });

});