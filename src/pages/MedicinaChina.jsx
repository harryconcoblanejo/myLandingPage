
import './MedicinaChina.css'

function MedicinaChina() {
    return (
        <main className="medicina-page">
            <section className="medicina-intro">
                <h1>Medicina China</h1>

                <p>
                    Un espacio de atención orientado al bienestar,
                    la relajación y el equilibrio corporal.
                </p>

                <p>
                    La propuesta combina diferentes herramientas de la
                    medicina tradicional china y técnicas complementarias.
                </p>
            </section>

            <section className="medicina-servicios">
                <article className="medicina-servicio">
                    <h2>Acupuntura</h2>
                    <p>
                        Una práctica de la medicina tradicional china que trabaja mediante la estimulación de puntos específicos del cuerpo con agujas muy finas. La sesión se plantea de manera personalizada, teniendo en cuenta el momento y las necesidades de cada persona.
                    </p>
                </article>

                <article className="medicina-servicio">
                    <h2>Masajes descontracturantes</h2>
                    <p>
                        Un trabajo manual orientado a zonas donde suele acumularse tensión, como espalda, cuello y hombros. Se busca combinar presión, movilidad y diferentes técnicas de masaje para generar una sensación de alivio y descanso corporal.
                    </p>
                </article>

                <article className="medicina-servicio">
                    <h2>Ventosas</h2>
                    <p>
                        Una técnica tradicional en la que se aplican ventosas sobre distintas zonas del cuerpo, generando una succión controlada. Puede incorporarse como complemento de otras técnicas, especialmente cuando se busca trabajar sobre zonas con mucha tensión o sensación de rigidez.
                    </p>
                </article>

                <article className="medicina-servicio">
                    <h2>Moxibustión</h2>
                    <p>
                       Una técnica tradicional de la medicina china que utiliza el calor producido por la combustión de la moxa, una preparación elaborada a partir de artemisa. Se aplica de manera localizada sobre determinados puntos o zonas del cuerpo y puede combinarse con la acupuntura u otras herramientas de la sesión.
                    </p>
                </article>

                <article className="medicina-servicio">
                    <h2>Armonización sonora</h2>
                    <p>
                        Una experiencia complementaria en la que utilizo sonidos, vibraciones y música en vivo para crear un entorno de pausa y relajación. No forma parte de la medicina tradicional china, pero la incorporo como una herramienta adicional para acompañar la experiencia y favorecer un clima de calma.
                    </p>
                </article>
            </section>

            <section className="medicina-final">
                <p>
                    Un espacio pensado para bajar el ritmo,
                    escuchar el cuerpo y dedicar un momento al bienestar.
                </p>

                <a
                    href="https://maps.app.goo.gl/pNZfnva6hgsUctfy8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medicina-google"
                >
                    Ver consultorio y opiniones en Google
                </a>
            </section>
        </main>
    )
}

export default MedicinaChina


