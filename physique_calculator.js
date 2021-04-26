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
    let heightToPrint = ("Height: " + feetResult + "'" + inchesResult + '"');
    let weightToPrint = ("Weight: " + weightResult + " lbs");
    let hwResultArray = [heightToPrint, weightToPrint];
    return hwResultArray;
}