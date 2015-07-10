var MagicItems = MagicItems || {};
MagicItems.Model = MagicItems.Model || {};

/**
 * Represents a magical Artifact.
 */
(function ($) {
    /**
     * Creates a new artifact so that you can keep track of them!
     * @param name The name of the artifact.
     * @param description An apt description of the artifacts origins.
     * @param strength The strength bonus the artifact imbues upon it's owner.
     * @param intelligence The intelligence bonus one can expect while carrying it.
     * @param charisma The charisma modifier than can be expected while the artifact is in an individuals possession.
     * @param broadcaster The transmitter of events to listen to.
     * @constructor
     */
    MagicItems.Model.Artifact = function(name, description, strength, intelligence, charisma, broadcaster) {
        this.description = description;
        this.strength = strength;
        this.intelligence = intelligence;
        this.charisma = charisma;

        this.id = _.uniqueId('art');

        this.setName = function(newName) { // Use a function because an event needs to be triggered on change.
            name = newName;
            $(broadcaster).trigger("change:artifact:" + this.id + ":name");
            return this;
        };

        this.getName = function() {
            return name;
        };

        this.setDescription = function(newDescription) {
            description = newDescription;
            $(broadcaster).trigger("change:artifact:" + this.id + ":description");
            return this;
        };

        this.getDescription = function() {
            return description;
        };

        this.setStrength = function(newStrength) {
            strength = newStrength;
            $(broadcaster).trigger("change:artifact:" + this.id + ":strength");
            return this;
        };

        this.getStrength = function() {
            return strength;
        };

        this.setIntelligence = function(newIntelligence) {
            intelligence = newIntelligence;
            $(broadcaster).trigger("change:artifact:" + this.id + ":intelligence");
            return this;
        };

        this.getIntelligence = function() {
            return intelligence;
        };

        this.setCharisma = function(newCharisma) {
            charisma = newCharisma;
            $(broadcaster).trigger("change:artifact:" + this.id + ":charisma");
            return this;
        };

        this.getCharisma = function() {
            return charisma;
        }
    };
})($); // Import the jquery object.