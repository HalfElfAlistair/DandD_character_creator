function raceChangeResets() {
    // Resets subrace, language and draconic-ancestry selectors when race selection is changed
    $("#subrace-selector").val($('#subrace-selector').find("option[selected]").val());
    $("#language-selector").val($('#language-selector').find("option[selected]").val());
    $("#draconic-ancestry-selector").val($('#draconic-ancestry-selector').find("option[selected]").val());

    // Defaults to refresh by removing the #dragon-type-card, selector, table data and #extra-languages-card when user changes their race selection 
    $("#dragon-type-area, .dragon-select, .dragon-data, #extra-languages-card").remove();

    // Defaults to hiding draconic ancestry & language sections, as well as #subrace-subject when the selected race changes
    $("#draconic-ancestry-section, #language-section, #subrace-subject").hide();

    // Defaults to remove and size, speed, darkvision, subrace, language, height and weight information
    $("#size-card").text("");
    $("#speed-card").text("");
    $("#darkvision-card").text("");
    $("#subrace-card").text("");
    $("#languages-card").text("");
    $("#height-card").text("");
    $("#weight-card").text("");
}

function raceDependenciesProcess(sizeValue, speedValue, darkvisionValue, languageDefault) {
    $("#size-card").text(sizeValue);
    $("#speed-card").text(speedValue + "ft");
    $("#darkvision-card").text(darkvisionValue + "ft");
    $("#languages-card").text(languageDefault);
}

function traitsProcess(traits) {
    for (let t = 0; t < traits.length; t++) {
        $("#traits-card").append(`<p class="additional-trait"><b>${traits[t][0]}:</b> ${traits[t][1]}</p>`);
    }
}

function subraceSelectorProcess(subraceObject) {
    // Loops through the relevant subrace titles and prints each one as a selector option in HTML
    for (let s = 0; s < subraceObject.length; s++) {
        $("#subrace-selector").append(`<option class="subrace-option">${subraceObject[s][0]}</option>`);
    }
}

function languageProcess(languageAllowance, languageDefault, raceSelection) {
    // Displays the additional language selector if applicable to the race selection
    if (languageAllowance === 1) {
        $("#language-section").show();

        $("#languages-area").append(`<p id="extra-languages-card" class="card-entries"></p>`);

        // Removes the 'Elvish' option if previously added
        $("#elvish-language-option").remove();

        // Adds an 'Elvish' option if the selected race is 'Human' (otherwise removing the option).
        if (raceSelection === "Human") {
            $("#language-selector").append(`<option id="elvish-language-option">Elvish</option>`);
        } else {
            $("#elvish-language-option").remove();
        }

        // Appends the updated language information to #languages-card
        $("#language-selector").change(function() {
            $("#languages-card").text(languageDefault + ", ");
            $("#extra-languages-card").text($("#language-selector option:selected").val());
            
        })
    } else {
        $("#language-section").hide();
    }
}

function draconicAncestrySelectorProcess(dragonTypeObject) {
    // Loops through dragonTypeObject, creates a variable for the dragon titles & data, uses titles for options in #draconic-ancestry-selector and titles and data to fill #draconic-ancestry-table
    for (let d = 0; d < dragonTypeObject.length; d++) {
       let dragonTitle = dragonTypeObject[d][0];
       let dragonData = Object.entries(dragonTypeObject[d][1])
       $("#draconic-ancestry-selector").append(`<option class="dragon-select">${dragonTitle}</option>`);
       $("#draconic-ancestry-table").append(`<tr class="dragon-data"><td>${dragonTitle}</td><td>${dragonData[0][1]}</td><td>${dragonData[1][1]}</td></tr>`);
   }
}

function draconicAncestryProcess(dragonTypeObject, dragonSelection) {
    // Defaults to refresh by removing the #dragon-type-card when user changes their selection 
    $("#dragon-type-area").remove();

    // Loops through dragonTypeObject, establishes title and data variables, matches title to selection, prints title and data to trait
    for (let d = 0; d < dragonTypeObject.length; d++) {
        let dragonTitle = dragonTypeObject[d][0];
        let dragonData = Object.entries(dragonTypeObject[d][1])
        if (dragonSelection === dragonTitle) {
            $("#traits-card").append(`<div class="card-area" id="dragon-type-area"><p class="card-subjects"><b>Dragon Type:</b></p><span> </span><p id="dragon-type-card" class="card-entries">${dragonTitle}</p><span> </span><p class="card-subjects"><b>Damage Type:</b></p><span> </span><p id="damage-type-card" class="card-entries">${dragonData[0][1]}</p><span> </span><p class="card-subjects"><b>Breath Weapon:</b></p><span> </span><p id="breath-weapon-card" class="card-entries">${dragonData[1][1]}</p></div>`);
        }
    }
}

function physiqueCalculator(heightDiceType, baseInches, weightDiceRolls, weightDiceType, basePounds) {

    let heightrollTally = [];

    // Twice generates a mimic roll score of the respective dice type assigned to the object and pushes them to the empty heightrollTally array
    for (let h = 0; h < 2; h++) {
        let heightScore = (Math.floor(Math.random() * heightDiceType) + 1);
        heightrollTally.push(heightScore);
    }

    // Produces the sum of the values pushed to the heightrollTally array
    const heightRollTotal = heightrollTally.reduce((a, b) => a + b, 0);

    // Sums the roll value and a base total inches value from the object
    let inchesTotal = heightRollTotal + baseInches;

    // Establishes the number of inches by using 12 as a value to calculate a remainder (1' = 12")
    let inchesResult = (inchesTotal % 12);

    // By removing the remainder score, a new total can be divided by 12 to count the number of feet
    let feetResult = ((inchesTotal - inchesResult) / 12);

    // A new empty array is created for weight roll values
    let weightrollTally = [];

    // Using object data, a loop repeats for an assigned number of times and pushes results of a dice roll replica to the weightrollTally array
    for (let w = 0; w < weightDiceRolls; w++) {
        let weightScore = (Math.floor(Math.random() * weightDiceType) + 1);
        weightrollTally.push(weightScore);
    }

    // The sum of the weight rolls is calculated
    let weightRollTotal = weightrollTally.reduce((a, b) => a + b, 0);

    // The established height roll and weight roll sum scores multiplied and the result is added to an established weight value from the respective object. This produces a grand total weight.
    let weightResult = ((weightRollTotal * heightRollTotal) + basePounds);

    // The complete Height and Weight calculations are assigned to variables and formatted with strings for an appropriate display. They are then added to an array which is returned
    let heightToPrint = (feetResult + "'" + inchesResult + '"');
    let weightToPrint = (weightResult + " lbs");
    let hwResultArray = [heightToPrint, weightToPrint];
    return hwResultArray;
}

// function languageCheck() {
//     let languageCheckResult = "";
//     // Assigns variable from race_data
//     let racesObject = Object.entries(races);

//     // Loops through racesObject and assigns variables for child objects and their data
//     for (let i = 0; i < racesObject.length; i++) {
//         let raceTitle = racesObject[i][0]
//         let raceData = Object.entries(racesObject[i][1]);


//     }
// }


function saveChecks() {
    if ($("#name-card").text() == "") {
        alert("Sorry, you can't save a nameless character.")
    } else if (($("#race-card").text() == "") || ($("#age-card").text() == "") || ($("#height-card").text() == "") || ($("#size-card").text() == "")) {
        let saveCheck = confirm("Your character hasn't been completed, are you sure you wish to save it now?");
        if (saveCheck == true) {
            localStorage.setItem($("#character-name").val(), $("#character-card").html());
            alert("Saved")
        }
    } else if (($("#extra-languages-card").length == true) && ($("#extra-languages-card").text() === "")) {
        let saveCheck = confirm("Your character hasn't been completed, are you sure you wish to save it now?");
        if (saveCheck == true) {
            localStorage.setItem($("#character-name").val(), $("#character-card").html());
            alert("Saved")
        }
    } else if (($("#race-card").text() == "Dragonborn") && ($("#dragon-type-area").length == false)) {
        let saveCheck = confirm("Your character hasn't been completed, are you sure you wish to save it now?");
        if (saveCheck == true) {
            localStorage.setItem($("#character-name").val(), $("#character-card").html());
            alert("Saved")
        }
    } else {
        localStorage.setItem($("#character-name").val(), $("#character-card").html());
            alert("Saved")
    }
}