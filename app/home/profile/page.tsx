"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from './profile.module.css';
import UserTopbar from "@/app/components/usertopbar";
import { FaEdit } from 'react-icons/fa';
import ProfileCard from '../../components/profileCard';

interface Profile {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
  password?: String;
  dateOfBirth: String;
  gender: String;
  phoneNumber: String;
  bio: String;
  profilePictureUrl: String;
  coverImageUrl: String;
  video1Url: String;
  video2Url: String;
  video3Url: String;
  registrationDate: String;
  lastLoginDate: String;
  isVerified: String;
  role: String;
}

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, onChange }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleEditToggle = () => {
    setIsReadOnly((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center mb-6">
      <label htmlFor={label.toLowerCase()} className="flex-none w-32 text-gray-700 text-lg font-semibold mr-4">
        {label}:
      </label>
      <div className="relative flex-grow">
        {isReadOnly ?
          <div>{inputValue}</div>
        :
          <input
          type={type}
          id={label.toLowerCase()}
          placeholder={placeholder}
          className={`w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all duration-300 ${
            isReadOnly ? 'readonly' : ''
          }`}
          readOnly={isReadOnly}
          value={inputValue}
          onChange={handleChange}
        />
        }
        {!isReadOnly && (
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={handleEditToggle}
          >
            <FaEdit size={20} color="#3498db" />
          </div>
        )}
      </div>
    </div>
  );
};


export default function Profile() {
  const [profile, setProfile] = useState<Profile>();
  const [token, setToken] = useState<any>();

  const getData = () => {
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/user",
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    };
    
    axios(config)
      .then((repsonse) => {

      })
      .catch((error) => {

      });
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    role: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };


  return (
    <div className={styles.background}>
      <UserTopbar />
      <div className={styles.container}>
        <ProfileCard />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <InputField
              label="First Name"
              placeholder="Enter your first name"
              onChange={(value) => handleInputChange('firstName', value)}
            />
            <InputField
              label="Last Name"
              placeholder="Enter your last name"
              onChange={(value) => handleInputChange('lastName', value)}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={(value) => handleInputChange('email', value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(value) => handleInputChange('password', value)}
            />
            <InputField
              label="Date of Birth"
              type="date"
              placeholder="Select your date of birth"
              onChange={(value) => handleInputChange('dateOfBirth', value)}
            />
            <InputField
              label="Gender"
              placeholder="Select your gender"
              onChange={(value) => handleInputChange('gender', value)}
            />
            <InputField
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(value) => handleInputChange('phoneNumber', value)}
            />
            <InputField
              label="Role"
              placeholder="Enter your role"
              onChange={(value) => handleInputChange('role', value)}
            />
            <div className="mt-4">
              <p className="text-gray-500 italic">Click the edit icon to toggle read-only mode for each field.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
