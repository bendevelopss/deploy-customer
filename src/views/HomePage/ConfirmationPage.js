import React from "react";
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
    images,
    handleBack,
    handleReset,
    handleNext,
    isStepOptional,
    handleSkip,
    handleReturn,
    handleSelectedPage
  } = props;

  return (
    <div>
      <Header
        absolute
        color="tr"
        fixed
        rightLinks={<HeaderLinks />}
        {...rest}
      />

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
            <GridContainer className={classes.headerLine}>
              <div>
                <span className={classes.icons}>
                  <i className="fa fa-images" />
                </span>
                <span className={classes.title}>PACKAGE A</span>
                <span>
                  {/* <Link to={"/view-photos"}> */}
                    <Button simple color="pink" onClick={() => handleSelectedPage("viewPackage")}>
                      View photos
                    </Button>
                  {/* </Link> */}
                </span>
              </div>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>1 x 15 pages album</span>
                </div>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>10 x 4R photos</span>
                </div>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>1 x digital print</span>
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.headerLine}>
              <div>
                <span className={classes.icons}>
                  <i className="fa fa-images" />
                </span>
                <span className={classes.title}>SPECIAL PACKAGE A</span>
              </div>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>10 x 5R photos</span>
                </div>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>5 x Digital Print</span>
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.additional}>
              <div>
                <span className={classes.icons}>
                  <i class="fas fa-plus"></i>
                </span>
                <span className={classes.title}>Additional Options</span>
              </div>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>2 x canvas</span>
                </div>
                <div>
                  <span className={classes.faCheck}>
                    <i class="fas fa-check"></i>
                  </span>
                  <span className={classes.title}>5 x Digital Print</span>
                </div>
              </GridItem>
            </GridContainer>
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
                  <h5 className={classes.title}>Customer Name</h5>
                  <h5 className={classes.title}>your@email.com</h5>
                  <h5 className={classes.title}>02-PHONE-NUMBER</h5>
                </div>
                <div>
                  <h4 className={(classes.title, classes.bold)}>
                    ORDER SUMMARY
                  </h4>
                  <h5 className={classes.title}>
                    Subtotal (6 items) <span>$600.00</span>
                  </h5>
                  <h5 className={classes.title}>
                    Shipping Fee <span>$30.00</span>
                  </h5>
                  <h4 className={(classes.title, classes.bold)}>
                    Total <span style={{ color: pinkColor }}>$630.00</span>
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
        total={images.length}
        liked={Object.values(images).reduce((a, { liked }) => a + liked, 0)}
        isStepOptional={isStepOptional}
        handleSkip={handleSkip}
        handleReturn={handleReturn}
      />
    </div>
  );
}
