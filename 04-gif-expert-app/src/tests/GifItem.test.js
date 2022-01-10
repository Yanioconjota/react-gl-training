import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import GifItem from "../components/GifItem";

describe('Pruebas en GifItem', () => {

  const title = 'Far Cry 6';
  const url = 'https://media2.giphy.com/media/GD4KjHydwWx5B4nI5d/giphy.gif?cid=2b0e052el89u4fas4gjcq1u5u972jk7n8qvv2nqyyq46q9ob&rid=giphy.gif&ct=g';
  const wrapper = shallow(<GifItem title={title} url={url} />);
  test('debe mostrar gifItem correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un párrafo con el title', () => {
    const h4 = wrapper.find('h4');
    expect(h4.text().trim()).toBe(title);
  });

  test('la imagen debe tener url y alt igual que los props', () => {
    const img = wrapper.find('img');
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test('debe tener la clases animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop("className");
    //las dos formas evalúan el contenido de una prop
    expect(className.indexOf("animate__fadeIn")).not.toBe(-1);
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});