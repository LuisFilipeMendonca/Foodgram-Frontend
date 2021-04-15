export interface IFormProps {
  title: string;
  submitHandler: (e: React.FormEvent) => void;
  submitDescription: string;
  additionalBtn?: JSX.Element;
}

export interface IFormAuthProps {
  changeAuthHandler: () => void;
}
