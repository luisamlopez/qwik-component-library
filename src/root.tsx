import { Avatar } from "./components/Avatar/Avatar";
import { Button } from "./components/Button/Button";
import { Counter } from "./components/Counter/counter";
import { Logo } from "./components/Logo/logo";

export default () => {
  // function click() {
  //   console.log("click");
  // }
  const primary = "red";
  const secondary = "blue";
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
          label="primary"
          color={primary}
          condensed
          onClick$={() => console.log("click")}
        />
        <Button
          label="secondary-large"
          color={secondary}
          fullWidth
          size="large"
          condensed
          onClick$={() => console.log("click")}
        />

        <Button
          label="Custom"
          color="#ab123b"
          fullWidth
          onClick$={() => console.log("click")}
        />
      </body>
    </>
  );
};
