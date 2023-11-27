import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListasSuspensa';
import Botao from '../Botao'
import './Formulario.css';
import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
    //itens: string
}

const Formulario = (props: FormularioProps) => {

    const [nome,setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento:React.FormEvent<HTMLFormElement>) =>  {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={evento => aoSalvar(evento)}>{/* Necessário para evitar o bug de reload */}
                <h2>Preencha os dados para criar o card do aluno</h2>
                <CampoTexto
                 obrigatorio={true} 
                 label="Nome" 
                 placeholder="Digite seu nome"
                 valor={nome}
                 aoAlterado={valor => setNome(valor)} />

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Coloque um cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto 
                label="Imagem" 
                placeholder="Coloque uma  imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)} />

                <ListaSuspensa 
                    obrigatorio={true}
                    label='Time'
                    itens = {props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>   
            </form>
        </section>
    )
}
export default Formulario