$(document).ready(function(){
    $("#create_button").click(function(){
        panel = new Panel();
        trace(panel.nombre);
    });
    
    
});

//función que escribe un mensaje en la consola
function trace(msg){
    $("#consola").append(msg+"<br>");
    console.log(msg);
}







