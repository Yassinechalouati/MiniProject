package com.tcs.kanbanboard.service;

import com.tcs.kanbanboard.entity.ColumnEntity;
import com.tcs.kanbanboard.entity.Board;
import com.tcs.kanbanboard.repository.ColumnRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ColumnService {

    private final ColumnRepository columnRepository;
    private final BoardService boardService;

    public ColumnService(ColumnRepository columnRepository, BoardService boardService) {
        this.columnRepository = columnRepository;
        this.boardService = boardService;
    }

    public List<ColumnEntity> getColumnsByBoardId(Long boardId) {
        return columnRepository.findByBoardId(boardId);
    }

    public Optional<ColumnEntity> getColumnById(Long id) {
        return columnRepository.findById(id);
    }

    public ColumnEntity createColumn(Long boardId, String name, int position) {
        Board board;
        try {
            board = boardService.getBoardById(boardId).get();
        } catch (NoSuchElementException e) {
            throw new IllegalArgumentException("Board not found with id: " + boardId);
        }

        ColumnEntity column = new ColumnEntity();
        column.setBoard(board);
        column.setName(name);
        column.setPosition(position);

        return columnRepository.save(column);
    }

    // Save or update
    public ColumnEntity saveColumn(ColumnEntity column) {
        return columnRepository.save(column);
    }

    public void deleteColumn(Long columnId) {
        columnRepository.deleteById(columnId);
    }
}
