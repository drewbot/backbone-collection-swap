var ListViewOne = Backbone.View.extend({
  // give it a class name
  className: 'view-one',
  // point it to this div
  template: _.template($('.view-one-template').text()),
  // save will call the updateModel function and new will add a new photo to the model
  events: {
    "click .save-button"	: "updateModel",
    "click .new-button" 	: "createPhoto",
    "click .move-right"		: "moveRight",
    "click .move-left"		: "moveLeft",
    "click .delete"			: "delete",
  },
  // When a view instance is created listen to the photoCollection instance...
  // .. and add a function passing the 'photo' argument...
  initialize: function(){
    this.listenTo(instanceCollectionOne, 'add', function(listitem){
      // ... create a new instance of ThumbnailView....
      //...while passing in an argument of model and applying the photo argument from above 
      new ListViewTwo({model: listitem});
      new ListViewThree({model: listitem});
    })
    // view instance will listen to it's model and run the render below on any changes to this.el (I think)
    
    this.listenTo(this.model, 'change', this.render);
    // append this.el to the spcified div
    $('.view-one-container').append(this.el);
    // render the changes
    this.render();
  },

});

/////////////////////////////////////////////////////////////////////

var ListViewTwo = Backbone.View.extend({
  // give it a class name
  className: 'view-two',
  // point it to this div
  template: _.template($('.view-two-template').text()),
  // save will call the updateModel function and new will add a new photo to the model
  events: {
    "click .save-button"	: "updateModel",
    "click .new-button" 	: "createPhoto",
    "click .move-right"		: "moveRight",
    "click .move-left"		: "moveLeft",
    "click .delete"			: "delete",
  },
  // When a view instance is created listen to the photoCollection instance...
  // .. and add a function passing the 'photo' argument...
  initialize: function(){
    this.listenTo(instanceCollectionTwo, 'add', function(listitem){
      // ... create a new instance of ThumbnailView....
      //...while passing in an argument of model and applying the photo argument from above 
      new ListViewOne({model: listitem});
      new ListViewThree({model: listitem});
    })
    // view instance will listen to it's model and run the render below on any changes to this.el (I think)
    
    this.listenTo(this.model, 'change', this.render);
    // append this.el to the spcified div
    $('.view-two-container').append(this.el);
    // render the changes
    this.render();
  },

});

/////////////////////////////////////////////////////////////////////

var ListViewThree = Backbone.View.extend({
  // give it a class name
  className: 'view-three',
  // point it to this div
  template: _.template($('.view-three-template').text()),
  // save will call the updateModel function and new will add a new photo to the model
  events: {
    "click .save-button"	: "updateModel",
    "click .new-button" 	: "createPhoto",
    "click .move-right"		: "moveRight",
    "click .move-left"		: "moveLeft",
    "click .delete"			: "delete",
  },
  // When a view instance is created listen to the photoCollection instance...
  // .. and add a function passing the 'photo' argument...
  initialize: function(){
    this.listenTo(instanceCollectionThree, 'add', function(listitem){
      // ... create a new instance of ThumbnailView....
      //...while passing in an argument of model and applying the photo argument from above 
      new ListViewTwo({model: listitem});
      new ListViewOne({model: listitem});
    })
    // view instance will listen to it's model and run the render below on any changes to this.el (I think)
    
    this.listenTo(this.model, 'change', this.render);
    // append this.el to the spcified div
    $('.view-three-container').append(this.el);
    // render the changes
    this.render();
  },

});