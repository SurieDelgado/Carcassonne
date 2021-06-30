import { TileHelper } from "../helper/tile.helper";
import { Tile } from "./tile";

export class PieceNode{

    static UP    : number = 1;
    static DOWN  : number = 2;
    static LEFT  : number = 3;
    static RIGHT : number = 4;

    public _tile  !: Tile;
    public up     !: Node;
    public down   !: Node;
    public left   !: Node;
    public right  !: Node;

    constructor(tile: Tile){
        this._tile = tile;
    }

    public tryConection = (toConnectTile: Tile, direction: number) => 
                                    new TileHelper().connectionIsPosible(this._tile, toConnectTile,direction);
}