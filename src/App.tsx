import './styles/global.scss';
import EntriesCreate from './pages/Entries/Create/Create';
import EntriesList from './pages/Entries/List/List';
import JournalCreate from './pages/Journal/Create/Create';
import JournalList from './pages/Journal/List/List';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthContext } from './context/auth';
import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import EntriesView from './pages/Entries/View/View';
function App() {
  const { isAuthenticated } = useContext(AuthContext);

  function PrivateRoute({ children, ...rest }: any) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/journal">
            <JournalList />
          </PrivateRoute>
          <PrivateRoute path="/journal/create">
            <JournalCreate />
          </PrivateRoute>
          <PrivateRoute exact path="/journal/:id/posts">
            <EntriesList />
          </PrivateRoute>
          <PrivateRoute path="/journal/:id/posts/create">
            <EntriesCreate />
          </PrivateRoute>
          <PrivateRoute path="/journal/:id/posts/view/:entryId">
            <EntriesView />
          </PrivateRoute>
        </Switch>
      </Router>
      {/* 
			<EntriesCreate />
			<PostList /> */}
    </>
  );
}

export default App;
