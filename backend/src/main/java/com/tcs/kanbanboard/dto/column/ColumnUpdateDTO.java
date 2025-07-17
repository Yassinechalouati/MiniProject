package com.tcs.kanbanboard.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
