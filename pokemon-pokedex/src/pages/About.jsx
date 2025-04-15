function About() {
    return (
      <div className="about-page">
        <h1>About the Pokédex App</h1>
        <p>
          This Pokédex application was created as a React project. It uses the PokéAPI 
          to fetch and display information about different Pokémon.
        </p>
        <p>
          With this app, you can browse through the catalog of Pokémon and view detailed 
          information about each one, including their types, abilities, stats, and more.
        </p>
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Vite</li>
          <li>PokéAPI</li>
          <li>Axios</li>
        </ul>
        <h3>Author: Ghiyath</h3>
      </div>
    );
  }
  
  export default About;