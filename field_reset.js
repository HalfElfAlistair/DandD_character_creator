function fieldReset() {
    // Returns text input value to default
    $(".textbox").val("");

    // Returns race select option to default
    $("#race-list").val($('#race-list').find("option[selected]").val());

    // Hides creation sections other than the #race-section and hides #draconic-ancestry-table
    $("#subrace-section, #language-section, #draconic-ancestry-section, #draconic-ancestry-table, #name-section, #age-section, #physique-section, #sumbit-section").hide();
    $("#race-section").show();

    // Resets show/hide table button text to match hidden table
    $("#show-hide-table").text("Show Table");

    // Resets chatacter card to default
    $(".card-entries").text("");
    $("#traits-card > p").remove();
}