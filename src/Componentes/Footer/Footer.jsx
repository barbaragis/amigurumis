import "../Footer/Footer.css";



export const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start bg-light text-muted">
          <section class="footer__back">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <img className="logo" src="https://t4.ftcdn.net/jpg/04/54/38/75/360_F_454387542_psZUYHJKoMOcZOTpf9tXbl4epKK9vnWK.jpg" />
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Laravel</a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    Redes sociales 
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Instagram</a>
                  </p>

                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                  <p><i class="fas fa-home me-3"></i> Flores , CABA </p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
              </div>

            </div>
          </section>
          <div class=" text-center p-4" >
            © 2023 Todos los derechos reservados
          </div>
        </footer>
    )
}