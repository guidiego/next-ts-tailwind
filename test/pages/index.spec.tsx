import React from "react";
import Index from "~/pages";
import { render, screen } from "@testing-library/react";
import { NextRouter } from "next/router";

describe("components/Index", () => {
  it("should render default", () => {
    render(<Index />);

    const el = screen.getByText("HomePage");
    expect(el).toHaveClass("flex p-6");
  });
});
