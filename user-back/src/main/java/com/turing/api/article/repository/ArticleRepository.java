package com.turing.api.article.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<ArticleDto> findArticlesByTitle(String name);

    List<ArticleDto> findArivleByBoard(Long id);

}
