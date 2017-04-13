/**
 * Created by bence on 2017.02.10..
 */
import { DefaultStylesContainer } from '../../ui/common/StyleHelpers.js';

// here come all the style files
import '/imports/ui/common/common.style.js';
import '/imports/ui/components/ProjectList/ProjectListItem/ProjectListItem.style.js';
import '/imports/ui/components/ProjectList/ProjectList.style.js';
import '/imports/ui/components/MainMenu/MainMenu.style.js';
import '/imports/ui/components/Button/Button.style.js';
import '/imports/ui/App.style.js';
import '/imports/ui/components/NotFound/NotFound.style.js';
import '/imports/ui/components/ObjectList/ObjectListMenu.style.js';
import '/imports/ui/components/ObjectList/ObjectListItem/ObjectListItem.style.js';

import { Styles } from '/imports/api/styles/styles.collection.js';

const ResetAllStyles = () => {
    Styles.remove({});
    _.map(DefaultStylesContainer.getStyleList(), item => {
        Styles.insert(item);
    });
};

export default ResetAllStyles;
