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
    headingTwo: 'MOJE HOBBY',
    hobbies: [
      { title: 'Fantastyka', description: 'miecze / zaklęcia / bestie - jeśli ma wszystkie trzy, to jestem uzależniony, zawsze lubiłem wszystko, co związane z fantastyką i nie zmieniło się to do dziś, najbardziej lubię uniwersum Tolkiena' },
      { title: 'Gry', description: 'nieważne, czy są to gry wideo, czy planszowe - lubię świetne historie ze skomplikowanymi postaciami, stawianie czoła wymagającym kampaniom, współpracę na rzecz wspólnego celu lub rywalizację z utalentowanymi przeciwnikami' },
      { title: 'Programowanie', description: 'moja miłość do kodowania zaczęła się w mojej pierwszej pracy, gdzie spędziłem godziny na tworzeniu wieloliniowych funkcji Excela, wciągnąłem się, zanim się zorientowałem, więc dzisiaj nadal piszę kod, tylko trochę bardziej skomplikowany' }
    ]
  },
  projects: {
    headingOne: 'PROJEKTY',
    projects: [
      {
        title: 'Sklepico',
        description: 'Platforma typu „jeden do wielu” dla handlu elektronicznego. Umożliwia jednemu administratorowi wyświetlanie towarów w celu zakupu przez wielu użytkowników. Zbudowany ze stosu MERN (Mongo, Express, React, Node). Obejmuje niestandardowe uwierzytelnianie użytkowników, przetwarzanie płatności za pomocą Stripe Checkout i dedykowaną platformę administracyjną do operacji CRUD.',
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
        description: 'Aplikacja internetowa dla firmy zajmującej się organizacją wydarzeń (jest to także moja pierwsza strona internetowa, którą stworzyłem). Zawiera cztery różne układy pomieszczeń - każdy z niestandardową funkcją rezerwacji miejsc, przetwarzaniem płatności za pomocą elementu płatności Stripe, kontaktem e-mailowym z personelem / potwierdzeniem rezerwacji na skrzynkę pocztową użytkownika za pomocą EmailJS. Uprawnienia administratora (edycja/dodawanie/usuwanie zdarzeń) poprzez GUI Firebase. Generowanie obrazu za pomocą Hotpot, przechowywanie obrazu za pomocą Firestore.',
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
        description: 'Aplikacja do monitorowania kalorii i utrzymywania wagi. Obejmuje niestandardowe uwierzytelnianie użytkowników i bazę danych produktów współdzieloną przez wszystkich użytkowników. Pozwala modyfikować dane dotyczące spożycia kalorii dla każdego dnia z osobna i dodawać nowe cele bez zastępowania poprzednich. Przechowywanie zdjęć w Cloudinary. Projekt ten powstał we współpracy z Bartoszem Gortychem.',
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
    ]
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
        emailError: 'coś jest nie tak z Twoim mailem, może to lepiej sprawdź',
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
      { name: 'Visit here', link: 'https://bartoszgortych.com' }
    ]
  }
}

export default template