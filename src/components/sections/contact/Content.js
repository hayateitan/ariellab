import React, { Component, Fragment } from 'react';
import Contacticons from './Contacticons';
import Contactform from './Contactform';
import Contactmap from './Contactmap';
import Breadcrumbs_contact from '../../layouts/Breadcrumbs_contact';
import { withTranslation } from 'react-i18next';

class Content extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('footerContact');
        return (
            <Fragment>
                <Contactmap />
                <Contacticons />   
                <Contactform />
                <Breadcrumbs_contact breadcrumb={{ pagename: pagelocation }} />

            </Fragment>
        );
    }
}

export default withTranslation()(Content);