import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Button } from "./Button.js";
import { Container } from "./Container.js";
import { Input } from "./Input.js";
import { Link } from "./Link.js";

function App() {
  return (
    <>
      <Container>
        <Input placeholder="test" />
        <Button type="кнопка">Не нажимай</Button>
        <Link href="pornhub.com">НЕ ЗАХОДИ</Link>
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));

