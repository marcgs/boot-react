package react.model;

import java.time.LocalDate;

/**
 * Created by tzhgoma6 on 12.04.17.
 */
public class Product {
  private String name;
  private int amount;
  private double price;

  public Product(String name, int amount, double price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  public String getName() {
    return name;
  }

  public int getAmount() {
    return amount;
  }

  public double getPrice() {
    return price;
  }
}
