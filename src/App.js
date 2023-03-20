import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([])
  const [searchImg, setSearchImg] = useState('')
  const [setData, setSetData] = useState('');


  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/collections?page=1&query=${searchImg}`, {
      params: {
        client_id: '65q8BN30HMhrFGU9oEm_bSpqF0qNfrauxXkYmbh_Kpk',
        per_page: 1000
      }
    })
      .then(response => {
        setPhotos(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });

  }, [setData]);


  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setSetData(searchImg);
    }
  }

  function handleInputChange(event) {
    setSearchImg(event.target.value);
  }

  return (
    <Fragment>
      <section className='banner'>
        <div className='container'>
          <div className='banner-main'>
            <h1>Unsplash</h1>
            <h4>The internet’s source for visuals.</h4>
            <h4>Powered by creators everywhere.</h4>
            <input onChange={handleInputChange} onKeyDown={handleKeyDown} type='search' placeholder='Search high-resolution images' />
            
          </div>
        </div>
      </section>

      <section className='container-fluid'>
        <div className="row">
          {
            photos?.map((item, index) => {
              return (
                <div key={index} className="column">
                  <img src={item?.cover_photo.urls.raw} style={{ width: '100%', height: '100%' }} alt={item.alt_description} />
                </div>
              )
            })
          }
        </div>
      </section>

    </Fragment >
  );
}

export default App;

