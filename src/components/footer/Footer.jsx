import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Columna 1: Contacto */}
          <div className="footer-column">
            <h4>Contáctanos</h4>
            <p><strong>Tel:</strong> +34 123 456 789</p>
            <p><strong>Email:</strong> info@comidas.com</p>
            <p><strong>Skype:</strong> comidas.support</p>
          </div>

          {/* Columna 2: Redes sociales */}
          <div className="footer-column">
            <h4>Síguenos</h4>
            <div className="footer-images">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/footer/Facebook.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/footer/Instagram.png" alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/footer/Twiter.png" alt="Twitter" />
              </a>
            </div>
          </div>

          {/* Columna 3: Lista de correos */}
          <div className="footer-column">
            <h4>Suscríbete</h4>
            <p>Recibe nuestras novedades y ofertas especiales.</p>
            <form className="footer-form">
              <input type="email" placeholder="Tu email..." />
              <button type="submit">Enviar</button>
            </form>
          </div>

          {/* Columna 4: Enlaces y políticas */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul className="footer-policies">
              <li>º <a href="/politics">Política de Privacidad y Cookies</a></li>
              <li>º <a href="/conditions">Condiciones de Venta</a></li>
              <li>© 2025 COMIDAS Todos los derechos reservados</li>
            </ul>
          </div>
        </div>
                  {/* Links de navegación (lo que ya tenías) */}
          <ul className="footer-links">
            <li><a href="/home">Inicio</a></li>
            <li><a href="/chefs">Chefs</a></li>
            <li><a href="/famous-dish">Platos</a></li>
            <li><a href="/recipe">Recetas</a></li>
            <li><a href="/restaurants">Restaurantes</a></li>
            <li><a href="/review">Reseñas</a></li>
          </ul>
      </footer>
    </>
  );
}

export default Footer;
