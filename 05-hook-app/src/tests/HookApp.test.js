import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import HookApp from '../HookApp';

describe('Pruebas con HookApp', () => {
  test('el componente debe mostrarse correctamente', () => {
    const wrapper = shallow(<HookApp/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});
