$(document).ready(function() {

    // Hides certain sections on opening
    $("#character-card, #subrace-section, #language-section, #draconic-ancestry-section, #draconic-ancestry-table, #name-section, #age-section, #physique-section").hide();

    // Creates a function that proceeds when a new option is chosen from the race selector
    $("#race-list").change(function() {

        // Establishes raceSelection input value
        let raceSelection = $("#race-list option:selected").val();

        // Prints race input value to character card
        $("#race-card").html("<b>Race: </b>" + raceSelection);

        // Assigns the races object from race_data to a variable
        let racesObject = Object.entries(races);

        // Resets subrace, language and draconic-ancestry selectors when race selection is changed
        $(".subrace-selector").val($('.subrace-selector').find("option[selected]").val());
        $("#language-selector").val($('#language-selector').find("option[selected]").val());
        $("#draconic-ancestry-selector").val($('#draconic-ancestry-selector').find("option[selected]").val());

        // Defaults to remove and size, speed, darkvision and language information, and hide language & draconic-ancestry sections if race is changed
        $("#size-card").html("<b>Size:</b>");
        $("#speed-card").html("<b>Speed:</b>");
        $("#darkvision-card").html("<b>Darkvision Range:</b>");
        $("#language-section, #draconic-ancestry-section").hide();

        // Ensures #physical-creation height adjusts to contain language dropdowns, #draconic-ancestry-table etc when visible
        $(window).click(function() {
            $("#physical-creation").css("height","auto");
        })

        // Resets css for #physical-creation sections when race is changed
        $("#physical-creation").css("height","288px");

        // // Defaults to remove 'Elvish' option from language selectors when race is changed
        // $("#elvish-language-option").remove();

        // Loops through racesObject and assigns variables for child objects and their data
        for (let i = 0; i < racesObject.length; i++) {
            let raceTitle = racesObject[i][0]
            let raceData = Object.entries(racesObject[i][1]);

            // Matches the chosen race with the corresponding object, from which data can be drawn
            if (raceTitle === raceSelection) {

                // Defaults to refresh by removing the #dragon-type-card, selector and table data when user changes their race selection 
                $("#dragon-type-card").remove();
                $(".dragon-select").remove();
                $(".dragon-data").remove();

                // Defaults to remove 'Elvish' option from language selectors when race is changed
                $("#elvish-language-option").remove();
                
                // Shows draconic-ancestry-section if Dragonborn is selected from race dropdown
                if (raceSelection === "Dragonborn") {
                    $("#draconic-ancestry-section").show();

                    // Changes #physical-creation height to 466px when raceSelection is Dragonborn but only when #race-section is visible as this section contains the draconic ancestry table, the others don't need the extra space 
                    $("#physical-creation").css("height","581px");
                    $(".nav-button").click(function() {
                        if ($("#race-section").is(":visible")) {
                            $("#physical-creation").css("height","581px");
                        } else {
                            $("#physical-creation").css("height","288px");
                        }
                    })

                    // Establishes a variable for the dragonType
                    let dragonTypeObject = Object.entries(raceData[13][1])

                    // Loops through dragonTypeObject, creates a variable for the dragon titles & data, uses titles for options in #draconic-ancestry-selector and titles and data to fill #draconic-ancestry-table
                    for (let d = 0; d < dragonTypeObject.length; d++) {
                        let dragonTitle = dragonTypeObject[d][0];
                        let dragonData = Object.entries(dragonTypeObject[d][1])
                        $("#draconic-ancestry-selector").append(`<option class="dragon-select">${dragonTitle}</option>`);
                        $("#draconic-ancestry-table").append(`<tr class="dragon-data"><td>${dragonTitle}</td><td>${dragonData[0][1]}</td><td>${dragonData[1][1]}</td></tr>`);
                    }

                    // Performs processes when a new selection is made from #draconic-ancestry-selector
                    $("#draconic-ancestry-selector").change(function() {

                        // Defaults to refresh by removing the #dragon-type-card when user changes their selection 
                        $("#dragon-type-card").remove();

                        // creates a new variable for the selected dragon type
                        let dragonSelection = $("#draconic-ancestry-selector option:selected").val();

                        // Loops through dragonTypeObject, establishes title and data variables, matches title to selection, prints title and data to trait
                        for (let d = 0; d < dragonTypeObject.length; d++) {
                            let dragonTitle = dragonTypeObject[d][0];
                            let dragonData = Object.entries(dragonTypeObject[d][1])
                            if (dragonSelection === dragonTitle) {
                                $("#traits-card").append(`<p id="dragon-type-card"><b>Dragon Type:</b> ${dragonTitle}. <b>${dragonData[0][0]}:</b> ${dragonData[0][1]}. <b>${dragonData[1][0]}:</b> ${dragonData[1][1]}.</p>`);
                            }
                        }
                    })
                }

                // Defaults to remove additional trait information when race selection is changed
                $(".additional-trait").remove();

                // Assigns a variable for the child object containing subraces
                let subraceObject = Object.entries(raceData[1][1]);

                // Toggles between show and hide for the subrace option depending on whether or not a race has any
                if (subraceObject == "") {
                    $("#subrace-section").hide();

                    // Assigns a function for the physique roller using respective data for non-subrace races. Once pressed, the physique roller button will enable a height and weight value, produced by the function, to be printed in HTML
                    $("#physique-roller").click(function() {
                        let physiqueArray = (physiqueCalculator(raceData[3][1], raceData[2][1], raceData[4][1], raceData[5][1], raceData[6][1]));
                        $("#height-card").html("<b>Height: </b>" + physiqueArray[0]);
                        $("#weight-card").html("<b>Weight: </b>" + physiqueArray[1]);
                    })

                    // Prints respective size, speed, darkvision and language information for race
                    $("#size-card").html("<b>Size: </b>" + raceData[7][1]);
                    $("#speed-card").html("<b>Speed: </b>" + raceData[8][1] + "ft");
                    $("#darkvision-card").html("<b>Darkvision Range: </b>" + raceData[11][1] + "ft");
                    $("#languages-card").html("<b>Languages: </b>" + raceData[9][1]);

                    // Displays the additional language selector if applicable to the race selection
                    if (raceData[10][1] === 1) {
                        $("#language-section").show();

                        // Adds an 'Elvish' option if the selected race is 'Human' (otherwise removing the option).
                        if (raceSelection === "Human") {
                            $("#language-selector").append(`<option id="elvish-language-option">Elvish</option>`);
                        } else {
                            $("#elvish-language-option").remove();
                        }

                        // Appends the updated language information to ##languages-card
                        $("#language-selector").change(function() {
                            $("#languages-card").html("<b>Languages: </b>" + raceData[9][1] + ", " + $("#language-selector option:selected").val());
                        })
                    }

                    // Prints any relevant additional trait information
                    let traits = Object.entries(raceData[12][1]);
                        for (let t = 0; t < traits.length; t++) {
                            $("#traits-card").append(`<p class="additional-trait"><b>${traits[t][0]}:</b> ${traits[t][1]}</p>`);
                        }

                } else {
                    $("#subrace-section").show();
                }

                // Defaults to remove any subrace selector options so there are no duplicates or subraces with an incorrect race assignment
                $(".subrace-option").remove();

                // Loops through the relevant subrace titles and prints each one as a selector option in HTML
                for (let s = 0; s < subraceObject.length; s++) {
                    $(".subrace-selector").append(`<option class="subrace-option">${subraceObject[s][0]}</option>`);
                }

                // Once a subrace is selected from the dropdown, the function will assign the chosen subrace as a variable and perform some relevant tasks
                $(".subrace-selector").change(function() {
                    let subraceSelection = $(".subrace-selector option:selected").val();

                    // Appends the selected subrace to the printed HTML for race
                    $("#race-card").html("<b>Race: </b>" + raceSelection + " (<b>Subrace: </b>" + subraceSelection + ")");

                    // Resets default-subrace and language selector option when subrace selection is changed
                    $("#language-default").remove();
                    $("#language-selector").prepend(`<option id="language-default" disabled selected value>Choose a language!</option>`);

                    // Loops through subraceObject and assigns variables for child objects and their data
                    for (let s = 0; s < subraceObject.length; s++) {
                        let subraceTitle = subraceObject[s][0];
                        let subraceData = Object.entries(subraceObject[s][1]);

                        // Uses the relevant subrace data to operate a function for the physique roller button, which enables a height and weight value to be printed in HTML
                        if (subraceTitle === subraceSelection) {
                            $("#physique-roller").click(function() {
                                let physiqueArray = (physiqueCalculator(subraceData[1][1], subraceData[0][1], subraceData[2][1], subraceData[3][1], subraceData[4][1]));
                                $("#height-card").html("<b>Height: </b>" + physiqueArray[0]);
                                $("#weight-card").html("<b>Weight: </b>" + physiqueArray[1]);
                            })

                            // Prints respective size, speed, darkvision and language information for subrace
                            $("#size-card").html("<b>Size: </b>" + subraceData[5][1]);
                            $("#speed-card").html("<b>Speed: </b>" + subraceData[6][1] + "ft");
                            $("#darkvision-card").html("<b>Darkvision Range: </b>" + subraceData[9][1]  + "ft");
                            $("#languages-card").html("<b>Languages: </b>" + subraceData[7][1]);

                            // Displays the additional language selector if applicable to the subrace selection
                            if (subraceData[8][1] === 1) {
                                $("#language-section").show();

                                // Removes the 'Elvish' option if previously added
                                $("#elvish-language-option").remove();

                                // Appends the updated language information to #languages-card
                                $("#language-selector").change(function() {
                                    $("#languages-card").html("<b>Languages: </b>" + subraceData[7][1] + ", " + $("#language-selector option:selected").val());
                                })
                            } else {
                                $("#language-section").hide();
                            }

                            // Defaults to remove additional trait information when subrace selection is changed
                            $(".additional-trait").remove();

                            // Prints any relevant additional trait information
                            let traits = Object.entries(subraceData[10][1]);
                            for (let t = 0; t < traits.length; t++) {
                                $("#traits-card").append(`<p class="additional-trait"><b>${traits[t][0]}:</b> ${traits[t][1]}</p>`);
                            }
                        }

                    }

                })


                // Assigns a maximum value to the age selector input, based on chosen race
                $("#character-age").attr("max", raceData[0][1]);
                

            }

        }
        
    });

    // name function
    $("#character-name").change(function() {
        let nameSelection = $("#character-name").val();
        $("#name-card").html("<b>Name: </b>" + nameSelection);
    });

    // age function
    $("#character-age").change(function() {
        let ageSelection = $("#character-age").val();
        $("#age-card").html("<b>Age: </b>" + ageSelection);
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