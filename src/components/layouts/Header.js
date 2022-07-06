import React, { Fragment } from 'react';
import Navhelper from '../../helper/NavHelper';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import {
    Container,
    Form,
    Modal,
    ModalBody,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownItem
} from "reactstrap";
import * as flagIcons from '../../assets/icons/flags';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';


const FlagIcon = ({ name }) => {
    const TagName = flagIcons[name];
    return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};

class Header extends Navhelper {
    constructor(props) {
        super(props);
        this.state = {
            lang: localStorage.getItem('language') || "en",
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage = (language) => {
        this.setState({ lang: language });
    };
    render() {
        const { t } = this.props;
        return (
            <Fragment>
                {/* Mobile Menu */}
                <aside className={this.state.navMethod === true ? 'sigma_aside aside-open' : 'sigma_aside'}>
                    <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
                        <span />
                        <span />
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="sigma_aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Mobile Menu */}
                {/* Header */}
                <header className="sigma_header header-absolute style-5 other can-sticky">
                    <div className="sigma_header-middle">
                        <div className="container-fluid" style={{ paddingRight: "0px" }}>
                            <div className="navbar">
                                <div className="sigma_logo-wrapper">
                                    <Link to="/" className="sigma_logo">
                                        <img src="assets/img/logo_ariel.jpg" width="190px" height="auto" alt="logo" style={{ marginBottom: "22px" }} />
                                    </Link>
                                </div>
                                <ul className="navbar-nav">
                                    {/* Data */}
                                    {navigation.map((item, i) => (
                                        <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                            {item.child === true ?
                                                (<div className='has-submenu'>
                                                    <Link style={{ fontFamily: "Open sans , sans-serif" }} to="#">{t(item.linkText)}</Link>
                                                    <span className="menu-arrow"></span>
                                                </div>
                                                )
                                                :
                                                <Link style={{ fontFamily: "Open sans , sans-serif" }} to={item.link}>{t(item.linkText)}</Link>
                                            }
                                            {item.child === true ?
                                                <ul className="sub-menu">
                                                    {item.submenu.map((item, i) => (
                                                        <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                                            {item.child === true ?
                                                                <Link to="#">{t(item.linkText)}</Link>
                                                                :
                                                                <Link style={{ fontFamily: "Open sans , sans-serif" }} to={item.link}>{t(item.linkText)}</Link>
                                                            }
                                                            {item.child === true ?
                                                                <ul className="sub-menu">
                                                                    {item.submenu.map((item, i) => (
                                                                        <li className="menu-item" style={{ lineHeight: "2.5" }} key={i}>
                                                                            <Link to={item.link}>{t(item.linkText)}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                : ''}
                                                        </li>
                                                    ))}
                                                </ul>
                                                : ''}
                                        </li>
                                    ))}
                                    {/* Data */}

                                </ul>

                                <div className="sigma_header-controls style-2">
                                    <ul className="sigma_header-controls-inner">
                                        {/* LANGUAGE MENU */}
                                        <li className="search-trigger header-controls-item d-none d-sm-block">
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" className="btn btn-link text-decoration-none p-0 pe-2">
                                                    <span>
                                                        <FlagIcon name={
                                                            this.state.lang === "en" ? "USFlag"
                                                                : this.state.lang === "fr" ? "FRFlag"
                                                                    : "HEFlag"} />
                                                    </span>
                                                </DropdownToggle>
                                                <DropdownMenu className="dd-menu dropdown-menu-end bg-white   border-0 mt-3 py-0" style={{ minWidth: '10px' }}>
                                                <DropdownItem style={{
                                                        width: "100px",
                                                        lineHeight: "1.2em",
                                                        display: " block",
                                                        padding: "15px 30px",
                                                        alignItems: "center",
                                                        border: "0",
                                                        backgroundColor: "transparent",
                                                        outline: "0",
                                                        cursor: "pointer"
                                                    }}
                                                        onClick={() => {
                                                            this.changeLanguage("he");
                                                            i18n.changeLanguage("he");
                                                            localStorage.setItem('language', 'he');
                                                        }}>
                                                        <span style={{ color: "black" }}>
                                                            <FlagIcon name={"HEFlag"} />
                                                            {' HE'}
                                                        </span>
                                                    </DropdownItem>
                                                    <DropdownItem style={{
                                                        width: "100px",
                                                        lineHeight: "1.2em",
                                                        display: " block",
                                                        padding: "15px 30px",
                                                        alignItems: "center",
                                                        border: "0",
                                                        backgroundColor: "transparent",
                                                        outline: "0",
                                                        cursor: "pointer", 
                                                    }} onClick={() => {
                                                        this.changeLanguage("en");
                                                        i18n.changeLanguage("en");
                                                        localStorage.setItem('language', 'en');
                                                    }}>
                                                        <span style={{ color: "black" }}>
                                                            <FlagIcon name={"USFlag"} />
                                                            {' EN'}
                                                        </span>
                                                    </DropdownItem>
                                                    <DropdownItem style={{
                                                        width: "100px",
                                                        lineHeight: "1.2em",
                                                        display: " block",
                                                        padding: "15px 30px",
                                                        alignItems: "center",
                                                        border: "0",
                                                        backgroundColor: "transparent",
                                                        outline: "0",
                                                        cursor: "pointer"
                                                    }}
                                                        onClick={() => {
                                                            this.changeLanguage("fr");
                                                            i18n.changeLanguage("fr");
                                                            localStorage.setItem('language', 'fr');
                                                        }}>
                                                        <span style={{ color: "black" }}>
                                                            <FlagIcon name={"FRFlag"} />
                                                            {' FR'}
                                                        </span>
                                                    </DropdownItem>
                                             
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </li>
                                        {/* END LANGUAGE MENU */}
                                        <Link to="/ariel-aligner">
                                            <li className="d-none d-sm-block">
                                                <div className="col-lg-3 text-lg-right">
                                                    <div className="mt-4 mt-lg-0" style={{ borderStyle: "solid", borderInlineWidth: "2px", borderRadius: "8px", padding: "10px", borderColor: "#ED1566" }}>
                                                        <img width="90px" height="auto" src="./assets/img/ariel_aligner.png">
                                                        </img>
                                                    </div>
                                                </div>


                                            </li>
                                        </Link>

                                        <li className="aside-toggle aside-trigger" onClick={this.toggleNav}>
                                            <span />
                                            <span />
                                            <span />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header */}
                {/* Search Bar */}
                <div className={this.state.searchMethod === true ? 'search-form-wrapper open' : 'search-form-wrapper'}>
                    <div className="search-trigger sigma_close" onClick={this.toggleSearch}>
                        <span />
                        <span />  
                    </div>
                    <form className="search-form">
                        <input type="text" placeholder="Search..." required />
                        <button type="submit" className="search-btn">
                            <i className="fal fa-search m-0" />
                        </button>
                    </form>
                </div>
                {/* Search Bar */}
            </Fragment>
        );
    }
}

export default withTranslation()(Header);