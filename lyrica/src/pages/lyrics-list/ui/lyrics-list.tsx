import { Container } from "@/components/container";
import { LyricDetailNavigationProp } from "@/entities/routes";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

export const LyricsList: React.FC = () => {
  const { navigate } = useNavigation<LyricDetailNavigationProp>();

  const navigateToDetail = useCallback(() => {
    navigate("LyricDetail");
  }, [navigate]);

  return (
    <Container>
      <Text>LyricsList Page</Text>
      <Button mode="outlined" onPress={navigateToDetail}>
        Press me
      </Button>
    </Container>
  );
};
