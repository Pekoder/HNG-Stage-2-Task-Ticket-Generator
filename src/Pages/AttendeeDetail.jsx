import React, { useEffect, useState } from "react";
import "./AttendeeDetail.css";
import icon from "./cloud-download.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AttendeeDetail() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useState((c) => c + "");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Using-cloudinary");
    data.append("cloud_name", "dakcu0sng");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dakcu0sng/image/upload",
      data
    );
    const uploadedUrl = res.data.url;
    setFileUrl(uploadedUrl);
    setLoading(false);
  };



  const [submittedData,setSubmittedData] = useState({});
console.log(submittedData)
const storedData = JSON.parse(localStorage.getItem("conferenceForm")) || {
  username: "",
  email: "",
  textArea: "",
};

const [formData, setFormData] = useState(storedData);  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value }

    setFormData(updatedData);
    localStorage.setItem("conferenceForm", JSON.stringify(updatedData));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);
    
    setSubmittedData(formData);
    localStorage.setItem("submittedTicket", JSON.stringify(formData));

    setFormData({ username: "", email: "", textArea: "" });

    if (Object.keys(errors).length !== 0) {
      console.log(errors); 
    }else{
      navigate("/Ready",{ state: formData })
    }
  };

  useEffect(() => {
    localStorage.setItem("conferenceForm", JSON.stringify(formData));
  }, [formData]);
  
  useEffect(() => {
    const savedData = localStorage.getItem("conferenceForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);
  

  useEffect(() => {

    const savedTicket = localStorage.getItem("submittedTicket");
    if (savedTicket) setSubmittedData(JSON.parse(savedTicket));
  }, []);

 
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    } else {
      console.log(formErrors); 
    }
  }, [formErrors]);
  

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if(!regex.test(values.email)){
      errors.email = "This is not a valid email";
    }

    return errors;
  };


  return (
    <div className="attendeeDetail">
      <div className="container">
        <div className="wrapper" role="main">
          <div className="imageUploader">
            <p>Upload profile picture</p>
            <div className="image">
              <label htmlFor="file-upload">
                {loading ? (
                  <p>Uploading...</p>
                ) : (
                  <img src={fileUrl} alt="" className="profile-pic" />
                )}
                <img src={icon} alt="icon" />
                <p>Drag & drop or click to upload</p>
                <div className="overlay">
                  <img src={icon} alt="icon" />
                  <p>Drag & drop or click to upload</p>
                </div>
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                accept="image/*"
              />
            </div>
            <div className="icon"></div>
          </div>
          <div className="break" />
          <form onSubmit={handleSubmit} aria-labelledby="form-title">
            <div className="name">
              <label htmlFor="username">
                <p>Enter your name:</p>
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                autoFocus
                tabIndex="0"
              />
              {formErrors.username && (
                <p role="alert" style={{ color: "red" }}>
                  {formErrors.username}
                </p>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">
                <p>Enter your email:</p>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                tabIndex="0"
              />

              {formErrors.email && (
                <p role="alert" style={{ color: "red" }}>
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="textarea">
              <label htmlFor="textArea">
                <p>Special request?</p>
              </label>
              <input
                id="textArea"
                type="text"
                name="textArea"
                onChange={handleChange}
                value={formData.textArea}
                tabIndex="0"
              />
            </div>

            <div className="buttons">
              <button
                className="one"
                onClick={() => navigate("/AttendeeDetail")}
              >
                Back
              </button>
              <button
                className="two"
                tabIndex="0"
                type="submit"
                // onClick={() => 
                //    isSubmit && navigate("/Ready")}
              >
                Get My Free Ticket.
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetail;
