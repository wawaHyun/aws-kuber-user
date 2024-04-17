package com.turing.api.article.model;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {

    private Long id;
    private String title;
    private String content;
    private Long writer;
    private Long board;
    private String modDate;
    private String regDate;

    
}
