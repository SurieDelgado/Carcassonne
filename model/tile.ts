import { RoadInterface } from "./road.interface";

export class Tile{

    public static FARM      : number = 1;
    public static CITY      : number = 2;
    public static ROAD      : number = 3;
    public static CLOISTER  : number = 4;
    public static CROISSING : number = 5;

    public _top    : number = Tile.CITY;
    public _bottom : number = Tile.FARM;
    public _right  : number = Tile.FARM;
    public _left   : number = Tile.FARM;

    public _roads: RoadInterface = {
        top:    false,
        bottom: false,
        right:  true,
        left:   true
    } as RoadInterface;

    public _initialTile  !: boolean;
    public _hasCloister  !: boolean;
    public _hasCroissing !: boolean;
    public _landConnects !: boolean;

    constructor(
        initial      : boolean = true,
        hasCloister  : boolean = false,
        hasCroissing : boolean = false,
        landConnects :  boolean = true,
        top    : number = Tile.CITY,
        bottom : number = Tile.FARM,
        left   : number = Tile.FARM,
        right  : number = Tile.FARM,
        roads: RoadInterface = {
            top:    false,
            bottom: false,
            right:  true,
            left:   true
        } as RoadInterface
    ){
        this._initialTile  = initial;
        this._hasCloister  = hasCloister;
        this._hasCroissing = hasCroissing;
        this._landConnects = landConnects;
        this._top    = top;   
        this._bottom = bottom;
        this._left   = left;  
        this._right  = right; 
        this._roads = roads;
    }

}