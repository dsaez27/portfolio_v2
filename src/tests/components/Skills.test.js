import { shallow } from 'enzyme';
import { Skills } from '../../components/Skills';

describe("Pruebas en <skills />", () => {
  test("Debe de mostrarse correctamente", () => {
    const wrapper = shallow(<Skills />);
    expect(wrapper).toMatchSnapshot();
  });
});
