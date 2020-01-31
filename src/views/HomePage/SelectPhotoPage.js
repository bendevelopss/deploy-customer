import React, { useEffect } from "react";
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
import { constant } from "./../../config";
import SpecialPackage from "./SpecialPage";

const useStyles = makeStyles(modalStyle);

export function CheckoutModal(props) {
    const { checkoutModal, handleCheckoutModal, handleNext, handleBack, handleReturn, packages, specialPackage, alaCarte } = props
    const classes = useStyles();

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    console.log(alaCarte.filter(el => el.isAvailed && el.availed > 0).length, specialPackage.item.filter(el => el.isAvailed && el.availed > 0).length, packages.item.filter(el => el.isAvailed && el.availed > 0).length, packages)

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

                        <div style={{ display: packages && packages.item.length > 0 && packages.item.filter(el => el.isAvailed && el.availed > 0).length > 0 ? 'block' : 'none' }}>
                            <h4 className={classes.bold}>{packages ? packages.package_name.toUpperCase() : null}</h4>
                            {packages && packages.item.length > 0 ? packages.item.filter(el => el.isAvailed).map(_package => (
                                <div>
                                    <p> {`${_package.availed} x ${_package.product_name}`}</p>
                                </div>
                            ))
                                : null
                            }
                        </div>

                        <div style={{ display: specialPackage && specialPackage.item.length > 0 && specialPackage.item.filter(el => el.isAvailed && el.availed > 0).length > 0 ? 'block' : 'none' }}>
                            <h4 className={classes.bold}>{specialPackage ? specialPackage.package_name.toUpperCase() : null}</h4>
                            {specialPackage && specialPackage.item.length > 0 ? specialPackage.item.filter(el => el.isAvailed).map(_specialPackage => (
                                <div>
                                    <p> {`${_specialPackage.availed} x ${_specialPackage.product_name}`}</p>
                                </div>
                            ))
                                : null
                            }
                        </div>

                        <div style={{ display: alaCarte && alaCarte.length > 0 && alaCarte.filter(el => el.isAvailed && el.availed > 0).length > 0 ? 'block' : 'none' }}>
                            <h4 className={classes.bold}>Ala Carte</h4>
                            {alaCarte && alaCarte.length > 0 ? alaCarte.filter(el => el.isAvailed).map(_ala => (
                                <div>
                                    <p> {`${_ala.availed} x ${_ala.product_name}`}</p>
                                </div>
                            ))
                                : null
                            }
                        </div>

                        <h4 style={{ display: alaCarte.filter(el => el.isAvailed && el.availed > 0).length === 0 && specialPackage.item.filter(el => el.isAvailed && el.availed > 0).length === 0 && packages.item.filter(el => el.isAvailed && el.availed > 0).length === 0 ? 'block' : 'none' }}>
                            NO PHOTOS SELECTED
                          </h4>

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
                                disabled={alaCarte.filter(el => el.isAvailed && el.availed > 0).length === 0 && specialPackage.item.filter(el => el.isAvailed && el.availed > 0).length === 0 && packages.item.filter(el => el.isAvailed && el.availed > 0).length === 0 ? true : false}
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
    const { imageModal, handleImageModal, handleNext, handleBack, handleReturn, selectedImage, photos, product, packages, productType } = props
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
                        packages={packages}
                        selectedImage={selectedImage}
                        handleImageModal={handleImageModal}
                        // packageType={data.packageType}
                        productType={productType}
                        packages={packages}
                        product={product}
                    // total={photos.filter(img => img.selected).length}
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
    const { photos, classes, navImageClasses, handleDoubleClick, handleCheckoutModal, imageModal, handleSelectPhoto } = props

    const checkPhoto = (url) => {
        if (url != 'undefined' || url != null)
            return true;
        return false;
    }

    return (
        <GridContainer justify="center" spacing={4} style={{ color: 'black' }}>
            {photos.filter(like => !like.favorite === photos.length)}
            {photos.length > 0 ? photos.filter(like => like.favorite).map((img, i) => (

                <div style={{ width: '20%', marginRight: 8 }}>
                    <Card>
                        <div>
                            <img
                                alt="..."
                                style={{ "border": img.selected ? `2px solid ${pinkColor}` : 0 }}
                                // src={img.image}
                                src={checkPhoto(img.photo_thumbnail_url) ? `${constant.imgUrl}` + img.photo_thumbnail_url : null}
                                className={navImageClasses}
                                onClick={() => handleSelectPhoto({ name: img.photo_thumbnail_url, src: img.photo_thumbnail_url, selected: img.selected, index: i })}
                            />
                        </div>
                    </Card>
                </div>
            )) : null
            }
            {photos.filter(img => img.favorite).length === 0 ? <h4 className={classes.title, classes.marginTop}>NO PHOTOS SELECTED</h4> : null}


        </GridContainer>
    )
}

function AllPhotos(props) {
    const { photos, classes, navImageClasses, handleSelectPhoto } = props

    const checkPhoto = (url) => {
        if (url != 'undefined' || url != null)
            return true;
        return false;
    }
    return (
        <GridContainer justify="center" spacing={4}>
            {photos.length > 0 ? photos.map((img, i) => (
                <div style={{ width: '20%', marginRight: 8 }}>
                    <Card>
                        <div>
                            <img
                                alt="..."
                                style={{ "border": img.selected ? `2px solid ${pinkColor}` : 0 }}
                                // src={img.image}
                                src={checkPhoto(img.photo_thumbnail_url) ? `${constant.imgUrl}` + img.photo_thumbnail_url : null}
                                className={navImageClasses}
                                onClick={() => handleSelectPhoto({ name: img.photo_thumbnail_url, src: img.photo_thumbnail_url, selected: img.selected, index: i })}
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
        photos,
        product,
        packages,
        alaCarte,
        specialPackage,
        productType
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
                photos={photos}
                product={product}
                packages={packages}
                productType={productType}
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
                        specialPackage={specialPackage}
                        packages={packages}
                        alaCarte={alaCarte}
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
                                        photos={photos}
                                        packages={packages}
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
                                        photos={photos}
                                        packages={packages}
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