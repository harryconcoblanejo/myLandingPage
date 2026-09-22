
import './ArtesMarciales.css'

function ArtesMarciales() {
  return (
    <main className="artes-page">

      <section className="artes-intro">
        <h1>Artes Marciales</h1>

        <p className="artes-subtitulo">
          Bujinkan Budō Taijutsu
        </p>

        <p>
          15 años de experiencia en el estudio y la práctica
          de este arte marcial tradicional japonés.
        </p>

        <p>
          Bujinkan es una organización que reúne nueve antiguas
          tradiciones marciales (ryūha). La práctica está orientada
          al desarrollo del cuerpo, la técnica y el espíritu como
          una unidad: <strong>Shin Gi Tai Ichi</strong>.
        </p>
      </section>


      <section className="artes-bloques">

        <article className="arte-bloque">
          <h2>Taijutsu</h2>

          <p>
            El trabajo corporal comprende diferentes formas de
            golpear, ejecutar luxaciones y controles articulares,
            realizar derribos y proyecciones, así como aprender
            a recibir y absorber este tipo de técnicas.
          </p>
        </article>


        <article className="arte-bloque">
          <h2>Trabajo con armas tradicionales</h2>

          <p>
            El entrenamiento también incluye el estudio y manejo
            de diferentes armas tradicionales japonesas, entre ellas:
          </p>

          <ul>
            <li>Bastón largo — Bō Jutsu</li>
            <li>Sable — Tō Jutsu</li>
            <li>Lanza — Sō Jutsu</li>
            <li>Armas de cadena — Kusari Fundo</li>
            <li>Armas arrojadizas — Shuriken Jutsu</li>
          </ul>
        </article>

      </section>


      <section className="artes-entrenamiento">

        <h2>Entrenamiento</h2>

        <p>
          En Bonzi Dojo ponemos en práctica lo aprendido mediante
          sesiones de sparring (randori), priorizando ante todo
          la integridad física de quienes entrenan y haciendo
          especial énfasis en la correcta ejecución técnica.
        </p>

        <p>
          La práctica está abierta a todas aquellas personas que
          tengan ganas de entrenar y puedan comprometerse con el
          entrenamiento de forma regular.
        </p>

        <p>
          Se trata de un camino de disciplina, integración
          y perseverancia.
        </p>

      </section>


      <section className="artes-dojos">

        <h2>Actualmente enseño en</h2>

        <div className="dojos-links">

          <a
            href="https://www.instagram.com/p/DVMUmGViXgc/"
            target="_blank"
            rel="noopener noreferrer"
            className="dojo-link"
          >
            Bonzi Dojo
          </a>

          <a
            href="https://www.instagram.com/keikokai_buenosaires/"
            target="_blank"
            rel="noopener noreferrer"
            className="dojo-link"
          >
            Tokyo Gekiken Club Keikokai Buenos Aires
          </a>

        </div>

      </section>

    </main>
  )
}

export default ArtesMarciales
