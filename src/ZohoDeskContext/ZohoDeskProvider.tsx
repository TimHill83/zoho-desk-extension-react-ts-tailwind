import { useEffect, useState } from 'react';
import { ZohoDeskContext } from './ZohoDeskContext';

type ZohoDeskProviderProps = {
  children: React.ReactNode;
};

export const ZohoDeskProvider: React.FC<ZohoDeskProviderProps> = ({
  children
}) => {
  const [loading, setLoading] = useState(true);
  const [app, setApp] = useState<any>(null);

  useEffect(() => {
    ZOHODESK.extension.onload().then((App: any) => {
      console.log('Desk extension loaded');
      setLoading(false);
      setApp(App);
    });
  }, []);

  return (
    <ZohoDeskContext.Provider value={{ loading, app }}>
      {loading ? <div>Initialising...</div> : children}
    </ZohoDeskContext.Provider>
  );
};
