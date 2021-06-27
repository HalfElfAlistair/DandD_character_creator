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

    // Function for different outcomes based on character selector choice
    $("#character-selector").change(function() {

        // Displays the physical creation, nav and show-hide card sections
        $("#card-display-toggle, #physical-creation, #nav-section").show();

        raceChangeResets()

        // When "New Character" is selected, input fields and character card reset
        if ($("#character-selector").val() == "New Character") {
            fieldReset();

            // Enables the physical creation function so the character can be built
            newCharacterProcess();

            // Submits the character-card to localStorage as a value, with the character-name as a key
            $("#submit-button").click(function() {
                localStorage.setItem($("#character-name").val(), $("#character-card").html());
            })
        }


    });

});