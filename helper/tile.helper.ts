import { Tile } from "../model/tile";

export class TileHelper{

    public rotateTile(tile: Tile): Tile{
        let tileAux: Tile = new Tile(
            tile._initialTile,
            tile._hasCloister,
            tile._hasCroissing,
            tile._landConnects,
            tile._leftBottom,
            tile._leftCenter,
            tile._leftTop,
            tile._rightTop,
            tile._rightCenter,
            tile._rightBottom,
            tile._topLeft,
            tile._topCenter,
            tile._topRigth,
            tile._bottomLeft,
            tile._bottomCenter,
            tile._bottomRigth,
        );

        return tileAux;
    }

}