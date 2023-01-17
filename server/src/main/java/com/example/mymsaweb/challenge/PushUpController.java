package com.example.mymsaweb.challenge;

import com.example.mymsaweb.domain.ResponseDto;
import com.example.mymsaweb.user.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor // service
@RequestMapping("api/challenge")
public class PushUpController {

  private final PushUpService pushUpService;

  @GetMapping("/name")
  public ResponseDto<PushUp> checkChallenger(@RequestHeader(value="challenger") String challenger) {
    System.out.println("test log");

    PushUp pushUp = pushUpService.findOne(challenger);

    return new ResponseDto(
        HttpStatus.OK.value(),
        "첼린저 정보 확인",
        new PushUp(pushUp.getId(), pushUp.getChallenger(), pushUp.getCompleteYn(), pushUp.getRemarkContent(), pushUp.getLogDate()));
  }

  @PostMapping("/submit")
  public ResponseDto<PushUpSubmitDto> submitChallenger(@Valid @RequestBody PushUp data) {
    System.out.println("@ @@ @ @ @ @ @ @ @ @ @ == > > > > > Challenge POST controller");
    PushUp pushUp = pushUpService.join(data.getId(), data.getChallenger(), data.getCompleteYn(), data.getRemarkContent(), data.getLogDate());
    return new ResponseDto(
        HttpStatus.OK.value(),
        "첼린지 제출",
        new PushUpSubmitDto(3, 2));
  }
}
