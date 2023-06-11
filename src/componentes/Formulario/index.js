import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListasSuspensa';
import './Formulario.css';

const Formulario = () => {

    const times =[
        'progamação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão',
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto label="nome" placeholder="Digite seu nome" />

                <CampoTexto label="cargo" placeholder="Coloque um cargo" />

                <CampoTexto label="imagem" placeholder="Coloque uma  imagem" />

                <ListaSuspensa label='times' itens = {times}/>
            </form>
        </section>
    )
}
export default Formulario