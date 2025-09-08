import React from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    
    const atual = new Date();
    const data = atual.toLocaleDateString("pt-BR");
    const hora = atual.toLocaleTimeString("pt-BR");
    const navigate = useNavigate();
    
    const chamarPaginaCalculo = () =>{
        navigate("/imc")
    }

    return (
        <div>
            <Header pagina="Home"/>
            <h3>Olá, você acessou a página em {data} às {hora}</h3>
            <button onClick={chamarPaginaCalculo}>Cálculo IMC</button>
        </div>
    );

}

export default Home;