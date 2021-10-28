alert("Instructions: Enter a selector in the box in the top right corner of the screen. This will apply a red border on any element under that selector.\n\nIn the boxes by the elements, you can give the element an ID and a class (both optional). Just make sure not to give 2 elements the same ID!");

function highlight() {
    $("*").css("border", "0px solid white");
    $($("#selectinput").val()).css("border", "10px solid red");
}

var elements = ["iframe", "h3", "img", "table", "button", "p", "ul", "body > div", "div div:first", "div div:last"];

$(document).ready(function(){
    $("input").keyup(function(event) {
        var elementID = event.target.id;
        if (elementID.charAt(0) == "i") {
            $(elements[parseInt(elementID.charAt(1))]).attr("id", $("#" + elementID).val());
        }
        else if (elementID.charAt(0) == "c") {
            $(elements[parseInt(elementID.charAt(1))]).attr("class", $("#" + elementID).val());
        }
        highlight();
    });
    $("#selectinput").focus(function() {
        if ($("#selectinput").val() == "Enter selector here...")
            $("#selectinput").val("");
    })
    $("#selectinput").blur(function() {
        if ($("#selectinput").val() == "")
            $("#selectinput").val("Enter selector here...");
    })
});