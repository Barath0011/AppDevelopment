package com.example.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Item;
import com.example.demo.Repository.ItemRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/get")
    public Iterable<Item> getVotes() {
        return itemRepository.findAll();
    }

    @PostMapping("/post")
    public void updateVotes(@RequestBody Item votes) {
        itemRepository.save(votes);
    }

    @PostMapping("/reset")
    public void resetVotes() {
        itemRepository.deleteAll();
    }
}