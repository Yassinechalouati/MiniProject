package com.tcs.kanbanboard.repository;

import com.tcs.kanbanboard.entity.Board;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByOwnerEmail(String ownerEmail);
}
