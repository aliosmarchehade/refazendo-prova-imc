import api from "../config/axiosConfig";

class ImcService{
    constructor(){
        this.api = api;
    }
    async calcular(dados){
        const resultado = await this.api.post("/imc/calcular",dados)
        return resultado;
    }

    async salvar(dados){
        const resultado = await this.api.post("/imc",dados)
        return resultado;
    }
    async buscarTodos(){
        const resultado = await this.api.get("/imc")
        return resultado;
    }
    async buscarTodosClassificacao(classificacao){
        const resultado = await this.api.get(`/imc/classificacao?classificacao=${classificacao}`);
        return resultado;
    }

    async removerTodos(){
        const resultado = await this.api.delete(`/imc`);
        return resultado;
    }

}
export default ImcService;