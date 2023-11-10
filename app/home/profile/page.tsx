"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Profile {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  password?: String;
  date_of_birth: String;
  gender: String;
  phone_number: String;
  bio: String;
  profile_picture_url: String;
  cover_image_url: String;
  video_1_url: String;
  video_2_url: String;
  video_3_url: String;
  registration_date: String;
  last_login_date: String;
  is_verified: String;
  role: String;
}

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

  console.log("Profile: ", typeof profile);

  return (
    <div style={{width: '500px', height: '500px', backgroundColor: 'white', color: 'black', fontSize: '4em'}}>
      <div></div>
    </div>
  );
}
