import { useQuery } from "@tanstack/react-query";

export const fetchPost = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export const usePost = () => {
  return useQuery<Post[]>({
    queryKey: ["post"],
    queryFn: fetchPost,
  });
};
