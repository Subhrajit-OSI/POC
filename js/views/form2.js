app.views.form2 = Backbone.View.extend({
		events: {
			'click a#complete': 'save'
		},
    initialize: function() {
        this.render();
    },
    render: function() {
      var template = _.template($("#tpl-form2").html(),{});
      this.$el.html(template);
			this.$el.find("#addOne").focus();
			this.delegateEvents();
      return this;
    },
    save: function(e) {
			var address_1 = this.$el.find("#addOne").val();
			if(!address_1){
					this.$el.find("#addOne").focus();
					e.preventDefault();
			}
			if(app.firstname && app.lastname && address_1){
					app.todos.add({firstname:app.firstname,lastname:app.lastname,address1:this.$el.find("#addOne").val(),address2:this.$el.find("#addTwo").val(),city:this.$el.find("#city").val(),state:this.$el.find("#state").val(),zipcode:this.$el.find("#zipcode").val()});
					displayCollectionContents("Data - ",app.todos);
			}
    }
});
