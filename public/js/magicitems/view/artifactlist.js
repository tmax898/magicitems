var MagicItems = MagicItems || {};
MagicItems.View = MagicItems.View || {};

/**
 * Represents a collection of magical artifacts.
 */
(function () {
    /**
     * Draws an Artifact as a tile.
     * @constructor
     */
    MagicItems.View.ArtifactList = function(el, collection, broadcaster) {
        var parentTag = "ol";
        var childTag = "li";

        this.render = function() {
            var domFragment = document.createDocumentFragment();
            var listElement = document.createElement(parentTag);

            _.forEach(collection.items(), function(item) {
                var listItemElement = document.createElement(childTag);
                var view = new MagicItems.View.ArtifactTile(listItemElement, item, broadcaster);
                view.render();

                listElement.appendChild(listItemElement);
            });

            domFragment.appendChild(listElement);
            el.appendChild(domFragment);
            return this;
        }
    };
})();