"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  
  const path = usePathname();
  //console.log("path", path); // path /movies/123
 
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "😀" : ""}
        </li>
       
        <li>
          <Link href="/movies">MovieDatail</Link>
          {path.startsWith("/movies") ? "😀" : ""}
        </li>
      </ul>
    </nav>
  );
}
