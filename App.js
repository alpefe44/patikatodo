import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Items from './components/Items';

export default function App() {


  return (
    <View style={{ flex: 1 }}>

      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginHorizontal: 15, marginTop: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'orange' }}>Yapılacaklar</Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{todo.length}</Text>
      </View>

      <View style={{ flex: 1 }}>
        {
          todo.length > 0 ? todo.map((item) => {
            return (
              <Items handleDelete={Delete} item={item}></Items>
            )

          }) : null
        }
      </View>


    </View>
  );
}

