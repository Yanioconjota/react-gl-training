import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HeroScreen } from "../../../components/heroes/HeroScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas con HeroScreen', () => {

  test('No debe mostrar HeroScreen sino hay un héroe (heroId) en la URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          {/* Ruta para mostrar sino hay heroId */}
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  });

  test('Debe mostrar un héroe si el parámetro se encuentra y existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          {/* heroId recibe el string correspondiente al initialEntry */}
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          {/* Ruta para mostrar sino hay heroId */}
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
    expect(wrapper.find('h3').text().trim()).toBe('Spider-Man');
  });

  test('No debe mostrar un héroe si el parámetro es incorrecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider2"]}>
        <Routes>
          {/* heroId recibe el string correspondiente al initialEntry */}
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          {/* Ruta para mostrar sino hay heroId */}
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(false);
    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  });
});