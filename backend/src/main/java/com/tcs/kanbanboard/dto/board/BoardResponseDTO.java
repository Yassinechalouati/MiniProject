package com.tcs.kanbanboard.dto;

import java.time.LocalDateTime;
import java.util.List;

public class BoardResponseDTO {
    private Long id;
    private String name;
    private String ownerEmail;
    private LocalDateTime createdAt;
    private List<com.tcs.kanbanboard.dto.ColumnResponseDTO> columns;

    public BoardResponseDTO() {}

    public BoardResponseDTO(Long id, String name, String ownerEmail, LocalDateTime createdAt, List<com.tcs.kanbanboard.dto.ColumnResponseDTO> columns) {
        this.id = id;
        this.name = name;
        this.ownerEmail = ownerEmail;
        this.createdAt = createdAt;
        this.columns = columns;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<com.tcs.kanbanboard.dto.ColumnResponseDTO> getColumns() {
        return columns;
    }

    public void setColumns(List<com.tcs.kanbanboard.dto.ColumnResponseDTO> columns) {
        this.columns = columns;
    }
}
