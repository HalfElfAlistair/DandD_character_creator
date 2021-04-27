$(document).ready(function() {

    // Hides certain sections on opening
    $("#character-card, #subrace-section, #name-section, #age-section, #physique-section").hide();

    // Creates a function that proceeds when a new option is chosen from the race selector
    $("#race-list").change(function() {

        // Establishes raceSelection input value
        let raceSelection = $("#race-list option:selected").val();

        // Prints race input value to character card
        $("#race-card").text("Race: " + raceSelection);

        // Assigns the races object from race_data to a variable
        let racesObject = Object.entries(races);

        // Loops through racesObject and assigns variables for child objects and their data
        for (let i = 0; i < racesObject.length; i++) {
            let raceTitle = racesObject[i][0]
            let raceData = Object.entries(racesObject[i][1]);

            // Matches the chosen race with the corresponding object, from which data can be drawn
            if (raceTitle === raceSelection) {


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
                    $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");

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
                        }

                    }

                })


                // Assigns a maximum value to the age selector input, based on chosen race
                $("#character-age").attr("max", raceData[0][1]);

                

            }
        }


        // Size decider
        if ((raceSelection == "Dragonborn") || (raceSelection == "Dwarf") || (raceSelection == "Elf") || (raceSelection == "Half-Elf") || (raceSelection == "Half-Orc") || (raceSelection == "Human") || (raceSelection == "Tiefling")) {
            $("#size-card").text("Size: Medium")
        } else if ((raceSelection == "Gnome") || (raceSelection == "Halfling")) {
            $("#size-card").text("Size: Small")
        };
        
    });

    // name function
    $("#character-name").change(function() {
        let nameSelection = $("#character-name").val();
        $("#name-card").text("Name: " + nameSelection);
    });

    // age function
    $("#character-age").change(function() {
        let ageSelection = $("#character-age").val();
        $("#age-card").text("Age: " + ageSelection);
    });







    


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

});