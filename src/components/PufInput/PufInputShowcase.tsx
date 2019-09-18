import * as React from "react";
import { useState, Dispatch } from "react";
import { PufInput } from "./PufInput";
import { PufFormFieldContainer } from "../PufFormFieldContainer/PufFormFieldContainer";

export const PufInputShowcase = () => {
  const [firstValue, setFirstValue] = useState("");

  return (
    <div>
      <PufInput value={firstValue} onChange={setFirstValue} />
      <PufFormFieldContainer label="salut" status="error" message="red">
        <PufInput status="error" />
      </PufFormFieldContainer>
    </div>
  );
};
