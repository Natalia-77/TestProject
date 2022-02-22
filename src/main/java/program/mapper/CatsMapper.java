package program.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import program.dto.CatItemDto;
import program.entities.Cats;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CatsMapper {

    @Mapping(source = "name", target = "name")
    @Mapping(source ="colour", target = "colour")
    @Mapping(source = "character", target = "character")
    List<CatItemDto> CatsList(List<Cats> cats);
    CatItemDto CatToCatItemDto (Cats cats);



}
