"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = exports.appBindings = void 0;
const inversify_1 = require("inversify");
const app_1 = require("./app");
const types_1 = require("./types");
const logger_service_1 = require("./logger/logger.service");
const character_controller_1 = require("./characters/character.controller");
const location_controller_1 = require("./locations/location.controller");
const episode_controller_1 = require("./episodes/episode.controller");
const exeption_filter_1 = require("./errors/exeption.filter");
exports.appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
    bind(types_1.TYPES.ExeptionFilter).to(exeption_filter_1.ExeptionFilter);
    bind(types_1.TYPES.CharacterController).to(character_controller_1.CharacterController);
    bind(types_1.TYPES.LocationController).to(location_controller_1.LocationController);
    bind(types_1.TYPES.EpisodeController).to(episode_controller_1.EpisodeController);
    bind(types_1.TYPES.Application).to(app_1.App);
});
function bootstrap() {
    const appContainer = new inversify_1.Container();
    appContainer.load(exports.appBindings);
    const app = appContainer.get(types_1.TYPES.Application);
    app.init();
    return { appContainer, app };
}
_a = bootstrap(), exports.app = _a.app, exports.appContainer = _a.appContainer;
//# sourceMappingURL=server.js.map