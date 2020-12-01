describe("Monthly calculation functions", function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
  });

  it("should return a result with 2 decimal places", function() {
    values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });

  it("should update values on user input", function() {
    values = {
      amount: 5000,
      years: 4,
      rate: 3.2
    }

    function update(values) {
      values = {
        amount: 4000,
        years: 3,
        rate: 1.9
      }
    }
    expect(calculateMonthlyPayment(values)).toEqual('111.11');
  })
})

describe("simple form validations", function() {
  it("should throw an error when 'amount' input is empty", function(){
    const values = {
      amount: null,
      years: 8,
      rate: 5.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('0.00');
    expect(function() {parser.parse(raw); } ).toThrowError();
  })

  it("should throw an error when 'years' input is empty", function(){
    const values = {
      amount: 3000,
      years: null,
      rate: 5.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('Infinity');
    expect(function() {parser.parse(raw); } ).toThrowError();
  })

  it("should throw an error when 'rate' input is empty", function(){
    const values = {
      amount: 3000,
      years: 8,
      rate: null
    }
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
    expect(function() {parser.parse(raw); } ).toThrowError();
  })

  it("should throw an error when 'rate' input is not a number", function(){
    const values = {
      amount: 3000,
      years: 8,
      rate: "hi"
    }
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
    expect(function() {parser.parse(raw); } ).toThrowError();
  })

  it("should throw an error when 'years' input is not a number", function(){
    const values = {
      amount: 3000,
      years: "hi",
      rate: 5.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
    expect(function() {parser.parse(raw); } ).toThrowError();
  })

  it("should throw an error when 'amount' input is not a number", function(){
    const values = {
      amount: 3000,
      years: "hi",
      rate: 5.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
    expect(function() {parser.parse(raw); } ).toThrowError();
  })
})

