import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import {
  createMemoryRouter,
  RouterProvider,
  MemoryRouter,
} from "react-router-dom";
import {routes} from '../../router'

describe("Navbar", () => {

  it("Renders onto the DOM", () => {
    render(<Navbar />, {wrapper: MemoryRouter});
  });

  it("Properly displays all necessary text", () => {
    render(<Navbar />, {wrapper: MemoryRouter});
    expect(screen.getByText("RSS Feed")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("Routes properly", () => {
    //Arrange
    const router = createMemoryRouter(routes, {initialEntries: ['/']})
    render(<RouterProvider router={router} />)
    
    expect(router.state.location.pathname).toEqual("/")
    fireEvent.click(screen.getByText("Settings"))
    expect(router.state.location.pathname).toEqual("/settings")
    fireEvent.click(screen.getByText("RSS Feed"))
    expect(router.state.location.pathname).toEqual("/")
    fireEvent.click(screen.getByText("Search"))
    expect(router.state.location.pathname).toEqual("/search")
  })
  
});
