package com.tcs.kanbanboard.mapper;

import com.tcs.kanbanboard.dto.user.UserRegistrationDTO;
import com.tcs.kanbanboard.dto.user.UserResponseDTO;
import com.tcs.kanbanboard.entity.User;

public class UserMapper {

    public static UserResponseDTO toDTO(User user) {
        if (user == null) {
            return null;
        }
        return new UserResponseDTO(user.getEmail(), user.getCreatedAt());
    }

    public static User toEntity(UserRegistrationDTO dto) {
        if (dto == null) return null;
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPasswordHash(dto.getPassword());
        return user;
    }
}
