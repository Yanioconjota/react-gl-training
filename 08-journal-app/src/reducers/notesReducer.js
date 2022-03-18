/* state de las notas

  {
    notes: [],
    //active puede ser null o un objeto con la nota activa
    active: {
      id: 'ASKJHDSDSA1877/7',
      title: '',
      body: '',
      imageUrl: '',
      date: 123876123765
    },
    active: null
  }

*/

const initialState = {
  notes: [],
  active: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    
  
    default:
      return state;
  }
};