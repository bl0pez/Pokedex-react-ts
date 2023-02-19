import { useState } from 'react';
import { Header } from '../components/header/Header';

export const Pokemons = () => {

  const [query, setQuery] = useState<string>('');

  return (
    <>
        <Header 
          query={query}
          setQuery={setQuery}
        />

    
    </>
  )
}
