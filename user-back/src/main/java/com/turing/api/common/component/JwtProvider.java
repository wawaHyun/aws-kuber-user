package com.turing.api.common.component;

import org.springframework.stereotype.Component;

import com.turing.api.user.model.UserDto;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Component
public class JwtProvider {

    @Value("${jwt.iss}")
    public String issuer;

    private final SecretKey secretkey;
    Instant expiredDate = Instant.now().plus(1, ChronoUnit.DAYS); // 국제표준시간

    public JwtProvider(@Value("${jwt.secret}") String secretkey) {
        this.secretkey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretkey));
    }

    public String createToken(UserDto user) {

        String token = Jwts.builder()
                .issuer(issuer)
                .signWith(secretkey)
                .expiration(Date.from(expiredDate))
                .subject("turing")
                .claim("userId", user.getId())
                .claim("username", user.getUsername())
                .claim("job", user.getJob())
                .compact();

        log.info("login success after 발급된 token : {}", token);
        return token;
    }

}
