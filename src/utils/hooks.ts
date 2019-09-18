import { useRef, useEffect, useContext, useState, useCallback } from "react";
import { ThemeContext } from "styled-components";
import { PufTheme } from "./theme";
import { isDefined, getPropOrState, setPropOrState } from "./functions";

export const useEffectAfterMount = (cb, deps = []) => {
  const didRun = useRef(false);
  useEffect(() => {
    if (!didRun.current) {
      didRun.current = true;
      return;
    }
    return cb && cb();
  }, deps);
};

export const useTheme = () => {
  return useContext(ThemeContext) as PufTheme;
};

export const useHybrid = <T>(
  defaultValue: T,
  prop: T,
  updateProp: (value: T) => void
): [T, (value: T) => void] => {
  const [stateValue, setStateValue] = useState(
    isDefined(prop) ? prop : defaultValue
  );

  return useCallback((): [T, (value: T) => void] => {
    const hybridProp = getPropOrState(prop, stateValue);
    const setHybridProp = (value: T) =>
      setPropOrState<T>(updateProp, setStateValue, value);
    return [hybridProp, setHybridProp];
  }, [stateValue, prop, updateProp])();
};
