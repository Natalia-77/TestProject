package program.controllers;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import program.dto.CatItemDto;
import program.entities.Cats;
import program.mapper.CatsMapper;
import program.repositories.CatsRepository;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cats")
public class CatsController {

    private final CatsRepository repository;
    private final CatsMapper catsMapper;


    @GetMapping("/list")
    public List<CatItemDto> index() {

        List<CatItemDto> cats= catsMapper.CatsList(repository.findAll());
        return cats;
    }

    @GetMapping(value = "/colour/{name}")
    public List<CatItemDto> getByColour(@PathVariable String name) {
        List<Cats> result =repository.findByColour(name);
        return catsMapper.CatsList(result);
    }

    @GetMapping("/character/{name}")
    public List<CatItemDto> getByCharacter(@PathVariable String name) {
        List<Cats> result =repository.findByCharacter(name);
        return catsMapper.CatsList(result);
    }
}
