import React from "react";

// not use props by props but use by name of they props
// รับ props มาใช้งาน รับด้วยชื่อของอากิวเม้น
function BlogList({ blogs, title, handleDelet }) {
  // when use BlogList(props)
  // const blogs = props.blogs
  // const title = props.title
  return (
    <div>
      <h1>{title}</h1>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>Written By {blog.auther}</p>
            {/* ส่ง id ตัวที่จะลบออกไป */}
            <button onClick={() => handleDelet(blog.id)}>Delete Blog</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
