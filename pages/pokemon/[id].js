import axios from "axios";
import Detail from "components/Detail";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PokemonDetail() {
  const router = useRouter();
  const id = router.query;

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchPokemonDetail = async (param) => {
    setLoading(true);
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${param.id}`
    );
    setPokemon(res.data);
    setLoading(false);
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetchPokemonDetail(id);
  }, [router.query.id, router.isReady]);

  return (
    <div className="page">
      <Navbar />
      {!loading ? (
        <Detail pokemon={pokemon} />
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <div class="lds-dual-ring"></div>
        </div>
      )}
      <Footer />
    </div>
  );
}
