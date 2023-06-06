import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "@/styles/Header.module.scss";
import Image from "next/image";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={ pathname != '/login' ? styles.header__active : styles.header}>
      <Link href="/" className="p-1">
        <Image src="/kfc_logo.svg.png" alt='logo' width={95} height={95} />
      </Link>

      <Link href="/" className={styles.addit}>
        <Image src="/1.png" alt='logo2' width={100} height={100} />
      </Link>

      <Link href="/" className={styles.addit}>
        <Image src="/5.png" alt='logo3' width={100} height={100} />
      </Link>

      <Link href="/" className={styles.addit}>
        <Image src="/7.png" alt='logo4' width={100} height={100} />
      </Link>
      
    </header>

    
  );
};

export default Header;
