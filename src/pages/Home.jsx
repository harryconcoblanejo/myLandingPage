import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
 
<div className="page-content">
    <section className="activities">
   <Link to="/medicina-china" className="activity-card">
          <img
            src="/images/med china.png"
            alt="Medicina China"
          />
          <h2>Medicina China</h2>
        </Link>
        <Link to="/musica" className="activity-card">
          <img
            src="/images/musica.png"
            alt="Música"
          />
          <h2>Música</h2>
        </Link>

        <Link to="/artes-marciales" className="activity-card">
          <img
            src="/images/artes marciales.png"
            alt="Artes Marciales"
          />
          <h2>Artes Marciales</h2>
        </Link>

     

      </section> 
</div>
     
    </main>
  )
}

export default Home