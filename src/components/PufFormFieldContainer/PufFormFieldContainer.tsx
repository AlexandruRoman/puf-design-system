import * as React from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

export type PufFormFieldStatus = "info" | "error" | "success" | "warning";

export interface PufFormFieldContainerProps {
  label?: string;
  status?: PufFormFieldStatus;
  message?: string;
}

export const PufFormFieldContainer: FunctionComponent<
  PufFormFieldContainerProps
> = props => {
  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      {props.children}
      {props.message && (
        <Message status={props.status}>{props.message}</Message>
      )}
    </Container>
  );
};

const Container = styled.div``;
const Label = styled.div``;
interface MessageProps {
  status?: PufFormFieldStatus;
}
const Message = styled.div<MessageProps>`
  color: ${props => {
    switch (props.status) {
      case "error":
        return "red";

      default:
        return "black";
    }
  }};
`;
