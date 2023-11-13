'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Post } from '../utils/interfaces';
import PostComponent from './postComponent';

function Posts({data}: {data: Post[]}) {
  if(data == null) return;

  const [posts, setPosts] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return(
    <div>
      <div>
        {isLoaded ?
          Object.keys(data).length > 1 && data.map((post: Post, index: Number) => (
              <PostComponent data={post} />
            ))
          :
          <div>
          </div>
        }
      </div>
    </div>      
  )

}

export default Posts;