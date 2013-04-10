if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-list-format/gallery-list-format.js']) {
   __coverage__['build/gallery-list-format/gallery-list-format.js'] = {"path":"build/gallery-list-format/gallery-list-format.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":26,"loc":{"start":{"line":26,"column":11},"end":{"line":26,"column":43}}},"3":{"name":"(anonymous_3)","line":37,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":27}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":165,"column":3}},"2":{"start":{"line":3,"column":0},"end":{"line":4,"column":18}},"3":{"start":{"line":14,"column":0},"end":{"line":62,"column":2}},"4":{"start":{"line":27,"column":9},"end":{"line":27,"column":68}},"5":{"start":{"line":38,"column":9},"end":{"line":38,"column":49}},"6":{"start":{"line":38,"column":37},"end":{"line":38,"column":47}},"7":{"start":{"line":40,"column":9},"end":{"line":46,"column":23}},"8":{"start":{"line":48,"column":9},"end":{"line":48,"column":37}},"9":{"start":{"line":48,"column":25},"end":{"line":48,"column":35}},"10":{"start":{"line":49,"column":9},"end":{"line":49,"column":42}},"11":{"start":{"line":49,"column":25},"end":{"line":49,"column":40}},"12":{"start":{"line":50,"column":9},"end":{"line":52,"column":10}},"13":{"start":{"line":51,"column":13},"end":{"line":51,"column":63}},"14":{"start":{"line":54,"column":9},"end":{"line":54,"column":63}},"15":{"start":{"line":55,"column":9},"end":{"line":57,"column":10}},"16":{"start":{"line":56,"column":14},"end":{"line":56,"column":68}},"17":{"start":{"line":58,"column":9},"end":{"line":58,"column":60}},"18":{"start":{"line":60,"column":9},"end":{"line":60,"column":23}},"19":{"start":{"line":64,"column":0},"end":{"line":64,"column":37}}},"branchMap":{"1":{"line":38,"type":"if","locations":[{"start":{"line":38,"column":9},"end":{"line":38,"column":9}},{"start":{"line":38,"column":9},"end":{"line":38,"column":9}}]},"2":{"line":41,"type":"binary-expr","locations":[{"start":{"line":41,"column":22},"end":{"line":41,"column":50}},{"start":{"line":41,"column":54},"end":{"line":41,"column":64}}]},"3":{"line":42,"type":"binary-expr","locations":[{"start":{"line":42,"column":21},"end":{"line":42,"column":48}},{"start":{"line":42,"column":52},"end":{"line":42,"column":58}}]},"4":{"line":44,"type":"binary-expr","locations":[{"start":{"line":44,"column":19},"end":{"line":44,"column":44}},{"start":{"line":44,"column":48},"end":{"line":44,"column":51}}]},"5":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":9},"end":{"line":48,"column":9}},{"start":{"line":48,"column":9},"end":{"line":48,"column":9}}]},"6":{"line":49,"type":"if","locations":[{"start":{"line":49,"column":9},"end":{"line":49,"column":9}},{"start":{"line":49,"column":9},"end":{"line":49,"column":9}}]},"7":{"line":50,"type":"if","locations":[{"start":{"line":50,"column":9},"end":{"line":50,"column":9}},{"start":{"line":50,"column":9},"end":{"line":50,"column":9}}]}},"code":["(function () { YUI.add('gallery-list-format', function (Y, NAME) {","","var MODULE_NAME = \"gallery-list-format\",","    ListFormatter;","","/**"," * ListFormatter formats lists with locale dependent rules."," * For example, in locale en, lists are formatted into a"," * string of comma-separated values"," * @class ListFormatter"," * @namespace Intl"," * @static"," */","ListFormatter = {","    /**","     * Substitute items into corrrect positions in pattern","     * For internal use only","     * @method __sub","     * @private","     * @static","     * @param pattern {String} The pattern","     * @param item0 {String} item to replace {0} in pattern","     * @param item1 {String} item to replace {1} in pattern","     * @return {String} Result string after substitutions","     */","    __sub: function(pattern, item0, item1) {","         return pattern.replace(\"{0}\", item0).replace(\"{1}\", item1);","    },","","    /**","     * Format list into string","     * @method format","     * @static","     * @param list {Array} The list to be formatted","     * @return {String} formatted result","     */","    format: function(list) {","         if(!Y.Lang.isArray(list)) { return \"\"; }","        ","         var localeData = Y.Intl.get(MODULE_NAME),","             middle = localeData.listPatternMiddle || \"{0}, {1}\",","             start = localeData.listPatternStart || middle,","             end = localeData.listPatternEnd,","             two = localeData.listPatternTwo || end,","             len = list.length,","             result, i;","","         if(len === 0) { return \"\"; }","         if(len === 1) { return list[0]; }","         if(len === 2) {","             return ListFormatter.__sub(two, list[0], list[1]);","         }","","         result = ListFormatter.__sub(start, list[0], list[1]);","         for(i=2; i<len-1; i++) {","              result = ListFormatter.__sub(middle, result, list[i]);","         }","         result = ListFormatter.__sub(end, result, list[i]);","","         return result;","    }","};","","Y.Intl.ListFormatter = ListFormatter;","","","}, 'gallery-2013.04.10-22-48', {","    \"requires\": [","        \"af\",","        \"am\",","        \"ar\",","        \"as\",","        \"az\",","        \"be\",","        \"bg\",","        \"bn\",","        \"bo\",","        \"ca\",","        \"cs\",","        \"cy\",","        \"da\",","        \"de\",","        \"el\",","        \"eo\",","        \"es\",","        \"et\",","        \"eu\",","        \"fa\",","        \"fi\",","        \"fil\",","        \"fo\",","        \"fr\",","        \"ga\",","        \"gl\",","        \"gsw\",","        \"gu\",","        \"gv\",","        \"ha\",","        \"haw\",","        \"he\",","        \"hi\",","        \"hr\",","        \"hu\",","        \"hy\",","        \"id\",","        \"ii\",","        \"in\",","        \"is\",","        \"it\",","        \"iw\",","        \"ja\",","        \"\",","        \"ka\",","        \"kk\",","        \"kl\",","        \"km\",","        \"kn\",","        \"ko\",","        \"kok\",","        \"kw\",","        \"lt\",","        \"lv\",","        \"mk\",","        \"ml\",","        \"mr\",","        \"ms\",","        \"mt\",","        \"nb\",","        \"ne\",","        \"nl\",","        \"nn\",","        \"no\",","        \"om\",","        \"or\",","        \"pa\",","        \"pl\",","        \"ps\",","        \"pt\",","        \"ro\",","        \"ru\",","        \"sh\",","        \"si\",","        \"sk\",","        \"sl\",","        \"so\",","        \"sq\",","        \"sr\",","        \"sr-Latn\",","        \"sr-ME\",","        \"sv\",","        \"sw\",","        \"ta\",","        \"te\",","        \"th\",","        \"ti\",","        \"tl\",","        \"tr\",","        \"uk\",","        \"ur\",","        \"uz\",","        \"vi\",","        \"zh\",","        \"zu\"","    ]","});","","}());"]};
}
var __cov_JGcs3ampCmCHBUzqPaC17w = __coverage__['build/gallery-list-format/gallery-list-format.js'];
__cov_JGcs3ampCmCHBUzqPaC17w.s['1']++;YUI.add('gallery-list-format',function(Y,NAME){__cov_JGcs3ampCmCHBUzqPaC17w.f['1']++;__cov_JGcs3ampCmCHBUzqPaC17w.s['2']++;var MODULE_NAME='gallery-list-format',ListFormatter;__cov_JGcs3ampCmCHBUzqPaC17w.s['3']++;ListFormatter={__sub:function(pattern,item0,item1){__cov_JGcs3ampCmCHBUzqPaC17w.f['2']++;__cov_JGcs3ampCmCHBUzqPaC17w.s['4']++;return pattern.replace('{0}',item0).replace('{1}',item1);},format:function(list){__cov_JGcs3ampCmCHBUzqPaC17w.f['3']++;__cov_JGcs3ampCmCHBUzqPaC17w.s['5']++;if(!Y.Lang.isArray(list)){__cov_JGcs3ampCmCHBUzqPaC17w.b['1'][0]++;__cov_JGcs3ampCmCHBUzqPaC17w.s['6']++;return'';}else{__cov_JGcs3ampCmCHBUzqPaC17w.b['1'][1]++;}__cov_JGcs3ampCmCHBUzqPaC17w.s['7']++;var localeData=Y.Intl.get(MODULE_NAME),middle=(__cov_JGcs3ampCmCHBUzqPaC17w.b['2'][0]++,localeData.listPatternMiddle)||(__cov_JGcs3ampCmCHBUzqPaC17w.b['2'][1]++,'{0}, {1}'),start=(__cov_JGcs3ampCmCHBUzqPaC17w.b['3'][0]++,localeData.listPatternStart)||(__cov_JGcs3ampCmCHBUzqPaC17w.b['3'][1]++,middle),end=localeData.listPatternEnd,two=(__cov_JGcs3ampCmCHBUzqPaC17w.b['4'][0]++,localeData.listPatternTwo)||(__cov_JGcs3ampCmCHBUzqPaC17w.b['4'][1]++,end),len=list.length,result,i;__cov_JGcs3ampCmCHBUzqPaC17w.s['8']++;if(len===0){__cov_JGcs3ampCmCHBUzqPaC17w.b['5'][0]++;__cov_JGcs3ampCmCHBUzqPaC17w.s['9']++;return'';}else{__cov_JGcs3ampCmCHBUzqPaC17w.b['5'][1]++;}__cov_JGcs3ampCmCHBUzqPaC17w.s['10']++;if(len===1){__cov_JGcs3ampCmCHBUzqPaC17w.b['6'][0]++;__cov_JGcs3ampCmCHBUzqPaC17w.s['11']++;return list[0];}else{__cov_JGcs3ampCmCHBUzqPaC17w.b['6'][1]++;}__cov_JGcs3ampCmCHBUzqPaC17w.s['12']++;if(len===2){__cov_JGcs3ampCmCHBUzqPaC17w.b['7'][0]++;__cov_JGcs3ampCmCHBUzqPaC17w.s['13']++;return ListFormatter.__sub(two,list[0],list[1]);}else{__cov_JGcs3ampCmCHBUzqPaC17w.b['7'][1]++;}__cov_JGcs3ampCmCHBUzqPaC17w.s['14']++;result=ListFormatter.__sub(start,list[0],list[1]);__cov_JGcs3ampCmCHBUzqPaC17w.s['15']++;for(i=2;i<len-1;i++){__cov_JGcs3ampCmCHBUzqPaC17w.s['16']++;result=ListFormatter.__sub(middle,result,list[i]);}__cov_JGcs3ampCmCHBUzqPaC17w.s['17']++;result=ListFormatter.__sub(end,result,list[i]);__cov_JGcs3ampCmCHBUzqPaC17w.s['18']++;return result;}};__cov_JGcs3ampCmCHBUzqPaC17w.s['19']++;Y.Intl.ListFormatter=ListFormatter;},'gallery-2013.04.10-22-48',{'requires':['af','am','ar','as','az','be','bg','bn','bo','ca','cs','cy','da','de','el','eo','es','et','eu','fa','fi','fil','fo','fr','ga','gl','gsw','gu','gv','ha','haw','he','hi','hr','hu','hy','id','ii','in','is','it','iw','ja','','ka','kk','kl','km','kn','ko','kok','kw','lt','lv','mk','ml','mr','ms','mt','nb','ne','nl','nn','no','om','or','pa','pl','ps','pt','ro','ru','sh','si','sk','sl','so','sq','sr','sr-Latn','sr-ME','sv','sw','ta','te','th','ti','tl','tr','uk','ur','uz','vi','zh','zu']});