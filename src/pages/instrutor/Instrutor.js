import image from "../../images/Personal Trainer-amico.png"
import './instrutor.css';
import React, { useEffect, useState } from "react";
import { Link, useLocation, redirect } from "react-router-dom";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'


function Instrutor (){
    const { state } = useLocation();

	const [idInstrutor, setIdInstrutor] = useState();
	const [nome, setNome] = useState();
	const [dataNascimento, setDataNascimento] =  useState();
	const [salario, setSalario] =  useState();
	const [dataAdmissao, setDataAdmissao] =  useState();
	const [email, setEmail] =  useState();
	const [celular, setCelular] =  useState();
	const [formacao, setFormacao] =  useState();
	const [senha, setSenha] =  useState();
	const [Certificado, setCertificado] =  useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/instrutor" + state.id)
			.then((response) => {
				setIdInstrutor(response.data.id)
				setNome(response.data.nome)
				setDataNascimento(response.data.dataNascimento)
				setSalario(response.data.salario)
				setDataAdmissao(response.data.dataAdmissao)
				setEmail(response.data.email)
				setCelular(response.data.celular)
				setFormacao(response.data.formacao)
				setSenha(response.data.senha)
				setCertificado(response.data.Certificado)
				
				
			})
		}
		
	}, [state])

	function salvar() {

		let Instrutor = {
			nome: nome,
			dataNascimento: dataNascimento,
			salario: salario,
			dataAdmissao: dataAdmissao,
			email: email,
			celular: celular,
			formacao: formacao,
			senha: senha,
			Certificado: Certificado,
			
		}
    
        axios.post("http://localhost:8082/instrutor", Instrutor)
			.then((response) => { 
                notifySuccess('instrutor cadastrado com sucesso.')
        })
			.catch((error) => { if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }})  
  
    }     
    return (
        <>
            <div class="box-instrutor">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-box-instrutor">
           
            <form action="#">
            <h2>Criar Conta</h2>
                <div class="input-instrutor">
                    <label for="nome"> Nome </label>
                    <input type="text" id="nome" placeholder="Digite o seu Nome Completo"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required/>
                </div>

                <div class="input-instrutor">
                    <label for="data"> Data de Nascimento </label>
                    <input type="date" name="data" id="data" 
                    value={dataNascimento}
					onChange={e => setDataNascimento(e.target.value)}/>
                </div>

                <div class="input-instrutor">
                        <label for="salario"> Salário </label>
                        <input type="text" id="salario" placeholder="Digite o seu salário" 
                        value={salario}
                        onChange={e => setSalario(e.target.value)}
                        required/>
                    </div>

                <div class="input-instrutor">
                    <label for="data">Data de Admissão</label>
                    <input id="dataAdmissao" type="date" name="data" 
                    value={dataAdmissao}
                    onChange={e => setDataAdmissao(e.target.value)}
                    required/>
                </div>

                <div class="input-instrutor">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu e-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required/>
                    </div>
    
                    <div class="input-instrutor">
                        <label for="celular">Celular</label>
                        <input type="cel" id="celular" placeholder="(00) 0000-0000" 
                        value={celular}
                        onChange={e => setCelular(e.target.value)}
                        required/>
                    </div>

                    <div class="input-option">
                        <label for="formacao" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Selecione a Formação Academia</label>
                        <select name="formacao" id="formacao" style={{backgroundColor: 'transparent', padding: '3px', marginLeft: '10px', borderRadius: '10px'}} 
                        value={formacao}
                        onChange={(e,{value}) => {
                            formacao(value)}}
                        >
                            <option value="Ensino Médio">Ensino médio</option>
                            <option value="Ensino Técnico">Ensino Técnico</option>
                            <option value="Ensino Superior">Ensino Superior</option>  
                        </select>
                    </div>

                <div class="input-chek" style={{margin: '15px'}}>
                    <legend> Possui Certificado? </legend>
                    <input type="radio" name='radio' id='sim' checked={Certificado}
									onChange={e => setCertificado(true)}/><label for="sim" style={{paddingRight: '25px'}}>Sim</label>


                    <input type="radio" name='radio' id='nao' checked={Certificado}
									onChange={e => setCertificado(false)}/><label for="nao">Não</label>
                </div>

                <div class="input-instrutor w50">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required/>
                </div>

                <div class="input-instrutor w50">
                    <label for="Confirmarsenha">Confirmar Senha</label>
                    <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required/>
                </div>

                <div class="input-instrutor">
                    <button onClick={ () => salvar()}>Cadastrar</button>
                </div>
               
            </form>
        </div>
    </div>
        </>
    )
}

export default Instrutor;