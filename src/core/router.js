import { render } from "./renderer";
import Home from "../pages/home";
import About from "../pages/about";

export class Router {
  constructor() {
    this.routes = {
      "/": Home,
      "/about": About,
    };

    // Handle browser back/forward buttons
    window.addEventListener("popstate", () => {
      this.resolve();
    });

    // Handle navigation clicks
    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        //e.preventDefault();

        const path = e.target.getAttribute("href");

        this.navigate(path);
      }
    });
  }

  navigate(path) {
    history.pushState({}, "", path);

    this.resolve();
  }

  resolve() {
    const path = window.location.pathname;

    const component = this.routes[path] || this.routes["/"];

    render(component);
  }
}