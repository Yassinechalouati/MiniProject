package com.tcs.kanbanboard.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

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

    public Long getBoardId() {
        return boardId;
    }

    public void setBoardId(Long boardId) {
        this.boardId = boardId;
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
