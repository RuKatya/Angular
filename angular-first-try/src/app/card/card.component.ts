import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // interpolation: ['@', '@'] //we can change {{}} to any symbole you want
})

export class CardComponent implements OnInit {
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

    imgUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
    disable = false

    ngOnInit() {
        setTimeout(() => {
            // this.imgUrl = 'https://cdn2.auth0.com/blog/vuejs/logo.png';
            // this.disable = true
            console.log('ng')
        }, 3000)
        console.log('ng')
    }

    changeH2() {
        this.h2 = `changes`
    }

    inputHendler(value: any) {
        // console.log(event)
        // const value = event.target.value;
        this.h2 = value
    }

    changeHendler() {
        console.log(this.h2)
    }
}
