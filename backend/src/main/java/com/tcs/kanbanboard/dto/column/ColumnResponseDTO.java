package com.tcs.kanbanboard.dto.column;

import com.tcs.kanbanboard.dto.item.ItemResponseDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ColumnResponseDTO {

    private Long id;
    private Long boardId;
    private String name;
    private int position;

    private List<ItemResponseDTO> items;

    public ColumnResponseDTO() {}

    public ColumnResponseDTO(Long id, Long boardId, String name, int position, List<ItemResponseDTO> items) {
        this.id = id;
        this.boardId = boardId;
        this.name = name;
        this.position = position;
        this.items = items;
    }


}
