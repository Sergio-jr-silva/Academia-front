import './home.css';
import SidebarButton from '../Sidebar/SidebarButton';

function HomeAluno(){

    return (
        <>
        <div class="Home"> 
        <nav style={{marginTop: '-0px'}}>
        <ul class="menu">
        <li class="logo" id="user">Olá, Sérgio Silva</li>

            <li class="item"><a href="/lista-treino">Meus treinos</a></li>
            <li class="item"><a href="/minha-conta">minha conta</a></li>
            <li class="item"><a href="/meu-progresso">Meu progresso</a></li>
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
export default HomeAluno;