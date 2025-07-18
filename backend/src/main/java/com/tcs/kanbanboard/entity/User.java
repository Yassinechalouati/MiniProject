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
@Table(name = "app_user")
public class User {
    @Id
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Board> boards;

    public User() {}

    public User(String email, String passwordHash) {
        this.email = email;
        this.passwordHash = passwordHash;
        this.boards = new ArrayList<>();
    }

    public User(String email, String passwordHash, List<Board> boards) {
        this.email = email;
        this.passwordHash = passwordHash;
        this.boards = boards;
    }

    public User(String email, String passwordHash, LocalDateTime createdAt, List<Board> boards) {
        this.email = email;
        this.passwordHash = passwordHash;
        this.createdAt = createdAt;
        this.boards = boards;
    }

}