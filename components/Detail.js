import React from "react";
import styles from "./Detail.module.css";

export default function Detail({ pokemon }) {
  return (
    <div className="container pt-5 pb-5 content">
      <div className="row justify-content-center">
        <div className="col-md-5 justify-content-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt="pokemon"
            className="img-fluid"
            width={400}
            height={400}
          />
        </div>
        <div className="col-md-7">
          <p className="text-secondary mb-0">Name Pokemon</p>
          <h1 className="text-white mb-4">
            {pokemon.name &&
              pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </h1>
          <p className="text-secondary">Type Pokemon</p>
          {pokemon.types &&
            pokemon.types.map((pk, index) => {
              {
                return pk.type.name == "poison" ? (
                  <span
                    key={index}
                    className={`${styles.btn} btn btn-secondary mb-4 me-2`}
                  >
                    {pk.type.name}
                  </span>
                ) : (
                  <span
                    key={index}
                    className={`${styles[`${pk.type.name}`]} ${
                      styles.btn
                    } btn text-white mb-4 me-2`}
                  >
                    {pk.type.name}
                  </span>
                );
              }
            })}
          <p className="text-secondary">Ability Pokemon</p>
          {pokemon.abilities &&
            pokemon.abilities.map((pk, index) => {
              if (index + 1 == pokemon.abilities.length) {
                return (
                  <span key={index} className="text-white">
                    {pk.ability.name}
                  </span>
                );
              } else {
                return (
                  <span className="me-1 text-white" key={index}>
                    {pk.ability.name},
                  </span>
                );
              }
            })}
          <div className="row mt-4">
            <div className="col-sm-5">
              <p className="text-secondary">Weight Pokemon</p>
              <h3 className="text-white">{pokemon.weight}</h3>
            </div>
            <div className="col-sm-5">
              <p className="text-secondary">Height Pokemon</p>
              <h3 className="text-white">{pokemon.height}</h3>
            </div>
          </div>
          <p className="text-secondary mt-4">Stats Pokemon</p>
          <div className="row">
            <div className="col-sm-4 mb-3">
              <p className="text-secondary">HP</p>
              <h3 className="text-white">
                {pokemon.stats && pokemon.stats[0].base_stat}
              </h3>
            </div>
            <div className="col-sm-4">
              <p className="text-secondary">ATK</p>
              <h3 className="text-white">
                {pokemon.stats && pokemon.stats[1].base_stat}
              </h3>
            </div>
            <div className="col-sm-4">
              <p className="text-secondary">DEF</p>
              <h3 className="text-white">
                {pokemon.stats && pokemon.stats[2].base_stat}
              </h3>
            </div>
            <div className="col-sm-4">
              <p className="text-secondary">Special ATK</p>
              <h3 className="text-white">
                {pokemon.stats && pokemon.stats[3].base_stat}
              </h3>
            </div>
            <div className="col-sm-4">
              <p className="text-secondary">Special DEF</p>
              <h3 className="text-white">
                {pokemon.stats && pokemon.stats[4].base_stat}
              </h3>
            </div>
            <div className="col-sm-4">
              <p className="text-secondary">SPD</p>
              <h3 className="text-white">
                {pokemon.stats && pokemon.stats[5].base_stat}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-secondary mt-4">Moves Pokemon</p>
          <div className="row">
            {pokemon.moves &&
              pokemon.moves.map((pk, index) => {
                return (
                  <div className="col-sm-3 text-white mb-2" key={index}>
                    <li>{pk.move.name}</li>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
