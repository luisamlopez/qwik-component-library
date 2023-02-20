import { Avatar } from "./components/Avatar/Avatar";
import { Button } from "./components/Button/Button";
import { Counter } from "./components/Counter/counter";
import { Logo } from "./components/Logo/logo";

export default () => {
  function click() {
    console.log("click");
  }
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Counter />
        <Avatar size={100} url="https://placekitten.com/200/300" alt="Kitten" />
        <Button
          label="Hola"
          backgroundColor="#aaaaaa"
          fullWidth
          condensed
          onClick={click}
          primary
          size="large"
          style="font-weight: bold;"
        />
      </body>
    </>
  );
};
