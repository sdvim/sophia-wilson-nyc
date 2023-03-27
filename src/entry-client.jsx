import { mount, StartClient } from "solid-start/entry-client";

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/index.html";
      });
    }
  })
}

mount(() => <StartClient />, document);
