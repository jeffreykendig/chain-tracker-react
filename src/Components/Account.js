import './MainStyle.css';
import { React, useState, useRef } from 'react';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch, 
    useHistory
  } from "react-router-dom";
  import { useAuth } from '../contexts/AuthContext'
 

export default function Account(){
    const { currentUser } = useAuth();
    let { path, url } = useRouteMatch(); 
        return(
                <div className="body">
                    <Nav variant="pills" defaultActiveKey="/Sign Up">
                        <Nav.Item>
                            <Nav.Link href="/Login"><Link style={{color: 'black', fontSize: ".75em"}} to={`${url}/Login`}>Already A Member</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Sign Up"><Link style={{color: 'black', fontSize: ".75em"}} to={`${url}/Sign Up`}>Sign Up!</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Forgot Password"><Link style={{color: 'black', fontSize: ".75em"}} to={`${url}/Forgot Password`}>Forgot Password</Link></Nav.Link>
                        </Nav.Item>
                        {currentUser ? <Nav.Item><Nav.Link>Hi there</Nav.Link></Nav.Item> : <Nav.Item><Nav.Link>You're not logged in</Nav.Link></Nav.Item>}
                    </Nav>


                    <Switch>
                        <Route path={`${path}/:topicId`}>
                            <Topic />
                        </Route>
                    </Switch>
                </div>
        );
}


function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    let Display = (topicId==="Login") ? <Login /> : <SignUp />
    if(topicId=== "Forgot Password"){
        Display = <ForgotPass />
    }

    return (
      <div style={{marginLeft:"15%"}}>
          <div style={{width:"80%", marginTop: "5%"}}>
            {Display}
          </div>
      </div>
    );
  }


function Login() {
    const emailRef = useRef(); 
    const passRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { login } = useAuth(); 
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault(); 
        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passRef.current.value)
            history.push("/")
        } catch { 
            setError("Failed to log in")
        }
        setLoading(false);
    }

    return(
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="password" placeholder="Password" ref={passRef}/>
                </Form.Group>



                <Button disabled={loading} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
    </div>
    ); 
}

function SignUp() {
    const fnameRef = useRef(); 
    const lnameRef = useRef(); 
    const emailRef = useRef();
    const passwordRef = useRef(); 
    const passwordconfRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth(); 
    const history = useHistory();

    async function handleSignup(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordconfRef.current.value){
            return setError('Passwords do not match')
        }
        if (passwordRef.current.value.length < 6){
            return setError('Password must be 6 or more characters long')
        }

        try{
            setError(''); 
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to create an Account')
        }

        setLoading(false)
    }
    return(
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSignup}>
                <Form.Group controlId="formName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="text" placeholder="Fname" ref={fnameRef} />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="text" placeholder="Lname" ref={lnameRef}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="password" placeholder="Password" ref={passwordRef} />
                    <Form.Text className="text-muted">
                        Password must be 6 or more characters long
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="password" placeholder="Password" ref={passwordconfRef} />
                </Form.Group>

                <Button disabled={loading} variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
    </div>
    ); 
}

function ForgotPass(){
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { forgot } = useAuth(); 
    const [message, setMessage] = useState('');

    async function handleForgot(e){
        e.preventDefault(); 
        try{
            setError("")
            setLoading(true)
            setMessage("")
            await forgot(emailRef.current.value)
            setMessage("Check your email inbox")
        } catch { 
            setError("Email Not found")
        }
        setLoading(false);
    }

    return(
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form style={{marginTop: "2em"}} onSubmit={handleForgot}>
                <Form.Group controlId="forgotPass">
                    <Form.Label>Email</Form.Label>
                    <Form.Control style={{width: "20em", margin:"auto"}} type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>
                <Button disabled={loading} variant="primary" type="submit">
                    Send Reset Email
                </Button>
            </Form> 
        </div>
        
    )
}