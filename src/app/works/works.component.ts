import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {

  ngOnInit(): void {
    this.enableMasonry2();
  }

  private enableMasonry2(): void {
    $(document).ready(() => {
      const fillterItemActive = $("#fillter-item-active");
      if (fillterItemActive.length) {
        const $grid = fillterItemActive.isotope({
          itemSelector: ".isotop-item",
          percentPosition: true,
          masonry: {
            columnWidth: ".grid-sizer",
          },
        });

        $(".isotop-menu-wrapper").on("click", "li", function () {
          const filterValue = $(this).attr("data-filter");
          $grid.isotope({ filter: filterValue });
        });

        $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "li", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
          });
        });
      }
    });
  }
}
