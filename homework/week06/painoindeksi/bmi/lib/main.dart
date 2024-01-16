import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text("Painoindeksi")),
        body: const BmiUi(),
      ),
    );
  }
}

class BmiUi extends StatefulWidget {
  const BmiUi({super.key});

  @override
  State<BmiUi> createState() => _BmiUiState();
}

class _BmiUiState extends State<BmiUi> {
  String weight = "";
  String height = "";
  String bmi = "";

  void calculateBmi() {
    double weightDouble = double.parse(weight);
    double heightDouble = double.parse(height) / 100;
    double bmiDouble = weightDouble / (heightDouble * heightDouble);
    setState(() {
      bmi = bmiDouble.toStringAsFixed(2);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(children: [
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: TextField(
            onChanged: (value) => weight = value,
            decoration: const InputDecoration(labelText: "Paino"),
            keyboardType: TextInputType.number),
      ),
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: TextField(
            onChanged: (value) => height = value,
            decoration: const InputDecoration(labelText: "Pituus (cm)"),
            keyboardType: TextInputType.number),
      ),
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: ElevatedButton(
            onPressed: calculateBmi, child: const Text("Laske painoindeksi")),
      ),
      Padding(
        padding: const EdgeInsets.all(8.0),
        child: Text("Bmi: $bmi"),
      ),
    ]));
  }
}
