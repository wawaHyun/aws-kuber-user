package com.turing.api.article;

import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.service.ArticleService;
import com.turing.api.common.component.Messenger;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found") })
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/articles")
@Slf4j
public class ArticleController {

    private final ArticleService ser;


    @SuppressWarnings("static-access")
    @PostMapping("/save")
    public ResponseEntity<Messenger> save(@RequestBody ArticleDto dto) {
        log.info("입력받은 정보 : {}", dto);
        return ResponseEntity.ok(ser.save(dto));
    }

    @GetMapping("/list") // 모든 글에 대한 모든 정보
    public ResponseEntity<List<ArticleDto>> findAll() {
        log.info("runing for : findAll");
        return ResponseEntity.ok(ser.findAll());
    }

    @GetMapping("/detail") // 한개에 대한 모든 정보
    public ResponseEntity<ArticleDto> findById(@RequestParam Long id) {
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(ser.findById(id).orElseGet(ArticleDto::new));
    }

    @PutMapping("/modify") // update
    public ResponseEntity<Messenger> modify(@RequestBody ArticleDto param) {
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
        return ResponseEntity.ok(ser.existsById(id));
    }


    @GetMapping("/search")
    public ResponseEntity<List<ArticleDto>> findArticlesByTitle(@RequestBody ArticleDto param) {
        log.info("입력받은 정보 : {}", param.getTitle());
        return ResponseEntity.ok(ser.findArticlesByTitle(param.getTitle()));
    }


    //ㅜ수수수수수수수수수저어ㅏㄶ머이ㅏㄹ ㅓ미ㅏㄷ좨ㅑㅈㅁㄷ러니ㅏㅎㄹㅇㅁㅇ노히ㅏ멍니ㅏ럼ㄹㄴㄹ

}
