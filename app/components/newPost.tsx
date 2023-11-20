'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/newPost.module.css';
import { IoCloseSharp } from "react-icons/io5";
import { NewPost } from '../utils/interfaces';
import { GrAddCircle } from "react-icons/gr";
import Toast from './toast';
import { FaRegImage } from "react-icons/fa";

// Button WIth "+ New Post" that calls the new post component
function NewPost () {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClose = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <div onClick={handleClose} className={styles.postButton}>
        <GrAddCircle color="blue" size={25} />
        <div>
          <span>New Post</span>
        </div>
      </div>
      {isVisible && <NewPostComponent onClose={handleClose} />}
    </div>
  )
}

// Hover New post with all the data needed.
// IT will request the API

function NewPostComponent({onClose} : {onClose: () => void}) {
  const [token, setToken] = useState<any>();
  const [postData, setPostData] = useState<NewPost>({
    content: "",
    image: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("authToken") || "");
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const onSubmit = () => {

    var data = {
      content: postData.content
    }

    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/post",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data
    };

    axios(config)
      .then((response) => {
        alert("added");
        <Toast message={"data created"} success={true} />
      })
      .catch((error) => {
        <Toast message={error.response} success={false} />
        console.log(error.response);
      });
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPostData({
          ...postData,
          image: reader.result as string,
        });
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={styles.componentContainer}>
      <div className={styles.componentContainerContent}>
        <div className={styles.componentHeader}>
          <div>Create a new post...</div>
          <div onClick={onClose} className="cursor-pointer" style={{border: "1px solid #bbb", borderRadius: "50%", padding: '5px'}}>
            <IoCloseSharp size={25} />
          </div>
        </div>
        <div className={styles.componentBody}>
          <div className="w-full max-w-md mx-auto p-4">
          <textarea
            name="content"
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
            placeholder="Type something..."
          ></textarea>
        </div>
        </div>
        <div className="flex justify-between m-2 align-items-center">
          <div className="flex border align-items-center w-full">
            <label htmlFor="imageInput" className={styles.componentAddImageButton} >
              <FaRegImage size={40} />
            </label>
          </div>
          <div onClick={() => {onSubmit()}} className={styles.componentSubmitButton}>
            <span>Submit</span>
          </div>
        </div>
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange}
        style={{display: 'none'}}
        id="imageInput"
      />
    </div>
  )
}

export default NewPost;