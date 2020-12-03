describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should allow more than one server", function() {
    const allServers = {server1: {serverName: "Alice"}, server2: {serverName: "Bill"}}
    submitServerInfo();
    
    expect(Object.keys(allServers).length).toEqual(2);
    expect(allServers.server1.serverName).toBe('Alice');
    expect(allServers.server2.serverName).toBe('Bill');
  })

  it("should split tip evenly among servers", function() {
    const allServers = {server1: {serverName: "Alice"}, server2: {serverName: "Bill"}}
    const allPayments = {
      payment1:
      {
        billAmt: 100,
        tipAmt: 20,
        tipPercent: 20
      }, 
      payment2:
      {
        billAmt: 50,
        tipAmt: 10,
        tipPercent: 20
      }
    };
    const tipAmt = parseInt(allPayments.payment1.tipAmt) + parseInt(allPayments.payment2.tipAmt)
    const tipAverage = tipAmt / Object.keys(allServers).length;

    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(2);
    expect(tipAmt).toEqual(30);
    expect(tipAverage).toEqual(15);
  });

  it("should update '#serverTable' on 'updateServerTable()'", function() {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual("Alice");
    expect(curTdList[1].innerText).toEqual("$0.00");
    expect(curTdList[2].innerText).toEqual("X");
  })
  
  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
