import { SelectableText } from '@dumpster-fire-code/react-native-pressable-selectable-text';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <SelectableText
        onPress={() => {
          alert('pressed');
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut dui
        ex. Quisque vulputate massa euismod purus pretium, a pellentesque dolor
        venenatis. Mauris egestas lorem purus, vitae vulputate turpis congue ac.
        Ut maximus tellus vel massa aliquet ultrices. Vivamus euismod justo nec
        pharetra finibus. Vestibulum vulputate ipsum et risus tincidunt ornare.
        Nullam ultricies auctor ipsum. Pellentesque iaculis molestie dui, ac
        porttitor mauris sagittis ut.
      </SelectableText>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

// eslint-disable-next-line import/no-default-export
export default App;
