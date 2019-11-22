import { container, defaultFont, pinkColor } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import { successColor, grayColor } from "assets/jss/material-kit-react";

const viewPhotoStyle = theme => ({
  ...container,
  root: {
    width: '100%',
    color: pinkColor,
  },
  completed: {
    color: pinkColor
  },
  ...imagesStyle,
  step: {
    color: pinkColor,
    "& $completed": {
      color: pinkColor
    },
    "& $active": {
      color: pinkColor
    },
    "& $disabled": {
      color: pinkColor
    },
  },
  marginTop: {
    marginTop: 15
  },
  additional: {
    "border-top": `0.6px solid ${grayColor}`,
    "border-bottom": `0.6px solid ${grayColor}`,
    "margin-right": 10,
    padding: 3,
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  
  // subtitle: {
  //   color: pinkColor
  // },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  left: {
    float: "left!important",
    display: "block",
    padding: 8,
  },
  bold: {
    fontWeight: 400,
    color: 'black',
    marginLeft: 8
  },
  headerLine: {
    "border-bottom": `0.6px solid ${grayColor}`,
    "margin-right": 10,
    "margin-bottom": 3
  },
  confirmationBorder: {
    "border": `0.6px solid ${grayColor}`,
    "border-radius": 15
  },
  right: {
    padding: 8,
    // margin: "0",
    float: "right!important"
  },
  total: {
    color: 'black',
    fontWeight: 200,
    marginLeft: 7,
  },
  header: {
    fontWeight: 400,
    color: 'black',
    // marginLeft: 8
  },
  title: {
    color: 'black',
    fontWeight: 200,
    marginLeft: 7,
    // fontSize: 28
  },
  subheader: {
    color: pinkColor,
    fontWeight: 200,
    // marginRight: 5,
  },
  specialPrice: {
    color: 'white',
    backgroundColor: pinkColor,
    'border-radius': 20,
    padding: 10
  },
  icons: {
    width: 17,
    height: 17,
    color: pinkColor
  },
  fa: {
    color: pinkColor
  },
  faCheck: {
    color: successColor,
  },
  iconCheck: {
    width: 20,
    height: 20,
    color: successColor,
  },
  collection: {
    float: 'right',
    fontWeight: 400,
    marginTop: 30
  },
  dark: {
    color: 'black'
  },
  alternativeLabel: {},
  labelContainer: {
    "& $alternativeLabel": {
      marginTop: 0
    }
  },
  imgText: {
    color: "#525252",
    float: "right",
    display: "inline-block"
  },

  marginBottom: {
    marginBottom: "2.142rem",
  },
  active: {},
  completed: {},
  disabled: {},
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "15vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  logo: {
    ...defaultFont,
    height: "55px",
    padding: "0px 11px",
    // left: "30vw",
    // top: "25px",
    // bottom: 0,
    // lineHeight: "30px",
    // fontSize: "18px",
    // borderRadius: "3px",
    // textTransform: "none",
    color: "transparent",
    minHeight: "20vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "#FFFFFF"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  flex: {
    flex: 1,
    paddingTop: 13,
    backgroundColor: "white",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "#FFFFFF"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      // position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
});

export default viewPhotoStyle;
