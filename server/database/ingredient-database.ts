import {AbstractDatabase} from "./abstract-database";
import {PathListEntry} from "../data/path-list-entry";

export class IngredientDatabase extends AbstractDatabase {

    public getEntityName() {
        return "ingredient";
    }

    protected getSort() : any[] {
        return ['name'];
    }

    public createPathListEntry(entry:PathListEntry, entity:any) : Promise<PathListEntry> {
        entry.name = entity.name;
        return super.createPathListEntry(entry, entity);
    }


}