package com.example.mymsaweb.controller;

import com.example.mymsaweb.domain.Calendar;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CalendarController {
  @PostMapping ("/calendar/create")
  public String CreateCalendar(String name, String text) {
    System.out.println("@@ @ @ @ @ @ @ @ @ = = = = = = = > > > > this is first request !!");
    Calendar calendar = new Calendar();
    calendar.setName(name);
    calendar.setText(text);
    System.out.println("@@ @ @ @ @ @ @ @ @ = = = = = = = > > > > request setting is completed !!");
    System.out.println("@@ @ @ @ @ @ @" + calendar.getName()+"///"+calendar.getText());
    return "createTest";
  }

  @GetMapping("/calendar/create")
  public String SelectCalendar() {
//    Calendar calendar = new Calendar();
//    calendar.setMonth(3);
//    calendar.setDay(25);

    System.out.println("this is first select");
    return "selectTest";
  }
}
