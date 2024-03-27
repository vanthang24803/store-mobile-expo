/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
