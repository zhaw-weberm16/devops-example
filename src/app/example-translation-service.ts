import {Injectable} from "@angular/core";
import {TranslationService} from "path-framework-weberm16/app/path-framework/service/translation.service"

@Injectable()
export class ExampleTranslationService extends TranslationService {

    protected getTranslation(key:string) : string {
        let myTranslations = this.createTranslationMap(this.getExampleTranslations());
        // prefer custom translations
        if (myTranslations.get(key) == null) {
            return super.getTranslation(key);
        }
        return myTranslations.get(key);
    }

    private getExampleTranslations() {
        let languageCode: string = this.getUserLanguage();

        // put additional application translations here
        if (languageCode == "en") {
            return {
                "Recipes": "Recipes",
                "Ingredients": "Ingredients",
                "Regions": "Regions",
                "NewRecipe": "New Recipe",
                "RecipeName": "Recipe name",
                "PreparationtimeInMinutes": "Preparationtime (min)",
                "Region": "Region",
                "Recipe": "Recipe",
                "NewIngredient": "New Ingredient",
                "Ingredient": "Ingredient",
                "IngredientName": "Ingredient name",
                "Season": "Season",
                "CaloriesPer100g": "Calories per 100g",
                "NewRegion": "New Region",
                "ShowRecipe": "Show Recipe",
                "AddIngredient": "Add Ingredient",
                "ShowIngredient": "Show Ingredient",
                "EditRegion": "Edit Region"
            }
        } else {
            return {
                "Recipes": "Rezepte",
                "Ingredients": "Zutaten",
                "Regions": "Regionen",
                "NewRecipe": "Neues Rezept",
                "RecipeName": "Rezeptname",
                "PreparationtimeInMinutes": "Zubereitungszeit (min)",
                "Region": "Region",
                "Recipe": "Rezept",
                "NewIngredient": "Neue Zutat",
                "Ingredient": "Zutat",
                "IngredientName": "Name der Zutat",
                "Season": "Saison",
                "CaloriesPer100g": "Kalorien pro 100g",
                "NewRegion": "Neue Region",
                "ShowRecipe": "Rezept anzeigen",
                "AddIngredient": "Zutat hinzufügen",
                "ShowIngredient": "Zutat anzeigen",
                "EditRegion": "Region bearbeiten"
            };
        }
    }

}