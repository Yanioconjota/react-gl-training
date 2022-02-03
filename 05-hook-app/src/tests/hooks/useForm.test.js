import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Homero',
    email: 'homerothompson@email.com'
  };

  test('debe regresar un formulario por defecto', () => {
    //devuelve un array primero valor y luego 2 funciones, no usar toBe sino toEqual
    const { result } = renderHook(() => useForm(initialForm));
    const [ formValues, handleInputChange, resetForm ] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof resetForm).toBe("function");
  });

  test('debe cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const handleInputChange = result.current[1];
    act(()=>{
      handleInputChange({
        target: {
          name: "name",
          value: "Powell",
        },
      });
    });
    const [ formValues ] = result.current;
    //console.log(formValues);
    expect(formValues).toEqual({...initialForm, name: 'Powell'});
  });

  test('debe reestablecer el formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, resetForm] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Powell",
        },
      });
      resetForm();
    });
    expect(formValues).toEqual(initialForm);
  });

});
