package com.tcs.kanbanboard.repository;

import com.tcs.kanbanboard.entity.ColumnEntity;

import java.util.List;

public interface ColumnRepository extends JpaRepository<ColumnEntity, Long> {
    List<ColumnEntity> findByBoardId(Long boardId);
}
