package com.tcs.kanbanboard.dto.item;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ItemUpdateDTO {

    @NotBlank(message = "Title is required")
    @Size(max = 100, message = "Title must not exceed 100 characters")
    private String title;

    @Size(max = 500, message = "Description must not exceed 500 characters")
    private String description;

    @Min(value = 0, message = "Position must be zero or greater")
    private int position;

    public ItemUpdateDTO() {}

    public ItemUpdateDTO(String title, String description, int position) {
        this.title = title;
        this.description = description;
        this.position = position;
    }

}
