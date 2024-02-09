package com.example.jetpack_weather

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.jetpack_weather.ui.theme.Jetpack_weatherTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Jetpack_weatherTheme {
                // A surface container using the 'background' color from the theme
                Surface(modifier = Modifier.fillMaxSize()) {
                    App()
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun App() {
    val navController = rememberNavController();

    NavHost(navController = navController, startDestination = "current_weather") {
        composable("current_weather") {
            CurrentWeatherScreen(navController)
        }
        composable("weather_forecast") {
            WeatherForecastScreen(navController)
        }
    }
}