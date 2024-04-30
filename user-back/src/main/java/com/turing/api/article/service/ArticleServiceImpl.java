package com.turing.api.article.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.repository.ArticleRepository;
import com.turing.api.board.model.Board;
import com.turing.api.board.repository.BoardRepository;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.User;
import com.turing.api.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repo;
    private final UserRepository userRepo;
    private final BoardRepository boardRepo;

    @Override
    public Messenger save(ArticleDto dto) {
        User user = userRepo.findById(dto.getWriter()).orElseGet(null);
        Board board = boardRepo.findById(dto.getBoard()).orElseGet(null);
        entityToDto((repo.save(dtoToEntity(dto, user, board))));
        return Messenger.builder()
                .message("SUCCES")
                .build();
    }

    @Override
    public List<ArticleDto> findAll() {
        List<ArticleDto> list = repo.findAll().stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public Messenger deleteById(Long id) {
        repo.deleteById(id);
        return Messenger.builder()
                .message("SUCCES")
                .build();
    }

    @Override
    public Messenger modify(ArticleDto dto) {
        User user = userRepo.findById(dto.getWriter()).orElseGet(null);
        Board board = boardRepo.findById(dto.getBoard()).orElseGet(null);
        entityToDto((repo.save(dtoToEntity(dto, user, board))));

        
        return Messenger.builder()
                .message("SUCCES")
                .build();
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return repo.findById(id).map(i -> entityToDto(i));
    }

    @Override
    public long count() {
        return repo.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<ArticleDto> findArticlesByTitle(String name) {
        return repo.findArticlesByTitle(name);
    }

    @Override
    public List<ArticleDto> findArivleByBoard(Long id) {
        return repo.findArivleByBoard(id);
    }

}
