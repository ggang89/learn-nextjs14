'use client'

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

export default function Movie({id,poster_path,title}) {
  const router = useRouter();  // router에 대한 access 제공
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie }>
      <img src={poster_path} alt={title} onClick={onClick } />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
 }