import NotFound from "pages/not-found";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner";
import Titulo from "../../components/titulo";
import styles from "./player.module.css";

function Player() {
  const parametros = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/leoctc/cine-tag-react-api/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
        ></iframe>
      </section>
    </>
  );
}

export default Player;
