import './Redefinir.css'
export default function Redefinir(){

  const toLogin = () => {
    window.location.href = './Login';
}

  return(
      <div className="center">
        <div className=' login-total'>
          <div className='form-title'>
            <h2>Redefinir senha</h2>
          </div>
          <center>
          <input type="text" name="nome" id="nome" placeholder="E-mail" />
          </center>
          <input type="password" name="new-password" id="new-password" placeholder="Nova senha" />
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme a senha" />
          <button id="reset" onClick={toLogin}>Confirmar</button>
        </div>
      </div>
  );
}
