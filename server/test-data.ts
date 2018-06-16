import {IngredientDatabase} from "./database/ingredient-database";
import {RecipeDatabase} from "./database/recipe-database";
import {RegionDatabase} from "./database/region-database";

export class TestData {

    public static init() {
        let recipeDatabase = new RecipeDatabase();
        let ingredientDatabase = new IngredientDatabase();
        let regionDatabase = new RegionDatabase();

        let promises = [];
        promises.push(ingredientDatabase.create({name: 'Zwiebeln', season: 'Sommer', calories: '40'}));
        promises.push(ingredientDatabase.create({name: 'Peperoni', season: 'Sommer', calories: '40'}));
        promises.push(ingredientDatabase.create({name: 'Karotten', season: 'Immer', calories: '41'}));
        promises.push(ingredientDatabase.create({name: 'Knoblauch', season: 'Juli bis April', calories: '142'}));
        promises.push(ingredientDatabase.create({name: 'Olivenöl', season: 'Immer', calories: '844'}));
        promises.push(ingredientDatabase.create({name: 'Mais', season: 'August bis Oktober', calories: '365'}));
        promises.push(ingredientDatabase.create({name: 'Rinderhackfleisch', season: '-', calories: '332'}));
        promises.push(ingredientDatabase.create({name: 'Rotwein', season: '-', calories: '85'}));
        promises.push(ingredientDatabase.create({name: 'Gehackte Tomaten', season: '-', calories: '25'}));
        promises.push(ingredientDatabase.create({name: 'Pouletbrust', season: '-', calories: '239'}));
        promises.push(ingredientDatabase.create({name: 'Rote Curry Paste', season: '-', calories: '112'}));
        promises.push(ingredientDatabase.create({name: 'Kokosnussmilch', season: '-', calories: '230'}));
        promises.push(ingredientDatabase.create({name: 'Asiatisches Gemüse', season: '-', calories: '134'}));
        promises.push(ingredientDatabase.create({name: 'Jasminreis', season: '-', calories: '350'}));
        promises.push(ingredientDatabase.create({name: 'Fischsauce', season: '-', calories: '35'}));
        promises.push(ingredientDatabase.create({name: 'Tomaten', season: 'Sommer', calories: '18'}));
        promises.push(ingredientDatabase.create({name: 'Ei', season: '-', calories: '162'}));
        promises.push(ingredientDatabase.create({name: 'Senf', season: '-', calories: '35'}));
        promises.push(ingredientDatabase.create({name: 'Hamburgerbrötchen', season: '-', calories: '237'}));
        promises.push(ingredientDatabase.create({name: 'Essiggurken', season: '-', calories: '11'}));
        promises.push(ingredientDatabase.create({name: 'Eisbergsalat', season: 'Mai bis Oktober', calories: '14'}));
        promises.push(ingredientDatabase.create({name: 'Ketchup', season: '-', calories: '112'}));

            Promise.all(promises).then((ingredients) => {
                promises = [];

                promises.push(regionDatabase.create({name: 'Europa'}));
                promises.push(regionDatabase.create({name: 'Asien'}));
                promises.push(regionDatabase.create({name: 'Amerika'}));

                    Promise.all(promises).then((regions) => {
                        promises = [];
                        promises.push(recipeDatabase.create({
                            recipeName: 'Spaghetti Bolognese',
                            preparationTime: '45',
                            recipe: '1. Zwiebeln, Peperoni, Knoblauch und Karotten in kleine Stücke schneiden\n2. Olivenöl in einer Bratpfanne heiss werden lassen\n3. Zwiebeln, Gemüse und Mais andämpfen\n4. Fleisch beigeben und anbraten\n5. Mit Wein ablöschen und auskochen\n6. Gehackte Tomaten beigeben\n7. Würzen und abschmecken\n\nNebenbei Spaghetti al dente kochen - En guete!',
                            ingredient: [ingredients[0].key, ingredients[1].key, ingredients[2].key, ingredients[3].key, ingredients[4].key, ingredients[5].key, ingredients[6].key, ingredients[7].key, ingredients[8].key],
                            region: regions[0].key
                        }));
                        promises.push(recipeDatabase.create({
                            recipeName: 'Rotes Thai Curry',
                            preparationTime: '30',
                            recipe: '1. Pouletbrust in Stücke schneiden\n2. Pouletstücke anbraten und auf die Seite stellen\n3. Kokosnussmilch und rote Curry Paste zusammen aufkochen\n4. Asiatisches Gemüse beigeben und ca 15 Minuten köcheln lassen\n5. Angebratenes Poulet hinzugeben und ca 3 Minuten weiterköcheln\n6. Mit Fischsauce abschmecken\n\nNebenbei Jasminreis gemäss Anleitung auf Packung kochen - En guete!',
                            ingredient: [ingredients[0].key, ingredients[9].key, ingredients[10].key, ingredients[11].key, ingredients[12].key, ingredients[13].key, ingredients[14].key],
                            region: regions[1].key
                        }));
                        promises.push(recipeDatabase.create({
                            recipeName: 'Hamburger',
                            preparationTime: '40',
                            recipe: '1. Zwiebeln würfeln und mit Hackfleisch, Ei, Senf, 2 EL Wasser, Salz, Pfeffer und Paprika gut vermischen\n2. Aus dem Hackteig Hamburger formen\n3. Tomaten, Zwiebeln und Essiggurken in Scheiben schneiden\n4. Hamburgerbrötchen toasten\n5. Hamburger anbraten\n6. Währenddessen Hamburgerbrötchen mit Sauce bestreichen und Tomate, Zwiebeln, Essiggurken und Eisbergsalat darauf verteilen\n7. Hamburgerfleisch auf den Burger legen und den Burger zudecken - En guete!',
                            ingredient: [ingredients[0].key, ingredients[6].key, ingredients[15].key, ingredients[16].key, ingredients[17].key, ingredients[18].key, ingredients[19].key, ingredients[20].key, ingredients[21].key],
                            region: regions[2].key
                        }));
            }
            ).catch((err) => {
                console.log(err);
                }
            );
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    }
}