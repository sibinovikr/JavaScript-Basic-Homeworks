$(document).ready(function () {
    let buttonUser = $("#buttonUser");
    let textUser = $("#textUser");
    let colorUser = $("#colorUser");
    let h3ForMessages = $("#h3ForMessages");

    buttonUser.click(function (e) {

        let newHeader = buttonUser.after(`<h2>${textUser.val()}</h2>`)

      

        if ((!textUser.val()) && (!colorUser.val())) {

            h3ForMessages.text('Please enter both text or color!')

        } else if (!textUser.val()) {

            h3ForMessages.text('Please enter some text!')

             
        } else if (!colorUser.val()) {

            h3ForMessages.text('Please enter some color!')

        }
        else {
            let h2 = $("h2")

            console.log(h2.text());

            h2.css("color", `${colorUser.val()}`);
        }
    })

});