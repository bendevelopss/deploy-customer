import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Cookies from 'universal-cookie';
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
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/gallery';


import StepperComponent from "./StepperComponent"
import { constant } from "config";

function FavoritePhoto(props) {
    const {
        rest,
        classes,
        activeStep,
        steps,
        // data,
        navImageClasses,
        handleDoubleClick,
        handleBack,
        handleReset,
        handleNext,
        isStepOptional,
        handleSkip,
        handleReturn,
        photos
    } = props;

    const cookies = new Cookies();
    const _customer = cookies.get('customer');

    const checkPhoto = (url) => {
        if (url != 'undefined' || url != null)
            return true;
        return false;
    }

    // useEffect(() => {
    //     props.action.fetchGalleryDetail(_customer.gallery_id)
    //     props.action.fetchGalleryPhotos(_customer.gallery_id)

    // }, [])

    console.log('====================================');
    console.log(photos);
    console.log('====================================');

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
                    {/* {data.package.images.length > 0 ? data.package.images.map(img => ( */}

                    {photos !== null && photos.length > 0 ? photos.map((img, i) => (
                        <GridItem xs={12} sm={6} md={4} lg={3} spacing={4}>

                            <Card>
                                <div>
                                    <img
                                        alt="..."
                                        // src={img.image}
                                        src={checkPhoto(img.photo_thumbnail_url) ? `${constant.imgUrl}` + img.photo_thumbnail_url : null}
                                        className={navImageClasses}
                                        onDoubleClick={() => handleDoubleClick(img, i)}
                                    />
                                    {/* <img title="Click image to view original quality" src={checkPhoto(img.photo_thumbnail_url) ? `${constant.imgUrl}` + img.photo_thumbnail_url: defaultPhoto}/> */}
                                    {/* <img src={this.checkPhoto(firstPhoto) && firstPhoto.length > 0 ? `${constant.imgUrl}` + firstPhoto : defaultPhoto} /> */}
                                    <div className={classes.imgText}>
                                        Like Photo   <Button simple onClick={() => handleDoubleClick(img, i)}>
                                            {img.favorite ?
                                                <Favorite className={classes.icons} />
                                                : <FavoriteBorderIcon className={classes.icons} />}

                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </GridItem>

                    )) : <h3 className={classes.dark}> No Photos Available </h3>
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
                total={photos ? photos.length : 0}
                liked={photos ? Object.values(photos).reduce((a, { favorite }) => a + favorite, 0) : 0}
                isStepOptional={isStepOptional}
                handleSkip={handleSkip}
            />

        </div>
    );
}

const mapStateToProps = function (state) {
    console.log(state);
    return {
        error: state.auth ? state.auth.error.response : null,
        // photos: state.gallery ? state.gallery.listPhotos.data : null
        // loggedIn: state.auth.loggedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // action: bindActionCreators({ ...authActions }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePhoto);