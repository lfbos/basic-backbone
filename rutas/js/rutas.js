 var paneles;
 var num_paneles;
 var miRouter;

$(document).ready(function(){
  miRouter = new Enrutador;
  Backbone.history.start();


  $("#enlace_help").click(function(){
    miRouter.navigate("help", {trigger:true});
  });
  
  $("#set_button").click(function(){
    var valor = $("#rot_set").val();
    var id = $(".panel_seleccionado").data("id");
    if(id != undefined){
      miRouter.navigate("panel/"+id+"/r"+valor, {trigger:true});
    }
});


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