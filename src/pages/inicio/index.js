import { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Card from "../../components/card";
import Titulo from "../../components/titulo";
import styles from "./inicio.module.css";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/leoctc/cine-tag-react-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos.</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
