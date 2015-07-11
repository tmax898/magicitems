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
        var locked = false;

        var template = _.template("<ul>" +
            "<li class=\"edit\"><a>edit</a></li>" +
            "<li><strong>Name</strong>: <%- getName() %></li>" +
            "<li><strong>Description</strong>: <%- getDescription() %></li>" +
            "<li><strong>Strength</strong>: <%- getStrength() %></li>" +
            "<li><strong>Intelligence</strong>: <%- getIntelligence() %></li>" +
            "<li><strong>Charisma</strong>: <%- getCharisma() %></li>" +
            "</ul>");

        var templateEdit = _.template("<ul>" +
            "<li class=\"save\"><a>save</a></li>" +
            "<li><strong>Name</strong>: <input class=\"name\" type=\"text\" value=\"<%- getName() %>\"/></li>" +
            "<li><strong>Description</strong>: <input class=\"description\" type=\"text\" value=\"<%- getDescription() %>\"/></li>" +
            "<li><strong>Strength</strong>: <input class=\"strength\" type=\"text\" value=\"<%- getStrength() %>\"/></li>" +
            "<li><strong>Intelligence</strong>: <input class=\"intelligence\" type=\"text\" value=\"<%- getIntelligence() %>\"/></li>" +
            "<li><strong>Charisma</strong>: <input class=\"charisma\" type=\"text\" value=\"<%- getCharisma() %>\"/></li>" +
            "</ul>");

        this.render = function(mode) {
            if (!mode && !locked) {
                locked = false;
                el.innerHTML = template(model);
            } else if(mode == "edit" && !locked) {
                locked = true;
                el.innerHTML = templateEdit(model);
            }

            return this;
        };

        $(el).on("click", ".edit", _.bind(function(event) { event.preventDefault(); this.render("edit");}, this));
        $(el).on("click", ".save", _.bind(function(event) {
                window.malef = el;
                console.log($(".name:first", el).val());
                event.preventDefault();
                $(broadcaster).one("saved:artifact:" + model.id, _.bind(function() {
                    $(broadcaster).off("saved:artifact:" + model.id);
                    locked = false;
                    this.render();
                }, this));//*[@id="magicItemsList"]/ol/li[2]/ul/li[1]
                $(broadcaster).trigger("save:artifact", {
                    model: model,
                    name: $(".name:first", el).val(),
                    description: $(".description:first", el).val(),
                    strength: $(".strength:first", el).val(),
                    intelligence: $(".intelligence:first", el).val(),
                    charisma: $(".charisma:first", el).val()
                });
            },
            this));
        $(broadcaster).on("change:artifact:" + model.id + ":name", _.bind(this.render, this)); // Bind rendering to change events
    };
})($);