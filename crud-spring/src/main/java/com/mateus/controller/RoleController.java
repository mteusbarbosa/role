package com.mateus.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    // obter os roles no banco
    @GetMapping
    public List<Role> list() {
        return roleRepository.findAll();
    }

    // Pesquisa o role pelo id
    @GetMapping("/{id}")
    public ResponseEntity<Role> findById(@PathVariable Long id) {
        return roleRepository.findById(id)
                .map(recordFound -> ResponseEntity.ok().body(recordFound))
                .orElse(ResponseEntity.notFound().build());
    }

    // Faz o cadastro de um novo role
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Role create(@RequestBody Role role) {
        return roleRepository.save(role);
    }

    //Atualização do role
    @PutMapping("/{id}")
    public ResponseEntity<Role> update(@PathVariable Long id, @RequestBody Role role){
        return roleRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setTitulo(role.getTitulo());
                    recordFound.setLocal(role.getLocal());
                    recordFound.setCategoria(role.getCategoria());
                    recordFound.setDescricao(role.getDescricao());
                    recordFound.setData(role.getData());
                    recordFound.setHorario(role.getHorario());
                    recordFound.setValor(role.getValor());
                    recordFound.setRoleUrl(role.getRoleUrl());
                    Role updated = roleRepository.save(recordFound);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    //Método delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        return roleRepository.findById(id)
                .map(recordFound -> {
                    roleRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
