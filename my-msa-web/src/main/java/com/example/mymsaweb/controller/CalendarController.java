package com.example.mymsaweb.controller;

import com.example.mymsaweb.domain.Calendar;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CalendarController {
  @RequestMapping("/calendar/create")
  public String CreateCalendar() {
    Calendar calendar = new Calendar();
    calendar.setMonth(3);
    calendar.setDay(25);
    System.out.println("@@ @ @ @ @ @ @ @ @ = = = = = = = > > > > this is frist request !!");
    return "createTest";
  }

  @GetMapping("/calendar/select")
  public String SelectCalendar() {
    Calendar calendar = new Calendar();
//    calendar.setMonth(3);
//    calendar.setDay(25);

    System.out.println("this is first select");
    return "selectTest";
  }
}
