
import { useEffect, useState } from 'react';
import axios from 'axios';
import './app.css';

function App() {
  const [data, setData] = useState([]);
  // const [ brand , setBrand ]= useState();
  let brand = [];

  useEffect(() => {
    axios.get('https://assessment-edvora.herokuapp.com')
      .then((res) => { setData(res.data) });
  }, []);

  data.forEach((brandName) => {
    // console.log(brandName.brand_name)
    brand.push(brandName.brand_name);
  });

  const newBrand = [...new Set(brand)];

  console.log(newBrand);

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <div class="card" style={{ "width": "18rem", "margin": "25px" }}>
            <div class="card-body">
              <div class="dropdown w-100">
                <a class="btn btn-secondary dropdown-toggle" href role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href>Action</a></li>
                  <li><a class="dropdown-item" href>Another action</a></li>
                  <li><a class="dropdown-item" href>Something else here</a></li>
                </ul>
              </div>

              <div class="dropdown mt-2">
                <a class="btn btn-secondary dropdown-toggle" href role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href>Action</a></li>
                  <li><a class="dropdown-item" href>Another action</a></li>
                  <li><a class="dropdown-item" href>Something else here</a></li>
                </ul>
              </div>

              <div class="dropdown mt-2">
                <a class="btn btn-secondary dropdown-toggle" href role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href>Action</a></li>
                  <li><a class="dropdown-item" href>Another action</a></li>
                  <li><a class="dropdown-item" href>Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="text-white mt-4">Edvora</h2>
          <h5 className="text-white">Products</h5>
          {newBrand.map((product) => (
            <div>
              <h6 className="text-white p-2" style={{ borderBottom: '1px solid white' }}>{product}</h6>
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner d-flex ">
                  {
                    data.map((prod) => (
                      product === prod.brand_name ? (
                        <div class="carousel-item">
                          <div class="card m-2" style={{ "width": "18rem;" }}>
                            <div class="card-body">
                              <div className='row'>
                                <div className='col-5'>
                                  <img src={prod.image} class="card-img-top" alt="..." />
                                </div>
                                <div className='col-7'>
                                  <p className='text-white'>{prod.product_name}</p>
                                  <p className='text-white'>{prod.brand_name}</p>
                                  <p className='text-white'>{prod.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : ''
                    ))
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
