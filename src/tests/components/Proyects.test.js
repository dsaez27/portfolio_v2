
import { shallow } from 'enzyme';
import { projects } from './../../components/projects';
describe('Pruebas en <projects />', () => {
    test('debe de funcionar correctamente', () => {
        const wrapper = shallow(<projects />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
