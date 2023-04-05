import React from 'react'

const Featured = () => {
  return (
    <section className='mt-5'>
        <h2 className='text-success text-center mb-3 mt-5'>The Blog Spot</h2>
        <p className='text-muted text-center mb-2 mt-2'>The Place to Learn, Share, & Grow</p>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="card text-bg-dark">
  <img style={{ height: "500px"}} src="https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 opacity-75" className="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title secondary fw-bolder">Card title</h5>
    <p class="card-text text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="card text-bg-dark">
  <img style={{ height: "500px"}} src="https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 p-2" className="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="card text-bg-dark">
  <img style={{ height: "500px"}} src="https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" className="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
    </section>
  )
}

export default Featured