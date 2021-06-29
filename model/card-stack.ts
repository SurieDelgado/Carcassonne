import { StackBuilder } from "../builder/stack.builder";
import { Tile } from "./tile";

export class CardStack{

    public stack: Tile[] = new StackBuilder().initTiles();

    constructor(){
    }


}