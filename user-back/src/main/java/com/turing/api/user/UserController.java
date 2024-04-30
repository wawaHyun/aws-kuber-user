package com.turing.api.user;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found") })
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
@Slf4j
public class UserController {

    private final UserService ser;


    @PostMapping("/save") // join
    public ResponseEntity<Messenger> save(@RequestBody UserDto dto) {
        log.info("입력받은 정보 : {}", dto);
        return ResponseEntity.ok(ser.save(dto));
    }

    @GetMapping("/list") // 모든 회원에 대한 모든 정보
    public ResponseEntity<List<UserDto>> findAll() {
        log.info("runing for : findAll");
        return ResponseEntity.ok(ser.findAll());
    }

    @GetMapping("/detail") // 한 사람에 대한 모든 정보
    public ResponseEntity<UserDto> findById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(ser.findById(id).orElseGet(UserDto::new));
    }

    @PutMapping("/modify") // update
    public ResponseEntity<Messenger> modify(@RequestBody UserDto param) {
        log.info("입력받은 정보 : {}", param);
        return ResponseEntity.ok(ser.modify(param));

    }

    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(ser.deleteById(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(ser.count());

    }

    @GetMapping("/exist")
    public ResponseEntity<Boolean> existsById(@RequestParam Long id) {
        log.info("입력 : " + id);
        return ResponseEntity.ok(ser.existsById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<UserDto>> findUsersByName(@RequestBody UserDto param) {
        log.info("입력받은 정보 : {}", param.getName());
        return ResponseEntity.ok(ser.findUsersByName(param.getName()));
    }

    @PostMapping("/login")
    public ResponseEntity<Messenger> login(@RequestBody UserDto param) {
        log.info("입력받은 정보 : {}", param.toString());
        return ResponseEntity.ok(ser.login(param));
    }

}
