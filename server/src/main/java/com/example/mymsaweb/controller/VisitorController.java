package com.example.mymsaweb.controller;

import com.example.mymsaweb.domain.ResponseDto;
import com.example.mymsaweb.domain.VisitorDto;
import com.example.mymsaweb.repository.VisitorRepository;
//import com.example.mymsaweb.service.VisitorService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.query.Jpa21Utils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/visitor")
@RequiredArgsConstructor
public class VisitorController {

    private final VisitorRepository visitorRepository;

    @PostMapping("")
    public List<VisitorDto> createVisit(@RequestBody VisitorDto visitorDto) {
        System.out.println("@ @@ @  @ post mapping");
        System.out.println("@ @ @ @ @@ @  > > >  > > > >test @ @ @ @ @ @ @ @ @ "+visitorDto+"::///::");
        if (visitorDto.getUserId() == null || visitorDto.getUserId().isBlank()) {
            System.out.println(" - - -  -  Null logic");
            visitorDto.setUserId("annonymous");
        }
//        System.out.println("@ @ @@ @ @ @ @ @ @ =  = = = = = =  => > > >"+userId+":::"+comment);
        visitorRepository.save(visitorDto);
        return visitorRepository.findAll();
    }

    @GetMapping("")
    public List<VisitorDto> getVisit(){
        System.out.println(" @ @ @ @ @ @ @ get mapping");
        return visitorRepository.findAll();
    }


}
