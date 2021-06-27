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
        } else {
            // Loops through localStorage and finds a name entry which matches the select value, then replaces the character-card html with that which was stored. Also populates input fields with added card data in preparation for using submit button to update characters
            for (let i = 0; storedData.length; i++) {
                if (storedData[i][0] == $("#character-selector").val()) {
                    $("#character-card").html(storedData[i][1]);
                    $("#character-name").val($("#name-card").text());
                    $("#character-age").val($("#age-card").text())
                    $("#race-list").val($("#race-card").text());

                    // Defaults to remove any subrace selector options so there are no duplicates or subraces with an incorrect race assignment
                    $(".subrace-option").remove();

                    characterEditProcess()

                    // Submits character, plus any amendments, to localStorage
                    $("#submit-button").click(function(){
                        localStorage.setItem($("#character-name").val(), $("#character-card").html());
                    })
                }
            }
        }


    });

    // Hides #previous button on load
    $("#previous").hide();

    // Ensures #previous button is hidden for the first section and #next button is hidden from the last section
    $("body").click(function() {
    if ($("#physical-creation section:first").is(":visible")) {
        $("#previous").hide();
        $("#next").show();
    } else if ($("#physical-creation section:last").is(":visible")) {
        $("#next").hide();
        $("#previous").show();
    } else {
        $("#next").show();
        $("#previous").show();
    }
    })

    // Nav and show/hide card button functions
    $("#next").click(function() {
        $("#physical-creation section:visible").next().show().prev().hide();
    });

    $("#previous").click(function() {
        $("#physical-creation section:visible").prev().show().next().hide();
    });

    $("#show-hide-toggle").click(function() {
        if ($("#show-hide-toggle").text() == "Show Card") {
            $("#character-card").show();
            $("#show-hide-toggle").text("Hide Card");
        } else {
            $("#character-card").hide();
            $("#show-hide-toggle").text("Show Card");
        }
    })

    $("#show-hide-table").click(function() {
        if ($("#show-hide-table").text() == "Show Table") {
            $("#draconic-ancestry-table").show();
            $("#show-hide-table").text("Hide Table");
        } else {
            $("#draconic-ancestry-table").hide();
            $("#show-hide-table").text("Show Table");
        }
    })

    $("#dark-light-toggle").click(function() {
        if ($("#dark-light-toggle").text() == "Darkvision") {
            $('link[href="assets/stylesheets/css/daylight_style.css"]').attr("href", "assets/stylesheets/css/darkvision_style.css");
            $("#dark-light-toggle").text("Daylight");
        } else {
            $('link[href="assets/stylesheets/css/darkvision_style.css"]').attr("href", "assets/stylesheets/css/daylight_style.css");
            $("#dark-light-toggle").text("Darkvision");
        }
    })

});