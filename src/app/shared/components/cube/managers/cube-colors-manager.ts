import { CubeColors } from "../models/cube-colors";

export class CubeColorsManager {
    private frontColor: string;
    private backColor: string;
    private leftColor: string;
    private rightColor: string;
    private topColor: string;
    private bottomColor: string;

    constructor(colors: CubeColors) {
        this.frontColor = colors.front || "";
        this.backColor = colors.back || "";
        this.leftColor = colors.left || "";
        this.rightColor = colors.right || "";
        this.topColor = colors.top || "";
        this.bottomColor = colors.bottom || "";
    }

    get front(): string {
        return this.frontColor;
    }

    get back(): string {
        return this.backColor;
    }

    get left(): string {
        return this.leftColor;
    }

    get right(): string {
        return this.rightColor;
    }

    get top(): string {
        return this.topColor;
    }

    get bottom(): string {
        return this.bottomColor;
    }
    
}