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

function ejemplo3() {
	var objeto1 = {};
	var objeto2 = {};
	_.extend(objeto1, Backbone.Events);
	_.extend(objeto2, Backbone.Events);

	
	$("#ejemplo3").click(function() {
		objeto1.trigger("alert","lanzando evento desde objeto1");
	});

	objeto2.listenTo(objeto1, "alert", function(msg) {
		alert("recibido desde objeto2: " + msg);
		this.stopListening(objeto1);
	});
}

function ejemplo4() {
	var objeto = {};
	_.extend(objeto, Backbone.Events);

	objeto.once("alert", function(msg) {
		alert("recibido sólo una vez: " + msg);
	});

	$("#ejemplo4").click(function () {
		objeto.trigger("alert", "pasando datos de evento");
	});

}


