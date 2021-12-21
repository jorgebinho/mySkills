import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity
} from 'react-native';

import { Button } from '../components/Button';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
      setMySkills(oldState => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, User</Text> 

      <TextInput 
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

    <Button/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
      </Text>

    {  
    mySkills.map(skill => (
     
      ))
    }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    }
})