import { useQuery } from "@tanstack/react-query";

export const fetchUserById = async (id: string): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener el usuario");
  }
  return res.json();
};

export const useUserById = (id: string) => {
  return useQuery<User>({
    queryKey: ["userById", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });
};
