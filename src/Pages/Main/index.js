import * as React from "react";

import { Container, Text, Button, ButtonText } from "../style";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>Primeira página</Text>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate("Second")}
      >
        <Button>
          <ButtonText>Proxima</ButtonText>
        </Button>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    width: "100%",
    paddingTop: 100,
  },
});
