
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/aluno/Aluno.js';
import Instrutor from './pages/instrutor/Instrutor.js';
import Treino from './pages/treino/Treino.js';
import Exercicio from './pages/exercicio/Exercicio.js';
import Home from './pages/home/Home.js';
import Plano from './pages/plano/Plano.js';
import HomeAluno from './pages/home/homeAluno.js';
import HomeInstrutor from './pages/home/HomeInstrutor.js';
import ListaTreino from './pages/treino/ListaTreino';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/planos' element={<Plano/>}/>
                <Route path='/lista-treino' element={<ListaTreino/>}/>
         
                <Route path='/cadastro-aluno' element={<Cadastro/>}/>
                <Route path='/cadastro-instrutor' element={<Instrutor/>}/>
                <Route path='/cadastro-treino' element={<Treino/>}/>
                <Route path='/cadastro-exercicio' element={<Exercicio/>}/>

                <Route path='/home-aluno' element={<HomeAluno/>}/>
                <Route path='/home-instrutor' element={<HomeInstrutor/>}/>
              

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp; 