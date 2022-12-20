package com.example.mymsaweb.user;

import com.example.mymsaweb.domain.ResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class userController {
  // github, notion 참고해서 dto, builder 지향, pw hash
  @GetMapping("")
  public ResponseDto<userDto> getUser(@RequestHeader(value="User-Id") String userId) {
    User user = userService.findOne(userId);
    return new ResponseDto(
        HttpStatus.OK.value(),
        "유저 조회",
        new userDto(user.getId(), user.getAvatar(), user.getNickname()));
  }

  // 유저 생성 & 수정
  @PostMapping("")
  public ResponseDto<userDto> createUser(@Valid @RequestBody UserCreateDto data) {
    User user = userService.join(data.getId(), data.getAvatar(), data.getNickname());
    return new ResponseDto(
        HttpStatus.OK.value(),
        "유저 생성",
        new userDto(user.getId(), user.getAvatar(), user.getNickname()));
  }

  // 유저 삭제
  @DeleteMapping("")
  public void deleteUser(@RequestHeader(value="User-Id") String userId) {
    userService.remove(userId);
  }
}
