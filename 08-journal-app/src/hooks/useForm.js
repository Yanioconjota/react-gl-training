import { useState } from "react";

export const useForm = (initialState = {}) => {
  //Se pueden agregar las validaciones del formulario acá
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  //Para seleccionar la nota activa tenemos que pasarle el nuevo state el reset, si no lo recibe manda el initialState que le pasamos por defecto al newFormState
  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  return [values, handleInputChange, reset];
};
