package com.ifpr.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifpr.back.model.Imc;
import com.ifpr.back.model.dto.ImcCalculoRequestDTO;
import com.ifpr.back.model.dto.ImcCalculoResponseDTO;
import com.ifpr.back.repository.ImcRepository;

@Service
public class ImcService {

    @Autowired
    private ImcRepository repository;

    public ImcCalculoResponseDTO calcular(ImcCalculoRequestDTO imcRequest){
        Double imc = imcRequest.getPeso()/(imcRequest.getAltura()*imcRequest.getAltura());
        ImcCalculoResponseDTO response = null;
        if(imc<18.5) response = new ImcCalculoResponseDTO(imc, "Baixo Peso");
        else if(imc <24.9) response = new ImcCalculoResponseDTO(imc, "Peso Normal");
        else if(imc <29.9) response = new ImcCalculoResponseDTO(imc, "Sobrepeso");
        else if(imc <34.9) response = new ImcCalculoResponseDTO(imc, "Obesidade Grau I");
        else if(imc <39.9) response = new ImcCalculoResponseDTO(imc, "Obesidade Grau II");
        else response = new ImcCalculoResponseDTO(imc, "Obesidade Grau III");

        return response;
    }

    public Imc salvar(Imc imc){
        return repository.save(imc);
    }

    public List<Imc> buscarTodos(){
        return repository.findAll();
    }

    public List<Imc> buscarTodos(String classificacao){
        return repository.findByClassificacao(classificacao);
    }

    public void removerTodos(){
        repository.deleteAll();
    }
}
