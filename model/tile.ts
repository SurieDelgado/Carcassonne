export class Tile{

    public static FARM      : number = 1;
    public static CITY      : number = 2;
    public static ROAD      : number = 3;
    public static CLOISTER  : number = 4;
    public static CROISSING : number = 5;

    public _topLeft   !: number;
    public _topCenter !: number;
    public _topRigth  !: number;

    public _bottomLeft   !: number;
    public _bottomCenter !: number;
    public _bottomRigth  !: number;

    public _rightTop    !: number;
    public _rightCenter !: number;
    public _rightBottom !: number;

    public _leftTop    !: number;
    public _leftCenter !: number;
    public _leftBottom !: number;

    public _initialTile  !: boolean;
    public _hasCloister  !: boolean;
    public _hasCroissing !: boolean;
    public _landConnects !: boolean;

    constructor(
        initial      : boolean = true,
        hasCloister  : boolean = false,
        hasCroissing : boolean = false,
        landConnects :  boolean = true,
        topLeft      : number = Tile.CITY,
        topCenter    : number = Tile.CITY,
        topRigth     : number = Tile.CITY,
        bottomLeft   : number = Tile.FARM,
        bottomCenter : number = Tile.FARM,
        bottomRigth  : number = Tile.FARM,
        rightTop    : number = Tile.FARM,
        rightCenter  : number = Tile.ROAD,
        rightBottom   : number = Tile.FARM,
        leftTop     : number = Tile.FARM,
        leftCenter   : number = Tile.ROAD,
        leftBottom    : number = Tile.FARM,
    ){
        this._initialTile  = initial;
        this._hasCloister  = hasCloister;
        this._hasCroissing = hasCroissing;
        this._landConnects = landConnects;
        this._topLeft      = topLeft;
        this._topCenter    = topCenter;
        this._topRigth     = topRigth;
        this._bottomLeft   = bottomLeft;
        this._bottomCenter = bottomCenter;
        this._bottomRigth  = bottomRigth;
        this._rightTop     = rightTop;
        this._rightCenter  = rightCenter;
        this._rightBottom  = rightBottom;
        this._leftTop      = leftTop;
        this._leftCenter   = leftCenter;
        this._leftBottom   = leftBottom;
    }

}