import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";
import StepperComponent from "./StepperComponent";

import { pinkColor } from "assets/jss/material-kit-react";
import { Link } from "react-router-dom";

export default function Confirmation(props) {
  const {
    rest,
    classes,
    getStepContent,
    activeStep,
    steps,
    packages,
    alaCarte,
    specialPackage,
    handleBack,
    handleReset,
    handleNext,
    isStepOptional,
    handleSkip,
    handleReturn,
    handleSelectedPage,
    customer
  } = props;

  const [allPackages, setAllPackages] = React.useState([]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const combinePackages = () => {
    let _allPackage = [];

    if (allPackages.length > 0) _allPackage.push(allPackages)
    if (packages.item.filter(el => el.isAvailed).length > 0) _allPackage.push(...packages.item.filter(el => el.isAvailed))
    if (alaCarte.filter(el => el.isAvailed).length > 0) _allPackage.push(...alaCarte.filter(el => el.isAvailed))
    if (specialPackage.item.filter(el => el.isAvailed).length > 0) _allPackage.push(...specialPackage.item.filter(el => el.isAvailed))

    _allPackage.forEach(el => el.unit_cost = Number(el.unit_cost))
    setAllPackages(_allPackage)
  }

  useEffect(() => {
    if (packages.item.filter(el => el.isAvailed).length > 0 || alaCarte.filter(el => el.isAvailed).length > 0 || specialPackage.item.filter(el => el.isAvailed).length > 0) combinePackages();
  }, [])

  return (
    <div>
      {/* <Header
        absolute
        color="tr"
        fixed
        rightLinks={<HeaderLinks data={data}/>}
        {...rest}
      /> */}

      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer justify="center">
              <h2 className={classes.dark}>Confirmation</h2>
              <h4 className={classes.dark}>
                Click "show" to view the photo selection from each product
              </h4>
            </GridContainer>

            <div className={classes.root}>
              <StepperComponent
                activeStep={activeStep}
                steps={steps}
                classes={classes}
                handleReturn={handleReturn}
              />
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">


          <GridItem xs={12} sm={12} md={6}>
            {
              packages && packages.item.filter(el => el.isAvailed).length > 0 ?
                <div>
                  <GridContainer className={classes.headerLine}>

                    <div>
                      <span className={classes.icons}>
                        <i className="fa fa-images" />
                      </span>
                      <span className={classes.title}>{packages.package_name.toUpperCase()}</span>
                      <span>
                        <Button simple color="pink" onClick={() => handleSelectedPage("viewPackage")}>
                          View photos
                        </Button>
                      </span>
                    </div>

                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      {
                        packages.item.filter(el => el.isAvailed).map(type => (
                          <div>
                            <span className={classes.faCheck}>
                              <i class="fas fa-check"></i>
                            </span>
                            <span className={classes.title}>{type.availed} x {type.product_name}</span>
                          </div>
                        ))
                      }
                    </GridItem>
                  </GridContainer>

                </div>
                : null
            }
            {
              specialPackage.item.filter(el => el.isAvailed).length > 0 ?
                <div>
                  <GridContainer className={classes.headerLine}>
                    <div>
                      <span className={classes.icons}>
                        <i className="fa fa-images" />
                      </span>
                      <span className={classes.title}>{specialPackage.package_name.toUpperCase()}</span>
                      {/* <Button simple disabled color="pink" onClick={() => handleSelectedPage("viewPackage")}>
                        View photos
                        </Button> */}
                    </div>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      {
                        specialPackage.item.filter(el => el.isAvailed).map(type => (
                          <div>
                            <span className={classes.faCheck}>
                              <i class="fas fa-check"></i>
                            </span>
                            <span className={classes.title}>{type.availed} x {type.product_name}</span>
                          </div>
                        ))
                      }
                    </GridItem>
                  </GridContainer>

                </div>
                : null
            }

            {
              alaCarte && alaCarte.length > 0 && alaCarte.filter(el => el.isAvailed).length > 0 ?
                <div>
                  <GridContainer className={classes.headerLine}>
                    <div>
                      <span className={classes.icons}>
                        <i className="fa fa-plus" />
                      </span>
                      <span className={classes.title}>Additional Options</span>
                      <span className={classes.title}>Price</span>
                      {/* <Button simple disabled color="pink" onClick={() => handleSelectedPage("viewPackage")}>
                        View photos
                        </Button> */}
                    </div>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      {
                        alaCarte.filter(el => el.isAvailed).map(ala => (
                          <div>
                            <span className={classes.faCheck}>
                              <i class="fas fa-check"></i>
                            </span>
                            <span className={classes.title}>{ala.availed} x {ala.product_name}</span>
                          </div>
                        ))
                      }
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      {
                        alaCarte.filter(el => el.isAvailed).map(ala => (
                          <div>
                            <span className={classes.faCheck}>
                              <i class="fas fa-check"></i>
                            </span>
                            <span className={classes.title}>{ala.availed} x {ala.product_name}</span>
                          </div>
                        ))
                      }
                    </GridItem>
                  </GridContainer>

                </div>
                : null
            }
          </GridItem>

          <GridItem
            xs={12}
            sm={12}
            md={6}
            className={classes.confirmationBorder}
          >
            <GridContainer justify="center" className={classes.left}>
              <div>
                <div>
                  <h4 className={(classes.title, classes.bold)}>
                    CUSTOMER DETAILS
                  </h4>
                  <h5 className={classes.title}>Customer Name: {customer.first_name} {customer.last_name}</h5>
                  <h5 className={classes.title}>E-mail: {customer.email}</h5>
                  <h5 className={classes.title}>Phone Number: +{customer.phone_number}</h5>
                </div>
                <div>
                  <h4 className={(classes.title, classes.bold)}>
                    ORDER SUMMARY
                  </h4>
                  <h5 className={classes.title}>
                    Subtotal ({allPackages.filter(el => el.isAvailed).length} items) <span>${numberWithCommas(Object.values(allPackages.filter(el => el.isAvailed)).reduce((a, { unit_cost }) => a + unit_cost, 0).toFixed(2))}</span>
                  </h5>
                  <h5 className={classes.title}>
                    Shipping Fee <span>$0.00</span>
                  </h5>
                  <h4 className={(classes.title, classes.bold)}>
                    Total <span style={{ color: pinkColor }}>${numberWithCommas(Object.values(allPackages).reduce((a, { unit_cost }) => a + unit_cost, 0).toFixed(2))}</span>
                  </h4>

                  <span>
                    <Button
                      round
                      fullWidth
                      size={"lg"}
                      color="pink"
                    // onClick={handleNext}
                    >
                      {" "}
                      Place Order{" "}
                    </Button>
                  </span>
                </div>
              </div>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>

      <Footer
        fixed
        activeStep={activeStep}
        getStepContent={getStepContent}
        steps={steps}
        handleBack={handleBack}
        handleReset={handleReset}
        handleNext={handleNext}
        isStepOptional={isStepOptional}
        handleSkip={handleSkip}
        handleReturn={handleReturn}
      />
    </div>
  );
}
