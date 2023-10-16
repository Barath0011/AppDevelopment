package com.example.demo.Repository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.Model.Item;

public interface ItemRepository extends CrudRepository<Item, Long> {
}