import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, updateAdmin, updateDate } from './Redux/actions';
function App() {
  const dispatch = useDispatch();

  // get current state from store
  const state = useSelector((state) => state);

  // handler to call actions by using dispatch
  const updateAdminHandler = () => {
    // new value, it can be from text boxes
    const admin = {
      name: { fname: 'muller', lname: 'jaramani' },
      phones: { mobile: '00963878787', home: '714555' },
      address: 'Syria-Swaidaa',
      id: '999999',
      cars: ['Mercedec'],
    };

    // dispatch the action
    dispatch(updateAdmin(admin));
  };

  const updateDateHandler = () => {
    dispatch(updateDate(new Date()));
  };

  const addCarHandler = () => {
    dispatch(addCar(' ,Lamborghini'));
  };
  useEffect(() => {
    console.log('Initial state is>>', state);
    console.log('Passowrd state is>>', state.admin.passowrd);
  }, [state]);
  return (
    <div className="App">
      <h1>Wlcome Redux</h1>
      <h3>
        <span>Admin Name: {state.admin.name.fname}</span>{' '}
        <span> {state.admin.name.lname} </span>
      </h3>
      <h3>Mobile: {state.admin.phones.mobile}</h3>
      <h3>Home: {state.admin.phones.home}</h3>
      <h3>Id: {state.admin.id}</h3>
      <h3>Address: {state.admin.address}</h3>
      <h3>Cars: {state.admin.cars}</h3>
      <h3>Updated: {state.date.toString()}</h3>

      <div
        style={{ backgroundColor: '#cfc', width: '200px', height: '50px' }}
        onClick={updateAdminHandler}
      >
        Click here to update admin
      </div>
      <div
        style={{ backgroundColor: '#aaf', width: '200px', height: '50px' }}
        onClick={updateDateHandler}
      >
        Update Date
      </div>
      <div
        style={{ backgroundColor: '#2c3', width: '200px', height: '50px' }}
        onClick={addCarHandler}
      >
        Add Lamobrghini
      </div>
    </div>
  );
}

export default App;
