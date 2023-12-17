import './tailwind.css';
import { createRoot } from 'react-dom/client';
import { Modal } from './components/Modal/Modal';

const modalRootElement = document.getElementById('modal-root');
const modalRoot = createRoot(modalRootElement!);

modalRoot.render(<Modal />);
