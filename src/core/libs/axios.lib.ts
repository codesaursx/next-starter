export const catchError = (err: any) => {
  if (err.response) {
    throw new Error(err.response.data.errors);
  }
  throw new Error(err.message);
};
