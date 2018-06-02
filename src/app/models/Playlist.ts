import { Course } from './Course';
export class Playlist {
    id: number;
    title: string;
    total_courses: number;
    image: string;
    courses: Course[]
}