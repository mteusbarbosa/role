package com.mateus;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.mateus.repository.RoleRepository;
import com.mateus.model.Role;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	//Apenas para exemplo
	@Bean
	//Será executado assim que o sping abrir
	CommandLineRunner initDatabase(RoleRepository roleRepository) {
		return args -> {
			roleRepository.deleteAll();

			Role r = new Role();
			r.setTitulo("Festa das flores");
			r.setLocal("Praia de Ponta Negra");
			r.setDescricao("Festa com muita música e bebida. Venha com seus amigos e se divirta muito!!");
			r.setRoleUrl("https://www.cmu.edu/brand/brand-guidelines/images/colors-carnegie-red-600x600.png");

			roleRepository.save(r);
		};
	}
}
