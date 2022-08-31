import { postDataExample } from "../utils/postDataExample";
import "../styles/componentsStyles/PostCard.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRetweet, FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";

const PostsComponent = () => {
  return (
    <div className="card-container">
      {postDataExample.map((post, index) => {
        return (
          post.image !== undefined && (
            <div key={index} className="card-info">
              <div className="userinfo-post">
                <img
                  src={post.user.userImage}
                  alt="profile"
                  className="userinfo-img"
                  width={50}
                  height={50}
                />
                <div className="username-post">
                  <text>{post.user.userName}</text>
                  <text>{post.user.userIdString}</text>
                </div>
              </div>
              <div className="description-post">
                <p>{post.description}</p>
              </div>
              <div className="container-image-post">
                <div className="background-image-post">
                  <img
                    src={post.image}
                    className="image-post"
                  />
                </div>
              </div>
              <div className="interaction-post">
                <BsHeart className="icon-post icon-outline" />
                <BsHeartFill className="icon-post icon-outline" />
                <span>{post.nLikes}</span>
                <FaRegComment className="icon-post icon-outline" />
                <span>{post.nComment}</span>
                <AiOutlineRetweet className="icon-post icon-outline" />
                <FaRetweet className="icon-post icon-outline" />

                <span>{post.nRetweet}</span>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PostsComponent;

export function img({ src, styles }) {
  return (
    <div className={styles.containerImage}>
      <img className="next-image" src={src} layout="fill" objectFit="contain" />
    </div>
  );
}

/*
export function img({ src, width, height }) {
  const style = { paddingBottom: `min(350px, ${100 / (width / height)}%)` }
  return (
    <div className={`next-image-wrapper`} style={style}>
      <Image className="next-image" src={src} layout="fill" objectFit="contain" />
    </div>
  )
}

*/
