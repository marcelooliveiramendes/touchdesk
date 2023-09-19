import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaDescanso from './pages/TelaDescanso';
import Home from './pages/Home';
import ReconhecimentoFacil from './pages/ReconhecimentoFacial';
import Login from './pages/Login';
import HomeSolicitacao from './pages/HomeSolicitacao';
import MenuEscolha from './pages/MenuEscolha';
import MenuEscolhaCategoria from './pages/MenuEscolhaCategoria';
import Confirmacao from './pages/Confirmacao';
import SolicitacaoEnviada from './pages/SolicitacaoEnviada';
import Fretado from './pages/Fretado';
import ConfirmacaoRota from './pages/ConfirmacaoRota';
import Manutencao from './pages/Manutecao';
import ConsultaSolicitacoes from './pages/ConsultaSolicitacoes';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaDescanso />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reconhecimento-facial' element={<ReconhecimentoFacil />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home-solicitacao' element={<HomeSolicitacao />} />
        <Route path='/menu-escolha' element={<MenuEscolhaCategoria />} />
        <Route path='/menu-escolha/epi' element={<MenuEscolha />} />
        <Route path='/confirmacao' element={<Confirmacao />} />
        <Route path='/confirmacao-enviada' element={<SolicitacaoEnviada />} />
        <Route path='/menu-escolha/fretado' element={<Fretado />} />
        <Route path='/confirmacao-rota' element={<ConfirmacaoRota />} />
        <Route path='/menu-escolha/manutencao' element={<Manutencao />} />
        <Route path='/consulta-solic' element={<ConsultaSolicitacoes />} />
        <Route path='/consulta-solic/:id' element={<ConsultaSolicitacoes />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
