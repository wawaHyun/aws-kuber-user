package com.turing.api.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.turing.api.board.model.Board;
import com.turing.api.board.model.BoardDto;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    List<BoardDto> findBoardsByTitle(String name);

}
