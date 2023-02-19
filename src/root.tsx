import { Avatar } from "./components/Avatar/Avatar";
import { Counter } from "./components/Counter/counter";
import { Logo } from "./components/Logo/logo";
import { Button } from "./components/Button/button";

export default () => {
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
        <Button />
      </body>
    </>
  );
};
