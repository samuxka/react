import './css/nav.css'

function Navbar() {
  return (
   <header>
      <div className="logo">
        <h1>Samukinha.</h1>
      </div>
      <div className="navlist">
        <nav>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Habilidades</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Educação</a></li>
            <li><a href="" className='login-btn'>Login</a></li>
          </ul>
        </nav>
      </div>
   </header> 
  )
}

export default Navbar