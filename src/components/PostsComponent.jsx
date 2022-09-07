import { postDataExample } from "../utils/postDataExample";
import "../styles/componentsStyles/PostCard.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRetweet, FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { MdSaveAlt } from "react-icons/md";
import { useState } from "react";

const PostsComponent = () => {
  return (
    <div className="card-container">
      {postDataExample.map((post, index) => {
        return (
          post.images !== undefined && (
            <div key={index} className="card-info">
              <div className="image-profile">
                <img
                  src={post.user.userImage}
                  alt="profile"
                  className="userinfo-img-post"
                  width={50}
                  height={50}
                />
              </div>
              <div className="card-item-post">
                <UserInfo
                  userName={post.user.userName}
                  userIdString={post.user.userIdString}
                />
                <div className="description-post">
                  <p>{post.description}</p>
                </div>
                <Getimages idPost={post.id} images={post.images} />
                <InteractionIcons
                  nComment={post.nComment}
                  nLikes={post.nLikes}
                  nRetweet={post.nRetweet}
                />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PostsComponent;

export function Getimages({ idPost, images }) {
  return (
    <div
      className={
        images.length === 1
          ? "container-image-post-1"
          : images.length === 2 || images.length === 3
          ? "container-image-post-2"
          : "container-image-post-4"
      }
    >
      {images.slice(0, 5).map((image, index, { length }) => {
        return (
          <div key={index}>
            <img
              src={image.image}
              alt="imagen"
              className={
                length === 3 && index === 1
                  ? "image-post-max"
                  : length === 5 && index === 3
                  ? "image-post-max"
                  : "image-post"
              }
              onClick={() => console.log("full")}
            />
            {(length === 5 && index === 3) || (length === 3 && index === 1) ? (
              <div
                className={
                  length === 3 && index === 1
                    ? "n-images-container-3"
                    : "n-images-container-5"
                }
                onClick={() => console.log("full desde div contador")}
              >
                <span className="n-images">
                  +{length === 3 ? "2" : images.length - 3}
                </span>
              </div>
            ) : null}
          </div>
        );
      })}
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

export function UserInfo({ userName, userIdString }) {
  return (
    <div className="username-post">
      <span>{userName}</span>
      <span>{userIdString}</span>
    </div>
  );
}

export function InteractionIcons({ nComment, nLikes, nRetweet }) {
  const [isLike, setIsLike] = useState(false);
  const [isShared, setIsShared] = useState(false);
  return (
    <div className="interaction-item-post">
      <div className="right">
        {isLike ? (
          <BsHeartFill
            className="icon-post"
            onClick={() => setIsLike(!isLike)}
          />
        ) : (
          <BsHeart className="icon-post" onClick={() => setIsLike(!isLike)} />
        )}
        <span>{nLikes}</span>
        <FaRegComment className="icon-post" />
        <span>{nComment}</span>
        {isShared ? (
          <FaRetweet
            className="icon-post"
            onClick={() => setIsShared(!isShared)}
          />
        ) : (
          <AiOutlineRetweet
            className="icon-post"
            onClick={() => setIsShared(!isShared)}
          />
        )}
        <span>{nRetweet}</span>
      </div>
      <div className="left">
        <FiShare2 className="icon-post" />
        <MdSaveAlt className="icon-post" />
      </div>
    </div>
  );
}
