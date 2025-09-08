package com.ifpr.back.model.dto;

import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class ImcCalculoRequestDTO {
    @Positive
    private Double peso;
    @Positive
    private Double altura;
}
