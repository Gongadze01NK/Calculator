import Button from "./Button";

const ButtonGrid = ({ choseNumber, takeComma, back, reset, calculate }) => (
  <div className="grid">
    <Button className="special" onClick={reset} value="AC" />
    <Button className="special" onClick={back} value="⟵" />
    <Button className="special" onClick={choseNumber} value="%" />
    <Button className="op" onClick={choseNumber} value="/" />

    <Button onClick={choseNumber} value="7" />
    <Button onClick={choseNumber} value="8" />
    <Button onClick={choseNumber} value="9" />
    <Button className="op" onClick={choseNumber} value="*" />

    <Button onClick={choseNumber} value="4" />
    <Button onClick={choseNumber} value="5" />
    <Button onClick={choseNumber} value="6" />
    <Button className="op" onClick={choseNumber} value="-" />

    <Button onClick={choseNumber} value="1" />
    <Button onClick={choseNumber} value="2" />
    <Button onClick={choseNumber} value="3" />
    <Button className="op" onClick={choseNumber} value="+" />

    <Button className="zero" onClick={choseNumber} value="0" />
    <Button onClick={takeComma} value="." />
    <Button className="op" onClick={calculate} value="=" />
  </div>
);

export default ButtonGrid;
