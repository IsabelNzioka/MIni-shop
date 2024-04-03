Ext.define("Mini.mixin.GridMixin", {
  getSelectedRecordsByXType: function (xtype) {
    let grid = Ext.ComponentQuery.query(xtype)[0];
    return grid.getSelectionModel().getSelection();
  },
  getSelectedRecordByXType: function (xtype) {
    let records = this.getSelectedRecordsByXType(xtype);
    if (records && records.length > 0) {
      return records[0];
    }
    return null;
  },
  getSelectedRecordsByGridItemId: function (gridId) {
    let grid = Ext.ComponentQuery.query("#" + gridId)[0];
    return grid.getSelectionModel().getSelection();
  },
  getSelectedRecordGridItemId: function (gridId) {
    let records = this.getSelectedRecordsByGridItemId(gridId);
    if (records && records.length > 0) {
      return records[0];
    }
    return null;
  },
  showToast: function (message) {
    Ext.toast({
      html: message,
      title: "Success",
      width: 200,
      align: "t",
    });
  },
});
