import React from "react";

export default function UserDashboard({ userData, loggedUserId }) {
  return (
    <div className="container">
      {loggedUserId ? (
        <>
          <h1>User Dashboard</h1>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">First Name: {userData.firstName}</p>
              <p className="card-text">Last Name: {userData.lastName}</p>
              <p className="card-text">Email: {userData.email}</p>
              <p className="card-text">User Id: {userData._id}</p>
            </div>
          </div>

          <div className="card mt-4 mb-4">
            <div className="card-body">
              <h5 className="card-title">Create Collection</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="theme">Theme</label>
                  <select className="form-control" id="theme">
                    <option value="Books">Books</option>
                    <option value="Stamps">Stamps</option>
                    <option value="Coins">Coins</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input type="text" className="form-control" id="image" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Create
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <p>Login</p>
      )}
    </div>
  );
}
