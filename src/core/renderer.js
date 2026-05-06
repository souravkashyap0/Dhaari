export function render(component) {
  const app = document.getElementById("app");

  app.innerHTML = component();
}