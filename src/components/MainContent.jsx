import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import GraphicsPage from '../pages/GraphicsPage';
import LectorPage from '../pages/LectorPage';
import MoviesPage from '../pages/MoviesPage';
import PhotosPage from '../pages/PhotosPage';



function MainContent() {

    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/zdjecia" component={PhotosPage} />
            <Route path="/filmy" component={MoviesPage} />
            <Route path="/lektor" component={LectorPage} />
            <Route path="/grafika" component={GraphicsPage} />
            <Route path="/kontakt" component={ContactPage} />
          </Switch>
        </BrowserRouter>
      );

}

export default MainContent;