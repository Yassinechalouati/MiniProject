package com.tcs.kanbanboard.repository;

import com.tcs.kanbanboard.entity.ColumnEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColumnRepository extends JpaRepository<ColumnEntity, Long> {
    List<ColumnEntity> findByBoardId(Long boardId);
}
