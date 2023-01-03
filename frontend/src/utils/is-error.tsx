import { IsFetchingError } from "../types/interface-Fetch-error";

export const isError = (error: unknown): error is IsFetchingError => {
  if (error && typeof error === "object" && "message" in error) {
    return true;
  }
  return false;
};
