package com.turing.api.article.service;

import java.util.*;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.board.model.Board;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;
import com.turing.api.user.model.User;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {

    List<ArticleDto> findArticlesByTitle(String name);

    default Article dtoToEntity(ArticleDto dto, User user, Board board) {
        return Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .writer(user)
                .board(board)
                .build();
    }

    default ArticleDto entityToDto(Article ent) {
        return ArticleDto.builder()
                .id(ent.getId())
                .title(ent.getTitle())
                .content(ent.getContent())
                .writer(ent.getWriter().getId())
                .board(ent.getBoard().getId())
                .modDate(String.valueOf(ent.getModDate()))
                .regDate(String.valueOf(ent.getRegDate()))
                .build();
    }

    List<ArticleDto> findArivleByBoard(Long id);

}
