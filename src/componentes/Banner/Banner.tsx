import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    //JSX
    return(
        <header className="banner">
            {/*<img src="/imagens/banner.png" alt="Banner principal da página"></img>*/}
            <img src={enderecoImagem} alt={textoAlternativo}></img>            
        </header>
    )
}

export default Banner