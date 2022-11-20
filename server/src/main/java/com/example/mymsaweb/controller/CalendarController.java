package com.example.mymsaweb.controller;

import com.example.mymsaweb.domain.CalendarDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/calendar")
public class CalendarController {
  @PostMapping ("/create")
  public String CreateCalendar(String name, String text) {
    System.out.println("@@ @ @ @ @ @ @ @ @ = = = = = = = > > > > this is first request !!");
    CalendarDto calendar = new CalendarDto();
    calendar.setName(name);
    calendar.setText(text);
    System.out.println("@@ @ @ @ @ @ @ @ @ = = = = = = = > > > > request setting is completed !!");
    System.out.println("@@ @ @ @ @ @ @" + calendar.getName()+"///"+calendar.getText());
    return "createTest";
  }

  @GetMapping("/select")
  public String SelectCalendar() {
//    Calendar calendar = new Calendar();
//    calendar.setMonth(3);
//    calendar.setDay(25);

    System.out.println("this is first select");
    return "hello World";
  }
}
