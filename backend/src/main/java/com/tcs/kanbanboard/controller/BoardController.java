package com.tcs.kanbanboard.controller;

import com.tcs.kanbanboard.dto.board.BoardCreateDTO;
import com.tcs.kanbanboard.dto.board.BoardResponseDTO;
import com.tcs.kanbanboard.dto.board.BoardUpdateDTO;
import com.tcs.kanbanboard.entity.Board;
import com.tcs.kanbanboard.entity.User;
import com.tcs.kanbanboard.mapper.BoardMapper;
import com.tcs.kanbanboard.repository.AppUserRepository;
import com.tcs.kanbanboard.service.BoardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/boards")
public class BoardController {

    private final BoardService boardService;
    private final AppUserRepository userRepository;

    public BoardController(BoardService boardService, AppUserRepository userRepository) {
        this.boardService = boardService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<BoardResponseDTO>> getBoardsByOwnerEmail(@RequestParam String ownerEmail) {
        List<Board> boards = boardService.getBoardsByOwnerEmail(ownerEmail);
        List<BoardResponseDTO> dtos = boards.stream()
                .map(BoardMapper::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardResponseDTO> getBoardById(@PathVariable Long id) {
        Optional<Board> boardOpt = boardService.getBoardById(id);
        return boardOpt.map(board -> ResponseEntity.ok(BoardMapper.toDTO(board))).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<BoardResponseDTO> createBoard(@Validated @RequestBody BoardCreateDTO dto) {
        Optional<User> ownerOpt = userRepository.findByEmail(dto.getOwnerEmail());
        if (ownerOpt.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        Board board = boardService.createBoard(dto.getOwnerEmail(), dto.getName());
        return new ResponseEntity<>(BoardMapper.toDTO(board), HttpStatus.CREATED);
    }

    //Delete board by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
        Optional<Board> boardOpt = boardService.getBoardById(id);
        if (boardOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        boardService.deleteBoard(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoardResponseDTO> updateBoard(@PathVariable Long id,
                                                        @Validated @RequestBody BoardUpdateDTO dto) {
        return boardService.getBoardById(id)
                .map(board -> {
                    board.setName(dto.getName());
                    Board updated = boardService.saveBoard(board);
                    return ResponseEntity.ok(BoardMapper.toDTO(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
