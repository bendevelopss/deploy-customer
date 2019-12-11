import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LockIcon from "@material-ui/icons/Lock";
import UnlockIcon from "@material-ui/icons/LockOpen";
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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import logo from '../../assets/img/bambini-logo.png'
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/auth';

const useStyles = makeStyles(styles);

function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [lock, setLock] = React.useState(true);
  const [password, setPassword] = React.useState(null);


  const handlePassword = () => {
    if (lock) setLock(false)
    else setLock(true)
  }
  const handleLogin = () => {
    const auth = {
      password: password
    }
    props.action.login(auth)
  }
  const handleInput = (e) => {
    setPassword(e.target.value)
  }
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const brandComponent = <img src={logo} className={classes[cardAnimaton]} />;
  return (
    <div>
      {/* <Header
        absolute
        color="tr"
        rightLinks={<HeaderLinks />}
        {...rest}
      /> */}
      <div className={classes.flex}>
        <GridContainer justify="center">
          {brandComponent ? brandComponent : null}
        </GridContainer>
      </div>

      <div
        className={classes.pageHeader}
        style={{
          // backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={8} md={4} lg={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="pink" className={classes.cardHeader}>
                    <h4>Bambini Customer</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Please Login</p>
                  <CardBody>
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => handleInput(e),
                        value: password,                    
                        type: lock ? "password" : "text",
                        endAdornment: (
                          <InputAdornment position="end" onClick={handlePassword}>
                            <IconButton className={classes.inputIconsColor}>
                              {lock ? <LockIcon /> : <UnlockIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />

                    <h4 style={{ color: 'red', textAlign: 'center'}}>{props.error ? props.error.data.message : ""}</h4>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="pink" size="lg" onClick={e => handleLogin(e)} disabled={!password ? true : false}>
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );

}

const mapStateToProps = function (state) {
  console.log(state);
  return {
    error: state.auth ? state.auth.error.response : null
    // loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators({ ...authActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
