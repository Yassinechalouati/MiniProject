package com.tcs.kanbanboard.mapper;

import com.tcs.kanbanboard.dto.board.BoardCreateDTO;
import com.tcs.kanbanboard.dto.board.BoardResponseDTO;
import com.tcs.kanbanboard.dto.column.ColumnResponseDTO;
import com.tcs.kanbanboard.entity.Board;
import com.tcs.kanbanboard.entity.User;

import java.util.List;
import java.util.stream.Collectors;

public class BoardMapper {

    public static BoardResponseDTO toDTO(Board board) {
        if (board == null) return null;

        List<ColumnResponseDTO> columnDTOs = board.getColumns() != null
                ? board.getColumns().stream()
                .map(ColumnMapper::toDTO)
                .collect(Collectors.toList())
                : null;

        return new BoardResponseDTO(
                board.getId(),
                board.getName(),
                board.getOwner().getEmail(),
                board.getCreatedAt(),
                columnDTOs
        );
    }

    public static Board toEntity(BoardCreateDTO dto, User owner) {
        if (dto == null || owner == null) return null;

        Board board = new Board();
        board.setName(dto.getName());
        board.setOwner(owner);
        board.setCreatedAt(java.time.LocalDateTime.now());
        return board;
    }
}
