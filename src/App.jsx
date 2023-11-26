import "./Re.css";

function App() {
  return (
    <>
      <div className="container-fluid mx-2">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-12 col-md-6">
            <div className="forms text-center px-3">
              <h1 className="text-white mb-3">Sign Up</h1>
              <div className="d-flex justify-content-between mb-2">
                <input className="form-control me-1" placeholder="First Name" />
                <input className="form-control" placeholder="Last Name" />
              </div>
              <input className="form-control mb-2" placeholder="Email" />
              <input className="form-control mb-2" placeholder="Password" />
              <input className="form-control" placeholder=" Confirm Password" />
              <div className="mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label ms-1" htmlFor="gridCheck">
                  I accept the Terms of Use & Privacy Policy
                </label>
              </div>
              <button className="btn btns my-2">Sign up</button>
              <p>
                Already have an account? <a className="link" href="#">Login here</a>
              </p>
              <p>Copyright &copy; Kling.com</p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
