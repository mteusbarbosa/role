package com.mateus.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
    public List<Role> list() {
        return roleRepository.findAll();
    }

    // Recebe o payload do formulário
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Role create(@RequestBody Role role) {
        return roleRepository.save(role);
        //return ResponseEntity.status(HttpStatus.CREATED).body(roleRepository.save(role));
    }

}
