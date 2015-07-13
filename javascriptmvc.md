# JavaScript MVC
## What is it good for?

***

# Why?

1. Easier to replace components.
2. More responsive.
3. Don't waste time on DOM looks ups.
4. Simpler to unit test.

***

# Key Concepts

1. Separation of concerns
2. Modular
2. Data binding
3. Asynchronous messaging

***

# Magic Items
## Don't lose track of your magical artifacts

***

# Help libraries

* jQuery
** DOM manipulation
** Event Handling
* lodash
** Helper functions for collections and views

***


# Model/Artifact

* Holds data and definitions of how the data can be manipulated.
* Provide the essential data for the model in the constructor.
* Create a unique ID to make it quick to identify.
* Restrict access to data so that events can be fired when values change.
***

# Collection/Artifact

* Container for Artifacts.
* Provides functions for working with the artifacts as a whole.

***

# View/ArtifactTile

* Responsible for rendering an Artifact to the screen.
* Manages events triggered by interactions with the tile.

***

# View/ArtifactList

* Responsible for rendering a collection of Artifacts to the screen.

***

# Radio

* Responsible for broadcasting messages to all parts of the application.

***

# Controller/App

* Responsible for managing interactions between the view and model.

***

# Resources

* todomvc.com
* Single Page Web Applications by Micheal S. Mikowski and Josh C. Powell

## Popular MVC/MVVM Frameworks
* AngularJS https://angularjs.org/
* React https://facebook.github.io/react/
* MarionetteJS http://marionettejs.com/
* Ember http://emberjs.com/
* Vue.js http://vuejs.org/