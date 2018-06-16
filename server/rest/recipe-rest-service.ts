import {AbstractRestService} from "./abstract-rest-service";
import {RecipeDatabase} from "../database/recipe-database";

export class RecipeRestService extends AbstractRestService {

    constructor(app, private database: RecipeDatabase) {
        super(app, database);
    }

    protected initList() {
        super.initList();

        let service = this;
        this._app.get('/services/ingredient/:ingredientKey/recipe', (req, res) => {
            service._database.list().then((rows) => {
                // filter relations
                let filteredRows = [];
                for (let row of rows) {
                    if (row.ingredient != null && row.ingredient.includes(req.params.ingredientKey)) {
                        filteredRows.push(row);
                    }
                }
                service._database.createPathList(filteredRows, res);
            }).catch((err) => {
                console.log(err);
            })
        });
        this._app.get('/services/ingredient/:ingredientKey/recipe/:recipeKey', (req, res) => {
            res.json({ ingredientKey: req.params.ingredientKey, recipeKey: req.params.recipeKey });
        });


        this._app.get('/services/region/:regionKey/recipe', (req, res) => {
            service._database.list().then((rows) => {
                // filter relations
                let filteredRows = [];
                for (let row of rows) {
                    if (row.region != null && row.region.includes(req.params.regionKey)) {
                        filteredRows.push(row);
                    }
                }
                service._database.createPathList(filteredRows, res);
            }).catch((err) => {
                console.log(err);
            })
        });
        this._app.get('/services/services/region/:regionKey/recipe/:regionKey', (req, res) => {
            res.json({ regionKey: req.params.regionKey, recipeKey: req.params.recipeKey });
        });
        this._app.get('/services/recipe/:recipeKey/ingredient/:ingredientKey', (req, res) => {
            res.json({ ingredientKey: req.params.ingredientKey, recipeKey: req.params.recipeKey });
        });
    }

    protected initUpdate() {
        super.initUpdate();

        let service = this;
        this._app.put('/services/recipe/:recipeKey/ingredient', async (req, res) => {
            let recipe = await service.database.addIngredient(req.params.recipeKey, req.body.ingredientKey);
            res.json(recipe);
        });
    }

    protected initDelete() {
        super.initDelete();

        let service = this;
        this._app.delete('/services/recipe/:recipeKey/ingredient/:ingredientKey', async (req, res) => {
            let recipe = await service.database.deleteIngredient(req.params.recipeKey, req.params.ingredientKey);
            res.json(recipe);
        });
    }
}