import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './Components/HomePage';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import DirectoryManipulator from './Components/DirectoryManipulator';
import YelpClone from './Components/YelpClone';
import FaceBell from './Components/FaceBell';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <CssBaseline />
      <Route exact path='/' component={HomePage} />
      <Route path='/about-me' component={AboutMe} />
      <Route path='/contact-me' component={ContactMe} />
      <Route path='/directory-manipulator' component={DirectoryManipulator} />
      <Route path='/yelp-clone' component={YelpClone} />
      <Route path='/facebell' component={FaceBell} />
      </React.Fragment>
  </BrowserRouter>
);

export default App;
