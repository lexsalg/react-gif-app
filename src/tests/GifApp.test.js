import { shallow } from 'enzyme'
import { GifApp } from './../GifApp';


describe('Pruebas en <GifApp />', () => {

    test('should be displayed correctly', () => {

        const wrapper = shallow(<GifApp />);
        expect(wrapper).toMatchSnapshot();

    })


    test('debe de mostrar una lista de categorías', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })


})
