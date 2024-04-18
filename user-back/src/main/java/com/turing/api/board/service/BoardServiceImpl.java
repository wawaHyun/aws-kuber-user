package com.turing.api.board.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.stream.*;

import org.springframework.stereotype.Service;

import com.turing.api.board.model.BoardDto;
import com.turing.api.board.repository.BoardRepository;
import com.turing.api.common.component.Messenger;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {

    private final BoardRepository repo;

    @Override
    public Messenger save(BoardDto user) {
        entityToDto((repo.save(dtoToEntity(user))));
        return Messenger.builder()
                .message("save succes")
                .build();
    }

    @Override
    public List<BoardDto> findAll() {
        List<BoardDto> list = repo.findAll().stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public Messenger deleteById(Long id) {
        repo.deleteById(id);
        return Messenger.builder()
                .message("delete succes")
                .build();
    }

    @Override
    public Messenger modify(BoardDto dto) {
        entityToDto((repo.save(dtoToEntity(dto))));
        return Messenger.builder()
                .message("modify succes")
                .build();
    }

    @Override
    public Optional<BoardDto> findById(Long id) {
        return repo.findById(id).map(i -> entityToDto(i));
    }

    @Override
    public Long count() {
        return repo.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<BoardDto> findBoardsByTitle(String name) {
        return repo.findBoardsByTitle(name);
    }

}
