import {useTypewriter} from 'react-simple-typewriter'
import './css/home.css'

function Home(){
    const[typeEffect] = useTypewriter({
        words: ['Desenvolvedor Javascript...', 'Desenvolvedor Python...', 'Desenvolvedor Backend...', 'Designer Gráfico...'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
    return (
        <section>
            <div className="home">
                <div className="content">
                    <h1>Eu sou o Samuka</h1>
                    <p>seu próximo <span>{typeEffect}</span></p>
                </div>
            </div>
        </section>
    )
}

export default Home