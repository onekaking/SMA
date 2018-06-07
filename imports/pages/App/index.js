import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../../api/students';

import HeaderBar from '../../components/HeaderBar';

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <HeaderBar></HeaderBar>
            </div>
        );
    }
}