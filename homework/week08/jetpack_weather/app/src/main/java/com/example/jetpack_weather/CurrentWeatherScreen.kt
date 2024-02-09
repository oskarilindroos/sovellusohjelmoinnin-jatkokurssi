package com.example.jetpack_weather

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController

@Composable
fun CurrentWeatherScreen (navController: NavHostController) {
    Column ( horizontalAlignment = Alignment.CenterHorizontally, modifier = Modifier.padding(16.dp)) {
        Header(text = "Tampere", backgroundColor = Color(Color.Red.value))
        Spacer(modifier = Modifier.weight(1f))
        Row (verticalAlignment = Alignment.CenterVertically, modifier = Modifier.padding(16.dp)) {
            Image(painter = painterResource(id = R.drawable.sunny), contentDescription = "Sunny icon", modifier = Modifier.size(64.dp))
            Spacer(modifier = Modifier.size(16.dp))
            Text (text = "12°C", fontSize = 42.sp, textAlign = TextAlign.Center)
        }
        Text(text = "Sunny", fontSize = 24.sp, textAlign = TextAlign.Center)
        Text(text = "Wind: 2m/s, North-East")
        Spacer(modifier = Modifier.weight(1f))
        Button(onClick = { navController.navigate("weather_forecast") }, modifier = Modifier.fillMaxWidth() ) {
            Text(text = stringResource(id = R.string.forecast))
        }
    }
}
