
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
