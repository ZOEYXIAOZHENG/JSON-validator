var isJson = function (userInput) {
    try {
        JSON.parse(userInput);
        return true;
    } catch (e) {
        return false;
    }
};
var userInput = "";
$("input").on("input", function () {
    userInput = $("input").val();
});
$("button").on("click", function () {
    if (isJson(userInput)) {
        alert("Yes, it is JSON");
    } else {
        alert("No, it is not JSON");
    }
});
