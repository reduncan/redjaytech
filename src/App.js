import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import HomePage from './Components/AboutMe';
import HomePage from './Components/DirectoryManipulator';
import HomePage from './Components/YelpClone';
import HomePage from './Components/FaceBell';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/about-me' component={AboutMe} />
      <Route path='/directory-manipulator' component={DirectoryManipulator} />
      <Route path='/yelp-clone' component={YelpClone} />
      <Route path='/facebell' component={FaceBell} />
    </div>
  </BrowserRouter>
);

export default App;
