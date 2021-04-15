import { useReducer } from "react";

import { IInputDefinition } from "../interfaces/Inputs";

type State = IInputDefinition[];

type Change = {
  type: "change";
  payload: HTMLInputElement;
};

type Set = {
  type: "set";
  payload: IInputDefinition[];
};

type Focus = {
  type: "focus";
  payload: string;
};

type ActionType = Change | Set | Focus;

const changeHandler = (state: State, payload: HTMLInputElement) => {
  const { name, value, id } = payload;
  const updatedState = [...state];

  const inputIdx = updatedState.findIndex((input) => input.name === name);

  if (Array.isArray(updatedState[inputIdx].value)) {
    const arrValueIdx = updatedState[inputIdx].values!.findIndex(
      (value) => value.id === id
    );

    if (arrValueIdx !== -1) {
      updatedState[inputIdx].values![arrValueIdx].value = value;
    } else {
      updatedState[inputIdx].values = [
        ...updatedState[inputIdx].values!,
        { id, value },
      ];
    }
  } else {
    updatedState[inputIdx].value = value;
  }

  return updatedState;
};

const focusHandler = (state: State, payload: string) => {
  const updatedState = [...state];
  const inputIdx = updatedState.findIndex((input) => input.name === payload);
  updatedState[inputIdx].isInvalid = false;
  updatedState[inputIdx].errorMsg = "";
  return updatedState;
};

const setHandler = (state: State, payload: IInputDefinition[]) => {
  const updatedState = [...payload];
  return updatedState;
};

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "change":
      return changeHandler(state, action.payload);
    case "set":
      return setHandler(state, action.payload);
    case "focus":
      return focusHandler(state, action.payload);
  }
};

const useInputs = (initialState: IInputDefinition[]) => {
  const [inputs, dispatch] = useReducer(
    reducer,
    initialState.map((slice) => Object.assign({}, slice))
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "change", payload: e.target });

  const setHandler = (inputs: IInputDefinition[]) =>
    dispatch({ type: "set", payload: inputs });

  const focusHandler = (name: string) =>
    dispatch({ type: "focus", payload: name });

  return { inputs, changeHandler, setHandler, focusHandler };
};

export default useInputs;
