package com.tcs.kanbanboard.dto.board;

import com.tcs.kanbanboard.dto.column.ColumnResponseDTO;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
public class BoardResponseDTO {
    private Long id;
    private String name;
    private String ownerEmail;
    private LocalDateTime createdAt;
    private List<ColumnResponseDTO> columns;

    public BoardResponseDTO() {}

    public BoardResponseDTO(Long id, String name, String ownerEmail, LocalDateTime createdAt, List<ColumnResponseDTO> columns) {
        this.id = id;
        this.name = name;
        this.ownerEmail = ownerEmail;
        this.createdAt = createdAt;
        this.columns = columns;
    }

}
