import { createRoot } from 'react-dom/client';
import { Gifts } from './components.jsx';

const giftsDomNode = document.getElementById('gifts');
const root = createRoot(giftsDomNode);
root.render(<Gifts />);
