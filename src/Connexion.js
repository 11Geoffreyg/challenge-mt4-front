import './Connexion.css';

function App() {
  return (

    <div className='connexion'>
        <div className='connexion-input-container'>
        <div className='connexion-input-container-mail'>
            <input className='connexion-input-mail' type='text' placeholder='Login' />
        </div>
            <div className='connexion-input-container-password'>
                <input className='connexion-input-password' id='password-field' type='password' placeholder='Password' />
                <div className='show-hide-password'></div>
            </div>
        </div>
        <button>Connexion</button>
        <a href='google.com'>Mot de passe oublié ?</a>
        <a href='google.com'>Créer un compte</a>
    </div>
  );
}

export default App;
