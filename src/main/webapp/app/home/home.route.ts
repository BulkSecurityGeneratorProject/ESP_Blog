import { Route } from '@angular/router';

import { StoryComponent } from '../entities/story'

export const HOME_ROUTE: Route = {
    path: '',
    component: StoryComponent,
    data: {
        authorities: [],
        pageTitle: 'ESP Blog'
    }
};
