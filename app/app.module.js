"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var app_component_1 = require('./components/app.component');
var team_members_component_1 = require('./components/team-members/team-members.component');
var team_member_detail_component_1 = require('./components/team-member-detail/team-member-detail.component');
var team_member_service_1 = require('./services/team-member/team-member.service');
var current_sprint_component_1 = require("./components/current-sprint/current-sprint.component");
var team_member_search_component_1 = require('./components/team-member-search/team-member-search.component');
var sprint_search_component_1 = require('./components/sprint-search/sprint-search.component');
var review_component_1 = require('./components/review/review.component');
var sprints_component_1 = require('./components/sprints/sprints.component');
var sprint_service_1 = require('./services/sprint/sprint.service');
var sprint_detail_component_1 = require("./components/sprint-detail/sprint-detail.component");
var action_item_service_1 = require('./services/action-item/action-item.service');
var comment_service_1 = require('./services/comment/comment.service');
var date_formatter_directive_1 = require('./directives/date-formatter.directive');
var config_1 = require('./config/config');
function initConfig(config) {
    return function () { return config.load(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'detail/member/:id',
                        component: team_member_detail_component_1.MemberDetailComponent
                    },
                    {
                        path: 'detail/sprint/:id',
                        component: sprint_detail_component_1.SprintDetailComponent
                    },
                    {
                        path: '',
                        redirectTo: '/sprint',
                        pathMatch: 'full'
                    },
                    {
                        path: 'members',
                        component: team_members_component_1.TeamMembersComponent
                    },
                    {
                        path: 'sprint',
                        component: current_sprint_component_1.CurrentSprint
                    },
                    {
                        path: 'sprints',
                        component: sprints_component_1.SprintsComponent
                    },
                    {
                        path: 'review',
                        component: review_component_1.ReviewComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                team_member_detail_component_1.MemberDetailComponent,
                sprint_detail_component_1.SprintDetailComponent,
                team_members_component_1.TeamMembersComponent,
                current_sprint_component_1.CurrentSprint,
                sprints_component_1.SprintsComponent,
                review_component_1.ReviewComponent,
                team_member_search_component_1.TeamMemberSearchComponent,
                sprint_search_component_1.SprintSearchComponent,
                date_formatter_directive_1.SprintDetailFormatter
            ],
            providers: [
                team_member_service_1.TeamMemberService,
                sprint_service_1.SprintService,
                action_item_service_1.ActionItemService,
                comment_service_1.CommentService,
                config_1.Config,
                { provide: core_1.APP_INITIALIZER, useFactory: initConfig, deps: [config_1.Config], multi: true }
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map