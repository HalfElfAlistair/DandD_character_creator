function physicalCreationProcess() {

    // Creates a function that proceeds when a new option is chosen from the race selector
    $("#race-list").change(function() {

        // Establishes raceSelection input value
        let raceSelection = $("#race-list option:selected").val();

        // Prints race input value to character card
        $("#race-card").text(raceSelection);

        // Assigns the races object from race_data to a variable
        let racesObject = Object.entries(races);

        // // Resets subrace, language and draconic-ancestry selectors when race selection is changed
        // $("#subrace-selector").val($('#subrace-selector').find("option[selected]").val());
        // $("#language-selector").val($('#language-selector').find("option[selected]").val());
        // $("#draconic-ancestry-selector").val($('#draconic-ancestry-selector').find("option[selected]").val());

        // // Defaults to refresh by removing the #dragon-type-card, selector and table data when user changes their race selection 
        // $("#dragon-type-area, .dragon-select, .dragon-data").remove();

        // // Defaults to hiding draconic ancestry and language sections when the selected race changes
        // $("#draconic-ancestry-section, #language-section").hide();

        raceChangeResets()

        // // Defaults to remove and size, speed, darkvision and language information, and hide language & draconic-ancestry sections if race is changed
        // $("#size-card").text("");
        // $("#speed-card").text("");
        // $("#darkvision-card").text("");
        // $("#languages-card").text("");

        // raceDependenciesReset()

        // Ensures #physical-creation height adjusts to contain language dropdowns, #draconic-ancestry-table etc when visible
        $(window).click(function() {
            $("#physical-creation").css("height","auto");
        })

        // Resets css for #physical-creation sections when race is changed
        // $("#physical-creation").css("height","288px");

        // // Defaults to remove 'Elvish' option from language selectors when race is changed
        // $("#elvish-language-option").remove();

        // Loops through racesObject and assigns variables for child objects and their data
        for (let i = 0; i < racesObject.length; i++) {
            let raceTitle = racesObject[i][0]
            let raceData = Object.entries(racesObject[i][1]);

            // Matches the chosen race with the corresponding object, from which data can be drawn
            if (raceTitle === raceSelection) {

                // Defaults to remove 'Elvish' option from language selectors when race is changed
                $("#elvish-language-option").remove();
                
                // Shows draconic-ancestry-section if Dragonborn is selected from race dropdown
                if (raceSelection === "Dragonborn") {
                    $("#draconic-ancestry-section").show();

                    draconicAncestrySelectorProcess(Object.entries(raceData[13][1]))

                    // Performs processes when a new selection is made from #draconic-ancestry-selector
                    $("#draconic-ancestry-selector").change(function() {
                        draconicAncestryProcess(Object.entries(raceData[13][1]));
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
                        $("#height-card").text(physiqueArray[0]);
                        $("#weight-card").text(physiqueArray[1]);
                    })

                    raceDependenciesProcess(raceData[7][1], raceData[8][1], raceData[11][1], raceData[9][1]);

                    languageProcess(raceData[10][1], raceData[9][1], $("#race-list option:selected").val());

                    traitsProcess(Object.entries(raceData[12][1]));

                } else {
                    $("#subrace-section").show();
                }

                // Defaults to remove any subrace selector options so there are no duplicates or subraces with an incorrect race assignment
                $(".subrace-option").remove();

                subraceSelectorProcess(Object.entries(raceData[1][1]))

                // Once a subrace is selected from the dropdown, the function will assign the chosen subrace as a variable and perform some relevant tasks
                $("#subrace-selector").change(function() {

                    let subraceSelection = $("#subrace-selector option:selected").val();

                    // Displays subrace-subject
                    $("#subrace-subject").show();

                    // Prints both the race and subrace selections
                    $("#race-card").text(raceSelection);
                    $("#subrace-card").text(subraceSelection);

                    // Resets language selector option when subrace selection is changed
                    $("#language-selector").val($('#language-selector').find("option[selected]").val());

                    // Loops through subraceObject and assigns variables for child objects and their data
                    for (let s = 0; s < subraceObject.length; s++) {
                        let subraceTitle = subraceObject[s][0];
                        let subraceData = Object.entries(subraceObject[s][1]);

                        // Uses the relevant subrace data to operate a function for the physique roller button, which enables a height and weight value to be printed in HTML
                        if (subraceTitle === subraceSelection) {
                            $("#physique-roller").click(function() {
                                let physiqueArray = (physiqueCalculator(subraceData[1][1], subraceData[0][1], subraceData[2][1], subraceData[3][1], subraceData[4][1]));
                                $("#height-card").text(physiqueArray[0]);
                                $("#weight-card").text(physiqueArray[1]);
                            })

                            raceDependenciesProcess(subraceData[5][1], subraceData[6][1], subraceData[9][1], subraceData[7][1]);

                            languageProcess(subraceData[8][1], subraceData[7][1], $("#race-list option:selected").val())

                            // Defaults to remove additional trait information when subrace selection is changed
                            $(".additional-trait").remove();

                            traitsProcess(Object.entries(subraceData[10][1]))
                        }

                    }

                })


                // Assigns a maximum value to the age selector input, based on chosen race
                $("#character-age").attr("max", raceData[0][1]);
                

            }

        }
        
    });

    // Prints chosen name to character card
    $("#character-name").change(function() {
        $("#name-card").text($("#character-name").val());
    });

    // age function prints ageselection value to card if greater than 1 and less than 4 digits length
    $("#character-age").change(function() {
        let ageSelection = $("#character-age").val();
        if (ageSelection < 1) {
            $("#age-card").text("");
        } else if (/[0-9]{4}/.test(ageSelection) == true) {
            $("#age-card").text("");
        } else {
            $("#age-card").text(ageSelection);
        }
    });

}