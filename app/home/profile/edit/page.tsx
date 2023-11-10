"use client";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          User Registration
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Add similar styling for other form inputs */}
        <div className="mb-6 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
