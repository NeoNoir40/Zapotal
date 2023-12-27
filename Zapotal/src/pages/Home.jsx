import Carrusel from "../components/CarruselMobile";

import img1 from "../assets/img/imagenesDeTerreno/1.jpeg";
import img2 from "../assets/img/imagenesDeTerreno/2.jpeg";
import img3 from "../assets/img/imagenesDeTerreno/3.jpeg";
import img4 from "../assets/img/imagenesDeTerreno/4.jpeg";
import img5 from "../assets/img/imagenesDeTerreno/5.jpeg";
import img6 from "../assets/img/imagenesDeTerreno/6.jpeg";

import img1Camino from "../assets/img/camino/1.jpeg";
import img2Camino from "../assets/img/camino/2.jpeg";
import img3Camino from "../assets/img/camino/3.jpeg";
import img4Camino from "../assets/img/camino/4.jpeg";
import img5Camino from "../assets/img/camino/5.jpeg";
import img6Camino from "../assets/img/camino/6.jpeg";

import img1Amenidades from "../assets/img/amenidades/1.jpeg";
import img2Amenidades from "../assets/img/amenidades/2.jpeg";
import img3Amenidades from "../assets/img/amenidades/3.jpeg";
import img4Amenidades from "../assets/img/amenidades/4.jpeg";
import img5Amenidades from "../assets/img/amenidades/5.jpeg";
import img6Amenidades from "../assets/img/amenidades/6.jpeg";
import img7Amenidades from "../assets/img/amenidades/7.jpeg";
import img8Amenidades from "../assets/img/amenidades/8.jpeg";
import img9Amenidades from "../assets/img/amenidades/9.jpeg";
import img10Amenidades from "../assets/img/amenidades/10.jpeg";

const slidesAmenidades = [
  img1Amenidades,
  img2Amenidades,
  img3Amenidades,
  img4Amenidades,
  img5Amenidades,
  img6Amenidades,
  img7Amenidades,
  img8Amenidades,
  img9Amenidades,
  img10Amenidades,
];

const slides2 = [
  img1Camino,
  img2Camino,
  img3Camino,
  img4Camino,
  img5Camino,
  img6Camino,
];

const slides = [img1, img2, img3, img4, img5, img6];

console.log(slides);

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="boxInicio">
        <div className="cuadroInicio">
          <h2 className="tituloboxinicio">El Zapotal</h2>
          <p className="descripcionboxinicio">
            Venta de terrenos, lotes de buen tamaño, bonitos con hermosos
            árboles, hermosos paisajes, los más baratos de la ruta de los
            cenotes, buen trato, buen lugar, con 2 parques ecológicos en el
            camino del fraccionamiento, facilidades de pago, hermosa naturaleza,
            excelente ubicación, con alta plusvalía a 10 minutos del paradero
            del tren maya, la mejor inversión está en tus manos.
          </p>
        </div>
      </div>

      <div className="box2">
        <div className="cuadroAsesor">
          <h2>Asesor</h2>
          <p>Correo Electrónico :</p>
          <p>Número Telefónico</p>
          <p>
            Manda un mensaje a nuestro correo electrónico acerca de tus dudas o
            bien puedes contactarnos mediante WhatsApp.
          </p>
        </div>
      </div>
      <h1 className="text-center">Imagen del terreno</h1>

      <div className="flex justify-center items-center p-5 ">
        <div className="flex  max-w-lg  items-center justify-center">
          <Carrusel>
            {slides.map((s, k) => (
              <img key={k} src={s} />
            ))}
          </Carrusel>
        </div>
      </div>

      <h1 className="text-center ">Imagen del camino</h1>

      <div className="flex justify-center items-center p-5 ">
        <div className="flex  max-w-lg items-center justify-center">
          <Carrusel>
            {slides2.map((s, k) => (
              <img key={k} src={s} />
            ))}
          </Carrusel>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 p-5">
      <h1 className="text-center">Ubicacion</h1>
        <div className="flex  items-center justify-center">
          <iframe
          className="h-[350px] w-[350px]  md:h-[500px] md:w-[1200px]   "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3727.262353901085!2d-87.103361!3d20.901762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e71a7e944ce53%3A0x7dbc351103c4473f!2sFraccionamiento%2C%20El%20ZAPOTAL.!5e0!3m2!1ses-419!2smx!4v1703706961096!5m2!1ses-419!2smx"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      <div className="boxAmenidades">
        <div className="cuadroAmenidades">
          <h2 className="tituloboxamenidades">El Zapotal</h2>
          <p className="descripcionamenidades">
            - Caseta de seguridad con acceso controlado las 24 hrs y seguridad
            en desarrollo full time 🚨 - Calles blancas iluminadas - Cenote
            propio con área de baños y vestuario 🏊 - Area de palapas y asadores
            - Zona de juegos para niños - Oficina administrativas en el
            desarrollo🏪
          </p>
        </div>
      </div>
      
      <h1 className="text-center ">Imagen del camino</h1>

<div className="flex justify-center items-center p-5 ">
  <div className="flex  max-w-lg items-center justify-center">
    <Carrusel>
      {slidesAmenidades.map((s, k) => (
        <img key={k} src={s} />
      ))}
    </Carrusel>
  </div>
</div>

    </div>
  );
}
