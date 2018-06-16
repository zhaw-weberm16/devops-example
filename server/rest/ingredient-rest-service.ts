import {AbstractRestService} from "./abstract-rest-service";
import {IngredientDatabase} from "../database/ingredient-database";

export class IngredientRestService extends AbstractRestService {

    constructor(app, private database: IngredientDatabase) {
        super(app, database);
    }

    protected initList() {
        super.initList();

        let service = this;
        this._app.get('/services/recipe/:recipeKey/ingredient', (req, res) => {
            service.database.read(req.params.recipeKey).then((recipe) => {
                service._database.list().then((rows) => {
                    // filter relations
                    let filteredRows = [];
                    for (let row of rows) {
                        if (Array.isArray(recipe.ingredient) && recipe.ingredient.includes(row._id)) {
                            filteredRows.push(row);
                        }
                    }
                    service._database.createPathList(filteredRows, res);
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        });
    }
}