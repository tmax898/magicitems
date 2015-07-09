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

# Layout

***


# Model/Artifact

* id():string
* name():string
* description():string
* strength():int
* magic():int
* charisma():int

***

# Collection/Artifact

* artifacts():array
* artifact(itemID:int):Artifact
* count()

***

# View/ArtifactTile

* new($el, template, model)
* render()

***

# View/ArtifactList

* new($el, template, models)
* render(type)

***

# View/ArtifactTotal
* new($el, template, models)
* render(type)

***

# Radio

* trigger(event, data)

***

# View/ArtifactTile

* new($el, template, models)
* render(mode)

***

# Resources

* todomvc.com
* Single Page Web Applications by Micheal S. Mikowski and Josh C. Powell