function characterEditProcess() {

    var racesObject = Object.entries(races);

    // Loops through race data, assigns variables from it
    for (let i = 0; i < racesObject.length; i++) {
        var raceTitle = racesObject[i][0]
        var raceData = Object.entries(racesObject[i][1]);

        // Matches loaded race information with that from race data
        if (raceTitle == $("#race-card").text()) {

            // Adds a little info on the selected race's life expectancy
            if ($("#race-card").text() == "Elf") {
                $("#age-info").text("An " + $("#race-card").text() + " tends to live to around " + raceData[0][1] + " years.");
            } else {
                $("#age-info").text("A " + $("#race-card").text() + " tends to live to around " + raceData[0][1] + " years.");
            }

            // If the subrace-card contains information then the subrace section is displayed
            if ($("#subrace-card").text() !== "") {
                $("#subrace-section").show();

                // Fills the subrace selector with relevant options and auto selects the corresponding one from the loaded character
                subraceSelectorProcess(Object.entries(raceData[1][1]))
                $("#subrace-selector").val($("#subrace-card").text());

                // Loops through subrace data and assigns variables
                let subraceObject = Object.entries(raceData[1][1]);
                for (let s = 0; s < subraceObject.length; s++) {
                    let subraceTitle = subraceObject[s][0];
                    let subraceData = Object.entries(subraceObject[s][1]);

                    // Performs some resets for a change in subrace selection
                    $("#subrace-selector").change(function() {
                        // Defaults to remove additional trait information when subrace selection is changed
                        $(".additional-trait").remove();

                        // Resets to remove #extra-languages-card when subrace is changed
                        $("#extra-languages-card").remove();
                    })
                    
                    // Locates the corresponding subrace information from race data for use in any functions to edit the character
                    if (subraceTitle == $("#subrace-selector option:selected").val()) {
                        raceDependenciesProcess(subraceData[5][1], subraceData[6][1], subraceData[9][1], subraceData[7][1]);

                        traitsProcess(Object.entries(subraceData[10][1]));

                        languageProcess(subraceData[8][1], subraceData[7][1], $("#race-list option:selected").val())

                        // Sets language selection to auto mirror that of the extra-langugages-card
                        $("#language-selector").val($("#extra-languages-card").text())

                        $("#physique-roller").click(function() {
                            let physiqueArray = (physiqueCalculator(subraceData[1][1], subraceData[0][1], subraceData[2][1], subraceData[3][1], subraceData[4][1]));
                            $("#height-card").text(physiqueArray[0]);
                            $("#weight-card").text(physiqueArray[1]);
                        })
                    }

                }

                // Resets information and display then performs actions when race selection is changed
                $("#race-list").change(function() {

                    

                    raceChangeResets()
                    $("#subrace-section, #subrace-subject").hide();
                    $("#subrace-card").text("");

                    

                    // loops through race object and assigns variables for the data
                    for (let i = 0; i < racesObject.length; i++) {
                        let raceData = Object.entries(racesObject[i][1]);

                        // Matches race selection with corresponding object data and amends character card
                        if ($("#race-list option:selected").val() == racesObject[i][0]) {
                            $("#race-card").text($("#race-list option:selected").val());

                            // Assigns a maximum value to the age selector input, based on chosen race
                            $("#character-age").attr("max", raceData[0][1]);

                            // Adds a little info on the selected race's life expectancy
                            if ($("#race-list option:selected").val() == "Elf") {
                                $("#age-info").text("An " + $("#race-list option:selected").val() + " tends to live to around " + raceData[0][1] + " years.");
                            } else {
                                $("#age-info").text("A " + $("#race-list option:selected").val() + " tends to live to around " + raceData[0][1] + " years.");
                            }

                            // Shows draconic-ancestry-section if Dragonborn is selected from race dropdown
                            if ($("#race-list option:selected").val() == "Dragonborn") {
                                $("#draconic-ancestry-section").show();

                                draconicAncestrySelectorProcess(Object.entries(raceData[13][1]))

                                // Performs processes when a new selection is made from #draconic-ancestry-selector
                                $("#draconic-ancestry-selector").change(function() {
                                    draconicAncestryProcess(Object.entries(raceData[13][1]), $("#draconic-ancestry-selector option:selected").val());
                                })
                            }

                            let subraceObject = Object.entries(raceData[1][1]);
                            if (subraceObject == "") {
                                raceDependenciesProcess(raceData[7][1], raceData[8][1], raceData[11][1], raceData[9][1]);

                                // Defaults to remove additional trait information when subrace selection is changed
                                $(".additional-trait").remove();

                                traitsProcess(Object.entries(raceData[12][1]));

                                languageProcess(raceData[10][1], raceData[9][1], $("#race-list option:selected").val());

                                $("#physique-roller").click(function() {
                                    let physiqueArray = (physiqueCalculator(raceData[3][1], raceData[2][1], raceData[4][1], raceData[5][1], raceData[6][1]));
                                    $("#height-card").text(physiqueArray[0]);
                                    $("#weight-card").text(physiqueArray[1]);
                                })

                            } else {
                                
                                $("#subrace-section").show();
                                $(".subrace-option").remove();
                                $(".additional-trait").remove();
                                subraceSelectorProcess(Object.entries(raceData[1][1]))
                                $("#subrace-selector").val($('#subrace-selector').find("option[selected]").val());
                                $("#subrace-subject").show();

                                // Loops through subraceObject and assigns variables for child objects and their data
                                for (let s = 0; s < subraceObject.length; s++) {
                                    let subraceTitle = subraceObject[s][0];
                                    let subraceData = Object.entries(subraceObject[s][1]);

                                    $("#physique-roller").click(function() {
                                        let physiqueArray = (physiqueCalculator(subraceData[1][1], subraceData[0][1], subraceData[2][1], subraceData[3][1], subraceData[4][1]));
                                        $("#height-card").text(physiqueArray[0]);
                                        $("#weight-card").text(physiqueArray[1]);
                                    })
                                }
                                
                                $("#subrace-selector").change(function() {
                                    for (let s = 0; s < subraceObject.length; s++) {
                                        let subraceTitle = subraceObject[s][0];
                                        let subraceData = Object.entries(subraceObject[s][1]);

                                        if (subraceTitle == $("#subrace-selector option:selected").val()) {
                                            raceDependenciesProcess(subraceData[5][1], subraceData[6][1], subraceData[9][1], subraceData[7][1]);
                                        
                                            // Defaults to remove additional trait information when subrace selection is changed
                                            $(".additional-trait").remove();

                                            traitsProcess(Object.entries(subraceData[10][1]));

                                            languageProcess(subraceData[8][1], subraceData[7][1], $("#race-list option:selected").val())

                                            $("#physique-roller").click(function() {
                                                let physiqueArray = (physiqueCalculator(subraceData[1][1], subraceData[0][1], subraceData[2][1], subraceData[3][1], subraceData[4][1]));
                                                $("#height-card").text(physiqueArray[0]);
                                                $("#weight-card").text(physiqueArray[1]);
                                            })

                                            
                                        }
                                    }
                                }) 
                            }
                        }  
                    }

                })
                $("#subrace-selector").change(function() {
                    // Prints both the race and subrace selections
                    $("#race-card").text($("#race-list option:selected").val());
                    $("#subrace-card").text($("#subrace-selector").val());
                })
            } else {
                $("#subrace-section").hide();

                languageProcess(raceData[10][1], raceData[9][1], $("#race-list option:selected").val());

                // Sets language selection to auto mirror that of the extra-langugages-card
                $("#language-selector").val($("#extra-languages-card").text())

                // Shows draconic-ancestry-section if Dragonborn is selected from race dropdown
                if ($("#race-list option:selected").val() === "Dragonborn") {
                    $("#draconic-ancestry-section").show();

                    draconicAncestrySelectorProcess(Object.entries(raceData[13][1]))

                    // Sets dragonic ancestry selection to auto mirror that of the dragon-type-card
                    $("#draconic-ancestry-selector").val($("#dragon-type-card").text())

                    $("#draconic-ancestry-selector").change(function() {
                        // Loops through race data, assigns variables from it
                        for (let i = 0; i < racesObject.length; i++) {
                            let raceData = Object.entries(racesObject[i][1]);

                            draconicAncestryProcess(Object.entries(raceData[13][1]), $("#draconic-ancestry-selector option:selected").val());
                        } 
                    })
                }

                $("#race-list").change(function() {

                    // Establishes raceSelection input value
                    let raceSelection = $("#race-list option:selected").val();
            
                    // Prints race input value to character card
                    $("#race-card").text(raceSelection);
            
                    // Assigns the races object from race_data to a variable
                    let racesObject = Object.entries(races);
            
                    raceChangeResets()
            
                    // Ensures #physical-creation height adjusts to contain language dropdowns, #draconic-ancestry-table etc when visible
                    $(window).click(function() {
                        $("#physical-creation").css("height","auto");
                    })
            
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
                                    draconicAncestryProcess(Object.entries(raceData[13][1]), $("#draconic-ancestry-selector option:selected").val());
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
            
                                // Loops through subraceObject and assigns variables for child objects and their data
                                for (let s = 0; s < subraceObject.length; s++) {
                                    let subraceTitle = subraceObject[s][0];
                                    let subraceData = Object.entries(subraceObject[s][1]);
            
                                    $("#physique-roller").click(function() {
                                        let physiqueArray = (physiqueCalculator(subraceData[1][1], subraceData[0][1], subraceData[2][1], subraceData[3][1], subraceData[4][1]));
                                        $("#height-card").text(physiqueArray[0]);
                                        $("#weight-card").text(physiqueArray[1]);
                                    })
                                }
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
            
                                // Resets to remove #extra-languages-card when subrace is changed
                                $("#extra-languages-card").remove();
            
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
            
                            if (raceSelection == "Elf") {
                                $("#age-info").text("An " + raceSelection + " tends to live to around " + raceData[0][1] + " years.");
                            } else {
                                $("#age-info").text("A " + raceSelection + " tends to live to around " + raceData[0][1] + " years.");
                            }
            
                        }
            
                    }
                    
                });
            }
        }
        
    }

    // Resets height and weight card values when race selection changes
    $("#race-list").change(function() {
        $("#height-card").text("");
        $("#weight-card").text("");
    })

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