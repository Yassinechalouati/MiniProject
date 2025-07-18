package com.tcs.kanbanboard.controller;

import com.tcs.kanbanboard.dto.ItemCreateDTO;
import com.tcs.kanbanboard.dto.ItemResponseDTO;
import com.tcs.kanbanboard.dto.ItemUpdateDTO;
import com.tcs.kanbanboard.entity.Item;
import com.tcs.kanbanboard.mapper.ItemMapper;
import com.tcs.kanbanboard.service.ItemService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    // GET all items by column ID
    @GetMapping("/column/{columnId}")
    public ResponseEntity<List<ItemResponseDTO>> getItemsByColumnId(@PathVariable Long columnId) {
        List<ItemResponseDTO> items = itemService.getItemsByColumnId(columnId).stream()
                .map(ItemMapper::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(items);
    }

    // GET item by ID
    @GetMapping("/{id}")
    public ResponseEntity<ItemResponseDTO> getItemById(@PathVariable Long id) {
        return itemService.getItemById(id)
                .map(ItemMapper::toDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST
    @PostMapping
    public ResponseEntity<ItemResponseDTO> createItem(@Valid @RequestBody ItemCreateDTO dto) {
        Item item = itemService.createItem(dto.getColumnId(), dto.getTitle(), dto.getDescription(), dto.getPosition());
        ItemResponseDTO response = ItemMapper.toDTO(item);
        return ResponseEntity.created(URI.create("/api/items/" + response.getId())).body(response);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }

    // PUT update item
    @PutMapping("/{id}")
    public ResponseEntity<ItemResponseDTO> updateItem(
            @PathVariable Long id,
            @Valid @RequestBody ItemUpdateDTO dto) {

        return itemService.getItemById(id)
                .map(item -> {
                    item.setTitle(dto.getTitle());
                    item.setDescription(dto.getDescription());
                    item.setPosition(dto.getPosition());
                    Item updated = itemService.saveItem(item);
                    return ResponseEntity.ok(ItemMapper.toDTO(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
