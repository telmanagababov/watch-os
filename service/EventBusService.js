class EventBusService {

    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    on (eventType, handler) {
        this.$rootScope.$on(eventType, handler);
    }

    broadcast (eventType, data) {
        this.$rootScope.$broadcast(eventType, data);
    }
}

EventBusService.$inject = ["$rootScope"];

export default EventBusService;