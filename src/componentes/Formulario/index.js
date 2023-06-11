import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListasSuspensa';
import Botao from '../Botao'
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

    const aoSalvar = (evento) =>  {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto obrigatorio={true} label="nome" placeholder="Digite seu nome" />

                <CampoTexto obrigatorio={true} label="cargo" placeholder="Coloque um cargo" />

                <CampoTexto label="imagem" placeholder="Coloque uma  imagem" />

                <ListaSuspensa obrigatorio={true} label='times' itens = {times}/>

                <Botao>
                    Criar card
                </Botao>   
            </form>
        </section>
    )
}
export default Formulario