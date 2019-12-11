import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

// import MainHeader from './components/layouts/MainHeader';
// import MainContainer from './components/Route/Router';
import MainView from './components/Layout/MainView';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.css';


// class App extends React.Component {
// constructor() {
//     super();


//     this.handleAccessToken = this.handleAccessToken.bind(this);
// }

// componentDidMount() {
//     this.handleAccessToken();
// }

function App(props) {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [customer, setCustomer] = React.useState(null);

    // this.state = {
    //     user: {},
    //     accessToken: '',
    //     isAuthenticated: false
    // }

    // useEffect(() => {
    //     handleAccessToken
    //     return () => {
    //         // cleanup
    //     };
    // }, [])

    const handleAccessToken = () => {
        const { cookies } = props;
        const _token = cookies.get('accessToken') || null;
        const _customer = cookies.get('customer') || null;

        if (token) setToken(_token)
        if (customer) setCustomer(_customer)
    }

    React.useEffect(() => {
        // return handleAccessToken()
    })
    return (
        <div>
            {/* { this.state.isAuthenticated ? <MainHeader {...this.state} {...this.props} /> : null } */}

            <MainView {...props} />
        </div>
    );
}
// }

// eslint-disable-next-line react/no-typos
App.PropTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired
}

export default withCookies(App);
