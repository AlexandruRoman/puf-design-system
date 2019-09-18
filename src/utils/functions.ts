export const isDefined = prop => typeof prop !== "undefined";

export const getPropOrState = <T>(prop: T, state: T) =>
  isDefined(prop) ? prop : state;

export const setPropOrState = <T>(
  propCb: (value: T) => void,
  stateCb: (value: T) => void,
  value: T
) => (isDefined(propCb) ? propCb(value) : stateCb(value));
