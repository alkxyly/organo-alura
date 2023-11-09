import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'




const Formulario = (props) =>{
        
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const salvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem, 
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return(
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2> Preencha os dados sobre o membro do time </h2>
                
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                
                <ListaSuspensa
                    obrigatorio={true} 
                    valor={time}
                    label="Time" 
                    itens = {props.times}
                    aoAlterado={valor => setTime(valor)}/>                
                
                <Botao>
                    Salvar
                </Botao>
            </form>
        </section>
    )

}


export default Formulario