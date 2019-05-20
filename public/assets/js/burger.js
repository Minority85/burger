$(function () {
    $(".eatButton").on("click", function (event) {
        var id = $(this).data("id");
        var changeDevoured = true

        var isDevoured = {
            devoured: changeDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function () {
                console.log(changeDevoured, "this should not be false");

                location.reload();
            }
        );
    });
    $(".createButton").on("click", function (event) {
        var text = $("#textArea").val().trim();
        var changeDevoured = 0;

        var notDevoured = {
            burger_name: text,
            devoured: changeDevoured
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: notDevoured
        }).then(
            function () {
                console.log("Its new!!!");

                location.reload();
            }
        );
    });
    $(".gone").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});