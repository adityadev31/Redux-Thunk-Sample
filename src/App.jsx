import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions';

const App = () => {

   const { items, loading, error } = useSelector(state => state.data);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchData());
   },
      // eslint-disable-next-line
      []);

   const appData = () => {
      if (loading) {
         return <p>Loading</p>
      }
      return items.map((item, index) => <p key={index}>{item.title}</p>);

   };

   return (
      <>
         <h1>App</h1>
         {appData()}
      </>
   )
}

export default App