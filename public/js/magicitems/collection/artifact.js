var MagicItems = MagicItems || {};
MagicItems.Collection = MagicItems.Collection || {};

/**
 * Represents a collection of magical artifacts.
 */
(function () {
    /**
     * Creates a new collection of magical artifacts.
     * @param items The artifacts in the user possession.
     * @param broadcaster The transmitter of events to listen to.
     * @constructor
     */
    MagicItems.Collection.Artifact = function(items, broadcaster) {
    	this.add = function (item){
    		items.push(item);
    	};
        this.items = function() {
            return items;
        };

        this.item = function(id) {
            return _.findWhere(this.items(), {'id': id});
        };

        this.count = function() {
            return this.items().length;
        }
    };
})();