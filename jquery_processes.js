$(document).ready(function() {

    $("#character-card, #name-section, #subrace, #subrace-dwarf, #subrace-elf, #subrace-gnome, #subrace-halfling").hide();

    $("#race-list").change(function() {
        let raceSelection = $("#race-list option:selected").val();
        $("#race-card").text("Race: " + raceSelection);

        if (raceSelection == "Dwarf") {
            $("#subrace, #subrace-dwarf").show();
            $("#subrace-elf, #subrace-gnome, #subrace-halfling").hide();
            $("#dwarf-subrace-list").change(function() {
                let subraceSelection = $("#dwarf-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else if (raceSelection == "Elf") {
            $("#subrace, #subrace-elf").show();
            $("#subrace-dwarf, #subrace-gnome, #subrace-halfling").hide();
            $("#elf-subrace-list").change(function() {
                let subraceSelection = $("#elf-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else if (raceSelection == "Gnome") {
            $("#subrace, #subrace-gnome").show();
            $("#subrace-dwarf, #subrace-elf, #subrace-halfling").hide();
            $("#gnome-subrace-list").change(function() {
                let subraceSelection = $("#gnome-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else if (raceSelection == "Halfling") {
            $("#subrace, #subrace-halfling").show();
            $("#subrace-dwarf, #subrace-elf, #subrace-gnome").hide();
            $("#halfling-subrace-list").change(function() {
                let subraceSelection = $("#halfling-subrace-list option:selected").val();
                $("#race-card").text("Race: " + raceSelection + " (Subrace: " + subraceSelection + ")");
            });
        } else {
            $("#subrace").hide();
        }
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