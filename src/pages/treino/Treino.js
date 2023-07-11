import './treino.css'
import image from '../../images/Gym-rafiki.png'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'
import Select from 'react-select';

function Treino (){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { state } = useLocation();

	const [idTreino, setIdTreino] = useState();
	const [nome, setNome] = useState();
	const [frequencia, setFrequencia] =  useState();
	const [dataInicio, setDataInicio] =  useState();
	const [serie, setSerie] =  useState();
	const [carga, setCarga] =  useState();

  const [listaExercicio, setListaExercicio] = useState([]);
  const [idExercicio, setIdExercicio] = useState();





	useEffect(() => {

      axios.get("http://localhost:8082/exercicio")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ label: c.nome, value: c.id }));
           setListaExercicio(dropDownCategorias);
       })

		
		
	}, [state])

	function salvar() {

		let itemTreino = {
      idExercicio: idExercicio,
			nome: nome,
			frequencia: frequencia,
			dataInicio: dataInicio,
    

		}
    
        axios.post("http://localhost:8082/item-treino", itemTreino)
			.then((response) => {  notifySuccess('item treino cadastrado com sucesso.') })
			.catch((error) => { { if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }}})  
  
    }     
    return(
        <>
        <div class="box-treino">
        <div class="img-box-treino">
            <img src={image}/>
        </div>
        <div class="form-box-treino">
            <h2>Criar Treino</h2>
            
            <form action="#">
                <div class="input-treino">
                    <label for="nome"> Nome do Treino </label>
                    <input type="text" id="nome" placeholder="Digite o nome do treino" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required/>
                </div>

                <div class="input-treino">
                    <label for="frequencia"> Frequência </label>
                    <input type="text" id="frequencia" placeholder="Digite a frequência do treino" 
                    value={frequencia}
                    onChange={e => setFrequencia(e.target.value)}
                    required/>
                </div>

                <div class="input-treino">
                    <label for="data"> Data de Início </label>
                    <input type="date" name="data" id="data" 
                    value={dataInicio}
                    onChange={e => setDataInicio(e.target.value)}
                    />
                </div>

                <div class="input-treino">
                <button onClick={toggleModal} className="btn-modal" id="ex">
                    +Adicionar exercicio
                </button>

                {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
       
    
          <Select
          width={12}
            placeholder="selecione o treino"
            options={listaExercicio}
            value={idExercicio}          
	        onChange={(e,{value}) => {
		      setIdExercicio(value)
       
	}}

         />
        <form class="ui form">
  <div class="field">
    <label className='label-modal'>Nº Séries</label>
    <input type="text" name="first-name" placeholder="nº de séries do exercicio" id='inputs-modal' />

    
  </div>
  <div class="field">
  <label className='label-modal'>Nº repetições</label>
    <input type="text" name="last-name" placeholder="Número de repetições dp exercicio" id='inputs-modal' />
  </div>
  <div class="field">

  <div class="field">
     <div class="ui form">
        <div class="field">
           <label className='label-modal'>Comentários</label>
               <textarea id='inputs-modal' rows={3}> </textarea>
        </div>
      </div> 
    </div>
  <div class="field"></div>


  </div>
  <button class="ui button" type="submit">Salvar</button>
</form>
         
     
          </div>
        </div>
      )}
                    <button>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
        </>
    )
}

export default Treino;