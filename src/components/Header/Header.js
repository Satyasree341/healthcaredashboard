
import "./Header.css";
import avatar from "../../assets/avatar.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>
      <input type="text" className="search" placeholder="Search" />
      <div className="icons">
        <span className="notification">🔔</span>
        <img src={avatar} alt="User" className="avatar" />
        <span className="username">Dr. Smith</span>
        <button className="add-btn">＋</button>
      </div>
    </header>
  );
}
