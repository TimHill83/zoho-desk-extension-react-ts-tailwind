import { ZohoDeskProvider } from '../ZohoDeskContext/ZohoDeskProvider';
import SampleApp from './SampleApp';

const AppWithContext = () => {
  return (
    <ZohoDeskProvider>
      <SampleApp />
    </ZohoDeskProvider>
  );
};
export default AppWithContext;
