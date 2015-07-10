var MagicItems = MagicItems || {};
MagicItems.View = MagicItems.View || {};

/**
 * Draws an Artifact as a tile.
 */
(function () {
    /**
     * Creates a new ArtifactTile object
     * @param el An active selector of the element the view should be written inside.
     * @param model The model that should be represented by the view.
     * @constructor
     */
    MagicItems.View.ArtifactTile = function(el, model) {
        var template = _.template("<ul>" +
            "<li><strong>Name</strong>: <%- name %></li>" +
            "<li><strong>Description</strong>: <%- description %></li>" +
            "<li><strong>Strength</strong>: <%- strength %></li>" +
            "<li><strong>Intelligence</strong>: <%- intelligence %></li>" +
            "<li><strong>Charisma</strong>: <%- charisma %></li>" +
            "</ul>");

        this.render = function() {
            el.innerHTML = template(model);

            return this;
        }
    };
})();