package com.tcs.kanbanboard.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "item")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "column_id", nullable = false)
    private ColumnEntity column;

    private String title;
    private String description;

    @Column(nullable = false)
    private int position;

    public Item() {}

    public Item(ColumnEntity column, String title, String description) {
        this.column = column;
        this.title = title;
        this.description = description;
    }

    public Item(ColumnEntity column, String title, String description, int position) {
        this.column = column;
        this.title = title;
        this.description = description;
        this.position = position;
    }

    public Item(Long id, ColumnEntity column, String title, String description, int position) {
        this.id = id;
        this.column = column;
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

    public ColumnEntity getColumn() {
        return column;
    }

    public void setColumn(ColumnEntity column) {
        this.column = column;
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
