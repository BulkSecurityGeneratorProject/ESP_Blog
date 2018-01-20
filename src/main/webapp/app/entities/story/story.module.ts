import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from '../../shared';
import { BlogAdminModule } from '../../admin/admin.module';
import {
    StoryService,
    StoryPopupService,
    StoryComponent,
    StoryDetailComponent,
    StoryDialogComponent,
    StoryPopupComponent,
    StoryDeletePopupComponent,
    StoryDeleteDialogComponent,
    storyRoute,
    storyPopupRoute,
} from './';

const ENTITY_STATES = [
    ...storyRoute,
    ...storyPopupRoute,
];

@NgModule({
    imports: [
        BlogSharedModule,
        BlogAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        StoryComponent,
        StoryDetailComponent,
        StoryDialogComponent,
        StoryDeleteDialogComponent,
        StoryPopupComponent,
        StoryDeletePopupComponent,
    ],
    entryComponents: [
        StoryComponent,
        StoryDialogComponent,
        StoryPopupComponent,
        StoryDeleteDialogComponent,
        StoryDeletePopupComponent,
    ],
    providers: [
        StoryService,
        StoryPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogStoryModule {}
