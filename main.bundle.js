webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__articles_articles_component__ = __webpack_require__("./src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project_service__ = __webpack_require__("./src/app/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__articles_articles_component__["a" /* ArticlesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* ROUTES */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__project_service__["a" /* ProjectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_articles_component__ = __webpack_require__("./src/app/articles/articles.component.ts");




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_1__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_2__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_3__articles_articles_component__["a" /* ArticlesComponent */] }
];


/***/ }),

/***/ "./src/app/articles/articles.component.css":
/***/ (function(module, exports) {

module.exports = "h4{\r\n    margin-top: 200px;\r\n    text-align: center;\r\n    color:#aaa;\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>coming soon... :)</h4>\n"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-articles',
            template: __webpack_require__("./src/app/articles/articles.component.html"),
            styles: [__webpack_require__("./src/app/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nfooter{\r\n    padding: 20px 0;\r\n    /* font-size: calc(1vw + 1vh + .1vmin); */\r\n}\r\nfooter ul li{\r\n    list-style: none;\r\n}\r\nfooter ul li a{\r\n    text-decoration: none;\r\n    color: var(--black);\r\n    font-size: 1.4em;\r\n}\r\nfooter ul li a:hover{\r\n    background-color: var(--black);\r\n    color: var(--white)\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <footer>\n    <h4>CONTACT ME</h4>\n    <hr>\n    <ul>\n        <li><a href=\"\">Github</a></li>\n        <li><a href=\"\">Twitter</a></li>\n    </ul>\n</footer> -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "nav.mobile{\r\n    display: none;\r\n}\r\nnav{\r\n    padding: 42px 0px 42px 0px;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\nnav .nav-right{\r\n    padding-top: 4px;\r\n}\r\nnav ul li{\r\n    list-style: none;\r\n    display: inline;\r\n}\r\nnav .nav-right li a{\r\n    margin-left: 16px;\r\n}\r\nnav ul li a{\r\n    text-decoration: none;\r\n    color:var(--black);\r\n    font-size: 0.9em;\r\n    font-weight: bold;\r\n}\r\nnav ul li a:hover{\r\n    color: var(--teal);\r\n}\r\nnav ul li a.logo{\r\n    font-size: 1.8em;\r\n}\r\n/* Smartphones (portrait) */\r\n@media only screen and  (max-width: 768px) {\r\n    nav.standard{\r\n        display: none;\r\n    }\r\n    nav.mobile{\r\n        padding: 8px 0 0 0;\r\n        display: block;\r\n        margin-bottom: 8px;\r\n    }\r\n    nav.mobile ul li{\r\n        display: block;\r\n        padding: 16px;\r\n    }\r\n    nav.mobile .collapsible{\r\n        -webkit-box-shadow: 2px 3px 3px 1px rgba(60,60,60,0.2);\r\n        box-shadow: 2px 3px 3px 1px rgba(60,60,60,0.2);\r\n    }\r\n    nav img{\r\n        width: 32px;\r\n        height: 28px;\r\n        padding: 8px;\r\n        margin: 8px 16px 0 16px;\r\n        cursor: pointer;\r\n    }\r\n    nav img:hover{\r\n        background-color: #eee;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\">\n            <nav class='flex standard'>\n                <ul>\n                    <li><a [routerLink]=\"['']\" class='logo'>Me</a></li>\n                </ul>\n                <ul class='nav-right'>\n                    <li><a [routerLink]=\"['projects']\">PROJECTS</a></li>\n                    <li><a [routerLink]=\"['skills']\">SKILLS</a></li>\n                    <li><a [routerLink]=\"['articles']\">ARTICLES</a></li>\n                </ul>\n            </nav>\n            <nav class='mobile'>\n                <span class='float-right' (click)=\"navCollapse()\"><img src=\"assets/imgs/menu_ic.png\" alt=\"\"></span>\n                <ul>\n                    <li><a [routerLink]=\"['']\" class='logo'>Me</a></li>\n                </ul>\n                <ul>\n                    <div class=\"collapsible nav-content\">\n                        <li><a [routerLink]=\"['projects']\">PROJECTS</a></li>\n                        <li><a [routerLink]=\"['skills']\">SKILLS</a></li>\n                        <li><a [routerLink]=\"['articles']\">ARTICLES</a></li>\n                    </div>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"col-lg-2\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var nav = document.querySelector('.collapsible');
        nav.style.display = 'none';
    };
    HeaderComponent.prototype.navCollapse = function () {
        var nav = document.querySelector('.collapsible');
        if (nav.style.display === 'none') {
            nav.style.display = 'block';
        }
        else {
            nav.style.display = 'none';
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nh2{\r\n    margin: 16px 0;\r\n}\r\n\r\narticle{\r\n    line-height: 24px;\r\n    color:#999;\r\n}\r\n\r\narticle::after{\r\n    content: '|';\r\n    opacity: 1;\r\n    -webkit-animation: blink 0.7s infinite;\r\n            animation: blink 0.7s infinite;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    0%, 100%{opacity: 1;}\r\n    50%{ opacity: 0;}\r\n}\r\n\r\n@keyframes blink {\r\n    0%, 100%{opacity: 1;}\r\n    50%{ opacity: 0;}\r\n}\r\n\r\nimg{\r\n    width: 164px;\r\n    margin-top: 64px;\r\n}\r\n\r\n.show-on-mobile{\r\n    display: none;\r\n}\r\n\r\n/* Smartphones (portrait) */\r\n\r\n@media only screen and  (max-width: 768px) {\r\n\r\n    h1{\r\n        margin: 32px 0 32px 0;\r\n        font-size: 1em;\r\n    }\r\n    h2{\r\n        margin: 16px 0;\r\n        font-size: 0.7em;\r\n    }\r\n    section.me-character{\r\n        display: none;\r\n    }\r\n    .about{\r\n        background-color: #fff;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    article{\r\n        font-size: 0.6em;\r\n        line-height: 18px;\r\n    }\r\n\r\n    img{\r\n        width: 142px;\r\n    }\r\n\r\n    .show-on-mobile{\r\n        display: inline-block;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n        padding: 20px;\r\n        text-align: center;\r\n    }\r\n    .show-on-mobile img{\r\n        width: 100px;\r\n        background: #fff;\r\n    }\r\n}\r\n\r\n/* .btn{\r\n    background: transparent;\r\n    color:var(--teal);\r\n    cursor: pointer;\r\n    border-radius: 100px;\r\n    width: 200px;\r\n    height: 50px;\r\n    border: 2px solid var(--teal);\r\n    outline: none;\r\n    font-size: 1.1em;\r\n    margin: 200px;\r\n    padding: 5px;\r\n    -webkit-transition: 0.5s;\r\n    -o-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.btn:hover{\r\n    background: var(--teal);\r\n    color: white;\r\n    -webkit-box-shadow: 0px 2px 10px 1px var(--teal);\r\n    box-shadow: 0px 2px 10px 1px var(--teal);\r\n} */\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main container-fluid'>\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class='about'>\n                        <h1 class='title'>Hello World!</h1>\n                        <h2 class='subtitle'>I'm Carlos... </h2>\n                        <article>\n                          That's awesome!! I'm happy you are here. For now, there's nothing to see, the website is being created, maybe with time you'll see some good content and cool stuff.\n                          <br><br>I hope to see you again! #enjoythelife\n                        </article>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n                   <div class='me-character'>\n                       <img src=\"assets/imgs/pixel_me.png\" alt=\"Me\">\n                   </div>\n               </div>\n            </div>\n        </div>\n        <div class=\"col-lg-2\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectService = /** @class */ (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return ['FastFilm', 'GoldenBox', 'Game of Velha'];
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nul li{\r\n    list-style: none;\r\n    background: #fff;\r\n    margin-top: 24px;\r\n}\r\n\r\nul li a{\r\n    text-decoration: none;\r\n    color: #aaa;\r\n    font-size: 16px;\r\n    display: block;\r\n    border-bottom: 3px solid #aaa;\r\n}\r\n\r\nul li a:hover{\r\n    border-bottom: 3px solid var(--teal);\r\n    color: var(--teal);\r\n}\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\">\n            <h3 class='title'>My Projects</h3>\n            <nav>\n                <ul>\n                    <li *ngFor=\"let project of projects\">\n                        <a class='project-nane' target=\"_blank\" href=\"{{project.link}}\">\n                            {{project.name}}\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"col-lg-2\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service__ = __webpack_require__("./src/app/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService, http) {
        this.projectService = projectService;
        this.http = http;
        this.projects = [
            {
                'name': 'FastFilm',
                //'image': 'assets/imgs/projects/fastfilm.png',
                //'description': 'FastFilm is one Android app that you can use to find your favorites films in a fast and simple way; with a clear and easy-to-use interface. FastFilm fetch movies from OMDb API which is a "RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users."',
                'link': 'https://gitlab.com/henrywm/FastFilm'
            },
            {
                'name': 'GoldenBox',
                //'image': 'assets/imgs/projects/goldenbox.png',
                //'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in',
                'link': 'http://gitlab.com/henrywm/goldenbox'
            },
            {
                'name': 'Game of Velha',
                //'image': 'assets/imgs/projects/gameofvelha.png',
                //'description': 'Game of Velha is an android game based on the famous "tic tac toe". It has as differentials: the characteristic design and, mainly, the functionality of defining a maximum time allowed for each move.',
                'link': 'https://github.com/OficinaDoCodigo/GameOfVelha'
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.http.get("http://jsonplaceholder.typicode.com/users")
            .subscribe(function (data) { return console.log(data); });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\n}\n\nul li{\n    list-style: none;\n    color: var(--gray);\n    margin-bottom: 42px;\n}\n\nprogress{\n    background: #FFF;\n    color: #eee;\n}\n\nsmall{\n    color: #aaa;\n}\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main container-fluid'>\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\">\n            <h1 class='title'>Skills</h1>\n            <ul>\n                <li *ngFor=\"let skill of skills\">\n                    <div class='skill'>\n                        <h5>{{skill.title}}</h5>\n                        <small>{{skill.level}}</small>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" [style.width.%]=\"skill.levelNumber\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </li>\n\n            </ul>\n        </div>\n        <div class=\"col-lg-2\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.skills = [
            {
                "title": "Android SDK",
                "level": "Junior",
                "levelNumber": 35
            },
            {
                "title": "Kotlin",
                "level": "Junior",
                "levelNumber": 30
            },
            {
                "title": "Java",
                "level": "Junior",
                "levelNumber": 25
            },
            {
                "title": "Git/Github",
                "level": "Pleno",
                "levelNumber": 50
            }
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map