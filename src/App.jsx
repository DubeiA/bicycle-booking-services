import axios from 'axios';
import { useEffect, useState } from 'react';

import { Header } from './components/header/Header';
import { BikeList } from './components/bike-list/BikeList';

import './index.css';

function App() {
  const [bikes, setBikes] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/bike/');
      return setBikes(data);
    } catch (error) {
      console.error('Помилка при виконанні запиту:', error);
    }
  };

  const handleUpdateStatus = async (newStatus, id) => {
    console.log(newStatus, id);

    const lower = newStatus.toLowerCase();
    try {
      const { data } = await axios.patch(
        `http://localhost:8080/api/bike/${id}/stats`,
        { stats: lower }
      );
      fetchData();
      return data;
    } catch (error) {
      console.error('Помилка при виконанні запиту:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='container'>
      <Header />
      <div>
        <BikeList bikes={bikes} handleUpdateStatus={handleUpdateStatus} />
        <span></span>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', width: 700 }}>
            <form action=''>
              <input type='text' placeholder='name' />
              <input type='text' placeholder='type' />
              <input type='text' placeholder='color' />
              <input type='text' placeholder='wheel size' />
              <input type='text' placeholder='price' />
              <input type='text' placeholder='id' />

              <textarea name='discr' id='' cols='30' rows='10'></textarea>
              <button>save</button>
              <button>clear</button>
            </form>
          </div>

          <div>
            <h3>Statistics</h3>
            <p>Totla bikes:</p>
            <p>Availeble bikes:</p>
            <p>Booked bikes:</p>
            <p>Average bike cost:</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

