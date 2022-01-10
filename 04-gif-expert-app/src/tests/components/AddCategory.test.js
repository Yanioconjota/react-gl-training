import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
