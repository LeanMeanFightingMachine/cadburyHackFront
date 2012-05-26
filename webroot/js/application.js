
var App = {
    View: {},
    Model: {},
    Collection: {},
    Instances: {},
    init: function() {
    	_.bindAll(this);
	    
			this.Instances.bumpView = new BumpView();
			
			this.Model.location = new Location();
			
			var appContext = this;
			window.ondevicemotion = function(event){
				appContext.Instances.bumpView.detectBump(event.acceleration);
			}
		
			navigator.geolocation.watchPosition(appContext.setLocation, appContext.handleError);
		  
		},
		
		setLocation: function(event) {
				console.log("event.coords.longitude : " + event.coords.longitude+"  this.Model="+this.Model); 
		    this.Model.location.set('long', event.coords.longitude);
				this.Model.location.set('lat', event.coords.latitude);

  	}
    	
    	
/*
    	var coordinateCollection = new Backbone.Collection();
    	coordinateCollection.add([{ latitude : '-0.0146479', longitude : '51.572172', identifier: 'lmfm', image : 'image-bttower.png', width: 29, height: 202, name: 'Francis Bacon, Highgate'},
    				              { latitude : '-0.153127', longitude : '51.544298', identifier: 'chalk_fm_station', image : 'image-bttower.png', width: 29, height: 202},
    				              { latitude : '-0.151845', longitude : '51.543223', identifier: 'the_roundhouse', image : 'image-bttower.png', width: 29, height: 202},
    				              { latitude : '-0.149493', longitude : '51.541361', identifier: 'morrisons', image : 'image-bttower.png', width : 29, height: 202},
    				              { latitude : '-0.146255', longitude : '51.542522', identifier: 'hawley', image : 'image-bttower.png', width: 29, height: 202},
    				              { latitude : '-0.138649', longitude : '51.521542', identifier: 'bttower', image : 'image-bttower.png', width: 29, height: 202}
    				              ]);
    	
    	var currentCoords = new Backbone.Model();
    	currentCoords.set({latitude : '-0.149979', longitude : '51.543813', heading: 0});
    	
    	//Instantiate the parts that make up the app and save the instances for later use
    	this.Instances.audioplayer 	= new  App.View.AudioPlayer({model: new Backbone.Model()});
    	this.Instances.canvas 	    = new  App.View.BuildingCanvas({collection: coordinateCollection, model: currentCoords});
    	this.Instances.compass 		= new  App.View.Compass({model: currentCoords});
    	    	
    	$('body').prepend($('<div>').attr('id', 'global-container')
    							    .append(this.Instances.audioplayer.render())
    							    .append(this.Instances.canvas.render())
    							    .append(this.Instances.compass.render())
    							); 
    	this.Instances.audioplayer.hidePlayer();
    	this.Instances.compass.setHeading(1);
    	
    	var appContext = this;
    	
    	//We have to pay attention to the orientation just because the maths changes slightly for the different
    	//orientations. Everything else is changed using the CSS and min/max screen width
    	window.onorientationchange = function() {

    		appContext.Instances.canvas.setOrientation(window.orientation);
  		  
  		}
    	
    	//scroll down the viewport to hide the menu
    	window.scrollTo(0, 1);
    	
    	
    },
    playAudio: function(building) {
    	
    	this.Instances.audioplayer.showPlayer();
    	this.Instances.audioplayer.playAudio(building);
    }
*/

};