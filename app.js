  import React from 'react';
   import './App.css';
   import { Header, Hero, ProductGrid, Features, Contact, Footer } from './components';

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

   export default App;
