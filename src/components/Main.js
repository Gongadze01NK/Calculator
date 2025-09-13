import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

const Main = () => {
  const [takeNumber, setTakeNumber] = useState("");

  const isOperator = (char) => ["+", "-", "*", "/", "%"].includes(char);

  const choseNumber = (e) => {
    const value = e.target.dataset.value;

    setTakeNumber((prev) => {
      if (isOperator(value) && isOperator(prev.slice(-1))) {
        return prev;
      }
      return prev + value;
    });
  };

  const takeComma = (e) => {
    const value = e.target.dataset.value;

    setTakeNumber((prev) => {
      const parts = prev.split(/[\+\-\*\/%]/);
      const lastPart = parts[parts.length - 1];

      if (lastPart.includes(".")) {
        return prev;
      }

      return prev + value;
    });
  };

  const back = () => {
    setTakeNumber((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = new Function(`return ${takeNumber}`)();
      setTakeNumber(String(result));
    } catch {
      setTakeNumber("Error");
    }
  };

  const reset = () => {
    setTakeNumber("");
  };

  return (
    <main className="calc">
      <Display value={takeNumber} />
      <ButtonGrid
        choseNumber={choseNumber}
        takeComma={takeComma}
        back={back}
        reset={reset}
        calculate={calculate}
      />
    </main>
  );
};

export default Main;
