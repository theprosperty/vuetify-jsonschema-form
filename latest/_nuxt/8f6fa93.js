(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1120:function(e,t,r){"use strict";r.r(t);var o=r(662),n=r(723),l={data:function(){return{title:"Configuration",defaultOptions:o.a,formats:o.b,localizedMessages:o.d,descriptions:{locale:'The default value is read in "$vuetify.lang.current". See the <a href="configuration#messages">Messages section</a>',defaultLocale:'The default value is read in "$vuetify.lang.defaultLocale".',rootDisplay:'equivalent of x-display annotation on the root object of the schema, can be "tabs" or "expansion-panels"',fieldProps:"props passed to the underlying components for simple fields (v-text-field, v-select, etc.)",fieldColProps:'props passed to the v-col component that wraps any field. Use "cols", "xs", "md", etc. to customize your form layout.',textFieldProps:"props passed to the underlying v-text-field components",textareaProps:"props passed to the underlying v-textarea components",numberProps:'props passed to the underlying v-text-field components with type="number"',sliderProps:"props passed to the underlying v-slider components",checkboxProps:"props passed to the underlying v-checkbox components",switchProps:"props passed to the underlying v-switch components",comboboxProps:"props passed to the underlying v-combobox components",selectProps:"props passed to the underlying components for select fields",fileInputProps:"props passed to the underlying v-file-input components",radioGroupProps:"props passed to the underlying v-radio-group components",radioItemProps:"props passed to the underlying v-radio-item components",tabsProps:"props passed to the underlying v-tabs component when relevant",expansionPanelsProps:"props passed to the underlying v-expansion-panels component when relevant",dialogProps:"props passed to the underlying v-dialog component when relevant",dialogCardProps:"props passed to the v-card component inside a v-dialog component when relevant",colorPickerProps:"props passed to the underlying v-color-picker component when relevant",timePickerProps:"props passed to the underlying v-time-picker component when relevant",datePickerProps:"props passed to the underlying v-date-picker component when relevant",arrayItemColProps:"props passed to the underlying v-col component of each item of an editable array",arrayItemCardProps:"props passed to the underlying v-card component of each item of an editable array",removeAdditionalProperties:"force the removal of properties found in the model but not defined in the schema",disableAll:"force disabling all fields ignoring the readOnly attributes",hideReadOnly:"by default read-only properties are rendered as disabled fields, set this to true to hide them entirely",deleteReadOnly:"set this to true to not only hide read-only properties, but also remove them from the model",hideTooltips:"by default descriptions are rendered as help tooltip on properties, set this to true to disable this functionality",disableSorting:"by default editable array are sortable, set this to true to disable this functionality",context:"an optional contextual information object, properties from here can be used as variables in URL templates",rules:"some custom rule functions that can be referenced by the x-rules annotation on properties",initialValidation:'configure display of properties validation errors at initial rendering of the form ("all" to show validation errors of all properties, "defined" to show validation errors of the properties with pre-existing content, "none" to wait for user interactions of explicit call of the validate method)',idPrefix:"a prefix applied to generated ids if you want to prevent potential conflicts",markdownit:"options given to markdownit if you leave the markdown option to its default value",editMode:'change the way editable arrays are rendered. Use "dialog" to edit items in separate dialogs, use "inline" to edit items in place.',autofocus:"attempt to give focus to the first simple field rendered.",autoFixArrayItems:"modify the items of arrays existing in the model (set default values, set const values, remove additional properties), you can try disabling this if you run into performance issues",useValidator:'See the <a href="configuration#validator">JSON schema validator section</a>. Activate using the validator to display validation errors as a complement to the validation rules managed by vjsf directly.',evalMethod:'See the <a href="configuration#expressions">Expressions section</a>. For security reasons this option can only be changed in the main options object given to vjsf, not in x-options annotations inside the schema.',easyMDEOptions:'See <a href="https://github.com/Ionaru/easy-markdown-editor">EasyMDE documentation</a>'},locale:"en",iconSets:o.c,iconSet:"mdi"}},head:function(){return{title:"vjsf - "+this.title}},mounted:function(){this.$route.hash&&(location.hash=this.$route.hash,Object(n.a)(this.$route.hash,!1))}},d=r(98),c=r(138),m=r.n(c),v=r(114),h=r(378),f=r(707),_=r(136),x=r(377),y=r(668),w=r(710),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("h1",{staticClass:"display-1 mb-4"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"options"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#options"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      Options\n    ")],1),e._v(" "),r("p",[e._v('\n      Options can be passed to vjsf using the options prop or can be defined more locally on a specific property using the "x-options" annotation.\n      Children properties will inherit from the options defined in their parents.\n    ')]),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("\n            Key\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Default\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Description\n          ")])])]),e._v(" "),r("tbody",[e._l(Object.keys(e.defaultOptions),(function(t){return r("tr",{key:t},[r("td",[e._v(e._s(t))]),e._v(" "),r("td",[e._v(e._s(JSON.stringify(e.defaultOptions[t],null,2)))]),e._v(" "),r("td",{domProps:{innerHTML:e._s(e.descriptions[t])}})])})),e._v(" "),r("tr",[r("td",[e._v("markdown")]),e._v(" "),r("td",[e._v("window.markdownit().render if markdownit is available, identity function otherwise")]),e._v(" "),r("td",[e._v("a function that takes a markdown text and returns HTML, used for descriptions and slots")])]),e._v(" "),r("tr",[r("td",[e._v("httpLib")]),e._v(" "),r("td",[e._v("this.axios or this.$http or this.$axios or window.axios")]),e._v(" "),r("td",[e._v("a simple HTTP client used to fetch select options from HTTP requests")])])],2)])],1),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"messages"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#messages"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      Messages\n    ")],1),e._v(" "),r("p",[e._v('\n      You can define a special "messages" option to overwrite the default localized messages.\n    ')]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"2"}},[r("v-select",{attrs:{items:Object.keys(e.localizedMessages),label:"Locale","hide-details":"",dense:""},model:{value:e.locale,callback:function(t){e.locale=t},expression:"locale"}})],1)],1),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("\n            Message key\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Default\n          ")])])]),e._v(" "),r("tbody",e._l(Object.keys(e.localizedMessages[e.locale]),(function(t){return r("tr",{key:t},[r("td",[e._v(e._s(t))]),e._v(" "),r("td",[e._v(e._s(e.localizedMessages[e.locale][t]))])])})),0)])],1),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"icons"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#icons"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      Icons\n    ")],1),e._v(" "),r("p",[e._v('\n      You can define a special "icons" option to overwrite the default icons. Default icons are initialized based on current iconfont configured on your Vuetify instance.\n    ')]),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"2"}},[r("v-select",{attrs:{items:Object.keys(e.iconSets),label:"Icon set","hide-details":"",dense:""},model:{value:e.iconSet,callback:function(t){e.iconSet=t},expression:"iconSet"}})],1)],1),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("\n            Icon key\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Default\n          ")])])]),e._v(" "),r("tbody",e._l(Object.keys(e.iconSets[e.iconSet]),(function(t){return r("tr",{key:t},[r("td",[e._v(e._s(t))]),e._v(" "),r("td",[e._v(e._s(e.iconSets[e.iconSet][t]))])])})),0)])],1),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"formatting"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#formatting"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      Formatting functions\n    ")],1),e._v(" "),r("p",[e._v('\n      You can define a special "formats" option to overwrite the default formatting functions that are used to display some field values.\n    ')]),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("\n            Message key\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Default\n          ")])])]),e._v(" "),r("tbody",e._l(Object.keys(e.formats),(function(t){return r("tr",{key:t},[r("td",[e._v(e._s(t))]),e._v(" "),r("td",[e._v(e._s(e.formats[t]))])])})),0)])],1),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"annotations"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#annotations"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      Annotations\n    ")],1),e._v(" "),r("p",[e._v('\n      Annotation is the name we give to special attributes defined on properties in your schema.\n      These attributes are prefixed by "x-" to signify that they are not part of the standard JSON schema syntax.\n      They should be ignored by validators and other tools.\n    ')]),e._v(" "),r("p",[e._v("\n      Disclaimer: the following list contains only very brief explanations. The real documentation is in the examples.\n    ")]),e._v(" "),r("p"),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left",staticStyle:{"min-width":"250px"}},[e._v("\n            Annotation key\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Usage\n          ")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("x-options")]),e._v(" "),r("td",[e._v("Overwrite some of the options for this property and its children.")])]),e._v(" "),r("tr",[r("td",[e._v("x-display")]),e._v(" "),r("td",[e._v("Used to switch the rendering mode of a property. We try to use as little of these as possible and rely on indications from the standard JSON schema syntax itself to render the form, but sometimes some ambiguity has to be resolved this way. For example this is used to force rendering sections as tabs or expansion panels.")])]),e._v(" "),r("tr",[r("td",[e._v("x-fromUrl / x-fromData")]),e._v(" "),r("td",[e._v("Used to populate selects from the results of HTTP requests or some other part of the model. See the "),r("a",{attrs:{href:"configuration#expressions"}},[e._v("Expressions section")]),e._v(" for possibilities of x-fromData.")])]),e._v(" "),r("tr",[r("td",[e._v("x-itemKey / x-itemTitle / x-itemIcon")]),e._v(" "),r("td",[e._v("Used to configure rendering of options in selects.")])]),e._v(" "),r("tr",[r("td",[e._v("x-props")]),e._v(" "),r("td",[e._v("An object of props to pass directly to the underlying Vuetify component.")])]),e._v(" "),r("tr",[r("td",[e._v("x-cols")]),e._v(" "),r("td",[e._v("The width of the v-col component wrapping the property (default is 12). You can use the fieldColProps option for further layout customization.")])]),e._v(" "),r("tr",[r("td",[e._v("x-slots")]),e._v(" "),r("td",[e._v("An object of textual contents to be displayed before and after the property or to be passed as slots to the underlying vuetify component.")])]),e._v(" "),r("tr",[r("td",[e._v("x-rules")]),e._v(" "),r("td",[e._v("Some custom rule functions for validating this property.")])]),e._v(" "),r("tr",[r("td",[e._v("x-rules")]),e._v(" "),r("td",[e._v("Some custom rule functions for validating this property.")])])])])],1),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"expressions"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#expressions"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      Expressions\n    ")],1),e._v(" "),r("p",[e._v("\n      Some functionalities require expressions given in the JSON schema and evaluated using contextual data.\n      For example the x-if and fromData annotations use these expressions.\n      The method used to evaluate the expressions can be changed with the evalMethod option, possible values are:\n    ")]),e._v(" "),r("p",[e._v("\n      You can debug expressions by setting "),r("code",[e._v("localStorage.debug = 'vjsf:expr'")]),e._v(".\n    ")]),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left",staticStyle:{"min-width":"250px"}},[e._v("\n            Value of evalMethod\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Explanation\n          ")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("propertyExpr (default)")]),e._v(" "),r("td",[e._v("Based on the "),r("a",{attrs:{href:"https://www.npmjs.com/package/property-expr"}},[e._v("property-expr module")]),e._v(". Expressions are simple deep getters into the contextual data.")])]),e._v(" "),r("tr",[r("td",[e._v("evalExpr")]),e._v(" "),r("td",[e._v("Based on the "),r("a",{attrs:{href:"https://www.npmjs.com/package/expr-eval"}},[e._v("eval-expr module")]),e._v(". Only logical expressions are allowed.")])]),e._v(" "),r("tr",[r("td",[e._v("newFunction")]),e._v(" "),r("td",[e._v("\n            Based on "),r("a",{attrs:{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function"}},[e._v("dynamically created JS functions")]),e._v(". Expressions are complete JS expressions.\n            "),r("br"),e._v(" "),r("b",[e._v("WARNING ! ")]),e._v(" This method implies that you trust the source of the JSON schema as much as you trust your own source code.\n          ")])])])]),e._v(" "),r("p",[r("b",[e._v("Call for help:")]),e._v(" if someone knows of a better solution for this problem, for example a library with rich expression evaluation but without the security liability of using new Function, please submit a ticket or a pull request !")]),e._v(" "),r("p",[e._v("The expressions are given some contextual data as input, here are its members:")]),e._v(" "),r("v-simple-table",{staticClass:"mb-6",attrs:{dense:"",dark:""}},[r("thead",[r("tr",[r("th",{staticClass:"text-left",staticStyle:{"min-width":"250px"}},[e._v("\n            Data\n          ")]),e._v(" "),r("th",{staticClass:"text-left"},[e._v("\n            Explanation\n          ")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("root")]),e._v(" "),r("td",[e._v("The main complete model being handled by vjsf.")])]),e._v(" "),r("tr",[r("td",[e._v("model")]),e._v(" "),r("td",[e._v("The model being handled by vjsf at this level in the schema definition.")])]),e._v(" "),r("tr",[r("td",[e._v("context")]),e._v(" "),r("td",[e._v("The options.context object.")])]),e._v(" "),r("tr",[r("td",[e._v("parent.value")]),e._v(" "),r("td",[e._v("The parent object in the model.")])]),e._v(" "),r("tr",[r("td",[e._v("parent.parent.value")]),e._v(" "),r("td",[e._v("The grand-parent object in the model. Etc.")])])])])],1),e._v(" "),r("div",{staticClass:"configuration-wrapper"},[r("h2",{staticClass:"headline my-4",attrs:{id:"validator"}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"configuration",hash:"#validator"}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v("\n      JSON schema validator\n    ")],1),e._v(" "),r("p",[e._v("\n      Some functionalities require that you provide a JSON schema validator.\n      This is the case for the if/then/else syntax and for the useValidator option.\n      You can provide the validator using different methods:\n    ")]),e._v(" "),r("ul",[r("li",[e._v("If you load third-party.js "),r("a",{attrs:{href:"https://github.com/ajv-validator/ajv"}},[e._v("Ajv")]),e._v(" will be used along with ajv-formats and ajv-i18n.")]),e._v(" "),r("li",[e._v("You can provide Ajv, ajvAddFormats and ajvLocalize as global variables or as options and an ajv instance will be created.")]),e._v(" "),r("li",[e._v("You can provide an ajv instance in the ajv option.")]),e._v(" "),r("li",[e._v("You can provide a validator function as an option. This function must accept a schema and return a function that will take a model and return either null (no error) or an error message as a string.")])])])])}),[],!1,null,"4f19d5c4",null);t.default=component.exports;m()(component,{VBtn:v.a,VCol:h.a,VContainer:f.a,VIcon:_.a,VRow:x.a,VSelect:y.a,VSimpleTable:w.a})},662:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return c}));r(31),r(27),r(79);var o=r(709),n={locale:"",defaultLocale:"",rootDisplay:"",objectContainerClass:"",sectionsClass:"pl-2 pt-2",sectionsTitlesClasses:["title","subtitle-1","subtitle-2"],arrayItemsTitlesClasses:["title","subtitle-1","subtitle-2"],childrenClass:"",fieldProps:{},fieldColProps:{cols:12},readOnlyFieldProps:{hideDetails:!0},textFieldProps:{},textareaProps:{filled:!0},numberProps:{},sliderProps:{},checkboxProps:{},switchProps:{},comboboxProps:{},selectProps:{},fileInputProps:{},radioGroupProps:{},radioItemProps:{},tabsProps:{grow:!0},expansionPanelsProps:{mandatory:!0},dialogProps:{maxWidth:500},dialogCardProps:{},colorPickerProps:{},timePickerProps:{},datePickerProps:{scrollable:!0},arrayItemCardProps:{},arrayItemColProps:{cols:12},stepperProps:{},verticalStepperProps:{},tooltipProps:{left:!0,openOnHover:!1,openOnClick:!0},removeAdditionalProperties:!0,disableAll:!1,hideReadOnly:!1,hideReadOnlyLabels:!1,hideReadOnlyEmpty:!1,hideReadOnlyTooltips:!1,deleteReadOnly:!1,hideInArrayItem:!1,filesAsDataUrl:!1,hideTooltips:!1,disableSorting:!1,sortableOptions:{},context:{},rules:{},initialValidation:"defined",idPrefix:"",markdownit:{},editMode:"dialog",arrayOperations:["create","update","duplicate","copy","paste","delete"],autofocus:!1,httpOptions:{},selectAll:!1,autoFixArrayItems:!0,useValidator:!1,evalMethod:"propertyExpr",easyMDEOptions:{}},l={en:{required:"This information is required",noData:"No matching value found",search:"Search...",minimum:"The value must be greater than or equal to {minimum}",exclusiveMinimum:"The value must be greater than {exclusiveMinimum}",maximum:"The value must be lower than or equal to {maximum}",exclusiveMaximum:"The value must be lower than {exclusiveMaximum}",minLength:"{minLength} characters minimum",maxLength:"{maxLength} characters maximum",minItems:"No less than {minItems} items",maxItems:"No more than {maxItems} items",pattern:"The expected pattern is not satisfied",mdeLink1:"[Link title",mdeLink2:"](link url)",mdeImg1:"![](",mdeImg2:"image url)",mdeTable1:"",mdeTable2:"\n\n| Column 1 | Column 2 | ColoColumnnne 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n",bold:"Bold",italic:"Italic",heading:"Title",quote:"Quote",unorderedList:"Unordered list",orderedList:"Ordered list",createLink:"Create a link",insertImage:"Insert an image",createTable:"Create a table",preview:"Aperçu du rendu",mdeGuide:"Documentation de la syntaxe",undo:"Undo",redo:"Redo",selectAll:"Select all",stepperContinue:"continue",openMenu:"open menu",delete:"delete",duplicate:"duplicate",copy:"copy",paste:"paste"},fr:{required:"Cette information est obligatoire",noData:"Aucun élément correspondant",search:"Recherchez...",minimum:"La valeur doit être supérieure ou égale à {minimum}",exclusiveMinimum:"La valeur doit être supérieure {exclusiveMinimum}",maximum:"La valeur doit être inférieure ou égale à {maximum}",exclusiveMaximum:"La valeur doit être inférieure à {exclusiveMaximum}",minLength:"{minLength} caractères minimum",maxLength:"{maxLength} caractères maximum",minItems:"Au moins {minItems} éléments",maxItems:"Au plus {maxItems} éléments",pattern:"Le format attendu n'est pas respecté",mdeLink1:"[titre du lien",mdeLink2:"](adresse du lien)",mdeImg1:"![](",mdeImg2:"adresse de l'image)",mdeTable1:"",mdeTable2:"\n\n| Colonne 1 | Colonne 2 | Colonne 3 |\n| -------- | -------- | -------- |\n| Texte     | Texte     | Texte     |\n\n",bold:"Gras",italic:"Italique",heading:"Titre",quote:"Citation",unorderedList:"Liste à puce",orderedList:"Liste numérotée",createLink:"Créer un lien",insertImage:"Insérer une image",createTable:"Créer un tableau",preview:"Preview",mdeGuide:"Syntax documentation",undo:"Défaire",redo:"Refaire",selectAll:"Tout sélectionner",stepperContinue:"continuer",openMenu:"ouvrir le menu",delete:"supprimer",duplicate:"dupliquer",copy:"copier",paste:"coller"},es:{required:"Esta información es requerida",noData:"No se encontraron valores coincidentes",search:"Buscar...",minimum:"El valor debe ser mayor o igual que {minimum}",exclusiveMinimum:"El valor debe ser mayor que {exclusiveMinimum}",maximum:"El valor debe ser menor o igual a {maximum}",exclusiveMaximum:"El valor debe ser inferior a {exclusiveMaximum}",minLength:"{minLength} caracteres mínimo",maxLength:"{maxLength} caractères máximo",minItems:"Al menos {minItems} articulos",maxItems:"Hasta {maxItems} articulos",pattern:"El formato esperado no se respeta",selectAll:"Seleccionar todo",stepperContinue:"continuar"},de:{required:"Diese Informationen sind erforderlich",noData:"Keine passenden Artikel",search:"Suche...",minimum:"Der Wert muss größer oder gleich {minimum} sein",exclusiveMinimum:"Der Wert muss größer als {exclusiveMinimum} sein",maximum:"Der Wert muss kleiner oder gleich {maximum} sein",exclusiveMaximum:"Der Wert muss kleiner als {exclusiveMaximum} sein",minLength:"Mindestens {minLength} Zeichen",maxLength:"Maximal {maxLength} Zeichen",minItems:"Mindestens {minItems} Elemente",maxItems:"Bis zu {maxItems} Artikel",pattern:"Das erwartete Format wird nicht eingehalten",selectAll:"Wählen Sie Alle",stepperContinue:"weiter"},ar:{required:"هذه المعلومة مطلوبة",noData:"لم يتم العثور على قيمة",search:"جاري البحث...",minimum:"{exclusiveMinimum} القيمة يجب أن تكون أكبر من",exclusiveMinimum:"{exclusiveMinimum} القيمة يجب أن تكون أكبر من",maximum:"{maximum} القيمة يجب أن تكون أقل من",exclusiveMaximum:"{exclusiveMaximum} القيمة يجب أن تكون أقل من",minLength:"{minLength} الحد الأدنى للحروف المطلوبة هو",maxLength:"{maxLength} الحد الأقصى للحروف المطلوبة هو",minItems:"قطع {minItems} لا يمكن اختيار أقل من ",maxItems:"قطع {maxItems} لا يمكن اختيار أكثر من ",pattern:"لا يوجد تشابه مع النموذج المطلوب",selectAll:"اختر الكل",stepperContinue:"استمر"},tr:{required:"Zorunlu alan",noData:"Bilgi yok",search:"Arıyor...",minimum:"Değer {minimum} dan büyük olmalı",exclusiveMinimum:"Değer {exclusiveMinimum} dan büyük olmalı",maximum:"Değer, {maximum} değerinden küçük veya ona eşit olmalıdır",exclusiveMaximum:"Değer {exclusiveMaximum} dan küçük olmalı",minLength:"{minLength} asgari karakter sayısı",maxLength:"{maxLength} azami  karakter sayısı",minItems:"En az seçenek sayısı {minItems}",maxItems:"En çok seçenek sayısı {maxItems}",pattern:"İstenilen paten tutmuyor",selectAll:"Hepsini seç",stepperContinue:"devam et"},nl:{required:"Deze informatie is vereist",noData:"Geen overeenkomstig resultaat gevonden",search:"Zoeken...",minimum:"De waarde moet groter zijn dan of gelijk zijn aan {minimum}",exclusiveMinimum:"Waarde moet meer zijn dan {exclusiveMinimum}",maximum:"De waarde moet lager zijn dan of gelijk zijn aan {maximum}",exclusiveMaximum:"Waarde moet minder zijn dan {exclusiveMaximum}",minLength:"Minimaal {minLength} tekens",maxLength:"Maximaal {maxLength} tekens",minItems:"Minimaal {minItems} antwoorden",maxItems:"Maximaal {maxItems} antwoorden",pattern:"Invoer voldoet niet aan verwachte patroon",selectAll:"Selecteer alles",stepperContinue:"doorgaan"}},d={time:function(e,t){var r=new Date("".concat((new Date).toISOString().split("T")[0],"T").concat(e));return new Date(r.getTime()+6e4*r.getTimezoneOffset()).toLocaleTimeString(t)},date:function(e,t){var r=new Date(e);return new Date(r.getTime()+6e4*r.getTimezoneOffset()).toLocaleDateString(t)},"date-time":function(e,t){return new Date(e).toLocaleString(t)}},c={mdiSvg:{calendar:o.a,clock:o.b,info:o.h,add:o.j,edit:o.i,delete:o.f,arrayMenu:o.g,duplicate:o.d,copy:o.c,paste:o.e},mdi:{calendar:"mdi-calendar",clock:"mdi-clock",info:"mdi-information",add:"mdi-plus",edit:"mdi-pencil",delete:"mdi-delete",arrayMenu:"mdi-dots-vertical",duplicate:"mdi-plus-circle-multiple-outline",copy:"mdi-content-copy",paste:"mdi-content-paste"},md:{calendar:"event",clock:"clock",info:"info",add:"add",edit:"create",delete:"delete",arrayMenu:"more_vert",duplicate:"control_point_duplicate",copy:"copy",paste:"paste"},fa:{calendar:"fa-calendar",clock:"fa-clock",info:"fa-info",add:"fa-plus",edit:"fa-edit",delete:"fa-trash",arrayMenu:"fa-ellipsis-vertical",duplicate:"fa-layer-plus",copy:"fa-copy",paste:"fa-paste"}}},670:function(e,t,r){var content=r(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("7c06aa28",content,!0,{sourceMap:!1})},671:function(e,t,r){var o=r(21)(!1);o.push([e.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),e.exports=o},710:function(e,t,r){"use strict";r(11),r(10),r(13),r(5),r(16),r(9),r(17);var o=r(2),n=(r(30),r(670),r(0)),l=r(26),d=r(7);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(d.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},723:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(36),n=(r(97),r(5),r(52),function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",document.querySelector(t)||new Promise((function(e,o){if(r>50)return e();setTimeout((function(){e(n(t,++r||1))}),100)})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());function l(e){return d.apply(this,arguments)}function d(){return d=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,o,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(l.length>1&&void 0!==l[1])||l[1],e.next=3,n(t);case 3:if(o=e.sent){e.next=6;break}return e.abrupt("return");case 6:if(!r||!("scrollBehavior"in document.documentElement.style)){e.next=10;break}return e.abrupt("return",window.scrollTo({top:o.offsetTop,behavior:"smooth"}));case 10:return e.abrupt("return",window.scrollTo(0,o.offsetTop));case 11:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}},776:function(e,t,r){"use strict";var o=r(43),n=r(130),l=r(67),d=r(82),c=r(53).f;o&&(c(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),t=d(e);return 0==t?void 0:e[t-1]},set:function(e){var t=l(this),r=d(t);return t[0==r?0:r-1]=e}}),n("lastItem"))}}]);