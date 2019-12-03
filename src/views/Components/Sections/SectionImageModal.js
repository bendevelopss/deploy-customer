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
  const { selectedImage, handleImageModal, packageType, total } = props;
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

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
                    src={selectedImage ? selectedImage.src : null}
                    alt="First slide"
                    style={{ width: "50%" }}
                  />
                  <div className={sectionClass.root}>
                    <h4 className={sectionClass.header}>{selectedImage ? selectedImage.name : null}</h4>
                    <Typography className={sectionClass.photoType}>
                      Choose Photo Type
                    </Typography>

                    {packageType ? packageType.map(type => (
                      <ExpansionPanel
                        expanded={expanded === type.name}
                        onChange={handleChange(type.name)}
                      >
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography className={sectionClass.heading}>
                            For {type.name}
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <GridItem>
                            {type.type ? type.type.map(e => (
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
                                        onClick={() => handleToggle(21)}
                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                        icon={<Check className={classes.uncheckedIcon} />}
                                        classes={{
                                          checked: classes.checked,
                                          root: classes.checkRoot
                                        }}
                                      />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label={e.name}
                                  />
                                </div>
                              </div>
                            )) : null}
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
                          onClick={() => total <= 9 ? handleImageModal(selectedImage, true) : null}
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
