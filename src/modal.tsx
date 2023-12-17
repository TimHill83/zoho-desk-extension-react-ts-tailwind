import { createRoot } from 'react-dom/client';

const modalRootElement = document.getElementById('modal-root');
const modalRoot = createRoot(modalRootElement!);

modalRoot.render(
  <>
    <h2>React!</h2>
  </>
);
