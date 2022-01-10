import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con helper getGifs fetch', () => {

  const limit = 12;
  const offset = 0;
  test('debe de traer 12 elementos', async() => {
    const gifs = await getGifs('One punch', limit, offset);
    expect(gifs.length).toBe(12);
  });

  test("debe de traer 0 elementos", async () => {
    const gifs = await getGifs("", limit, offset);
    expect(gifs.length).toBe(0);
  });
});