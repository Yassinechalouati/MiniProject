package com.tcs.kanbanboard.mapper;

import com.tcs.kanbanboard.dto.item.ItemCreateDTO;
import com.tcs.kanbanboard.dto.item.ItemResponseDTO;
import com.tcs.kanbanboard.entity.ColumnEntity;
import com.tcs.kanbanboard.entity.Item;

public class ItemMapper {

    public static ItemResponseDTO toDTO(Item item) {
        if (item == null) {
            return null;
        }
        return new ItemResponseDTO(
                item.getId(),
                item.getColumn() != null ? item.getColumn().getId() : null,
                item.getTitle(),
                item.getDescription(),
                item.getPosition()
        );
    }

    public static Item toEntity(ItemCreateDTO dto, ColumnEntity column) {
        if (dto == null || column == null) {
            return null;
        }
        Item item = new Item();
        item.setColumn(column);
        item.setTitle(dto.getTitle());
        item.setDescription(dto.getDescription());
        item.setPosition(dto.getPosition());
        return item;
    }
}
