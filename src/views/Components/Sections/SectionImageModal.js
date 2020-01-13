import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button";
import Checkbox from "@material-ui/core/Checkbox";


import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import { pinkColor, successColor } from "assets/jss/material-kit-react";
import { FormControlLabel } from "@material-ui/core";
import { constant } from "../../../config";

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "50%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  fa: {
    color: pinkColor
  },
  faCheck: {
    color: successColor
  },
  title: {
    color: "black",
    fontWeight: 200,
    marginLeft: 7
    // fontSize: 28
  },
  header: {
    marginLeft: 15
  },
  photoType: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    marginLeft: 15,
    marginBottom: 15
  }
}));


export default function SectionImageModal(props) {
  const { selectedImage, handleImageModal, packageType, total, product, packages } = props;
  const sectionClass = useStyles2();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  const [checked, setChecked] = React.useState([24, 22]);
  const [newPackage, setNewPackage] = React.useState(null);
  const [newProductType, setNewProductType] = React.useState([]);


  console.log('====================================');
  console.log(product, selectedImage, packages);
  console.log('====================================');


  const handleToggle = (e, data, value, index, index2) => {


    // const _pack = {
    //   types: [{ ...type }],
    //   package: "Package X",
    //   selected: false
    // }
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];
    let obj = []
    obj.push(...newProductType)
    console.log('====================================');
    console.log(e.target, data, index, index2, obj);
    console.log('====================================');
    const checked = e.target.checked
    if (checked) {
      obj.push(data)
    } else {
      const foundIndex = obj.findIndex((el) => (el.product_type_id === data.product_type_id));
      obj.splice(foundIndex, 1)
    }

    console.log(obj);
    

    setNewProductType(obj)

    // handleImageModal(null, false, { index: index, index2: index2 })
    // setNewPackage(_pack)

    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
    // setChecked(newChecked);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const checkPhoto = (url) => {
    if (url !== undefined || url !== null)
      return true;
    return false;
  }

  const duplicateCheck = (objs, key) => {
    let occ = {}
    objs.filter(function (x) {
      if (occ[x.key]) return false;
      occ[x.key] = true;
      return true;
    })
  }

  return (
    <div>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card carousel>
              {/* <Carousel {...settings}> */}
              <div>
                <GridContainer justify="center">
                  <img
                    src={selectedImage ? `${constant.imgUrl}` + selectedImage.name : null}
                    // src={checkPhoto(selectedImage.src) ? `${constant.imgUrl}` + selectedImage.src : null}
                    alt={selectedImage ? selectedImage.src : "Your Image"}
                    style={{ width: "15vw" }}
                  />
                  <div className={sectionClass.root}>
                    <h4 className={sectionClass.header}>{selectedImage ? selectedImage.name : null}</h4>
                    <Typography className={sectionClass.photoType}>
                      Choose Photo Type
                    </Typography>

                    {packages && !packages.hidden && packages.item.length > 0 ? packages.item.map((type, index) => (
                      <ExpansionPanel
                        expanded={expanded === type.product_id}
                        onChange={handleChange(type.product_id)}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography className={sectionClass.heading}>
                            For {type.product_type}
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <GridItem>

                            <div>
                              <div
                                className={
                                  classes.checkboxAndRadio,
                                  classes.checkboxAndRadioHorizontal
                                }
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onChange={(e) => handleToggle(e, type, 21)}
                                      checkedIcon={<Check className={classes.checkedIcon} />}
                                      icon={<Check className={classes.uncheckedIcon} />}
                                      // checked={}
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot
                                      }}

                                    />
                                  }
                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                  label={type.product_name}
                                  key={type.product_id}
                                />
                              </div>
                            </div>
                            {/* )) : null} */}
                          </GridItem>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    )) : null}

                    <GridContainer justify="center">
                      <div>
                        <Button
                          round
                          disabled={total <= 9 ? false : true}
                          color="pink"
                          onClick={() => total <= 9 ? handleImageModal(selectedImage, true, "done", newProductType) : null}
                        >
                          Done
                        </Button>
                      </div>
                    </GridContainer>
                  </div>
                </GridContainer>
              </div>
              {/* </Carousel> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
