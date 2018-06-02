import { Playlist } from './models/Playlist';
import { Course } from './models/Course';
import { Categorie } from './models/Categorie';

let loren = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis turpis mi. Vivamus maximus, arcu eget congue laoreet aa";

//Imagens devem ser 400x260 ou 720x260
export const COURSES: Course[] = [
    { id: 1, title: 'HTML + CSS + JS - Para Iniciantes', description: loren, content: '', cols: "2", image: 'https://premierdesignsonline.com/wp-content/uploads/2016/05/wordpress-dev.jpg' },
    { id: 2, title: 'Apps Híbridos com Ionic 3', description: loren, content: '', cols: "1", image: 'http://d1ijjxzthis87e.cloudfront.net/static/main/images/course_description/ui-design/developers-icon.454301bed3e1.png' },
    { id: 3, title: 'Api com NodeJS', description: loren, content: '', cols: "1", image: 'http://www.avemdesign.com/wp-content/uploads/web-navigation1-400x260.png' },
    { id: 4, title: 'Onesignal + Ionic 3', description: loren, content: '', cols: "1", image: 'http://img.over-blog-kiwi.com/400x260-ct/0/23/20/31/20180310/ob_6dfd2e_iphone-x-sensors.png' },
    { id: 5, title: 'Android - Material Design', description: loren, content: '', cols: "1", image: 'https://montanab.com/wp-content/uploads/android-apps.png' },
    { id: 6, title: 'Grafos com NodeJS', description: loren, content: '', cols: "2", image: 'https://cdn-images-1.medium.com/max/1600/1*dA20GbXBrT6-BUPMLqJFKA.gif' },
    { id: 7, title: 'Onesignal para web', description: loren, content: '', cols: "1", image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 7 },
    { id: 8, title: 'Item 8', description: loren, content: '', cols: "1", image: 'https://picsum.photos/400/260/?random' + new Date().getTime() + 8 },
    { id: 9, title: 'Item 9', description: loren, content: '', cols: "1", image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 9 },
    { id: 10, title: 'Item 10', description: loren, content: '', cols: "1", image: 'https://picsum.photos/720/260/?random' + new Date().getTime() + 10 }
]

export const CATEGORIES: Categorie[] = [
    { id: 1, title: 'Ionic 3', image: '../../assets/icons/ionic.jpg', total: 6 },
    { id: 2, title: 'NodeJs', image: '../../assets/icons/nodejs.png', total: 1 },
    { id: 3, title: 'MongoDB', image: '../../assets/icons/mongodb.png', total: 2 },
    { id: 4, title: 'MySql', image: '../../assets/icons/mysql.png', total: 4 },
    { id: 5, title: 'Android', image: '../../assets/icons/android.png', total: 2 }
]

export const PLAYLISTS: Playlist[] = [
    { id: 1, title: 'NodeJS Básico', image: '../../assets/icons/nodejs.png', total_courses: 4 },
    { id: 2, title: 'MongoDB Intermediário', image: '../../assets/icons/mongodb.png', total_courses: 2 },
    { id: 3, title: 'MySql Iniciante', image: '../../assets/icons/mysql.png', total_courses: 7 },
    { id: 3, title: 'MySql Avançado', image: '../../assets/icons/mysql.png', total_courses: 3 },
    { id: 3, title: 'MySql Avançado', image: '../../assets/icons/mysql.png', total_courses: 3 },
    { id: 3, title: 'MySql Avançado', image: '../../assets/icons/mysql.png', total_courses: 3 },
    { id: 3, title: 'MySql Avançado', image: '../../assets/icons/mysql.png', total_courses: 3 },
]