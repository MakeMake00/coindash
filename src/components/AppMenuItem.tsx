import { IconType } from "react-icons/lib";

interface Props {
  label: string,
  icon: IconType,
  alignBottom?: true
}

export default function AppMenuItem(props: Props) {
  return (
    <div
      className={`app-menu-item ${props.alignBottom && 'align-bottom'}`}
    >
      <props.icon className="item-icon"/>
      <div className="item-label">{props.label}</div>
    </div>
  );
}

