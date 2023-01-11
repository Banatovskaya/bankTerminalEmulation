import './index.scss';

import startPage from "./pages/startPage/startPage";
import menuPage from './pages/menuPage/menuPage';
import bankingServicesPage from './pages/bankingServisesPage/bankingServicesPage';
import otherServicesPage from './pages/otherServisesPage/otherServicesPage';
import topUpCardPage from './pages/topUpCardPage/topUpCardPage';
import { ClientData } from "./interfaces/interfaces";

function app():void {
    // startPage()
// const data:ClientData = {id: '1111', hash: 'hashOf1111', name: 'person1', cashBalance: 1000000}
//     menuPage(data)
bankingServicesPage()
}


export default app
