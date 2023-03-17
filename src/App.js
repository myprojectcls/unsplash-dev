import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);

  console.log(photos);

  useEffect(() => {
    axios.get('https://api.unsplash.com/photos?page=1', {
      params: {
        client_id: 'DGlKOJFXCD986uRSiAPF0djbdbBDSyA9k4nCgIRDJw8',
        per_page: 100
      }
    })
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <section className='banner'>
        <div className='container'>
          <div className='banner-main'>
            <h1>Unsplash</h1>
            <h4>The internet’s source for visuals.</h4>
            <h4>Powered by creators everywhere.</h4>
            <input type='search' placeholder='Search high-resolution images' />
          </div>
        </div>
      </section>

      <div className="gallery">


        {photos.map(photo => (
          <div>
            <figure className="gallery__item">
              <img src={photo.urls.raw + "&w=1500&dpr=2"} className="gallery__img" alt="Image 1" />
            </figure>
          </div>
        ))}

      </div>


      {/* <div className='gal-main'>
        {photos.map(photo => (
          <div className='photo-main'>
            <div className='img-1'>
              <img src={photo.urls.raw + "&w=1500&dpr=2"} />
            </div>
            <div className='img-2'>
              <img src={photo.urls.raw + "&w=1500&dpr=2"} />
            </div>
            <div className='img-3'>
              <img src={photo.urls.raw + "&w=1500&dpr=2"} />
            </div>
          </div>

        ))}

      </div> */}




      {/* <div className='container'>
        {photos.map(photo => (
          <img key={photo.id} src={photo.urls.raw + "&w=1500&dpr=2"} alt={photo.alt_description} />
        ))}
      </div> */}
    </Fragment >
  );
}

export default App;

