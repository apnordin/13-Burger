$(function () {

    $(".devourBurger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(
            function () {
                console.log("Burger devoured");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                location.reload();
            }
        );
    });

})