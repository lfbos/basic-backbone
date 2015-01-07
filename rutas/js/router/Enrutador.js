var Enrutador = Backbone.Router.extend({
    routes: {
        "help": "ayuda"
    },
    initialize: function() {
        trace("Aplicando enrutador");
    },
    ayuda: function() {
        $("body").append("<div id='help'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a magna quis tortor molestie eleifend. Quisque luctus dignissim nibh vel bibendum. Aenean in quam vulputate, vestibulum velit in, auctor massa. Pellentesque vitae molestie velit. Nam non eros venenatis velit molestie laoreet at ut dolor. Sed pellentesque odio ex, ut bibendum ante viverra ac. Aliquam velit tellus, pretium sed suscipit ac, dapibus vel nisl. Phasellus fringilla, metus eget vestibulum iaculis, metus mi pharetra justo, vel volutpat ligula velit sit amet magna. Praesent vestibulum, tortor maximus condimentum venenatis, augue turpis ultricies purus, et sollicitudin velit mi ac nisl.</div>");        
    }
});