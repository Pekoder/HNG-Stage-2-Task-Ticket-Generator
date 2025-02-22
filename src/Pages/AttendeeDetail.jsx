import React, { useRef, useState } from "react";
import "./AttendeeDetail.css";
import testImg from "./man-portrait.jpg"
import icon from "./cloud-download.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AttendeeDetail() {
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useState(c => c + "");
  const imge = useRef(null);
  // console.log(imge);

  const handleFileUpload = async(e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true)
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Using-cloudinary");
    data.append("cloud_name", "dakcu0sng");

    const res = await axios.post('https://api.cloudinary.com/v1_1/dakcu0sng/image/upload',data)
    const uploadedUrl = res.data.url;
    setFileUrl(uploadedUrl)
    console.log(uploadedUrl);

    setLoading(false)
  };

  return (
    <div className="attendeeDetail">
      <div className="container">
        <div className="wrapper" role="main">
          <div className="imageUploader">
            <p>Upload profile picture</p>
            <div className="image">
              <label htmlFor="file-upload">
                {loading ? <p>Uploading...</p> : <img 
                src={fileUrl}
                // src={testImg}
                className="profile-pic" alt="pic"/>} 
                <img src={icon} alt="icon" />
                <p>Drag & drop or click to upload</p>
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}

                ref={imge}
                accept="image/*"
              />
            </div>
            <div className="icon"></div>
          </div>
          <div className="break" />
          <form
            //  onSubmit={handleSubmit}
            aria-labelledby="form-title"
          >
            <div className="name">
              <label htmlFor="fullName">
                <p>Enter your name:</p>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                // value={formData.fullName}
                // onChange={handleChange}
                required
                autoFocus
                tabIndex="0"
              />
              {/* {errors.fullName && 
        <p role="alert" style={{ color: "red" }}>
      {errors.fullName}
        </p>} */}
            </div>
            <div className="email">
              <label htmlFor="email">
                <p>Enter your email:</p>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
                tabIndex="0"
              />

              {/* {errors.email && <p role="alert" style={{ color: "red" }}>{errors.email}</p>} */}
            </div>
            <div className="textarea">
              <label htmlFor="text-area">
                <p>Special request?</p>
              </label>
              <input
                id="text-area"
                type="text"
                name="text-area"
                // value={formData.text-area}
                // onChange={handleChange}
                tabIndex="0"
              />
            </div>

            {/* <button >Generate Ticket</button> */}
            <div className="buttons">
              <button
                className="one"
                type="submit"
                tabIndex="0"
                onClick={() => navigate("/AttendeeDetail")}
              >
                Back
              </button>
              <button className="two" onClick={() => navigate("/Ready")}>
                Get My Free Ticket.
              </button>
            </div>
          </form>
          {/* 

import { useState, useEffect, useRef } from "react";

const ConferenceForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  const ticketRef = useRef(null);

  // Load saved data from local storage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("conferenceForm");
    if (savedData) setFormData(JSON.parse(savedData));

    const savedTicket = localStorage.getItem("submittedTicket");
    if (savedTicket) setSubmittedData(JSON.parse(savedTicket));
  }, []);

  // Update local storage when form data changes
  useEffect(() => {
    localStorage.setItem("conferenceForm", JSON.stringify(formData));
  }, [formData]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Enter a valid email.";
    if (!formData.avatar.startsWith("http")) newErrors.avatar = "Enter a valid image URL.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmittedData(formData);
    localStorage.setItem("submittedTicket", JSON.stringify(formData));

    setFormData({ fullName: "", email: "", avatar: "" });
    localStorage.removeItem("conferenceForm");

    // Move focus to the ticket section for screen reader users
    setTimeout(() => {
      ticketRef.current?.focus();
    }, 100);
  };

  return (
    <main role="main">
      <h1 id="form-title">Conference Registration</h1>
      
      <form onSubmit={handleSubmit} aria-labelledby="form-title">
        <label htmlFor="fullName">Full Name:</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          autoFocus
          tabIndex="0"
        />
        {errors.fullName && <p role="alert" style={{ color: "red" }}>{errors.fullName}</p>}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          tabIndex="0"
        />
        {errors.email && <p role="alert" style={{ color: "red" }}>{errors.email}</p>}

        <label htmlFor="avatar">Avatar URL:</label>
        <input
          id="avatar"
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          required
          tabIndex="0"
        />
        {errors.avatar && <p role="alert" style={{ color: "red" }}>{errors.avatar}</p>}

        <button type="submit" tabIndex="0">Generate Ticket</button>
      </form>

      {submittedData && (
        <div ref={ticketRef} tabIndex="-1" style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
          <h2>Conference Ticket</h2>
          <p><strong>Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <img src={submittedData.avatar} alt="User Avatar" width="100" />
        </div>
      )}
    </main>
  );
};


            */}
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetail;
