import "./App.css";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Select className="select">
        <Label className="label">Favorite Animal</Label>
        <Button className="trigger">
          <SelectValue />
        </Button>

        <Popover className="popover">
          <ListBox className="listbox">
            <ListBoxItem className="item">Cat</ListBoxItem>
            <ListBoxItem className="item">Dog</ListBoxItem>
            <ListBoxItem className="item">Kangaroo</ListBoxItem>
          </ListBox>
        </Popover>
      </Select>
    </>
  );
}

export default App;
