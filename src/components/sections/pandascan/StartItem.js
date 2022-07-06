import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import start from "../../../data/pandascan/start.json";
import { Tab, Nav, Accordion, Button, Card } from "react-bootstrap";

class StartItem extends Component {      
    render() {   
        const { t } = this.props;
        return (       
            <div className="section">
            <div className="container">
                    <div className="section-title centered">
                        <h3 className="title-panda-advantage text" style={{ color: "black", fontFamily: "Open sans , sans-serif" }}>
                            {t('pandaStartBigTitle')}
                        </h3>
                    </div>
                <Tab.Container defaultActiveKey={"tab10"}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sigma_accordion style-13">
                                <div className="sigma_tab-item style-4">
                                    <Nav as="ul" variant="tabs">
                                        {/* Data */}
                                        {start.map((item, i) => (
                                            <Nav.Item as="li" key={i}>
                                                <Nav.Link eventKey={"tab" + 1 + i}>
                                                    {t(item.title)}
                                                    <i className="fal fa-chevron-right" />
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                        {/* Data */}
                                    </Nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <Tab.Content className="mt-5 mt-lg-0">
                                {start.map((item, i) => (
                                    <Tab.Pane key={i} eventKey={"tab" + 1 + i}>
                                        <div className="sigma_accordion style-13">
                                            <Accordion defaultActiveKey={1} alwaysOpen >
                                                    <Card key={i}>
                                                            <Card.Body>
                                                                {t(item.desc)}
                                                            </Card.Body>
                                                    </Card>
                
                                            </Accordion>
                                        </div>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>
        );
    }
}
   
export default withTranslation()(StartItem);
