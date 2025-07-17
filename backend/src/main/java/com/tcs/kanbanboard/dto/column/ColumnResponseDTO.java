package com.tcs.kanbanboard.dto;

import com.tcs.kanbanboard.dto.item.ItemResponseDTO;

import java.util.List;

public class ColumnResponseDTO {

    private Long id;
    private Long boardId;
    private String name;
    private int position;

    private List<ItemResponseDTO> items;

    public ColumnResponseDTO() {}

    public ColumnResponseDTO(Long id, Long boardId, String name, int position, List<ItemResponseDTO> items) {
        this.id = id;
        this.boardId = boardId;
        this.name = name;
        this.position = position;
        this.items = items;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<ItemResponseDTO> getItems() {
        return items;
    }

    public void setItems(List<ItemResponseDTO> items) {
        this.items = items;
    }
}
