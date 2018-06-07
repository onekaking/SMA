import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/pages/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  }
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}
 
Meteor.startup(() => {
  render(<Root />, document.getElementById('render-target'));
});