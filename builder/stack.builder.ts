import { RoadInterface } from "../model/road.interface";
import { Tile } from "../model/tile";

export class StackBuilder{

    public initTiles(): Tile[]{
        let tempStack: Tile[] = [];

        tempStack.push(new Tile());
        tempStack.push(StackBuilder.getTileWithCloister());
        tempStack.push(StackBuilder.getTileWithCloister());
        tempStack.push(StackBuilder.getTileWithCloister());
        tempStack.push(StackBuilder.getTileWithCloister());

        tempStack.push(StackBuilder.getTileWithCloisterAndRoad());
        tempStack.push(StackBuilder.getTileWithCloisterAndRoad());

        tempStack.push(StackBuilder.getCityTile());

        tempStack.push(StackBuilder.getDoorCityTile());
        tempStack.push(StackBuilder.getDoorCityTile());
        tempStack.push(StackBuilder.getDoorCityTile());
        tempStack.push(StackBuilder.getDoorCityTile());
        
        tempStack.push(StackBuilder.getDoorCityTileWithRoad());
        tempStack.push(StackBuilder.getDoorCityTileWithRoad());
        tempStack.push(StackBuilder.getDoorCityTileWithRoad());

        tempStack.push(StackBuilder.getHalfCityFarmTile());
        tempStack.push(StackBuilder.getHalfCityFarmTile());
        tempStack.push(StackBuilder.getHalfCityFarmTile());
        tempStack.push(StackBuilder.getHalfCityFarmTile());
        tempStack.push(StackBuilder.getHalfCityFarmTile());
        
        tempStack.push(StackBuilder.getHalfCityFarmTileWithRoad());
        tempStack.push(StackBuilder.getHalfCityFarmTileWithRoad());
        tempStack.push(StackBuilder.getHalfCityFarmTileWithRoad());
        tempStack.push(StackBuilder.getHalfCityFarmTileWithRoad());
        tempStack.push(StackBuilder.getHalfCityFarmTileWithRoad());

        tempStack.push(StackBuilder.getCrossingCityTile());
        tempStack.push(StackBuilder.getCrossingCityTile());
        tempStack.push(StackBuilder.getCrossingCityTile());
        
        tempStack.push(StackBuilder.getHalfCityFarmTileWithNoCityJoin());
        tempStack.push(StackBuilder.getHalfCityFarmTileWithNoCityJoin());
        
        tempStack.push(StackBuilder.getCrossingCityTileInverse());
        tempStack.push(StackBuilder.getCrossingCityTileInverse());
        tempStack.push(StackBuilder.getCrossingCityTileInverse());

        tempStack.push(StackBuilder.getTopCityTile());
        tempStack.push(StackBuilder.getTopCityTile());
        tempStack.push(StackBuilder.getTopCityTile());
        tempStack.push(StackBuilder.getTopCityTile());
        tempStack.push(StackBuilder.getTopCityTile());

        tempStack.push(StackBuilder.getTopCityTileWithRoadLeft());
        tempStack.push(StackBuilder.getTopCityTileWithRoadLeft());
        tempStack.push(StackBuilder.getTopCityTileWithRoadLeft());
        
        tempStack.push(StackBuilder.getTopCityTileWithRoadRight());
        tempStack.push(StackBuilder.getTopCityTileWithRoadRight());
        tempStack.push(StackBuilder.getTopCityTileWithRoadRight());

        tempStack.push(StackBuilder.getTopCityTileWithRoadTriple());
        tempStack.push(StackBuilder.getTopCityTileWithRoadTriple());
        tempStack.push(StackBuilder.getTopCityTileWithRoadTriple());

        tempStack.push(StackBuilder.getTopCityTileWithRoadCrossing());
        tempStack.push(StackBuilder.getTopCityTileWithRoadCrossing());
        tempStack.push(StackBuilder.getTopCityTileWithRoadCrossing());

        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());
        tempStack.push(StackBuilder.getCrossingRoadTile());

        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());
        tempStack.push(StackBuilder.getCrossingRoadTileV2());

        tempStack.push(StackBuilder.getRoadTileWithCroissing());
        tempStack.push(StackBuilder.getRoadTileWithCroissing());
        tempStack.push(StackBuilder.getRoadTileWithCroissing());
        tempStack.push(StackBuilder.getRoadTileWithCroissing());
        
        tempStack.push(StackBuilder.getRoadTileWithCroissingV2());

        return tempStack.sort(() => Math.random() - 0.5);
    }

    public static getTileWithCloister = (): Tile => Object.create(new Tile(
        false,
        true,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getTileWithCloisterAndRoad = (): Tile => Object.create(new Tile(
        false,
        true,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: true, right: false, left: false} as RoadInterface,
    ));

    public static getCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getDoorCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getDoorCityTileWithRoad = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        {top: false, bottom: true, right: false, left: false} as RoadInterface,
    ));

    public static getHalfCityFarmTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.CITY,
        Tile.FARM,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getHalfCityFarmTileWithRoad = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.CITY,
        Tile.FARM,
        {top: false, bottom: true, right: true, left: false} as RoadInterface,
    ));

    public static getCrossingCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getHalfCityFarmTileWithNoCityJoin = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        false,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getCrossingCityTileInverse = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getTopCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: false, right: false, left: false} as RoadInterface,
    ));

    public static getTopCityTileWithRoadLeft = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: true, right: false, left: true} as RoadInterface,
    ));

    public static getTopCityTileWithRoadRight = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: true, right: true, left: false} as RoadInterface,
    ));

    public static getTopCityTileWithRoadTriple = (): Tile => Object.create(new Tile(
        false,
        false,
        true,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: true, right: true, left: true} as RoadInterface,
    ));

    public static getTopCityTileWithRoadCrossing = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: false, right: true, left: true} as RoadInterface,
    ));

    public static getCrossingRoadTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: true, bottom: true, right: false, left: false} as RoadInterface,
    ));

    public static getCrossingRoadTileV2 = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: true, right: false, left: true} as RoadInterface,
    ));

    public static getRoadTileWithCroissing = (): Tile => Object.create(new Tile(
        false,
        false,
        true,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        {top: false, bottom: true, right: true, left: true} as RoadInterface,
    ));

    public static getRoadTileWithCroissingV2 = (): Tile => Object.create(new Tile(
        false,
        false,
        true,
        true,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        {top: true, bottom: true, right: true, left: true} as RoadInterface,
    ));

}