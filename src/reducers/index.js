import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
// import accessReducer from './accessReducer';
// import customerReducer from './customerReducer';
// import userReducer from "./userReducer";
import packageReducer from './packageReducer';
import galleryReducer from './galleryReducer';
// import franchiseReducer from './franchiseReducer';
// import orderReducer from './orderReducer';
import productReducer from './productReducer';
// import settingReducer from './settingReducer';
// import dialogReducer from './dialogReducer';
// import licenseReducer from './licenseReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    package: packageReducer,
    // access: accessReducer,
    // customer: customerReducer,
    // user: userReducer,
    // dialog: dialogReducer,
    form: formReducer,
    gallery: galleryReducer,
    // franchise: franchiseReducer,
    // order: orderReducer,
    product: productReducer,
    // setting: settingReducer,
    // license: licenseReducer,
});

export default rootReducer;
