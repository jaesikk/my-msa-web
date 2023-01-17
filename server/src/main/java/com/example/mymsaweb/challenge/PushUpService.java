package com.example.mymsaweb.challenge;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PushUpService {
  private final PushUpRepository pushUpRepository;

  // 유저 생성
  public PushUp join(Long id, String challenger, Long completeYn, String remarkContent, String logDate) {

    if (StringUtils.isEmpty(logDate)
    ) {
      System.out.println("@ @ @ @ @ @ @ @ @ @ @ = = = =  > 미 입력 Date setting");
      SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
      Calendar c1 = Calendar.getInstance();
      String strToday = sdf.format(c1.getTime());
      System.out.println("Today=" + strToday);
      logDate = strToday;
    }
    return pushUpRepository.save(new PushUp(id, challenger, completeYn, remarkContent, logDate));
  }

  // 유저 조회
  public PushUp findOne(String challenger) {
    System.out.println("@ @ @ @ @@ @ @ @ @ @ @ @ userService get ! ! ! == > > > >" +challenger);
    Optional<PushUp> result = pushUpRepository.findById(challenger);
    if (result.isEmpty()) {
      throw new RuntimeException("일치하는 유저가 없습니다");
    }
    return result.get();
  }
}
