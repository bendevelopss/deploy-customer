import React, { useEffect, useCallback } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";
import Cookies from 'universal-cookie';

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

import { constant } from "config";

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/gallery';
import * as productActions from '../../actions/product';
import * as packageActions from '../../actions/package';



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

function HomePage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [activeStep, setActiveStep] = React.useState(0);
  const [click, setClick] = React.useState(false);
  const [skipped, setSkipped] = React.useState(new Set());
  const [images, setImages] = React.useState(getData());
  const [checkoutModal, setCheckoutModal] = React.useState(false);
  const [imageModal, setImageModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState("");
  const [photos, setPhotos] = React.useState(null);
  const [product, setProduct] = React.useState(null);
  const [packages, setPackage] = React.useState(null);
  const [newPackage, setNewPackage] = React.useState(null);
  const [special_packages, setSpecialPackage] = React.useState(null);


  const cookies = new Cookies();
  const _customer = cookies.get('customer');

  console.log('====================================');
  console.log(_customer);
  console.log('====================================');

  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleDoubleClick = (img, i) => {
    const curImg = [...photos];
    curImg[i].favorite = !curImg[i].favorite
    setPhotos(curImg);
  };

  // const handlePhotoSelection = (img, isSelected) => {
  //   const curImg = { ...images };

  //   curImg.package.images[img.index].selected = isSelected;
  //   // else curImg.package.images[img.index].selected = true;

  //   setImages(curImg);
  // };

  const handleSelectPhoto = (img, condition, isSelected) => {
    console.log('====================================');
    console.log(img, condition, isSelected);
    console.log('====================================');
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
    setCheckoutModal(!checkoutModal);
    // else if (!checkoutModal) setCheckoutModal(true);
  };

  const handleImageModal = (img, isSelected, packSelected, productType) => {
    console.log('====================================');
    console.log(imageModal, img, isSelected, packSelected, productType);
    console.log('====================================');
    if (imageModal) {
      if (img && isSelected !== undefined) {
        const curImg = [...photos];
        curImg[img.index].selected = isSelected;
        setImages(curImg);
        setSelectedImage(img)
      }
      setImageModal(false);
    } else if (img === null && !isSelected && packSelected) {
      const curImg = [...photos];
      if (curImg.packageType[packSelected.index].type[packSelected.index2].selected) {
        curImg.packageType[packSelected.index].type[packSelected.index2].selected = false
      } else curImg.packageType[packSelected.index].type[packSelected.index2].selected = true;

      setImages(curImg);
    } else if (!imageModal) {
      setImageModal(true);
      if (img) setSelectedImage(img)
    }
    if (packSelected === "done") {
      const _pack = {
        package_name: packages.package_name,
        status: packages.status,
        package_id: packages.package_id,
        special_package_flag: packages.special_package_flag,
        package_price: packages.package_price,
        hidden: packages.hidden,
        product: []
      }

      _pack.product.push(...productType)
      const _package = [];
      const newProductType = []

      // console.log(_pack);
      // newProductType.push(productType)
      // _package.push(..._pack)
      // _package.product = []
      // _package.product.push(...newProductType)
      
      console.log('====================================');
      console.log(_pack);
      console.log('====================================');


       setNewPackage(_pack)
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const getPhotos = async () => {
    if (props.images) {
      const _photos = await props.images.gallery_photos
      await _photos.forEach((element) => {
        element.favorite = false;
      });
      await setPhotos(_photos)
    }
  }

  const getProduct = async () => {
    if (props.product) {
      const _product = await props.product
      await setProduct(_product)
    } else console.log('HINDI PUMASOK')
  }

  const getPackage = async () => {
    if (props.package) {
      const _package = await props.package
      await _package.item.forEach((element) => {
        element.availed = 10; //sample only
      });
      await setPackage(_package)
    } else console.log('HINDI PUMASOK')
  }

  const getSpecialPackage = async () => {
    if (props.special_package) {
      const _specialPackage = await props.special_package
      _specialPackage.selected = false
      await _specialPackage.item.forEach((element) => {
        element.availed = 15; //sample only
      });
      await setSpecialPackage(_specialPackage)
    } else console.log('HINDI PUMASOK')
  }

  useEffect(() => {
    props.action.fetchGalleryDetail(_customer.gallery_id)
    props.action.fetchGalleryPhotos(_customer.gallery_id)
    props.action.fetchAllProduct()

    if (_customer.package_id) {
      props.action.fetchPackage(_customer.package_id)
    }
    if (_customer.special_package_id) {
      props.action.fetchSpecialPackage(_customer.special_package_id)
    }


  }, [])

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
    const curImg = special_packages;
    curImg.selected = bool;
    setSpecialPackage(curImg);
    handleNext()
  }

  setTimeout(function () {
    setCardAnimation("");
    if (!photos) getPhotos();
    if (!product) getProduct();
    if (!packages) getPackage();
    if (!special_packages) getSpecialPackage();
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  console.log('====================================');
  console.log(props);
  console.log('====================================');

  return (
    <div>
      <Header
        absolute
        color="tr"
        fixed
        rightLinks={<HeaderLinks customer={_customer} specialPackage={special_packages} packages={newPackage} />}
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
            // data={images}
            photos={photos}
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
            specialPackage={special_packages ? special_packages : null}
            // images={images.package.images}
            // data={images}
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
            photos={photos}
            // data={images}
            package={packages}
            product={product}
            packages={packages}
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
            // data={images}
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
            // data={images}
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
            // data={images}
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

const mapStateToProps = function (state) {
  console.log(state);
  return {
    error: state.auth ? state.auth.error.response : null,
    images: state.gallery ? state.gallery.listPhotos.data : null,
    product: state.product.list.data ? state.product.list.data.product : null,
    package: state.package.package ? state.package.package.data : null,
    special_package: state.package.special_package ? state.package.special_package.data : null,


    // loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators({ ...authActions, ...productActions, ...packageActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
