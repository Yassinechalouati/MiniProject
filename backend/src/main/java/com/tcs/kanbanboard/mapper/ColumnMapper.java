package com.tcs.kanbanboard.mapper;

import com.tcs.kanbanboard.dto.ColumnCreateDTO;
import com.tcs.kanbanboard.dto.ColumnResponseDTO;
import com.tcs.kanbanboard.dto.item.ItemResponseDTO;
import com.tcs.kanbanboard.entity.Board;
import com.tcs.kanbanboard.entity.ColumnEntity;
import com.tcs.kanbanboard.entity.Item;

import java.util.List;
import java.util.stream.Collectors;

public class ColumnMapper {

    public static ColumnResponseDTO toDTO(ColumnEntity column) {
        if (column == null) {
            return null;
        }

        List<ItemResponseDTO> items = column.getItems() != null
                ? column.getItems().stream()
                .map(ItemMapper::toDTO)
                .collect(Collectors.toList())
                : null;

        return new ColumnResponseDTO(
                column.getId(),
                column.getBoard().getId(),
                column.getName(),
                column.getPosition(),
                items
        );
    }

    public static ColumnEntity toEntity(ColumnCreateDTO dto, Board board) {
        if (dto == null || board == null) {
            return null;
        }

        ColumnEntity column = new ColumnEntity();
        column.setBoard(board);
        column.setName(dto.getName());
        column.setPosition(dto.getPosition());
        return column;
    }
}
