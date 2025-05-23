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
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const StringFilter_1 = require("../../util/StringFilter");
let UserWhereInput = class UserWhereInput {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => StringNullableFilter_1.StringNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    (0, class_transformer_1.Type)(() => StringNullableFilter_1.StringNullableFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    (0, class_transformer_1.Type)(() => StringFilter_1.StringFilter),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "username", void 0);
UserWhereInput = __decorate([
    (0, graphql_1.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=UserWhereInput.js.map