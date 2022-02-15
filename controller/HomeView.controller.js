sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    "sap/ui/table/Column",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, JSONModel, Column, Text ) {
        "use strict";

        return Controller.extend("Z.myworklis.controller.HomeView", {
            
    onInit : function () {
      },
      
    onExit : function () {
    }
        });
    });
