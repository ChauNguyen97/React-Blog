import './singlePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          odio nostrum itaque alias possimus. Quisquam facere quasi nesciunt
          rerum asperiores. Nostrum culpa inventore reiciendis odit molestiae
          deserunt facere, distinctio aspernatur? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repellat odio nostrum itaque alias
          possimus. Quisquam facere quasi nesciunt rerum asperiores. Nostrum
          culpa inventore reiciendis odit molestiae deserunt facere, distinctio
          aspernatur?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repellat odio nostrum itaque alias possimus. Quisquam facere quasi
          nesciunt rerum asperiores. Nostrum culpa inventore reiciendis odit
          molestiae deserunt facere, distinctio aspernatur?Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Repellat odio nostrum itaque alias
          possimus. Quisquam facere quasi nesciunt rerum asperiores. Nostrum
          culpa inventore reiciendis odit molestiae deserunt facere, distinctio
          aspernatur?
        </p>
      </div>
    </div>
  );
}
