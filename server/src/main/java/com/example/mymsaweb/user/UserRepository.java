package com.example.mymsaweb.user;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserDto, String> {
}
