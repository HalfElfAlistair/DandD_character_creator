function fieldReset() {
    // Returns text input value to default
    $(".textbox").val("");

    // Returns race select option to default
    $("#race-list").val($('#race-list').find("option[selected]").val());

    // Hides various sections and items, shows race-section, in order to meet the default appearance
    $("#subrace-section, #language-section, #draconic-ancestry-section, #draconic-ancestry-table, #name-section, #age-section, #physique-section, #sumbit-section, #subrace-subject").hide();
    $("#race-section").show();

    // Resets show/hide table button text to match hidden table
    $("#show-hide-table").text("Show Table");

    // Resets chatacter card to default
    $(".card-entries").text("");
    $("#traits-card > p").remove();
}