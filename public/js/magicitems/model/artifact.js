var MagicItems = MagicItems || {};

/**
 * Represents a magical Artifact.
 *
 */
(function () {
    /**
     * Creates a new artifact so that you can keep track of them!
     * @param name The name of the artifact.
     * @param description An apt description of the artifacts origins.
     * @param strength The strength bonus the artifact imbues upon it's owner.
     * @param intelligence The intelligence bonus one can expect while carrying it.
     * @param charisma The charisma modifier than can be expected while the artifact is in an individuals possession.
     * @constructor
     */
    MagicItems.Model.Artifact = function(name, description, strength, intelligence, charisma) {
        this.name = name;
        this.description = description;
        this.strength = strength;
        this.intelligence = intelligence;
        this.charisma = charisma;
    };
})();