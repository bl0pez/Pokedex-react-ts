import { createBrowserRouter, Navigate } from 'react-router-dom';

// === pages ===
import { PokemonDetails } from '../pages/PokemonDetails';
import { Pokemons } from '../pages/Pokemons';

export const router = createBrowserRouter([
    {
        path: "/pokemons",
        element: <Pokemons />,
    },
    {
        path: "/pokemon/:name",
        element: <PokemonDetails />,
    },
    {
        path: "*",
        element: <Navigate to="/pokemons" />,
    }
]);