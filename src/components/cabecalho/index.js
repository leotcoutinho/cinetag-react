import { Link } from "react-router-dom";
import CabecalhoLink from "../cabecalho-link";
import styles from "./cabecalho.module.css";
import logo from "./logo.png";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="logo do cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
