
import "./DashboardMainContent.css";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./ActivityFeed/ActivityFeed";

export default function DashboardMainContent() {
  return (
    <main className="main-content">
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
}
