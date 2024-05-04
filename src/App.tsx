import ButtonGradient from "./assets/svg/ButtonGradient";
import { Button } from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="overflow-hidden pt-[4.75rem] lg:-[5.25rem]">
        <Button className="mt-10" href="https://www.google.com"></Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
