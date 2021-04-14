import { useReducer } from "react";

interface Input {
  id: string;
  value: string;
  label: string;
  placeholder: string;
}

type State = Input[];

type Change = {
  type: "change";
  payload: HTMLInputElement;
};

type ActionType = Change;

const changeHandler = (state: State, payload: HTMLInputElement) => {
  const { id, value } = payload;
  const updatedState = [...state];
  const inputIdx = updatedState.findIndex((input) => input.id === id);

  updatedState[inputIdx].value = value;
  return updatedState;
};

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "change":
      return changeHandler(state, action.payload);
  }
};

const useInputs = (initialState: Input[]) => {
  const [inputs, dispatch] = useReducer(
    reducer,
    initialState.map((slice) => Object.assign({}, slice))
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "change", payload: e.target });

  return { inputs, changeHandler };
};

export default useInputs;
