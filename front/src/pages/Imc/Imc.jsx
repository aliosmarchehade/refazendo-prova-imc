import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ImcService from "../../service/ImcService";

const Imc =()=>{
    const [imc, setImc] = useState({nome:"", altura:0, peso:0, obs:"", imc:0, classificacao:""});
    const imcService = new ImcService();
    const [listaImc, setListaImc] = useState([]);

    useEffect(() => {
        return ()=>{
            buscarTodos();
        };
    }, []);

    const buscarTodos = async() => {
        const todosImcs = await imcService.buscarTodos();
        setListaImc(todosImcs.data);
    }
    const removerTodos = async() => {
        const todosImcs = await imcService.removerTodos();
        buscarTodos();
    }

    const buscarTodosClassificacao = async(classificacao) => {
        const todosImcs = await imcService.buscarTodosClassificacao(classificacao);
        setListaImc(todosImcs.data);
    }
    
    const handleChange = (e)=>{
        setImc({...imc,[e.target.name]:e.target.value});
    }

    const calcular = async() =>{
        try{
            const resultado = await imcService.calcular(imc);    
            setImc({...imc,imc:resultado.data.imc, classificacao: resultado.data.classificacao});
        }catch(error){
            alert(error);
            console.log(error);
        }
    }

    const salvar = async() =>{
        try{
            const resultado = await imcService.salvar(imc);    
        }catch(error){
            alert(error);
            console.log(error);
        }
    }
    return (
        <div>
            <Header pagina="calculo"> </Header>
            <h1>Faça o cálculo IMC</h1>
            <div>
                <label>Nome</label>
                <input value={imc.nome} onChange={handleChange} type="text" name="nome"></input><br/>
                <label>Altura</label>
                <input value={imc.altura} onChange={handleChange} type="number" name="altura"></input><br/>
                <label>Peso</label>
                <input value={imc.peso} onChange={handleChange} type="number" name="peso"></input><br/>
                <label>Observacao</label>
                <input value={imc.obs} onChange={handleChange} type="text" name="obs"></input><br/><br/>
                <button onClick={calcular}>Calcular</button>
                <p>O IMC é: {imc.imc} | {imc.classificacao}</p>
                <button onClick={salvar}>Salvar</button>
                <br/>
                <button onClick={buscarTodos}>Buscar Todos</button>                
                <button onClick={()=>buscarTodosClassificacao('Baixo Peso')}>Baixo Peso</button>
                <button onClick={()=>buscarTodosClassificacao('Peso Normal')}>Peso normal</button>
                <button onClick={()=>buscarTodosClassificacao('Sobrepeso')}>Sobrepeso</button>
                <button onClick={()=>buscarTodosClassificacao('Obesidade Grau I')}>Obesidade Grau I</button>
                <button onClick={()=>buscarTodosClassificacao('Obesidade Grau II')}>Obesidade Grau II</button>
                <button onClick={()=>buscarTodosClassificacao('Obesidade Grau III')}>Obesidade Grau III</button>
                {setListaImc.length>0&&<div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Imc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaImc.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.nome}</td>
                                        <td>{item.imc}</td>
                                        <td>{item.classificacao}</td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                
                }
                <button onClick={removerTodos}>Remover Todos</button>

                
            </div>
        </div>

    )
}

export default Imc;