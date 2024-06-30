import Sklepico from '../assets/Sklepico.png'
import UnderhillHall from '../assets/Underhill Hall.png'
import HealThyBody from '../assets/HealThyBody.png'

const template = {
  navbar: ['Start', 'O mnie', 'Projekty', 'Kontakt'],
  header: {
    headingOne: 'Cześć, nazywam się ',
    headingTwo: 'i tworzę strony internetowe',
    buttons: ['O mnie', 'Projekty', 'Kontakt']
  },
  about: {
    headingOne: 'O MNIE',
    bio: 'Jestem programistą z pasją do tworzenia interaktywnych i dynamicznych aplikacji internetowych - zapoznaj się z moimi projektami poniżej.',
    priorities: [
      { title: 'Responsywne', description: 'moje modele są dostosowane do wyświetlania na urządzeniach różnej wielkości' },
      { title: 'Funkcjonalne', description: 'tworzę zarówno statyczne witryny internetowe jak i rozbudowane interaktywne aplikacje' },
      { title: 'Zgodne z SEO', description: 'dbam aby moje strony były łatwe do znalezienia przez wyszukiwarki internetowe' }
    ]
  },
  projects: {
    headingOne: 'PROJEKTY',
    projects: [
      {
        title: 'Sklepico',
        description: 'Platforma do zakupów internetowych działająca na zasadzie relacji "jeden do wielu". Umożliwia jednemu administratorowi na wystawianie ofert produktów dostępnych dla wielu użytkowników. Zbudowany przy użyciu MERN stack (Mongo, Express, React, Node). Zawiera dedykowany system uwierzytelniania użytkowników, przetwarzanie płatności za pomocą Stripe Checkout oraz panel do przeprowadzania operacji CRUD dostępny wyłącznie dla administratora.',
        adminCreds: [{ login: 'admin@admin.com' }, { password: 'Test12345!' }],
        image: Sklepico,
        link: 'https://sklepico.onrender.com/',
        sourceCode: 'https://github.com/HoffmanSan/MERN-app',
        technologies: {
          React: 'https://react.dev/',
          Node: 'https://nodejs.org/en',
          MongoDB: 'https://www.mongodb.com/',
          Mongoose: 'https://mongoosejs.com/',
          Express: 'https://expressjs.com/',
          TailwindCSS: 'https://tailwindcss.com/',
          Stripe: 'https://stripe.com/',
          Postman: 'https://www.postman.com/',
          Git: 'https://git-scm.com/',
          GitHub: 'https://github.com/',
          Create_React_App: 'https://create-react-app.dev/',
          Cloudinary: 'https://cloudinary.com/'
        }
      },
      {
        title: 'Underhill Hall',
        description: 'Aplikacja internetowa dla firmy zajmującej się organizacją wydarzeń (to również pierwsza strona jaką stworzyłem). Zawiera cztery różne układy pomieszczeń z możliwością rezerwacji miejsc, przetwarzaniem płatności za pomocą Stripe Payment Element, kontaktem mailowym z personelem oraz potwierdzenie rezerwacji na skrzynkę pocztową użytkownika za pomocą EmailJS. Uprawnienia administratora (edycja/dodawanie/usuwanie wydarzeń) poprzez Firebase GUI. Plakaty wydarzeń wygenerowane za pomocą Hotpot, przechowywanie obrazów przy użyciu Firestore.',
        image: UnderhillHall,
        link: 'https://underhill-hall.onrender.com/',
        sourceCode: 'https://github.com/HoffmanSan/Underhill-Hall',
        technologies: {
          React: 'https://react.dev/',
          Node: 'https://nodejs.org/en',
          Firebase: 'https://firebase.google.com/',
          Express: 'https://expressjs.com/',
          Stripe: 'https://stripe.com/',
          SASS: 'https://sass-css.org/',
          EmailJS: 'https://www.emailjs.com/',
          Postman: 'https://www.postman.com/',
          Git: 'https://git-scm.com/',
          GitHub: 'https://github.com/',
          Create_React_App: 'https://create-react-app.dev/',
          Hotpot: 'https://hotpot.ai/'
        }
      },
      {
        title: 'HealThyBody',
        description: 'Aplikacja do monitorowania spożycia kalorii - pomaga w kontrolowaniu masy ciała. Zawiera dedykowany system uwierzytelniania użytkowników i bazę danych produktów współdzieloną przez wszystkich użytkowników. Pozwala na obliczenie i wyznaczenie celów oraz dzienne monitorowanie spożycia kalorii i makroelementów poprzez uzupełnianie danych żywieniowych. Przechowywanie obrazów z Cloudinary. Projekt ten powstał we współpracy z Bartoszem Gortychem.',
        image: HealThyBody,
        link: 'https://twogordev-first-app.onrender.com/',
        sourceCode: 'https://github.com/TwoGorDev/TwoGorDev-First-App',
        technologies: {
          React: 'https://react.dev/',
          Node: 'https://nodejs.org/en',
          PostgreSQL: 'https://www.postgresql.org/',
          Postman: 'https://www.postman.com/',
          Git: 'https://git-scm.com/',
          GitHub: 'https://github.com/',
          Vite: 'https://vitejs.dev/',
          Cloudinary: 'https://cloudinary.com/'
        }
      },
    ],
    card: {
      buttons: ['Dowiedz się więcej', 'Odwiedź stronę']
    },
    modal: {
      headingOne: 'Technologie wykorzystane do stworzenia tego projektu:',
      adminCreds: 'Dane logowania administratora',
      buttons: ['Kod źródłowy', 'Odwiedź stronę']
    }
  },
  contact: {
    headingOne: 'NAPISZ DO MNIE',
    headingTwo: 'jeśli masz jakieś pytania lub pomysł na projekt',
    form: {
      name: 'Twoje imie...',
      email: 'Twój email...',
      message: 'Twoja wiadomość...',
      button: {
        send: 'Wyślij',
        sending: 'Wysyłanie...'
      },
      errors: {
        noContact: 'uzupełnij dane żebym mógł się z Tobą skontaktować',
        emailError: 'coś jest nie tak z Twoim adresem e-mail, może lepiej to sprawdź',
        noMessage: "chcesz o czymś porozmawiać? uzupełnij pole 'Twoj wiadomość' i kliknij 'Wyślij'",
        failed: "hmmm, coś poszło nie tak - spróbuj jeszcze raz"
      },
      success: 'dziękuję za wiadomość, odezwę się tak szybko jak to możliwe'
    }
  },
  footer: {
    headingOne: 'Jeśli chcesz dowiedzieć się o mnie więcej - sprawdź poniższe linki',
    headingTwo: "Zachęcam Cię również do odwiedzenia portfolio Bartosza Gortycha",
    anchors: [
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/maciej-gortych-4b5bb8272' },
      { name: 'GitHub', link: 'https://github.com/HoffmanSan' },
      { name: 'Kliknij tutaj', link: 'https://bartoszgortych.com' }
    ]
  }
}

export default template