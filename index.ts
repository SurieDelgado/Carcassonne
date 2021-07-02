import { StackBuilder } from "./builder/stack.builder";
import { Carcassone } from "./carcassonne";
import { TileHelper } from "./helper/tile.helper";
import { PieceNode } from "./model/node";
import { Tile } from "./model/tile";

let game: Carcassone = new Carcassone();

game.play();


let tile1: Tile = StackBuilder.getDoorCityTile();
let tile2: Tile = StackBuilder.getHalfCityFarmTileWithRoad();
/* let tile2: Tile = StackBuilder.getHalfCityFarmTileWithRoad(); */

console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.UP));
console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.DOWN));
console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.LEFT));
console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.RIGHT));