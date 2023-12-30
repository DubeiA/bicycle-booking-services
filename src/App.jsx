import axios from 'axios';
import { useEffect, useState } from 'react';
import { lazy } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import './index.css';

const Header = lazy(() => import('./components/header/Header'));
const BikeList = lazy(() => import('./components/bike-list/BikeList'));
const BikeAdd = lazy(() => import('./components/bike-add/BikeAdd'));
const BikeUse = lazy(() => import('./components/bike-use/BikeUse'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  const [bikes, setBikes] = useState(null);

  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true);
      const { data } = await axios.get('http://localhost:8080/api/bike/');
      return setBikes(data);
    } catch (error) {
      setLoader(true);
      console.error('Помилка при виконанні запиту:', error);
    } finally {
      setLoader(false);
    }
  };

  const addBike = async newBike => {
    const { name, type, color, wheel_size, price, id, description } = newBike;

    try {
      setLoader(true);
      await axios.post('http://localhost:8080/api/bike/add', {
        name,
        type,
        color,
        wheel_size,
        price,
        id,
        description,
      });
      fetchData();
    } catch (error) {
      setLoader(true);
      console.error(error.response.data.message);
      alert(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };

  const handleUpdateStatus = async (newStatus, id) => {
    const lower = newStatus.toLowerCase();
    try {
      setLoader(true);
      const { data } = await axios.patch(
        `http://localhost:8080/api/bike/${id}/stats`,
        { stats: lower }
      );
      fetchData();
      return data;
    } catch (error) {
      setLoader(true);
      console.error('Помилка при виконанні запиту:', error);
    } finally {
      setLoader(false);
    }
  };

  const deleteBike = async id => {
    try {
      setLoader(true);
      await axios.delete(`http://localhost:8080/api/bike/${id}`);
      fetchData();
    } catch (error) {
      setLoader(true);
      console.error('Помилка при виконанні запиту:', error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='container'>
      <Header />
      <div className='wrapper'>
        <BikeList
          bikes={bikes}
          handleUpdateStatus={handleUpdateStatus}
          deleteBike={deleteBike}
        />
        <span className='line'></span>
        {loader && (
          <ProgressBar
            visible={true}
            height='80'
            width='80'
            color='#4fa94d'
            ariaLabel='progress-bar-loading'
            wrapperStyle={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=''
          />
        )}
        <div>
          <BikeAdd addBike={addBike} />
          <span className='lineHr'></span>

          <BikeUse data={bikes} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;

