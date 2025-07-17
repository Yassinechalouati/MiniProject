package com.tcs.kanbanboard.dto;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getColumnId() {
        return columnId;
    }

    public void setColumnId(Long columnId) {
        this.columnId = columnId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
