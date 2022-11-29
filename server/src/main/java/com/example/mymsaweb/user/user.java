package com.example.mymsaweb.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Builder
@Getter
@Entity
@NoArgsConstructor
public class user {
  @Id
  private String userId;
  private String userNm;
  private String userPw;
  private String userPlanId;
}
