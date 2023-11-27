import  { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './css/colors.css';
import './css/form-button.css';
import './css/form-container.css';
import './css/form-input-container.css';
import './css/form-input.css';
import './css/form-social.css';
import './css/form-title.css';
import './css/form.css';
import './css/lo-cad.css';
import './css/login-container.css';
import './css/main.css';
import './css/overlay-container.css';
import './css/overlay.css';
import './css/social-icon.css';


export function Login() {
    //parte do login funcionando
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
      if (!email || !password) {
        alert('Preencha o email e senha corretamente.');
        return;
      }
    
      // Aqui você deve adicionar o código para autenticar o usuário
      // Pode ser uma chamada para signInWithEmailAndPassword ou outra autenticação
    
      // Exemplo usando signInWithEmailAndPassword:
      signInWithEmailAndPassword(auth, email, password)
         .then(() => {
           console.log('Login bem-sucedido. Redirecionando para a página inicial.');
           navigate('/');
         })
         .catch((error) => {
           console.error('Erro ao fazer login:', error);
           alert('Senha errada ou conta inexistente.');
         });
    };
    
    //parte do cadastro funcionando
    
      // Adicione estados para o registro
      const [registerName, setRegisterName] = useState('');
      const [registerEmail, setRegisterEmail] = useState('');
      const [registerPassword, setRegisterPassword] = useState('');
    
      const handleRegistro = () => {
        if (!registerName || !registerEmail || !registerPassword) {
          alert('Preencha todos os campos do formulário de registro.');
          return;
        }
    
         // Código para registrar um novo usuário
         createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
         .then((userCredential) => {
           const user = userCredential.user;
           console.log('Registro bem-sucedido:', user);
           alert('Seus dados foram cadastrados com sucesso');
           moveOverlay()
    
           // Salvar dados do usuário no Firestore
           const db = getFirestore(firebaseApp);
           const userRef = doc(db, 'users', user.uid);
           setDoc(userRef, {
             nome: registerName,
             email: registerEmail,
           })
             .then(() => {
               console.log('Dados do usuário salvos com sucesso');
               alert('Seus dados foram cadastrados com sucesso');
             })
             .catch((error) => {
               console.error('Erro ao salvar dados do usuário:', error);
               alert('Falha ao cadastrar');
             });
         })
         .catch((error) => {
           console.error('Erro ao registrar:', error);
           alert('Falha ao registrar');
         });
     };
    
    
    //parte de fazer a transiçao de "tela"
      useEffect(() => {
        const openRegisterButton = document.getElementById('open-register');
        const openLoginButton = document.getElementById('open-login');
        const loginContainer = document.getElementById('login-container');
    
        if (openRegisterButton && loginContainer) {
          openRegisterButton.addEventListener('click', moveOverlay);
        }
    
        if (openLoginButton && loginContainer) {
          openLoginButton.addEventListener('click', moveOverlay);
        }
      }, []);
    
      const moveOverlay = () => {
        const loginContainer = document.getElementById('login-container');
        if (loginContainer) {
          loginContainer.classList.toggle('move');
        }
      };
    
    
    //parte da API do google
    const firebaseConfig = {
      apiKey: "AIzaSyCEWjUIrxiTrxfnG_F83efguvILmOgq5Rg",
      authDomain: "pet-moure-teste.firebaseapp.com",
      projectId: "pet-moure-teste",
      storageBucket: "pet-moure-teste.appspot.com",
      messagingSenderId: "598417750443",
      appId: "1:598417750443:web:013acd7db983820199faee",
      measurementId: "G-CF2KEZP241"
    };
    
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    
    const navigate = useNavigate(); // Mova useNavigate para dentro do componente de função
      const [ user,setUser] = useState(null); // Adicione um estado para armazenar o usuário
    
      function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result.user);
            setUser(result.user); // Atualize o estado do usuário
            localStorage.setItem("user", JSON.stringify(result.user));
    
            navigate("/"); // Use navigate para redirecionar após o login
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      //parte front
      return (
        <div className="main">
          <div className="login-container " id="login-container">
            <div className="form-container">
    
               {/* parte do login*/}
              <form className="form form-login">
                <h2 className="form-title">Entrar com</h2>
                <div className="form-social">
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a onClick={signInWithGoogle}  className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <p className="form-text">ou utilize sua conta</p>
                <div className="form-input-container">
                  <input type="email" className="form-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" className="form-input" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <a href="#" className="form-link">Esqueceu a senha?</a>
                <button type="button" className="form-button"  onClick={handleLogin}>Logar</button>
              </form>
    
              {/* parte do cadastro*/}
              <form className="form form-register">
                <h2 className="form-title">Criar Conta</h2>
                <div className="form-social">
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a onClick={signInWithGoogle} className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <p className="form-text">ou cadastre seu email</p>
                <div className="form-input-container">
                  <input type="text" className="form-input" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)}  />
                  <input type="email" className="form-input" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                  <input type="password" className="form-input" placeholder="Senha"  value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}  />
                </div>
                <button type="button" className="form-button" onClick={handleRegistro} >Cadastrar</button>
              </form>
    
            </div>
    
            <div className="overlay-container">
              <div className="overlay">
                <h2 className="form-title">Já tem Conta?</h2>
                <p className="form-text">
                  Faça o login para acessar serviços personalizados para o seu animal de estimação.
                </p>
                <button className="form-button form-button-light" id="open-login">Entrar</button>
              </div>
    
              <div className="overlay">
                <h2 className="form-title">Registre-se!</h2>
                <p className="form-text">
                  Junte-se a nós na jornada de proporcionar uma vida saudável e feliz ao seu companheiro de quatro patas.
                </p>
                <button className="form-button form-button-light" id="open-register">
                  Cadastrar
                </button>
              </div>
    
            </div>
          </div>
          
        </div>
      );
    }