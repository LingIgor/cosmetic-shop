import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link>Каталог</Link>
        <Link>Про нас</Link>
        <Link>Контакти</Link>
      </nav>
      <div style={{ display: "flex" }}>
        <Link><CiUser size={25} /></Link>
        <Link><BsHandbag size={23} /></Link>
      </div>
    </div>
  );
};
