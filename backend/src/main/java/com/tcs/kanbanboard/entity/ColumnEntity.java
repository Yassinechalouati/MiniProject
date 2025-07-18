package com.tcs.kanbanboard.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
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
        items = new ArrayList<>();
    }

    public ColumnEntity(Long id, Board board, String name, int position, List<Item> items) {
        this.id = id;
        this.board = board;
        this.name = name;
        this.position = position;
        this.items = items != null ? items : new ArrayList<>();
    }

}
