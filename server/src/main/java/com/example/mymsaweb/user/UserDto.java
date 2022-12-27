package com.example.mymsaweb.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity @Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
  private Long id;
  @NotEmpty(message = "아이디를 적어주세요.")
  private String userId;
  @Size(min = 1, max = 16, message = "이름은 최대 16자입니다.")
  @NotEmpty(message = "이름을 적어주세요.")
  private String userNm;
  private String userPw;
  private String userPlanId;
}
