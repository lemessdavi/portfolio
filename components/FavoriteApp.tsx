import BaseApp, { BaseAppProps } from "./BaseApp";

export interface FavoriteApp {
  icon: React.JSX.Element;
  title: string;
  iconSize: number;
  onPress?: VoidFunction;
}

interface FavoriteAppProps extends Omit<BaseAppProps, "children"> {
  title: string;
}

export default function FavoriteApp({
  icon,
  iconSize,
  onPress,
}: FavoriteAppProps) {
  return <BaseApp icon={icon} iconSize={iconSize} onPress={onPress} />;
}
