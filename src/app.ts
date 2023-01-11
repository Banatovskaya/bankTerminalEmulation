import './index.scss';

import startPage from "./pages/startPage/startPage";
import menuPage from './pages/menuPage/menuPage';
import { ClientData } from "./interfaces/interfaces";

function app():void {
    // startPage()
const data:ClientData = {id: '1111', hash: 'hashOf1111', name: 'person1', cashBalance: 1000000}
    menuPage(data)
}

export default app
