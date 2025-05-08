import React from "react";
import styles from "../styles/Loading.module.css";
import Image from "next/image";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <Image src="/images/loading.gif" alt="Carregando" width={100} height={100} className={styles.image} />
            <p>Carregando países...</p>
        </div>
    );
}
