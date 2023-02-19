import { FC } from 'react';

import styles from './header.module.css';

interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
}

export const Header: FC<HeaderProps> = ({ query, setQuery }) => {
  return (
    <header className={ styles.header }>

        <input
          className={ styles.search } 
          type="text"
          value={ query }
          onChange={ (e) => setQuery(e.target.value) }
          placeholder="Search Pokemon" />

    </header>
  )
}
