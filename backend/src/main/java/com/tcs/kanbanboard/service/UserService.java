package com.tcs.kanbanboard.service;

import com.tcs.kanbanboard.dto.UserRegistrationDTO;
import com.tcs.kanbanboard.entity.User;
import com.tcs.kanbanboard.repository.AppUserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    private final AppUserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserService(AppUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public User saveUser(User user) {
        String hashedPassword = passwordEncoder.encode(user.getPasswordHash());
        user.setPasswordHash(hashedPassword);

        return userRepository.save(user);
    }

    public void deleteUser(String email) {
        userRepository.findByEmail(email).ifPresent(userRepository::delete);
    }

    public boolean checkPassword(User user, String rawPassword) {
        return passwordEncoder.matches(rawPassword, user.getPasswordHash());
    }

    public User registerNewUser(UserRegistrationDTO dto) {
        if (existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }
        User newUser = new User();
        newUser.setEmail(dto.getEmail());
        newUser.setPasswordHash(passwordEncoder.encode(dto.getPassword()));
        newUser.setCreatedAt(LocalDateTime.now());
        return userRepository.save(newUser);
        //TODO: Handle exception in controller if email is taken
    }

    public User updateUser(User user) {
        return userRepository.save(user);
        //TODO: Customize for different kinds of updates
    }
}
