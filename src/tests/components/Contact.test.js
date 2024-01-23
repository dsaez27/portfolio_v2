import { mount } from 'enzyme';
import { Contact } from './../../components/Contact';
describe('Pruebas en <Contact />', () => {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(<Contact />);
        expect(wrapper).toMatchSnapshot();
    });
});
