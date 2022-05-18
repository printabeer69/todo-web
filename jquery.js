$(".txtb").on("keyup", function(e) {
    if (e.keyCode == 13 && $(".txtb").val() != "") {
        var task = $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<i class='fa fa-trash-o' aria-hidden='true'></i>").click(function() {
            var p = $(this).parent();
            p.fadeOut(function() {
                p.remove();
            })
        })

        var check = $("<i class='fa fa-check' aria-hidden='true'></i>").click(function() {
            var p = $(this).parent();
            p.fadeOut(2000, function() {

                $('.camp').append(p)
                p.fadeIn(2000)

            })
            $(this).remove()
        })
        task.append(del, check)
        $(".notcamp").append(task);
        $(".txtb").val("");
    }
})