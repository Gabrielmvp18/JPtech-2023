import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Formulario.css';

export default function Formulario() {
    const [selectedOption, setSelectedOption] = useState('');
    const [observation, setObservation] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleOptionClick = (figure, state) => {
        setSelectedOption(state);
        setSubmitted(false);
        setObservation('');
        updateFigureState(figure, state);
    };

    const updateFigureState = (figure, state) => {
        const figures = document.querySelectorAll('.caras figure');
        figures.forEach((fig) => {
            fig.classList.remove(
                'pessimo-filled',
                'ruim-filled',
                'regular-filled',
                'bom-filled',
                'otimo-filled'
            );
        });
        figure.classList.add(state);
    };

    const handleObservationChange = (event) => {
        setObservation(event.target.value);
    };

    const handleFormSubmit = () => {
        setSubmitted(true);
        hideFormElements();
    };

    const handleEditForm = () => {
        setSubmitted(false);
        setSelectedOption('');
        setObservation('');
        showFormElements();
        updateFigureState(null, '');
    };

    const hideFormElements = () => {
        document.getElementById('text').classList.add('hidden');
        document.getElementById('btn').classList.add('hidden');
        document.getElementById('post').classList.remove('hidden');
        document.getElementById('pergunta').classList.add('hidden');
        document.getElementById('section').classList.add('hidden');
    };

    const showFormElements = () => {
        document.getElementById('text').classList.remove('hidden');
        document.getElementById('btn').classList.remove('hidden');
        document.getElementById('post').classList.add('hidden');
        document.getElementById('pergunta').classList.remove('hidden');
        document.getElementById('section').classList.remove('hidden');

        document.getElementById('box').value = '';

        document.getElementById('pergunta').textContent = '#';
    };

    return (
        <>
            <Header />
            <main>
                <center>
                    <div id="section">
                        <div className="figure-container">
                            <h1 id="pesquisa" className="pesquisa_de_satisfacao">
                                Pesquisa de Satisfação
                            </h1>
                            <h3 id="pergunta" className="pergunta">
                            </h3>
                            <div className="caras">
                                <figure
                                    id="pessimo"
                                    onClick={() => handleOptionClick('pessimo', 'pessimo-filled')}
                                    className={selectedOption === 'pessimo-filled' ? 'pessimo-filled' : ''}
                                ></figure>
                                <figure
                                    id="ruim"
                                    onClick={() => handleOptionClick('ruim', 'ruim-filled')}
                                    className={selectedOption === 'ruim-filled' ? 'ruim-filled' : ''}
                                ></figure>
                                <figure
                                    id="regular"
                                    onClick={() => handleOptionClick('regular', 'regular-filled')}
                                    className={selectedOption === 'regular-filled' ? 'regular-filled' : ''}
                                ></figure>
                                <figure
                                    id="bom"
                                    onClick={() => handleOptionClick('bom', 'bom-filled')}
                                    className={selectedOption === 'bom-filled' ? 'bom-filled' : ''}
                                ></figure>
                                <figure
                                    id="otimo"
                                    onClick={() => handleOptionClick('otimo', 'otimo-filled')}
                                    className={selectedOption === 'otimo-filled' ? 'otimo-filled' : ''}
                                ></figure>
                            </div>
                        </div>
                        {submitted ? (
                            <div id="post">
                                <h5>Obrigado pela avaliação!</h5>
                                <button id="edit" onClick={handleEditForm}>Editar</button>
                            </div>
                        ) : (
                            <form
                                action="#"
                                name="meuForm"
                                id="meuForm"
                                className={selectedOption ? '' : 'hidden'}
                            >
                                <div className="form-container">
                                    <div id="text">
                                        <textarea
                                            cols="30"
                                            placeholder="Escreva uma observação"
                                            id="box"
                                            value={observation}
                                            onChange={handleObservationChange}
                                        ></textarea>
                                    </div>
                                    <div id="btn">
                                        <button id="enviarBtn" onClick={handleFormSubmit} type="button">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </center>
            </main>
            <Footer />
        </>
    );
}
