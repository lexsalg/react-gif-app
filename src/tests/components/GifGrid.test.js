import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch';

    test('should be displayed correctly', () => {

        useFetchGifs.mockReturnValue({ data: [], loading: true });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })


    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const data = [{ id: '11', url: 'https://localhost/123.jpg', title: 'titulo' }];

        useFetchGifs.mockReturnValue({ data, loading: false });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(data.length);


    })



})
