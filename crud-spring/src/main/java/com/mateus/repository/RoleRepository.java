package com.mateus.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mateus.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
