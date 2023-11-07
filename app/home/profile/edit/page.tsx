import { useState } from "react";
import axios from "axios";

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth?: Date;
  gender?: string;
  phoneNumber?: string;
  bio?: string;
  profilePictureURL?: string;
  coverPhotoURL?: string;
  video1URL?: string;
  video2URL?: string;
  video3URL?: string;
}

const initialFormData: UserFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  dateOfBirth: new Date(),
  gender: "",
  phoneNumber: "",
  bio: "",
  profilePictureURL: "",
  coverPhotoURL: "",
  video1URL: "",
  video2URL: "",
  video3URL: "",
};

const Edit = () => {
  const [formData, setFormData] = useState<UserFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Assuming you have a server endpoint to handle the form data
      const response = await axios.post("/api/user", formData);

      // Handle the response from the server as needed
      console.log("Server Response:", response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields based on your UserFormData interface */}
      {/* Example: */}
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      {/* Add more fields as needed */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Edit;
