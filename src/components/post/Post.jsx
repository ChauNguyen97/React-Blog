import './post.css';

function Post() {
    return (
      <div className="post">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="postImg"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          maiores delectus consequatur sit adipisci quas mollitia, iste eius
          maxime placeat tenetur. Dicta necessitatibus error atque molestiae
          pariatur, repudiandae tenetur. Consequatur. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Earum maiores delectus consequatur
          sit adipisci quas mollitia, iste eius maxime placeat tenetur. Dicta
          necessitatibus error atque molestiae pariatur, repudiandae tenetur.
          Consequatur.
        </p>
      </div>
    );
}

export default Post;
