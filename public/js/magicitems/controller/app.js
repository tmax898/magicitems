var MagicItems = MagicItems || {};
MagicItems.Controller = MagicItems.Controller || {};

/**
 * Represents a collection of magical artifacts.
 */
(function ($) {
    /**
     * The application controller makes the magic happen.
     * @constructor
     */
    MagicItems.Controller.App = function(el) {
        var broadcaster, artifacts, artifactsView;

        this.start = function() {
            broadcaster = new MagicItems.Radio.Broadcaster();
            artifacts = new MagicItems.Collection.Artifact([
                    new MagicItems.Model.Artifact(
                        "The Sword of Eratosthenes",
                        "Deals a killing blow to foes not born on a prime day.",
                        1,
                        0,
                        0,
                        broadcaster
                    ),
                    new MagicItems.Model.Artifact(
                        "Dark Chocolate",
                        "Hand made by the Mordimer family choclateers for thirteen generations.",
                        1,
                        0,
                        0,
                        broadcaster
                    )
                ],
                broadcaster);

            artifactsView = new MagicItems.View.ArtifactList(el, artifacts, broadcaster);

            $(broadcaster).on("save:artifact", _.bind(function(event, data) {this.saveArtifact(data)}, this))
        };

        this.render = function() {
            artifactsView.render();
        };

        this.saveArtifact = function(data) {
            data.model.setName(data.name);
            data.model.setDescription(data.description);
            data.model.setStrength(data.strength);
            data.model.setIntelligence(data.intelligence);
            data.model.setCharisma(data.charisma);
            $(broadcaster).trigger("saved:artifact:" + data.model.id);
        }
    };
})($);