import Button from "../components/Button.tsx";


export default function Home() {

  return (
    <div>
     
     <body  class={"pos"}>

      <a href={"/user"} class={"tit"}>Buscar Usuario Aleatorio</a> <br></br>
      <a href={"/city"} class={"tit"}>Buscar Ciudad</a> <br></br>
      <a href={"/dog"} class={"tit"}>Buscar raza de Perro</a>
    </body>

    </div>
  );
}
