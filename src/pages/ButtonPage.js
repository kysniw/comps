import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell />
          Hello!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Hi!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          Cześć!
        </Button>
      </div>
      <div>
        <Button warning>Gutenbuten!</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Hola!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
