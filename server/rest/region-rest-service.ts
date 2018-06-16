import {AbstractRestService} from "./abstract-rest-service";
import {PathListKey} from "../data/path-list-key";
import {PathListEntry} from "../data/path-list-entry";
import {RegionDatabase} from "../database/region-database";

export class RegionRestService extends AbstractRestService {

    constructor(app, private database: RegionDatabase) {
        super(app, database);
    }


    protected initList() {
        super.initList();

        let service = this;
        this._app.get('/services/recipe/:recipeKey/region', (req, res) => {

        });
    }

}