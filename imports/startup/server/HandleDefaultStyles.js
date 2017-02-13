/**
 * Created by bence on 2017.02.10..
 */
import { DefaultStylesContainer } from '../../ui/common/StyleHelpers.js';

// here come all the style files
import '/imports/ui/common/common.style.js';
import '/imports/ui/components/ProjectListItem/ProjectListItem.style.js';
import '/imports/ui/components/NotFound/NotFound.style.js';

import { Styles } from '/imports/api/styles/styles.collection.js';

const ResetAllStyles = () => {
    Styles.remove({});
    _.map(DefaultStylesContainer.getStyleList(), item => {
        Styles.insert(item);
    });
};

export default ResetAllStyles;
