import "styled-components";
import {
	boxShadow,
	breakpoint,
	color,
	components,
	fontWeight,
	height,
	mixins,
	zIndex,
} from "./theme";

declare module "styled-components" {
	export interface DefaultTheme {
		boxShadow: typeof boxShadow;
		breakpoint: typeof breakpoint;
		color: typeof color;
		components: typeof components;
		fontWeight: typeof fontWeight;
		height: typeof height;
		mixins: typeof mixins;
		zIndex: typeof zIndex;
	}
}