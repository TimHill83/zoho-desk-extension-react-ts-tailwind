import { ZohoDeskProvider } from '../ZohoDeskContext/ZohoDeskProvider';
import SampleApp from './SampleApp';

const App = () => {
  return (
    <ZohoDeskProvider>
      <SampleApp />
    </ZohoDeskProvider>
  );
};
export default App;
