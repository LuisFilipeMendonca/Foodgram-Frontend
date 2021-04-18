import React from "react";

interface IInputActions {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focusHandler: (name: string) => void | (() => void);
}

export interface IInputDefinition {
  value: string | [];
  label?: string;
  placeholder: string;
  type: string;
  qtty?: number;
  name: string;
  values?: { id: string; value: string }[];
  isInvalid: boolean;
  errorMsg: string;
  info?: string;
  minLength?: number;
  validator?: (
    input: IInputDefinition
  ) => { isValid: boolean; errorMsg: string };
}

export interface IInput extends IInputDefinition, IInputActions {}

export interface IInputNormal extends IInputActions {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  info?: string;
  errorMsg: string;
  isInvalid: boolean;
  value: string | [];
}

export interface IInputGroup extends IInputActions {
  label: string;
  name: string;
  placeholder: string;
  qtty: number;
}
