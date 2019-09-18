import * as React from "react";
import { FunctionComponent } from "react";
import { useTheme, useHybrid } from "../../utils/hooks";
import { PufFormFieldStatus } from "../PufFormFieldContainer/PufFormFieldContainer";
import styled from "styled-components";
import { PufTheme } from "../../utils/theme";

export interface PufInputProps {
  status?: PufFormFieldStatus;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const PufInput: FunctionComponent<PufInputProps> = props => {
  const [value, setValue] = useHybrid("", props.value, props.onChange);
  const theme = useTheme();

  return (
    <Input
      placeholder={props.placeholder}
      styleTheme={theme}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

interface InputProps {
  styleTheme: PufTheme;
}
const auxInput = styled.input<InputProps>``;
const Input = styled(auxInput)`
  background-clip: padding-box;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(226, 229, 236);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(226, 229, 236);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(226, 229, 236);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(226, 229, 236);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: rgb(73, 80, 87);
  cursor: text;
  display: block;
  font-family: Poppins;
  font-size: 13px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  height: 38.3906px;
  letter-spacing: normal;
  line-height: 19.5px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 8.45px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 8.45px;
  text-align: start;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s;
  transition-property: border-color, box-shadow, -webkit-box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
  width: 734px;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  -webkit-appearance: none;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-rtl-ordering: logical;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-border-image: none;
`;
