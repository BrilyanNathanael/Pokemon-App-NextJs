import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({ pokedata, poketype }) {
  return (
    <div className="container mb-5">
      <Link
        href={`/pokemon/${pokedata.id}`}
        className={`${styles.pokecard} ${
          styles[`${poketype}`]
        } text-decoration-none text-dark card d-flex flex-column align-items-center pt-3 pb-3`}
      >
        <img
          src={pokedata.sprites.front_default}
          alt="pokemon"
          width={200}
          height={200}
        />
        <h5 className="mt-3">
          {pokedata.name[0].toUpperCase() + pokedata.name.substring(1)}
        </h5>
      </Link>
    </div>
  );
}
