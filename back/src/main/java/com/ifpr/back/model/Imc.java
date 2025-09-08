package com.ifpr.back.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Entity
@Table(name="imc")
@Data
public class Imc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "o nome é obrigatório!")
    private String nome;
    @Positive(message = "o peso precisa ser positivo!")
    private Double peso;
    @Positive(message = "a altura precisa ser positiva!")
    private Double altura;
    private Double imc;
    private String classificacao;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataHora;

}
