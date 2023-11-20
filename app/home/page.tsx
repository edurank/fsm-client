"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import UserTopbar from "../components/usertopbar";
import ProfileCard from "../components/profileCard";
import Posts from "../components/posts";
import axios from "axios";
import NewPost from "../components/newPost";
import LoadingIcon from "../components/loadingIcon";

interface News {
  status: string;
  totalResult: number;
  articles: any;
}

export default function Home() {
  const [posts, setPosts] = useState<any>(null);
  const [ownPosts, setOwnPosts] = useState<any>();
  const [news, setNews] = useState<News>();
  const [option, setOption] = useState<Number>(0);
  const [authToken, setAuthToken] = useState<String>("");
  const [ownPostsLoaded, setOwnPostsLoaded] = useState<boolean>(false);

  const selectedOption = {
    borderBottom: "5px solid lightblue",
  };

  useEffect(() => {
    getAuthToken();
  }, []);

  const getAuthToken = () => {
    try {
      const storedValue = localStorage.getItem("authToken");
      if (storedValue) {
        setAuthToken(storedValue);
      }
    } catch (error) {
      console.error("Error retrieving value from local storage:", error);
    }
  };

  const getOwnPosts = () => {
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/post",
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setOwnPostsLoaded(true);
        setOwnPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* test only */
  const getNews = () => {
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/echo/news",
      method: "GET",
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeOption = (option: Number) => {
    setOption(option);
    if (option == 1) {
      getOwnPosts();
    } else {
      getNews();
    }
  };

  return (
    <div className="block">
      <UserTopbar />
      <div className={styles.container}>
        <ProfileCard />
        <div className={styles.contentContainer}>
          <div className="flex justify-end mb-5">
            <NewPost />
          </div>
          <div className={styles.contentHeader}>
            <div
              style={option == 0 ? selectedOption : {}}
              onClick={() => {
                handleChangeOption(0);
              }}
            >
              Explore
            </div>
            <div
              style={option == 1 ? selectedOption : {}}
              onClick={() => {
                handleChangeOption(1);
              }}
            >
              Your Posts
            </div>
          </div>
          <div className={styles.contentBody}>
            {option == 1 ? 
              ownPostsLoaded ? 
              <Posts data={ownPosts != null && ownPosts} />
              :
              <div className="flex align-center justify-center">
                <LoadingIcon /> 
              </div>
             : (
              <div>{news && <div>{news?.articles}</div>}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
