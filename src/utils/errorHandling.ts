import { toast } from "react-toastify";

const errorHandling = (error: {
  status: number;
  data: { success: boolean; message: string; data: [] };
}) => {
  switch (error.status) {
    case 400:
      toast.error(error.data.message);
      break;
    case 401:
      toast.error(error.data.message);
      break;
    case 422:
      error.data.data.forEach((err) => toast.error(err));
      throw Error;
  }
};

export default errorHandling;
