var TorchView = Backbone.View.extend({

	state:	 "none",

	el: $('#torch'),
	
  tagName: 'div', 
  
  events: { 	
  },   
  
  initialize: function(){
  },
  
  changeState: function(_state){
  
		if(_state != this.state){
			if(_state == "on"){
				$("#smoke").removeClass( "show" );
				$("#flames").removeClass( "hide" );
				
				$("#smoke").addClass( "hide" );
				$("#flames").addClass( "show" );
				
			} else if(_state == "off"){
			
				$("#flames").removeClass( "show" );
				$("#smoke").removeClass( "hide" );
				
				$("#flames").addClass( "hide" );
				$("#smoke").addClass( "show" );
			
			}
			this.state = _state;
		};

  },

  render: function(){
    //$(this.el).html('<span style="color:black;">'+this.model.get('part1')+' '+this.model.get('part2')+'</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
    return this; // for chainable calls, like .render().el
  }
});
