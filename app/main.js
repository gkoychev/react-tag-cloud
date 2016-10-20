import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './components/App';
import TagCloud from './components/TagCloud';
import TagInfo from './components/TagInfo';

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="tags" />
      <Route path="tags" component={TagCloud} />
      <Route path="tag/:idx" component={TagInfo} />
    </Route>
  </Router>),

  document.getElementById('container')
);

