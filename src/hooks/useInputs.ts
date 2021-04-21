import { useReducer } from "react";

import { IInputDefinition } from "../interfaces/Inputs";
import Validator from "../helpers/Validator";

type State = IInputDefinition[];

type Change = {
  type: "change";
  payload: HTMLInputElement | HTMLTextAreaElement;
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

const changeHandler = (
  state: State,
  payload: HTMLInputElement | HTMLTextAreaElement
) => {
  const { name, value, id, type } = payload;
  const updatedState = [...state];
  const inputIdx = updatedState.findIndex((input) => input.name === name);

  if (Array.isArray(updatedState[inputIdx].value)) {
    const prevValues = [...updatedState[inputIdx].value];
    prevValues[+id] = value;
    updatedState[inputIdx].value = prevValues;
  } else if (type === "file") {
    const {
      isValid,
      errorMsg,
    } = Validator.isFileValid(payload as HTMLInputElement, [
      "image/jpeg",
      "image/png",
    ]);
    if (!isValid) {
      updatedState[inputIdx].errorMsg = errorMsg;
      updatedState[inputIdx].isInvalid = !isValid;
      updatedState[inputIdx].value = "";
    } else {
      const { files } = payload as HTMLInputElement;
      const fileBlob = URL.createObjectURL(files![0]);
      updatedState[inputIdx].value = fileBlob;
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

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "change", payload: e.target });
  };

  const setHandler = (inputs: IInputDefinition[]) =>
    dispatch({ type: "set", payload: inputs });

  const focusHandler = (name: string) =>
    dispatch({ type: "focus", payload: name });

  return { inputs, changeHandler, setHandler, focusHandler };
};

export default useInputs;
