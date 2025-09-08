package com.ifpr.back.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ImcCalculoResponseDTO {
    private Double imc;
    private String classificacao;
}
