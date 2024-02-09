package com.example.jetpack_weather

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController

@Composable
fun WeatherForecastScreen (navController: NavHostController) {
    val weatherItems = listOf(
        "Monday" to "12°C",
        "Tuesday" to "13°C",
        "Wednesday" to "14°C",
        "Thursday" to "15°C",
        "Friday" to "16°C",
        "Saturday" to "17°C",
        "Sunday" to "18°C"
    )
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp), horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Header(text = "Tampere", backgroundColor = Color(Color.Blue.value))
        LazyColumn(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f), horizontalAlignment = Alignment.CenterHorizontally
        ) {
            items(weatherItems.size) { index ->
                val item = weatherItems[index]
                Text(text = "${item.first} - ${item.second}", modifier = Modifier.padding(8.dp))
            }
        }
        Spacer(
            modifier = Modifier
                .height(100.dp)
                .fillMaxWidth()
                .weight(1f)
        )
        ClickCounter()
        Button(
            onClick = { navController.navigate("current_weather") },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(text = stringResource(id = R.string.back))
        }
    }
}