import styles from "./styles/postComponent.module.css";
import { Post } from '../utils/interfaces';
import { FcLike } from "react-icons/fc";

function PostComponent({data}: {data: Post}) {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className="border">
        <div>
          User Data
        </div>
        <div>

        </div>
      </div>

      {/* Content */}
      <div>
        <span>This is the Body</span>
          {data.content}
      </div>


      <div className="flex justify-end align-items-center">
        {/* Date */}
        <div>{data.comments.toString()}</div>

        {/* Content */}
        <div className="flex">{data.likes.toString()}<FcLike /></div>

        {/* Upvotes / Share / Save */}
        <div></div>
      </div>
    </div>
  );
}

export default PostComponent;