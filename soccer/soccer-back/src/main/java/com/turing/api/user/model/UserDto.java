package com.turing.api.user.model;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.turing.api.article.model.Article;

@Component
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private Long address;
    private String job;
    private String modDate;
    private String regDate;

}
