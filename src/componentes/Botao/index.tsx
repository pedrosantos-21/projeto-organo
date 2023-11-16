import { ReactElement } from 'react'
import './Botao.css'

import React from 'react';


interface BotaoProps {
    children: ReactElement /* Tudo que for um elemnto react vai funcionar */
}

const Botao = (props: BotaoProps) => {  /* BotaoProps vai ser o tipo da nossa props */
    return(
        <button className='botao'>{props.children}</button>
    )
}

export default Botao