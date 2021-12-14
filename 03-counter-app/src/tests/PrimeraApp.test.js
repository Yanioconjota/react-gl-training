//import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
  /* test('debe de mostrar el mensaje Hola, Soy Goku!', () => {
    const saludo = 'Hola, Soy Goku!';
    const { getByText } = render(<PrimeraApp saludo={saludo}/>);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */
  test("debe mostrar <PrimeraApp /> Correctamente ", () => {
    const saludo = "Hola, Soy Goku!";
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtítulo enviado por props ', () => {
    const saludo = "Hola, Soy Goku!";
    const subtitulo = "Soy un subtítulo";
    const wrapper = shallow(
      <PrimeraApp 
        saludo={saludo}
        subtitulo={subtitulo}/>
    );
    const textoParrafo = wrapper.find("p.sub-title").text();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitulo);
  });
  
  
});
