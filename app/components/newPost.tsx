'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/newPost.module.css';
import { IoCloseSharp } from "react-icons/io5";
import { NewPost } from '../utils/interfaces';
import { GrAddCircle } from "react-icons/gr";
import Toast from './toast';

// Button WIth "+ New Post" that calls the new post component
function NewPost () {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClose = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <div onClick={handleClose} className={styles.postButton}>
        <GrAddCircle color="lightblue" size={25} />
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
    content: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("authToken") || "");
    }
  }, []);

  const onSubmit = () => {
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/post",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {

      })
      .catch((error) => {
        <Toast message={error.response} success={false} />
        console.log(error.response);
      });
  }

  return (
    <div className={styles.componentContainer}>
      <div className={styles.componentContainerContent}>
        <div className={styles.componentHeader}>
          <div>Create a new post...</div>
          <div onClick={onClose} className="cursor-pointer" style={{border: "1px solid black"}}>
            <IoCloseSharp size={25} />
          </div>
        </div>
        <div className={styles.componentBody}>
          <div className="w-full max-w-md mx-auto p-4">
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows={4}
            placeholder="Type something..."
          ></textarea>
        </div>
        </div>
        <div className="flex justify-end align-items-center">
          <div className={styles.componentSubmitButton}>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost;