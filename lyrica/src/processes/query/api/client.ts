import { QueryClient } from "@tanstack/react-query";
import { defaultQueryOptions } from "../model";

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        ...defaultQueryOptions,
      },
    },
  });
