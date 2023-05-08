import CategoryRootItem from "@components/CategoryRootItem";
import { render } from "@testing-library/react";
describe("<CategoryRootItem />", () => {
  it("renders CategoryRootItem", () => {
    const { getByText } = render(<CategoryRootItem />);

    expect(getByText("CategoryRootItem")).toBeInTheDocument();
  });
});
