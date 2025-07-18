package com.tcs.kanbanboard.dto.item;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ItemResponseDTO {

    private Long id;
    private Long columnId;
    private String title;
    private String description;
    private int position;

    public ItemResponseDTO() {}

    public ItemResponseDTO(Long id, Long columnId, String title, String description, int position) {
        this.id = id;
        this.columnId = columnId;
        this.title = title;
        this.description = description;
        this.position = position;
    }

}
