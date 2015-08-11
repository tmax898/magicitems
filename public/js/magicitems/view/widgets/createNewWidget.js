/*eslint-env jquery, meteor*/
/*globals MagicItems */
( function($){
	$.widget("artifact.createNewArtifact", {
		options : {
			artifacts : undefined, //artifacts list
			artifactsView : undefined //the renderer
		}, 
		_create	: function(){
			//create run on widget binding much like a constructor
		},
		createDialog : function(){
			var createPopup = "<div id='create'><div id='createContainer' /></div>";
			var creationWidget = this;
			$(createPopup).dialog({
				width : '500px',
				modal : true,
				title : "Create your magical artifact",
				close : function(){
					$(this).remove();	
				},
				open : function (){
					$("#createContainer").append(creationWidget._createNewTemplate());
				},
				buttons: [{
					  text: "Cancel",
				      click: function() {
				        $( this ).dialog( "close" );
				      }
				},
				{
						text: "Create",
						click: function(){
							//create model and add to collection
							creationWidget._createModel(this);
						}
				}]
			});
		},
		_createModel : function (context){
			//get the inputs
			var newName = $("#model-name").val();
			var newDesc = $("#model-description").val();
			var newStrength = $("#model-strength").val();
			var newInti = $("#model-intelligence").val();
			var newChar = $("#model-charisma").val();
			
			if(newName == "" || newDesc == "" || newStrength == "" || newInti == "" || newChar == ""){
				var errorPopup = "<div>You must fill out all the fields.</div>";
				$(errorPopup).dialog({
					width : '200px',
					modal : true,
					title : "Error"
				});
			}else{
				var newArtifact = new MagicItems.Model.Artifact(newName, newDesc,newStrength,newInti,newChar);
				this.options.artifacts.add(newArtifact);
				$("#magicItemsList").empty();
				this.options.artifactsView.render();
				$(context).dialog('close');
			}
		},
		_createNewTemplate : function(){
			return _.template("<ul>" +
            "<li><strong>Name</strong>: <input id='model-name' class=\"name\" type=\"text\" value=\"\"/></li>" +
            "<li><strong>Description</strong>: <input id='model-description' class=\"description\" type=\"text\" value=\"\"/></li>" +
            "<li><strong>Strength</strong>: <input id='model-strength' class=\"strength\" type=\"text\" value=\"\"/></li>" +
            "<li><strong>Intelligence</strong>: <input id='model-intelligence' class=\"intelligence\" type=\"text\" value=\"\"/></li>" +
            "<li><strong>Charisma</strong>: <input id='model-charisma' class=\"charisma\" type=\"text\" value=\"\"/></li>" +
            "</ul>");
		},
		_destroy : function(){
			
		}
	});

})($);