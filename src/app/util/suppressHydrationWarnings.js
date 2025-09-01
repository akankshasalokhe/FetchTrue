// suppressHydrationWarnings.js
if (process.env.NODE_ENV === "development") {
  const originalError = console.error;

  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: Expected server HTML to contain a matching")
    ) {
      // ignore hydration mismatch warnings caused by extensions
      return;
    }
    originalError(...args);
  };
}
