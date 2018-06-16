export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Recipes",
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Recipes",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "page": "recipespage",
                            "width": 2
                        },
                        {
                            "type": "button",
                            "name": "Ingredients",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "page": "ingredientspage",
                            "width": 2
                        },
                        {
                            "type": "button",
                            "name": "Regions",
                            "icon": "fa-globe",
                            "color": "yellow",
                            "page": "regionspage",
                            "width": 2
                        }
                    ]
                },
                {
                    "id": "recipespage",
                    "name": "Recipes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewRecipe",
                            "icon": "fa-cutlery",
                            "color": "red",
                            "width": 2,
                            "form": {
                                "form": "RecipeForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "RecipeList",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "search": true,
                            "url": "/recipe",
                            "page": "recipepage",
                        },
                    ]
                },
                {
                    "id": "recipepage",
                    "name": "Recipe",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "ShowRecipe",
                            "icon": "fa-cutlery",
                            "color": "red",
                            "width": 2,
                            "form": {
                                "form": "RecipeForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "AddIngredient",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "width": 2,
                            "form": {
                                "form": "AddIngredientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "IngredientList",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "search": true,
                            "url": "/recipe/:recipeKey/ingredient",
                            "form": {
                                "form": "AddIngredientForm"
                            }
                        }
                    ]
                },
                {
                    "id": "ingredientspage",
                    "name": "Ingredients",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewIngredient",
                            "icon": "fa-apple",
                            "color": "red",
                            "width": 2,
                            "form": {
                                "form": "IngredientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "IngredientList",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "search": true,
                            "url": "/ingredient",
                            "page": "ingredientpage"
                        }
                    ]
                },
                {
                    "id": "ingredientpage",
                    "name": "Ingredient",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "ShowIngredient",
                            "icon": "fa-apple",
                            "color": "red",
                            "width": 2,
                            "form": {
                                "form": "IngredientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "RecipeList",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "search": false,
                            "url": "/ingredient/:ingredientKey/recipe",
                            "page": "recipepage"
                        }
                    ]
                },
                {
                    "id": "regionspage",
                    "name": "Regionen",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "RegionsList",
                            "icon": "fa-globe",
                            "color": "yellow",
                            "search": false,
                            "url": "/region",
                            "page": "regionpage"
                        }
                    ]
                },
                {
                    "id": "regionpage",
                    "name": "Region",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "RecipeList",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "search": true,
                            "url": "/region/:regionKey/recipe",
                            "page": "recipepage"
                        }
                    ]
                }
            ],
            "formList": [
                {
                    "id": "RecipeForm",
                    "title": "Recipe",
                    "url": "/recipe",
                    "formFieldList": [
                        {
                            "id": "recipeName",
                            "type": "text",
                            "name": "RecipeName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "preparationTime",
                            "type": "number",
                            "name": "PreparationtimeInMinutes",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "region",
                            "type": "autocomplete",
                            "name": "Region",
                            "wordSearchEnabled": true,
                            "defaultKey": "regionKey",
                            "form": "RegionForm",
                            "url": "/region",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "recipe",
                            "type": "text",
                            "name": "Recipe",
                            "width": 2,
                            "height": 8,
                            "maxLength": 50000,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "IngredientForm",
                    "title": "Ingredient",
                    "url": "/ingredient",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "IngredientName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "season",
                            "type": "text",
                            "name": "Season",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "calories",
                            "type": "number",
                            "name": "CaloriesPer100g",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "RegionForm",
                    "title": "Region",
                    "url": "/region",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "autocomplete",
                            "name": "Region",
                            "width": 2,
                            "wordSearchEnabled": true,
                            "defaultKey": "regionKey",
                            "form": "RegionForm",
                            "url": "/region",
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddIngredientForm",
                    "title": "Ingredient",
                    "url": "/recipe/:recipeKey/ingredient",
                    "formFieldList": [
                        {
                            "id": "ingredientKey",
                            "type": "autocomplete",
                            "name": "Ingredient",
                            "wordSearchEnabled": true,
                            "form": "IngredientForm",
                            "url": "/ingredient",
                            "width": 2,
                            "required": true,
                            "defaultKey": "ingredientKey"
                        },
                        {
                            "id": "recipeKey",
                            "type": "autocomplete",
                            "name": "Recipe",
                            "wordSearchEnabled": true,
                            "url": "/recipe",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "recipeKey"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
