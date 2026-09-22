import './Musica.css' 
function Musica() {
     return ( 
     <main className="musica-page"> <section className="musica-intro">
         <h1>Música</h1> <p> Soy músico y docente con más de 20 años de experiencia. </p> 
         <p> Doy clases individuales y personalizadas de <strong> guitarra eléctrica y guitarra criolla</strong>, 
         trabajando géneros que van desde el <strong> blues, rock y metal hasta el tango y el folklore</strong>. </p> 
         
         <p> También dicto clases de <strong>bajo y batería</strong>. </p> </section> <section className="musica-enfoque">
             <h2>Una forma de aprender música</h2> <p> Las clases están pensadas para que puedas desarrollar el instrumento que 
                elijas desde una perspectiva práctica y musical, incorporando los recursos técnicos y los conceptos teóricos 
                necesarios para comprender la música como un lenguaje. </p> <p> El contenido se adapta a los objetivos, 
                    intereses y nivel de cada alumno, buscando que cada herramienta tenga una aplicación concreta al momento de tocar. </p>
                     </section> <section className="musica-propuestas"> <article className="musica-propuesta"> <h2>Guitarra Ninja</h2> 
                     <p> Proyecto dedicado a la enseñanza de guitarra, con contenidos, clases y recursos para desarrollar el instrumento desde 
                        distintos niveles y estilos. </p> <a href="https://www.instagram.com/guitarra.ninja/" 
                        target="_blank" rel="noopener noreferrer" className="musica-link" > Ver Guitarra Ninja en Instagram </a>
                         </article> <article className="musica-propuesta"> <h2>Música para meditación</h2> 
                         <p> También desarrollo una propuesta de música para meditación y música medicina, 
                            explorando el instrumento desde la respiración, la escucha, el silencio, las resonancias y la creación de 
                            estados de calma. </p> <a href="https://agua-page.vercel.app/" 
                            target="_blank" rel="noopener noreferrer" className="musica-link" > Conocer Proyecto Agua </a> 
                            </article> </section> </main> ) 
    } export default Musica