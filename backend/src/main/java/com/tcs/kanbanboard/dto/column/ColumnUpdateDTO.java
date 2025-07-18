package com.tcs.kanbanboard.dto.column;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ColumnUpdateDTO {
    @NotBlank(message = "Column name is required")
    @Size(min = 2, max = 100, message = "Column name must be between 2 and 100 characters")
    private String name;

    @Min(value = 0, message = "Position must be zero or greater")
    private int position;

    public ColumnUpdateDTO() {}

    public ColumnUpdateDTO(String name, int position) {
        this.name = name;
        this.position = position;
    }

}
