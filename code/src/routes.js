import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import Blog from './pages/blog/index';
import ChipInternetAirport from './pages/chip-internet-aeroportos/index';
import ComoFunciona from "./pages/como-funciona";
import Compra from "./pages/compra/compra";
import Contatos from "./pages/contatos";
import DicasToViagens from "./pages/dicas-para-viagem";
import Distribuidores from "./pages/distribuidores";
import M2m from "./pages/m2m";
import MysimGroups from "./pages/mysimtravel-grupos";
import Privacidade from "./pages/privacidade";
import RecargaForyou from "./pages/recarga-foryou";
import RevendasInt from "./pages/revendas-internacionais";
import SolucoesCorp from "./pages/solucoes-corporativas";
import Tarifas from './pages/tarifas/index';
import TermosEcond from "./pages/termos-e-condicoes";
import VozSms from "./pages/voz-sms";
import NotFound from "./pages/notFound";



export default function Rotes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/comprar" element={<Compra/>} />
                <Route path="/tarifas" element={<Tarifas/>} />
                <Route path="/m2m-iot" element={<M2m/>} />
                <Route path="/como-funciona" element={<ComoFunciona/>} />
                <Route path="/contatos" element={<Contatos/>} />
                <Route path="/privacidade" element={<Privacidade/>} />
                <Route path="/termos-e-condicoes" element={<TermosEcond/>} />
                <Route path="/recarga-foryou" element={<RecargaForyou/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/voz-sms" element={<VozSms/>} />
                <Route path="/solucoes-corporativas" element={<SolucoesCorp/>} />
                <Route path="/mysimtravel-grupos" element={<MysimGroups/>} />
                <Route path="/distribuidores" element={<Distribuidores/>} />
                <Route path="/chip-internet-aeroportos" element={<ChipInternetAirport/>} />
                <Route path="/dicas-para-viagem" element={<DicasToViagens/>} />
                <Route path="/revendas-internacionais" element={<RevendasInt/>} />
                <Route path="*" element ={<NotFound/>} />
            </Routes>
        </BrowserRouter>
        )
}