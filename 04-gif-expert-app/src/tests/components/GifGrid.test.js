import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
//Mock a la llamada al método useFetchGifs
jest.mock("../../hooks/useFetchGifs");
describe('pruebas con gifGrid', () => {
  const category = "Far Cry 6";
  test('El componente debe de mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan las imágenes useFetch', () => {
    const imgs = [
      {
        id: "0d1TtPiMfn8q68dhtU",
        title: "Danny Trejo Cooking Tacos",
        url: "https://localhost/cualquiercosa",
      },
      {
        id: "0d1TtPiMfn8q68dhts",
        title: "Danny Trejo Cooking Tacos again",
        url: "https://localhost/cualquiercosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false,
      limit: 12,
      offset: 0,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifItem").length).toBe(imgs.length);
  });
});