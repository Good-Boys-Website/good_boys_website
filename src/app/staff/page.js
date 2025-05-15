"use clinet";

import Image from "next/image";
import { staff } from "@/app/data/data";
import ScrollToContent from "../components/ScrollToContent";

import styles from "@/app/styling/staff.module.css";

function StaffCard({
  name,
  position,
  dog_breed,
  dog_topping,
  famous_dog,
  photo,
}) {
  return (
    <li data-scroll-section className={styles.staffCard}>
      <Image
        className={styles.staffPhoto}
        src={photo}
        alt="Photo of a Good Boys Dog Grooming staff member"
        width={3024}
        height={4032}
        priority
      />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.stats}>Dog Breed: {dog_breed}</p>
        <p className={styles.stats}>Dog Topping: {dog_topping}</p>
        <p className={styles.stats}>Famous Dog: {famous_dog}</p>
      </div>
    </li>
  );
}

export default function Staff() {
  return (
    <div className={`${styles.page} fade-in`}>
      <ScrollToContent />
      <h1 className={styles.header}>Meet our staff</h1>
      <h2 className={styles.subheader}>
        Get to know the wonderful Good Boys crew:
      </h2>
      <ul className={styles.staffSection}>
        {staff.map((member) => (
          <StaffCard
            key={member.id}
            photo={member.photo}
            name={member.name}
            position={member.position}
            dog_breed={member.dog_breed}
            dog_topping={member.dog_topping}
            famous_dog={member.famous_dog}
          />
        ))}
      </ul>
    </div>
  );
}
