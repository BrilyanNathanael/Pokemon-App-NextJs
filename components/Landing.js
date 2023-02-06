import Image from "next/image";
import styles from "./Landing.module.css";

export default function Landing({ image }) {
  return (
    <div className="container text-light pt-5 pb-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <p className="text-light mb-0">Pokemon Cards</p>
            <div className={`${styles.line} ms-3 mt-1`}></div>
          </div>
          <h1 className="mt-3 mb-3">
            Catch{`'`}em! Collect your Strongest and Rarest Pokemon
          </h1>
          <p className="text-secondary">Catch all of the pokemon.</p>
          <a
            href="#pokemons"
            className={`${styles.btn} text-decoration-none d-inline-block btn-primary mt-2`}
          >
            Catch Pokemon
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img src="/Pokemon.png" alt="pokemon" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
