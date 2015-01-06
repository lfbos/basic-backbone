$(document).ready(function(){
    $("#create_button").click(function(){
        /*var panel1 = new Panel();
        var panel2 = new Panel();
        trace(panel1.propInstancia + ", " + Panel.propEstatica);
        trace(panel1.propInstancia + ", " + Panel.propEstatica);
        panel1.propInstancia = "nuevo valor";
        Panel.propEstatica = "nuevo valor estático"
        trace(panel1.propInstancia + ", " + Panel.propEstatica);
        trace(panel1.propInstancia + ", " + Panel.propEstatica);*/

        var panel1 = new Panel();
        var panel2 = new Panel({
            txt: "Este es el nuevo panel",
            rotulo: "Mi panel"
        });
        trace(JSON.stringify(panel1.toJSON()));
        trace(panel2.toJSON());
    });
    
    
});

//función que escribe un mensaje en la consola
function trace(msg){
    $("#consola").append(msg+"<br>");
    console.log(msg);
}







