import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas con GifExpertApp', () => {
  test('el componente debe de mostrarse correctament', () => {
    const wrapper = shallow(<GifExpertApp defaultCategories={'Far Cry 6'} />);
    expect(wrapper).toMatchSnapshot();
  });
});