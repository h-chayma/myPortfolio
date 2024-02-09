import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'myProfile';

  ngAfterViewInit(): void {
    this.initLoader();
    this.toggleDarkTheme();
    this.applyDarkThemeOnLoad();
    this.setBackgroundImages();
    this.initializeOdometer();
  }

  private initLoader(): void {
    const preloader = document.querySelector("#preloader") as HTMLElement;
    window.addEventListener("load", () => {
      preloader.classList.add("preloaded");
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    });
  }


  private toggleDarkTheme(): void {
    const darktoggle = document.querySelector(".dark-btn-icon") as HTMLImageElement;
    const home1bgimg = document.querySelector(".page-wrapper") as HTMLElement;
    const home2bgimg = document.querySelector(".page-wrapper-2") as HTMLElement;

    $("body").toggleClass("dark-theme");

    const isDarkTheme = $("body").hasClass("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme.toString());

    if (isDarkTheme) {
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-dark-1.jpg')";
    } else {
      darktoggle.src = "assets/img/icon/mon-icon.png";
      home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
      home2bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
    }
  }

  private applyDarkThemeOnLoad(): void {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";

    if (isDarkTheme) {
      $("body").addClass("dark-theme");
      this.toggleDarkTheme();
    }

    $(".dark-btn").on("click", this.toggleDarkTheme);
  }

  private setBackgroundImages(): void {
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ") "
      );
    });
  }

  private initializeOdometer(): void {
    $(".odometer").appear(function (e: any) {
      const odo = $(".odometer");
      odo.each(function () {
        const countNumber = $(this).attr("data-count");
        if (countNumber !== undefined) {
          $(this).html(countNumber);
        }
      });
    });
  }
}