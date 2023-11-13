'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Profile } from '../utils/interfaces';
import styles from './profileCard.module.css';
import { colors } from '../utils/colors';

function ProfileCard() {
  const [token, setToken] = useState<String>("");

  const [loaded, setLoaded] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    bio:  '',
    profilePictureUrl:  '',
    coverImageUrl:  '',
    video1Url:  '',
    video2Url:  '',
    video3Url:  '',
    registrationDate: '',
    lastLoginDate:  '',
    isVerified:  '',
    role:  ''
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + '/user/profile',
      method: 'get',
      /*headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }*/
    }

    axios(config)
      .then((response) => {
        setProfile(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(profile.profilePictureUrl);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <img className="object-cover w-full h-full" src={loaded ? profile.profilePictureUrl : ""} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2 style={{fontWeight: '800', fontSize: '38px'}}>{loaded && profile.firstName + " " + profile.lastName}</h2>
        <h6>{loaded && profile.bio}</h6>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.socialMediaContainer}>
          
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;