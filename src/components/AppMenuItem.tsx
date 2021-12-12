import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";

interface Props {
  label: string,
  icon: IconType,
  to: string,
  alignBottom?: true
}

export default function AppMenuItem(props: Props) {
  return (
    <NavLink
      to={props.to}
      className={`app-menu-item ${props.alignBottom && 'align-bottom'}`}
    >
      <props.icon className="item-icon"/>
      <div className="item-label">{props.label}</div>
    </NavLink>
  );
}

