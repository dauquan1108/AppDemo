import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function TestHook() {
  const [cout, setcout] = useState(10);
  return (
    <View>
      <Text>{cout}</Text>
      <TouchableOpacity onPress={() => setcout(cout + 1)}>
        <Text>Quan</Text>
      </TouchableOpacity>
    </View>
  );
}
