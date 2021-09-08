package com.example.practice01

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        /*
           button.setOnClickListener(object : View.OnClickListener{
              override fun onClick(p0: View?){
                    //to do...
              }

         */

        // 1. Kotlin Interface가 아닌 Java Interface
        // 2. 그 인터페이스는 딱 하나의 메소드만 가져온다.

        /*
            button.setOnClickListener{
                //to do...
            ?
         */


    }
}