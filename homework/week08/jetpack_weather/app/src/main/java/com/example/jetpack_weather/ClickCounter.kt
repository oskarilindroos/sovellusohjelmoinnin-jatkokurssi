package com.example.jetpack_weather

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment

@Composable
fun ClickCounter() {
    var counter = remember { mutableStateOf(0) }

   Column (horizontalAlignment = Alignment.CenterHorizontally) {
       Text(text = counter.value.toString())
       Button(onClick = { counter.value++  }) {
           Text(text = "Counter++")
       }
   }
}