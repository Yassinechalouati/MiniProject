package com.tcs.kanbanboard.dto.user;

import java.time.LocalDateTime;

public class UserResponseDTO {
    private String email;
    private LocalDateTime createdAt;

    public UserResponseDTO() {}

    public UserResponseDTO(String email, LocalDateTime createdAt) {
        this.email = email;
        this.createdAt = createdAt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
