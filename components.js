const { useState, useEffect } = React;
const { useSpring, animated } = ReactSpring;

function Header() {
    return (
        <header className="header">
            <h1>Tu Marca</h1>
            <nav>
                <a href="#coleccion">Colección</a>
                <a href="#caracteristicas">Características</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </header>
    );
}

function Hero() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500,
    });

    return (
        <animated.section style={props} className="hero">
            <h2>Descubre el Confort y el Estilo</h2>
            <p>Nuestra colección de pantalones casuales combina comodidad y elegancia para el hombre moderno.</p>
            <a href="#coleccion" className="cta-button">Ver Colección</a>
        </animated.section>
    );
}

function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const props = useSpring({
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    });

    return (
        <animated.div
            style={props}
            className="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Añadir al carrito</button>
        </animated.div>
    );
}

function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aquí normalmente harías una llamada a la API de Shopify
        // Por ahora, usaremos datos de ejemplo
        setProducts([
            { id: 1, name: 'Chino Clásico', price: '$59.99', image: 'URL_DE_LA_IMAGEN' },
            { id: 2, name: 'Chino Slim Fit', price: '$64.99', image: 'URL_DE_LA_IMAGEN' },
            { id: 3, name: 'Chino Elástico', price: '$69.99', image: 'URL_DE_LA_IMAGEN' },
        ]);
    }, []);

    return (
        <section id="coleccion" className="product-grid">
            <h2>Nuestra Colección</h2>
            <div className="grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

function Features() {
    const features = [
        { icon: '🌟', text: 'Calidad Premium' },
        { icon: '🎨', text: 'Diseños Modernos' },
        { icon: '👖', text: 'Comodidad Garantizada' },
    ];

    return (
        <section id="caracteristicas" className="features">
            <h2>Por qué elegirnos</h2>
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <span className="feature-icon">{feature.icon}</span>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contacto" className="contact">
            <h2>Contáctanos</h2>
            <form>
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2023 Tu Marca. Todos los derechos reservados.</p>
        </footer>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <ProductGrid />
            <Features />
            <Contact />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
