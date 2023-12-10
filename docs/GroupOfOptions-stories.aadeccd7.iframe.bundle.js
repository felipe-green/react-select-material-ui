"use strict";(self.webpackChunkreact_select_material_ui=self.webpackChunkreact_select_material_ui||[]).push([[880],{"./storybook/GroupOfOptions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithDefaultValues:()=>WithDefaultValues,WithValues:()=>WithValues,WithoutDefaultValuesNorValues:()=>WithoutDefaultValuesNorValues,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ReactSelectMaterialUi.tsx"),style={height:20},subOptions=[{label:"Group 1",options:[{label:"Group 1, option 1",value:"value 1.1"},{label:"Group 1, option 2",value:"value 1.2"}]},{label:"Group 2",options:[{label:"Group 2, option 1",value:"value 2.1"},{label:"Group 2, option 2",value:"value 2.2"}]},{label:"Option 3",value:"Value 3"},{label:"Option 4",value:"Value 4"}],option2value=function(option){return option.value},getValueOption=function(value,option){return void 0===option||void 0===option.label||option.label===value?value:'{value: "'.concat(value,'" | label: "').concat(option.label,'"}')},showSelectedValue=function(id){return function(value,option){var text="";text=Array.isArray(value)?value.map(function(v,i){return getValueOption(v,(null==option?void 0:option[i])||"")}).join(", "):getValueOption(value,option),document.getElementById(id).textContent=text}};let __WEBPACK_DEFAULT_EXPORT__={title:"Group of options",component:_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z};var WithoutDefaultValuesNorValues=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Single select",options:subOptions,fullWidth:!0,onChange:showSelectedValue("so1")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Multiple select",options:subOptions,SelectProps:{isMulti:!0},fullWidth:!0,onChange:showSelectedValue("so1")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style}),"The value passed in onChange(): ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"so1"}))},WithDefaultValues=function(){var _subOptions$0$options,_subOptions$1$options;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Single select",options:subOptions,defaultValue:null===(_subOptions$0$options=subOptions[0].options)||void 0===_subOptions$0$options?void 0:_subOptions$0$options[0].value,fullWidth:!0,onChange:showSelectedValue("so2")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Multiple select",options:subOptions,defaultValues:null===(_subOptions$1$options=subOptions[1].options)||void 0===_subOptions$1$options?void 0:_subOptions$1$options.map(option2value),SelectProps:{isMulti:!0},fullWidth:!0,onChange:showSelectedValue("so2")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style}),"The value passed in onChange(): ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"so2"}))},WithValues=function(){var _subOptions$0$options2,_subOptions$1$options2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Single select",options:subOptions,value:null===(_subOptions$0$options2=subOptions[0].options)||void 0===_subOptions$0$options2?void 0:_subOptions$0$options2[0].value,fullWidth:!0,onChange:showSelectedValue("so3")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ReactSelectMaterialUi__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"Multiple select",options:subOptions,values:null===(_subOptions$1$options2=subOptions[1].options)||void 0===_subOptions$1$options2?void 0:_subOptions$1$options2.map(option2value),SelectProps:{isMulti:!0},fullWidth:!0,onChange:showSelectedValue("so3")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:style}),"The value passed in onChange(): ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"so3"}))};let __namedExportsOrder=["WithoutDefaultValuesNorValues","WithDefaultValues","WithValues"]}}]);