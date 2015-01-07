var panelView



Enrutador = Backbone.Router.extend({
    routes:{                                     
        ""                  : "index",
        "help"              : "ayuda",
        "panel/:id"        : "muestraPanel", 
        "panel/:id/r:rotulo" : "cambiaPanel"
    },
    initialize: function(){
        trace("Aplicando enturador");
    },
    index: function(){
        $("#help").remove();
        var PanelesCollection = Backbone.Collection.extend({
             model: Panel
        });
        paneles = new PanelesCollection([
            {txt:"Este es el panel 1", rotulo:"Panel 1", id:"1"},
            {txt:"Este es el panel 2", rotulo:"Panel 2", id:"2"},
            {txt:"Este es el panel 3", rotulo:"Panel 3", id:"3"}
        ]);
        paneles.on({"add":onChangePanels, "remove":onChangePanels});   
        onChangePanels();
    },
    ayuda: function(){
            $("body").append("<div id='help'>Aliquam scelerisque sollicitudin eros a viverra. Maecenas hendrerit urna turpis, facilisis tempor felis iaculis eget. Vivamus sodales felis sem, faucibus auctor ligula eleifend quis. Nullam sit amet lectus nulla. In mattis sodales est, et mattis tellus lacinia eu. Vestibulum vitae vestibulum sapien, ut pharetra mauris. Cras risus quam, varius et congue vitae, euismod a diam. Duis sollicitudin nibh varius justo accumsan, id fermentum libero hendrerit. Phasellus vitae ligula nec turpis molestie eleifend. </div>");
            $("#help").click(function(){
                miRouter.navigate("", {trigger: true, replace: true});
            });
    },
    muestraPanel: function(id){
        this.index();
        var item = paneles.get(id);
        
        if(panelView != undefined){
            panelView.undelegateEvents();
        }
        $("#contenedor").html("");
        panelView = new PanelView({el:$('#contenedor'), model: item});
    },
    cambiaPanel: function(id, rotulo){
        trace("hola");
        this.index();
        var item = paneles.get(id);
        item.set("rotulo", rotulo);
        
        if(panelView != undefined){
            panelView.undelegateEvents();
        }
        $("#contenedor").html("");
        panelView = new PanelView({el:$('#contenedor'), model: item});
    }
 });//http://localhost:8888/backbone/




