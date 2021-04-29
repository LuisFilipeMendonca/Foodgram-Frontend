export interface IFormProps {
  title: string;
  submitHandler: (e: React.FormEvent) => void;
  submitDescription: string;
  additionalBtn?: JSX.Element;
  isLoading?: boolean;
}

export interface IFormAuthProps {
  changeAuthHandler: () => void;
}
