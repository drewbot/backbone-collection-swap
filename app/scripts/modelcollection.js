var ListItem = Backbone.Model.extend({
  idAttribute: "_id"
});

var CollectionOne = Backbone.Collection.extend({
  model: ListItem,
  url: 'http://tiny-pizza-server.herokuapp.com/collections/collection-swap-1'
});

var CollectionTwo = Backbone.Collection.extend({
  model: ListItem,
  url: 'http://tiny-pizza-server.herokuapp.com/collections/collection-swap-2'
});

var CollectionThree = Backbone.Collection.extend({
  model: ListItem,
  url: 'http://tiny-pizza-server.herokuapp.com/collections/collection-swap-3'
});