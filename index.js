// 1
$("#hide").click(function() {
    $("p").hide();
})
$("#show").click(function() {
    $("p").show();
})

//2

$("#ajax").click(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: function(response) {
            console.log(response);
            document.getElementById("learn").innerText = response.title;
        }
    })
})