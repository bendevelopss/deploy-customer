/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";
import { Typography } from "@material-ui/core";


// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

function FavoriteFooter(props) {
  const { footerClasses, classes, liked, activeStep, steps, handleBack, handleNext, total } = props
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <h3>{liked} out of {total} photos left</h3>
            </ListItem>
          </List>
        </div>
        {steps ?
          <div className={classes.right}>
            {activeStep === steps.length ? (
              <div>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
                <div>

                  <div>
                    <Button round variant="contained" color="pink" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
          </div>
          : null
        }
      </div>
    </footer>
  )
}

function SpecialFooter(props) {
  const { footerClasses, classes, liked, activeStep, steps, handleBack, handleNext, total, handleSpecialPackage } = props
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <h3>Will you avail this Special Package?</h3>
            </ListItem>
          </List>
        </div>
        {steps ?
          <div className={classes.right}>
            {activeStep === steps.length ? (
              <div>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
                <div>
                  <div>
                    <Button round variant="contained" color="pink" onClick={() => handleSpecialPackage(true)}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Yes'}
                    </Button>
                    <Button
                      simple
                      color="pink"
                      onClick={() => handleSpecialPackage(false)}
                    > No, Thanks  </Button>
                  </div>
                </div>
              )}
          </div>
          : null
        }
      </div>
    </footer>
  )
}

function SelectPhotosFooter(props) {
  const { footerClasses, classes, liked, activeStep, steps, handleBack, handleNext, total, handleCheckoutModal } = props
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {/* <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <h3>Will you avail this Special Package?</h3>
          </ListItem>
        </List>
      </div> */}
        {steps ?
          <div className={classes.right}>
            {activeStep === steps.length ? (
              <div>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
                <div>
                  <div>
                    <Button
                      // disabled={activeStep === 0}
                      round
                      size={"lg"}
                      color="pink"
                      onClick={() => handleCheckoutModal()}
                    // className={classes.backButton}
                    > Proceed to Checkout  </Button>

                  </div>
                </div>
              )}
          </div>
          : null
        }
      </div>
    </footer>
  )
}

function ConfirmationFooter(props) {
  const { footerClasses, classes, liked, activeStep, steps, handleBack, handleNext, total, handleCheckoutModal, handleReturn } = props
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {steps ?
          <div className={classes.left} style={{ padding: "15px 0" }}>
            {activeStep === steps.length ? (
              <div>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
                <div>
                  <div>
                    <Button
                      round
                      size={"lg"}
                      color="pink"
                      onClick={() => handleReturn(2)}
                    > Back to Photo Selection  </Button>
                  </div>
                </div>
              )}
          </div>
          : null
        }
      </div>
    </footer>
  )
}

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont, fixed, activeStep, steps, handleBack, handleReset, handleNext, total, liked, isStepOptional, handleSkip, handleCheckoutModal, handleReturn, handleSpecialPackage } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
    [classes.fixed]: fixed
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <div>
      {activeStep === 0 ?
        <FavoriteFooter
          footerClasses={footerClasses}
          classes={classes}
          liked={liked}
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
          total={total}
        /> : null

      }

      {activeStep === 1 ?
        <SpecialFooter
          handleSpecialPackage={handleSpecialPackage}
          footerClasses={footerClasses}
          classes={classes}
          // liked={liked}
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        // total={total}
        /> : null

      }

      {activeStep === 2 ?
        <SelectPhotosFooter
          footerClasses={footerClasses}
          classes={classes}
          liked={liked}
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
          total={total}
          handleCheckoutModal={handleCheckoutModal}
        /> : null

      }

      {activeStep === 3 ?
        <ConfirmationFooter
          footerClasses={footerClasses}
          classes={classes}
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
          // total={total}
          handleCheckoutModal={handleCheckoutModal}
          handleReturn={handleReturn}
        /> : null

      }

    </div>

  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
  fixed: PropTypes.bool,
};
