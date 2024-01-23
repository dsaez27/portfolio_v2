import { shallow } from "enzyme";
import { About } from "./../../components/About";

describe("Pruebas en <About />", () => {
  test("Debe de mostrarse correctamente", () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
