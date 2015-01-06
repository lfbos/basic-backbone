$(document).ready(function(){
    ejemplo1();
    ejemplo2();
    ejemplo3();
    ejemplo4();
    ejemplo5();
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

function ejemplo2(){
   var objeto = {};
   _.extend(objeto, Backbone.Events);
   objeto.on("alert", function (msg, el) {
   		el.append("<div class='tested'>OK</div>");
   		objeto.off("alert");
   });
   $("#ejemplo2").click(function () {
   		objeto.trigger("alert", "pasando parámetros de evento", $(this));
   });
}






