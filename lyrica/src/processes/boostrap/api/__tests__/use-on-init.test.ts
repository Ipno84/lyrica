import { act, renderHook, waitFor } from "@testing-library/react-native";
import * as SplashScreen from "expo-splash-screen";
import { useOnInit } from "../use-on-init";

// mock di expo-splash-screen
jest.mock("expo-splash-screen", () => ({
  hide: jest.fn(),
}));

describe("useOnInit", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("ritorna false inizialmente", async () => {
    const { result } = renderHook(() => useOnInit());
    await waitFor(() => {
      expect(result.current).toBe(false);
    });
  });

  it("diventa true e chiama SplashScreen.hide() una volta dopo setup", async () => {
    const { result } = renderHook(() => useOnInit());

    // Simula il completamento dell’effetto async (appSetup)
    await act(async () => {
      jest.runAllTimers(); // fa scattare il finally => setAppReady(true)
      await Promise.resolve(); // lascia aggiornare lo stato
    });

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
    expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
  });

  it("non richiama hide se appReady è già true", async () => {
    const { result, rerender } = renderHook(() => useOnInit());

    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });

    rerender({});

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
    expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
  });
});
