import React from 'react';
import './Configuracao.css';
import Footer from '../components/Footer'
import Header from '../components/Header'

class Perguntas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          questions: ["", ""]
        };
      }

      addQuestion = () => {
        this.setState(prevState => ({questions: [...prevState.questions, ""]}));
      };

      deleteQuestion = (index) => {
        this.setState(prevState => {
          const newQuestions = [...prevState.questions];
          newQuestions.splice(index, 1);
          return {questions: newQuestions};
        });
      };

      handleInputChange = (index, event) => {
        this.setState(prevState => {
          const newQuestions = [...prevState.questions];
          newQuestions[index] = event.target.value;
          return {questions: newQuestions};
        });
      };

      submitQuestions = () => {
        console.log(this.state.questions);
      };

    render() {
        return (
            <div className='geral'>
            <Header />
                <main>
                    <div className="container">
                        <div className="perguntas">
                            {this.state.questions.map((question, index) => (
                                <div className="questionBox" key={index}>
                                    <label>{`Pergunta ${index+1}:`}</label><br/>
                                    <input
                                      type="text"
                                      name={`question${index+1}`}
                                      value={question}
                                      onChange={event => this.handleInputChange(index, event)}
                                    />
                                    <button className="deletar" onClick={() => this.deleteQuestion(index)}>
                                      <span>X</span>
                                    </button><br/>
                                </div>
                            ))}
                            <div className="botoes">
                                <button id="botaoadicionar" onClick={this.addQuestion}>Adicionar Pergunta</button>
                                <button id="botaoenviar" onClick={this.submitQuestions}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Perguntas;
