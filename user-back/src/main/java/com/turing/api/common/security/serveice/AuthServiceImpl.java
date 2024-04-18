package com.turing.api.common.security.serveice;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository repo;

    @Override
    public Messenger login(UserDto dto) {
        boolean flag = repo.findUsersByUsername(dto.getUsername()).get().getPassword().equals(dto.getPassword());

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAIL")
                .token(flag ? createToken(dto) : "NONE")
                .build();
    }

    @Override
    public String createToken(UserDto user) {

        LocalDateTime now = LocalDateTime.now();
        LocalDateTime tokenValidTime = now.plusSeconds(24 * 60 * 60 * 1000);

        String token = Jwts.builder()
                .claims()
                .issuer("turing.com") // 토큰 발급자. 회사
                .subject("User Auth") // 토큰 제목
                .add("exp", tokenValidTime) // 토큰 만료시간. 중요
                .add("user_id", user.getId())
                .add("username", user.getUsername())
                .add("job", "admin") // job을 관리자로 쓰기로 함.
                .and()
                .signWith(null)
                .compact();

        log.info("login success after 발급된 token : {}", token);
        return token;
    }

}
