package com.mateus.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity

public class Role {

    //Chave primária
    @Id
    //Autoincrementa
    @GeneratedValue(strategy = GenerationType.AUTO)
    //Qual nome quero utilizar no json
    @JsonProperty("_id")
    private Long id;
    
    @Column(length = 20, nullable = false)
    private String titulo;

    @Column(length = 50, nullable = false)
    private String local;

    @Column(length = 300, nullable = false)
    private String descricao;

    @Column(length = 200, nullable = false)
    private String roleUrl;
}
