# useForm Hook

### Ejemplo de uso:

```
  const initialForm = {
    name: '',
    age: 0,
    email: ''
  }
  const [formValues, handleInputChange, resetForm] = useForm(initialForm)
```

useForm() //Maneja el estado de un formulario.