import styles from "./styles/postComponent.module.css";
import { Post } from '../utils/interfaces';

function PostComponent({data}: {data: Post}) {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div>{data.content}</div>

      {/* Subtitle */}
      <div></div>

      {/* Date */}
      <div>{data.comments.toString()}</div>

      {/* Content */}
      <div>{data.likes.toString()}</div>

      {/* Upvotes / Share / Save */}
      <div></div>
    </div>
  );
}

export default PostComponent;