import 'dart:collection';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class MainWeatherScreen extends StatefulWidget {
  const MainWeatherScreen({super.key});

  @override
  State<MainWeatherScreen> createState() => _MainWeatherScreenState();
}

class _MainWeatherScreenState extends State<MainWeatherScreen> {
  String city = 'Tampere';
  double temperature = 0;
  String description = '';

  @override
  void initState() {
    super.initState();
    fetchWeather(city);
  }

  void fetchWeather(String city) async {
    Uri uri = Uri(
      scheme: 'https',
      host: 'api.openweathermap.org',
      path: '/data/2.5/weather',
      queryParameters: {
        'q': city,
        'appid': 'appid',
        'units': 'metric',
      },
    );

    var response = await http.get(uri);
    if (response.statusCode == 200) {
      var weatherData = jsonDecode(response.body);
      setState(() {
        temperature = weatherData['main']['temp'];
        description = weatherData['weather'][0]['description'];
        this.city = weatherData['name'];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          children: <Widget>[
            Expanded(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(city, style: TextStyle(fontSize: 40)),
                    Text(temperature.toString(),
                        style: TextStyle(fontSize: 70)),
                    Text(description, style: TextStyle(fontSize: 20)),
                  ],
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(24.0),
              child: TextField(
                onSubmitted: (value) {
                  fetchWeather(value);
                },
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
