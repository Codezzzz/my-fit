async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen({
      onUnhandledRequest: (req) => {
        if (req.url.origin !== "http://localhost:3000") {
          return;
        }
      },
    });
  } else {
    const { worker } = await import("./browser");
    worker.start({
      onUnhandledRequest: (req) => {
        if (req.url.origin !== "http://localhost:3000") {
          return;
        }
      },
    });
  }
}

export { initMocks };
