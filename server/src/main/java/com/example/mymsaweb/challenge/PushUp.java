package com.example.mymsaweb.challenge;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Entity @Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PushUp {
  @Id
  @GeneratedValue(strategy = IDENTITY)
  private Long Id;
  private String challenger;
//  @NotEmpty(message = "항목을 선택해주세요.")
  private Long completeYn;
  private String remarkContent;
  private String logDate;
}
