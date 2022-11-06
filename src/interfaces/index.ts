import { TouchableOpacityProps } from "react-native";
import { PositionProps } from "../utils/positions";

export interface IPositionChoice {
  onChangePosition: (position: PositionProps) => void;
  positionSelected: PositionProps;
}

export interface IPosition extends TouchableOpacityProps {
  title: string;
  isSelected: boolean;
}

export interface IButton extends TouchableOpacityProps {
  title: string;
}

export interface IHeader {
  position: PositionProps;
}

export interface IFootbalField {
  data: PositionProps;
};