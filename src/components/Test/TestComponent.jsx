import React, { useRef, useState, useEffect } from "react"

const TestComponent = React.memo(function Counter({ name, value }) {

    console.log("Entering test component...");
    //window.alert("Entering test component...");
    return (
        <div className="Auth-form-container">
          <form className="Auth-form" >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary">
                  Sign In
                </span>
              </div>
            </div>
          </form>
        </div>
      )
});

export default TestComponent