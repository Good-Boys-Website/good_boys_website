"use client";

import Image from "next/image";

import { serviceMenu } from "../data/data";
import { serviceMenuTwo } from "../data/data";
import useVisibilityObserver from "../hooks/useVisibilityObserver";
import styles from "@/app/styling/services.module.css";

function ServiceMenuCard({ name, options }) {
  const [serviceRef, serviceRefVisible] = useVisibilityObserver(0.6);

  return (
    <li
      ref={serviceRef}
      className={`${styles.serviceCard} ${
        serviceRefVisible ? styles.visible : ""
      }`}
    >
      <p className={styles.serviceName}>{name}</p>
      <div className={styles.sizeAndPrice}>
        {options?.map((option, index) => (
          <div className={styles.option} key={index}>
            <p className={styles.size}>{option.size}</p>
            <p className={styles.servicePrice}>{option.price}</p>
          </div>
        ))}
      </div>
    </li>
  );
}

function ServiceMenuTwoCard({ name, price }) {
  const [serviceRef, serviceRefVisible] = useVisibilityObserver(0.6);
  return (
    <li
      ref={serviceRef}
      className={`${styles.serviceCardTwo} ${
        serviceRefVisible ? styles.visible : ""
      }`}
    >
      <p className={styles.serviceNameTwo}>{name}</p>
      <p className={styles.servicePrice}>{price}</p>
    </li>
  );
}

export default function Services() {
  return (
    <main className={`${styles.page} fade-in`}>
      <header className={styles.bannerSection}>
        <Image
          className={styles.servicesBanner}
          alt="Photo of a freshly groomed dog"
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399499/specialty_dog_dye_poodle_groom_c_crop_ar_16_9_ydb3eg.jpg"
          width={2356}
          height={1325}
          priority
        />
        <Image
          className={styles.servicesBannerMobile}
          alt="Photo of a freshly groomed dog"
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1748572953/IMG_4624_fmukgy.jpg"
          width={3024}
          height={4032}
          priority
        />
        <div className={styles.bannerCopy}>
          <p className={styles.header}>Let&apos;s get to grooming.</p>
          <p className={styles.subHeader}>
            Check our premium dog grooming services.
          </p>
        </div>
      </header>
      <section className={styles.bookingSection}>
        <div className={styles.bookingButtons}>
          <a
            href="https://booking.moego.pet/ol/GoodBoysDogGrooming/book"
            target="_blank"
          >
            <button className={styles.bookingButton}>Book now</button>
          </a>
        </div>
        {/*<div className={styles.bookingButtons}>
          <a
            href="https://form.moego.pet/go/form?formId=531fada1d9c04b85995a109b44359401"
            target="_blank"
          >
            <button className={styles.bookingButton}>
              I&apos;m a new client
            </button>
          </a>
        </div>*/}
      </section>
      <section>
        <h2 className={styles.sectionHeader}>What Services We Offer</h2>
        <div className={styles.serviceList}>
          <ul className={styles.copy}>
            <li className={styles.serviceItem}>
              <b>Dog Bath:</b>{" "}
              <p className={styles.itemDescription}>
                We start with a nice clean bath using the right high-end
                products to give your pooch a shiny fur coat.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <b>Hair Cut:</b>
              <p className={styles.itemDescription}>
                We offer precision haircuts for your dog and ensure they look
                best in class.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <b>Specialty Grooming:</b>
              <p className={styles.itemDescription}>
                There&apos;s many ways to style a dog and provide unique designs
                and safe fur dyes to your dog&apos;s life; from rainbows to
                tiger print.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <b>Nail Trimming:</b>
              <p className={styles.itemDescription}>
                We all need the occasional mani/pedi; so does your dog. We
                ensure your dog&apos;s nails are trimmed and proper.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <b>Ear Cleaning:</b>
              <p className={styles.itemDescription}>
                Routine ear cleaning is essential for your dog&apos;s health.
                We&apos;ll gently wipe away debris so your canine can hear
                clearly.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <b>Tooth Brushing:</b>
              <p className={styles.itemDescription}>
                We&apos;ll brush your dog&apos;s teeth for polished pearly white
                teeth without the foul breath.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <b>Anal Gland Expression:</b>
              <p className={styles.itemDescription}>
                It&apos;s not for everybody, good thing we&apos;re
                professionals.
              </p>
            </li>
          </ul>
        </div>
        <h2>What Dogs We Service</h2>
        <p className={styles.copy}>
          Good Boys offers premium dog grooming for dogs of any age or breed. We
          price based on your dog&apos;s weight, from small dogs to big dogs.
          <b>Small Dog:</b> Dogs under 22 pounds.
          <b>Medium Dog:</b> 23-40 pounds
          <b>Large Dog:</b> 41-75 pounds
          <b>Extra-Large Dogs:</b> 75-150+ pounds.
        </p>
        <h2>What sets Good Boys apart?</h2>
        <p className={styles.copy}>
          At Good Boys, premium dog grooming means personalized care, top-tier
          products, and a calm, one-on-one experience designed around your
          dog&apos;s comfort and well-being. Each groomer work with one dog at a
          time, creating a low-stress environment where pups can relax and enjoy
          the process. Every groom is tailored to your dog&apos;s coat type,
          skin needs, and personality; no rushed appointments, no assembly-line
          grooming. We use high-quality, professional grooming products selected
          to promote healthy skin and a soft, well-maintained coat, along with
          modern tools that allow for safe, precise grooming. Our experienced
          groomers take the time to listen to your preferences and ensure your
          dog leaves looking great and feeling even better. Premium, to us,
          means attention to detail, patience, and genuine care. Every single
          visit.
        </p>
      </section>
      <article>
        {/* <h1 className={styles.sectionHeader}>Services</h1>
        <section className={styles.serviceSection}>
          <ul className={styles.serviceMenu}>
            {serviceMenu.map((service) => (
              <ServiceMenuCard
                key={service.id}
                name={service.name}
                options={service.options}
              />
            ))}
          </ul>
          <ul className={styles.serviceMenuTwo}>
            {serviceMenuTwo.map((serviceTwo) => (
              <ServiceMenuTwoCard
                key={serviceTwo.id}
                name={serviceTwo.name}
                price={serviceTwo.price}
              />
            ))}
          </ul>
        </section> */}
        <h3 className={styles.sectionHeader}>Promos & Discounts</h3>
        <p className={styles.copy}>
          We value our customers and are grateful for your trust. To showcase
          our gratitude, Good Boys offers promotions and discounts for new
          customers, referrals and reviews.
        </p>
      </article>
      <article data-scroll-section className={styles.mainPage}>
        <section className={styles.firstTimeSection}>
          <Image
            className={styles.firstTimePhoto}
            alt="Photo of a freshly groomed dog"
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399674/small_dog_groom_c_crop_ar_1_1_n5br6k.jpg"
            width={3024}
            height={3024}
            loading="lazy"
          />
          <p className={styles.mainText}>First Time Clients</p>
          <p className={styles.subText}>
            We&apos;re glad to meet you! Get a free tooth brush service add-on
            for new clients, no more stinky breath.
          </p>
          <div className={styles.priceSection}>
            <p className={styles.price}>
              <span className={styles.amount}>$8.00</span> FREE
            </p>
          </div>
        </section>
        <div>
          <section className={styles.referralSection}>
            <Image
              className={styles.referralPhoto}
              alt="image of Good Boys referral program"
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747400081/client_referral_program_kfp5pd.jpg"
              width={1074}
              height={522}
              loading="lazy"
            />
            <p className={styles.mainText}>Re-furral Program</p>
            <p className={styles.subText}>
              Tell your friends about us and get a discount through our referral
              program. Word of mouth is one of the best ways to support local
              business, so we want to reward your referral. Just make sure they
              drop your name.
            </p>
            <div className={styles.priceSection}>
              <p className={styles.priceReferral}>
                $25 off
                <span className={styles.nextService}> your next service</span>
              </p>
            </div>
          </section>
          <section className={styles.reviewSection}>
            <Image
              className={styles.referralPhoto}
              alt="image of a freshly groomed dog"
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747400025/poodle_dog_groom_dye_c_crop_ar_16_9_1_h9jhlz.jpg"
              width={3024}
              height={1701}
              loading="lazy"
            />
            <p className={styles.mainText}>Give us a review</p>
            <p className={styles.subText}>
              If you think we&apos;re neat, let us know! We appreciate your
              business and would love to hear about it on Google or Yelp.
              Reviews help us out immensely, so we want to help you.
            </p>
            <div className={styles.priceSection}>
              <p className={styles.priceReferral}>
                $10 off
                <span className={styles.nextService}> your next service</span>
              </p>
            </div>
            <div className={styles.buttonSection}>
              <a
                href="http://yelp.com/biz/good-boys-dog-grooming-chicago#reviews"
                target="_blank"
              >
                <button className={styles.servicesButton}>Yelp</button>
              </a>
              <a
                href="https://www.google.com/search?sca_esv=4fa71b8dbfa83ed9&rlz=1C5CHFA_enUS943US943&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0_vxXI22xmSkyM9ifaMi4ct_34JuFvg-Xjy1MroYnIAmC0H7TXHavDuqHjtQ_f0tQEzmLrv5_NscvJhdM30ZlvWFoFjM4bMPiCQxKckbQK5_0_C-A%3D%3D&q=Good+Boys+Dog+Grooming+Reviews&sa=X&ved=2ahUKEwjZlr3TgMSNAxVwKlkFHdTkMQwQ0bkNegQIKRAE&biw=1440&bih=703&dpr=2"
                target="_blank"
              >
                <button className={styles.servicesButton}>Google</button>
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
