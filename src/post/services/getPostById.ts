import { useQuery } from "@tanstack/react-query";

export const fetchCommentsId = async (id: string): Promise<Commentary[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  if (!res.ok) {
    throw new Error("Error al obtener el post");
  }
  return res.json();
};

export const useComments = (id: string) => {
  return useQuery<Commentary[]>({
    queryKey: ["postById", id],
    queryFn: () => fetchCommentsId(id),
    enabled: !!id,
  });
};
