import { Dispatch } from "react";

export type StateItemType<T> = [T, Dispatch<React.SetStateAction<T>>];
