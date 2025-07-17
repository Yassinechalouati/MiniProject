package com.tcs.kanbanboard.repository;

import com.tcs.kanbanboard.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByColumnId(Long columnId);
    List<Item> findByColumnIdOrderByPositionAsc(Long columnId);
    Optional<Item> findByIdAndColumnId(Long id, Long columnId);
}
