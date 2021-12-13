import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // interpolation: ['@', '@'] //we can change {{}} to any symbole you want
})

export class CardComponent {
    h2 = `My Card`
    text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab tempora voluptate itaque voluptatibus nam aperiam
    quisquam architecto, pariatur officiis dolor fuga quod consectetur consequatur quaerat saepe, modi corporis
    distinctio.`
    num = 42
    array = [1, 2, 3, 4, 5]
    obj = {
        name: 'Katya',
        info:
        {
            age: 25,
            city: 'Ramat Gan'
        }
    }

    getInfo() {
        return `This is my info`
    }
}
