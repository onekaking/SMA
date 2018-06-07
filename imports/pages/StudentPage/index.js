import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../../api/students';
import StudentsList from '../../components/StudentsList';

// App component - represents the whole app
class StudentPage extends Component {
    render() {
        return (
            <div>
                <StudentsList></StudentsList>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        students: Students.find({}).fetch()
    };
})(StudentPage);