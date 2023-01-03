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
  public ResponseDto<UserDto> getUser(@RequestHeader(value="userId") String userId) {
    System.out.println("@ @ @ @ @@ @ @ @ @ @ @ @ Getmaaping controller ! ! ! == > > > >" +userId);
    UserDto user = userService.findOne(userId);
    return new ResponseDto(
        HttpStatus.OK.value(),
        "유저 조회",
        new UserDto(user.getId(), user.getUserId(), user.getUserNm(), user.getUserPw()));
  }

  // 유저 생성 & 수정
  @PostMapping("")
  //@Valid
  public ResponseDto<UserDto> createUser(@Valid @RequestBody UserDto data) {
    UserDto user = userService.join(data.getId(), data.getUserId(), data.getUserNm(), data.getUserPw());
    return new ResponseDto(
        HttpStatus.OK.value(),
        "유저 생성",
        new UserDto(user.getId(), user.getUserId(), user.getUserNm(), user.getUserPw()));
  }

  // 유저 삭제
  @DeleteMapping("")
  public void deleteUser(@RequestHeader(value="userId") String userId) {
    userService.remove(userId);
  }
}
