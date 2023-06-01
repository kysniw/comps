import { useContext } from "react";
import NavigationContext from "../contexts/NavigationContext";

function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) return children;
  else return null;
}

export default Route;
