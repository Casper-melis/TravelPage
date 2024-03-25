sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.fe.demo.travelpage.etx.connection", {
        onInit: function() {
            
            var oView = this.getView();
            var oConnectionsTable = oView.byId("connectionsTable");

            var ConnectionID = oEvent.getSource().getBindingContext().getProperty("ConnectionID");
            console.log(ConnectionID)

            // Apply filtering based on the booking_uuid
            var oBinding = oConnectionsTable.getBinding("items");
            oBinding.filter(new Filter("ConnectionID", FilterOperator.EQ, ConnectionID));
        }
    });
});
