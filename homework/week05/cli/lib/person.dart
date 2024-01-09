class Person {
  String name;
  int age;
  int weight;
  int height;

  Person(this.name, this.age, [this.weight = 0, this.height = 0]);

  Person.verySmallPerson(this.age,
      [this.weight = 0, this.height = 0, this.name = '']) {
    height = 50;
  }

  void setAge(int age) {
    this.age = age;
  }

  void setWeight(int weight) {
    this.weight = weight;
  }

  void setHeight(int height) {
    this.height = height;
  }

  @override
  String toString() {
    return 'Name: $name, Age: $age, Weight: $weight, Height: $height';
  }
}
