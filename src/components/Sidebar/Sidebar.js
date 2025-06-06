
import "./Sidebar.css";
import navigationLinks from "../../data/navigation";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </aside>
  );
}
