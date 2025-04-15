function PokemonDetail({ pokemon }) {
    // Show loading state if pokemon data is not available yet
    if (!pokemon) return <div className="loading">Loading...</div>;
  
    return (
      <div className="pokemon-detail">
        <div className="pokemon-header">
          <h2 className="pokemon-name">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <p className="pokemon-number">
            #{pokemon.id.toString().padStart(3, '0')}
          </p>
        </div>
        
        <div className="pokemon-images">
          <img 
            src={pokemon.sprites.front_default} 
            alt={`${pokemon.name} front view`}
            className="pokemon-sprite" 
          />
          {pokemon.sprites.back_default && (
            <img 
              src={pokemon.sprites.back_default} 
              alt={`${pokemon.name} back view`}
              className="pokemon-sprite" 
            />
          )}
        </div>
        
        <div className="pokemon-types">
          <h3>Types:</h3>
          <div className="type-list">
            {pokemon.types.map(typeInfo => (
              <span 
                key={typeInfo.type.name} 
                className={`type-badge ${typeInfo.type.name}`}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pokemon-stats">
          <h3>Base Stats:</h3>
          <ul className="stats-list">
            {pokemon.stats.map(statInfo => (
              <li key={statInfo.stat.name} className="stat-item">
                <span className="stat-name">
                  {statInfo.stat.name.replace('-', ' ')}:
                </span>
                <span className="stat-value">{statInfo.base_stat}</span>
                <div className="stat-bar-container">
                  <div 
                    className="stat-bar" 
                    style={{ width: `${(statInfo.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pokemon-abilities">
          <h3>Abilities:</h3>
          <ul className="abilities-list">
            {pokemon.abilities.map(abilityInfo => (
              <li key={abilityInfo.ability.name} className="ability-item">
                {abilityInfo.ability.name.replace('-', ' ')}
                {abilityInfo.is_hidden && ' (Hidden)'}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pokemon-measures">
          <div className="measure">
            <h3>Height:</h3>
            <p>{pokemon.height / 10}m</p>
          </div>
          <div className="measure">
            <h3>Weight:</h3>
            <p>{pokemon.weight / 10}kg</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PokemonDetail;