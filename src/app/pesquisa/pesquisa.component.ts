import { Course } from './../models/Course';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  isLoading: boolean = true;
  search: string = '';
  chips: string[];
  chip_color: string = '#41BBEA';

  itens: Course[] = [];
  loren = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis turpis mi. Vivamus maximus, arcu eget congue laoreet aa";

  constructor(private route: ActivatedRoute, private courseService: CoursesService) { }


  ngOnInit() {
    this.route.queryParams.subscribe(element => {
      if (element.q) {
        this.search = element.q;
        this.chips = this.splitString(element.q);
        this.pesquisar();
      }
    });
  }

  pesquisar() {
    this.isLoading = true;

    setTimeout(() => {
      this.courseService.getCourses()
        .then((courses: Course[]) => {

          this.chips.forEach(chip => {
            let regex = new RegExp(chip.toLowerCase());

            this.itens = courses.filter(element => {
              return element.title.toLowerCase().match(regex);
            });
          });

        });

      this.isLoading = false;
    }, 500);
  }

  splitString(value: string): string[] {
    let words = value.split(/(\s+)/).filter((element) => { return element.trim().length > 0; })
    return words;
  }

}
