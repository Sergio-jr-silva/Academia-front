import './home.css';
import SidebarButton from '../Sidebar/SidebarButton';

function HomeInstrutor(){

    return (
        <>
        <div class="Home"> 
        <nav style={{marginTop: '-0px'}}>
        <ul class="menu">
        <li class="logo" id="user">Olá, Rafael Prado!</li>

            <li class="item"><a href="/cadastro-exercicio">Criar Exercicios</a></li>
            <li class="item"><a href="/cadastro-treino">Criar Treinos</a></li>
            <li class="item"><a href="/minha-conta">minha conta</a></li>
            <li class="item"><a href="/lista-alunos">Meus Alunos</a></li>
            <li class="item"><a href="/">Sair</a></li>

            <li class="toggle" onClick={SidebarButton}><span></span></li>
        </ul>
    </nav>
    <main>
    </main>
        </div>
        </>

    )
}
export default HomeInstrutor;