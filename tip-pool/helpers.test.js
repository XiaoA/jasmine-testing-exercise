describe("tip tool helper functions", function() {
  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("displays a sum of the bills, including total and tips", function() {    
    expect(sumPaymentTotal('tipAmt')).toEqual(20);


    billAmtInput.value = 37.32;
    tipAmtInput.value = 7.46;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(137.32);
    expect(sumPaymentTotal('tipAmt')).toEqual(27.46);
  });

  it("should correctly calculate the tip for a bill", function() {
    expect(calculateTipPercent(52.32, 14)).toEqual(27);
  });

  it("should generate new '<td>' from value and append to '<tr>' on appendTd(tr, value)", function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it("should generate delete '<td>' and append to '<tr>' on appendDeleteBtn(tr, type)", function() {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  })

   afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
  })
})
