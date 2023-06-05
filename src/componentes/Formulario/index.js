import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto label="nome" placeholder="Digite seu nome" />

                <CampoTexto label="cargo" placeholder="Coloque um cargo" />

                <CampoTexto label="imagem" placeholder="Coloque uma  imagem" /> 
            </form>
        </section>
    )
}
export default Formulario