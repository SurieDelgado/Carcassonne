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
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
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
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
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
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getDoorCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getDoorCityTileWithRoad = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getHalfCityFarmTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getHalfCityFarmTileWithRoad = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getCrossingCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getHalfCityFarmTileWithNoCityJoin = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        false,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
    ));

    public static getCrossingCityTileInverse = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
    ));

    public static getTopCityTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
    ));

    public static getTopCityTileWithRoadLeft = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
    ));

    public static getTopCityTileWithRoadRight = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
    ));

    public static getTopCityTileWithRoadTriple = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
    ));

    public static getTopCityTileWithRoadCrossing = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.CITY,
        Tile.CITY,
        Tile.CITY,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
    ));

    public static getCrossingRoadTile = (): Tile => Object.create(new Tile(
        false,
        false,
        false,
        true,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
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
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
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
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
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
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
        Tile.FARM,
        Tile.ROAD,
        Tile.FARM,
    ));

}