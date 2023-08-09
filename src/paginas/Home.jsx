import './Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home(){

const toFormulario = () => {
    window.location.href = './Formulario';
}
const toConfiguracao = () => {
  window.location.href = './Configuracao';
}
const toResultado = () => {
  window.location.href = './Redefinir';
}

  return(
    <>
    <Header />
    <div className="text">
      <h2 className="texto">Menu rápido, selecione o que precisa:</h2>
      <div className="button-container">
      <button className="button">
        <li><strong className="frase" onClick={toConfiguracao}>Configurar as perguntas: </strong>
          <p>Tenha total liberdade para criar perguntas personalizadas, ajustá-las de acordo com a
              necessidade.</p>
        </li>
      </button>
      <button className="button">
        <li><strong className="frase" onClick={toResultado}>Resultados: </strong>
          <p>Visualize todas as respostas recebidas. Assim, tendo uma base de como está o serviço
              prestado.</p>
        </li>
      </button>
      <button className="button">
        <li><strong className="frase" onClick={toFormulario}>Formulário de Avaliação: </strong>
          <p>Aqui você é instantaneamente redirecionado para o nosso formulário online de avaliação.</p>
        </li>
      </button>
      </div>
    </div>
    <Footer />
    </>
  );
}
