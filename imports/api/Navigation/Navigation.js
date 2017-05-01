/**
 * Created by bence on 2017.04.30..
 */

class Navigation {
    set history(value) {
        this._history = value;
    }

    goTo(path) {
        this._history.push(path);
    }

    goBack() {
        this._history.go(-1);
    }
}

export default new Navigation();
