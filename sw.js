if(!self.define){let e,i={};const c=(c,b)=>(c=new URL(c+".js",b).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(b,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const f=e=>c(e,r),n={module:{uri:r},exports:d,require:f};i[r]=Promise.all(b.map((e=>n[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-81d4e6f5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"html/antrop.html",revision:"6c40dec754263dc8c721b10271efb002"},{url:"html/index5.html",revision:"f9fb7f2e3e096bf182518eccee5d8072"},{url:"html/index6.html",revision:"73da3f4138953dd986c7791c71108572"},{url:"html/preguntas.json",revision:"d3f764a099149e0c13e63451532cb8e5"},{url:"html/reportes.html",revision:"60d520b53e59a07090881fd8686635a4"},{url:"img/cicarne/1.webp",revision:"dbbab9a4779fe1522dbfaf0763068c4d"},{url:"img/cicarne/2.webp",revision:"bcaa584c8b6d4c126d10661345ec35c0"},{url:"img/chcaracmihog/1.webp",revision:"9ce42dfc33163f2c5979c69f914216e5"},{url:"img/chcaracmihog/2.webp",revision:"5957f7fb36951597f68e736064414dee"},{url:"img/chcaracmihog/3.webp",revision:"9275ca7366ffeac778b71142698fe5e4"},{url:"img/chcaracmihog/4.webp",revision:"48a3ee9447a18441a3e68eab46badd6d"},{url:"img/chcaracmihog/5.webp",revision:"67740713a66813cac65d8f0ec8cf13c4"},{url:"img/chcaracmihog/6.webp",revision:"bd2f49b56563013a35d3b027f979a2ca"},{url:"img/chcaracmihog/7.webp",revision:"e07ad911eab3d40d60166cb669e49183"},{url:"img/chcaracvivi/10.webp",revision:"8501b53a8ae6ba73a740a19e95ef58be"},{url:"img/chcaracvivi/7.webp",revision:"2765aaed4321eff9acc4e767e5dc9e59"},{url:"img/chcaracvivi/8.webp",revision:"1dc492226aec5fc83c261616217dcd05"},{url:"img/chcaracvivi/9.webp",revision:"9958f37b094ef4bb9906b0e7f15568fc"},{url:"img/chmortalidad/6.webp",revision:"19fca0596c775186d33fca9a92b67c2b"},{url:"img/chprosocia/11.webp",revision:"de1a24e9a7ab70904689ad7b4bddc7ff"},{url:"img/chprosocia/12.webp",revision:"d1235ab83d84293db5cfeac767cd3926"},{url:"img/ci226240/12.webp",revision:"86a3811eb9b005737ddb14ce320b3624"},{url:"img/ci226240/13.webp",revision:"1b1c21bf26f59c2519447d30d86575f2"},{url:"img/ci226240/14.webp",revision:"a9d48bfd48a277b2483b3bf1e77bcac2"},{url:"img/ci479496/53.webp",revision:"957c15ef76ac99e32f3f58e3611a9e84"},{url:"img/ci479496/54.webp",revision:"39c74ba002e48e84fe06fd765d410890"},{url:"img/ci479496/55.webp",revision:"3e6e2044bec0d3c573ea1b12c992ee6e"},{url:"img/ci479496/56.webp",revision:"48fb8893685f60c592b6f2e79f812a23"},{url:"img/ci479496/57.webp",revision:"c559e05e04005a99ce80a1abcb96cfca"},{url:"img/cianteced/1.webp",revision:"1ed7d4b2f6a4bb8c69db92f062528d82"},{url:"img/cianteced/5.webp",revision:"974253fb866b012f89f1085d0894505b"},{url:"img/cianteced/6.webp",revision:"6cf1d05062ed3dc984934fd6e3d72083"},{url:"img/cianteced/7.webp",revision:"d428b7eda9ea8b66e6fa10d267b68b4c"},{url:"img/cianticoncep/15.webp",revision:"3e39907cb62ed5a80d82d9b1e61f9adb"},{url:"img/cianticoncep/16.webp",revision:"9b486b285ccd644a96bef38daf9ad119"},{url:"img/cianticoncep/17.webp",revision:"f8c981144c33edd8e2e8189ae310c277"},{url:"img/cianticoncep/18.webp",revision:"0761bbaf53153eec5fc030e5172c37f1"},{url:"img/cianticoncep/19.webp",revision:"3dbd6d4c2c8b1d156cc3f6f03f775a16"},{url:"img/cianticoncep/20.webp",revision:"039ab12283950218984dd5d7650725a5"},{url:"img/cianticoncep/21.webp",revision:"e06c2169d4a37431462bb5ea6d935676"},{url:"img/cianticoncep/22.webp",revision:"f3b66569308dcb6051126199cb6596f3"},{url:"img/cihistoria/10.webp",revision:"f4dc785cc43bb9e60e080066f6042b69"},{url:"img/cihistoria/11.webp",revision:"34261c8e6755afa322fc4a08bb30d82c"},{url:"img/ciinmunizaci/31.webp",revision:"7cd24efbde62bd5f7b8a579c4ab3a19a"},{url:"img/ciinmunizaci/32.webp",revision:"ec7a89f4c7710d394332ea01267a22a3"},{url:"img/ciinmunizaci/33.webp",revision:"ca4d45e91a2048f1e6ed45b25bdeddbb"},{url:"img/ciinmunizaci/34.webp",revision:"78476736f2e1106d162957793215033f"},{url:"img/ciinmunizaci/35.webp",revision:"a7c107d8e806f0ab56594bee51e2f464"},{url:"img/ciinmunizaci/36.webp",revision:"048161030fee540095bdf54bbd2428fa"},{url:"img/ciinmunizaci/37.webp",revision:"25f7172b2145d7850798367803fb61c2"},{url:"img/ciinmunizaci/38.webp",revision:"6d890ff2e47b7b150415563567f0da26"},{url:"img/ciinmunizaci/39.webp",revision:"af1c62d28f7b24f0fc5aecab15f0fe1f"},{url:"img/ciinmunizaci/40.webp",revision:"9fe72fe42696df5ec0b4d0676d9743d5"},{url:"img/ciinmunizaci/41.webp",revision:"54066ebd290928c07beb7508ef4d0441"},{url:"img/ciinmunizaci/42.webp",revision:"61465cec30d83bfc4aa8272d7af3827a"},{url:"img/ciinmunizaci/43.webp",revision:"6c711345f161677ba09038fb625f3721"},{url:"img/cimormater/72.webp",revision:"0e6e29ce29a82ee1c7cd42a9b5582818"},{url:"img/cimormater/73.webp",revision:"8c4add0fe619178969301e16b9f6f5c2"},{url:"img/cinupciali/58.webp",revision:"75fa6801fdbcfe774335a35bcfe06915"},{url:"img/cinupciali/59.webp",revision:"49a619ee34deb83b72c62967c55ef767"},{url:"img/cinupciali/60.webp",revision:"0ef65ca081eaf19bb9ab52d6ed549fb1"},{url:"img/cinupciali/61.webp",revision:"cac683af99e200a5369d243430696565"},{url:"img/ciprefecund/62.webp",revision:"d7a7b5dec9c2f4a19bfa9f4f6d4fd7eb"},{url:"img/ciprefecund/63.webp",revision:"15df6d5f7e3aa7568b123d203357fbd9"},{url:"img/ciprefecund/64.webp",revision:"6a8df9f2a80b854d8aba1bb9521f9950"},{url:"img/ciprefecund/65.webp",revision:"2f575a9c1fca87b3bc6093d710d99f49"},{url:"img/cireproduc/8.webp",revision:"3dea230b7735bda1fabf3b18f49061c9"},{url:"img/cireproduc/9.webp",revision:"19d945fdc0f3d1eecaac72bf00c17330"},{url:"img/ciseccion4a/22.webp",revision:"8e6ffa81ac18c632a4a54cbb62097825"},{url:"img/ciseccion4a/23.webp",revision:"d968d6c8cf3e603bd6d9b2d8e11785e8"},{url:"img/ciseccion4a/24.webp",revision:"aecebf1eea29e8dc48bb20386bad0612"},{url:"img/ciseccion4a/25.webp",revision:"f40ba56b645f963eea34a1f726614712"},{url:"img/ciseccion4a/26.webp",revision:"73cd40a6495ff9ec1bc4d06884059ba3"},{url:"img/ciseccion4a/27.webp",revision:"8043c65c569b2a23455a25491f27cb4d"},{url:"img/ciseccion4a/28.webp",revision:"be5696531b089866229bf6280c5acb6b"},{url:"img/ciseccion4a/29.webp",revision:"f0f6840a254c7165c768ac7fe3f173b0"},{url:"img/ciseccion4a/30.webp",revision:"5f82d77a62b33f0ac5ce8edee3c9e8d5"},{url:"img/cisida/68.webp",revision:"5bbc092ac39ac08a69b5b6432b06279c"},{url:"img/cisida/69.webp",revision:"b4060dd3653d82f9772d2c727ac46092"},{url:"img/cisida/70.webp",revision:"92e6fe725d640ccd7a5b5da008be7a9b"},{url:"img/cisida/71.webp",revision:"40941f1809c89e533a057d28e90426e6"},{url:"img/citrabajo/66.webp",revision:"72847375f171075c96dcf1cccd553b0c"},{url:"img/citrabajo/67.webp",revision:"17596d2d1746e8936649b3a6d8017a4a"},{url:"img/citramo1/45.webp",revision:"5b76f3f92be122bf6fdfab1fd58230a2"},{url:"img/citramo2/46.webp",revision:"7b9d7da644a76c96669791da58779b76"},{url:"img/citramo3/47.webp",revision:"501a58f9dd7fe2daa5e5a4052c0e5ebd"},{url:"img/citramo4/48.webp",revision:"5e9135b066dc196b5b03e90fb3cb49f7"},{url:"img/citramo4/49.webp",revision:"2514e3bb274e41339f3092d6f9e9d302"},{url:"img/citramo5/50.webp",revision:"b5db93de01e27a9e8aa96afd6c36bc01"},{url:"img/citramo6/51.webp",revision:"0a56ba9155213c64aaf6a0c93dee8f4e"},{url:"img/citramo6a/52.webp",revision:"458d2835b39d81590cc277bc17c33a67"},{url:"img/civiolen/74.webp",revision:"3ef7c3b99aa91e7ba630481caadcf7d1"},{url:"img/civiolen/75.webp",revision:"732db4a7899f48d352a601f993031e46"},{url:"img/civiolen/76.webp",revision:"129be972d1bff4baf441829c944c2a6e"},{url:"img/civiolen/77.webp",revision:"a74cfb4a34f0c6158264830468832d7b"},{url:"img/civiolen/78.webp",revision:"f52609457583f80f78dfc1202a3bd3f4"},{url:"img/civiolen/79.webp",revision:"db4fde946c84865e495e0f07b637eeb5"},{url:"img/civiolen/80.webp",revision:"c7748951a47b1e74aea8c8bfdb284a3e"},{url:"img/civiolen/81.webp",revision:"06268f398881704149082882f9967f55"},{url:"img/civiolen/82.webp",revision:"c0313d01aa394b59a9d588202758fe13"},{url:"img/civiolen/83.webp",revision:"d2ef54f7938bd7f113ce34ba9bc62e49"},{url:"img/csanteced/1.webp",revision:"c3478c5000be09cb3204841e555c5166"},{url:"img/csanteced/2.webp",revision:"1cec6b1d1c658f6b0fa4f607ca584db9"},{url:"img/csanteced/3.webp",revision:"5b51f187272f4a188953fa3e1f5ba0e2"},{url:"img/cscancer/10.webp",revision:"8e63b252de44c41fb4235fdcc3a6a417"},{url:"img/cscancer/11.webp",revision:"efe10b88be41b9acf8c1657c0e208908"},{url:"img/csfactore/6.webp",revision:"7b214d9b68189a764d65d0d5f8517099"},{url:"img/csfactore/7.webp",revision:"e76ace3c56a3fc0d092a9492660bc15d"},{url:"img/cshiperdi/4.webp",revision:"e90a06d14fc866d80c915c1cbd147496"},{url:"img/cshiperdi/5.webp",revision:"c1959f35a9c27fde0d102719fa0a80b7"},{url:"img/csmental/14.webp",revision:"df4cf214710b3148cb50b4b68ad49c18"},{url:"img/csmental/15.webp",revision:"31170ca882560c3645c16f151dab83d5"},{url:"img/csmental/16.webp",revision:"1ad91aed8c2dc4b76b35b7aa402300bc"},{url:"img/csmental/17.webp",revision:"484d2c54dd5f45ca5384c6e3da56e3c2"},{url:"img/csmental/18.webp",revision:"6d2fbb7eb704d501f0bd037a94cbc8a5"},{url:"img/csninos/19.webp",revision:"fa8d06a9c700128a6b87b7e15f53e9f9"},{url:"img/csninos/20.webp",revision:"cce730cc8d17c763d18cd9e75116de3a"},{url:"img/csninos/21.webp",revision:"36291b637f7159f79defeeae09a9e4a9"},{url:"img/csninos/22.webp",revision:"2bbb19d0bd1273b18151584dd31aa8cb"},{url:"img/csninos/23.webp",revision:"9c8dd6618eea18ffbdbc50d517e1f3f1"},{url:"img/csninos/24.webp",revision:"0ef5c1d6cdd3aecc73748e2a0853472d"},{url:"img/csninos/25.webp",revision:"54b7097a96a202847ebc719ec2ce15ec"},{url:"img/csninos/26.webp",revision:"1c6a9dca4b3944a9bba5246e94983c8b"},{url:"img/csninos/27.webp",revision:"4e88c83ce8e84897d4ee43545682a637"},{url:"img/csninos/28.webp",revision:"a944902f7a905db89ba0c7315a673e21"},{url:"img/csninos/29.webp",revision:"8517720df770d2f22ebad90e13ce5b8d"},{url:"img/csninos/30.webp",revision:"50c9e03573706f012dc8931d2689f24d"},{url:"img/csocularbu/8.webp",revision:"f1067e883a51b71c3b380e0a4632179f"},{url:"img/csocularbu/9.webp",revision:"8c9bffb1cfe6171fb561fa9ca97bf416"},{url:"img/cstbcds/12.webp",revision:"a273eed9a94ffbe9cbc269fd9a7576e1"},{url:"img/csvihsida/13.webp",revision:"698f2097b68aaec71bca186d706716d4"},{url:"img/GGG/1.webp",revision:"dbbab9a4779fe1522dbfaf0763068c4d"},{url:"img/GGG/2.webp",revision:"bcaa584c8b6d4c126d10661345ec35c0"},{url:"index.html",revision:"5e46ba4321f4568c67a31a91e326e85e"},{url:"index.js",revision:"a0ac92a7d414f9b62a7ff9166e732d23"},{url:"manifest.json",revision:"03322e64a07c60d6e6bf6dfc70fcdef1"},{url:"recursos/128.png",revision:"d98d4823341a7582e0cbcd50d82ce6e8"},{url:"recursos/256.png",revision:"6f81100e16f158b6906546a550820e61"},{url:"recursos/css/bootstrap.min.css",revision:"abe91756d18b7cd60871a2f47c1e8192"},{url:"recursos/css/style.css",revision:"5e61e4d33af1e32a9143321b6e1fdcc0"},{url:"recursos/endes.png",revision:"2b936a4fa3406fcdd5d9f3694d9e263e"},{url:"recursos/girl.png",revision:"790956428d6e81d03cb1e0cd3f703a04"},{url:"recursos/girlold.png",revision:"8ae30e24587f4cfa7aecc5ad721a41b9"},{url:"recursos/js/bootstrap.min.js",revision:"a08792f518b51f0f1422b5c96df9eb8a"},{url:"recursos/js/filesaver.js",revision:"455ef724a4d67a67ceb581df80e5490c"},{url:"recursos/js/jszip.js",revision:"64b377caf1ef6a0cd7dcc3391dea1d74"},{url:"recursos/js/script.js",revision:"98ec49532cfeb518efb9f825615c9b05"},{url:"recursos/js/xml.js",revision:"774feaabc29bca33c60ebc7d5bcb8ab7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
