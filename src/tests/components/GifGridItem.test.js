import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {

    test('should show component correctly', () => {


        const title = 'Titulo';
        const url = 'https://localhost:3000/test.png';

        const wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot();

    })


})