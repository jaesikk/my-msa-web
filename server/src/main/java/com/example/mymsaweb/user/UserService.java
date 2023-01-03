package com.example.mymsaweb.user;

import com.example.mymsaweb.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
  private final UserRepository userRepository;

  // 유저 생성
  public UserDto join(Long id, String userId, String userNm, String userPw) {
    return userRepository.save(new UserDto(id, userId, userNm, userPw));
  }

  // 유저 조회
  public UserDto findOne(String userDtoId) {
    System.out.println("@ @ @ @ @@ @ @ @ @ @ @ @ userService get ! ! ! == > > > >" +userDtoId);
    Optional<UserDto> result = userRepository.findById(userDtoId);
    if (result.isEmpty()) {
      throw new RuntimeException("일치하는 유저가 없습니다");
    }
    return result.get();
  }
  //유저 삭제
  public void remove(String userDtoId) {
    Optional<UserDto> result = userRepository.findById(userDtoId);
    if (result.isPresent()) {
      userRepository.delete(result.get());
    }
  }
}
