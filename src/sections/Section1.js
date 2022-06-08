import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Section1() {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      auther: "mario",
      id: 1,
    },
    {
      title: "My first blog",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      auther: "mario",
      id: 2,
    },
    {
      title: "My VEDIO",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      auther: "jamigo",
      id: 3,
    },
  ]);

  // function Delete
  //
  const handleDelet = (id) => {
    // .filter คัดเลือกมาเป็นอาเลย์เล็กๆใหม่ เหมือน .map แต่มีเงื่อนไขในการเเสดง
    // .filter เป็น arr ชื่อ blog โดยสร้าง func ที่รีเทิร์น
    // รีเทิร์น id โดยที่ ไม่ใช่ blog.id ของตัวที่รับมา
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    //อัพเดท arr ที่จะสองแดง
    // จะเพิ่ม ลบ แก้ไข ต้องใช้ set
    setBlogs(newBlogs);
    console.log("delete");
  };

  // useEffect จะรันทุกครั้งที่มีการ รีเรนเด้อ
  useEffect(() => {
      console.log('use Effect ran')
      console.log(blogs)
  }, [blogs]);
  //จะรันทุกครั้งที่ [] มีการรีเรนเด้อ

  return (
    <div>
      {/* ส่ง props ออกไป เป็นชื่อ props ตามด้วยค่าที่จะส่งออกไป */}
      <BlogList blogs={blogs} title="All Blogs" />
      {/* Reuse components and use filter method  */}
      {/* ส่ง func ออกไปเป็น props handleDelete */}
      <BlogList
        blogs={blogs.filter((blog) => blog.auther === "mario")}
        title="Blog Mario"
        handleDelet={handleDelet}
      />
    </div>
  );
}

export default Section1;
