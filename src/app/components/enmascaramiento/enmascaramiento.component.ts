import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnmascaramientoService } from 'src/app/services/enmascaramiento.service';


@Component({
  selector: 'app-enmascaramiento',
  templateUrl: './enmascaramiento.component.html',
  styleUrls: ['./enmascaramiento.component.css']
})
export class EnmascaramientoComponent implements OnInit {

  mascara: string = null;

  constructor(private router: Router, private route: ActivatedRoute, private masquerade: EnmascaramientoService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      this.mascara = params['link'];
    });
     this.redireccionar();
  }
  

  redireccionar() {
    let data: any = {
      MasCara: this.mascara,
    }
    let uri: string = null;
    this.masquerade.getLinkRedireccionamiento(data)
      .subscribe(
        respuesta => {
          // console.log(respuesta);
          if (<any>respuesta["State"]) {
            uri = respuesta["Data"].toString();
          }
          else{
            this.router.navigate(['/R/error']);
          }
        },error => {
          this.router.navigate(['/R/error']);
        },
        () => {
          if (uri != null) {
             window.location.href = uri;
          }
        }
      );
  }


}
