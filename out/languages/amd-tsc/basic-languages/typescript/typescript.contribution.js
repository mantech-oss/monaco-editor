define(["require","exports","../_.contribution"],(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(0,i.registerLanguage)({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:function(){return AMD?new Promise((function(t,i){e(["vs/basic-languages/typescript/typescript"],t,i)})):new Promise((function(t,i){e(["./typescript"],t,i)}))}})}));