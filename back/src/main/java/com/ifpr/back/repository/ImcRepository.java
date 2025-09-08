package com.ifpr.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ifpr.back.model.Imc;

public interface ImcRepository extends JpaRepository<Imc, Long> {

    public List<Imc> findByClassificacao(String classificacao);
    
}
