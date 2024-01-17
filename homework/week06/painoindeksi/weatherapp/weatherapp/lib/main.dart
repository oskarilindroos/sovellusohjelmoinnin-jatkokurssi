import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Weather App'),
          backgroundColor: Colors.blueGrey[900],
          foregroundColor: Colors.white,
        ),
        body: const Column(
          children: <Widget>[
            Expanded(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text('Tampere', style: TextStyle(fontSize: 40)),
                    Text('20°C', style: TextStyle(fontSize: 70)),
                    Text('Sunny', style: TextStyle(fontSize: 20)),
                  ],
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(24.0),
              child: TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Enter a city name',
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
