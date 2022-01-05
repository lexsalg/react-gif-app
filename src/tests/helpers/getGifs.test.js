import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGift Fetch', () => {

    test('should get 10 elements', async () => {

        const gifs = await getGifs('IronMan');
        expect(gifs.length).toBe(10);

    })

    test('should get 0 elements', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })


})
