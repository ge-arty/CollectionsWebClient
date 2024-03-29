import React, { useState, useRef } from "react";
import createCollection from "../API/createCollection";
import { NavLink } from "react-router-dom";

export default function UserDashboard({ userData, loggedUserId, token }) {
  const inputRef = useRef(null);
  const [itemData, setItemData] = useState({
    theme: "Books",
    name: "",
    description: "",
    image: null,
    customFields: [],
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createCollection(loggedUserId, itemData, token);

    setItemData({
      theme: "Books",
      name: "",
      description: "",
      image: null,
      customFields: [],
    });

    inputRef.current.value = null;
  };

  const handleImageChange = (event) => {
    setFileToBase(event.target.files[0]);
  };

  const setFileToBase = (file) => {
    const extension = file.name.split(".").pop().toLowerCase();
    const supportedExtensions = ["jpg", "jpeg", "png", "gif"];

    if (supportedExtensions.includes(extension)) {
      console.log(true);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64Data = reader.result;
        setItemData((prevItemData) => ({
          ...prevItemData,
          image: base64Data,
        }));
      };
    } else {
      console.log("Invalid file. Please select an image file.");
    }
  };

  const handleAddField = () => {
    setItemData((prevItemData) => ({
      ...prevItemData,
      customFields: [...prevItemData.customFields, { key: "", value: "" }],
    }));
  };

  const handleRemoveField = (index) => {
    setItemData((prevItemData) => {
      const updatedCustomFields = [...prevItemData.customFields];
      updatedCustomFields.splice(index, 1);
      return {
        ...prevItemData,
        customFields: updatedCustomFields,
      };
    });
  };

  const handleCustomFieldChange = (index, key, value) => {
    setItemData((prevItemData) => {
      const updatedCustomFields = [...prevItemData.customFields];
      updatedCustomFields[index] = { key, value };
      return {
        ...prevItemData,
        customFields: updatedCustomFields,
      };
    });
  };

  return (
    <div className="container mt-4">
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
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="theme">Theme</label>
                  <select
                    className="form-control"
                    id="theme"
                    value={itemData.theme}
                    onChange={(event) =>
                      setItemData((prevItemData) => ({
                        ...prevItemData,
                        theme: event.target.value,
                      }))
                    }
                  >
                    <option value="Books">Books</option>
                    <option value="Signs">Stamps</option>
                    <option value="Silverware">Coins</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={itemData.name}
                    onChange={(event) =>
                      setItemData((prevItemData) => ({
                        ...prevItemData,
                        name: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={itemData.description}
                    onChange={(event) =>
                      setItemData((prevItemData) => ({
                        ...prevItemData,
                        description: event.target.value,
                      }))
                    }
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    ref={inputRef}
                    onChange={handleImageChange}
                  />
                </div>
                {itemData.customFields.map((field, index) => (
                  <div key={index} className="form-group mt-2">
                    <label htmlFor={`customFieldKey${index}`}>Key</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`customFieldKey${index}`}
                      value={field.key}
                      onChange={(event) =>
                        handleCustomFieldChange(
                          index,
                          event.target.value,
                          field.value
                        )
                      }
                    />

                    <label htmlFor={`customFieldValue${index}`}>Value</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`customFieldValue${index}`}
                      value={field.value}
                      onChange={(event) =>
                        handleCustomFieldChange(
                          index,
                          field.key,
                          event.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="btn btn-danger mt-3"
                      onClick={() => handleRemoveField(index)}
                    >
                      Remove Field
                    </button>
                  </div>
                ))}
                <div className="container d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddField}
                  >
                    Add Field
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="container text-center mt-5">
          <p className="lead display-4">Login to get started</p>
          <p className="display-5">if(You don't have Account)</p>
          <NavLink to="/register" className="btn btn-primary btn-lg">
            Register
          </NavLink>
          <p className="display-5">else</p>
          <NavLink to="/login" className="btn btn-primary btn-lg">
            Login
          </NavLink>
        </div>
      )}
    </div>
  );
}
