
import { Component, Input, OnChanges } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;//the 5 star image is 75px so each start is apprx 75/5px
    }

    onClick(): void {
        console.log(`The rating ${this.rating} was clicked!`);//using backticks specifies  javascript template literal allows me to use a placeholde within a string
    }
}