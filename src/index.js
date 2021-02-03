import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './resources/ChainTrackerName.png';
import App from './Components/App';
import Software from './Components/Software'
import Account from './Components/Account'
import reportWebVitals from './reportWebVitals';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, 
          Route, 
          Switch, 
          Link } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link eventKey='link-0' href="/"><Link to="/"><img height="20em" src = {logo} alt = "Logo"/></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey='link-1' href="/Software"><Link to="/Software">Software</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey='link-2' href="/Account/Sign Up"><Link to="/Account/Sign Up">Account</Link></Nav.Link>
        </Nav.Item>
      </Nav>





      <AuthProvider>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/Software">
          <Software />
        </Route>
        <Route path="/Account">
          <Account />
        </Route>
      </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
