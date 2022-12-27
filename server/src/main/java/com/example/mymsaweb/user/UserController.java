package com.example.mymsaweb.user;

import com.example.mymsaweb.domain.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/user")
public class UserController {
  // github, notion 참고해서 dto, builder 지향, pw hash
  private final UserService userService;

  @GetMapping("")
  public ResponseDto<UserDto> getUser(@RequestHeader(value="User-Id") String userId) {
    UserDto user = userService.findOne(userId);
    return new ResponseDto(
        HttpStatus.OK.value(),
        "유저 조회",
        new UserDto(user.getId(), user.getAvatar(), user.getNickname()));
  }

  // 유저 생성 & 수정
  @PostMapping("")
  public ResponseDto<UserDto> createUser(@Valid @RequestBody UserCreateDto data) {
    UserDto user = userService.join(data.getId(), data.getAvatar(), data.getNickname());
    return new ResponseDto(
        HttpStatus.OK.value(),
        "유저 생성",
        new UserDto(user.getId(), user.getAvatar(), user.getNickname()));
  }

  // 유저 삭제
  @DeleteMapping("")
  public void deleteUser(@RequestHeader(value="User-Id") String userId) {
    userService.remove(userId);
  }
}
