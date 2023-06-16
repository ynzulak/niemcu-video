import {Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './Header';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import GraphicsPage from '../pages/GraphicsPage';
import LectorPage from '../pages/LectorPage';
import MoviesPage from '../pages/MoviesPage';
import PhotosPage from '../pages/PhotosPage';


const history = createBrowserHistory();


function MainContent() {

    return (

<Router history={history} >
  <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/zdjecia" component={PhotosPage} />
      <Route path="/filmy" component={MoviesPage} />
      <Route path="/lektor" component={LectorPage} />
      <Route path="/grafika" component={GraphicsPage} />
      <Route path="/kontakt" component={ContactPage} />
    </Switch>
</Router>

      );

}

export default MainContent;