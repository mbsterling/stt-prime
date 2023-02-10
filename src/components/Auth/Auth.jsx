import React, { useRef, useState } from "react"

//Forms for Auth were taken from here.
//https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap

const isEmpty = value => value.trim() === '';
 
const Auth = () => {
  console.log("Entering Auth component...")
  let [authMode, setAuthMode] = useState("signin");
  const [validCreds, setValidCreds] = useState({})

  const userNameRef = useRef();
  const passwordRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

     const enteredUserName = userNameRef.current.value;
     const enteredPassword = passwordRef.current.value;

    setValidCreds({
        email: enteredUserName, 
        password: enteredPassword
    });

    authenticateUser();
}

  async function authenticateUser() {
    const response = 
        await fetch('https://hotellistingapi-mike.azurewebsites.net/api/User/login', 
    {
        method: 'POST',
        body: JSON.stringify(validCreds),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log(data);
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={confirmHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span role="button" className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                ref={userNameRef}
                //onChange={onUserNameChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={passwordRef}
                //onChange={onPasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button 
                type="submit" 
                className="btn btn-primary"
                onClick={authenticateUser}
                >
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={confirmHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              ref={userNameRef}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Auth;