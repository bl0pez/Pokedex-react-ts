import { RouterProvider } from 'react-router';
import { router } from './router'

export const PokedexApp = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
