app.views.form1 = Backbone.View.extend({

		events: {
			'click a#nextpage': 'save'
		},
    initialize: function() {
        this.render();
    },
    render: function(model) {
      var template = _.template($("#tpl-form1").html(),{});
      this.$el.html(template);
			this.$el.find("#fname").focus();
			this.delegateEvents();
      return this;
    },
    save: function(e) {
			app.firstname = this.$el.find("#fname").val();
			app.lastname = this.$el.find("#lname").val();

			if(!app.firstname)
					this.$el.find("#fname").focus();
			else if(!app.lastname)
					this.$el.find("#lname").focus();

			if(!app.firstname || !app.lastname)
				e.preventDefault();
    }
});
