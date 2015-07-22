/*eslint-env jquery */
( function($){
	$.widget("artifact.createNewArtifact", {
		options : {
			modelid : "art0", //defaulting to art0
			artifactItem : null //This should be populated so we can add the predefined values to our template
		}, 
		_create	: function(){
			//create run on widget binding much like a constructor
		},
		createDialog : function(){
			var createPopup = "<div id='create'><div id='createContainer' /></div>";
			$(createPopup).dialog({
				modal : true,
				title : "Create your magical artifact",
				close : function(){
					$(this).remove();	
				},
				open : function (){
					if(this.options.createTemplate !== "" && this.options.artifactItem !== null){
						var createView = this.options.createTemplate(this.options.artifactItem);
						$("#createContainer").append(this.options.createTemplate);
					}
					else{
						$("#createContainer").append("<div>Error Rendering</div>");
					}
				}
			});
		},
		_destroy : function(){
			
		}
	});

})($);