import './aluno.css';
import image from '../../images/Dumbbell exercise-rafiki.png'
import React, { useEffect, useState } from "react";
import { Link, useLocation, redirect } from "react-router-dom";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'



    function Aluno (){
        const { state } = useLocation();

	const [idAluno, setIdAluno] = useState();
	const [nome, setNome] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [email, setEmail] = useState();
	const [celular, setCelular] = useState();
	const [peso, setPeso] = useState();
	const [altura, setAltura] = useState();
	const [plano, setPlano] = useState();
	const [pagamento, setPagamento] = useState();
	const [senha, setSenha] = useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/aluno" + state.id)
			.then((response) => {
				setIdAluno(response.data.id)
				setNome(response.data.nome)
				setDataNascimento(response.data.dataNascimento)
				setEmail(response.data.email)
				setCelular(response.data.celular)
				setPeso(response.data.peso)
				setAltura(response.data.altura)
				setPlano(response.data.plano)
				setPagamento(response.data.pagamento)
				setSenha(response.data.senha)
			})
		}
		
	}, [state])

	function salvar() {

		let Aluno = {

			nome: nome,
			dataNascimento: dataNascimento,
			email: email,
			celular: celular,
			peso: peso,
			altura: altura,
			plano: plano,
			pagamento: pagamento,
            senha: senha
		}
    
        axios.post("http://localhost:8082/aluno", Aluno)
			.then((response) => { 
                notifySuccess('Cliente cadastrado com sucesso.')
                
        })
			.catch((error) => { if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }
            } 
                )  
  
    }     

        return (
            <>
        <div class="box-aluno">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-cadastro">
            
            <form action="#">
            <h2>Criar Conta</h2>
                <div class="input-cadastro">
                    <label for="nome">Nome completo </label>
                    <input type="text" id="nome" placeholder="Digite o seu nome Completo" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required/>
                </div>

                <div class="input-cadastro">
                    <label for="data"> Data de Nascimento </label>
                    <input type="date" name="data" id="data"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                    />
                </div>

                <div class="input-cadastro">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite o seu email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>
                    </div>
    
                    <div class="input-cadastro">
                        <label for="celular">Celular</label>
                        <input type="cel" id="celular" placeholder="(00) 0000-0000" 
                        value={celular}
                        onChange={e => setCelular(e.target.value)}
                        required/>
                    </div>

                    <div class="input-cadastro w50">
                    <label for="peso">peso</label>
                    <input type="text" id="peso" placeholder="Digite seu peso" 
                    value={peso}
                    onChange={e => setPeso(e.target.value)}
                    required/>
                </div>

                <div class="input-cadastro w50">
                    <label for="altura">altura</label>
                    <input type="text" id="altura" placeholder="digite sua altura em cm"
                    value={altura}
                    onChange={e => setAltura(e.target.value)}
                    required/>
                </div>


                <div class="input-option" id="select">
                        <label for="plano" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Selecione seu plano</label>
                        <select name="plano" id="plano" style={{backgroundColor: 'transparent', padding: '3px', borderRadius: '10px'}}>
                            <option value="1">Basic</option>
                            <option value="2"> Medium</option>
                            <option value="3"> Premium</option>  
                        </select>

                        
                        <label for="pagamento" id="pagamento"  style={{color: '#3D3D3D', fontWeight: 'bold', display: 'inline-block', marginBottom: '5px'}}>Forma de Pagamento</label>
                        <select name="pagamento" style={{backgroundColor: 'transparent', padding: '3px', borderRadius: '10px'}}>
                            <option value="1">Boleto</option>
                            <option value="2"> pix</option>
                        </select>
                      
                    </div>

                <div class="input-cadastro w50">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" 
                    value={senha}
					onChange={e => setSenha(e.target.value)} required/>
                </div>

                <div class="input-cadastro w50">
                    <label for="Confirmarsenha">Confirmar Senha</label>
                    <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required/>
                </div>
                <p> Já tem uma conta? <a href="/login"> Login </a> </p>
                <div class="input-cadastro">
                    <button id='btn' onClick={() => salvar()} href="/login">Matricular-se</button>
                </div>

            </form>
        </div>
    </div>
            </>
  );
}

export default Aluno;