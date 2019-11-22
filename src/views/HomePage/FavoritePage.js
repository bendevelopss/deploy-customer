import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";
import Card from "components/Card/Card";

// import StepperComponent from "./HomePage";
import { pinkColor } from "assets/jss/material-kit-react";
import { Stepper, Step, StepLabel } from "@material-ui/core";


import StepperComponent from "./StepperComponent"

export default function FavoritePhoto(props) {
    const {
        rest,
        classes,
        activeStep,
        steps,
        images,
        navImageClasses,
        handleDoubleClick,
        handleBack,
        handleReset,
        handleNext,
        isStepOptional,
        handleSkip,
        handleReturn
    } = props;
    return (
        <div>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <GridContainer justify="center">
                            <h2 className={classes.dark}>Select your favorite photos</h2>
                            <h4 className={classes.dark}>Select photos for your package</h4>
                        </GridContainer>

                        <div className={classes.root}>
                            <StepperComponent activeStep={activeStep} steps={steps} classes={classes} handleReturn={handleReturn} />
                        </div>

                    </GridItem>
                </GridContainer>
                <GridContainer justify="center" spacing={4}>
                {images.length > 0 ? images.map(img => (
                        <GridItem xs={12} sm={6} md={4} lg={3} spacing={4}>

                            <Card>
                                <div>
                                    <img
                                        alt="..."
                                        src={img.image}
                                        className={navImageClasses}
                                        onDoubleClick={() => handleDoubleClick(img)}
                                    />
                                    <div className={classes.imgText}>
                                    Like Photo   <Button simple onClick={() => handleDoubleClick(img)}>
                                            {img.favorite ?
                                                <Favorite className={classes.icons} />
                                                : <FavoriteBorderIcon className={classes.icons} />}

                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </GridItem>

                    )) : null
                    }

                </GridContainer>
            </div>

            <Footer
                fixed
                activeStep={activeStep}
                steps={steps}
                handleBack={handleBack}
                handleReset={handleReset}
                handleNext={handleNext}
                total={images.length}
                liked={Object.values(images).reduce((a, { favorite }) => a + favorite, 0)}
                isStepOptional={isStepOptional}
                handleSkip={handleSkip}
            />

        </div>
    );
}