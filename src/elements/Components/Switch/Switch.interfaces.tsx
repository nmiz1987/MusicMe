export interface ISwitchProps {
  isDisable?: boolean;
  onPressHandler?: () => void;
  offLabel: string | JSX.Element;
  onLabel: string | JSX.Element;
  isOn: boolean;
}
