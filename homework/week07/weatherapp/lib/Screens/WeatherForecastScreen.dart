import 'package:flutter/material.dart';

class WeatherForecastScreen extends StatelessWidget {
  const WeatherForecastScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView(
      children: <Widget>[
        ListTile(
          leading: Icon(Icons.wb_sunny),
          title: Text('Monday'),
          subtitle: Text('Temperature: 10'),
        ),
        ListTile(
          leading: Icon(Icons.wb_cloudy),
          title: Text('Tuesday'),
          subtitle: Text('Temperature: 15'),
        ),
        ListTile(
          leading: Icon(Icons.wb_sunny),
          title: Text('Wednesday'),
          subtitle: Text('Temperature: 20'),
        ),
        ListTile(
          leading: Icon(Icons.wb_cloudy),
          title: Text('Thursday'),
          subtitle: Text('Temperature: 25'),
        ),
        ListTile(
          leading: Icon(Icons.wb_cloudy),
          title: Text('Friday'),
          subtitle: Text('Temperature: 30'),
        ),
        ListTile(
          leading: Icon(Icons.wb_sunny),
          title: Text('Saturday'),
          subtitle: Text('Temperature: 35'),
        ),
        ListTile(
          leading: Icon(Icons.wb_sunny),
          title: Text('Sunday'),
          subtitle: Text('Temperature: 40'),
        ),
      ],
    ));
  }
}
