$(function () {
    $("#newBurgerSubmit").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
        };
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })
    });
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        console.log("I've been clicked")
        // var id = $(this).attr("data-id");
        // var newDevour = $(this).data("newdevour")
        // console.log(id);
        // var newDevourState = {
        //     devoured: newDevour
        // }
        // $.ajax("/api/burgers/" + id, {
        //     type: "PUT",
        //     // data: newDevourState
        // }).then(
        //     function () {
        //         console.log("changed devour state to", newDevour)
        //         location.reload();
        //     }
        // )
    });

});
