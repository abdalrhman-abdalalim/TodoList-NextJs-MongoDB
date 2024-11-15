"use client";

import { ErrorProvider } from "../providers/error-provicer";
import { Button } from "@/components/ui/button";
import "./global-error.css";

export default function GlobalError({
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorProvider isError={true}>
      <html lang="en">
        <body>
          <h1>404</h1>
          <div className="cloak__wrapper">
            <div className="cloak__container">
              <div className="cloak"></div>
            </div>
          </div>
          <div className="info">
            <h2>We cannot find that page</h2>
            <p>
              We are fairly sure that page used to be here, but it seems to have
              gone missing. We apologize for the inconvenience.
            </p>
            <Button variant={"secondary"} onClick={() => location.reload()}>
              Reload
            </Button>
          </div>
        </body>
      </html>
    </ErrorProvider>
  );
}
