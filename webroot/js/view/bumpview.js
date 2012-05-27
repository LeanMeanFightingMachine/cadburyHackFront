var BumpView = Backbone.View.extend({

	kFilteringFactor: 0.6,
	spikeZCount:	 0,
	
	el: $('#bump'),
	
  tagName: 'div', 
  
  events: { 	
  },   
  
  initialize: function(){
  },
  
  detectBump: function(acceleration){

		var accelZ = 0;

		accelZ = Math.abs(acceleration.z - ( (acceleration.z * this.kFilteringFactor) + (accelZ * (1.0 - this.kFilteringFactor)) ) );

		if (accelZ > 3) {
				
				if (this.spikeZCount > 9) {
					
					$.post('http://192.168.145.208/api/index/', {'method': 'triggerBump', 'uuid': 2, 'type': 'ANDROID', 'latitude': this.model.get('lat'), 'longitude': this.model.get('long')}, function(){});

 					this.spikeZCount = 0;
		} else {
 			this.spikeZCount++;
		}
		} else {
			this.spikeZCount++;
		}

  },

  render: function(){
    $(this.el).html('<span style="color:black;">'+this.model.get('part1')+' '+this.model.get('part2')+'</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
    return this; // for chainable calls, like .render().el
  }
});
