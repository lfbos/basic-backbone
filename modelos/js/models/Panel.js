var Panel = Backbone.Model.extend({
	prefijo: "Texto del panel: ",
	defaults: {
		txt: "Aún no se ha definido texto",
		rotulo: "Sin nombre"
	},
	initialize: function(attr) {
		// trace("El txt es " + attr.txt);
		this.set("txt", this.prefijo + attr.txt);
	},
	toString: function() {
		return "El texto es: " + this.get("txt");
	}
});