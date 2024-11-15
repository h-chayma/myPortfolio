import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  showAlert: boolean = true;

  ngAfterViewInit(): void {
    this.initMeanMenu();
    this.initMobileMenu();
  }

  dismissAlert(): void {
    this.showAlert = false;
  }

  private initMeanMenu(): void {
    $(".main_menu").meanmenu({
      meanMenuContainer: ".mobile_menu",
      meanScreenWidth: "1399",
    });

    $(".main_menu_2").meanmenu({
      meanMenuContainer: ".mobile_menu_2",
      meanScreenWidth: "991",
    });

    $(".main_menu_3").meanmenu({
      meanMenuContainer: ".mobile_menu_3",
      meanScreenWidth: "991",
    });
  }

  private initMobileMenu(): void {
    const menutoggole = document.querySelector(".toggle_menu");
    const mobilemenu = document.querySelector(".mobile-menu");

    if (menutoggole && mobilemenu) {
      menutoggole.addEventListener("click", () => {
        menutoggole.classList.toggle("active");
        mobilemenu.classList.toggle("active");
      });
    }
  }

}
