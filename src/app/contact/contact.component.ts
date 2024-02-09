import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    this.setupInputBoxEvents();
  }

  private setupInputBoxEvents(): void {
    $(".input-box.name").click(function () {
      $(".input-box.name").addClass("height");
      $(".input-box.name").css("borderBottom", "1px solid #FE7878");
      $(".input-lebel.name").css("color", "#FE7878");
    });

    $(".input-box.gmail").click(function () {
      $(".input-box.gmail").addClass("height");
      $(".input-box.gmail").css("borderBottom", "1px solid #1B74E4");
      $(".input-lebel.gmail").css("color", "#1B74E4");
    });

    $(".input-box.message").click(function () {
      $(".input-box.message").addClass("height");
      $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
      $(".input-lebel.message").css("color", "#CE65F3");
    });
  }
}
