package com.tcs.kanbanboard.dto.item;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ItemCreateDTO {
    @NotNull(message = "Column ID is required")
    private Long columnId;

    @NotBlank(message = "Title is required")
    @Size(max = 100, message = "Title must not exceed 100 characters")
    private String title;

    @Size(max = 500, message = "Description must not exceed 500 characters")
    private String description;

    @Min(value = 0, message = "Position must be zero or greater")
    private int position;

    public ItemCreateDTO() {}

    public ItemCreateDTO(Long columnId, String title, String description, int position) {
        this.columnId = columnId;
        this.title = title;
        this.description = description;
        this.position = position;
    }

}
