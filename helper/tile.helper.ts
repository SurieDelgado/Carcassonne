import { PieceNode } from "../model/node";
import { RoadInterface } from "../model/road.interface";
import { Tile } from "../model/tile";

export class TileHelper{

    public rotateTile(tile: Tile): Tile{
        let tileAux: Tile = new Tile(
            tile._initialTile,
            tile._hasCloister,
            tile._hasCroissing,
            tile._landConnects,
            tile._left,
            tile._right,
            tile._bottom,
            tile._top,
            {
                top: tile._roads.left,
                bottom: tile._roads.right,
                left: tile._roads.bottom,
                right: tile._roads.top,
            } as RoadInterface
        );

        return tileAux;
    }

    public connectionIsPosible = (originalTile: Tile, toConnectTile: Tile, direction: number): boolean => 
            this._verifyLandTypeConnection(originalTile,toConnectTile,direction) && 
            this._verifyRoadConnection(originalTile,toConnectTile,direction);

    private _verifyLandTypeConnection(originalTile: Tile, toConnectTile: Tile, direction: number): boolean{
        let connectionAllowed: boolean = false;
        switch(direction){
            case PieceNode.UP: 
                connectionAllowed = originalTile._top == toConnectTile._bottom;
            break;
            case PieceNode.DOWN:
                connectionAllowed = originalTile._bottom == toConnectTile._top;
             break;
            case PieceNode.LEFT: 
                connectionAllowed = originalTile._left == toConnectTile._right;
            break;
            case PieceNode.RIGHT: 
                connectionAllowed = originalTile._right == toConnectTile._left;
            break;
        }
        return connectionAllowed;
    }

    private _verifyRoadConnection(originalTile: Tile, toConnectTile: Tile, direction: number): boolean{
        let connectionAllowed: boolean = false;
        switch(direction){
            case PieceNode.UP: 
                connectionAllowed = this.xand(originalTile._roads.top,toConnectTile._roads.bottom);
            break;
            case PieceNode.DOWN:
                connectionAllowed = this.xand(originalTile._roads.bottom,toConnectTile._roads.top);
             break;
            case PieceNode.LEFT: 
                connectionAllowed = this.xand(originalTile._roads.left,toConnectTile._roads.right);
            break;
            case PieceNode.RIGHT: 
                connectionAllowed = this.xand(originalTile._roads.right,toConnectTile._roads.left);
            break;
        }
        return connectionAllowed;
    }

    xand = (a: boolean, b: boolean): boolean => !((!a&&b) || (a&&!b));

}