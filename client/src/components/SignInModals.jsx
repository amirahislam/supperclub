import React from "react";


// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const SignInModals = props => (
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signInModal" data-whatever="@mdo">Sign In</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signUpModal" data-whatever="@fat">Create an Account</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#" data-whatever="@getbootstrap">Nothing yet...</button>
    
    <div className="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="signInModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signInModalLabel">Sign In</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="username" className="col-form-label">Username:</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label for="password" className="col-form-label">Password:</label>
                <input type="text" className="form-control" id="password" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="firstName" className="col-form-label">First Name:</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="form-group">
                <label for="lastName" className="col-form-label">Last Name:</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="form-group">
                <label for="username" className="col-form-label">Username:</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label for="password" className="col-form-label">Password</label>
                <input type="text" className="form-control" id="password" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>







</div>
);

export default SignInModals;