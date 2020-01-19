/*eslint-disable*/
import React from "react";
// import DeleteIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, ShoppingCart } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function SpecialComponent(props) {
  const classes = useStyles();
  return (
    <div>
      <li>
        <h6 className={classes.dropdownLink}>SPECIAL PACKAGE</h6>
        <h6 className={classes.dropdownLink}>
          {/* {pk.name} */}
          {/* <small style={{ float: "right" }}>At Hand</small> */}
          <small style={{ float: "right" }}>Qty</small>
        </h6>
      </li>
      {props.specialPackage.item.map(pr => {
        return (
          <li>
            <p className={classes.dropdownLink}>
              {pr.product_name}
              {/* <text style={{ float: "right", color: "#F74380", marginRight: 4 }}>{pr.quantity}</text> */}
              <text style={{ float: "right", color: "#F74380" }}>{pr.quantity}</text>
            </p>
          </li>
        )
      })}
    </div>
  )
}

function PackageComponent(props) {
  const classes = useStyles();
  return (
    <div>
      <li>
        <h6 className={classes.dropdownLink}>{props.package.package_name}</h6>
        <h6 className={classes.dropdownLink}>
          {/* {props.packages.name} */}
          <small style={{ float: "right" }}>Available</small>
          <small style={{ float: "right", marginRight: 10 }}>Qty</small>
        </h6>
      </li>
      {props.package && props.package.item.length > 0 ? props.package.item.map(_pack => {
        return (
          <li>
            <p className={classes.dropdownLink}>
              {_pack.product_name}
              <text style={{ float: "right", color: "#F74380", marginRight: 4 }}>{_pack.quantity}</text>
              <text style={{ float: "right", color: "#F74380", marginRight: 20 }}>1</text>
            </p>
          </li>
        )
      })
        : null
      }
    </div>
  )
}

function AlaCarteComponent(props) {
  const classes = useStyles();
  return (
    <div>
      <li>
        <h6 className={classes.dropdownLink}>Ala Carte</h6>
        <h6 className={classes.dropdownLink}>
          {/* {props.packages.name} */}
          {/* <small style={{ float: "right" }}>At Hand</small> */}
          <small style={{ float: "right", marginRight: 10 }}>Qty</small>
        </h6>
      </li>
      {props.alaCarte.product && props.alaCarte.product.length > 0 ? props.alaCarte.product.map(ala => {
        return (
          <li>
            <p className={classes.dropdownLink}>
              {ala.product_name}
              <text style={{ float: "right", color: "#F74380", }}>{ala.quantity}</text>
              {/* <text style={{ float: "right", color: "#F74380", marginRight: 20 }}>{_pack.quantity}</text> */}
            </p>
          </li>
        )
      })
        : null
      }
    </div>
  )
}

function Dropdown(props) {
  const classes = useStyles();
  return (
    <div>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>

        {props.specialPackage && props.specialPackage.item.length > 0 && props.specialPackage.selected ?
          <SpecialComponent {...props} />
          : null
        }

        {props.package && props.package.item.length > 0 ?
          <PackageComponent package={props.package} />
          : null
        }

        {props.alaCarte && props.alaCarte.product.length > 0 ?
          <AlaCarteComponent {...props} />
          : null
        }

      </ul>
    </div>
  )
}


export default function HeaderLinks(props) {

  const { data, customer, specialPackage, packages } = props;
  // const { specialPackage } = data

  // const _specialPackage = specialPackage ? [specialPackage] : []

  console.log('====================================');
  console.log(props);
  console.log('====================================');
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <h6 color="transparent" className={classes.headerText}>{customer ? customer.email : ""}</h6>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          footerItem="Proceed To Checkout"
          color={"#F74380"}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={
            [<Dropdown {...props} />]
          }
          buttonIcon={ShoppingCart}

        />

        {/* dropdownList={[
            <h6 className={classes.dropdownLink}>Package A <small style={{float: "right"}}>Quantity</small></h6> ,
            <a className={classes.dropdownLink}>15 pages album <text style={{float: "right", color: "#F74380"}}>1</text></a>
          ]} */}
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
