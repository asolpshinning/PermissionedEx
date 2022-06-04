// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc3]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc3
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc8
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc9;
  
  const map3_ctc = ctc9;
  
  const map4_ctc = ctc9;
  
  const map5_ctc = ctc9;
  
  const map6_ctc = ctc10;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1453, v1455, v1456, v1457, v1458, v1475] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = svs;
            return (await ((async (_v1499 ) => {
                const v1499 = stdlib.protect(ctc0, _v1499, null);
              
              const v1500 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1499), null);
              const v1501 = stdlib.fromSome(v1500, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1502 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1499), null);
              const v1503 = stdlib.fromSome(v1502, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1504 = [v1501, v1503];
              
              return v1504;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1453, v1455, v1456, v1457, v1458, v1475] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = svs;
            return (await ((async () => {
              
              
              return v1485;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1453, v1455, v1456, v1457, v1458, v1475] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = svs;
            return (await ((async () => {
              
              const v1498 = [v1487, v1486, v1484];
              
              return v1498;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1453, v1455, v1456, v1457, v1458, v1475] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = svs;
            return (await ((async (_v1506 ) => {
                const v1506 = stdlib.protect(ctc0, _v1506, null);
              
              const v1507 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1506), null);
              const v1508 = stdlib.fromSome(v1507, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1509 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1506), null);
              const v1510 = stdlib.fromSome(v1509, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1511 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1506), null);
              const v1512 = stdlib.fromSome(v1511, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1513 = [v1508, v1510, v1512];
              
              return v1513;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1453, v1455, v1456, v1457, v1458, v1475] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = svs;
            return (await ((async (_v1515 ) => {
                const v1515 = stdlib.protect(ctc0, _v1515, null);
              
              const v1516 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1515), null);
              let v1517;
              switch (v1516[0]) {
                case 'None': {
                  const v1518 = v1516[1];
                  v1517 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1519 = v1516[1];
                  v1517 = true;
                  
                  break;
                  }
                }
              
              return v1517;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      1: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc5],
      4: [ctc0, ctc2, ctc2, ctc0, ctc3, ctc1, ctc3, ctc3, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Object({
    bT: ctc4,
    companyName: ctc5,
    lockSale: ctc6,
    managerAddr: ctc7,
    sT: ctc4
    });
  const ctc9 = stdlib.T_Tuple([ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc9,
    aST0_177: ctc10,
    addWL0_177: ctc9,
    cBT0_177: ctc11,
    cCM0_177: ctc9,
    cST0_177: ctc11,
    dBT0_177: ctc12,
    remWL0_177: ctc9
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  
  const v1433 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1434 = [v1433, v1433];
  const v1440 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:72:93:application',
    fs: ['at ./index.rsh:71:17:application call to [unknown function] (defined at: ./index.rsh:71:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1441 = v1440.bT;
  const v1442 = v1440.companyName;
  const v1443 = v1440.lockSale;
  const v1444 = v1440.managerAddr;
  const v1445 = v1440.sT;
  const v1451 = stdlib.tokenEq(v1445, v1441);
  const v1452 = v1451 ? false : true;
  stdlib.assert(v1452, {
    at: './index.rsh:73:15:application',
    fs: ['at ./index.rsh:71:17:application call to [unknown function] (defined at: ./index.rsh:71:21:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1442, v1443, v1444, v1445, v1441],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1454, v1455, v1456, v1457, v1458], secs: v1460, time: v1459, didSend: v45, from: v1453 } = txn1;
      
      const v1463 = v1434[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '0')];
      const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1')];
      const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '2')];
      const v1467 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1465, v1466];
      const v1468 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '0'), v1467);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1457
        });
      const v1470 = v1468[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1')];
      const v1472 = v1470[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1')];
      const v1473 = v1470[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '2')];
      const v1474 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1472, v1473];
      const v1475 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1'), v1474);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1458
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc7, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v1454, v1455, v1456, v1457, v1458], secs: v1460, time: v1459, didSend: v45, from: v1453 } = txn1;
  const v1461 = stdlib.tokenEq(v1457, v1458);
  const v1462 = v1461 ? false : true;
  stdlib.assert(v1462, {
    at: './index.rsh:76:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1463 = v1434[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '0')];
  const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1')];
  const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '2')];
  const v1467 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1465, v1466];
  const v1468 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '0'), v1467);
  ;
  const v1470 = v1468[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1')];
  const v1472 = v1470[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1')];
  const v1473 = v1470[stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '2')];
  const v1474 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1472, v1473];
  const v1475 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./index.rsh:76:13:dot', stdlib.UInt_max, '1'), v1474);
  ;
  ;
  const v1478 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1478), {
    at: './index.rsh:78:31:application',
    fs: ['at ./index.rsh:78:31:application call to [unknown function] (defined at: ./index.rsh:78:31:function exp)', 'at ./index.rsh:78:31:application call to "liftedInteract" (defined at: ./index.rsh:78:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1457, v1458, v1475],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1459,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [], secs: v1481, time: v1480, didSend: v55, from: v1479 } = txn2;
      
      ;
      const v1483 = v1456;
      const v1484 = stdlib.checkedBigNumberify('./index.rsh:100:103:decimal', stdlib.UInt_max, '0');
      const v1485 = v1455;
      const v1486 = stdlib.checkedBigNumberify('./index.rsh:100:77:decimal', stdlib.UInt_max, '0');
      const v1487 = stdlib.checkedBigNumberify('./index.rsh:100:74:decimal', stdlib.UInt_max, '0');
      const v1488 = v1480;
      const v1494 = v1475;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1458
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1457
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc6, ctc7, ctc4, ctc4, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1481, time: v1480, didSend: v55, from: v1479 } = txn2;
  ;
  const v1482 = stdlib.addressEq(v1453, v1479);
  stdlib.assert(v1482, {
    at: './index.rsh:82:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v1483 = v1456;
  let v1484 = stdlib.checkedBigNumberify('./index.rsh:100:103:decimal', stdlib.UInt_max, '0');
  let v1485 = v1455;
  let v1486 = stdlib.checkedBigNumberify('./index.rsh:100:77:decimal', stdlib.UInt_max, '0');
  let v1487 = stdlib.checkedBigNumberify('./index.rsh:100:74:decimal', stdlib.UInt_max, '0');
  let v1488 = v1480;
  let v1494 = v1475;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494],
        evt_cnt: 0,
        funcNum: 4,
        lct: v1488,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:281:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          
          const {data: [], secs: v4382, time: v4381, didSend: v1089, from: v4380 } = txn4;
          
          ;
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v4381;
          const cv1494 = v1494;
          
          await (async () => {
            const v1483 = cv1483;
            const v1484 = cv1484;
            const v1485 = cv1485;
            const v1486 = cv1486;
            const v1487 = cv1487;
            const v1488 = cv1488;
            const v1494 = cv1494;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1458
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v1457
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc4, ctc4, ctc7, ctc1, ctc6, ctc1, ctc1, ctc15],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4382, time: v4381, didSend: v1089, from: v4380 } = txn4;
      ;
      const v4383 = stdlib.addressEq(v1453, v4380);
      stdlib.assert(v4383, {
        at: './index.rsh:281:21:dot',
        fs: ['at ./index.rsh:280:40:application call to [unknown function] (defined at: ./index.rsh:280:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1483 = v1483;
      const cv1484 = v1484;
      const cv1485 = v1485;
      const cv1486 = v1486;
      const cv1487 = v1487;
      const cv1488 = v4381;
      const cv1494 = v1494;
      
      v1483 = cv1483;
      v1484 = cv1484;
      v1485 = cv1485;
      v1486 = cv1486;
      v1487 = cv1487;
      v1488 = cv1488;
      v1494 = cv1494;
      
      continue;
      }
    else {
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn3;
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          undefined /* setApiDetails */;
          ;
          const v1974 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1975 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1979 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1980 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1981 = [v1975, v1979, v1980];
          const v1982 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v1981);
          ;
          const v1983 = v1982[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1984 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1988 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1989 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1990 = [v1984, v1988, v1989];
          const v1991 = stdlib.Array_set(v1982, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v1990);
          ;
          const v1993 = v1860[stdlib.checkedBigNumberify('./index.rsh:240:13:spread', stdlib.UInt_max, '0')];
          const v1994 = stdlib.addressEq(v1856, v1453);
          const v1995 = stdlib.addressEq(v1856, v1483);
          const v1996 = v1994 ? true : v1995;
          stdlib.assert(v1996, {
            at: './index.rsh:252:24:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1485, {
            at: './index.rsh:253:24:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1997 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1993), null);
          const v1998 = stdlib.fromSome(v1997, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v1999 = stdlib.gt(v1998, stdlib.checkedBigNumberify('./index.rsh:254:71:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1999, {
            at: './index.rsh:254:24:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2000 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1856), null);
          const v2001 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2002 = v1991[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '1')];
          const v2003 = v2002[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '0')];
          const v2004 = stdlib.mul(v2001, v2003);
          const v2005 = stdlib.div(v2004, v1487);
          const v2006 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1993), null);
          const v2007 = stdlib.fromSome(v2006, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2008 = stdlib.add(v2007, v2005);
          await stdlib.mapSet(map1, v1993, v2008);
          const v2009 = true;
          await txn3.getOutput('aBT', 'v2009', ctc6, v2009);
          const v2016 = stdlib.add(v1487, v2005);
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = true;
          const cv1486 = v1486;
          const cv1487 = v2016;
          const cv1488 = v1858;
          const cv1494 = v1991;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          undefined /* setApiDetails */;
          const v2192 = v2175[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '1')];
          ;
          const v2289 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2290 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2291 = stdlib.add(v2290, v2192);
          const v2294 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2295 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2296 = [v2291, v2294, v2295];
          const v2297 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2296);
          ;
          const v2298 = v2297[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2299 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2303 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2304 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2305 = [v2299, v2303, v2304];
          const v2306 = stdlib.Array_set(v2297, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2305);
          ;
          const v2334 = v2175[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '0')];
          const v2336 = stdlib.addressEq(v1856, v1453);
          const v2337 = stdlib.addressEq(v1856, v1483);
          const v2338 = v2336 ? true : v2337;
          stdlib.assert(v2338, {
            at: './index.rsh:160:24:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2339 = stdlib.gt(v2192, stdlib.checkedBigNumberify('./index.rsh:161:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v2339, {
            at: './index.rsh:161:24:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2334, null);
          const v2341 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2334), null);
          const v2342 = stdlib.fromSome(v2341, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2343 = stdlib.add(v2342, v2192);
          await stdlib.mapSet(map0, v2334, v2343);
          const v2344 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2334), null);
          const v2345 = stdlib.fromSome(v2344, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2346 = stdlib.add(v2345, v2192);
          await stdlib.mapSet(map3, v2334, v2346);
          const v2347 = true;
          await txn3.getOutput('aST', 'v2347', ctc6, v2347);
          const v2355 = stdlib.add(v1487, v2192);
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v2355;
          const cv1488 = v1858;
          const cv1494 = v2306;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          undefined /* setApiDetails */;
          ;
          const v2604 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2605 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2609 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2610 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2611 = [v2605, v2609, v2610];
          const v2612 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2611);
          ;
          const v2613 = v2612[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2618 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2619 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2620 = [v2614, v2618, v2619];
          const v2621 = stdlib.Array_set(v2612, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2620);
          ;
          const v2674 = stdlib.addressEq(v1856, v1453);
          const v2675 = stdlib.addressEq(v1856, v1483);
          const v2676 = v2674 ? true : v2675;
          stdlib.assert(v2676, {
            at: './index.rsh:122:24:application',
            fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v1856, null);
          const v2678 = true;
          await txn3.getOutput('addWL', 'v2678', ctc6, v2678);
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1858;
          const cv1494 = v2621;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          undefined /* setApiDetails */;
          ;
          const v2919 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2920 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2924 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2925 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2926 = [v2920, v2924, v2925];
          const v2927 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2926);
          ;
          const v2928 = v2927[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2929 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2933 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2934 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2935 = [v2929, v2933, v2934];
          const v2936 = stdlib.Array_set(v2927, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2935);
          ;
          const v3002 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1856), null);
          let v3003;
          switch (v3002[0]) {
            case 'None': {
              const v3004 = v3002[1];
              v3003 = false;
              
              break;
              }
            case 'Some': {
              const v3005 = v3002[1];
              v3003 = true;
              
              break;
              }
            }
          stdlib.assert(v3003, {
            at: './index.rsh:227:24:application',
            fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3006 = v2936[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '1')];
          const v3007 = v3006[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '0')];
          const v3008 = stdlib.gt(v3007, stdlib.checkedBigNumberify('./index.rsh:228:39:decimal', stdlib.UInt_max, '0'));
          const v3009 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:228:52:decimal', stdlib.UInt_max, '0'));
          const v3010 = v3008 ? v3009 : false;
          const v3011 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1856), null);
          const v3012 = stdlib.fromSome(v3011, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3013 = stdlib.ge(v1487, v3012);
          const v3014 = v3010 ? v3013 : false;
          stdlib.assert(v3014, {
            at: './index.rsh:228:24:application',
            fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3019 = stdlib.mul(v3012, v3007);
          const v3020 = stdlib.div(v3019, v1487);
          const v3026 = stdlib.sub(v3007, v3020);
          const v3029 = v3006[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1')];
          const v3030 = v3006[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '2')];
          const v3031 = [v3026, v3029, v3030];
          const v3032 = stdlib.Array_set(v2936, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1'), v3031);
          ;
          const v3033 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1856), null);
          const v3034 = stdlib.fromSome(v3033, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3035 = stdlib.add(v3034, v3020);
          await stdlib.mapSet(map4, v1856, v3035);
          await stdlib.mapSet(map5, v1856, v1484);
          const v3036 = true;
          await txn3.getOutput('cBT', 'v3036', ctc6, v3036);
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1858;
          const cv1494 = v3032;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          undefined /* setApiDetails */;
          ;
          const v3234 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3235 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3239 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3240 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3241 = [v3235, v3239, v3240];
          const v3242 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3241);
          ;
          const v3243 = v3242[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3244 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3248 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3249 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3250 = [v3244, v3248, v3249];
          const v3251 = stdlib.Array_set(v3242, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3250);
          ;
          const v3359 = v3120[stdlib.checkedBigNumberify('./index.rsh:263:13:spread', stdlib.UInt_max, '0')];
          const v3360 = stdlib.addressEq(v1856, v1453);
          const v3361 = stdlib.addressEq(v1856, v1483);
          const v3362 = v3360 ? true : v3361;
          stdlib.assert(v3362, {
            at: './index.rsh:274:24:application',
            fs: ['at ./index.rsh:273:13:application call to [unknown function] (defined at: ./index.rsh:273:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3363 = true;
          await txn3.getOutput('cCM', 'v3363', ctc6, v3363);
          const cv1483 = v3359;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1858;
          const cv1494 = v3251;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          undefined /* setApiDetails */;
          ;
          const v3549 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3550 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3554 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3555 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3556 = [v3550, v3554, v3555];
          const v3557 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3556);
          ;
          const v3558 = v3557[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3563 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3564 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3565 = [v3559, v3563, v3564];
          const v3566 = stdlib.Array_set(v3557, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3565);
          ;
          const v3687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
          const v3688 = stdlib.fromSome(v3687, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3689 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1856), null);
          let v3690;
          switch (v3689[0]) {
            case 'None': {
              const v3691 = v3689[1];
              v3690 = false;
              
              break;
              }
            case 'Some': {
              const v3692 = v3689[1];
              v3690 = true;
              
              break;
              }
            }
          stdlib.assert(v3690, {
            at: './index.rsh:186:24:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3693 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./index.rsh:187:31:decimal', stdlib.UInt_max, '0'));
          const v3694 = v3566[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3695 = v3694[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3696 = stdlib.gt(v3695, v3688);
          const v3697 = v3693 ? v3696 : false;
          stdlib.assert(v3697, {
            at: './index.rsh:187:24:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3703 = stdlib.sub(v3695, v3688);
          const v3706 = v3694[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '1')];
          const v3707 = v3694[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '2')];
          const v3708 = [v3703, v3706, v3707];
          const v3709 = stdlib.Array_set(v3566, stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '0'), v3708);
          ;
          await stdlib.mapSet(map0, v1856, stdlib.checkedBigNumberify('./index.rsh:190:33:decimal', stdlib.UInt_max, '0'));
          const v3710 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1856), null);
          const v3711 = stdlib.fromSome(v3710, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3712 = stdlib.add(v3711, v3688);
          await stdlib.mapSet(map2, v1856, v3712);
          const v3713 = true;
          await txn3.getOutput('cST', 'v3713', ctc6, v3713);
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1858;
          const cv1494 = v3709;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          undefined /* setApiDetails */;
          const v3820 = v3750[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3864 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3865 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3869 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3870 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3871 = [v3865, v3869, v3870];
          const v3872 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3871);
          ;
          const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3874 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3875 = stdlib.add(v3874, v3820);
          const v3878 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3879 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3880 = [v3875, v3878, v3879];
          const v3881 = stdlib.Array_set(v3872, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3880);
          ;
          const v4037 = stdlib.addressEq(v1856, v1453);
          const v4038 = stdlib.addressEq(v1856, v1483);
          const v4039 = v4037 ? true : v4038;
          stdlib.assert(v4039, {
            at: './index.rsh:208:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4040 = stdlib.gt(v3820, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4040, {
            at: './index.rsh:209:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1485, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4041 = true;
          await txn3.getOutput('dBT', 'v4041', ctc6, v4041);
          const v4048 = stdlib.add(v1486, v3820);
          const v4049 = stdlib.add(v1484, stdlib.checkedBigNumberify('./index.rsh:212:76:decimal', stdlib.UInt_max, '1'));
          const cv1483 = v1483;
          const cv1484 = v4049;
          const cv1485 = true;
          const cv1486 = v4048;
          const cv1487 = v1487;
          const cv1488 = v1858;
          const cv1494 = v3881;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          undefined /* setApiDetails */;
          ;
          const v4179 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4180 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4184 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4185 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4186 = [v4180, v4184, v4185];
          const v4187 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v4186);
          ;
          const v4188 = v4187[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4193 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4194 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4195 = [v4189, v4193, v4194];
          const v4196 = stdlib.Array_set(v4187, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v4195);
          ;
          const v4367 = v4065[stdlib.checkedBigNumberify('./index.rsh:129:13:spread', stdlib.UInt_max, '0')];
          const v4368 = stdlib.addressEq(v1856, v1453);
          const v4369 = stdlib.addressEq(v1856, v1483);
          const v4370 = v4368 ? true : v4369;
          stdlib.assert(v4370, {
            at: './index.rsh:140:24:application',
            fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v4367, undefined /* Nothing */);
          const v4372 = true;
          await txn3.getOutput('remWL', 'v4372', ctc6, v4372);
          const cv1483 = v1483;
          const cv1484 = v1484;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1858;
          const cv1494 = v4196;
          
          v1483 = cv1483;
          v1484 = cv1484;
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1494 = cv1494;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _aBT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aBT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aBT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc9,
    aST0_177: ctc10,
    addWL0_177: ctc9,
    cBT0_177: ctc11,
    cCM0_177: ctc9,
    cST0_177: ctc11,
    dBT0_177: ctc12,
    remWL0_177: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1625 = ctc.selfAddress();
  const v1627 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:100:72:application call to "runaBT0_177" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1628 = v1627[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1631 = stdlib.addressEq(v1625, v1453);
  const v1632 = stdlib.addressEq(v1625, v1483);
  const v1633 = v1631 ? true : v1632;
  stdlib.assert(v1633, {
    at: './index.rsh:244:23:application',
    fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:18:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:100:72:application call to "runaBT0_177" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1634 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1628), null);
  const v1635 = stdlib.fromSome(v1634, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
  const v1636 = stdlib.gt(v1635, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
  const v1637 = v1485 ? v1636 : false;
  stdlib.assert(v1637, {
    at: './index.rsh:246:23:application',
    fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:18:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:100:72:application call to "runaBT0_177" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1641 = ['aBT0_177', v1627];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1641],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:249:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:249:26:decimal', stdlib.UInt_max, '0'), v1457], [stdlib.checkedBigNumberify('./index.rsh:249:35:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1974 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1975 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1979 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1980 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1981 = [v1975, v1979, v1980];
          const v1982 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v1981);
          ;
          const v1983 = v1982[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1984 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1988 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1989 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1990 = [v1984, v1988, v1989];
          const v1991 = stdlib.Array_set(v1982, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v1990);
          ;
          const v1993 = v1860[stdlib.checkedBigNumberify('./index.rsh:240:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1993), null);
          const v2000 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1856), null);
          const v2001 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2002 = v1991[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '1')];
          const v2003 = v2002[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '0')];
          const v2004 = stdlib.mul(v2001, v2003);
          const v2005 = stdlib.div(v2004, v1487);
          const v2006 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1993), null);
          const v2007 = stdlib.fromSome(v2006, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2008 = stdlib.add(v2007, v2005);
          await stdlib.simMapSet(sim_r, 1, v1993, v2008);
          const v2009 = true;
          const v2010 = await txn1.getOutput('aBT', 'v2009', ctc6, v2009);
          
          const v2016 = stdlib.add(v1487, v2005);
          const v7005 = v1483;
          const v7006 = v1484;
          const v7007 = true;
          const v7008 = v1486;
          const v7009 = v2016;
          const v7011 = v1991;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      undefined /* setApiDetails */;
      ;
      const v1974 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v1975 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v1979 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v1980 = v1974[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v1981 = [v1975, v1979, v1980];
      const v1982 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v1981);
      ;
      const v1983 = v1982[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v1984 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v1988 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v1989 = v1983[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v1990 = [v1984, v1988, v1989];
      const v1991 = stdlib.Array_set(v1982, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v1990);
      ;
      const v1993 = v1860[stdlib.checkedBigNumberify('./index.rsh:240:13:spread', stdlib.UInt_max, '0')];
      const v1994 = stdlib.addressEq(v1856, v1453);
      const v1995 = stdlib.addressEq(v1856, v1483);
      const v1996 = v1994 ? true : v1995;
      stdlib.assert(v1996, {
        at: './index.rsh:252:24:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      stdlib.assert(v1485, {
        at: './index.rsh:253:24:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1997 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1993), null);
      const v1998 = stdlib.fromSome(v1997, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v1999 = stdlib.gt(v1998, stdlib.checkedBigNumberify('./index.rsh:254:71:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1999, {
        at: './index.rsh:254:24:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v2000 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1856), null);
      const v2001 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2002 = v1991[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '1')];
      const v2003 = v2002[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '0')];
      const v2004 = stdlib.mul(v2001, v2003);
      const v2005 = stdlib.div(v2004, v1487);
      const v2006 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1993), null);
      const v2007 = stdlib.fromSome(v2006, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2008 = stdlib.add(v2007, v2005);
      await stdlib.mapSet(map1, v1993, v2008);
      const v2009 = true;
      const v2010 = await txn1.getOutput('aBT', 'v2009', ctc6, v2009);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v1860, v2010), {
          at: './index.rsh:241:13:application',
          fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)', 'at ./index.rsh:259:20:application call to "res" (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v2016 = stdlib.add(v1487, v2005);
      const v7005 = v1483;
      const v7006 = v1484;
      const v7007 = true;
      const v7008 = v1486;
      const v7009 = v2016;
      const v7011 = v1991;
      return;
      
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _aST4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aST4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aST4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc10,
    aST0_177: ctc9,
    addWL0_177: ctc10,
    cBT0_177: ctc11,
    cCM0_177: ctc10,
    cST0_177: ctc11,
    dBT0_177: ctc12,
    remWL0_177: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1552 = ctc.selfAddress();
  const v1554 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:100:72:application call to "runaST0_177" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1556 = v1554[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1560 = stdlib.addressEq(v1552, v1453);
  const v1561 = stdlib.addressEq(v1552, v1483);
  const v1562 = v1560 ? true : v1561;
  stdlib.assert(v1562, {
    at: './index.rsh:152:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:23:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:100:72:application call to "runaST0_177" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1563 = stdlib.gt(v1556, stdlib.checkedBigNumberify('./index.rsh:153:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1563, {
    at: './index.rsh:153:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:23:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:100:72:application call to "runaST0_177" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1568 = ['aST0_177', v1554];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1568],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:157:27:decimal', stdlib.UInt_max, '0'), [[v1556, v1457], [stdlib.checkedBigNumberify('./index.rsh:157:42:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          const v2192 = v2175[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '1')];
          ;
          const v2289 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2290 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2291 = stdlib.add(v2290, v2192);
          const v2294 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2295 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2296 = [v2291, v2294, v2295];
          const v2297 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2296);
          sim_r.txns.push({
            amt: v2192,
            kind: 'to',
            tok: v1457
            });
          const v2298 = v2297[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2299 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2303 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2304 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2305 = [v2299, v2303, v2304];
          const v2306 = stdlib.Array_set(v2297, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2305);
          ;
          const v2334 = v2175[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2334, null);
          const v2341 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2334), null);
          const v2342 = stdlib.fromSome(v2341, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2343 = stdlib.add(v2342, v2192);
          await stdlib.simMapSet(sim_r, 0, v2334, v2343);
          const v2344 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2334), null);
          const v2345 = stdlib.fromSome(v2344, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2346 = stdlib.add(v2345, v2192);
          await stdlib.simMapSet(sim_r, 3, v2334, v2346);
          const v2347 = true;
          const v2348 = await txn1.getOutput('aST', 'v2347', ctc6, v2347);
          
          const v2355 = stdlib.add(v1487, v2192);
          const v7068 = v1483;
          const v7069 = v1484;
          const v7070 = v1485;
          const v7071 = v1486;
          const v7072 = v2355;
          const v7074 = v2306;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      undefined /* setApiDetails */;
      const v2192 = v2175[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '1')];
      ;
      const v2289 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2290 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2291 = stdlib.add(v2290, v2192);
      const v2294 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2295 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2296 = [v2291, v2294, v2295];
      const v2297 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2296);
      ;
      const v2298 = v2297[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2299 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2303 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2304 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2305 = [v2299, v2303, v2304];
      const v2306 = stdlib.Array_set(v2297, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2305);
      ;
      const v2334 = v2175[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '0')];
      const v2336 = stdlib.addressEq(v1856, v1453);
      const v2337 = stdlib.addressEq(v1856, v1483);
      const v2338 = v2336 ? true : v2337;
      stdlib.assert(v2338, {
        at: './index.rsh:160:24:application',
        fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2339 = stdlib.gt(v2192, stdlib.checkedBigNumberify('./index.rsh:161:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2339, {
        at: './index.rsh:161:24:application',
        fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2334, null);
      const v2341 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2334), null);
      const v2342 = stdlib.fromSome(v2341, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2343 = stdlib.add(v2342, v2192);
      await stdlib.mapSet(map0, v2334, v2343);
      const v2344 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2334), null);
      const v2345 = stdlib.fromSome(v2344, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2346 = stdlib.add(v2345, v2192);
      await stdlib.mapSet(map3, v2334, v2346);
      const v2347 = true;
      const v2348 = await txn1.getOutput('aST', 'v2347', ctc6, v2347);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v2175, v2348), {
          at: './index.rsh:149:13:application',
          fs: ['at ./index.rsh:149:13:application call to [unknown function] (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:168:20:application call to "res" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2355 = stdlib.add(v1487, v2192);
      const v7068 = v1483;
      const v7069 = v1484;
      const v7070 = v1485;
      const v7071 = v1486;
      const v7072 = v2355;
      const v7074 = v2306;
      return;
      
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _addWL4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addWL4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addWL4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc9,
    aST0_177: ctc10,
    addWL0_177: ctc9,
    cBT0_177: ctc11,
    cCM0_177: ctc9,
    cST0_177: ctc11,
    dBT0_177: ctc12,
    remWL0_177: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1524 = ctc.selfAddress();
  const v1526 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:100:72:application call to "runaddWL0_177" (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1530 = stdlib.addressEq(v1524, v1453);
  const v1531 = stdlib.addressEq(v1524, v1483);
  const v1532 = v1530 ? true : v1531;
  stdlib.assert(v1532, {
    at: './index.rsh:115:23:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:18:function exp)', 'at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:100:72:application call to "runaddWL0_177" (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1536 = ['addWL0_177', v1526];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1536],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:119:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:119:26:decimal', stdlib.UInt_max, '0'), v1457], [stdlib.checkedBigNumberify('./index.rsh:119:35:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2604 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2605 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2609 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2610 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2611 = [v2605, v2609, v2610];
          const v2612 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2611);
          ;
          const v2613 = v2612[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2618 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2619 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2620 = [v2614, v2618, v2619];
          const v2621 = stdlib.Array_set(v2612, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2620);
          ;
          await stdlib.simMapSet(sim_r, 6, v1856, null);
          const v2678 = true;
          const v2679 = await txn1.getOutput('addWL', 'v2678', ctc6, v2678);
          
          const v7131 = v1483;
          const v7132 = v1484;
          const v7133 = v1485;
          const v7134 = v1486;
          const v7135 = v1487;
          const v7137 = v2621;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      undefined /* setApiDetails */;
      ;
      const v2604 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2605 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2609 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2610 = v2604[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2611 = [v2605, v2609, v2610];
      const v2612 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2611);
      ;
      const v2613 = v2612[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2618 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2619 = v2613[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2620 = [v2614, v2618, v2619];
      const v2621 = stdlib.Array_set(v2612, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2620);
      ;
      const v2674 = stdlib.addressEq(v1856, v1453);
      const v2675 = stdlib.addressEq(v1856, v1483);
      const v2676 = v2674 ? true : v2675;
      stdlib.assert(v2676, {
        at: './index.rsh:122:24:application',
        fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v1856, null);
      const v2678 = true;
      const v2679 = await txn1.getOutput('addWL', 'v2678', ctc6, v2678);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v2490, v2679), {
          at: './index.rsh:112:13:application',
          fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:125:20:application call to "res" (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v7131 = v1483;
      const v7132 = v1484;
      const v7133 = v1485;
      const v7134 = v1486;
      const v7135 = v1487;
      const v7137 = v2621;
      return;
      
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cBT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cBT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cBT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc10,
    aST0_177: ctc11,
    addWL0_177: ctc10,
    cBT0_177: ctc9,
    cCM0_177: ctc10,
    cST0_177: ctc9,
    dBT0_177: ctc12,
    remWL0_177: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1604 = ctc.selfAddress();
  const v1606 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:100:72:application call to "runcBT0_177" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1608 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1604), null);
  let v1609;
  switch (v1608[0]) {
    case 'None': {
      const v1610 = v1608[1];
      v1609 = false;
      
      break;
      }
    case 'Some': {
      const v1611 = v1608[1];
      v1609 = true;
      
      break;
      }
    }
  stdlib.assert(v1609, {
    at: './index.rsh:220:23:application',
    fs: ['at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:17:function exp)', 'at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:100:72:application call to "runcBT0_177" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1612 = v1494[stdlib.checkedBigNumberify('./index.rsh:221:31:application', stdlib.UInt_max, '1')];
  const v1613 = v1612[stdlib.checkedBigNumberify('./index.rsh:221:31:application', stdlib.UInt_max, '0')];
  const v1614 = stdlib.gt(v1613, stdlib.checkedBigNumberify('./index.rsh:221:38:decimal', stdlib.UInt_max, '0'));
  const v1615 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:221:51:decimal', stdlib.UInt_max, '0'));
  const v1616 = v1614 ? v1615 : false;
  const v1617 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1604), null);
  const v1618 = stdlib.fromSome(v1617, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
  const v1619 = stdlib.ge(v1487, v1618);
  const v1620 = v1616 ? v1619 : false;
  stdlib.assert(v1620, {
    at: './index.rsh:221:23:application',
    fs: ['at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:17:function exp)', 'at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:100:72:application call to "runcBT0_177" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1623 = ['cBT0_177', v1606];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1623],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:224:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:224:25:decimal', stdlib.UInt_max, '0'), v1457], [stdlib.checkedBigNumberify('./index.rsh:224:34:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2919 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2920 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2924 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2925 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2926 = [v2920, v2924, v2925];
          const v2927 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2926);
          ;
          const v2928 = v2927[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2929 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2933 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2934 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2935 = [v2929, v2933, v2934];
          const v2936 = stdlib.Array_set(v2927, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2935);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1856), null);
          const v3006 = v2936[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '1')];
          const v3007 = v3006[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '0')];
          const v3011 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1856), null);
          const v3012 = stdlib.fromSome(v3011, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3019 = stdlib.mul(v3012, v3007);
          const v3020 = stdlib.div(v3019, v1487);
          const v3026 = stdlib.sub(v3007, v3020);
          const v3029 = v3006[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1')];
          const v3030 = v3006[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '2')];
          const v3031 = [v3026, v3029, v3030];
          const v3032 = stdlib.Array_set(v2936, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1'), v3031);
          sim_r.txns.push({
            amt: v3020,
            kind: 'from',
            to: v1856,
            tok: v1458
            });
          const v3033 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1856), null);
          const v3034 = stdlib.fromSome(v3033, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3035 = stdlib.add(v3034, v3020);
          await stdlib.simMapSet(sim_r, 4, v1856, v3035);
          await stdlib.simMapSet(sim_r, 5, v1856, v1484);
          const v3036 = true;
          const v3037 = await txn1.getOutput('cBT', 'v3036', ctc6, v3036);
          
          const v7194 = v1483;
          const v7195 = v1484;
          const v7196 = v1485;
          const v7197 = v1486;
          const v7198 = v1487;
          const v7200 = v3032;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      undefined /* setApiDetails */;
      ;
      const v2919 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2920 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2924 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2925 = v2919[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2926 = [v2920, v2924, v2925];
      const v2927 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2926);
      ;
      const v2928 = v2927[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2929 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2933 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2934 = v2928[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2935 = [v2929, v2933, v2934];
      const v2936 = stdlib.Array_set(v2927, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2935);
      ;
      const v3002 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1856), null);
      let v3003;
      switch (v3002[0]) {
        case 'None': {
          const v3004 = v3002[1];
          v3003 = false;
          
          break;
          }
        case 'Some': {
          const v3005 = v3002[1];
          v3003 = true;
          
          break;
          }
        }
      stdlib.assert(v3003, {
        at: './index.rsh:227:24:application',
        fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3006 = v2936[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '1')];
      const v3007 = v3006[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '0')];
      const v3008 = stdlib.gt(v3007, stdlib.checkedBigNumberify('./index.rsh:228:39:decimal', stdlib.UInt_max, '0'));
      const v3009 = stdlib.gt(v1487, stdlib.checkedBigNumberify('./index.rsh:228:52:decimal', stdlib.UInt_max, '0'));
      const v3010 = v3008 ? v3009 : false;
      const v3011 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1856), null);
      const v3012 = stdlib.fromSome(v3011, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3013 = stdlib.ge(v1487, v3012);
      const v3014 = v3010 ? v3013 : false;
      stdlib.assert(v3014, {
        at: './index.rsh:228:24:application',
        fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3019 = stdlib.mul(v3012, v3007);
      const v3020 = stdlib.div(v3019, v1487);
      const v3026 = stdlib.sub(v3007, v3020);
      const v3029 = v3006[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1')];
      const v3030 = v3006[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '2')];
      const v3031 = [v3026, v3029, v3030];
      const v3032 = stdlib.Array_set(v2936, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1'), v3031);
      ;
      const v3033 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1856), null);
      const v3034 = stdlib.fromSome(v3033, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3035 = stdlib.add(v3034, v3020);
      await stdlib.mapSet(map4, v1856, v3035);
      await stdlib.mapSet(map5, v1856, v1484);
      const v3036 = true;
      const v3037 = await txn1.getOutput('cBT', 'v3036', ctc6, v3036);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v2805, v3037), {
          at: './index.rsh:216:13:application',
          fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:235:20:application call to "res" (defined at: ./index.rsh:226:13:function exp)', 'at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v7194 = v1483;
      const v7195 = v1484;
      const v7196 = v1485;
      const v7197 = v1486;
      const v7198 = v1487;
      const v7200 = v3032;
      return;
      
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cCM4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cCM4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cCM4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc9,
    aST0_177: ctc10,
    addWL0_177: ctc9,
    cBT0_177: ctc11,
    cCM0_177: ctc9,
    cST0_177: ctc11,
    dBT0_177: ctc12,
    remWL0_177: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1643 = ctc.selfAddress();
  const v1645 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)', 'at ./index.rsh:100:72:application call to "runcCM0_177" (defined at: ./index.rsh:263:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1649 = stdlib.addressEq(v1643, v1453);
  const v1650 = stdlib.addressEq(v1643, v1483);
  const v1651 = v1649 ? true : v1650;
  stdlib.assert(v1651, {
    at: './index.rsh:267:23:application',
    fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:21:function exp)', 'at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)', 'at ./index.rsh:100:72:application call to "runcCM0_177" (defined at: ./index.rsh:263:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1655 = ['cCM0_177', v1645];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1655],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:271:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:271:26:decimal', stdlib.UInt_max, '0'), v1457], [stdlib.checkedBigNumberify('./index.rsh:271:35:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v3234 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3235 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3239 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3240 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3241 = [v3235, v3239, v3240];
          const v3242 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3241);
          ;
          const v3243 = v3242[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3244 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3248 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3249 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3250 = [v3244, v3248, v3249];
          const v3251 = stdlib.Array_set(v3242, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3250);
          ;
          const v3359 = v3120[stdlib.checkedBigNumberify('./index.rsh:263:13:spread', stdlib.UInt_max, '0')];
          const v3363 = true;
          const v3364 = await txn1.getOutput('cCM', 'v3363', ctc6, v3363);
          
          const v7257 = v3359;
          const v7258 = v1484;
          const v7259 = v1485;
          const v7260 = v1486;
          const v7261 = v1487;
          const v7263 = v3251;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      undefined /* setApiDetails */;
      ;
      const v3234 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3235 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3239 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3240 = v3234[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3241 = [v3235, v3239, v3240];
      const v3242 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3241);
      ;
      const v3243 = v3242[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3244 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3248 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3249 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3250 = [v3244, v3248, v3249];
      const v3251 = stdlib.Array_set(v3242, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3250);
      ;
      const v3359 = v3120[stdlib.checkedBigNumberify('./index.rsh:263:13:spread', stdlib.UInt_max, '0')];
      const v3360 = stdlib.addressEq(v1856, v1453);
      const v3361 = stdlib.addressEq(v1856, v1483);
      const v3362 = v3360 ? true : v3361;
      stdlib.assert(v3362, {
        at: './index.rsh:274:24:application',
        fs: ['at ./index.rsh:273:13:application call to [unknown function] (defined at: ./index.rsh:273:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v3363 = true;
      const v3364 = await txn1.getOutput('cCM', 'v3363', ctc6, v3363);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v3120, v3364), {
          at: './index.rsh:264:13:application',
          fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:276:20:application call to "res" (defined at: ./index.rsh:273:13:function exp)', 'at ./index.rsh:273:13:application call to [unknown function] (defined at: ./index.rsh:273:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v7257 = v3359;
      const v7258 = v1484;
      const v7259 = v1485;
      const v7260 = v1486;
      const v7261 = v1487;
      const v7263 = v3251;
      return;
      
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cST4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cST4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cST4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc10,
    aST0_177: ctc11,
    addWL0_177: ctc10,
    cBT0_177: ctc9,
    cCM0_177: ctc10,
    cST0_177: ctc9,
    dBT0_177: ctc12,
    remWL0_177: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1570 = ctc.selfAddress();
  const v1572 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:100:72:application call to "runcST0_177" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1574 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1570), null);
  const v1575 = stdlib.fromSome(v1574, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
  const v1576 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1570), null);
  let v1577;
  switch (v1576[0]) {
    case 'None': {
      const v1578 = v1576[1];
      v1577 = false;
      
      break;
      }
    case 'Some': {
      const v1579 = v1576[1];
      v1577 = true;
      
      break;
      }
    }
  stdlib.assert(v1577, {
    at: './index.rsh:178:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:17:function exp)', 'at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:100:72:application call to "runcST0_177" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1580 = stdlib.gt(v1575, stdlib.checkedBigNumberify('./index.rsh:179:30:decimal', stdlib.UInt_max, '0'));
  const v1581 = v1494[stdlib.checkedBigNumberify('./index.rsh:179:42:application', stdlib.UInt_max, '0')];
  const v1582 = v1581[stdlib.checkedBigNumberify('./index.rsh:179:42:application', stdlib.UInt_max, '0')];
  const v1583 = stdlib.gt(v1582, v1575);
  const v1584 = v1580 ? v1583 : false;
  stdlib.assert(v1584, {
    at: './index.rsh:179:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:17:function exp)', 'at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:100:72:application call to "runcST0_177" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1587 = ['cST0_177', v1572];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1587],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:182:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:182:25:decimal', stdlib.UInt_max, '0'), v1457], [stdlib.checkedBigNumberify('./index.rsh:182:34:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v3549 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3550 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3554 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3555 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3556 = [v3550, v3554, v3555];
          const v3557 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3556);
          ;
          const v3558 = v3557[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3563 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3564 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3565 = [v3559, v3563, v3564];
          const v3566 = stdlib.Array_set(v3557, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3565);
          ;
          const v3687 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1856), null);
          const v3688 = stdlib.fromSome(v3687, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1856), null);
          const v3694 = v3566[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3695 = v3694[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3703 = stdlib.sub(v3695, v3688);
          const v3706 = v3694[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '1')];
          const v3707 = v3694[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '2')];
          const v3708 = [v3703, v3706, v3707];
          const v3709 = stdlib.Array_set(v3566, stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '0'), v3708);
          sim_r.txns.push({
            amt: v3688,
            kind: 'from',
            to: v1856,
            tok: v1457
            });
          await stdlib.simMapSet(sim_r, 0, v1856, stdlib.checkedBigNumberify('./index.rsh:190:33:decimal', stdlib.UInt_max, '0'));
          const v3710 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1856), null);
          const v3711 = stdlib.fromSome(v3710, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3712 = stdlib.add(v3711, v3688);
          await stdlib.simMapSet(sim_r, 2, v1856, v3712);
          const v3713 = true;
          const v3714 = await txn1.getOutput('cST', 'v3713', ctc6, v3713);
          
          const v7320 = v1483;
          const v7321 = v1484;
          const v7322 = v1485;
          const v7323 = v1486;
          const v7324 = v1487;
          const v7326 = v3709;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      undefined /* setApiDetails */;
      ;
      const v3549 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3550 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3554 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3555 = v3549[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3556 = [v3550, v3554, v3555];
      const v3557 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3556);
      ;
      const v3558 = v3557[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3563 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3564 = v3558[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3565 = [v3559, v3563, v3564];
      const v3566 = stdlib.Array_set(v3557, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3565);
      ;
      const v3687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1856), null);
      const v3688 = stdlib.fromSome(v3687, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3689 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1856), null);
      let v3690;
      switch (v3689[0]) {
        case 'None': {
          const v3691 = v3689[1];
          v3690 = false;
          
          break;
          }
        case 'Some': {
          const v3692 = v3689[1];
          v3690 = true;
          
          break;
          }
        }
      stdlib.assert(v3690, {
        at: './index.rsh:186:24:application',
        fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3693 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./index.rsh:187:31:decimal', stdlib.UInt_max, '0'));
      const v3694 = v3566[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
      const v3695 = v3694[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
      const v3696 = stdlib.gt(v3695, v3688);
      const v3697 = v3693 ? v3696 : false;
      stdlib.assert(v3697, {
        at: './index.rsh:187:24:application',
        fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3703 = stdlib.sub(v3695, v3688);
      const v3706 = v3694[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '1')];
      const v3707 = v3694[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '2')];
      const v3708 = [v3703, v3706, v3707];
      const v3709 = stdlib.Array_set(v3566, stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '0'), v3708);
      ;
      await stdlib.mapSet(map0, v1856, stdlib.checkedBigNumberify('./index.rsh:190:33:decimal', stdlib.UInt_max, '0'));
      const v3710 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1856), null);
      const v3711 = stdlib.fromSome(v3710, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3712 = stdlib.add(v3711, v3688);
      await stdlib.mapSet(map2, v1856, v3712);
      const v3713 = true;
      const v3714 = await txn1.getOutput('cST', 'v3713', ctc6, v3713);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v3435, v3714), {
          at: './index.rsh:174:13:application',
          fs: ['at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:13:function exp)', 'at ./index.rsh:192:20:application call to "res" (defined at: ./index.rsh:184:13:function exp)', 'at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v7320 = v1483;
      const v7321 = v1484;
      const v7322 = v1485;
      const v7323 = v1486;
      const v7324 = v1487;
      const v7326 = v3709;
      return;
      
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _dBT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _dBT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _dBT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc10,
    aST0_177: ctc11,
    addWL0_177: ctc10,
    cBT0_177: ctc12,
    cCM0_177: ctc10,
    cST0_177: ctc12,
    dBT0_177: ctc9,
    remWL0_177: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1589 = ctc.selfAddress();
  const v1591 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_177" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1592 = v1591[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1595 = stdlib.addressEq(v1589, v1453);
  const v1596 = stdlib.addressEq(v1589, v1483);
  const v1597 = v1595 ? true : v1596;
  stdlib.assert(v1597, {
    at: './index.rsh:200:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_177" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1598 = stdlib.gt(v1592, stdlib.checkedBigNumberify('./index.rsh:201:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1598, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_177" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  stdlib.assert(v1485, {
    at: './index.rsh:202:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_177" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1602 = ['dBT0_177', v1591];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1602],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'), v1457], [v1592, v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3820 = v3750[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3864 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3865 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3869 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3870 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3871 = [v3865, v3869, v3870];
          const v3872 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3871);
          ;
          const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3874 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3875 = stdlib.add(v3874, v3820);
          const v3878 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3879 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3880 = [v3875, v3878, v3879];
          const v3881 = stdlib.Array_set(v3872, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3880);
          sim_r.txns.push({
            amt: v3820,
            kind: 'to',
            tok: v1458
            });
          const v4041 = true;
          const v4042 = await txn1.getOutput('dBT', 'v4041', ctc6, v4041);
          
          const v4048 = stdlib.add(v1486, v3820);
          const v4049 = stdlib.add(v1484, stdlib.checkedBigNumberify('./index.rsh:212:76:decimal', stdlib.UInt_max, '1'));
          const v7383 = v1483;
          const v7384 = v4049;
          const v7385 = true;
          const v7386 = v4048;
          const v7387 = v1487;
          const v7389 = v3881;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      undefined /* setApiDetails */;
      const v3820 = v3750[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
      ;
      const v3864 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3865 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3869 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3870 = v3864[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3871 = [v3865, v3869, v3870];
      const v3872 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3871);
      ;
      const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3874 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3875 = stdlib.add(v3874, v3820);
      const v3878 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3879 = v3873[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3880 = [v3875, v3878, v3879];
      const v3881 = stdlib.Array_set(v3872, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3880);
      ;
      const v4037 = stdlib.addressEq(v1856, v1453);
      const v4038 = stdlib.addressEq(v1856, v1483);
      const v4039 = v4037 ? true : v4038;
      stdlib.assert(v4039, {
        at: './index.rsh:208:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4040 = stdlib.gt(v3820, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4040, {
        at: './index.rsh:209:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      stdlib.assert(v1485, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4041 = true;
      const v4042 = await txn1.getOutput('dBT', 'v4041', ctc6, v4041);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v3750, v4042), {
          at: './index.rsh:197:13:application',
          fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:211:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v4048 = stdlib.add(v1486, v3820);
      const v4049 = stdlib.add(v1484, stdlib.checkedBigNumberify('./index.rsh:212:76:decimal', stdlib.UInt_max, '1'));
      const v7383 = v1483;
      const v7384 = v4049;
      const v7385 = true;
      const v7386 = v4048;
      const v7387 = v1487;
      const v7389 = v3881;
      return;
      
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      return;
      break;
      }
    }
  
  
  };
export async function _remWL4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _remWL4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _remWL4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_177: ctc9,
    aST0_177: ctc10,
    addWL0_177: ctc9,
    cBT0_177: ctc11,
    cCM0_177: ctc9,
    cST0_177: ctc11,
    dBT0_177: ctc12,
    remWL0_177: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc2;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc2;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc3;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  
  const [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1538 = ctc.selfAddress();
  const v1540 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:100:72:application call to "runremWL0_177" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1544 = stdlib.addressEq(v1538, v1453);
  const v1545 = stdlib.addressEq(v1538, v1483);
  const v1546 = v1544 ? true : v1545;
  stdlib.assert(v1546, {
    at: './index.rsh:133:23:application',
    fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:18:function exp)', 'at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:100:72:application call to "runremWL0_177" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1550 = ['remWL0_177', v1540];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1483, v1484, v1485, v1486, v1487, v1494, v1550],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:137:26:decimal', stdlib.UInt_max, '0'), v1457], [stdlib.checkedBigNumberify('./index.rsh:137:35:decimal', stdlib.UInt_max, '0'), v1458]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      
      const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
      
      switch (v1857[0]) {
        case 'aBT0_177': {
          const v1860 = v1857[1];
          
          break;
          }
        case 'aST0_177': {
          const v2175 = v1857[1];
          
          break;
          }
        case 'addWL0_177': {
          const v2490 = v1857[1];
          
          break;
          }
        case 'cBT0_177': {
          const v2805 = v1857[1];
          
          break;
          }
        case 'cCM0_177': {
          const v3120 = v1857[1];
          
          break;
          }
        case 'cST0_177': {
          const v3435 = v1857[1];
          
          break;
          }
        case 'dBT0_177': {
          const v3750 = v1857[1];
          
          break;
          }
        case 'remWL0_177': {
          const v4065 = v1857[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v4179 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4180 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4184 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4185 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4186 = [v4180, v4184, v4185];
          const v4187 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v4186);
          ;
          const v4188 = v4187[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4193 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4194 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4195 = [v4189, v4193, v4194];
          const v4196 = stdlib.Array_set(v4187, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v4195);
          ;
          const v4367 = v4065[stdlib.checkedBigNumberify('./index.rsh:129:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v4367, undefined /* Nothing */);
          const v4372 = true;
          const v4373 = await txn1.getOutput('remWL', 'v4372', ctc6, v4372);
          
          const v7446 = v1483;
          const v7447 = v1484;
          const v7448 = v1485;
          const v7449 = v1486;
          const v7450 = v1487;
          const v7452 = v4196;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1857], secs: v1859, time: v1858, didSend: v876, from: v1856 } = txn1;
  switch (v1857[0]) {
    case 'aBT0_177': {
      const v1860 = v1857[1];
      return;
      break;
      }
    case 'aST0_177': {
      const v2175 = v1857[1];
      return;
      break;
      }
    case 'addWL0_177': {
      const v2490 = v1857[1];
      return;
      break;
      }
    case 'cBT0_177': {
      const v2805 = v1857[1];
      return;
      break;
      }
    case 'cCM0_177': {
      const v3120 = v1857[1];
      return;
      break;
      }
    case 'cST0_177': {
      const v3435 = v1857[1];
      return;
      break;
      }
    case 'dBT0_177': {
      const v3750 = v1857[1];
      return;
      break;
      }
    case 'remWL0_177': {
      const v4065 = v1857[1];
      undefined /* setApiDetails */;
      ;
      const v4179 = v1494[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v4180 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v4184 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v4185 = v4179[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v4186 = [v4180, v4184, v4185];
      const v4187 = stdlib.Array_set(v1494, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v4186);
      ;
      const v4188 = v4187[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v4193 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v4194 = v4188[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v4195 = [v4189, v4193, v4194];
      const v4196 = stdlib.Array_set(v4187, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v4195);
      ;
      const v4367 = v4065[stdlib.checkedBigNumberify('./index.rsh:129:13:spread', stdlib.UInt_max, '0')];
      const v4368 = stdlib.addressEq(v1856, v1453);
      const v4369 = stdlib.addressEq(v1856, v1483);
      const v4370 = v4368 ? true : v4369;
      stdlib.assert(v4370, {
        at: './index.rsh:140:24:application',
        fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v4367, undefined /* Nothing */);
      const v4372 = true;
      const v4373 = await txn1.getOutput('remWL', 'v4372', ctc6, v4372);
      if (v876) {
        stdlib.protect(ctc0, await interact.out(v4065, v4373), {
          at: './index.rsh:130:13:application',
          fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:13:function exp)', 'at ./index.rsh:143:20:application call to "res" (defined at: ./index.rsh:139:13:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v7446 = v1483;
      const v7447 = v1484;
      const v7448 = v1485;
      const v7449 = v1486;
      const v7450 = v1487;
      const v7452 = v4196;
      return;
      
      break;
      }
    }
  
  
  };
export async function aBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _aBT4(ctcTop, interact);}
  };
export async function aST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _aST4(ctcTop, interact);}
  };
export async function addWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _addWL4(ctcTop, interact);}
  };
export async function cBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _cBT4(ctcTop, interact);}
  };
export async function cCM(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cCM expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cCM expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _cCM4(ctcTop, interact);}
  };
export async function cST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _cST4(ctcTop, interact);}
  };
export async function dBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for dBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for dBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _dBT4(ctcTop, interact);}
  };
export async function remWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for remWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for remWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _remWL4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`aBT(address)byte`, `aST(address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `dBT(uint64)byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint64,uint64)`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `wlMember(address)byte`],
    sigs: [`aBT(address)byte`, `aST(address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `claimSTBT(address)(uint64,uint64)`, `dBT(uint64)byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `wlMember(address)byte`]
    },
  appApproval: `BiAcAAEECCggNqCNBjfNxdWHCbCC37AM3e7QoA7YjpngDrTctawN3dHhmAnr5oTTCZz4g4gC2q6UyAW8rcerCPmu9JUBsJ3j3QED////////////AVBZYQcFJgMBAAEBACI1ADEYQQtmKmRJIls1ASVbNQIxGSMSQQAKMQAoIQivZkILMzYaABdJQQH8IjUEIzUGSSEJDEABKEkhCgxAAKlJIQsMQAAxSSEMDEAAFSEMEkQ2GgE1/4ABBzT/UCWvUEICQyELEkQ2GgE1/4ABBjT/UDIDUEICLkkhDQxAAFEhDRJENAEkEkQ2GgE1/yI0/4gK5FcSCUk1/iNbNP4iVU0WIjT/iArQVyQJSTX+I1s0/iJVTRZQIjT/iAq7Vy0JSTX+I1s0/iJVTRZQNQdCCpYhChJENAEkEkQoZClkUEk1A1dYATUHQgp9SSEODEAATEkhDwxAABQhDxJEKjX/gAEDNP9QIQSvUEIBmyEOEkQ0ASQSRDYaAYgKXVc2AUk1/iJVQAAGIjX/QgAGIzX/QgAANP8WUQcINQdCCiohCRJENAEkEkQoZClkUEk1A1dhCDQDV1kIUDQDV1AIUDUHQgoFSSEQDEAATEkhEQxAADBJIRIMQAAVIRISRDYaATX/gAECNP9QJa9QQgEbIRESRDYaATYaAlA1/yk0/1BCAQchEBJENhoBNf+AAQQ0/1Alr1BCAPJJIRMMQABXSSEUDEAAFCEUEkQqNf+AAQU0/1AhBK9QQgDQIRMSRDQBJBJENhoBNf8iNP+ICY1XAAlJNf4jWzT+IlVNFiI0/4gJeVcJCUk1/iNbNP4iVU0WUDUHQglUgd/2hgsSRDYaATX/KDT/UCWvUEIAfjYaAhc1BDYaAzYaARdJIRUMQAdISSQMQABjJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABJEnNPOwMgYhFg9ENP8xABJENP80AyEFWzQDIQRbNANXMCA0AyEXWzQDV1gBFzQDIRhbNAMhGVsyBjQDV2kiQggqSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8hBVs1/iEEWzX9VzAgNfwhF1s1+1dYARc1+iEYWzX5IRlbNfhXaSI190k1BTX2gARRfxw4NPZQsDIGIRYMRDT2IlVJJAxAAshJgQYMQAEdSSEaDEAAhiEaEkQ09lcBIDX1NPdXABFJNfRXAAg09FcICFA09FcQAVA091cREVA18zTzVxERNfIxADT/EjEANPwSEUQ09Sg09YgIFCIhBkxWZoAJAAAAAAAAERQBsCk1BzT/NP40/TT8NPs0+jT5NPgyBjTzVwARNPJXAAg08lcICFA08lcQAVBQQgcrSDT2VwEINfU09Rc19DT3VwARSTXzVwAINPNXCAhQNPNXEAFQNPdXERFQNfI08lcRETXxNPQ0/YgHwDEANP8SMQA0/BIRRDT0Ig1ENPpEgAkAAAAAAAAPyQGwKTUHNP80/jT9NPw0+yMIIzT5NPQINPgyBjTyVwARNPEiWzT0CBY08VcICFA08VcQAVBQQgabSSEbDEABKEg091cAEUk19VcACDT1VwgIUDT1VxABUDT3VxERUDX0NPRXERE18zT0VwARNPNXAAg081cICFA081cQAVBQNfIiMQCIBvZXAAlJNfAjWzTwIlVNNfExAIgG4lc2AUk17yJVQAAGIjXwQgAGIzXwQgAANPBENPJXABFJNe8iWzXuNPEiDTTuNPENEESxIrIBNPGyEiSyEDEAshQ0/rIRszEAKDEAiAaVgAkBAAAAAAAAAAA17VcJLjTtTFBmMQAoMQCIBngpIjEAiAZxVxIJSTXtI1s07SJVTTTxCBZQNe1JVwASNO1QTFcbHFBmgAkAAAAAAAAOgQGwKTUHNP80/jT9NPw0+zT6NPk0+DIGNO408QkWNO9XCAhQNO9XEAFQNPJXERFQQgVsSDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jEANP8SMQA0/BIRRIAJAAAAAAAADSMBsCk1BzT/NP40/TT1NPs0+jT5NPgyBjTzVwARNPJXAAg08lcICFA08lcQAVBQQgT3SYECDEABuUkhFQxAATZINPdXABFJNfVXAAg09VcICFA09VcQAVA091cREVA19DT0VxERNfM09FcAETTzVwAINPNXCAhQNPNXEAFQUDXyMQCIBUxXNgFJNfAiVUAABiI18UIABiM18UIAADTxRDTyVxERSTXwIls17yIxAIgFIFcbCUk17SNbNO0iVU017jTvIg00+CINEDT4NO4PEEQ07jTvCzT4CjXtsSKyATTtshIkshAxALIUNP2yEbMxACgxAIgE2ykiMQCIBNRXJAlJNewjWzTsIlVNNO0IFlA17ElXACQ07FBMVy0KUGYxACgxAIgEqyk0+xZQNexJVwAtNOxQTFc2AVBmgAkAAAAAAAAL3AGwKTUHNP80/jT9NPw0+zT6NPk0+DIGNPJXABE07zTtCRY08FcICFA08FcQAVBQQgOzSDT3VwARSTX1VwAINPVXCAhQNPVXEAFQNPdXERFQNfQ09FcRETXzMQA0/xIxADT8EhFEMQAoMQCIBCAjIQZMVmaACQAAAAAAAAp2AbApNQc0/zT+NP00/DT7NPo0+TT4MgY09FcAETTzVwAINPNXCAhQNPNXEAFQUEIDN0kjDEAA/kg09lcBKDX1NPUhBVs19DT3VwARSTXzIls09AgWNPNXCAhQNPNXEAFQNPdXERFQNfI09DT+iAPINPJXERE18TT1VwAgNfAxADT/EjEANPwSEUQ09CINRDTwKDTwiAN6IyEGTFZmNPAoNPCIA2wpIjTwiANlVwAJSTXvI1s07yJVTTT0CBZQNe9XCS4070xQZjTwKDTwiANBKSI08IgDOlcbCUk17yNbNO8iVU009AgWUDXvSVcAGzTvUExXJBNQZoAJAAAAAAAACSsBsCk1BzT/NP40/TT8NPs0+jT5NPg09AgyBjTyVwARNPFXAAg08VcICFA08VcQAVBQQgIzSDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jTzVwARNPJXAAg08lcICFA08lcQAVBQNfE09TXwMQA0/xIxADT8EhFENPpEIjTwiAJ7VxsJSTXvI1s07yJVTSINRCIxAIgCZVcbCUk17iNbNO4iVU008VcRESJbCzT4CjXvNPAoNPCIAkMpIjTwiAI8VwkJSTXuI1s07iJVTTTvCBZQNe5JVwAJNO5QTFcSJVBmgAkAAAAAAAAH2QGwKTUHNP80/jT9NPw0+yM0+TT4NO8IMgY08UIBS0kjDEAATiMSRCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASai5F0sDT/MQASRDT/NAOBQVs0A4FJWzQDVyEgIjQDVyABFyIiMgY0A1dRIkIA90giNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/IGpAVs1+4AEZxWleDT/UDT+FlEHCFA0/VA0/BZQNPsWULAhB4gBWoERr0k1+klQNfk0/DT7E0Q0+VcAETX4Ja80+FcICFA0+FcQAVA0+VcREVA19yEHiAEosSKyASKyEiSyEDIKshQ0/LIRszT3VxERNfY091cAESWvNPZXCAhQNPZXEAFQUDX1IQeIAPOxIrIBIrISJLIQMgqyFDT7shGzMQA0/hZRBwhQNP1QNPwWUDT7FlA09VAoSwFXAHNnSCM1ATIGNQJCAGs1/zX+Nf01/DX7Nfo1+TX4NfdJNfY09xZQNPgWUDT5UDT6FlA0+xZRBwhQNPwWUDT9FlA0/1AoSwFXAH9nKUsBV38MZ0gkNQEyBjUCQgAcMRkhGxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 55,
  stateKeys: 2,
  stateSize: 139,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v1454",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1455",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1456",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1457",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1458",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v1454",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1455",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1456",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1457",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1458",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_aBT0_177",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_aST0_177",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_addWL0_177",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_177",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_cCM0_177",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_177",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_dBT0_177",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_remWL0_177",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1857",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2009",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2347",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2678",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3036",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3363",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3713",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4041",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4372",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap4Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap5Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap6Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_aBT0_177",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_aST0_177",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_addWL0_177",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_177",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_cCM0_177",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_177",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_dBT0_177",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_remWL0_177",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1857",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "aBT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "aST",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "addWL",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cBT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "cCM",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cST",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v7453",
        "type": "address"
      }
    ],
    "name": "claimSTBT",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "dBT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "remWL",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "saleLocked",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totSTBTD",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T7",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v7457",
        "type": "address"
      }
    ],
    "name": "totSTBTDRec",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T7",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v7459",
        "type": "address"
      }
    ],
    "name": "wlMember",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162004f5838038062004f58833981016040819052620000269162000553565b600080554360035562000038620002c8565b7fd127a3e17fe6f724f12ef4acd6cdf0ca7724d0fba65a0f126f1147692c404feb33836040516200006b92919062000634565b60405180910390a18051600090819052815160209081018290528251604001919091528151818301805191909152825190518201528201516080810151606090910151620000d9916001600160a01b03918216911614620000ce576001620000d1565b60005b600c6200021b565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011b929062000245565b6060820190815260808201805160009052815160209081015181015182518201528251015160409081015182519015159101529051905162000161919060019062000245565b60a0820152620001743415600d6200021b565b6200017e62000360565b3381526020808401805182015115158284015280516040908101516001600160a01b0390811682860152825160609081015182169086015291516080908101519092169184019190915260a080850151908401526001600081905543905551620001eb91839101620006e7565b604051602081830303815290604052600290805190602001906200021192919062000399565b50505050620007e0565b81620002415760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200024f62000428565b60005b6002811015620002a557848160028110620002715762000271620006d1565b60200201518282600281106200028b576200028b620006d1565b6020020152806200029c8162000779565b91505062000252565b5081818460028110620002bc57620002bc620006d1565b60200201529392505050565b604080516101208101909152600060c0820181815260e08301829052610100830191909152815260208101620002fd62000428565b815260408051606081018252600080825260208281018290529282015291019081526020016200032c62000428565b815260408051606081018252600080825260208281018290529282015291019081526020016200035b62000428565b905290565b6040805160c08101825260008082526020820181905291810182905260608101829052608081019190915260a081016200035b62000428565b828054620003a790620007a3565b90600052602060002090601f016020900481019282620003cb576000855562000416565b82601f10620003e657805160ff191683800117855562000416565b8280016001018555821562000416579182015b8281111562000416578251825591602001919060010190620003f9565b506200042492915062000475565b5090565b60405180604001604052806002905b6200045e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004375790505090565b5b8082111562000424576000815560010162000476565b604080519081016001600160401b0381118282101715620004bd57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620004bd57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620004bd57634e487b7160e01b600052604160045260246000fd5b805180151581146200053657600080fd5b919050565b80516001600160a01b03811681146200053657600080fd5b60008183036101208112156200056857600080fd5b620005726200048c565b83518152601f1982019150610100808312156200058e57600080fd5b62000598620004c3565b6080841215620005a757600080fd5b620005b1620004f4565b935060208601518452604086015160208501526060860151604085015260808601516060850152838152620005e960a0870162000525565b6020820152620005fc60c087016200053b565b60408201526200060f60e087016200053b565b6060820152620006218287016200053b565b6080820152602083015250949350505050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620006b36101008501836001600160a01b03169052565b608001516001600160a01b0381166101208501529050509392505050565b634e487b7160e01b600052603260045260246000fd5b60006101608201905060018060a01b0380845116835260208085015115158185015260408281870151168186015260608381880151168187015283608088015116608087015260a0870151935060a0860160005b60028110156200076d57855180518352858101518684015284015115158483015294840194908201906001016200073b565b50505050505092915050565b60006000198214156200079c57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620007b857607f821691505b60208210811415620007da57634e487b7160e01b600052602260045260246000fd5b50919050565b61476880620007f06000396000f3fe6080604052600436106101735760003560e01c806374fcef12116100c8578063abe9f98d11610084578063cadc2e7a11610061578063cadc2e7a14610400578063d1ad1a3714610420578063dc01fb9d14610435578063e9b451af1461045557005b8063abe9f98d146103ad578063acf0cc22146103cd578063c251dbca146103ed57005b806374fcef121461031c578063817d57f31461032f578063832307571461034f578063a153a9bd14610364578063a7661d5414610377578063ab53f2c61461038a57005b80632c10a1591161012f5780633bc5b7bf1161010c5780633bc5b7bf146102b15780634acdd6cc146102d157806359cac3a4146102d95780637333bd091461031457005b80632c10a159146102785780632f42e5091461028b57806334de9ba71461029e57005b806306dc92ff1461017c578063125f48e4146101b257806312822a75146101d55780631e93b0f1146101ea5780631fa8b02f146102095780632080ea1c1461024b57005b3661017a57005b005b34801561018857600080fd5b5061019c610197366004613e6c565b610468565b6040516101a99190613eaf565b60405180910390f35b6101c56101c0366004613e6c565b610494565b60405190151581526020016101a9565b3480156101e157600080fd5b506101c56104f5565b3480156101f657600080fd5b506003545b6040519081526020016101a9565b34801561021557600080fd5b50610229610224366004613e6c565b610676565b60408051825181526020808401519082015291810151908201526060016101a9565b34801561025757600080fd5b5061026b610266366004613e6c565b6108f6565b6040516101a99190613edf565b61017a610286366004613f11565b61091c565b6101c5610299366004613e6c565b610940565b61017a6102ac366004613f29565b61099d565b3480156102bd57600080fd5b5061019c6102cc366004613e6c565b6109bd565b6101c56109e3565b3480156102e557600080fd5b506102f96102f4366004613e6c565b610a30565b604080518251815260209283015192810192909252016101a9565b6101c5610c57565b6101c561032a366004613e6c565b610ca4565b34801561033b57600080fd5b5061019c61034a366004613e6c565b610d05565b34801561035b57600080fd5b506001546101fb565b6101c5610372366004613e6c565b610d2b565b61017a610385366004613f11565b610d8d565b34801561039657600080fd5b5061039f610dad565b6040516101a9929190613f68565b3480156103b957600080fd5b506101c56103c8366004613e6c565b610e4a565b3480156103d957600080fd5b5061019c6103e8366004613e6c565b61102c565b6101c56103fb366004613fa2565b611052565b34801561040c57600080fd5b5061019c61041b366004613e6c565b6110b9565b34801561042c57600080fd5b506102296110df565b34801561044157600080fd5b5061019c610450366004613e6c565b6112c3565b6101c5610463366004613fce565b6112e9565b604080516060810182526000808252602082018190529181019190915261048e82611341565b92915050565b600061049e6137a2565b6104a66137e6565b6104ae613805565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526104e98284611413565b50506040015192915050565b6000600160005414156105b25760006002805461051190613fe7565b80601f016020809104026020016040519081016040528092919081815260200182805461053d90613fe7565b801561058a5780601f1061055f5761010080835404028352916020019161058a565b820191906000526020600020905b81548152906001019060200180831161056d57829003601f168201915b50505050508060200190518101906105a29190614172565b90506105b060006008612cf7565b505b60046000541415610667576000600280546105cc90613fe7565b80601f01602080910402602001604051908101604052809291908181526020018280546105f890613fe7565b80156106455780601f1061061a57610100808354040283529160200191610645565b820191906000526020600020905b81548152906001019060200180831161062857829003601f168201915b505050505080602001905181019061065d919061421d565b60a0015192915050565b61067360006008612cf7565b90565b61069a60405180606001604052806000815260200160008152602001600081525090565b60016000541415610755576000600280546106b490613fe7565b80601f01602080910402602001604051908101604052809291908181526020018280546106e090613fe7565b801561072d5780601f106107025761010080835404028352916020019161072d565b820191906000526020600020905b81548152906001019060200180831161071057829003601f168201915b50505050508060200190518101906107459190614172565b90506107536000600a612cf7565b505b600460005414156108e55760006002805461076f90613fe7565b80601f016020809104026020016040519081016040528092919081815260200182805461079b90613fe7565b80156107e85780601f106107bd576101008083540402835291602001916107e8565b820191906000526020600020905b8154815290600101906020018083116107cb57829003601f168201915b5050505050806020019051810190610800919061421d565b905061082960408051608081018252600060208201818152928201819052606082015290815290565b600161083485612d1d565b51600181111561084657610846613e89565b14610852576000610860565b61085b84612d1d565b604001515b815152600161086e85612daa565b51600181111561088057610880613e89565b1461088c57600061089a565b61089584612daa565b604001515b81516020015260016108ab85612e37565b5160018111156108bd576108bd613e89565b146108c95760006108d7565b6108d284612e37565b604001515b815160400152519392505050565b6108f16000600a612cf7565b919050565b604080516060810182526000808252602082018190529181019190915261048e82612ec4565b6109246137a2565b61093c610936368490038401846142ca565b82612f8d565b5050565b600061094a6137a2565b6109526137e6565b61095a613805565b60408051602080820183526001600160a01b0388168252838101919091526000835281518082019092528282528301526109948284611413565b50505192915050565b6109a56137a2565b61093c6109b73684900384018461439f565b82611413565b604080516060810182526000808252602082018190529181019190915261048e82613153565b60006109ed6137a2565b6109f56137e6565b6109fd613805565b600060c08201526005815260408051602080820190925282815290830152610a258284611413565b505060a00151919050565b604080518082019091526000808252602082015260016000541415610aff57600060028054610a5e90613fe7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8a90613fe7565b8015610ad75780601f10610aac57610100808354040283529160200191610ad7565b820191906000526020600020905b815481529060010190602001808311610aba57829003601f168201915b5050505050806020019051810190610aef9190614172565b9050610afd60006007612cf7565b505b60046000541415610c4b57600060028054610b1990613fe7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4590613fe7565b8015610b925780601f10610b6757610100808354040283529160200191610b92565b820191906000526020600020905b815481529060010190602001808311610b7557829003601f168201915b5050505050806020019051810190610baa919061421d565b9050610bcc604080516060810182526000602082018181529282015290815290565b6001610bd785613153565b516001811115610be957610be9613e89565b14610bf5576000610c03565b610bfe84613153565b604001515b8151526001610c11856131e0565b516001811115610c2357610c23613e89565b14610c2f576000610c3d565b610c38846131e0565b604001515b815160200152519392505050565b6108f160006007612cf7565b6000610c616137a2565b610c696137e6565b610c71613805565b600060808201526003815260408051602080820190925282815290830152610c998284611413565b505060600151919050565b6000610cae6137a2565b610cb66137e6565b610cbe613805565b60408051602080820183526001600160a01b038816825260a0840191909152600483528151808201909252828252830152610cf98284611413565b50506080015192915050565b604080516060810182526000808252602082018190529181019190915261048e82612d1d565b6000610d356137a2565b610d3d6137e6565b610d45613805565b60408051602080820183526001600160a01b0388168252610100840191909152600783528151808201909252828252830152610d818284611413565b505060e0015192915050565b610d956137a2565b61093c610da7368490038401846142ca565b8261326d565b600060606000546002808054610dc290613fe7565b80601f0160208091040260200160405190810160405280929190818152602001828054610dee90613fe7565b8015610e3b5780601f10610e1057610100808354040283529160200191610e3b565b820191906000526020600020905b815481529060010190602001808311610e1e57829003601f168201915b50505050509050915091509091565b600060016000541415610f0757600060028054610e6690613fe7565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9290613fe7565b8015610edf5780601f10610eb457610100808354040283529160200191610edf565b820191906000526020600020905b815481529060010190602001808311610ec257829003601f168201915b5050505050806020019051810190610ef79190614172565b9050610f056000600b612cf7565b505b6004600054141561102057600060028054610f2190613fe7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4d90613fe7565b8015610f9a5780601f10610f6f57610100808354040283529160200191610f9a565b820191906000526020600020905b815481529060010190602001808311610f7d57829003601f168201915b5050505050806020019051810190610fb2919061421d565b6040805160208101909152600081529091506000610fcf85612ec4565b516001811115610fe157610fe1613e89565b1415610ff05760008152611018565b6001610ffb85612ec4565b51600181111561100d5761100d613e89565b141561101857600181525b519392505050565b6108f16000600b612cf7565b604080516060810182526000808252602082018190529181019190915261048e82612daa565b600061105c6137a2565b6110646137e6565b61106c613805565b6040805180820182526001600160a01b03881681526020808201889052838301919091526001835281518082019092528282528301526110ac8284611413565b5050602001519392505050565b604080516060810182526000808252602082018190529181019190915261048e826131e0565b61110360405180606001604052806000815260200160008152602001600081525090565b600160005414156111be5760006002805461111d90613fe7565b80601f016020809104026020016040519081016040528092919081815260200182805461114990613fe7565b80156111965780601f1061116b57610100808354040283529160200191611196565b820191906000526020600020905b81548152906001019060200180831161117957829003601f168201915b50505050508060200190518101906111ae9190614172565b90506111bc60006009612cf7565b505b600460005414156112b7576000600280546111d890613fe7565b80601f016020809104026020016040519081016040528092919081815260200182805461120490613fe7565b80156112515780601f1061122657610100808354040283529160200191611251565b820191906000526020600020905b81548152906001019060200180831161123457829003601f168201915b5050505050806020019051810190611269919061421d565b905061129260408051608081018252600060208201818152928201819052606082015290815290565b60e082015181515260c082015181516020015260809091015181516040015251919050565b61067360006009612cf7565b604080516060810182526000808252602082018190529181019190915261048e82612e37565b60006112f36137a2565b6112fb6137e6565b611303613805565b604080516020808201835287825260e08401919091526006835281518082019092528282528301526113358284611413565b505060c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561138d5761138d613e89565b1415611404576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156113ce576113ce613e89565b60018111156113df576113df613e89565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6114236004600054146039612cf7565b815161143e90158061143757508251600154145b603a612cf7565b60008080556002805461145090613fe7565b80601f016020809104026020016040519081016040528092919081815260200182805461147c90613fe7565b80156114c95780601f1061149e576101008083540402835291602001916114c9565b820191906000526020600020905b8154815290600101906020018083116114ac57829003601f168201915b50505050508060200190518101906114e1919061421d565b90506114eb6138d2565b6114fa6000194310603b612cf7565b7f07d69f3eeb0ab31f020ff673a4410c4f84f4239c98de47eb88d992f6cd62ad6e338560405161152b929190614494565b60405180910390a1600060208501515151600781111561154d5761154d613e89565b14156118a857602080850151510151815261156a34156012612cf7565b61010082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516115ac9190600090613456565b81604001819052506115ce6115c733846020015160006134ca565b6013612cf7565b6040818101805160209081015151606085018051919091528251820151820151815183015282519091015183015181519015159301929092525190516116179190600190613456565b816080018190525061163961163233846040015160006134ca565b6014612cf7565b8151611676906001600160a01b0316331461166c5782606001516001600160a01b0316336001600160a01b03161461166f565b60015b6015612cf7565b6116858260a001516016612cf7565b6116cf6000600183515161169890611341565b5160018111156116aa576116aa613e89565b146116b65760006116c7565b8251516116c290611341565b604001515b116017612cf7565b60e08201516080820151602001515160016116e933611341565b5160018111156116fb576116fb613e89565b14611707576000611715565b61171033611341565b604001515b61171f91906145a8565b61172991906145c7565b60a082019081528151516001600160a01b03166000908152600560205260409020805460ff191660019081179091559051825151909190611769906131e0565b51600181111561177b5761177b613e89565b14611787576000611798565b815151611793906131e0565b604001515b6117a291906145e9565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527f9316248a6c3b63213a5a2786b8a089ba64c51352893b92f2dc45d4ca819832e1910160405180910390a160018352611805613c73565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808701518451909301929092528251600191015260c08501519151015260a082015160e084015161187791906145e9565b60208201805160809081019290925280514360a09091015290830151905160c001526118a2816134e2565b50612cf1565b60016020850151515160078111156118c2576118c2613e89565b1415611c7b576020840151516040015160c08201526118e334156018612cf7565b60c08101516020015161010083015151516118fe91906145e9565b60e082018051919091526101008301805151602090810151835190910152805151604090810151835190151591015251905161193d9190600090613456565b8161010001819052506119676119603384602001518460c00151602001516134ca565b6019612cf7565b6101008101805160209081015151610120840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516119be906119b790339060006134ca565b601a612cf7565b81516119fb906001600160a01b031633146119f15782606001516001600160a01b0316336001600160a01b0316146119f4565b60015b601b612cf7565b611a1160008260c001516020015111601c612cf7565b60c081018051516001600160a01b039081166000908152600a602090815260408083208054600160ff19918216811790925586515186168552828520805462ff0000191690558651519095168452600483529220805490931682179092559151908101519051909190611a8390613153565b516001811115611a9557611a95613e89565b14611aa1576000611ab5565b60c082015151611ab090613153565b604001515b611abf91906145e9565b60c082018051516001600160a01b039081166000908152600460209081526040808320600190810196909655845151909316825260078152919020805460ff1916841790559051908101519051909190611b1890611341565b516001811115611b2a57611b2a613e89565b14611b36576000611b4a565b60c082015151611b4590611341565b604001515b611b5491906145e9565b60c0820151516001600160a01b031660009081526007602090815260409182902060019081019390935590519182527f40f9dee1c3eed8fe76ab6cc5fb034fbec4a16b22c357917aa97b6a28be2ea876910160405180910390a160016020840152611bbd613c73565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080870151845184015260a0870151845190151592019190915260c08087015193519091019290925290830151015160e0840151611c3b91906145e9565b60208201805160800191909152514360a090910152610100820151610120830151611c699190600190613456565b602082015160c001526118a2816134e2565b6002602085015151516007811115611c9557611c95613e89565b1415611e9d57611ca73415601d612cf7565b6101008201805151516101408301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611cec9190600090613456565b816101600181905250611d0f611d0833846020015160006134ca565b601e612cf7565b610160810180516020908101515161018084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611d6690611d5f90339060006134ca565b601f612cf7565b8151611da3906001600160a01b03163314611d995782606001516001600160a01b0316336001600160a01b031614611d9c565b60015b6020612cf7565b336000908152600a6020908152604091829020805462ff00ff1916600190811790915591519182527f42457f2b8eddd36b91f49e95e4cdb436d442f923e958503f9db47cd6668a19b8910160405180910390a160016040840152611e05613c73565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e0860151835190920191909152905143910152610160820151610180830151611c699190600190613456565b6003602085015151516007811115611eb757611eb7613e89565b141561228d57611ec934156021612cf7565b6101008201805151516101a08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611f0e9190600090613456565b816101c00181905250611f31611f2a33846020015160006134ca565b6022612cf7565b6101c081018051602090810151516101e0840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611f7c9190600190613456565b816102000181905250611f9f611f9833846040015160006134ca565b6023612cf7565b6000611faa33612ec4565b516001811115611fbc57611fbc613e89565b1415611fcf576000610220820152611ffb565b6001611fda33612ec4565b516001811115611fec57611fec613e89565b1415611ffb5760016102208201525b61200b8161022001516024612cf7565b600161201633611341565b51600181111561202857612028613e89565b14612034576000612042565b61203d33611341565b604001515b610240820152610200810151602001515161208b9061206257600061206b565b60008360e00151115b612076576000612084565b8161024001518360e0015110155b6025612cf7565b60e082015161020082015160200151516102408301516120ab91906145a8565b6120b591906145c7565b610260820181905261020082015160200151516120d29190614601565b61028082018051919091526102008201805160209081015181015183518201529051015160409081015191519115159181019190915282015161026082015161211d919033906135a8565b336000818152600860205260409020805460ff191660019081179091556102608301519161214a90612daa565b51600181111561215c5761215c613e89565b14612168576000612176565b61217133612daa565b604001515b61218091906145e9565b3360009081526008602090815260408083206001908101949094556009825291829020805460ff19168417815560808601519084015590519182527f646ba03aa334c45c38c438ecbdca0bb82018416bd3036e8d57b7d50b9ea02585910160405180910390a1600160608401526121f5613c73565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e0860151835190920191909152905143910152610200820151610280830151611c699190600190613456565b60046020850151515160078111156122a7576122a7613e89565b14156124a15760208401515160a001516102a08201526122c934156026612cf7565b6101008201805151516102c0830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161230e9190600090613456565b816102e0018190525061233161232a33846020015160006134ca565b6027612cf7565b6102e08101805160209081015151610300840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516123889061238190339060006134ca565b6028612cf7565b81516123c5906001600160a01b031633146123bb5782606001516001600160a01b0316336001600160a01b0316146123be565b60015b6029612cf7565b604051600181527f0aeb9bd4b5d3d803280f865d3c438f151e0e764f54af1893b6f4f831f716c68e9060200160405180910390a160016080840152612408613c73565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526102a085015151828501805191909416905260808087015184519093019290925260a080870151845190151592019190915260c086015183516060015260e08601518351909201919091529051439101526102e0820151610300830151611c699190600190613456565b60056020850151515160078111156124bb576124bb613e89565b1415612848576124cd3415602a612cf7565b61010082018051515161032083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516125129190600090613456565b81610340018190525061253561252e33846020015160006134ca565b602b612cf7565b61034081018051602090810151516103608401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516125809190600190613456565b8161038001819052506125a361259c33846040015160006134ca565b602c612cf7565b60016125ae33613153565b5160018111156125c0576125c0613e89565b146125cc5760006125da565b6125d533613153565b604001515b6103a082015260006125eb33612ec4565b5160018111156125fd576125fd613e89565b14156126105760006103c082015261263c565b600161261b33612ec4565b51600181111561262d5761262d613e89565b141561263c5760016103c08201525b61264c816103c00151602d612cf7565b61267a6000826103a0015111612663576000612673565b6103a08201516103808301515151115b602e612cf7565b6103a081015161038082015151516126929190614601565b6103e082018051919091526103808201805151602090810151835182015290515160409081015192519215159201919091528201516103a08201516126d9919033906135a8565b3360008181526004602090815260408083208054600160ff1991821681178355918201859055600690935292208054909116821790556103a08301519161271f90612d1d565b51600181111561273157612731613e89565b1461273d57600061274b565b61274633612d1d565b604001515b61275591906145e9565b3360009081526006602090815260409182902060019081019390935590519182527ffeb0fb685a6f1c5dc2e171430159421b16ce83fd66ef24abbbc45587c8c9fd61910160405180910390a1600160a08401526127b0613c73565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526103808201516103e0830151611c699190600090613456565b600660208501515151600781111561286257612862613e89565b1415612ab45760208401515160e001516104008201526128843415602f612cf7565b61010082018051515161042083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516128c99190600090613456565b8161044001819052506128ec6128e533846020015160006134ca565b6030612cf7565b61040081015151610440820151602001515161290891906145e9565b6104608201805191909152610440820180516020908101518101518351820152905101516040908101519151911515918101919091528201516104008201515161295f91612958913391906134ca565b6031612cf7565b815161299c906001600160a01b031633146129925782606001516001600160a01b0316336001600160a01b031614612995565b60015b6032612cf7565b610400810151516129b09015156033612cf7565b6129bf8260a001516034612cf7565b604051600181527fd83c29f158d4d1bd57fe46a7199040c5cf0d74bc55a55ae77218c68710ab05579060200160405180910390a1600160c0840152612a02613c73565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416910152606085015190830151911690526080830151612a4e906001906145e9565b60208083018051909101919091525160016040909101526104008201515160c0840151612a7b91906145e9565b6020820180516060019190915260e0840151815160800152514360a090910152610440820151610460830151611c699190600190613456565b6007602085015151516007811115612ace57612ace613e89565b1415612cf1576020840151516101000151610480820152612af134156035612cf7565b6101008201805151516104a08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051612b369190600090613456565b816104c00181905250612b59612b5233846020015160006134ca565b6036612cf7565b6104c081018051602090810151516104e084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151612bb090612ba990339060006134ca565b6037612cf7565b8151612bed906001600160a01b03163314612be35782606001516001600160a01b0316336001600160a01b031614612be6565b60015b6038612cf7565b610480810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527f3d78520eaf1f41920c0ce04911840098595dc5633cfb7ffcc657fed938971e50910160405180910390a1600160e0840152612c59613c73565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526104c08201516104e0830151611c699190600190613456565b50505050565b8161093c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612d6957612d69613e89565b1415611404576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156113ce576113ce613e89565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612df657612df6613e89565b1415611404576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156113ce576113ce613e89565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115612e8357612e83613e89565b1415611404576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff1660018111156113ce576113ce613e89565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115612f1057612f10613e89565b1415611404576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115612f5157612f51613e89565b6001811115612f6257612f62613e89565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b612f9d6001600054146010612cf7565b8151612fb8901580612fb157508251600154145b6011612cf7565b600080805560028054612fca90613fe7565b80601f0160208091040260200160405190810160405280929190818152602001828054612ff690613fe7565b80156130435780601f1061301857610100808354040283529160200191613043565b820191906000526020600020905b81548152906001019060200180831161302657829003601f168201915b505050505080602001905181019061305b9190614172565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16130b23415600e612cf7565b80516130ca906001600160a01b03163314600f612cf7565b6130d2613c73565b815181516001600160a01b0391821690526060808401518351908316602091820152608080860151855190851660409182015280870151838701805191909616905284516000908401819052928701518551901515910152835190920181905282519091015280514360a091820152830151905160c00152612cf1816134e2565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561319f5761319f613e89565b1415611404576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156113ce576113ce613e89565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561322c5761322c613e89565b1415611404576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156113ce576113ce613e89565b61327d600460005414603e612cf7565b815161329890158061329157508251600154145b603f612cf7565b6000808055600280546132aa90613fe7565b80601f01602080910402602001604051908101604052809291908181526020018280546132d690613fe7565b80156133235780601f106132f857610100808354040283529160200191613323565b820191906000526020600020905b81548152906001019060200180831161330657829003601f168201915b505050505080602001905181019061333b919061421d565b905061334d6000194310156040612cf7565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16133a03415603c612cf7565b80516133b8906001600160a01b03163314603d612cf7565b6133c0613c73565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845190841690820152606080860151838601805191909516905260808087015185519094019390935260a080870151855190151593019290925260c08087015185519092019190915260e086015184519093019290925282514391015261010084015191510152612cf1816134e2565b61345e613ca3565b60005b60028110156134aa5784816002811061347c5761347c61457c565b60200201518282600281106134935761349361457c565b6020020152806134a281614618565b915050613461565b50818184600281106134be576134be61457c565b60200201529392505050565b60006134d8838530856135bc565b90505b9392505050565b6134ea613cee565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301516080808701919091528451830151151560a087015284519091015160c08087019190915284519091015160e0860152925190920151610100840152600460005543600155905161357f91839101614671565b604051602081830303815290604052600290805190602001906135a3929190613d60565b505050565b6135b3838383613696565b6135a357600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613623916146f9565b60006040518083038185875af1925050503d8060008114613660576040519150601f19603f3d011682016040523d82523d6000602084013e613665565b606091505b509150915061367682826001613767565b508080602001905181019061368b9190614715565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916136f5916146f9565b60006040518083038185875af1925050503d8060008114613732576040519150601f19603f3d011682016040523d82523d6000602084013e613737565b606091505b509150915061374882826002613767565b508080602001905181019061375d9190614715565b9695505050505050565b606083156137765750816134db565b8251156137865782518084602001fd5b60405163100960cb60e01b815260048101839052602401612d14565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b604051806040016040528060008152602001613800613de4565b905290565b604080516101208101909152806000815260200161382e60408051602081019091526000815290565b8152602001613859604051806040016040528060006001600160a01b03168152602001600081525090565b815260200161387360408051602081019091526000815290565b81526000602082015260400161389460408051602081019091526000815290565b81526020016000151581526020016138b86040518060200160405280600081525090565b815260200161380060408051602081019091526000815290565b6040805161052081018252600061050082018181528252825160608101845281815260208082018390528185019290925290820152908101613912613ca3565b8152604080516060810182526000808252602082810182905292820152910190815260200161393f613ca3565b815260200160008152602001613971604051806040016040528060006001600160a01b03168152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161399e613ca3565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016139eb613ca3565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613a38613ca3565b81526040805160608101825260008082526020828101829052928201529101908152602001613a65613ca3565b81526020016000151581526020016000815260200160008152602001613aa7604051806060016040528060008152602001600081526020016000151581525090565b8152602001613ac160408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001613aee613ca3565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613b3b613ca3565b81526040805160608101825260008082526020828101829052928201529101908152602001613b68613ca3565b81526000602082018190526040820152606001613ba1604051806060016040528060008152602001600081526020016000151581525090565b8152602001613bbc6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613be9613ca3565b81526040805160608101825260008082526020828101829052928201529101908152602001613c2360408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001613c50613ca3565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101613800613df7565b60405180604001604052806002905b613cd8604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613cb25790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001613800613ca3565b828054613d6c90613fe7565b90600052602060002090601f016020900481019282613d8e5760008555613dd4565b82601f10613da757805160ff1916838001178555613dd4565b82800160010185558215613dd4579182015b82811115613dd4578251825591602001919060010190613db9565b50613de0929150613e3f565b5090565b6040518060200160405280613800613805565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001613800613ca3565b5b80821115613de05760008155600101613e40565b6001600160a01b0381168114613e6957600080fd5b50565b600060208284031215613e7e57600080fd5b81356134db81613e54565b634e487b7160e01b600052602160045260246000fd5b60028110613e6957613e69613e89565b81516060820190613ebf81613e9f565b808352506020830151151560208301526040830151604083015292915050565b81516060820190613eef81613e9f565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215613f2357600080fd5b50919050565b60006101608284031215613f2357600080fd5b60005b83811015613f57578181015183820152602001613f3f565b83811115612cf15750506000910152565b8281526040602082015260008251806040840152613f8d816060850160208701613f3c565b601f01601f1916919091016060019392505050565b60008060408385031215613fb557600080fd5b8235613fc081613e54565b946020939093013593505050565b600060208284031215613fe057600080fd5b5035919050565b600181811c90821680613ffb57607f821691505b60208210811415613f2357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156140555761405561401c565b60405290565b6040516060810167ffffffffffffffff811182821017156140555761405561401c565b604051610120810167ffffffffffffffff811182821017156140555761405561401c565b6040516020810167ffffffffffffffff811182821017156140555761405561401c565b80516108f181613e54565b8015158114613e6957600080fd5b80516108f1816140d0565b600082601f8301126140fa57600080fd5b614102614032565b8060c084018581111561411457600080fd5b845b81811015614167576060818803121561412f5760008081fd5b61413761405b565b8151815260208083015181830152604080840151614154816140d0565b9083015290855290930192606001614116565b509095945050505050565b6000610160828403121561418557600080fd5b60405160c0810181811067ffffffffffffffff821117156141a8576141a861401c565b60405282516141b681613e54565b815260208301516141c6816140d0565b602082015260408301516141d981613e54565b604082015260608301516141ec81613e54565b606082015260808301516141ff81613e54565b60808201526142118460a085016140e9565b60a08201529392505050565b60006101c0828403121561423057600080fd5b61423861407e565b614241836140c5565b815261424f602084016140c5565b6020820152614260604084016140c5565b6040820152614271606084016140c5565b60608201526080830151608082015261428c60a084016140de565b60a082015260c083015160c082015260e083015160e08201526101006142b4858286016140e9565b908201529392505050565b80356108f1816140d0565b6000604082840312156142dc57600080fd5b6142e4614032565b8235815260208301356142f6816140d0565b60208201529392505050565b8035600881106108f157600080fd5b60006020828403121561432357600080fd5b61432b6140a2565b9050813561433881613e54565b815292915050565b60006040828403121561435257600080fd5b61435a614032565b9050813561436781613e54565b808252506020820135602082015292915050565b60006020828403121561438d57600080fd5b6143956140a2565b9135825250919050565b60008183036101608112156143b357600080fd5b6143bb614032565b8335815261014080601f19840112156143d357600080fd5b6143db6140a2565b92506143e561407e565b6143f160208701614302565b81526144008760408801614311565b60208201526144128760608801614340565b60408201526144248760a08801614311565b606082015261443560c087016142bf565b60808201526144478760e08801614311565b60a082015261010061445a8188016142bf565b60c083015261446d88610120890161437b565b60e083015261447e88848901614311565b9082015283525060208101919091529392505050565b6001600160a01b0383168152815160208083019190915282015151805161018083019190600881106144c8576144c8613e89565b6040840152602081015180516001600160a01b0316606085015250604081015180516001600160a01b03166080850152602081015160a085015250606081015180516001600160a01b031660c085015250608081015180151560e08501525060a081015161010061454481860183516001600160a01b03169052565b60c0830151151561012086015260e08301515161014086015290910151516001600160a01b0316610160909301929092529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156145c2576145c2614592565b500290565b6000826145e457634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156145fc576145fc614592565b500190565b60008282101561461357614613614592565b500390565b600060001982141561462c5761462c614592565b5060010190565b8060005b6002811015612cf1578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614637565b81516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151918216908301526101c0820190506080830151608083015260a08301516146c960a084018215159052565b5060c083015160c083015260e083015160e0830152610100808401516146f182850182614633565b505092915050565b6000825161470b818460208701613f3c565b9190910192915050565b60006020828403121561472757600080fd5b81516134db816140d056fea26469706673582212202f75a40c88f19715c8d6d1ee56874640c9fae037f375329dc20cfdc9fed45d3264736f6c634300080c0033`,
  BytecodeLen: 20312,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    wlMember: `wlMember`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:285:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:100:72:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "aBT": aBT,
  "aST": aST,
  "addWL": addWL,
  "cBT": cBT,
  "cCM": cCM,
  "cST": cST,
  "dBT": dBT,
  "remWL": remWL
  };
export const _APIs = {
  aBT: aBT,
  aST: aST,
  addWL: addWL,
  cBT: cBT,
  cCM: cCM,
  cST: cST,
  dBT: dBT,
  remWL: remWL
  };
