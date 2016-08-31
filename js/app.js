var app = (function(){
   //Namespace Container
    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        todos: null,
        firstname:null,
        lastname:null,
        init: function() {
          this.content = $("#content");
          ViewsFactory.form1();
          this.todos = new api.collections.ToDos();
          Backbone.history.start();
          return this;
        },
        changeContent: function(el) {
          this.content.empty().append(el);
          return this;
        },
        title: function(str) {
          $("h1").text(str);
          return this;
        }
    }

    //Views
    var ViewsFactory = {
        form1:function(){
          if(!this.form1View){
            this.form1View = new api.views.form1({
                model: api.todos
            }).on("saved", function() {
    					api.router.navigate("", {trigger: true});
    				});
          }
          return this.form1View;
        },
        form2:function(){
          if(!this.form2View){
            this.form2View = new api.views.form2({
              model: api.todos
            }).on("saved", function() {
    					api.router.navigate("", {trigger: true});
    				});
          }
          return this.form2View;
        }
  	};

    //Router
  	var Router = Backbone.Router.extend({
  		routes: {
  			"form1": "form1",
  			"form2": "form2",
        "*any" : "form1"
  		},
  		form1: function() {
  			var view = ViewsFactory.form1();
  			api.title("Form 1").changeContent(view.$el);
  			view.render();
  		},
  		form2: function(form) {
        var view = ViewsFactory.form2();
  			api.title("Form 2").changeContent(view.$el);
  			view.render();
  		}
  	});

    //Initialize Router
  	api.router = new Router();

    //Return Namespace Container
  	return api;
})();

/*
* Method - To Convert to JSON string
* Input  - Custom String, Object
* Return - null
*/
function displayCollectionContents(string, collection){
    var data_string = JSON.stringify(collection.toJSON());
    console.log(string+" "+data_string);
    $("#footer").html(data_string);
}
