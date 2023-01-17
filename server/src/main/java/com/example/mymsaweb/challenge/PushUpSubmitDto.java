package com.example.mymsaweb.challenge;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PushUpSubmitDto {
  private int done;
  private int proceeding;
}
