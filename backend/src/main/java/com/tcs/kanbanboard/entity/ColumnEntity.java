package com.tcs.kanbanboard.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "column")
public class ColumnEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "column_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "board_id", nullable = false)
    private Board board;

    private String name;

    @Column(nullable = false)
    private int position;

    @OneToMany(mappedBy = "column", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;

    public ColumnEntity() {}

    public ColumnEntity(Board board, String name, int position) {
        this.board = board;
        this.name = name;
        this.position = position;
    }

    public ColumnEntity(Long id, Board board, String name, int position, List<Item> items) {
        this.id = id;
        this.board = board;
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

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
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

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
