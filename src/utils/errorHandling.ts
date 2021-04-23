import { toast } from "react-toastify";

const errorHandling = (error: {
  status: number;
  data: { success: boolean; message: string; data: [] };
}) => {
  console.log(error.status);
  switch (error.status) {
    case 400:
      toast.error(error.data.message);
      break;
    case 401:
      toast.error(error.data.message);
      break;
    case 422:
      error.data.data.forEach((err) => toast.error(err));
      break;
  }

  throw error.status;
};

export default errorHandling;
