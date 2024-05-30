import { CubeManagerImpl } from "../models/cube-manager-impl";
import { CubeColorsManager } from "./cube-colors-manager";
import { CubeFaceManager } from "./cube-face-manager";

export class CubeManager {
    private readonly colorManager: CubeColorsManager;
    private readonly faceManager: CubeFaceManager;

    constructor(cube?: CubeManagerImpl) {
        this.colorManager = cube?.colors || new CubeColorsManager({});
        this.faceManager = new CubeFaceManager();
    }

    get color(): CubeColorsManager {
        return this.colorManager;
    }

    get face(): CubeFaceManager {
        return this.faceManager;
    }
}