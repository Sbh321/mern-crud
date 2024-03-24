import React from "react";

function CreateUser() {
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form>
            <h2>Add User</h2>
            <div className="">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div>
              <label htmlFor="">Age</label>
              <input
                type="text"
                placeholder="Enter Age"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          ;
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
