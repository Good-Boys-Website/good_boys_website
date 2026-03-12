"use clinet";

import Image from "next/image";
import { staff } from "@/app/data/data";

import styles from "@/app/styling/staff.module.css";

function StaffCard({ name, position, photo }) {
  return (
    <li data-scroll-section className={styles.staffCard}>
      <Image
        className={styles.staffPhoto}
        src={photo}
        alt="Photo of a Good Boys Dog Grooming staff member"
        width={2082}
        height={2777}
        priority
      />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
      </div>
    </li>
  );
}

export default function Staff() {
  return (
    <main className={`${styles.page} fade-in`}>
      <article>
        <h1 className={styles.header}>Meet our staff</h1>
        <p className={styles.subheader}>Get to know the Good Boys crew.</p>
        <ul className={styles.staffSection}>
          {staff.map((member) => (
            <StaffCard
              key={member.id}
              photo={member.photo}
              name={member.name}
              position={member.position}
            />
          ))}
        </ul>
      </article>
    </main>
  );
}
