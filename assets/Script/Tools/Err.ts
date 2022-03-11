import { _decorator, game, Component } from 'cc';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('Err')
export class Err extends Component{

    onLoad() {
        Subscribe.listen("log err", this.name, this.console, this);
        Subscribe.listen("print err", this.name, this.print, this);
        Subscribe.listen("alert err", this.name, this.alert, this);
    }

    private console(err: string) {
        try { throw new Error(err); }
        catch (e) { console.error(e); }
    }

    private alert(err: string) {
        this.console(err);
        this.stopGame();
    }

    private print(err: string) {
        this.console(err);
        this.stopGame();
    }

    private stopGame() {
        // Stop and exit game;
        // game.end();
        game.pause();
    }
}
