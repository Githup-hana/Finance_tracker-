import { routes } from "./routes";

async function updateAppContent(appEl: HTMLDivElement) {
  const currentPath = window.location.pathname;

  let content = "";

  const route = routes.find((route) => route.path === currentPath);

  content = await route!.page();

  appEl!.innerHTML = content;
}

function initRouter(appEl: HTMLDivElement) {
  window.addEventListener("load", () => {
    updateAppContent(appEl!);
  });
}

export { updateAppContent, initRouter };
