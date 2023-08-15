import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Content,
  Description,
  Divider,
  Round,
  RoundTypeProps,
  TextTime,
} from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  description: string;
  type: RoundTypeProps;
};

export function MealItemList({ description, time, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <TextTime>{time}</TextTime>
        <Divider />
        <Description>{description}</Description>
      </Content>

      <Round type={type} />
    </Container>
  );
}
