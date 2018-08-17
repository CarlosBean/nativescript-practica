"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.email = '';
        this.password = '';
    }
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            return (this.error = 'No coinciden las contraseñas');
        }
        this.error = '';
        console.log(this.email, this.password);
        firebase
            .createUser({
            email: this.email,
            password: this.password
        })
            .then(function (response) { return console.log('Resultadode la operación: ', response); })
            .catch(function (err) {
            _this.error = JSON.stringify(err);
            console.log(err);
        });
    };
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'ns-signup',
            moduleId: module.id,
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdURBQTBEO0FBUTFEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxRQUFRO2FBQ0wsVUFBVSxDQUFDO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQzthQUNyRSxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixjQUFrQixDQUFDO0lBOUJSLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7O09BQ1csZUFBZSxDQStCM0I7SUFBRCxzQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc2lnbnVwJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ251cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcHVibGljIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbWFpbCA9ICcnO1xuICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgfVxuXG4gIHB1YmxpYyBzaWduVXAoKSB7XG4gICAgaWYgKHRoaXMucGFzc3dvcmQgIT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiAodGhpcy5lcnJvciA9ICdObyBjb2luY2lkZW4gbGFzIGNvbnRyYXNlw7FhcycpO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSAnJztcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpO1xuXG4gICAgZmlyZWJhc2VcbiAgICAgIC5jcmVhdGVVc2VyKHtcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1Jlc3VsdGFkb2RlIGxhIG9wZXJhY2nDs246ICcsIHJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gSlNPTi5zdHJpbmdpZnkoZXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==