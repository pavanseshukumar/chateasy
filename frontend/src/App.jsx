import { Button, HStack } from "@chakra-ui/react";
import "./App.css";
import { Provider } from "./components/ui/provider";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";

function App() {
  return (
    <div>
      <Provider>
        <h1>Hello World</h1>
        <HStack>
          <Button colorPalette="teal" variant="solid">
            <RiMailLine /> Email
          </Button>
          <Button colorPalette="teal" variant="outline">
            Call us <RiArrowRightLine />
          </Button>
        </HStack>
      </Provider>
    </div>
  );
}

export default App;
