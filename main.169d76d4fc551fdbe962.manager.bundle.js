(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[179],{18253:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useGlobals=__webpack_require__(86141).useGlobals,React=__webpack_require__(67294),_require2=__webpack_require__(77428),addons=_require2.addons,types=_require2.types,_require3=__webpack_require__(63398),Icons=_require3.Icons,IconButton=_require3.IconButton,localeList=__webpack_require__(73943),useEffect=React.useEffect;addons.register("i18n-party",(function(){addons.add("i18n-party",{title:"rotates through every i18n locale",type:types.TOOL,match:function(){return!0},render:function(){var _useGlobals2=_slicedToArray(useGlobals(),2),globals=_useGlobals2[0],updateGlobals=_useGlobals2[1];return useEffect((function(){if(globals.localeParty){var interval=setInterval((function(){var nextIndex=(localeList.findIndex((function(_ref){return _ref.code===globals.locale}))+1)%localeList.length,nextLocale=localeList[nextIndex].code;updateGlobals({locale:nextLocale})}),2e3);return function(){return clearInterval(interval)}}})),React.createElement(IconButton,{onClick:function(){return updateGlobals({localeParty:!globals.localeParty})}},React.createElement(Icons,{icon:globals.localeParty?"star":"starhollow"}),React.createElement("span",null," Shuffle i18n locale"))}})}))},26923:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var esm=__webpack_require__(1173);const metamask_storybook_theme=(0,__webpack_require__(65316).create)({base:"light",brandTitle:"MetaMask Storybook",fontBase:"Euclid Circular B, Roboto, Helvetica, Arial, sans-serif",fontCode:"Inconsolata, monospace"});esm.KP.setConfig({theme:metamask_storybook_theme})},24654:()=>{},73943:module=>{"use strict";module.exports=JSON.parse('[{"code":"am","name":"አማርኛ"},{"code":"ar","name":"العربية"},{"code":"bg","name":"български"},{"code":"bn","name":"বাংলা"},{"code":"ca","name":"Català"},{"code":"cs","name":"Čeština"},{"code":"da","name":"Dansk"},{"code":"de","name":"Deutsch"},{"code":"el","name":"ελληνικά"},{"code":"en","name":"English"},{"code":"es","name":"Español"},{"code":"es_419","name":"Español (Latin America)"},{"code":"et","name":"Estonian"},{"code":"fa","name":"فارسی"},{"code":"fi","name":"Suomi"},{"code":"fil","name":"Filipino"},{"code":"fr","name":"Français"},{"code":"gu","name":"ગુજરાત"},{"code":"he","name":"עברית"},{"code":"hi","name":"मानक हिन्दी"},{"code":"hn","name":"हिन्दी"},{"code":"hr","name":"Hrvatski"},{"code":"ht","name":"Kreyòl ayisyen"},{"code":"hu","name":"Magyar"},{"code":"id","name":"Bahasa Indonesia"},{"code":"it","name":"Italiano"},{"code":"ja","name":"日本語"},{"code":"kn","name":"ಕನ್ನಡ"},{"code":"ko","name":"한국어"},{"code":"lt","name":"Lietuviškai"},{"code":"lv","name":"Latvian"},{"code":"ml","name":"മലയാളം"},{"code":"mr","name":"मराठी"},{"code":"ms","name":"Malay"},{"code":"nl","name":"Nederlands"},{"code":"no","name":"Norwegian"},{"code":"ph","name":"Pilipino"},{"code":"pl","name":"Polskie"},{"code":"pt","name":"Português"},{"code":"pt_BR","name":"Português (Brazillian)"},{"code":"pt_PT","name":"Português (European)"},{"code":"ro","name":"Limba română"},{"code":"ru","name":"Русский"},{"code":"sk","name":"Slovenčina"},{"code":"sl","name":"Slovenščina"},{"code":"sr","name":"српски"},{"code":"sv","name":"Svenska"},{"code":"sw","name":"Swahili"},{"code":"ta","name":"தமிழ்"},{"code":"te","name":"తెలుగు"},{"code":"th","name":"ไทย"},{"code":"tl","name":"Wikang Tagalog"},{"code":"tr","name":"Türkçe"},{"code":"uk","name":"Українська мова"},{"code":"vi","name":"Tiếng Việt"},{"code":"zh_CN","name":"中文(简体)"},{"code":"zh_TW","name":"中文(繁體)"}]')}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[510],(()=>(__webpack_exec__(37707),__webpack_exec__(26923),__webpack_exec__(7967),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457),__webpack_exec__(6357),__webpack_exec__(1498),__webpack_exec__(52852),__webpack_exec__(18253),__webpack_exec__(15396),__webpack_exec__(42266))));__webpack_require__.O()}]);