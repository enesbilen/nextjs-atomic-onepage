"use client"

import { useEffect } from "react";
import styles from "./datatable.module.scss";
import PrimeDataTable from "@/components/atoms/PrimeDataTable";



const Datatable = () => {

    useEffect(() => {
        getUsersData().then(users => {
          console.log(users);
        });
      }, []);

    return (
        <div className={styles.container}>
            <PrimeDataTable users={users} allowEdit={true} />
        </div>
    );
}

export default Datatable;
