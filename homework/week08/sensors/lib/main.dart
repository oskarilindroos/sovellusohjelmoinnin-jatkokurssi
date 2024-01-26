import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';
import 'package:location/location.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  double x = 0.0;
  double y = 0.0;
  double z = 0.0;

  double latitude = 0.0;
  double longitude = 0.0;

  void getLocation() async {
    var location = Location();

    bool _serviceEnabled;
    PermissionStatus _permissionGranted;
    LocationData _locationData;

    _serviceEnabled = await location.serviceEnabled();
    if (!_serviceEnabled) {
      _serviceEnabled = await location.requestService();
      if (!_serviceEnabled) {
        return;
      }
    }

    _permissionGranted = await location.hasPermission();
    if (_permissionGranted == PermissionStatus.denied) {
      _permissionGranted = await location.requestPermission();
      if (_permissionGranted != PermissionStatus.granted) {
        return;
      }
    }

    _locationData = await location.getLocation();

    setState(() {
      latitude = _locationData.latitude!;
      longitude = _locationData.longitude!;
    });
  }

  void getAccelerometer() {
    accelerometerEventStream().listen((event) {
      setState(() {
        x = event.x;
        y = event.y;
        z = event.z;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Latitude: $latitude'),
            Text('Longitude: $longitude'),
            ElevatedButton(
                onPressed: getLocation, child: const Text('Get Location')),
            Text('x: $x'),
            Text('y: $y'),
            Text('z: $z'),
            ElevatedButton(
                onPressed: getAccelerometer,
                child: const Text('Get Accelerometer')),
          ],
        ),
      ),
    ));
  }
}
