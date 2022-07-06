import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { withTranslation } from 'react-i18next';


class ProjectPlanning extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  render() {
    const mapIndexToColor = {
      0: "#F582AD",
      1: "#FBCBDD",
      2: "#FCDDE9",
      3: "#FEF0F5"
    }
    const { t } = this.props;
    const  features = [
      {
        title: t('GouttiersServicesItem1Title'),
        desc: t('GouttiersServicesItem1Desc'),
      },
      {
        title: t('GouttiersServicesItem2Title'),
        desc: t('GouttiersServicesItem2Desc'),
      },
      {
        title: t('GouttiersServicesItem3Title'),
        desc: t('GouttiersServicesItem3Desc'),
      },
      {
        title: t('GouttiersServicesItem4Title'),
        desc: t('GouttiersServicesItem4Desc'),
      },
    ];
    return (
      <React.Fragment>
        <section className="section bg-white-new">
          <Container>
            <Row >
              <Col lg={12}>
                <div className="features-absolute rounded bg-white shadow gouttiere-service-position" style={{zIndex:1}}>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Col lg={12} md={12}  >
                      <Row style={{justify:"center"}}>

                      {features.map((feature,index)=>
                        <Col md={3} xs={12} style={{backgroundColor: mapIndexToColor[index]}} >
                          <div className="d-flex features p-4" >
                            <div className="icon text-center rounded-circle color-white-new me-3 mt-2">
                              <i className="uil uil-constructor align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 style={{fontSize:"20px", color:"#ED1566", wordBreak:"break-word"}}>{feature.title}</h4>
                              <p className="text-desc-new  para mb-0">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </Col>)}

                       
                      </Row>
                    </Col>

                   
                  </Row>
                </div>
              </Col>


            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
} 
export default withTranslation()(ProjectPlanning);

