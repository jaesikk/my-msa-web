package com.example.mymsaweb.repository;

import com.example.mymsaweb.domain.VisitorDto;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;

public interface VisitorRepository extends JpaRepository<VisitorDto, String> {
}
