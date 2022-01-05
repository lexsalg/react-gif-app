import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {


    const title = 'Titulo';
    const url = 'https://localhost:3000/test.png';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('should show component correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('debe de tener la imagen igual a la url y alt de los props', () => {

        const img = wrapper.find('img');
        // console.log(img.html());
        // console.log(img.props());

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
        expect(className.includes('animate__fadeIn')).not.toBe(false);

    })






})