import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from '../../containers/MainContainer';

export default function MainView(props) {
    {
        return(
            <main>
                <Switch>
                    <Route path="/" render={() => <MainContainer {...props} />} />
                </Switch>
            </main>
        );
    }
}
