import './login.css'

function Login() {
  return (
    <>
      <section>
        <div class="form-login">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required/>
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label for="">Password</label>
                    </div>
                   
                    <button>Entrar</button>
                    <div class="register">
                        <p>Não tem conta? <a href="/cadastro-aluno">Crie sua conta</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}

export default Login;