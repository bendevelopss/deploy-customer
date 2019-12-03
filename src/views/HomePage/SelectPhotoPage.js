import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";
import Card from "components/Card/Card";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// import StepperComponent from "./HomePage";
import { pinkColor } from "assets/jss/material-kit-react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

import StepperComponent from "./StepperComponent"
import NavPills from "components/NavPills/NavPills";

import modalStyle from "assets/jss/material-kit-react/views/componentsSections/checkoutModalStyle.js";
import SectionImageModal from "views/Components/Sections/SectionImageModal";
const useStyles = makeStyles(modalStyle);

export function CheckoutModal(props) {
    const { checkoutModal, handleCheckoutModal, handleNext, handleBack, handleReturn } = props
    const classes = useStyles();


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    Transition.displayName = "Transition";

    return (
        <Dialog
            classes={{
                root: classes.center,
                paper: classes.modal
            }}
            open={checkoutModal}
            // TransitionComponent={Transition}
            keepMounted
            onClose={() => handleCheckoutModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => handleCheckoutModal(false)}
                >
                    <Close className={classes.modalClose} />
                </IconButton>
                <h4 className={classes.modalTitle}>Review your package order before proceeding to confirmation</h4>
            </DialogTitle>
            <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
            >
                <GridContainer justify="center">
                    <div>
                        <h4 className={classes.bold}>PACKAGES</h4>
                        <p>1 x 15 pages album</p>
                        <p>10 x 4R photos</p>
                        <p>10 x digital print</p>

                        <h4 className={classes.bold} >SPECIAL PACKAGES</h4>
                        <p>10 x 5R photos</p>
                        <p>20 x digital print</p>
                    </div>
                </GridContainer>
            </DialogContent>
            <DialogActions className={classes.modalFooterCenter}>
                <GridContainer justify="center">
                    <GridItem>
                        <div>
                            <Button
                                color="pink"
                                round size={"lg"}
                                onClick={() => handleNext(false)}
                            >  Proceed to Confirmation </Button>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button
                                onClick={() => handleCheckoutModal(false)}
                                color="transparent"
                                simple
                                size={"lg"}
                            > Back  </Button>
                        </div>
                    </GridItem>
                </GridContainer>
            </DialogActions>
        </Dialog>
    )
}

export function ImageModal(props) {
    const { imageModal, handleImageModal, handleNext, handleBack, handleReturn, selectedImage, data } = props
    const classes = useStyles();


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    Transition.displayName = "Transition";

    return (
        <Dialog
            classes={{
                root: classes.center,
                paper: classes.modal
            }}
            open={imageModal}
            maxWidth
            // TransitionComponent={Transition}
            keepMounted
            // onClose={() => handleImageModal(selectedImage, false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => handleImageModal(selectedImage, false)}
                >
                    <Close className={classes.modalClose} />
                </IconButton>
                {/* <h4 className={classes.modalTitle}>Review your package order before proceeding to confirmation</h4> */}
            </DialogTitle>
            <DialogContent
                id="classic-modal-slide-description"
            // className={classes.modalBody}
            >
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <SectionImageModal
                        selectedImage={selectedImage}
                        handleImageModal={handleImageModal}
                        packageType={data.packageType}
                        total={data.package.images.filter(img => img.selected).length }
                    />
                </div>
            </DialogContent>
            <DialogActions className={classes.modalFooterCenter}>
                {/* <GridContainer justify="center">
                    <GridItem>
                        <div>
                            <Button
                                color="pink"
                                onClick={() => handleNext(false)}
                            >  Done </Button>
                        </div>
                    </GridItem>
                </GridContainer> */}
            </DialogActions>
        </Dialog>
    )
}

function FavoritePhotos(props) {
    const { data, classes, navImageClasses, handleDoubleClick, handleCheckoutModal, imageModal, handleSelectPhoto } = props
    return (
        <GridContainer justify="center" spacing={4} style={{ color: 'black' }}>
            {data.package.images.filter(like => !like.favorite === data.package.images.length)}
            {data.package.images.length > 0 ? data.package.images.filter(like => like.favorite).map(img => (

                <div style={{ width: '20%', marginRight: 8 }}>
                    <Card>
                        <div>
                            <img
                                alt="..."
                                style={{ "border": img.selected ? `2px solid ${pinkColor}` : 0 }}
                                src={img.image}
                                className={navImageClasses}
                                onClick={() => handleSelectPhoto({ name: img.name, src: img.image, selected: img.selected, index: img.index })}
                            />
                        </div>
                    </Card>
                </div>
            )) : null
            }
            {data.package.images.filter(img => img.favorite).length === 0 ? <h4 className={classes.title, classes.marginTop}>NO PHOTOS SELECTED</h4> : null}


        </GridContainer>
    )
}

function AllPhotos(props) {
    const { data, classes, navImageClasses, handleSelectPhoto } = props
    return (
        <GridContainer justify="center" spacing={4}>
            {data.package.images.length > 0 ? data.package.images.map(img => (
                <div style={{ width: '20%', marginRight: 8 }}>
                    <Card>
                        <div>
                            <img
                                alt="..."
                                style={{ "border": img.selected ? `2px solid ${pinkColor}` : 0 }}
                                src={img.image}
                                className={navImageClasses}
                                onClick={() => handleSelectPhoto({ name: img.name, src: img.image, selected: img.selected, index: img.index })}
                            />
                            {/* <div className={classes.imgText}>
                      Like Photo   <Button simple onClick={() => handleDoubleClick(img)}>
                        {img.liked ?
                          <Favorite className={classes.icons} />
                          : <FavoriteBorderIcon className={classes.icons} />}
  
                      </Button>
                    </div> */}
                        </div>
                    </Card>
                </div>

            )) : null
            }

        </GridContainer>
    )
}

export default function SelectPhoto(props) {
    const {
        rest,
        classes,
        activeStep,
        steps,
        data,
        navImageClasses,
        handleDoubleClick,
        handleBack,
        handleReset,
        handleNext,
        isStepOptional,
        handleSkip,
        handleReturn,
        classNames,
        handleSelectPhoto,
        checkoutModal,
        handleCheckoutModal,
        handleImageModal,
        imageModal,
        selectedImage,
    } = props;

    return (
        <div>
            <ImageModal
                classes={classes}
                handleImageModal={handleImageModal}
                handleReturn={handleReturn}
                handleNext={handleNext}
                handleBack={handleBack}
                imageModal={imageModal}
                selectedImage={selectedImage}
                data={data}
            />

            <div className={classes.container}>
                <GridItem>
                    <CheckoutModal
                        classes={classes}
                        handleCheckoutModal={handleCheckoutModal}
                        checkoutModal={checkoutModal}
                        handleReturn={handleReturn}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                </GridItem>


                {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <GridContainer justify="center">
                            <div className={classes.name}>
                                <h2 className={classes.title}>Select Photos</h2>
                                <h4 className={classes.subTitle}>Select photos for your package</h4>
                            </div>
                        </GridContainer>

                        <div className={classes.root}>
                            <StepperComponent activeStep={activeStep} steps={steps} classes={classes} handleReturn={handleReturn} />
                        </div>

                    </GridItem>

                </GridContainer>
                <GridContainer justify="center" >
                    {/* <GridItem xs={12} sm={12} md={8} lg={6}> */}
                    <NavPills
                        alignCenter
                        color="info"
                        tabs={[
                            {
                                tabButton: "Favorites",
                                tabIcon: Favorite,
                                tabContent: (
                                    <FavoritePhotos
                                        data={data}
                                        classes={classes}
                                        navImageClasses={navImageClasses}
                                        handleDoubleClick={handleDoubleClick}
                                        handleSelectPhoto={handleSelectPhoto}
                                    />
                                )
                            },
                            {
                                tabButton: "All Photos",
                                tabIcon: PhotoCamera,
                                tabContent: (
                                    <AllPhotos
                                        data={data}
                                        classes={classes}
                                        navImageClasses={navImageClasses}
                                        handleSelectPhoto={handleSelectPhoto}
                                        handleCheckoutModal={handleCheckoutModal}
                                        imageModal={imageModal}
                                    />
                                )
                            },
                        ]}
                    />
                    {/* </GridItem> */}
                </GridContainer>


            </div>



            <Footer
                fixed
                activeStep={activeStep}
                steps={steps}
                handleBack={handleBack}
                handleReset={handleReset}
                handleNext={handleNext}
                // total={data.package.images ? data.package.images.length : 0}
                // liked={Object.values(data.package.images).reduce((a, { liked }) => a + liked, 0)}
                isStepOptional={isStepOptional}
                handleSkip={handleSkip}
                handleCheckoutModal={handleCheckoutModal}
            />

        </div>
        // </div>
    );
}