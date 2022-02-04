import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

//como el useFetch ya fue testeado mockeamos su implementción para esperar que retorne información ficticia
jest.mock('../../../hooks/useFetch');

jest.mock("../../../hooks/useCounter");

describe('debe mostrar el componente correctamente', () => {
  
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {},
    });
  });
  
  test('debe traer la info por defecto', () => {
    //debe mockearse la llamada al useFecth para que no rompa por el jest.mock. En este caso nos interesa que devuelva la info por defecto porque es cuando se arma el componente
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar la info', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Homero Thompson',
        quote: 'Creo que le habla a usted'
      }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    console.log(wrapper.html());
    //Buscamos que no exista ningún elemento con la clase alert ya que solo se muestra cuando no carga la info
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('p').text().trim()).toBe('Creo que le habla a usted');
    expect(wrapper.find('footer').text().trim()).toBe('Homero Thompson');
  });
  
  
});
