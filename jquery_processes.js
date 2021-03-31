$(document).ready(function() {

        // Hides certain sections on opening
    $("#character-card, #name-section, #subrace-section, #age-section, .subraces").hide();

        // Creates a function that proceeds when a new option is chosen from the race selector
    $("#race-list").change(function() {

            // Establishes raceSelection input value
        let raceSelection = $("#race-list option:selected").val();

            // Prints race input value to character card
        $("#race-card").text("Race: " + raceSelection);

            // subrace selector show/hide toggles
        if (raceSelection == "Dwarf") {
            $(".subraces").hide();
            $("#subrace-section, #subrace-dwarf").show();
            $("#dwarf-subrace-list").change(function() {
                let subraceSelection = $("#dwarf-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else if (raceSelection == "Elf") {
            $(".subraces").hide();
            $("#subrace-section, #subrace-elf").show();
            $("#elf-subrace-list").change(function() {
                let subraceSelection = $("#elf-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else if (raceSelection == "Gnome") {
            $(".subraces").hide();
            $("#subrace-section, #subrace-gnome").show();
            $("#gnome-subrace-list").change(function() {
                let subraceSelection = $("#gnome-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else if (raceSelection == "Halfling") {
            $(".subraces").hide();
            $("#subrace-section, #subrace-halfling").show();
            $("#halfling-subrace-list").change(function() {
                let subraceSelection = $("#halfling-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else {
            $(".subraces, #subrace-section").hide();
        }

            // Prints a relevant size value depending on the selected race
        if ((raceSelection == "Dragonborn") || (raceSelection == "Dwarf") || (raceSelection == "Elf") || (raceSelection == "Half-Elf") || (raceSelection == "Half-Orc") || (raceSelection == "Human") || (raceSelection == "Tiefling")) {
            $("#size-card").text("Size: Medium")
        } else if ((raceSelection == "Gnome") || (raceSelection == "Halfling")) {
            $("#size-card").text("Size: Small")
        };

            // Assigns a maximum value to the age selector input, based on chosen race
        if (raceSelection == "Dragonborn") {
            $("#character-age").attr("max", "80");
        } else if (raceSelection == "Dwarf") {
            $("#character-age").attr("max", "350");
        } else if (raceSelection == "Elf") {
            $("#character-age").attr("max", "750");
        } else if (raceSelection == "Gnome") {
            $("#character-age").attr("max", "499");
        } else if (raceSelection == "Half-Elf") {
            $("#character-age").attr("max", "200");
        } else if (raceSelection == "Halfling") {
            $("#character-age").attr("max", "150");
        } else if (raceSelection == "Half-Orc") {
            $("#character-age").attr("max", "75");
        } else if (raceSelection == "Human") {
            $("#character-age").attr("max", "99");
        } else if (raceSelection == "Tiefling") {
            $("#character-age").attr("max", "110");
        }
    });

        // Prints the choice of character name when changed from the respective input
    $("#character-name").change(function() {
        let nameSelection = $("#character-name").val();
        $("#name-card").text("Name: " + nameSelection);
    });

        // Prints the choice of character age when changed from the respective input
    $("#character-age").change(function() {
        let ageSelection = $("#character-age").val();
        $("#age-card").text("Age: " + ageSelection);
    });

        // Nav and show/hide card button functions
    $("#next-1").click(function() {
        $("#race-section").hide();
        $("#name-section").show();
    });

    $("#previous-2").click(function() {
        $("#name-section").hide();
        $("#race-section").show();
    });

    $("#next-2").click(function() {
        $("#name-section").hide();
        $("#age-section").show();
    });

    $("#previous-3").click(function() {
        $("#age-section").hide();
        $("#name-section").show();
    });

    $("#show").click(function() {
        $("#character-card").show();
    });

    $("#hide").click(function() {
        $("#character-card").hide();
    });

});