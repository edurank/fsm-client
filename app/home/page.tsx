"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import UserTopbar from "../components/usertopbar";
import ProfileCard from "../components/profileCard";
import Posts from "../components/posts";
import axios from "axios";
import NewPost from "../components/newPost";

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
  const [ownPostsLoaded, isOwnPostsLoaded] = useState<boolean>(false);

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
      url: process.env.NEXT_PUBLIC_APIURL + "/post/all",
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setOwnPosts(response.data);
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
          <div>
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
            {option == 1 ? (
              <Posts data={ownPosts != null && ownPosts} />
            ) : (
              <div>{news && <div>{news?.articles}</div>}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
