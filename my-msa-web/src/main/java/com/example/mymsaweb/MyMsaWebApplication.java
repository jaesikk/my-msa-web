package com.example.mymsaweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.converter.json.GsonBuilderUtils;

@SpringBootApplication
public class MyMsaWebApplication {

  public static void main(String[] args) {
    SpringApplication.run(MyMsaWebApplication.class, args);
    System.out.println("Hello Java Spring");

  }
}
