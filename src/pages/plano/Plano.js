import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import './plano.css';

function Plano (){
    return (
      <div class="card-images" id="basic">
       <a style={{color:'white', fontSize:'40px', padding:'15px',marginTop:'5px'}} href='/'><BsArrowLeft/></a>
      <div class="card">
        <div class="card-back yellow">

              <h3>Plano Basic</h3>
          <h4>R$ 69,90/</h4>
          <p>Por mês</p>
          <a href="/cadastro-aluno" class="comprar">Comprar Plano</a>
          
          <div>
            <li><span class="iconRed"><AiOutlineClose/></span> <span>Treino personalizado</span></li>
            <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Acompanhamento Exclusivo</span></li>
            <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Aulas Extras</span></li>
            <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Treino personalizado</span></li>
          </div>
        </div>



       <div class="card-back yellow" id="medium">

          <h3>Plano Medium</h3>
          <h4>R$ 99,90/</h4>
          <p>Por mês</p>
          <a href="/cadastro-aluno" class="comprar">Comprar Plano</a>

          <div>
          <li><span class="iconRed"><AiOutlineClose/></span> <span>Treino personalizado</span></li>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Acompanhamento Exclusivo</span></li>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Aulas Extras</span></li>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Treino personalizado</span></li>
      </div>
    </div>



       <div class="card-back yellow" id="premium">

          <h3>Plano Premium</h3>
          <h4>R$ 149,90/</h4>
          <p>Por mês</p>
          <a href="/cadastro-aluno" class="comprar">Comprar Plano</a>

          <div>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Treino personalizado</span></li>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Acompanhamento Exclusivo</span></li>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Aulas Extras</span></li>
          <li><span class="iconGreen"><AiOutlineCheck/></span> <span>Treino personalizado</span></li>

          </div>
      </div>
  </div>

                        
   </div>

      
    )
}

export default Plano;