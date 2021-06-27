function characterEditProcess() {

    let racesObject = Object.entries(races);

    for (let i = 0; i < racesObject.length; i++) {
        let raceTitle = racesObject[i][0]
        let raceData = Object.entries(racesObject[i][1]);
        if (raceTitle == $("#race-card").text()) {
            if ($("#subrace-card").text() !== "") {
                $("#subrace-section").show();
                subraceSelectorProcess(Object.entries(raceData[1][1]))
                $("#subrace-selector").val($("#subrace-card").text());
                $("#race-list").change(function() {
                    raceChangeResets()
                    $("#subrace-section, #subrace-subject").hide();
                    $("#subrace-card").text("");

                    for (let i = 0; i < racesObject.length; i++) {
                        let raceData = Object.entries(racesObject[i][1]);
                        if ($("#race-list option:selected").val() == racesObject[i][0]) {
                            $("#race-card").text($("#race-list option:selected").val());

                            // Assigns a maximum value to the age selector input, based on chosen race
                            $("#character-age").attr("max", raceData[0][1]);

                            // Shows draconic-ancestry-section if Dragonborn is selected from race dropdown
                            if ($("#race-list option:selected").val() == "Dragonborn") {
                                $("#draconic-ancestry-section").show();

                                draconicAncestrySelectorProcess(Object.entries(raceData[13][1]))

                                // Performs processes when a new selection is made from #draconic-ancestry-selector
                                $("#draconic-ancestry-selector").change(function() {
                                    draconicAncestryProcess(Object.entries(raceData[13][1]));
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
                // $("#race-card").text($("#race-list option:selected").val());
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