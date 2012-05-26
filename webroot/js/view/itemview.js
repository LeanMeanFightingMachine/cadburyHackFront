var ItemView = Backbone.View.extend({
  tagName: 'li', // name of tag to be created        
  // `ItemView`s now respond to two clickable actions for each `Item`: swap and delete.
  events: { 
    'click span.swap':  'swap',
    'click span.delete': 'remove'
  },    
  // `initialize()` now binds model change/removal to the corresponding handlers below.
  initialize: function(){
    _.bindAll(this, 'render', 'unrender', 'swap', 'remove'); // every function that uses 'this' as the current object should be in here

    this.model.bind('change', this.render);
    this.model.bind('remove', this.unrender);
  },
  // `render()` now includes two extra `span`s corresponding to the actions swap and delete.
  render: function(){
    $(this.el).html('<span style="color:black;">'+this.model.get('part1')+' '+this.model.get('part2')+'</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
    return this; // for chainable calls, like .render().el
  },
  // `unrender()`: Makes Model remove itself from the DOM.
  unrender: function(){
    $(this.el).remove();
  },
  // `swap()` will interchange an `Item`'s attributes. When the `.set()` model function is called, the event `change` will be triggered.
  swap: function(){
    var swapped = {
      part1: this.model.get('part2'), 
      part2: this.model.get('part1')
    };
    this.model.set(swapped);
  },
  // `remove()`: We use the method `destroy()` to remove a model from its collection. Normally this would also delete the record from its persistent storage, but we have overridden that (see above).
  remove: function(){
    this.model.destroy();
  }
});
