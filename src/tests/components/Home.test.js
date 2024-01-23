
import { Home } from './../../components/Home';
import { shallow } from 'enzyme';

describe('Pruebas en <Home />', () => {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
