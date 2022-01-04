import './assets/scss/App.scss'
//import Script from './scripts'

function App() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-sm container-xl">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars" style={{ color: '#FFF' }}></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#hero-section">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-section">A propos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projections-section">Projections</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#billeterie-section">Billeterie</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#actualites-section">Actualités</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact-section">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section class="section container-xl" id="hero-section">
        <div class="hero-main-container row">
          <div class="col">
            <div class="hero-wrapper-info">
              <h1>Un printemps au japon</h1>
              <p class="subtitle-b">Réalisé par Atsushi Tanaka</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
                scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio
                facilisis
                mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci
                dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis
                donec
                et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
              <div class="wrapper-subline">
                <div class="subline-b"></div>
                <p class="hero-next-movie">Prochaines séances</p>
              </div>
              <p>Lundi 24 juin | <span class="span-bold-b">19h30</span></p>
              <p>Mardi 25 juin | <span class="span-bold-b">20h30</span></p>
              <p>Mercredi 26 juin | <span class="span-bold-b">21h30</span></p>
              <a href='#' class="btn btn-main">Réserver</a>
            </div>
          </div>
          <div class="col">
            <div class="main-img" id="hero-main-img"></div>
          </div>
          <div class="col-1">
            <div class="main-img" id="hero-next-img"></div>
          </div>
        </div>
        <div class="wrapper-subline soon-session">
          <div class="subline-w"></div>
          <p>24/06/2020 | <span class="span-bold-s">19h30</span></p>
        </div>
      </section>

      <section class="section container-xl" id="about-section">
        <div class="row">
          <div class="col">
            <h2>Les films de plein air.</h2>
            <p class="text-w">Etiam efficitur bibendum enim, tristique placerat nulla pulvinar sit amet. Donec felis
              lorem, imperdiet
              hendrerit consectetur convallis, sagittis quis augue. Praesent accumsan erat hendrerit ex viverra
              pellentesque in at lectus. In luctus condimentum fringilla. Etiam rutrum molestie ante ac
              scelerisque.
              Etiam at risus ut lectus venenatis volutpat. Aenean nec lacinia nisl. Nullam et nisi sit amet libero
              iaculis fringilla. Morbi dictum elit ut mauris molestie tristique. Sed id laoreet ipsum. Vestibulum
              felis tortor, pulvinar vitae iaculis vitae, malesuada nec nibh. Mauris aliquam tortor ipsum, non
              cursus
              est luctus in. Donec mollis sodales neque et mollis. Curabitur et hendrerit nibh. Suspendisse mi
              dolor,
              sagittis non neque ac, vestibulum rutrum mi. Morbi tristique massa quis finibus sodales.</p>
            <div class="wrapper-subline">
              <div class="subline-w"></div>
              <a class="text-p" href="#">En savoir plus</a>
            </div>
          </div>
          <div class="col">
            <div class="main-img" id="about-img"></div>
          </div>
        </div>
      </section>

      <section class="section projections container-xl" id="projections-section">
        <h2>Nos projections.</h2>
        <div class="swiper-container swiper" id="swiper-container-projections">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="swiper-lazy" src="assets/img/projection-1.webp" alt="" />
              <div class="label-wrapper">
                <h3>La nuit sombre</h3>
                <p class="subtitle-b">Atsushi Tanaka</p>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-lazy" src="assets/img/projection-2.webp" alt="" />
              <div class="label-wrapper">
                <h3>Ne dors jamais</h3>
                <p class="subtitle-b">Atsushi Tanaka</p>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <img class="swiper-lazy" src="assets/img/projection-3.webp" alt="" />
              <div class="label-wrapper">
                <h3>Douce soirée</h3>
                <p class="subtitle-b">Atsushi Tanaka</p>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
          </div>
        </div>

        <div class="swiper-custom-prev" id="swiper-prev-projections">
          <img src="assets/svg/left-arrow.svg" alt="" />
        </div>
        <div class="swiper-custom-next" id="swiper-next-projections">
          <img src="assets/svg/right-arrow.svg" alt="" />
        </div>

        <div class="swiper-pagination" id="swiper-pagination-projections"></div>

        <div class="wrapper-subline text-center">
          <div class="subline-w"></div>
          <a class="text-p" href="#">Voir plus</a>
        </div>

      </section>

      <section class="section billeterie container-xl" id="billeterie-section">
        <h2>Billeterie.</h2>

        <div class="swiper-container swiper" id="swiper-container-billeterie">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wrapper-label">
                <img class="swiper-lazy" src="assets/img/billeterie-1.webp" alt="" />

                <div class="label-wrapper label-wrapper-price">
                  <p>12,30€</p>
                </div>
                <div class="label-wrapper label-wrapper-title">
                  <h3>La nuit sombre</h3>
                  <p class="subtitle-b">Atsushi Tanaka</p>
                </div>
                <div class="label-wrapper label-wrapper-buy">
                  <p>Acheter</p>
                </div>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <div class="wrapper-label">
                <img class="swiper-lazy" src="assets/img/billeterie-2.webp" alt="" />
                <div class="label-wrapper label-wrapper-price">
                  <p>12,30€</p>
                </div>
                <div class="label-wrapper label-wrapper-title">
                  <h3>Ne dors jamais</h3>
                  <p class="subtitle-b">Atsushi Tanaka</p>
                </div>
                <div class="label-wrapper label-wrapper-buy">
                  <p>Acheter</p>
                </div>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div class="swiper-slide">
              <div class="wrapper-label">
                <img class="swiper-lazy" src="assets/img/billeterie-3.webp" alt="" />
                <div class="label-wrapper label-wrapper-price">
                  <p>12,30€</p>
                </div>
                <div class="label-wrapper label-wrapper-title">
                  <h3>Douce soirée</h3>
                  <p class="subtitle-b">Atsushi Tanaka</p>
                </div>
                <div class="label-wrapper label-wrapper-buy">
                  <p>Acheter</p>
                </div>
              </div>
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
          </div>
        </div>

        <div class="swiper-custom-prev" id="swiper-prev-billeterie">
          <img src="assets/svg/left-arrow.svg" alt="" />
        </div>
        <div class="swiper-custom-next" id="swiper-next-billeterie">
          <img src="assets/svg/right-arrow.svg" alt="" />
        </div>

        <div class="swiper-pagination" id="swiper-pagination-billeterie"></div>

        <div class="wrapper-subline text-center">
          <div class="subline-w"></div>
          <a class="text-p" href="#">Voir plus</a>
        </div>

      </section>

      <section class="section actualites container-xl" id="actualites-section">
        <h2>Actualités.</h2>
        <div class="swiper-container swiper" id="swiper-container-actualites">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="wrapper-card-news">
                <h3>Covid-19 : nos efforts pour votre sécurité</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec augue sed libero
                  laoreet
                  facilisis. Phasellus semper eget mi vitae condimentum. Sed imperdiet tellus in magna
                  pulvinar
                  congue. </p>
                <p class="news-date">24/06/2020</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="wrapper-card-news">
                <h3>Covid-19 : nos efforts pour votre sécurité</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec augue sed libero
                  laoreet
                  facilisis. Phasellus semper eget mi vitae condimentum. Sed imperdiet tellus in magna
                  pulvinar
                  congue. </p>
                <p class="news-date">24/06/2020</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="wrapper-card-news">
                <h3>Covid-19 : nos efforts pour votre sécurité</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec augue sed libero
                  laoreet
                  facilisis. Phasellus semper eget mi vitae condimentum. Sed imperdiet tellus in magna
                  pulvinar
                  congue. </p>
                <p class="news-date">24/06/2020</p>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-custom-prev" id="swiper-prev-actualites">
          <img src="assets/svg/left-arrow.svg" alt="" />
        </div>
        <div class="swiper-custom-next" id="swiper-next-actualites">
          <img src="assets/svg/right-arrow.svg" alt="" />
        </div>

        <div class="swiper-pagination" id="swiper-pagination-actualites"></div>
      </section>

      <section class="section container-xl" id="contact-section">
        <h2>Contact.</h2>

        <div class="row wrapper-form-contact">
          <div class="col">
            <form>
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Nom*" required />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Prénom*" required />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="email" class="form-control" placeholder="E-mail*" required />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="number" class="form-control" placeholder="Téléphone*" required />
                </div>
              </div>
              <div class="row" id="contact-text-area">
                <div class="col">
                  <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Votre message"
                    required></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn btn-main btn-gold" type="submit">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col">
            <div class="main-img" id="contact-img"></div>
          </div>
        </div>

      </section>

      <section class="section container-xl">
        <div class="wrapper-newsletters">
          <div class="row">
            <div class="col-sm-8 col-12">
              <h2>Newsletters.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec augue sed libero laoreet
                facilisis.</p>
            </div>
            <div class="col-sm-4 col-12 wrapper-newsletters-input">
              <form class="newsletters-form">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="E-mail" required />
                  <div class="input-group-append">
                    <button class="btn btn-main" type="submit">OK</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section container-xl">
        <h2>Instagram.</h2>
        <div class="row row-cols-4 wrapper-instagram">
          <div class="d-flex wrapper-overlay">
            <img src="assets/svg/instagram-white.svg" alt="" />
            <div class="instagram-overlay">
              <div class="main-img" id="instagram-feed-1"></div>
            </div>
          </div>
          <div class="d-flex wrapper-overlay">
            <div class="instagram-link-block">
              <p>Suivez-nous sur instagram</p>
              <img src="assets/svg/instagram-dark.svg" alt="" />
            </div>
          </div>
          <div class="col wrapper-overlay">
            <img src="assets/svg/instagram-white.svg" alt="" />
            <div class="instagram-overlay">
              <div class="main-img" id="instagram-feed-2"></div>
            </div>
          </div>
          <div class="col wrapper-overlay">
            <img src="assets/svg/instagram-white.svg" alt="" />
            <div class="instagram-overlay">
              <div class="main-img" id="instagram-feed-3"></div>
            </div>
          </div>
        </div>
      </section>

      <footer class="section container-xl" id="footer">
        <div class="wrapper-footer">
          <div class="row">
            <div class="col">
              <h2 class="footer-title">Les films de plein air.</h2>
            </div>
            <div class="col wrapper-footer-link">
              <div class="col">
                <span>Navigation</span>
                <ul>
                  <li><a href="#hero-section">Accueil</a></li>
                  <li><a href="#about-section">A propos</a></li>
                  <li><a href="#projections-section">Projections</a></li>
                  <li><a href="#billeterie-section">Billeterie</a></li>
                  <li><a href="#actualites-section">Actualités</a></li>
                  <li><a href="#contact-section">Contact</a></li>
                </ul>
              </div>
              <div class="col">
                <span>Réseaux</span>
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
              <div class="col">
                <span id="link-no-padding">Contact</span>
                <ul>
                  <li>
                    <p>24 rue elise</p>
                  </li>
                  <li>
                    <p>75008 Paris</p>
                  </li>
                  <li>
                    <p>04 29 65 38 10</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col text-center" id="footer-copyright">
              <p class="label-copyright">2020 - Les films de plein air</p>
              <p class="label-citation">Design by Julien Tavernier</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App; 