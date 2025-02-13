import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data as initialData } from '@/data/data';

export default function Index() {
  const [data, setData] = useState([...initialData].sort((a, b) => b.id - a.id));
  const [text, setText] = useState('');

  const addData = () => {
    if (text.trim()) {
      const newId = data.length > 0 ? data[0].id + 1 : 1;
      setData([{ id: newId, title: text, completed: false }, ...data]);
      setText('');
    }
  };

  const toggleData = (id) => {
    setData(data.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const removeData = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addData} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

