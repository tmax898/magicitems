var MagicItems = MagicItems || {};
MagicItems.View = MagicItems.View || {};

/**
 * Draws an Artifact as a tile.
 */
(function ($) {
    /**
     * Creates a new ArtifactTile object
     * @param el An active selector of the element the view should be written inside.
     * @param model The model that should be represented by the view.
     * @param broadcaster The transmitter of events to listen to.
     * @constructor
     */
    MagicItems.View.ArtifactTile = function(el, model, broadcaster) {
        var template = _.template("<ul>" +
            "<li><strong>Name</strong>: <%- getName() %></li>" +
            "<li><strong>Description</strong>: <%- getDescription() %></li>" +
            "<li><strong>Strength</strong>: <%- getStrength() %></li>" +
            "<li><strong>Intelligence</strong>: <%- getIntelligence() %></li>" +
            "<li><strong>Charisma</strong>: <%- getCharisma() %></li>" +
            "</ul>");

        this.render = function() {
            el.innerHTML = template(model);

            return this;
        };

        $(broadcaster).bind("change:artifact:" + model.id + ":name", _.bind(this.render, this)); // Bind rendering to change events
    };
})($);