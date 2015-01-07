var paneles;
var num_paneles;
var miRouter;

$(document).ready(function(){
  
  miRouter = new Enrutador();
  Backbone.history.start();

  var PanelesCollection = Backbone.Collection.extend({
    model:Panel,
    sort_key: "cid",
    comparator: function(item){
        return item.get(this.sort_key);
    },
    sortByField: function(campo){
      this.sort_key = campo;
      this.sort();
    },
    findByRotulo:function(txt){
      filtered = this.filter(function(item){
        return item.get('rotulo').indexOf(txt) != -1;
      });
      return new PanelesCollection(filtered);
    }
});

  paneles = new PanelesCollection([
        {txt:"Este es el panel 1", rotulo:"Panel 1", id:"1"},
        {txt:"Este es el panel 2", rotulo:"Panel 2", id:"2"},
        {txt:"Este es el panel 3", rotulo:"Panel 3", id:"3"}
  ]);
  onChangePanels(null, null);
  paneles.on({"add":onChangePanels, "remove":onChangePanels, "reset":onChangePanels, "sort":onChangePanels});
  trace(JSON.stringify(paneles.toJSON()));
  num_paneles = paneles.length + 1;
    
  $("#create_button").click(function(){
    /*var panel = new Panel({txt:"Este es el panel 4", rotulo:"Panel 4", id:paneles.length});
    paneles.add(panel);*/

    paneles.add({txt:"Este es el panel " + num_paneles, rotulo:num_paneles + "Panel " + num_paneles, id:num_paneles});
    num_paneles ++;
  });

  $("#delete_button").click(function(){
    paneles.remove(paneles.at(0));
  });

  $("#delete_button_ID").click(function(){
    paneles.remove(paneles.get($("#rot_del").val()));
  });

  $("#reset_button").click(function(){
    paneles.reset();
  });

  $("#set_button").click(function(){
      var _id = $(".panel_seleccionado").data("id");
      var item = paneles.get(_id);
      item.set("rotulo", $("#rot_set").val());
  });

  $("#sort_button").click(function(){
    paneles.sortByField("rotulo");
  });

  $("#filter_button").click(function(){
    trace(paneles.findByRotulo($("#rot_filter").val()));
    trace(paneles.where({"rotulo": $("#rot_filter").val()}));
  });
});




function onChangePanels(model, collection){
    $("#listado").html("<ul></ul>");
    //paneles.each(pintaPanel);
    var botonView = new BotonView({el:$("#listado ul"), collection:paneles});
}
    
//función que escribe un mensaje en la consola
function trace(msg){
  $("#consola").append(msg+"<br>");
  console.debug(msg);
}