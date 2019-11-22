import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Pink(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.pinkText}>
      {children}
    </div>
  );
}

Pink.propTypes = {
  children: PropTypes.node
};
