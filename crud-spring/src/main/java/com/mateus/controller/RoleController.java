package com.mateus.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mateus.model.Role;
import com.mateus.repository.RoleRepository;

import lombok.AllArgsConstructor;


//Informa a URL endopoint onde poderá acessar a API 
//Java Servelet com métodos HTTP post, get...
@RestController
@RequestMapping("/api/roles")
@AllArgsConstructor

public class RoleController {
    
    private final RoleRepository roleRepository;

    @GetMapping
    public List<Role> list(){
        return roleRepository.findAll();
    }

    
}
