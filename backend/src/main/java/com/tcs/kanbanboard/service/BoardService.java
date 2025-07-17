package com.tcs.kanbanboard.service;

import com.tcs.kanbanboard.entity.Board;
import com.tcs.kanbanboard.entity.User;
import com.tcs.kanbanboard.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserService userService;

    public BoardService(BoardRepository boardRepository, UserService userService) {
        this.boardRepository = boardRepository;
        this.userService = userService;
    }

    public List<Board> getBoardsByOwnerEmail(String ownerEmail) {
        return boardRepository.findByOwnerEmail(ownerEmail);
    }

    public Optional<Board> getBoardById(Long id) {
        return boardRepository.findById(id);
    }

    public Board createBoard(String ownerEmail, String name) {
        User owner;
        try {
            owner = userService.findByEmail(ownerEmail).get();
        } catch (NoSuchElementException e) {
            throw new IllegalArgumentException("User not found with this email: " + ownerEmail);
        }

        Board board = new Board();
        board.setOwner(owner);
        board.setName(name);
        board.setCreatedAt(LocalDateTime.now());

        return boardRepository.save(board);
    }

    // Save or update
    public Board saveBoard(Board board) {
        return boardRepository.save(board);
    }

    public void deleteBoard(Long boardId) {
        boardRepository.deleteById(boardId);
    }
}
