package com.tcs.kanbanboard.dto.column;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ColumnCreateDTO {

    @NotNull(message = "Board ID is required")
    private Long boardId;

    @NotBlank(message = "Column name is required")
    @Size(min = 2, max = 100, message = "Column name must be between 2 and 100 characters")
    private String name;

    @Min(value = 0, message = "Position must be zero or positive")
    private int position;

    public ColumnCreateDTO() {}

    public ColumnCreateDTO(Long boardId, String name, int position) {
        this.boardId = boardId;
        this.name = name;
        this.position = position;
    }

}
