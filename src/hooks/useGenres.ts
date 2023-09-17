import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchData = () =>
  apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
