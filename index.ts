import { StackBuilder } from "./builder/stack.builder";
import { Carcassone } from "./carcassonne";
import { TileHelper } from "./helper/tile.helper";
import { PieceNode } from "./model/node";
import { Tile } from "./model/tile";

let game: Carcassone = new Carcassone();

game.play();


let tile1: Tile = StackBuilder.getTopCityTileWithRoadCrossing();
let tile2: Tile = new TileHelper().rotateTile(StackBuilder.getDoorCityTileWithRoad());

console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.UP));
console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.DOWN));
console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.LEFT));
console.log(new TileHelper().connectionIsPosible(tile1,tile2,PieceNode.RIGHT));