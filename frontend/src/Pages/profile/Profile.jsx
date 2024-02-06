import React, { useState } from "react";
import "./Profile.css";
import { Modal } from "antd";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Profile = () => {
  const [modal2Open, setModal2Open] = useState(false);
  // const { user } = useSelector((store) => store.auth.data);
  // const [formData, setFormData] = useState({
  //   name: user.name || "",
  //   phone: user.phone || "",
  //   avatar: "",
  //   gender: "",
  //   shipping: user.shipping || "",
  // });
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {};
    for (let key in formData) {
      if (formData[key] !== "") {
        data[key] = formData[key];
      }
    }
    console.log(data);
  };

  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          {/* <img src={user?.avatar} alt="avatar" /> */}
          {/* <p>{user?.email}</p> */}
          <button onClick={() => setModal2Open(true)}>EDIT PROFILE</button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            {/* <p>{user?.name}</p> */}
          </div>
          <div>
            <p>Mobile Number</p>
            {/* <p>{user?.mobile ? user.mobile : "Not added"}</p> */}
          </div>
          <div>
            <p>Email</p>
            {/* <p>{user?.email}</p> */}
          </div>
          <div>
            <p>Gender</p>
            {/* <p>{user?.gender ? user.gender : "Not added"}</p> */}
          </div>
          <div>
            <p>Shipping Details</p>
            {/* <p>{user?.shipping ? user.shipping : "Not added"}</p> */}
          </div>
          <Modal
            title="Edit your personal details"
            open={modal2Open}
            footer={null}
            onCancel={() => setModal2Open(false)}
            style={{ width: { sm: "100%" } }}
          >
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                // value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
              <br />
              <input
                name="phone"
                // value={formData.phone}
                onChange={handleFormChange}
                type="tel"
                placeholder="Enter phone number"
              />
              <br />
              <input
                name="avatar"
                // value={formData.avatar}
                onChange={handleFormChange}
                type="url"
                placeholder="Paste avatar link"
              />
              <br />
              <input
                name="shipping"
                // value={formData.shipping}
                onChange={handleFormChange}
                type="text"
                placeholder="Shipping details"
              />
              <br />
              <select name="gender" onChange={handleFormChange}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              <br />

              <button type="submit">Cancel</button>
              <button type="submit">Save</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;