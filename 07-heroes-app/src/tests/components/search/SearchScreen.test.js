import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

//Mock de la llamada al hook de react useNavigate --> IMPORTANTE: siempre empezar con la palabra 'mock'

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas con SearchScreen', () => {
  test('debe mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Busca un héroe');
  });

  test('Debe mostrar a Batman y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar un error si no se encuentra el héroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=bacman"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper.find('.alert-danger').text().trim()).toBe('No se encotraron heroes: bacman');
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe llamar el navigate', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    
    //Se simula el change en el input
    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });

    // Se simula el evento submit para ello debemos mockear la llamada al hook useNavigate --> Verificar antes del describe
    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');

  });
});