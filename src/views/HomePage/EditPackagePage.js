import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";
import StepperComponent from "./StepperComponent";
import Card from "components/Card/Card.js";

import { pinkColor } from "assets/jss/material-kit-react";
import styles from "assets/jss/material-kit-react/views/editpackagePage.js";
import image from "assets/img/bg7.jpg";
import { constant } from "./../../config";

function getImages() {
  return [
    { image: work1, index: 0, liked: false, selected: false },
    { image: work2, index: 1, liked: false, selected: false },
    { image: work3, index: 2, liked: false, selected: false },
    { image: work4, index: 3, liked: false, selected: false },
    { image: work5, index: 4, liked: false, selected: false },
    { image: work1, index: 5, liked: false, selected: false },
    { image: work2, index: 6, liked: false, selected: false },
    // { image: work3, index: 7, liked: false, selected: false },
  ];
}


export default function EditPackage(props) {
  const {
    // rest,
    // classes
    // getStepContent,
    // activeStep,
    // steps,
    // data,
    photos,
    customer,
    specialPackage,
    packages,
    alaCarte,
    handleBack,
    handleSelectedPage,
    handleImageModal
    // handleReset,
    // handleNext,
    // isStepOptional,
    // handleSkip,
    // handleReturn
  } = props;

  // const [images, setImages] = React.useState(getImages());
  const [isEdit, setEdit] = React.useState(false);

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const imageClasses = classNames(
    classes.imgCard,
    classes.imgCardTop,
    classes.imgFluid
  );

  const enableEdit = () => {
    if (isEdit) setEdit(false)
    else setEdit(true)
  }

  const checkPhoto = (url) => {
    if (url != 'undefined' || url != null)
      return true;
    return false;
  }

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <div>
        <Header
          absolute
          color="tr"
          fixed
        // rightLinks={<HeaderLinks data={data}/>}
        // {...rest}
        />
        <div className={classes.container}>
          <GridContainer style={{ width: '70%' }}>
            <GridItem xs={12} sm={12} md={6}>
              {/* <Button round color="pink" onClick={handleBack}>Back</Button> */}
            </GridItem>
            <GridItem justify="center" xs={12} sm={12} md={6} className={classes.alignText}>
              <div>
                <h4 className={classes.header}>Edit {packages.package_name}</h4>
                <h4 className={classes.subheader}>Add more photos
                {/* {10 - data.package.images.filter(img => img.selected).length}  */}
                </h4>
                /</div>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              {/* <GridContainer className={classes.headerLine}>
                <div>
                  <span className={classes.icons}>
                    <i className="fa fa-images" />
                  </span>
                  <span className={classes.title}>15 pages album (13 photos)</span>
                  <span>
                    <Button simple color="pink" onClick={enableEdit}>Edit</Button>
                  </span>
                </div>
              </GridContainer> */}

              <GridContainer>
                <GridContainer justify="center" spacing={4}>
                  {photos.length > 0 ? photos.map((img, index) => (
                    <div className={classes.photoGrid} onClick={() => handleImageModal({ img: img, index: index }, undefined, "editPhoto")}>
                      <Card>
                        <div>
                          <img
                            style={{ "border": img.selected ? `2px solid ${pinkColor}` : 0 }}
                            alt="..."
                            src={checkPhoto(img.photo_thumbnail_url) ? `${constant.imgUrl}` + img.photo_thumbnail_url : null}
                            className={navImageClasses}
                          />
                        </div>
                      </Card>

                    </div>


                  )) : null
                  }
                  {isEdit ?
                    <div style={{ width: '15vw', marginRight: 8 }}>
                      <div className={classes.iconLayout, classes.addIcon}>
                        <span className={classes.icons, classes.textAlign}>
                          <i class="fas fa-plus" style={{}}></i>
                          <h4 className={classes.title}>Add 2 more photos</h4>
                        </span>
                      </div>
                      /</div>
                    : null
                  }

                </GridContainer>
              </GridContainer>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <div>
                  <span>
                    {/* <Button simple color="pink" size={"lg"} onClick={handleBack}>Back</Button> */}
                    <Button round color="pink" size={"lg"} onClick={() => handleSelectedPage("viewPackage")}>Save</Button>
                  </span>
                </div>
              </GridContainer>

            </GridItem>
          </GridContainer>


        </div>
      </div>
    </div>
  );
}
