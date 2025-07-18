package com.tcs.kanbanboard.dto.user;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class UserResponseDTO {
    private String email;
    private LocalDateTime createdAt;

    public UserResponseDTO() {}

    public UserResponseDTO(String email, LocalDateTime createdAt) {
        this.email = email;
        this.createdAt = createdAt;
    }

}
