package com.tcs.kanbanboard.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "board")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "owner_email", nullable = false)
    private User owner;

    private String name;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ColumnEntity> columns;

    public Board() {}

    public Board(User owner, String name) {
        this.owner = owner;
        this.name = name;
        this.createdAt = LocalDateTime.now();
        this.columns = new ArrayList<>();
    }

    public Board(User owner, String name, List<ColumnEntity> columns) {
        this.owner = owner;
        this.name = name;
        this.columns = columns;
        createdAt = LocalDateTime.now();
    }

    public Board(Long id, User owner, String name, LocalDateTime createdAt, List<ColumnEntity> columns) {
        this.id = id;
        this.owner = owner;
        this.name = name;
        this.createdAt = createdAt;
        this.columns = columns;
    }

}
