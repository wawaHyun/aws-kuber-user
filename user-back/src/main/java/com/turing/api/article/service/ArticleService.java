package com.turing.api.article.service;

import java.util.*;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {

    List<ArticleDto> findArticlesByTitle(String name);

    default Article dtoToEntity(ArticleDto dto) {
        return Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                // .writer((String) dto.getWriterId())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목 private String title;
    }

    default ArticleDto entityToDto(Article ent) {
        return ArticleDto.builder()
                .id(ent.getId())
                .title(ent.getTitle())
                .content(ent.getContent())
                // .writer((Long) ent.getWriter())
                .modDate(String.valueOf(ent.getModDate()))
                .regDate(String.valueOf(ent.getRegDate()))
                .build();
    }

}
