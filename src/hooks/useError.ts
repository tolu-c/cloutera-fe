import { AxiosError } from "axios";

export const useError = () => {
  // const { notify } = useNotification();

  const handleError = (error: unknown) => {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      console.log(error.status);
      // notify('error', error.message);
    } else {
      console.log(error);
      // notify('error', 'An error occurred. Please try again later.');
    }
  };

  return { handleError };
};
