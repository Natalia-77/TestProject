package program.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import program.entities.Cats;

import java.util.List;

@Repository
public interface CatsRepository extends JpaRepository<Cats,Integer> {
    List<Cats> findByName(String name);
    List<Cats> findByColour(String colour);
    List<Cats> findByCharacter(String character);
}
