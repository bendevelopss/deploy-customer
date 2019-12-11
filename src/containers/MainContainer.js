/* eslint-disable no-useless-constructor */
import React from 'react';
import { Route, Redirect, Switch, withRouter, Link } from 'react-router-dom';
// import Home from '../components/home/home';
// import Franchise from '../components/home/franchise';
// import CustomerDetails from '../components/customer/CustomerDetails';
// import Customer from '../components/customer/Customer';
// import User from '../components/user/User'
// import OrderList from '../components/order/order-list';
// import OrderDetailsList from '../components/order/orderDetails';
// import Gallery from '../components/gallery/gallery';
// import AddPackageToGallery from '../components/gallery/GalleryPackage/AddPackage';
// import AddSpecialPackageToGallery from '../components/gallery/GalleryPackage/AddSpecialPackage';
// import Settings from '../components/settings/settings';
// import GalleryUpdate from '../components/gallery/view-gallery';
// // import SpecialPackageSetting from '../components/settings/special-package-setting';
// import PackageSetting from '../components/settings/package-setting';
// import ProductSetting from '../components/settings/product-setting';
// import LoginContainer from './LoginContainer';
// import HomeContainer from './HomeContainer';
// import PackageContainer from './PackageContainer';
// import ProductContainer from './ProductContainer';
// import ProductDetailContainer from './ProductDetailContainer';
// import PackageDetail from '../components/package/PackageDetail';
// import LogoutContainer from './LogoutContainer';
// import Unauthorized from '../components/error/Unauthorized.js';
// import SpecialPackageContainer from './SpecialPackageContainer';
// import SpecialPackageDetail from '../components/special-package/SpecialPackageDetail';
// import CreatePackage from '../components/package/CreatePackage';
// import CreateSpecialPackage from '../components/special-package/CreateSpecialPackage';
// // import UserUpdateForm from '../components/user/UserUpdateForm';
// import UserDetails from '../components/user/UserDetails';
// import UserDetailContainer from './UserDetailContainer';
// import FranchiseDetail from '../components/home/franchise/FranchiseDetail';
import LoginPage from 'views/LoginPage/LoginPage';
import HomePage from 'views/HomePage/HomePage';
import LandingPage from 'views/LandingPage/LandingPage';
import ProfilePage from 'views/ProfilePage/ProfilePage';
import Components from 'views/Components/Components';
import ViewPhotos from 'views/HomePage/ViewPhotosPage';


function MainContainer(props) {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [customer, setCustomer] = React.useState(null);

    const {
        allCookies
    } = props;

    const { accessToken } = allCookies

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
            this.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
        },
        signout(cb) {
            this.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };

    const handleAccessToken = () => {
        const { cookies } = props;
        const _token = cookies.get('accessToken') || null;
        const _customer = cookies.get('customer') || null;

        if (_token) {
            setToken(_token)
            setIsAuthenticated(true)
        }
        if (_customer) setCustomer(_customer)
        else setIsAuthenticated(false)
    }

    React.useEffect(() => {
       if(!isAuthenticated) return handleAccessToken()
       else return
    })

    const AuthButton = withRouter(
        ({ history }) => fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                    </button>
            </p>
        ) : (
                <p>You are not logged in.</p>
            )
    );

    const PrivateRoute = ({ component: Component, render: render, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );

    // const NoMatch = ({ location, history }) => {
    //     if (isAuthenticated) {
    //         return null;
    //     } else {
    //         return (
    //             <Unauthorized />
    //         )
    //     }
    // };

    return (
        <div>
            {
                !isAuthenticated ?
                    <div>
                        <Route exact path="/" component={LoginPage} />
                    </div>
                    : null
            }
            {
                isAuthenticated ?
                    <div>
                        <Route exact path="/home-page" component={HomePage} />
                        <Route path="/landing-page" component={LandingPage} />
                        <Route path="/profile-page" component={ProfilePage} />
                        <Route path="/components" component={Components} />
                        <Route path="/view-photos" component={ViewPhotos} />
                    </div>
                    :  null
            }

            {/* {/* {!isAuthenticated && this.props.location.pathname !== "/login" ?
                    <Route component={NoMatch} />
                    : null */}
                }

               
            {/* <Redirect from="/" to="/" /> */}

            {/* {
                this.props.location.pathname === "/" ?
                    <Redirect from="/" to="/home" />
                    : null
            } */} 

        </div>

    )
}
// }

export default withRouter(MainContainer);