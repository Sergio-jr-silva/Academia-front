import './listatreino.css';
import axios from "axios";
import Select from 'react-select';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'

function ListaTreino(){
    const [isOpen, setIsOpen] = useState(false);

        const openModal = () => {
        setIsOpen(true);
  };

    const closeModal = () => {
     setIsOpen(false);
  };
     
    return (
       <div>
            <header>
                <h2>Sua Tabela de Treino</h2>
                <hr></hr>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Frequência</th>
                        <th>Data</th>
                        <th>Ficha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Treino de ombro</td>
                        <td>2x</td>
                        <td>09/07/2023</td>
                        <td><button class="btn" onClick={openModal}>Ficha completa</button></td>
                    </tr>
                </tbody>


                <tbody>
                    <tr>
                        <td>Treino de Pernas</td>
                        <td>1x</td>
                        <td>10/07/2023</td>
                        <td><button class="btn" onClick={openModal}>Ficha completa</button></td>
                    </tr>
                </tbody>


                <tbody>
                    <tr>
                        <td>Treino de Triceps</td>
                        <td>2x</td>
                        <td>11/07/2023</td>
                        <td><button class="btn" onClick={openModal}>Ficha completa</button></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Treino de abs</td>
                        <td>3x</td>
                        <td>12/07/2023</td>
                        <td><button class="btn" onClick={openModal}>Ficha completa</button></td>
                    </tr>
                </tbody>
            </table>
            
      {isOpen && (
        <div className="modal-lista">
          <div className="modal-content-list">
            <h2 class="modal-h2">Treino de Ombros</h2>
            <thead>
                    <tr>
                        <th>Exercicios</th>
                        <th>Séries</th>
                        <th>Repetições</th>
                    </tr>
                </thead>
            <tbody >
                    <tr class="table-modal">
                        <td>Treino de Pernas</td>
                        <td>1x</td>
                        <td>10/07/2023</td>
                    </tr>

                    <tr class="table-modal">
                        <td>Treino de Pernas</td>
                        <td>1x</td>
                        <td>10/07/2023</td>
                    </tr>


                    <tr class="table-modal">
                        <td>Treino de Pernas</td>
                        <td>1x</td>
                        <td>10/07/2023</td>
                    </tr>

                    <tr class="table-modal">
                        <td>Treino de Pernas</td>
                        <td>1x</td>
                        <td>10/07/2023</td>
                    </tr>
                </tbody>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
            
        </div>
    )
}

export default ListaTreino
