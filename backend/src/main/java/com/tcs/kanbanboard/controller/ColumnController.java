package com.tcs.kanbanboard.controller;

import com.tcs.kanbanboard.dto.column.ColumnCreateDTO;
import com.tcs.kanbanboard.dto.column.ColumnResponseDTO;
import com.tcs.kanbanboard.dto.column.ColumnUpdateDTO;
import com.tcs.kanbanboard.entity.Board;
import com.tcs.kanbanboard.entity.ColumnEntity;
import com.tcs.kanbanboard.mapper.ColumnMapper;
import com.tcs.kanbanboard.service.BoardService;
import com.tcs.kanbanboard.service.ColumnService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/columns")
public class ColumnController {

    private final ColumnService columnService;
    private final BoardService boardService;

    public ColumnController(ColumnService columnService, BoardService boardService) {
        this.columnService = columnService;
        this.boardService = boardService;
    }

    // GET /api/columns?boardId
    @GetMapping
    public ResponseEntity<List<ColumnResponseDTO>> getColumnsByBoardId(@RequestParam Long boardId) {
        List<ColumnEntity> columns = columnService.getColumnsByBoardId(boardId);
        List<ColumnResponseDTO> response = columns.stream()
                .map(ColumnMapper::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    // GET /api/columns/{id}
    @GetMapping("/{id}")
    public ResponseEntity<ColumnResponseDTO> getColumnById(@PathVariable Long id) {
        Optional<ColumnEntity> columnOpt = columnService.getColumnById(id);
        return columnOpt.map(column ->
                ResponseEntity.ok(ColumnMapper.toDTO(column))
        ).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST /api/columns
    @PostMapping
    public ResponseEntity<ColumnResponseDTO> createColumn(@Valid @RequestBody ColumnCreateDTO dto) {
        Optional<Board> boardOpt = boardService.getBoardById(dto.getBoardId());
        if (boardOpt.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        ColumnEntity column = ColumnMapper.toEntity(dto, boardOpt.get());
        ColumnEntity saved = columnService.saveColumn(column);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(saved.getId())
                .toUri();

        return ResponseEntity.created(location).body(ColumnMapper.toDTO(saved));
    }

    // DELETE /api/columns/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteColumn(@PathVariable Long id) {
        Optional<ColumnEntity> columnOpt = columnService.getColumnById(id);
        if (columnOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        columnService.deleteColumn(id);
        return ResponseEntity.noContent().build();
    }

    // PUT /api/columns/{id}
    @PutMapping("/{id}")
    public ResponseEntity<ColumnResponseDTO> updateColumn(
            @PathVariable Long id,
            @RequestParam Long boardId,
            @Valid @RequestBody ColumnUpdateDTO dto
    ) {
        Optional<ColumnEntity> existingOpt = columnService.getColumnById(id);
        Optional<Board> boardOpt = boardService.getBoardById(boardId);

        if (existingOpt.isEmpty() || boardOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        ColumnEntity column = existingOpt.get();
        column.setName(dto.getName());
        column.setPosition(dto.getPosition());
        column.setBoard(boardOpt.get());

        ColumnEntity updated = columnService.saveColumn(column);
        return ResponseEntity.ok(ColumnMapper.toDTO(updated));
    }
}
