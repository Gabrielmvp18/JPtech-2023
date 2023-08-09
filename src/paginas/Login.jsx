import './Login.css'
export default function Login(){

    const toRedefinir = () => {
        window.location.href = './Redefinir';
    }
    return(
        <div>
        <div className="container-login">
            <div className='inside-container'>
                <h2 className="titulo">Login</h2>
                <div className="input-container">
                    <input type="text" name="username" id="username" placeholder="E-mail" />
                </div>
                <div className="input-container">
                    <input type="password" name="password" id="password" placeholder="Senha" />
                </div>
                <button id="login">Entrar</button>
                <button id="forgot-password" onClick={toRedefinir}>Esqueci a senha</button>
            </div>
            <img src="https://drive.google.com/uc?id=1PhVyk2MTvZJLCvb3f70OUNkQm81wBsF4" className="img-fundo" alt="" />
        </div>
        </div>
    );
}
