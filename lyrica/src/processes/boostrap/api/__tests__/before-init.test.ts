import { beforeInit } from "../before-init";
import * as SplashScreen from "expo-splash-screen";

describe("beforeInit", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Call setOptions with { fade: true } and preventAutoHideAsync", async () => {
    beforeInit();

    expect(SplashScreen.setOptions).toHaveBeenCalledTimes(1);
    expect(SplashScreen.setOptions).toHaveBeenCalledWith({ fade: true });

    expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalledTimes(1);

    // optional: let any microtasks complete
    await Promise.resolve();
  });

  it("it's idempotent (can be called multiple times)", () => {
    beforeInit();
    beforeInit();
    expect(SplashScreen.setOptions).toHaveBeenCalledTimes(2);
    expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalledTimes(2);
  });
});
