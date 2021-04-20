import React from "react";

interface IInputActions {
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  focusHandler: (name: string) => void | (() => void);
}

export interface IInputDefinition {
  value: string[] | string;
  label?: string;
  placeholder: string;
  type: string;
  qtty?: number;
  name: string;
  isInvalid: boolean;
  errorMsg: string;
  info?: string;
  minLength?: number;
  optionsType?: string;
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
  value: string[] | string;
}

export interface IInputGroup extends IInputActions {
  label: string;
  name: string;
  placeholder: string;
  qtty: number;
  isInvalid: boolean;
  value: string[];
  optionsType: string;
}
