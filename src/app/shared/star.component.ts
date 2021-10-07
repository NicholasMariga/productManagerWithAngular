import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges  {

    @Input() rating: number = 0;
    cropWidth: number = 75;

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();


    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        //console.log(`The Rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
    }
}


