var Panel = Backbone.Model.extend({
	prefijo: "Texto del panel: ",
	defaults: {
		txt: "Aún no se ha definido texto",
		rotulo: "Sin nombre"
	},
	initialize: function(attr) {
		this.on("change", this.onChangeAll, this);
		this.on("change:rotulo", this.onChangeRotulo, this);
		// trace("El txt es " + attr.txt);
		this.set("txt", this.prefijo + attr.txt);
	},
	toString: function() {
		return "El texto es: " + this.get("txt");
	},
	onChangeAll: function(model, options) {
		trace("Se han cambiado las propiedades del modelo Panel");
	},
	onChangeRotulo: function(model, options) {
		trace("Se ha cambiado el rótulo por " + this.get("rotulo"));
	}
});