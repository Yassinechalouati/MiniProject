package com.tcs.kanbanboard.service;

import com.tcs.kanbanboard.entity.ColumnEntity;
import com.tcs.kanbanboard.entity.Item;
import com.tcs.kanbanboard.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ItemService {

    private final ItemRepository itemRepository;
    private final ColumnService columnService;

    public ItemService(ItemRepository itemRepository, ColumnService columnService) {
        this.itemRepository = itemRepository;
        this.columnService = columnService;
    }

    public List<Item> getItemsByColumnId(Long columnId) {
        return itemRepository.findByColumnId(columnId);
    }

    public Optional<Item> getItemById(Long itemId) {
        return itemRepository.findById(itemId);
    }

    public Item createItem(Long columnId, String title, String description, int position) {
        ColumnEntity column;
        try {
            column = columnService.getColumnById(columnId).get();
        } catch (NoSuchElementException e) {
            throw new IllegalArgumentException("Column not found with id: " + columnId);
        }

        Item item = new Item();
        item.setColumn(column);
        item.setTitle(title);
        item.setDescription(description);
        item.setPosition(position);

        return itemRepository.save(item);
    }

    // Save or update
    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long itemId) {
        itemRepository.deleteById(itemId);
    }
}
