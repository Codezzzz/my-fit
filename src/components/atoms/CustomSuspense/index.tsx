import { ComponentProps, Suspense } from "react";
import useMounted from "~/hooks/useMounted";

export default function CustomSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}
