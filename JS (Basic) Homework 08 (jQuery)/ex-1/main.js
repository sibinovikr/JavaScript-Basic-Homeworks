
$(document).ready(function(){

    let firstDiv = $("#first");

    let inUser = $("#inUser");

    let button = $("#butUser");

    let h1 = $("#h1Rezult");



    let divHTML = firstDiv.html();

    button.click(function(e){
       
        firstDiv.after(`<h1 id="tryOne">Hello ${inUser.val()} have a great day!</h1>`); 
        
    })
    
    
});

