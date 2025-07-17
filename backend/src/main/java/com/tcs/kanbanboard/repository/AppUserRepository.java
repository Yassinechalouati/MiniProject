package com.tcs.kanbanboard.repository;

import com.tcs.kanbanboard.entity.User;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
