import React, { Fragment } from 'react';
import Navhelper from '../../helper/NavHelper';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import { withTranslation } from 'react-i18next';

class Mobilemenu extends Navhelper {
    render() {
        const { t } = this.props;
        return (
            <Fragment>
                <div className="sigma_logo-wrapper">  
                    <Link to="/ariel-aligner" className="sigma_logo">
                        <img src={process.env.PUBLIC_URL + "/assets/img/ariel_aligner.png"} alt="logo" width="190px" heiht="62px"style={{borderStyle:"solid", borderRadius:"15px", padding:"10px"}} />
                    </Link>
                </div>
                <ul className="navbar-nav">
                    {/* Data */}
                    {navigation.length > 0 ? navigation.map((item, i) => (
                        <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                            {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {t(item.linkText)} </Link> : <Link to={t(item.link)}> {t(item.linkText)} </Link>}
                            {item.child ?
                                <ul className="sub-menu" role="menu">
                                    {item.submenu.map((sub_item, i) => (
                                        <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                            {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {t(sub_item.linkText)} </Link> : <Link to={sub_item.link}> {t(sub_item.linkText)} </Link>}
                                            {sub_item.submenu ?
                                                <ul className="sub-menu">
                                                    {sub_item.submenu.map((third_item, i) => (
                                                        <li className="menu-item" key={i}><Link
                                                            to={third_item.link}>{t(third_item.linkText)}</Link>
                                                        </li>
                                                    ))}
                                                </ul> : null}
                                        </li>
                                    ))}
                                </ul>
                                : null
                            }
                        </li>
                    )) : null}
                    {/* Data */}
                </ul>
            </Fragment>
        );
    }
}

export default withTranslation()(Mobilemenu);