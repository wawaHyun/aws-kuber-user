package com.turing.api.board;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.turing.api.board.model.BoardDto;
import com.turing.api.board.service.BoardService;
import com.turing.api.common.component.Messenger;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found") })
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/boards")
@Slf4j
public class BoardController {

    private final BoardService ser;

    // ----------------------------JPA_기본제공_methode------------------------

    @SuppressWarnings("static-access")
    @PostMapping("/save")
    public ResponseEntity<Messenger> save(@RequestBody BoardDto dto) {
        log.info("입력받은 정보 : save");
        return ResponseEntity.ok(ser.save(dto));
    }

    @GetMapping("/list") // 모든 글에 대한 모든 정보
    public ResponseEntity<List<BoardDto>> findAll() {
        log.info("runing for : findAll");
        return ResponseEntity.ok(ser.findAll());
    }

    @GetMapping("/detail") // 한개에 대한 모든 정보
    public ResponseEntity<BoardDto> findById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(ser.findById(id).orElseGet(BoardDto::new));
    }

    @PatchMapping("/modify") // update
    public ResponseEntity<Messenger> modify(@RequestBody BoardDto param) {
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
    public boolean existsById(@PathVariable Long id) {
        return ser.existsById(id);
    }

    @GetMapping("/search")
    public ResponseEntity<List<BoardDto>> findBoardsByTitle(@RequestBody BoardDto param) {
        log.info("입력받은 정보 : {}", param.getTitle());
        return ResponseEntity.ok(ser.findBoardsByTitle(param.getTitle()));
    }

}
