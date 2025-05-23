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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaQueryPayload = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
let MetaQueryPayload = class MetaQueryPayload {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Number)
], MetaQueryPayload.prototype, "count", void 0);
MetaQueryPayload = __decorate([
    (0, graphql_1.ObjectType)()
], MetaQueryPayload);
exports.MetaQueryPayload = MetaQueryPayload;
//# sourceMappingURL=MetaQueryPayload.js.map