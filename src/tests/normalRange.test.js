import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./../App";
import { getData } from "./../services/api";

describe("RANGE SLIDER TESTING", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  it("Should show Normal Range title", () => {
    render(<App />);
    const title = screen.getByText(/NORMAL RANGE/i);
    expect(title).toBeInTheDocument();
  });

  it("Should call an API", () => {
    const testData = { max: 100, min: 1 };
    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);
    return getData().then((data) => {
      expect(data).toEqual(testData);
    });
  });
});
