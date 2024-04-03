Ext.define("MyApp.form.field.VTypes", {
  override: "Ext.form.field.VTypes",

  customEmail: function (val, field) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  },
  customEmailText: "Please enter a valid email address.",

  customPass: function (val, field) {
    return /^.{4,}$/.test(val);
  },
  customPassText: "Not a valid password. Length must be at least 4 characters.",
});
