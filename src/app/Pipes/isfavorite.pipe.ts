import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../Models';

@Pipe({
    name: 'isFavorite',
    pure: false
})

export class IsFavorite implements PipeTransform {

    transform(items: IContact[], filter: boolean) {
        if (!items) {
            return items;
        }

        let response = items.filter(item => item.isFavorite == filter);
        response = response.sort((a: IContact, b: IContact) => {
            if (a.name < b.name) {
                return -1;
            }
            else if (a.name > b.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return response;
    };
};