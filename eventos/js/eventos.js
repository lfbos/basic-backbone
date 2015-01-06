$(document).ready(function(){
    ejemplo1();
});


function ejemplo1(){
   var objeto = {};
   _.extend(objeto, Backbone.Events);
   objeto.on("alert", function (msg, el) {
   		alert(msg);
   		el.append("<div class='tested'>OK</div>");

   });
   $("#ejemplo1").click(function () {
   		objeto.trigger("alert", "pasando parámetros de evento", $(this));
   });
}







