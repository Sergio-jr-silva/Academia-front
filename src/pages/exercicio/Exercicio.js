import './exercicio.css'
import image from '../../images/Personalized workouts-bro.png'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'
function Exercicio(){
    const { state } = useLocation();

	const [idExercicio, setIdExercicio] = useState();
	const [nome, setNome] = useState();



	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/exercicio" + state.id)
			.then((response) => {
				setIdExercicio(response.data.id)
				setNome(response.data.nome)
			})
		}
		
	}, [state])

	function salvar() {

		let exercicio = {
			nome: nome	
		}
    
        axios.post("http://localhost:8082/exercicio", exercicio)
			.then((response) => {   notifySuccess('exercicio cadastrado com sucesso.')})
			.catch((error) => { if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }})  
  
    }     
    return (
        <>
            <div class="box-exercicio">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-box-exercicio">
            <h2>Criar Exercício</h2>

            <form action="#">
            <div class="input-exercicio">
                        <label for="nome"> Nome do Exercicio </label>
                        <input type="text" id="nome" placeholder="Ex: Supino" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required/>
                    </div>

                <div class="input-exercicio">
                    <button onClick={() => salvar()}>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
        </>
    )
}

export default Exercicio