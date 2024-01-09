import 'package:cli/person.dart' as person;
import 'package:cli/student.dart' as student;

void main(List<String> arguments) {
  var p = person.Person('John', 27, 80, 180);
  var s = student.Student('Jane', 25, 60, 170, 123456, 100);

  var persons = <person.Person>[];
  persons.add(p);
  persons.add(s);

  persons.forEach((p) => print(p));
}
