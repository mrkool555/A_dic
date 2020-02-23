var dic=[
    {name:'공발', catego:'MURATA', desc1:'제품이 공장에서 출하되는 것 혹은 그 날짜를 의미.', desc2:'공발(工發) - 공발일자와 선적일자는 혼돈하기 쉬우니 주의가 필요하다.'},
    {name:'공발일', catego:'MURATA', desc1:'제품이 공장에서 출하되는 것 혹은 그 날짜를 의미.', desc2:'공발(工發) - 공발일자와 선적일자는 혼돈하기 쉬우니 주의가 필요하다.'},
    {name:'구좌', catego:'공통', desc1:'특정 고객향 가격 및 상류를 구분/통제하기 위해 VENDOR에서 지정한 거래 CODE.', desc2:'U1423:SAMSUNG PBA하청사향 ITEM은 모두 이 구좌로 이 구좌의 가격을 발주하며, 이 외의 거래선은 이 구좌의 가격을 이용하는 것은 불가하다.'},
    {name:'네타', catego:'공통?', desc1:'소재를 뜻하는 일본어 표현. 업무상에서 많이 사용되지는 않으나 "안건"이라는 의미로 사용된다.', desc2:'ex) EMI관련해서 확매가 필요한데 괜찮으 NETA가 없는가?'},
    {name:'더미', catego:'공통', desc1:'해당구좌 혹은 해당 거래선 이름으로 발주가 나가지 않고 다른 구좌, 다른 거래선명으로 발주가 진행되는 행위. 혹은 그 다른 거래선 명을 말한다.', desc2:'A사향으로 a item을 발주해야 하나 이유있어 불가한 경우 B사의 이름으로 a ITEM을 발주하는 것. 이 때 B사를 A사의 Dummy라 칭한다. **가능하면 다른 거래선명이나 구좌로의 dummy발주는 지양해야 한다.'},
    {name:'Dummy', catego:'공통', desc1:'해당구좌 혹은 해당 거래선 이름으로 발주가 나가지 않고 다른 구좌, 다른 거래선명으로 발주가 진행되는 행위. 혹은 그 다른 거래선 명을 말한다.', desc2:'A사향으로 a item을 발주해야 하나 이유있어 불가한 경우 B사의 이름으로 a ITEM을 발주하는 것. 이 때 B사를 A사의 Dummy라 칭한다. **가능하면 다른 거래선명이나 구좌로의 dummy발주는 지양해야 한다.'},
    {name:'디앤에스', catego:'MURATA', desc1:'MURATA 용어 (Demand & Share) MURATA의 예산(판매계획)관리 TOOL. (DEMAND, PRICE, SHARE, AMOUNT로 금액을 추출한다.)', desc2:'초기 예산도 같은 TOOL로 생성하게 되며 3개월마다 갱신하게 된다. 초기에 책정된 예산은 변하지 않으며, 현상황을 파악하여 생산계획에 반영하기 위해 갱신한다.'},
    {name:'D&S', catego:'MURATA', desc1:'MURATA 용어 (Demand & Share) MURATA의 예산(판매계획)관리 TOOL. (DEMAND, PRICE, SHARE, AMOUNT로 금액을 추출한다.)', desc2:'초기 예산도 같은 TOOL로 생성하게 되며 3개월마다 갱신하게 된다. 초기에 책정된 예산은 변하지 않으며, 현상황을 파악하여 생산계획에 반영하기 위해 갱신한다.'},
    {name:'민생품', catego:'공통', desc1:'전장 이외의 Application 혹은 Item을 일컷는 말.', desc2:'GRM155****은 민생용 MLCC이며 GCM155***은 전장용 MLCC이다.'},
    {name:'민생용', catego:'공통', desc1:'전장 이외의 Application 혹은 Item을 일컷는 말.', desc2:'GRM155****은 민생용 MLCC이며 GCM155***은 전장용 MLCC이다.'},
    {name:'시료', catego:'공통', desc1:'불량분석 혹은 특성의 측정을 위해 단품 혹은 PCB상태로 해당 VENDOR에 보내는 물품.', desc2:''},
    {name:'CCF', catego:'MURATA', desc1:'MURATA SYSTEM으로 발주를 가능하게 하기위해 각 구좌에 CUST PN/ MURATA PN, PRICE 를 등록받는 행위.', desc2:'신규 제품은 가격이 있어도 해당구좌에 CCF가 등록되어 있지 않으면 발주가 불가하다.'},
    {name:'ccf', catego:'MURATA', desc1:'MURATA SYSTEM으로 발주를 가능하게 하기위해 각 구좌에 CUST PN/ MURATA PN, PRICE 를 등록받는 행위.', desc2:'신규 제품은 가격이 있어도 해당구좌에 CCF가 등록되어 있지 않으면 발주가 불가하다.'},
    {name:'CCF 등록', catego:'MURATA', desc1:'MURATA SYSTEM으로 발주를 가능하게 하기위해 각 구좌에 CUST PN/ MURATA PN, PRICE 를 등록받는 행위.', desc2:'신규 제품은 가격이 있어도 해당구좌에 CCF가 등록되어 있지 않으면 발주가 불가하다.'},
    {name:'씨알엠', catego:'MURATA', desc1:'MURATA의 BIZ. 관리 SITE. 구좌나 Opportunity안건을 등록하는 목적으로 주로 사용 됨.', desc2:'https://rep-murata.force.com/distributor/login?ec=302&inst=5F&startURL=%2Fdistributor%2Fhome%2Fhome.jsp'},
    {name:'CRM', catego:'MURATA', desc1:'MURATA의 BIZ. 관리 SITE. 구좌나 Opportunity안건을 등록하는 목적으로 주로 사용 됨.', desc2:'https://rep-murata.force.com/distributor/login?ec=302&inst=5F&startURL=%2Fdistributor%2Fhome%2Fhome.jsp'},
    {name:'crm', catego:'MURATA', desc1:'MURATA의 BIZ. 관리 SITE. 구좌나 Opportunity안건을 등록하는 목적으로 주로 사용 됨.', desc2:'https://rep-murata.force.com/distributor/login?ec=302&inst=5F&startURL=%2Fdistributor%2Fhome%2Fhome.jsp'},
    {name:'에스피알', catego:'MURATA', desc1:'Special Price Request의 약자로 확대판매, Share Keep을 위해 특정고객, 특정ITEM에 대해 종래의 가격이 아닌 경쟁력 있는 가격을 MURATA사업부에 요청하는 수단.', desc2:''},
    {name:'SPR', catego:'MURATA', desc1:'Special Price Request의 약자로 확대판매, Share Keep을 위해 특정고객, 특정ITEM에 대해 종래의 가격이 아닌 경쟁력 있는 가격을 MURATA사업부에 요청하는 수단.', desc2:''},
    {name:'spr', catego:'MURATA', desc1:'Special Price Request의 약자로 확대판매, Share Keep을 위해 특정고객, 특정ITEM에 대해 종래의 가격이 아닌 경쟁력 있는 가격을 MURATA사업부에 요청하는 수단.', desc2:''},
    {name:'에프에프오', catego:'공통', desc1:'확정발주가 아닌 FORECAST정보로써의 발주. (MURATA의 경우 TP05)', desc2:''},
    {name:'FFO', catego:'공통', desc1:'확정발주가 아닌 FORECAST정보로써의 발주. (MURATA의 경우 TP05)', desc2:''},
    {name:'ffo', catego:'공통', desc1:'확정발주가 아닌 FORECAST정보로써의 발주. (MURATA의 경우 TP05)', desc2:''},
    {name:'예산', catego:'MURATA', desc1:'MURATA 용어. 실무상에서는 판매계획으로 이해하면 된다. (予算) MURATA의 1년 양산/자금 계획 수립작업은 영업의 판매계획이 반영되기 때문에 판매계획수립 -> 양산계획 수립 -> 필요예산 책정의 작업을 진행하여 연간 예산을 수립한다.', desc2:''},
    {name:'예외단가', catego:'OMRON', desc1:'MURATA의 SPR과 같은 의미로 특정고객, 특정 ITEM에 적용되는 특별단가를 의미함.', desc2:''},
    {name:'예외출하', catego:'OMRON', desc1:'지정된 ROUTE가 아닌 지급으로 출하가 필요할 시 원일정 이외의 날짜에 출하 받는 일.', desc2:'주로 영업이 공항창고에서 바로 수령하는 경우가 많음.'},
    {name:'오키카에', catego:'JAPAN VENDOR', desc1:'거래선에서 사용중인 타사의 제품을 우리제품으로 교체하는 행위 혹은 작업.(置き換え)', desc2:'키리카에라는 말을 쓰기도 하나 정확한 표현은 오키카에.'},
    {name:'와쿠', catego:'MURATA', desc1:'수요>공급 상황에서 수주된 전량을 공급할 수 없게 되어 일정 기준으로 수량을 할당하게 되는데 특정 거점 혹은 대리점에 배정되는 어느 ITEM의 전체 수량을 말함.', desc2:'ex) A-SUNG의 금월 1005 SIZE의 1u의 WAKU는 100만개이다. -> A-SUNG은 실제 150만개가 필요하 이 배정된 100만개에서 각 거래선에 나누어 배정해야 한다.'},
    {name:'와꾸', catego:'MURATA', desc1:'수요>공급 상황에서 수주된 전량을 공급할 수 없게 되어 일정 기준으로 수량을 할당하게 되는데 특정 거점 혹은 대리점에 배정되는 어느 ITEM의 전체 수량을 말함.', desc2:'ex) A-SUNG의 금월 1005 SIZE의 1u의 WAKU는 100만개이다. -> A-SUNG은 실제 150만개가 필요하 이 배정된 100만개에서 각 거래선에 나누어 배정해야 한다.'},
    {name:'WAKU', catego:'MURATA', desc1:'수요>공급 상황에서 수주된 전량을 공급할 수 없게 되어 일정 기준으로 수량을 할당하게 되는데 특정 거점 혹은 대리점에 배정되는 어느 ITEM의 전체 수량을 말함.', desc2:'ex) A-SUNG의 금월 1005 SIZE의 1u의 WAKU는 100만개이다. -> A-SUNG은 실제 150만개가 필요하 이 배정된 100만개에서 각 거래선에 나누어 배정해야 한다.'},
    {name:'waku', catego:'MURATA', desc1:'수요>공급 상황에서 수주된 전량을 공급할 수 없게 되어 일정 기준으로 수량을 할당하게 되는데 특정 거점 혹은 대리점에 배정되는 어느 ITEM의 전체 수량을 말함.', desc2:'ex) A-SUNG의 금월 1005 SIZE의 1u의 WAKU는 100만개이다. -> A-SUNG은 실제 150만개가 필요하 이 배정된 100만개에서 각 거래선에 나누어 배정해야 한다.'},
    {name:'우리코미', catego:'JAPAN VENDOR', desc1:'제품을 판매하여 거래선에 제품을 집어 넣는 행위 혹은 그런 목적으로 행해지는 일련의 행위.(売り込み)', desc2:''},
    {name:'이레귤러 출하', catego:'MURATA', desc1:'MURATA공장에서 중앙 창고를 거치지 않고 공항으로 바로 배송되는 행위.', desc2:''},
    {name:'이레귤러', catego:'MURATA', desc1:'MURATA공장에서 중앙 창고를 거치지 않고 공항으로 바로 배송되는 행위.', desc2:''},
    {name:'일레귤러', catego:'MURATA', desc1:'MURATA공장에서 중앙 창고를 거치지 않고 공항으로 바로 배송되는 행위.', desc2:''},
    {name:'Irregular', catego:'MURATA', desc1:'MURATA공장에서 중앙 창고를 거치지 않고 공항으로 바로 배송되는 행위.', desc2:''},
    {name:'이레카에', catego:'MURATA', desc1:'납기조정이 필요한 발주CARD를 선행하고 있는 다른 CARD와 일정을 교환하는 행위.(入れ替え)', desc2:'공장과 납기 조정이 불가할 경우, 선행하고 있는 CARD의 소유자와 협의하여 일정을 교환한다.'},
    {name:'이레코미', catego:'MURATA', desc1:'생산된 제품을 요청된 납기에 배정하는 일. (入れ込み)', desc2:''},
    {name:'전매', catego:'MURATA', desc1:'일본MURATA와의 직거래가 아닌, 일본 MURATA →KME→A-SUNG으로 전도매매되는 방식.', desc2:'이전에는 KME를 통하기는 했으나 일본으로 바로 송금하고 일본에서 제품을 직접 받았음.'},
    {name:'전장품', catego:'공통', desc1:'자동차에 사용되는 Application 혹은 Item을 일컷는 말.', desc2:'ex) AVN은 전장 APPLICATION이니 반드시 전장용 INDUCTOR를 사용해야 한다.'},
    {name:'전장용', catego:'공통', desc1:'자동차에 사용되는 Application 혹은 Item을 일컷는 말.', desc2:'ex) AVN은 전장 APPLICATION이니 반드시 전장용 INDUCTOR를 사용해야 한다.'},
    {name:'주잔', catego:'MURATA', desc1:'주문잔량. MURATA로 발주되어 있는 아직 미입고된 주문의 현황.', desc2:''},
    {name:'추장품', catego:'ROHM', desc1:'ROHM에서 판매를 촉진하는 품목으로 추천 장려품이라는 의미.', desc2:''},
    {name:'카드', catego:'공통', desc1:'VENDOR로 발주된 각각의 내역을 칭하는 말. 통상적으로 한주문의 한ITEM당 한카드가 부여된다.', desc2:''},
    {name:'card', catego:'공통', desc1:'VENDOR로 발주된 각각의 내역을 칭하는 말. 통상적으로 한주문의 한ITEM당 한카드가 부여된다.', desc2:''},
    {name:'카리토리', catego:'JAPAN VENDOR', desc1:'(刈取り) 수확하다는 일본어 단어이며, 업계에서는 Design한 ITEM을 수주하는 행위를 말한다.', desc2:'타네마키 (種まき) : 씨뿌리기, Design활동. 소개활동.　카리토리(刈取り) : 수확. 수주'},
    {name:'클레임레포트', catego:'공통', desc1:'고객사에서 발생한 불량에 대해 해당 Vendor로 분석과 분석 Report를 요청하는 수단.', desc2:''},
    {name:'Claim Report', catego:'공통', desc1:'고객사에서 발생한 불량에 대해 해당 Vendor로 분석과 분석 Report를 요청하는 수단.', desc2:''},
    {name:'claim Report', catego:'공통', desc1:'고객사에서 발생한 불량에 대해 해당 Vendor로 분석과 분석 Report를 요청하는 수단.', desc2:''},
    {name:'텐바이', catego:'MURATA', desc1:'(転売) 전매의 일본어 표현. 의미는 "전매" 에서 확인.', desc2:''},
    {name:'티피05', catego:'MURATA', desc1:'MURATA의 F/C발주 방식으로 생산을 준비할 수 있도록 공장에 직접 F/C정보를 보내는 F/C 방식.', desc2:'TP05 상태에서는 사업부에서는 F/C를 인지하지 못하므로 확정발주를 수주하면 반드시 TP05를 확정으로 전환해야 함. 확정 발주 없이 TP05상의 납기가 도래하면 자동으로 소멸 된다.'},
    {name:'TP05', catego:'MURATA', desc1:'MURATA의 F/C발주 방식으로 생산을 준비할 수 있도록 공장에 직접 F/C정보를 보내는 F/C 방식.', desc2:'TP05 상태에서는 사업부에서는 F/C를 인지하지 못하므로 확정발주를 수주하면 반드시 TP05를 확정으로 전환해야 함. 확정 발주 없이 TP05상의 납기가 도래하면 자동으로 소멸 된다.'},
    {name:'프라이싱 아이디어', catego:'공통', desc1:'거래선에 견적을 제출하기 전 견적 내용과 이익율, 이익율 배경을 상사에게 결재 받는 수단 혹은 그 양식.', desc2:''},
    {name:'Pricing idea', catego:'공통', desc1:'거래선에 견적을 제출하기 전 견적 내용과 이익율, 이익율 배경을 상사에게 결재 받는 수단 혹은 그 양식.', desc2:''},
    {name:'피에프오', catego:'공통', desc1:'확정발주를 의미 함. ↔ FFO (Forecast 발주)', desc2:'PFO는 기본적으로 CANCEL이 되지 않는 것이 원칙.'},
    {name:'PFO', catego:'공통', desc1:'확정발주를 의미 함. ↔ FFO (Forecast 발주)', desc2:'PFO는 기본적으로 CANCEL이 되지 않는 것이 원칙.'},
    {name:'pfo', catego:'공통', desc1:'확정발주를 의미 함. ↔ FFO (Forecast 발주)', desc2:'PFO는 기본적으로 CANCEL이 되지 않는 것이 원칙.'},
    {name:'피티아이', catego:'MURATA', desc1:'A거점에서 Design이 이루지고 B거점에서 수주가 이루어지는 상황에서 Design상세 내역과 예상 매출액 등의 정보를 A거점이 B거점으로 공유하는 수단.', desc2:'수주는 B거점에서 이루어지므로 B거점은 미리 견적 확인 및 납기 확인 등을 거쳐 수주할 준비를 할 수 있다.'},
    {name:'PTI', catego:'MURATA', desc1:'A거점에서 Design이 이루지고 B거점에서 수주가 이루어지는 상황에서 Design상세 내역과 예상 매출액 등의 정보를 A거점이 B거점으로 공유하는 수단.', desc2:'수주는 B거점에서 이루어지므로 B거점은 미리 견적 확인 및 납기 확인 등을 거쳐 수주할 준비를 할 수 있다.'},
    {name:'pti', catego:'MURATA', desc1:'A거점에서 Design이 이루지고 B거점에서 수주가 이루어지는 상황에서 Design상세 내역과 예상 매출액 등의 정보를 A거점이 B거점으로 공유하는 수단.', desc2:'수주는 B거점에서 이루어지므로 B거점은 미리 견적 확인 및 납기 확인 등을 거쳐 수주할 준비를 할 수 있다.'},
    {name:'하이브', catego:'Omron', desc1:'OMRON의 내부 관리 SYSTEM. 수발주, SAMPLE, 견적 등의 이력과 공유 내용을 관리하기 위해 사용. (대리점 공동사용)', desc2:'hive.omron-ecb.co.kr (접속을 위해서는 omron에서 발급한 ID, P/W가 필요하다)'},
    {name:'할당', catego:'JAPAN VENDOR', desc1:'제품의 생산이 주문량에 비해 부족할 때 어떠한 기준을 근거로 수량을 할당하여 배분하는 행위.', desc2:''},
    {name:'핸디발주', catego:'Murata', desc1:'EDI SYSTEM을 통하지 않고 수동으로 발주하는 행위.', desc2:'EDI전송이후 이전에 지급으로 발주가 필요한 건은 핸디로 진행 한다.'},
    {name:'확매', catego:'JAPAN VENDOR', desc1:'확대판매와 비(非)확대판매의 줄임말.  말 그대로 판매의 폭을 넓히는 행위를 말한다.', desc2:'확판/비확판이라는 표현을 사용하는 VENDOR도 있음.'},
    {name:'비확매', catego:'JAPAN VENDOR', desc1:'확대판매와 비(非)확대판매의 줄임말.  말 그대로 판매의 폭을 넓히는 행위를 말한다.', desc2:'확판/비확판이라는 표현을 사용하는 VENDOR도 있음.'},
   ];
    
    function input(){
      var input=document.getElementById("input").value;
      temp = input;
      // 없는 단어를 찾았을 때 에러 메시지 표시하기 해야함
      var index = dic.findIndex(i => i.name == temp); 
      document.getElementById("output").value=dic[index].catego;
      document.getElementById("output2").value=dic[index].desc1;
      document.getElementById("output3").value=dic[index].desc2;
    }
    
document.write("<br>")
  for(i=0; i<dic.length; i++){
    document.write("<li>"+dic[i].name+"<p> : "+dic[i].catego+"<br> :   "+dic[i].desc1+"<br> : "+dic[i].desc2+"</p><br>");
  }
    // function output(){
    //   var index = dic.findIndex(i => i.name == temp); 
    //   document.getElementById("output").value=dic[index].desc
    
    // document.write(dic[4].desc)
    // }
    
    // console.log(grades.indexOf("시료"))