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

const menu = [
  {
    package_id: 2, packageName: 'Package A', special_package: false, products: [
      { product_id: 1, name: '15 page album', id: [123123, 123123, 123123] },
      { product_id: 2, name: '4R photos', id: [123123, 123123, 123123] },
      { product_id: 3, name: 'Digital Print', id: [123123, 123123, 123123] },
    ]
  },
  {
    package_id: 2, packageName: 'Package B', special_package: false, products: [
      { product_id: 1, name: '15 page album', id: [123123, 123123] },
      { product_id: 3, name: 'Digital Print', id: [123123, 123123, 123123, 123123] },
      { product_id: 2, name: '4R photos', id: [123123, 123123, 123123] }
    ]
  },
];

function Menu() {
  menu.map((pk, i) => {
    return (
      <div>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li><h6 className={classes.dropdownLink}>{pk.package}<small style={{ float: "right" }}>Quantity</small></h6>     </li>
          {pk.products.map(pr => {
            return (
              <li><p className={classes.dropdownLink}>{pr.name}<text style={{ float: "right", color: "#F74380" }}>{pr.id.length}</text></p></li>
            )
          })}

        </ul>
      </div>
    )
  })
}


export default function HeaderLinks(props) {
 
  const { data } = props;
  const { specialPackage } = data

  const _packages = [...data.package.package, ...specialPackage.packages]

  console.log('====================================');
  console.log( _packages, props);
  console.log('====================================');
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <h6 color="transparent" className={classes.headerText}>{data ? data.customer.email : ""}</h6>
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
            _packages.filter(x => x.selected).map((pk, i) => {
              return (
                <div>
                  <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                    <li>
                      <h6 className={classes.dropdownLink}>
                        {pk.name}<small style={{ float: "right" }}>Quantity</small>
                      </h6>
                    </li>
                    {pk.types.map(pr => {
                      return (
                        <li>
                          <p className={classes.dropdownLink}>
                            {pr.name}
                            <text style={{ float: "right", color: "#F74380" }}>{pr.quantity}</text>
                          </p>
                        </li>
                      )
                    })}

                    {/* {specialPackage.package.types.map(sp => {
                      return (
                        <li>
                          <p className={classes.dropdownLink}>
                            {sp.name}
                            <text style={{ float: "right", color: "#F74380" }}>{sp.quantity}</text>
                          </p>
                        </li>
                      )
                    })} */}

                  </ul>
                </div>
              )
            })
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
