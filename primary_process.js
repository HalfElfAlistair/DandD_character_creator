$(document).ready(function() {

    // Hides certain sections on opening
    $("#total-reset, #card-display-toggle, #nav-section, #character-card, #physical-creation, #subrace-section, #language-section, #draconic-ancestry-section, #draconic-ancestry-table, #name-section, #age-section, #physique-section, #physique-table, #sumbit-section, #subrace-subject").hide();

    // if ($("#total-reset").is("visible")) {
    //     alert("Testing")
    //     // $("body").css("background-color","blue")
    // }

    // $("#dark-light-toggle").css({"position":"relative","left":"50%","margin-right":"-50%","transform":"translate(-50%, 0)"})

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

        // if ($("#row-1").width() < 537) {
        //     $("#dark-light-toggle").css({"margin-left":"auto","margin-right":"0"});
        // } else if (($("#row-1").width() < 960) && ($("#row-1").width() > 536)) {
        //     $("#dark-light-toggle").css({"margin-top":"35px","margin-right":"35px","margin-bottom":"35px","margin-left":"auto"});
        // } else {
        //     $("#dark-light-toggle").css({"margin-left":"auto","margin-right":"7%"});
        // }
        // $("#dark-light-toggle").css({"margin-left":"auto","margin-right":"0"});

        // $("#dark-light-toggle").css("margin-left","auto")
        // $("#dark-light-toggle").css("margin-right","0")

        // $("#dark-light-toggle").css({"position":"","left":"","margin-left":"auto","margin-right":"0","transform":""})
        // // $("#row-1").css({"display":"inline-block","width":"100%"})
        // $("#dark-light-toggle").css("float","right")
        // $("#dark-light-toggle").css("display","inline-block")

        // Displays the physical creation, nav and show-hide card sections
        $("#total-reset, #card-display-toggle, #physical-creation, #nav-section").show();

        raceChangeResets()

        // When "New Character" is selected, input fields and character card reset
        if ($("#character-selector").val() == "New Character") {
            fieldReset();

            // Enables the physical creation function so the character can be built
            newCharacterProcess();


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

                    // Submits the character-card to localStorage as a value, with the character-name as a key
                    $("#submit-button").click(function() {
                        saveChecks()
                    })
                }
            }
        }


        // Submits the character-card to localStorage as a value, with the character-name as a key
        $("#submit-button").click(function() {
            saveChecks()
        })



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

    $("#dragonborn-table-toggle").click(function() {
        if ($("#dragonborn-table-toggle").text() == "Show Table") {
            $("#draconic-ancestry-table").show();
            $("#dragonborn-table-toggle").text("Hide Table");
        } else {
            $("#draconic-ancestry-table").hide();
            $("#dragonborn-table-toggle").text("Show Table");
        }
    })

    $("#physique-table-toggle").click(function() {
        if ($("#physique-table-toggle").text() == "Show Table") {
            $("#physique-table").show();
            $("#physique-table-toggle").text("Hide Table");
        } else {
            $("#physique-table").hide();
            $("#physique-table-toggle").text("Show Table");
        }
    })

    $("#physique-reset").click(function() {
        let resetCheck = confirm("Are you sure you wish to reset this value?");
        if (resetCheck == true) {
            $("#height-card").text("");
            $("#weight-card").text("");
        }
    })

    $("#total-reset").click(function() {
        let resetCheck = confirm("Are you sure you wish to reset everything?");
        if (resetCheck == true) {
            $(".card-entries").text("");
            raceChangeResets();
            $("#race-list").val($('#race-list').find("option[selected]").val());
            $("#character-name, #character-age").val("");
            $(".additional-trait, #dragon-type-area").remove();
            $("#subrace-section, #age-info").hide();
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