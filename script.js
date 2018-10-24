$(document).ready(() => {
    let table = null;
    $(".new-form").hide();
    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).fadeTo(500, 0.5);
    });
    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).fadeTo(500, 1.0);
    });
    $(document).on("mouseenter", ".reserved", (event) => {
        $(event.target).css("cursor", "not-allowed");
        if ($(event.target).attr("name") && $(event.target).attr("numberofguests")) {
            $(event.target).append(`
            <section class= "tooltip">    
                Name: ${$(event.target).attr("name")}
                Number of Guests: ${$(event.target).attr("numberofguests")}
            </section>
            `);
        }
        $(document).on("mouseleave", ".reserved", (event) => {
            $(event.target).html("");
        })
    });

    $(document).on("click", ".available", (event) => {
        $(".new-form").fadeIn(900)
        $(".new-form").css("display", "flex")
        table = $(event.target);
    });

    $(document).on("click", ".contact_exit, .inputs-btn", (event) => {
        $(".new-form").fadeOut(900);
        if ($(event.target).hasClass("inputs-btn")) {
            table.removeClass("available").addClass("reserved")
            table
                .attr("name", $("input").eq(0).val())
                .attr("phone", $("input").eq(1).val())
                .attr("numberofguests", $("input").eq(2).val());
            $("input").each(function () {
                $(this).val("");
            });
        };
    });
});