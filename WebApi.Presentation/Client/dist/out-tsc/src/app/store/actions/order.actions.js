import { createAction, props } from "@ngrx/store";
export var OrdersActions;
(function (OrdersActions) {
    OrdersActions["GET_ORDER"] = "[Order] Get Order";
    OrdersActions["GET_ORDER_SUCCESS"] = "[Order] Get Order Success";
    OrdersActions["GET_ORDER_FAILURE"] = "[Order] Get Order Failure";
    OrdersActions["GET_ORDERS"] = "[Order] Get Orders";
    OrdersActions["GET_ORDERS_SUCCESS"] = "[Order] Get Orders Success";
    OrdersActions["GET_ORDERS_FAILURE"] = "[Order] Get Orders Failure";
    OrdersActions["ADD_ORDER"] = "[Order] Add Order";
    OrdersActions["ADD_ORDER_SUCCESS"] = "[Order] Add Order Success";
    OrdersActions["ADD_ORDER_FAILURE"] = "[Order] Add Order Failure";
    OrdersActions["REMOVE_ORDER"] = "[Order] Remove Order";
    OrdersActions["REMOVE_ORDER_SUCCESS"] = "[Order] Remove Order Success";
    OrdersActions["REMOVE_ORDER_FAILURE"] = "[Order] Remove Order Failure";
    OrdersActions["ADD_PRODUCT_TO_ORDER"] = "[Order] Add Product To Order";
    OrdersActions["REMOVE_SELECTED_ORDER"] = "[Order] Remove selected Order";
    OrdersActions["UPDATE_ORDER"] = "[Order] Update Order";
    OrdersActions["UPDATE_ORDER_SUCCESS"] = "[Order] Update Order Success";
    OrdersActions["UPDATE_ORDER_FAILURE"] = "[Order] Update Order Failure";
})(OrdersActions || (OrdersActions = {}));
export const removeSelectedOrder = createAction(OrdersActions.REMOVE_SELECTED_ORDER);
export const addProductToOrder = createAction(OrdersActions.ADD_PRODUCT_TO_ORDER, props());
export const getOrder = createAction(OrdersActions.GET_ORDER, props());
export const getOrderSuccess = createAction(OrdersActions.GET_ORDER_SUCCESS, props());
export const getOrderFailure = createAction(OrdersActions.GET_ORDER_FAILURE, props());
export const getOrders = createAction(OrdersActions.GET_ORDERS);
export const getOrdersSuccess = createAction(OrdersActions.GET_ORDERS_SUCCESS, props());
export const getOrdersFailure = createAction(OrdersActions.GET_ORDERS_FAILURE, props());
export const addOrder = createAction(OrdersActions.ADD_ORDER, props());
export const addOrderSuccess = createAction(OrdersActions.ADD_ORDER_SUCCESS, props());
export const addOrderFailure = createAction(OrdersActions.ADD_ORDER_FAILURE, props());
export const updateOrder = createAction(OrdersActions.UPDATE_ORDER, props());
export const updateOrderSuccess = createAction(OrdersActions.UPDATE_ORDER_SUCCESS, props());
export const updateOrderFailure = createAction(OrdersActions.UPDATE_ORDER_FAILURE, props());
export const removeOrder = createAction(OrdersActions.REMOVE_ORDER, props());
export const removeOrderSuccess = createAction(OrdersActions.REMOVE_ORDER_SUCCESS);
export const removeOrderFailure = createAction(OrdersActions.REMOVE_ORDER_FAILURE, props());
//# sourceMappingURL=order.actions.js.map