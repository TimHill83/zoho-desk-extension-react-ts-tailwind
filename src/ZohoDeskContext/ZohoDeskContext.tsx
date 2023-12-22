import { createContext } from 'react';

interface ZohoDeskContextProps {
  loading: boolean;
  app: any;
}

export const ZohoDeskContext = createContext<ZohoDeskContextProps>({
  loading: true,
  app: null
});
