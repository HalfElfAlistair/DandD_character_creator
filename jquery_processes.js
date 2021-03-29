$(document).ready(function() {

    $("#character-card, #name-section, #subrace-section, .subraces").hide();

    $("#race-list").change(function() {
        let raceSelection = $("#race-list option:selected").val();
        $("#race-card").text("Race: " + raceSelection);

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

        if ((raceSelection == "Dragonborn") || (raceSelection == "Dwarf") || (raceSelection == "Elf") || (raceSelection == "Half-Elf") || (raceSelection == "Half-Orc") || (raceSelection == "Human") || (raceSelection == "Tiefling")) {
            $("#size-card").text("Size: Medium")
        } else if ((raceSelection == "Gnome") || (raceSelection == "Halfling")) {
            $("#size-card").text("Size: Small")
        };
    });

    $("#character-name").change(function() {
        let nameSelection = $("#character-name").val();
        $("#name-card").text("Name: " + nameSelection);
    });

    $("#next-1").click(function() {
        $("#race-section").hide();
        $("#name-section").show();
    });

    $("#previous-2").click(function() {
        $("#name-section").hide();
        $("#race-section").show();
    });

    $("#show").click(function() {
        $("#character-card").show();
    });

    $("#hide").click(function() {
        $("#character-card").hide();
    });

});