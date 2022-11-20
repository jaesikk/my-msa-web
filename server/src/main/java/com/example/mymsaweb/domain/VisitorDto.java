package com.example.mymsaweb.domain;

import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import javax.validation.constraints.NotEmpty;

@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class VisitorDto {
    @Value("annonymous")
    private String userId;
    @Id @NotEmpty(message = "코멘트를 남겨주세요")
    private String comment;
    private Date logDate;
}
