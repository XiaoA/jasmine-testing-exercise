describe("Payments tests", function() {
  beforeEach(function() {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
  });

  it("should add a new payment to allPayments on submitPaymentInfo()", function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments.payment1.billAmt).toEqual('50');
    expect(allPayments.payment1.tipAmt).toEqual('10');
    expect(allPayments.payment1.tipPercent).toEqual(20);
  })

  it("should not submit a new payment with empty inputs", function() {
    billAmtInput.value = null;
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  })

  it("updates #paymentTable on appendPaymentTable()", function() {
    let curPayment = createCurPayment();
    allPayments.payment1 = curPayment;

    appendPaymentTable(curPayment)
    updateServerTable();
    updateSummary();

    let curTdList = document.querySelectorAll("#paymentTable tbody tr td");
    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$50');
    expect(curTdList[1].innerText).toEqual('$10');
    expect(curTdList[2].innerText).toEqual('20%');
    expect(curTdList[3].innerText).toEqual('X');
    

  })

  it("should create a new payment on createCurPayment()", function() {
    let expectedPayment = {
      billAmt: '50',
      tipAmt: '10',
      tipPercent: 20
    }
    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it("should not create a new payment with empthy input on 'creatCurPayment()'", function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  })

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};  
  });
});
