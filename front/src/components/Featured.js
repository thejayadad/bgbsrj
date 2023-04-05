import React from 'react'

const Featured = () => {
  return (
    <section>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/274249/pexels-photo-274249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
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
    </section>
  )
}

export default Featured