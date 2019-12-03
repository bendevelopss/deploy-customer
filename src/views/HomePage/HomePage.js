import React, { useEffect, useCallback } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import styles from "assets/jss/material-kit-react/views/homePage.js";

import image from "assets/img/bg7.jpg";
import logo from "../../assets/img/bambini-logo.png";
import { Link } from "react-router-dom";
import { Typography, GridList } from "@material-ui/core";

import cx from "classnames";
import { pinkColor } from "assets/jss/material-kit-react";
import Pink from "components/Typography/Pink";
import { grayColor } from "assets/jss/material-kit-react";
import SpecialPackage from "./SpecialPage";
import FavoritePhoto from "./FavoritePage";
import SelectPhoto from "./SelectPhotoPage";
import Confirmation from "./ConfirmationPage";
import ViewPhotos from "./ViewPhotosPage";
import EditPackage from "./EditPackagePage";
import { getData } from "api/api";

const useStyles = makeStyles(styles);

function getSteps() {
  return [
    "Favorite Photo",
    "Special Package",
    "Select Photo",
    "Confirmation",
    "Payment"
  ];
}

export default function HomePage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [activeStep, setActiveStep] = React.useState(0);
  const [click, setClick] = React.useState(false);
  const [skipped, setSkipped] = React.useState(new Set());
  const [images, setImages] = React.useState(getData());
  const [checkoutModal, setCheckoutModal] = React.useState(false);
  const [imageModal, setImageModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState("");

  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleDoubleClick = img => {
    const curImg = { ...images };

    if (img.favorite) curImg.package.images[img.index].favorite = false;
    else curImg.package.images[img.index].favorite = true;

    setImages(curImg);
  };

  // const handlePhotoSelection = (img, isSelected) => {
  //   const curImg = { ...images };

  //   curImg.package.images[img.index].selected = isSelected;
  //   // else curImg.package.images[img.index].selected = true;

  //   setImages(curImg);
  // };

  const handleSelectPhoto = (img, condition, isSelected) => {
    if (img) handleImageModal(img, condition, isSelected)
    else return
  };

  const handleSelectedPage = (page = "") => {
    setSelectedPage(page)
  };

  const handleNext = (modal = true) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (!modal) setCheckoutModal(false);

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleCheckoutModal = () => {
    if (checkoutModal) setCheckoutModal(false);
    else if (!checkoutModal) setCheckoutModal(true);
  };

  const handleImageModal = (img, isSelected) => {
    if (imageModal) {
      if (img && isSelected !== undefined) {
        const curImg = { ...images };
        curImg.package.images[img.index].selected = isSelected;
        setImages(curImg);
        setSelectedImage(img)
      }
      setImageModal(false);
    }
    else if (!imageModal) {
      setImageModal(true);
      if (img) setSelectedImage(img)
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleReturn = index => {
    if (index < activeStep) setActiveStep(index);
    // if (closeModal) setCheckoutModal(false)
    else return;
  };

  const handleSpecialPackage = (bool) => {
    const curImg = { ...images };
    curImg.specialPackage.selected = bool;
    setImages(curImg);
    handleNext()
  }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        absolute
        color="tr"
        fixed
        rightLinks={<HeaderLinks />}
        {...rest}
      />

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {activeStep === 0 ? (
          <FavoritePhoto
            rest={rest}
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            data={images}
            // images={images.package.images}
            navImageClasses={navImageClasses}
            handleDoubleClick={handleDoubleClick}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleReturn={handleReturn}
          />
        ) : null}

        {activeStep === 1 ? (
          <SpecialPackage
            rest={rest}
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            // images={images.package.images}
            data={images}
            navImageClasses={navImageClasses}
            handleDoubleClick={handleDoubleClick}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleReturn={handleReturn}
            handleSpecialPackage={handleSpecialPackage}
          />
        ) : null}

        {activeStep === 2 ? (
          <SelectPhoto
            rest={rest}
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            // images={images.package.images}
            data={images}
            navImageClasses={navImageClasses}
            handleDoubleClick={handleDoubleClick}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleReturn={handleReturn}
            classNames={classNames}
            setCheckoutModal={setCheckoutModal}
            checkoutModal={checkoutModal}
            handleCheckoutModal={handleCheckoutModal}
            handleSelectPhoto={handleSelectPhoto}
            handleImageModal={handleImageModal}
            imageModal={imageModal}
            selectedImage={selectedImage}
          />
        ) : null}

        {activeStep === 3 && selectedPage == "" ? (
          <Confirmation
            rest={rest}
            classes={classes}
            activeStep={activeStep}
            steps={steps}
            data={images}
            // images={images.package.images}
            navImageClasses={navImageClasses}
            handleDoubleClick={handleDoubleClick}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleReturn={handleReturn}
            classNames={classNames}
            setCheckoutModal={setCheckoutModal}
            checkoutModal={checkoutModal}
            handleCheckoutModal={handleCheckoutModal}
            handleSelectedPage={handleSelectedPage}
          />
        ) : null}

        {activeStep === 3 && selectedPage == "viewPackage" ? (
          <ViewPhotos
            rest={rest}
            classes={classes}
            data={images}
            activeStep={activeStep}
            steps={steps}
            // images={images.package.images}
            navImageClasses={navImageClasses}
            handleDoubleClick={handleDoubleClick}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleReturn={handleReturn}
            classNames={classNames}
            setCheckoutModal={setCheckoutModal}
            checkoutModal={checkoutModal}
            handleCheckoutModal={handleCheckoutModal}
            handleSelectedPage={handleSelectedPage}
          />
        ) : null}

        {activeStep === 3 && selectedPage == "editPackage" ? (
          <EditPackage
            rest={rest}
            classes={classes}
            data={images}
            activeStep={activeStep}
            steps={steps}
            // images={images.package.images}
            handleImageModal={handleImageModal}
            navImageClasses={navImageClasses}
            handleDoubleClick={handleDoubleClick}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleReturn={handleReturn}
            classNames={classNames}
            setCheckoutModal={setCheckoutModal}
            checkoutModal={checkoutModal}
            handleCheckoutModal={handleCheckoutModal}
            handleSelectedPage={handleSelectedPage}
          />
        ) : null}
      </div>
    </div>
  );
}
