package react.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import react.model.Product;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@RestController
public class SimpleResource {

  @RequestMapping("/api/simple")
  public List<String> resource() {
    return IntStream.generate(() -> new Random().nextInt(42))
      .limit(2 + new Random().nextInt(10))
      .mapToObj(Integer::toString)
      .collect(Collectors.toList());
  }

  @RequestMapping("/api/products")
  public List<Product> products() {
    return Stream.of(
      new Product("apple", 12, 2.0),
      new Product("pear", 4, 1.5),
      new Product("lamb", 6, 21.5))
      .collect(Collectors.toList());
  }
}
