import { postDataExample } from '../utils/postDataExample'

const PostsComponent = () => {

  return (
    <body className="container-card">
      <section className="card-card">
        {postDataExample.map((post, index) => {
          return (
            post.image !== undefined && (
              <div key={index} className="card">
                <div className="container-image">
                  <div className="img">
                  <img
                    src={post.image}
                    width="100%" 
                    height="100%" 
                    layout="responsive" 
                    objectFit="contain"
                  />
                  </div>
                </div>
                <div className="description">
                  <span>{post.comentario}</span>
                </div>
              </div>
            )
          )
        })}
      </section>
    </body>
  )
}

export default PostsComponent


export function img({ src, styles }) {

  return (
    <div className={styles.containerImage}>
      <img className="next-image" src={src} layout="fill" objectFit="contain" />
    </div>
  )
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