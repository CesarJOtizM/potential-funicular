import React from "react";
import { useInView } from "react-intersection-observer";
import { PostCard } from "./PostCard";

interface Iprops {
  post: Post;
}

export const LazyPostCard: React.FC<Iprops> = ({ post }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo cargar una vez cuando aparece en pantalla
    threshold: 0.1, // Se carga cuando al menos el 10% del elemento es visible
    trackVisibility: true, // Esto ayuda a evitar flickering en algunos casos
    delay: 100, // Reduce la frecuencia de activación
  });
  console.log(inView);

  return <div ref={ref}>{inView ? <PostCard post={post} /> : null}</div>;
};
