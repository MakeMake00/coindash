import { Table } from "react-bootstrap";

const credits = [
  { name: "Bootstrap", website: "https://getbootstrap.com/" },
  { name: "ReactJS", website: "https://it.reactjs.org/" },
  { name: "React Bootstrap", website: "https://react-bootstrap.github.io/" },
  { name: "React Icons", website: "https://react-icons.github.io/" },
  { name: "React Router v6", website: "https://reactrouter.com/" },
  { name: "Sass", website: "https://sass-lang.com/" },
  { name: "Typescript", website: "https://www.typescriptlang.org/" },
  { name: "React Component - Select", website: "https://select-react-component.vercel.app/" }
];

export default function CreditsList() {

  return (
    <Table striped bordered>
      <tbody>
      {credits.map(c =>
        <tr>
          <td>{c.name}</td>
          <td>
            <a
              href={c.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.website}
            </a>
          </td>
        </tr>
      )}
      </tbody>
    </Table>
  );
}