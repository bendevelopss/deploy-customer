import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";


import { Stepper, Step, StepLabel } from "@material-ui/core";


export default function StepperComponent(props) {
    const { activeStep, steps, classes, handleReturn } = props
    return (
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label, index) => (
          <Step key={label}
            onClick={(e) => handleReturn(index)}
            classes={{ root: classes.step }}>
            <StepLabel StepIconProps={{
              classes: {
                root: classes.step,
                completed: classes.completed,
                active: classes.active,
                disabled: classes.disabled
              }
            }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    )
  }