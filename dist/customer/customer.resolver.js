"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResolver = void 0;
const common = __importStar(require("@nestjs/common"));
const graphql = __importStar(require("@nestjs/graphql"));
const nestAccessControl = __importStar(require("nest-access-control"));
const gqlDefaultAuth_guard_1 = require("../auth/gqlDefaultAuth.guard");
const gqlACGuard = __importStar(require("../auth/gqlAC.guard"));
const customer_resolver_base_1 = require("./base/customer.resolver.base");
const Customer_1 = require("./base/Customer");
const customer_service_1 = require("./customer.service");
let CustomerResolver = class CustomerResolver extends customer_resolver_base_1.CustomerResolverBase {
    constructor(service, rolesBuilder) {
        super(service, rolesBuilder);
        this.service = service;
        this.rolesBuilder = rolesBuilder;
    }
};
CustomerResolver = __decorate([
    graphql.Resolver(() => Customer_1.Customer),
    common.UseGuards(gqlDefaultAuth_guard_1.GqlDefaultAuthGuard, gqlACGuard.GqlACGuard),
    __param(1, nestAccessControl.InjectRolesBuilder()),
    __metadata("design:paramtypes", [customer_service_1.CustomerService, nestAccessControl.RolesBuilder])
], CustomerResolver);
exports.CustomerResolver = CustomerResolver;
//# sourceMappingURL=customer.resolver.js.map