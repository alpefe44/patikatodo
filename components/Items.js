import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Items = ({ item }) => {
    const [onClick, setOnClick] = useState(false);

    function Delete(item) {
        const indexToRemove = todo.indexOf(item);
        if (indexToRemove !== -1) {
            const newTodo = todo.slice(0, indexToRemove).concat(todo.slice(indexToRemove + 1));
            setTodo(newTodo);
        }
    }
    return (
        <>
            <TouchableOpacity
                onPress={() => setOnClick(!onClick)}
                onLongPress={() => Delete(item)}
                style={{ width: '90%', backgroundColor: onClick ? 'white' : 'green', marginHorizontal: 5, padding: 8, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ fontWeight: 'bold', textDecorationLine: onClick ? 'line-through' : 'none' }}>{item}</Text>
            </TouchableOpacity>
        </>
    )
}

export default Items