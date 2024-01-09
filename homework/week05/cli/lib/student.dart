import 'package:cli/person.dart';

class Student extends Person {
  int id;
  int creditPoints;

  Student(
      String name, int age, int weight, int height, this.id, this.creditPoints)
      : super(name, age, weight, height);

  @override
  String toString() {
    return 'Name: $name, Age: $age, Weight: $weight, Height: $height, ID: $id, Credit Points: $creditPoints';
  }
}
