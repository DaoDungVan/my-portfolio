import { useState } from "react";
import avatar from "../assets/avatar.js";
import ThemeToggle from "./ThemeToggle.jsx";
import "./Nav.css";

export default function Nav({ onToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-in">
        <a href="#top" className="brand">
          <img src={avatar} alt="" />
          Dao Dung Van
        </a>
        <div className="nav-right">
          <div className={"nav-links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <ThemeToggle onToggle={onToggle} />
          <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">☰</button>
        </div>
      </div>
    </nav>
  );
}
