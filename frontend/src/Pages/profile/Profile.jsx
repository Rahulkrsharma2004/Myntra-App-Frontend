import { useState, useContext } from "react";
import { Context } from "../../Contexts/AuthContext";
import "./Profile.css";
import { Modal, message } from "antd";
import Login from "../../Components/Login/Login";

const Profile = () => {
  const { isAuth, user, setUser } = useContext(Context);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    avatar: user?.avatar || "",
    gender: user?.gender || "",
    shipping: user?.shipping || "",
  });
  const [modal2Open, setModal2Open] = useState(false);

  if (!isAuth) {
    return <Login />;
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let updatedData = {};

    for (let key in formData) {
      if (formData[key] !== "") {
        updatedData[key] = formData[key];
      }
    }

    setUser((prevUser) => ({
      ...prevUser,
      ...updatedData,
    }));

    message.success("Profile updated successfully!");
    setModal2Open(false);
  };

  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img src={user?.avatar || "default-avatar-url"} alt="avatar" />
          <button
            onClick={() => setModal2Open(true)}
            className="editProfileBtn"
          >
            EDIT PROFILE
          </button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name</p>
            <p>{user?.name || "--"}</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>{user?.phone || "--"}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email || "--"}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.gender || "--"}</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <p>{user?.shipping || "--"}</p>
          </div>
        </div>
        <Modal
          title="Edit your personal details"
          open={modal2Open}
          footer={null}
          onCancel={() => setModal2Open(false)}
        >
          <form onSubmit={handleFormSubmit} className="profileForm">
            <input
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              type="text"
              placeholder="Full name"
              required
            />
            <br />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              type="tel"
              required
              placeholder="Enter phone number"
            />
            <br />
            <input
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              type="email"
              required
              placeholder="Enter email address"
            />
            <br />
            <input
              name="avatar"
              value={formData.avatar}
              onChange={handleFormChange}
              type="url"
              required
              placeholder="Paste avatar link"
            />
            <br />
            <input
              name="shipping"
              value={formData.shipping}
              onChange={handleFormChange}
              type="text"
              required
              placeholder="Shipping details"
            />
            <br />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleFormChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
            <br />

            <div className="modalActions">
              <button
                type="button"
                onClick={() => setModal2Open(false)}
                className="cancelBtn"
              >
                Cancel
              </button>
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
