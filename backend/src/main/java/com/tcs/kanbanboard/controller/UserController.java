package com.tcs.kanbanboard.controller;

import com.tcs.kanbanboard.dto.user.UserUpdateDTO;
import com.tcs.kanbanboard.dto.user.UserLoginDTO;
import com.tcs.kanbanboard.dto.user.UserRegistrationDTO;
import com.tcs.kanbanboard.dto.user.UserResponseDTO;
import com.tcs.kanbanboard.entity.User;
import com.tcs.kanbanboard.mapper.UserMapper;
import com.tcs.kanbanboard.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // POST /api/users/register
    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(
            @Valid @RequestBody UserRegistrationDTO dto) {
        User user = userService.registerNewUser(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(UserMapper.toDTO(user));
    }

    // POST /api/users/login
    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> login(
            @Valid @RequestBody UserLoginDTO dto) {
        return userService.findByEmail(dto.getEmail())
                .filter(user -> userService.checkPassword(user, dto.getPassword()))
                .map(user -> ResponseEntity.ok(UserMapper.toDTO(user)))
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    // GET /api/users/{email}
    @GetMapping("/{email}")
    public ResponseEntity<UserResponseDTO> getProfile(@PathVariable String email) {
        return userService.findByEmail(email)
                .map(user -> ResponseEntity.ok(UserMapper.toDTO(user)))
                .orElse(ResponseEntity.notFound().build());
    }

    // PUT /api/users/{email}
    @PutMapping("/{email}")
    public ResponseEntity<UserResponseDTO> updatePassword(
            @PathVariable String email,
            @Valid @RequestBody UserUpdateDTO dto) {

        return userService.findByEmail(email)
                .map(user -> {
                    if (!userService.checkPassword(user, dto.getCurrentPassword())) {
                        return ResponseEntity.status(HttpStatus.FORBIDDEN).<UserResponseDTO>build();
                    }
                    user.setPasswordHash(dto.getNewPassword());
                    User updated = userService.saveUser(user);
                    return ResponseEntity.ok(UserMapper.toDTO(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/users/{email}
    @DeleteMapping("/{email}")
    public ResponseEntity<Void> delete(@PathVariable String email) {
        if (!userService.existsByEmail(email)) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteUser(email);
        return ResponseEntity.noContent().build();
    }
}
