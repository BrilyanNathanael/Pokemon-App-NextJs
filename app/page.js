"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "components/Navbar";
import Landing from "components/Landing";
import Footer from "components/Footer";
import Card from "components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function page() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    getPokeData(res.data.results);
    setLoading(false);
  };

  const getPokeData = async (res) => {
    res.map(async (pokedata) => {
      const result = await axios.get(pokedata.url);
      setPokemon((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <Landing image={pokemon[0]} />
      {!loading ? (
        <div className="container content" id="pokemons">
          <div className="row">
            {pokemon.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <Card pokedata={item} poketype={item.types[0].type.name} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <div class="lds-dual-ring"></div>
        </div>
      )}
      <Footer />
    </div>
  );
}
