/*eslint-env meteor */
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

        /**
         * Starts the application by creating the necessary models and views and binds to events so that it can
         * respond to changes in application state.
         */
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

        /**
         * Renders the applicaton so that people can see it.
         */
        this.render = function() {
            artifactsView.render();
        };

        /**
         * Saves a change made in via a view to an the affect artifact so that the change is persisted for later use.
         * @param data The data that should be set in the artifact.
         */
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