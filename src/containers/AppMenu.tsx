import { FcLineChart, FcInfo } from "react-icons/fc";
import AppMenuItem from "components/AppMenuItem";

export default function AppMenu() {
  return (
    <nav className="app-menu">
      <AppMenuItem
        label="Charts"
        icon={FcLineChart}
        to="/"
      />
      <AppMenuItem
        label="About"
        icon={FcInfo}
        to="/about"
        alignBottom
      />
    </nav>
  );
}

