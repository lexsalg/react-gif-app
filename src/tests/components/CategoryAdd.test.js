import { shallow } from 'enzyme';

import { CategoryAdd } from '../../components/CategoryAdd'

describe('Pruebas en <CategoryAdd />', () => {

    // const setCategories = () => { };
    const setCategories = jest.fn();

    let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
    })


    test('should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('should changed text box', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    })


    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled();

    })


    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';

        const preventDefault = () => { };

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');

    })



})
