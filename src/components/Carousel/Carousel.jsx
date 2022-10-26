
const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://zonadeprensard.com/wp-content/uploads/2022/06/hailey-bieber-70.jpg" className="d-block w-100" alt="ROAD by Hailey Bieber" />
    </div>
    <div className="carousel-item">
      <img src="https://tendencybook.com/wp-content/uploads/2020/12/Untitled57.jpg" className="d-block w-100" alt="N5 Chanell" />
    </div>
    <div className="carousel-item">
      <img src="https://muycosmopolitas.com/wp-content/uploads/2021/09/rare-beauty-asi-es-la-linea-de-belleza-de-selena-gomez-20092021-in.jpg" className="d-block w-100" alt="RARE BEAUTY by Selena Gomez" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;
