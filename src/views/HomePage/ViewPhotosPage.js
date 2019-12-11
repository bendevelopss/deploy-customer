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
import styles from "assets/jss/material-kit-react/views/viewphotosPage.js";
import image from "assets/img/bg7.jpg";

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


export default function ViewPhotos(props) {
  const {
    // rest,
    // classes
    // getStepContent,
    // activeStep,
    // steps,
    // images,
    handleBack,
    handleSelectedPage,
    // handleReset,
    handleNext,
    data
    // isStepOptional,
    // handleSkip,
    // handleReturn
  } = props;

  const [images, setImages] = React.useState(getImages());
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

  console.log(data);

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
          rightLinks={<HeaderLinks data={data}/>}
        // {...rest}
        />
        <div className={classes.container}>
          <GridContainer style={{ width: '70%' }}>
            <GridItem xs={12} sm={12} md={6}>
              <Button round color="pink" onClick={handleBack, () => handleSelectedPage("")}>Back</Button>
            </GridItem>
            <GridItem justify="center" xs={12} sm={12} md={6} style={{ 'text-align': 'center' }}>
              <div>
                <h4 className={classes.header}>Package A</h4>
                <h4 className={classes.subheader}>{data.package.images.filter(e => e.selected).length * data.packageType.length} photos in total</h4>
                /</div>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">


            <GridItem xs={12} sm={12} md={12}>
              {
                data.packageType.map(type => (
                  <div>

                    <GridContainer className={classes.headerLine}>
                      <div>
                        <span className={classes.icons}>
                          <i className="fa fa-images" />
                        </span>
                        <span className={classes.title}>{type.name}</span>
                        <span>
                          <Button simple color="pink" onClick={enableEdit}>Edit</Button>
                        </span>
                      </div>
                    </GridContainer>

                    <GridContainer>
                      <GridContainer justify="center" spacing={4}>
                        {
                          data.package.images.length > 0 ? data.package.images.filter(e => e.selected).map(img => (
                            <div style={{ width: '20%', marginRight: 8 }}>
                              <Card>
                                <div >
                                  <img
                                    alt="..."
                                    src={img.image}
                                    className={navImageClasses}
                                  />
                                </div>
                              </Card>
                            </div>
                          ))
                            : null
                        }
                        {isEdit ?
                          <div style={{ width: '15vw', marginRight: 8, "padding-top": "7vh" }} onClick={() => handleSelectedPage("editPackage")}>
                            <div style={{ border: '5px dotted pink', textAlign: 'center' }}>
                              <span className={classes.icons} style={{ textAlign: 'center' }}>
                                <i class="fas fa-plus" style={{ fontSize: '10vh' }}></i>
                                <h4 className={classes.title}>Add {10 - data.package.images.filter(img => img.selected).length} more photos</h4>
                              </span>
                            </div>
                          </div>
                          : null
                        }
                        {
                          data.package.images.filter(e => e.selected).length === 0 && !isEdit ? <h4 className={classes.title}>NO PHOTOS SELECTED</h4>
                            : null
                        }

                      </GridContainer>
                    </GridContainer>


                  </div>

                ))
              }
            </GridItem>




            {/* <GridItem xs={12} sm={12} md={12}>
               <GridContainer className={classes.headerLine}>
                <div>
                  <span className={classes.icons}>
                    <i className="fa fa-images" />
                  </span>
                  <span className={classes.title}>15 pages album (13 photos)</span>
                  <span>
                    <Button simple color="pink" onClick={enableEdit}>Edit</Button>
                  </span>
                </div>
              </GridContainer>

           
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.headerLine}>
                <div>
                  <span className={classes.icons}>
                    <i className="fa fa-images" />
                  </span>
                  <span className={classes.title}>4R Photos</span>
                  <span className={classes.title}>10 Photos</span>
                  <span>
                    <Button simple color="pink" onClick={enableEdit}>Edit</Button>
                  </span>
                </div>
              </GridContainer>

              <GridContainer>
                <GridContainer justify="center" spacing={4}>
                  {images.length > 0 ? images.map(img => (
                    <div style={{ width: '20%', marginRight: 8 }}>
                      <Card>
                        <div >
                          <img
                            alt="..."
                            src={img.image}
                            className={navImageClasses}
                          />
                        </div>
                      </Card>
                    </div>

                  )) : null
                  }
                  {isEdit ?
                    <div style={{ width: '15vw', marginRight: 8 }}>
                      <div style={{ border: '5px dotted pink', textAlign: 'center' }}>
                        <span className={classes.icons} style={{ textAlign: 'center' }}>
                          <i class="fas fa-plus" style={{ fontSize: '10vh' }}></i>
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
              <GridContainer className={classes.headerLine}>
                <div>
                  <span className={classes.icons}>
                    <i className="fa fa-images" />
                  </span>
                  <span className={classes.title}>Digital Photos</span>
                  <span>
                    <Button simple color="pink" onClick={enableEdit}>Edit</Button>
                  </span>
                </div>
              </GridContainer>

              <GridContainer>
                <GridContainer justify="center" spacing={4}>
                  {images.length > 0 ? images.map(img => (
                    <div style={{ width: '20%', marginRight: 8 }}>
                      <Card>
                        <div >
                          <img
                            alt="..."
                            src={img.image}
                            className={navImageClasses}
                          />
                        </div>
                      </Card>
                    </div>

                  )) : null
                  }
                  {isEdit ?
                    <div style={{ width: '15vw', marginRight: 8 }}>
                      <div style={{ border: '5px dotted pink', textAlign: 'center' }}>
                        <span className={classes.icons} style={{ textAlign: 'center' }}>
                          <i class="fas fa-plus" style={{ fontSize: '10vh' }}></i>
                          <h4 className={classes.title}>Add 2 more photos</h4>
                        </span>
                      </div>
                      /</div>
                    : null
                  }
                </GridContainer>
              </GridContainer>
            </GridItem> */}
          </GridContainer>

          //footer
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <div>
                  <span>
                    <Button simple color="pink" size={"lg"} onClick={handleBack, () => handleSelectedPage("")}>Back</Button>
                    <Button round color="pink" size={"lg"} onClick={handleBack, () => handleSelectedPage("")}>Save</Button>
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
