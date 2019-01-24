import indexTemplate from './index.html';
import './css/index.css';

class Home {
  static draw() {
    const homeHTML = document.createElement('section');
    homeHTML.className = 'home';
    homeHTML.innerHTML = indexTemplate;
    document.body.appendChild(homeHTML);
  }
}

export default Home;
