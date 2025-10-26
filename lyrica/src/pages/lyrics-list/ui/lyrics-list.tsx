import { Container } from "@/components/container";
import { type RootNavigationProp, RouteNames } from "@/entities/routes/model";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

export const LyricsList: React.FC = () => {
  const { navigate } = useNavigation<RootNavigationProp>();

  const navigateToDetail = useCallback(() => {
    navigate(RouteNames.LyricDetail, { id: "example-id" });
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
