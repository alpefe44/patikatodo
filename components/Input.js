import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = () => {

    
    const [text, setText] = useState("");

    function Kaydet() {
        setTodo([...todo, text])
    }



    return (
        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', padding: 15, alignSelf: 'center', backgroundColor: 'white', marginBottom: 5, borderRadius: 20 }}>
            <View style={{ width: '100%', gap: 10 }}>
                <TextInput value={text} onChangeText={(text) => setText(text)} placeholder='Yapılacak...' style={{ borderBottomWidth: .8 }}></TextInput>
                <Button color={"orange"} title='Kaydet' onPress={Kaydet} ></Button>
            </View>
        </View>
    )
}

export default Input