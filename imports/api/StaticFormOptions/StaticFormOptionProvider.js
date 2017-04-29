/**
 * Created by bence on 2017.04.07..
 */
import StaticStrings from './StaticFormOptions.json';

class StaticFormOptionProvider {
    constructor() {
        this.cache = {};
    }
    get(stringId) {
        let result = this.cache[stringId];
        if (!result) {
            const locale = 'hu';
            const list = StaticStrings[stringId];
            const keys = Object.keys(list);
            keys.sort((a, b) => {
                const i = parseInt(a.split('_').pop(), 10);
                const j = parseInt(b.split('_').pop(), 10);

                if (isNaN(i) && isNaN(j)) {
                    return 0;
                } else if (isNaN(i)) {
                    return 1;
                } else if (isNaN(j)) {
                    return -1;
                }

                return i - j;
            });

            result = _.map(keys, (key, index) => {
                return {
                    label: list[keys[index]][locale],
                    value: `static_strings.${stringId}.${keys[index]}`,
                };
            });

            this.cache[stringId] = result;
        }

        return result;
    }
}

export default new StaticFormOptionProvider();
