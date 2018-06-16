import {AbstractDatabase} from "./abstract-database";
import {PathListEntry} from "../data/path-list-entry";

export class RegionDatabase extends AbstractDatabase {

    public getEntityName() {
        return "region";
    }

    protected getSort() : any[] {
        return ['name'];
    }

    public createPathListEntry(entry: PathListEntry, entity: any) {
        entry.name = entity.name;
        return super.createPathListEntry(entry, entity);
    }


}