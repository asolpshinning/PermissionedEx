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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc2
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
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = svs;
            return (await ((async (_v1497 ) => {
                const v1497 = stdlib.protect(ctc0, _v1497, null);
              
              const v1498 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1497), null);
              const v1499 = stdlib.fromSome(v1498, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
              const v1500 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1497), null);
              const v1501 = stdlib.fromSome(v1500, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
              const v1502 = [v1499, v1501];
              
              return v1502;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = svs;
            return (await ((async () => {
              
              
              return v1487;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = svs;
            return (await ((async () => {
              
              const v1496 = [v1489, v1488, v1486];
              
              return v1496;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = svs;
            return (await ((async (_v1504 ) => {
                const v1504 = stdlib.protect(ctc0, _v1504, null);
              
              const v1505 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1504), null);
              const v1506 = stdlib.fromSome(v1505, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
              const v1507 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1504), null);
              const v1508 = stdlib.fromSome(v1507, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
              const v1509 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1504), null);
              const v1510 = stdlib.fromSome(v1509, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
              const v1511 = [v1506, v1508, v1510];
              
              return v1511;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = svs;
            return (await ((async (_v1513 ) => {
                const v1513 = stdlib.protect(ctc0, _v1513, null);
              
              const v1514 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1513), null);
              let v1515;
              switch (v1514[0]) {
                case 'None': {
                  const v1516 = v1514[1];
                  v1515 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1517 = v1514[1];
                  v1515 = true;
                  
                  break;
                  }
                }
              
              return v1515;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5]
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
    authorizedST: ctc1,
    bT: ctc4,
    companyName: ctc5,
    lockSale: ctc6,
    managerAddr: ctc7,
    sT: ctc4
    });
  const ctc9 = stdlib.T_Tuple([ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc9,
    aST0_175: ctc10,
    addWL0_175: ctc9,
    cBT0_175: ctc11,
    cCM0_175: ctc9,
    cST0_175: ctc11,
    dBT0_175: ctc12,
    remWL0_175: ctc9
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
  
  
  const v1436 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1437 = [v1436, v1436];
  const v1443 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:73:107:application',
    fs: ['at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1444 = v1443.authorizedST;
  const v1445 = v1443.bT;
  const v1446 = v1443.companyName;
  const v1447 = v1443.lockSale;
  const v1448 = v1443.managerAddr;
  const v1449 = v1443.sT;
  const v1456 = stdlib.tokenEq(v1449, v1445);
  const v1457 = v1456 ? false : true;
  stdlib.assert(v1457, {
    at: './index.rsh:74:15:application',
    fs: ['at ./index.rsh:72:17:application call to [unknown function] (defined at: ./index.rsh:72:21:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1448, v1449, v1445, v1444],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:77:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1459, v1460, v1461, v1462, v1463, v1464], secs: v1466, time: v1465, didSend: v48, from: v1458 } = txn1;
      
      const v1469 = v1437[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '0')];
      const v1471 = v1469[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1')];
      const v1472 = v1469[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '2')];
      const v1473 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1471, v1472];
      const v1474 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '0'), v1473);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1462
        });
      const v1476 = v1474[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1')];
      const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1')];
      const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '2')];
      const v1480 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1478, v1479];
      const v1481 = stdlib.Array_set(v1474, stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1'), v1480);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1463
        });
      ;
      
      const v1485 = v1461;
      const v1486 = stdlib.checkedBigNumberify('./index.rsh:97:103:decimal', stdlib.UInt_max, '0');
      const v1487 = v1460;
      const v1488 = stdlib.checkedBigNumberify('./index.rsh:97:77:decimal', stdlib.UInt_max, '0');
      const v1489 = stdlib.checkedBigNumberify('./index.rsh:97:74:decimal', stdlib.UInt_max, '0');
      const v1490 = v1465;
      const v1492 = v1481;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1463
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1462
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
    tys: [ctc5, ctc6, ctc7, ctc4, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1459, v1460, v1461, v1462, v1463, v1464], secs: v1466, time: v1465, didSend: v48, from: v1458 } = txn1;
  const v1467 = stdlib.tokenEq(v1462, v1463);
  const v1468 = v1467 ? false : true;
  stdlib.assert(v1468, {
    at: './index.rsh:77:13:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1469 = v1437[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '0')];
  const v1471 = v1469[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1')];
  const v1472 = v1469[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '2')];
  const v1473 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1471, v1472];
  const v1474 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '0'), v1473);
  ;
  const v1476 = v1474[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1')];
  const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1')];
  const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '2')];
  const v1480 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1478, v1479];
  const v1481 = stdlib.Array_set(v1474, stdlib.checkedBigNumberify('./index.rsh:77:13:dot', stdlib.UInt_max, '1'), v1480);
  ;
  ;
  const v1484 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1484), {
    at: './index.rsh:79:31:application',
    fs: ['at ./index.rsh:79:31:application call to [unknown function] (defined at: ./index.rsh:79:31:function exp)', 'at ./index.rsh:79:31:application call to "liftedInteract" (defined at: ./index.rsh:79:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v1485 = v1461;
  let v1486 = stdlib.checkedBigNumberify('./index.rsh:97:103:decimal', stdlib.UInt_max, '0');
  let v1487 = v1460;
  let v1488 = stdlib.checkedBigNumberify('./index.rsh:97:77:decimal', stdlib.UInt_max, '0');
  let v1489 = stdlib.checkedBigNumberify('./index.rsh:97:74:decimal', stdlib.UInt_max, '0');
  let v1490 = v1465;
  let v1492 = v1481;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc13],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1490,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:278:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
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
          
          const {data: [], secs: v4408, time: v4407, didSend: v1096, from: v4406 } = txn3;
          
          ;
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v1489;
          const cv1490 = v4407;
          const cv1492 = v1492;
          
          await (async () => {
            const v1485 = cv1485;
            const v1486 = cv1486;
            const v1487 = cv1487;
            const v1488 = cv1488;
            const v1489 = cv1489;
            const v1490 = cv1490;
            const v1492 = cv1492;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1463
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v1462
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
      const {data: [], secs: v4408, time: v4407, didSend: v1096, from: v4406 } = txn3;
      ;
      const v4409 = stdlib.addressEq(v1458, v4406);
      stdlib.assert(v4409, {
        at: './index.rsh:278:21:dot',
        fs: ['at ./index.rsh:277:40:application call to [unknown function] (defined at: ./index.rsh:277:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1485 = v1485;
      const cv1486 = v1486;
      const cv1487 = v1487;
      const cv1488 = v1488;
      const cv1489 = v1489;
      const cv1490 = v4407;
      const cv1492 = v1492;
      
      v1485 = cv1485;
      v1486 = cv1486;
      v1487 = cv1487;
      v1488 = cv1488;
      v1489 = cv1489;
      v1490 = cv1490;
      v1492 = cv1492;
      
      continue;
      }
    else {
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn2;
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          undefined /* setApiDetails */;
          ;
          const v1977 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v1978 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v1982 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v1983 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v1984 = [v1978, v1982, v1983];
          const v1985 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v1984);
          ;
          const v1986 = v1985[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v1987 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v1991 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v1992 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v1993 = [v1987, v1991, v1992];
          const v1994 = stdlib.Array_set(v1985, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v1993);
          ;
          const v1996 = v1862[stdlib.checkedBigNumberify('./index.rsh:237:13:spread', stdlib.UInt_max, '0')];
          const v1997 = stdlib.addressEq(v1858, v1458);
          const v1998 = stdlib.addressEq(v1858, v1485);
          const v1999 = v1997 ? true : v1998;
          stdlib.assert(v1999, {
            at: './index.rsh:249:24:application',
            fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1487, {
            at: './index.rsh:250:24:application',
            fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2000 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1996), null);
          const v2001 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2002 = stdlib.gt(v2001, stdlib.checkedBigNumberify('./index.rsh:251:71:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v2002, {
            at: './index.rsh:251:24:application',
            fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2003 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1858), null);
          const v2004 = stdlib.fromSome(v2003, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2005 = v1994[stdlib.checkedBigNumberify('./index.rsh:252:61:application', stdlib.UInt_max, '1')];
          const v2006 = v2005[stdlib.checkedBigNumberify('./index.rsh:252:61:application', stdlib.UInt_max, '0')];
          const v2007 = stdlib.mul(v2004, v2006);
          const v2008 = stdlib.div(v2007, v1489);
          const v2009 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1996), null);
          const v2010 = stdlib.fromSome(v2009, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2011 = stdlib.add(v2010, v2008);
          await stdlib.mapSet(map1, v1996, v2011);
          const v2012 = true;
          await txn2.getOutput('aBT', 'v2012', ctc6, v2012);
          const v2019 = stdlib.add(v1489, v2008);
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = true;
          const cv1488 = v1488;
          const cv1489 = v2019;
          const cv1490 = v1860;
          const cv1492 = v1994;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          undefined /* setApiDetails */;
          const v2198 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '2')];
          ;
          const v2295 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2296 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2297 = stdlib.add(v2296, v2198);
          const v2300 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2301 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2302 = [v2297, v2300, v2301];
          const v2303 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2302);
          ;
          const v2304 = v2303[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2305 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2309 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2310 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2311 = [v2305, v2309, v2310];
          const v2312 = stdlib.Array_set(v2303, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2311);
          ;
          const v2340 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '0')];
          const v2341 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '1')];
          const v2343 = stdlib.addressEq(v2340, v1458);
          const v2344 = stdlib.addressEq(v2340, v1485);
          const v2345 = v2343 ? true : v2344;
          stdlib.assert(v2345, {
            at: './index.rsh:157:24:application',
            fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2346 = stdlib.gt(v2198, stdlib.checkedBigNumberify('./index.rsh:158:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v2346, {
            at: './index.rsh:158:24:application',
            fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2341, null);
          const v2348 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2341), null);
          const v2349 = stdlib.fromSome(v2348, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2350 = stdlib.add(v2349, v2198);
          await stdlib.mapSet(map0, v2341, v2350);
          const v2351 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2341), null);
          const v2352 = stdlib.fromSome(v2351, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2353 = stdlib.add(v2352, v2198);
          await stdlib.mapSet(map3, v2341, v2353);
          const v2354 = true;
          await txn2.getOutput('aST', 'v2354', ctc6, v2354);
          const v2363 = stdlib.add(v1489, v2198);
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v2363;
          const cv1490 = v1860;
          const cv1492 = v2312;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          undefined /* setApiDetails */;
          ;
          const v2613 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2618 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2619 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2620 = [v2614, v2618, v2619];
          const v2621 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2620);
          ;
          const v2622 = v2621[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2623 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2627 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2628 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2629 = [v2623, v2627, v2628];
          const v2630 = stdlib.Array_set(v2621, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2629);
          ;
          const v2684 = v2498[stdlib.checkedBigNumberify('./index.rsh:108:13:spread', stdlib.UInt_max, '0')];
          const v2685 = stdlib.addressEq(v1858, v1458);
          const v2686 = stdlib.addressEq(v1858, v1485);
          const v2687 = v2685 ? true : v2686;
          stdlib.assert(v2687, {
            at: './index.rsh:119:24:application',
            fs: ['at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2684, null);
          const v2689 = true;
          await txn2.getOutput('addWL', 'v2689', ctc6, v2689);
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v1489;
          const cv1490 = v1860;
          const cv1492 = v2630;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          undefined /* setApiDetails */;
          ;
          const v2931 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2932 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2936 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2937 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2938 = [v2932, v2936, v2937];
          const v2939 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2938);
          ;
          const v2940 = v2939[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2941 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2945 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2946 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2947 = [v2941, v2945, v2946];
          const v2948 = stdlib.Array_set(v2939, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2947);
          ;
          const v3016 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1858), null);
          let v3017;
          switch (v3016[0]) {
            case 'None': {
              const v3018 = v3016[1];
              v3017 = false;
              
              break;
              }
            case 'Some': {
              const v3019 = v3016[1];
              v3017 = true;
              
              break;
              }
            }
          stdlib.assert(v3017, {
            at: './index.rsh:224:24:application',
            fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3020 = v2948[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
          const v3021 = v3020[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
          const v3022 = stdlib.gt(v3021, stdlib.checkedBigNumberify('./index.rsh:225:39:decimal', stdlib.UInt_max, '0'));
          const v3023 = stdlib.gt(v1489, stdlib.checkedBigNumberify('./index.rsh:225:52:decimal', stdlib.UInt_max, '0'));
          const v3024 = v3022 ? v3023 : false;
          const v3025 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1858), null);
          const v3026 = stdlib.fromSome(v3025, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3027 = stdlib.ge(v1489, v3026);
          const v3028 = v3024 ? v3027 : false;
          stdlib.assert(v3028, {
            at: './index.rsh:225:24:application',
            fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3033 = stdlib.mul(v3026, v3021);
          const v3034 = stdlib.div(v3033, v1489);
          const v3040 = stdlib.sub(v3021, v3034);
          const v3043 = v3020[stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '1')];
          const v3044 = v3020[stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '2')];
          const v3045 = [v3040, v3043, v3044];
          const v3046 = stdlib.Array_set(v2948, stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '1'), v3045);
          ;
          const v3047 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1858), null);
          const v3048 = stdlib.fromSome(v3047, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3049 = stdlib.add(v3048, v3034);
          await stdlib.mapSet(map4, v1858, v3049);
          await stdlib.mapSet(map5, v1858, v1486);
          const v3050 = true;
          await txn2.getOutput('cBT', 'v3050', ctc6, v3050);
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v1489;
          const cv1490 = v1860;
          const cv1492 = v3046;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          undefined /* setApiDetails */;
          ;
          const v3249 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3250 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3254 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3255 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3256 = [v3250, v3254, v3255];
          const v3257 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3256);
          ;
          const v3258 = v3257[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3259 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3263 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3264 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3265 = [v3259, v3263, v3264];
          const v3266 = stdlib.Array_set(v3257, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3265);
          ;
          const v3376 = v3134[stdlib.checkedBigNumberify('./index.rsh:260:13:spread', stdlib.UInt_max, '0')];
          const v3377 = stdlib.addressEq(v1858, v1458);
          const v3378 = stdlib.addressEq(v1858, v1485);
          const v3379 = v3377 ? true : v3378;
          stdlib.assert(v3379, {
            at: './index.rsh:271:24:application',
            fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3380 = true;
          await txn2.getOutput('cCM', 'v3380', ctc6, v3380);
          const cv1485 = v3376;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v1489;
          const cv1490 = v1860;
          const cv1492 = v3266;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          undefined /* setApiDetails */;
          ;
          const v3567 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3568 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3572 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3573 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3574 = [v3568, v3572, v3573];
          const v3575 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3574);
          ;
          const v3576 = v3575[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3577 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3581 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3582 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3583 = [v3577, v3581, v3582];
          const v3584 = stdlib.Array_set(v3575, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3583);
          ;
          const v3707 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1858), null);
          const v3708 = stdlib.fromSome(v3707, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3709 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1858), null);
          let v3710;
          switch (v3709[0]) {
            case 'None': {
              const v3711 = v3709[1];
              v3710 = false;
              
              break;
              }
            case 'Some': {
              const v3712 = v3709[1];
              v3710 = true;
              
              break;
              }
            }
          stdlib.assert(v3710, {
            at: './index.rsh:183:24:application',
            fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3713 = stdlib.gt(v3708, stdlib.checkedBigNumberify('./index.rsh:184:31:decimal', stdlib.UInt_max, '0'));
          const v3714 = v3584[stdlib.checkedBigNumberify('./index.rsh:184:43:application', stdlib.UInt_max, '0')];
          const v3715 = v3714[stdlib.checkedBigNumberify('./index.rsh:184:43:application', stdlib.UInt_max, '0')];
          const v3716 = stdlib.gt(v3715, v3708);
          const v3717 = v3713 ? v3716 : false;
          stdlib.assert(v3717, {
            at: './index.rsh:184:24:application',
            fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3723 = stdlib.sub(v3715, v3708);
          const v3726 = v3714[stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '1')];
          const v3727 = v3714[stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '2')];
          const v3728 = [v3723, v3726, v3727];
          const v3729 = stdlib.Array_set(v3584, stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '0'), v3728);
          ;
          await stdlib.mapSet(map0, v1858, stdlib.checkedBigNumberify('./index.rsh:187:33:decimal', stdlib.UInt_max, '0'));
          const v3730 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1858), null);
          const v3731 = stdlib.fromSome(v3730, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3732 = stdlib.add(v3731, v3708);
          await stdlib.mapSet(map2, v1858, v3732);
          const v3733 = true;
          await txn2.getOutput('cST', 'v3733', ctc6, v3733);
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v1489;
          const cv1490 = v1860;
          const cv1492 = v3729;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          undefined /* setApiDetails */;
          const v3841 = v3770[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3885 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3886 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3890 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3891 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3892 = [v3886, v3890, v3891];
          const v3893 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3892);
          ;
          const v3894 = v3893[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3895 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3896 = stdlib.add(v3895, v3841);
          const v3899 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3900 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3901 = [v3896, v3899, v3900];
          const v3902 = stdlib.Array_set(v3893, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3901);
          ;
          const v4060 = stdlib.addressEq(v1858, v1458);
          const v4061 = stdlib.addressEq(v1858, v1485);
          const v4062 = v4060 ? true : v4061;
          stdlib.assert(v4062, {
            at: './index.rsh:205:24:application',
            fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4063 = stdlib.gt(v3841, stdlib.checkedBigNumberify('./index.rsh:206:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4063, {
            at: './index.rsh:206:24:application',
            fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4064 = true;
          await txn2.getOutput('dBT', 'v4064', ctc6, v4064);
          const v4071 = stdlib.add(v1488, v3841);
          const v4072 = stdlib.add(v1486, stdlib.checkedBigNumberify('./index.rsh:209:76:decimal', stdlib.UInt_max, '1'));
          const cv1485 = v1485;
          const cv1486 = v4072;
          const cv1487 = v1487;
          const cv1488 = v4071;
          const cv1489 = v1489;
          const cv1490 = v1860;
          const cv1492 = v3902;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          undefined /* setApiDetails */;
          ;
          const v4203 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v4204 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v4208 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v4209 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v4210 = [v4204, v4208, v4209];
          const v4211 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v4210);
          ;
          const v4212 = v4211[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v4213 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v4217 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v4218 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v4219 = [v4213, v4217, v4218];
          const v4220 = stdlib.Array_set(v4211, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v4219);
          ;
          const v4393 = v4088[stdlib.checkedBigNumberify('./index.rsh:126:13:spread', stdlib.UInt_max, '0')];
          const v4394 = stdlib.addressEq(v1858, v1458);
          const v4395 = stdlib.addressEq(v1858, v1485);
          const v4396 = v4394 ? true : v4395;
          stdlib.assert(v4396, {
            at: './index.rsh:137:24:application',
            fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v4393, undefined /* Nothing */);
          const v4398 = true;
          await txn2.getOutput('remWL', 'v4398', ctc6, v4398);
          const cv1485 = v1485;
          const cv1486 = v1486;
          const cv1487 = v1487;
          const cv1488 = v1488;
          const cv1489 = v1489;
          const cv1490 = v1860;
          const cv1492 = v4220;
          
          v1485 = cv1485;
          v1486 = cv1486;
          v1487 = cv1487;
          v1488 = cv1488;
          v1489 = cv1489;
          v1490 = cv1490;
          v1492 = cv1492;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _aBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aBT3 expects to receive an interact object as its second argument.`));}
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
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc9,
    aST0_175: ctc10,
    addWL0_175: ctc9,
    cBT0_175: ctc11,
    cCM0_175: ctc9,
    cST0_175: ctc11,
    dBT0_175: ctc12,
    remWL0_175: ctc9
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1626 = ctc.selfAddress();
  const v1628 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:97:72:application call to "runaBT0_175" (defined at: ./index.rsh:237:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1629 = v1628[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1632 = stdlib.addressEq(v1626, v1458);
  const v1633 = stdlib.addressEq(v1626, v1485);
  const v1634 = v1632 ? true : v1633;
  stdlib.assert(v1634, {
    at: './index.rsh:241:23:application',
    fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:18:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:97:72:application call to "runaBT0_175" (defined at: ./index.rsh:237:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1635 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1629), null);
  const v1636 = stdlib.fromSome(v1635, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
  const v1637 = stdlib.gt(v1636, stdlib.checkedBigNumberify('./index.rsh:243:60:decimal', stdlib.UInt_max, '0'));
  const v1638 = v1487 ? v1637 : false;
  stdlib.assert(v1638, {
    at: './index.rsh:243:23:application',
    fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:18:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:97:72:application call to "runaBT0_175" (defined at: ./index.rsh:237:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1642 = ['aBT0_175', v1628];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1642],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:246:26:decimal', stdlib.UInt_max, '0'), v1462], [stdlib.checkedBigNumberify('./index.rsh:246:35:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1977 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v1978 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v1982 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v1983 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v1984 = [v1978, v1982, v1983];
          const v1985 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v1984);
          ;
          const v1986 = v1985[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v1987 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v1991 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v1992 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v1993 = [v1987, v1991, v1992];
          const v1994 = stdlib.Array_set(v1985, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v1993);
          ;
          const v1996 = v1862[stdlib.checkedBigNumberify('./index.rsh:237:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1996), null);
          const v2003 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1858), null);
          const v2004 = stdlib.fromSome(v2003, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2005 = v1994[stdlib.checkedBigNumberify('./index.rsh:252:61:application', stdlib.UInt_max, '1')];
          const v2006 = v2005[stdlib.checkedBigNumberify('./index.rsh:252:61:application', stdlib.UInt_max, '0')];
          const v2007 = stdlib.mul(v2004, v2006);
          const v2008 = stdlib.div(v2007, v1489);
          const v2009 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1996), null);
          const v2010 = stdlib.fromSome(v2009, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2011 = stdlib.add(v2010, v2008);
          await stdlib.simMapSet(sim_r, 1, v1996, v2011);
          const v2012 = true;
          const v2013 = await txn1.getOutput('aBT', 'v2012', ctc6, v2012);
          
          const v2019 = stdlib.add(v1489, v2008);
          const v6487 = v1485;
          const v6488 = v1486;
          const v6489 = true;
          const v6490 = v1488;
          const v6491 = v2019;
          const v6493 = v1994;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      undefined /* setApiDetails */;
      ;
      const v1977 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v1978 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v1982 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v1983 = v1977[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v1984 = [v1978, v1982, v1983];
      const v1985 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v1984);
      ;
      const v1986 = v1985[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v1987 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v1991 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v1992 = v1986[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v1993 = [v1987, v1991, v1992];
      const v1994 = stdlib.Array_set(v1985, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v1993);
      ;
      const v1996 = v1862[stdlib.checkedBigNumberify('./index.rsh:237:13:spread', stdlib.UInt_max, '0')];
      const v1997 = stdlib.addressEq(v1858, v1458);
      const v1998 = stdlib.addressEq(v1858, v1485);
      const v1999 = v1997 ? true : v1998;
      stdlib.assert(v1999, {
        at: './index.rsh:249:24:application',
        fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      stdlib.assert(v1487, {
        at: './index.rsh:250:24:application',
        fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v2000 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1996), null);
      const v2001 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v2002 = stdlib.gt(v2001, stdlib.checkedBigNumberify('./index.rsh:251:71:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2002, {
        at: './index.rsh:251:24:application',
        fs: ['at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v2003 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1858), null);
      const v2004 = stdlib.fromSome(v2003, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v2005 = v1994[stdlib.checkedBigNumberify('./index.rsh:252:61:application', stdlib.UInt_max, '1')];
      const v2006 = v2005[stdlib.checkedBigNumberify('./index.rsh:252:61:application', stdlib.UInt_max, '0')];
      const v2007 = stdlib.mul(v2004, v2006);
      const v2008 = stdlib.div(v2007, v1489);
      const v2009 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1996), null);
      const v2010 = stdlib.fromSome(v2009, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v2011 = stdlib.add(v2010, v2008);
      await stdlib.mapSet(map1, v1996, v2011);
      const v2012 = true;
      const v2013 = await txn1.getOutput('aBT', 'v2012', ctc6, v2012);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v1862, v2013), {
          at: './index.rsh:238:13:application',
          fs: ['at ./index.rsh:238:13:application call to [unknown function] (defined at: ./index.rsh:238:13:function exp)', 'at ./index.rsh:256:20:application call to "res" (defined at: ./index.rsh:248:13:function exp)', 'at ./index.rsh:248:13:application call to [unknown function] (defined at: ./index.rsh:248:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v2019 = stdlib.add(v1489, v2008);
      const v6487 = v1485;
      const v6488 = v1486;
      const v6489 = true;
      const v6490 = v1488;
      const v6491 = v2019;
      const v6493 = v1994;
      return;
      
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _aST3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _aST3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _aST3 expects to receive an interact object as its second argument.`));}
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
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc10,
    aST0_175: ctc9,
    addWL0_175: ctc10,
    cBT0_175: ctc11,
    cCM0_175: ctc10,
    cST0_175: ctc11,
    dBT0_175: ctc12,
    remWL0_175: ctc10
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1552 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:97:72:application call to "runaST0_175" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1553 = v1552[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1555 = v1552[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1560 = stdlib.addressEq(v1553, v1458);
  const v1561 = stdlib.addressEq(v1553, v1485);
  const v1562 = v1560 ? true : v1561;
  stdlib.assert(v1562, {
    at: './index.rsh:149:23:application',
    fs: ['at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:29:function exp)', 'at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:97:72:application call to "runaST0_175" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1563 = stdlib.gt(v1555, stdlib.checkedBigNumberify('./index.rsh:150:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1563, {
    at: './index.rsh:150:23:application',
    fs: ['at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:29:function exp)', 'at ./index.rsh:148:13:application call to [unknown function] (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:97:72:application call to "runaST0_175" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1569 = ['aST0_175', v1552];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1569],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:30:decimal', stdlib.UInt_max, '0'), [[v1555, v1462], [stdlib.checkedBigNumberify('./index.rsh:154:45:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          const v2198 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '2')];
          ;
          const v2295 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2296 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2297 = stdlib.add(v2296, v2198);
          const v2300 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2301 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2302 = [v2297, v2300, v2301];
          const v2303 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2302);
          sim_r.txns.push({
            amt: v2198,
            kind: 'to',
            tok: v1462
            });
          const v2304 = v2303[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2305 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2309 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2310 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2311 = [v2305, v2309, v2310];
          const v2312 = stdlib.Array_set(v2303, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2311);
          ;
          const v2341 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '1')];
          await stdlib.simMapSet(sim_r, 6, v2341, null);
          const v2348 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2341), null);
          const v2349 = stdlib.fromSome(v2348, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2350 = stdlib.add(v2349, v2198);
          await stdlib.simMapSet(sim_r, 0, v2341, v2350);
          const v2351 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2341), null);
          const v2352 = stdlib.fromSome(v2351, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v2353 = stdlib.add(v2352, v2198);
          await stdlib.simMapSet(sim_r, 3, v2341, v2353);
          const v2354 = true;
          const v2355 = await txn1.getOutput('aST', 'v2354', ctc6, v2354);
          
          const v2363 = stdlib.add(v1489, v2198);
          const v6550 = v1485;
          const v6551 = v1486;
          const v6552 = v1487;
          const v6553 = v1488;
          const v6554 = v2363;
          const v6556 = v2312;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      undefined /* setApiDetails */;
      const v2198 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '2')];
      ;
      const v2295 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2296 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2297 = stdlib.add(v2296, v2198);
      const v2300 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2301 = v2295[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v2302 = [v2297, v2300, v2301];
      const v2303 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2302);
      ;
      const v2304 = v2303[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2305 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2309 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2310 = v2304[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v2311 = [v2305, v2309, v2310];
      const v2312 = stdlib.Array_set(v2303, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2311);
      ;
      const v2340 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '0')];
      const v2341 = v2180[stdlib.checkedBigNumberify('./index.rsh:145:13:spread', stdlib.UInt_max, '1')];
      const v2343 = stdlib.addressEq(v2340, v1458);
      const v2344 = stdlib.addressEq(v2340, v1485);
      const v2345 = v2343 ? true : v2344;
      stdlib.assert(v2345, {
        at: './index.rsh:157:24:application',
        fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2346 = stdlib.gt(v2198, stdlib.checkedBigNumberify('./index.rsh:158:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2346, {
        at: './index.rsh:158:24:application',
        fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2341, null);
      const v2348 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2341), null);
      const v2349 = stdlib.fromSome(v2348, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v2350 = stdlib.add(v2349, v2198);
      await stdlib.mapSet(map0, v2341, v2350);
      const v2351 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2341), null);
      const v2352 = stdlib.fromSome(v2351, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v2353 = stdlib.add(v2352, v2198);
      await stdlib.mapSet(map3, v2341, v2353);
      const v2354 = true;
      const v2355 = await txn1.getOutput('aST', 'v2354', ctc6, v2354);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v2180, v2355), {
          at: './index.rsh:146:13:application',
          fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:165:20:application call to "res" (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2363 = stdlib.add(v1489, v2198);
      const v6550 = v1485;
      const v6551 = v1486;
      const v6552 = v1487;
      const v6553 = v1488;
      const v6554 = v2363;
      const v6556 = v2312;
      return;
      
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _addWL3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addWL3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addWL3 expects to receive an interact object as its second argument.`));}
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
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc9,
    aST0_175: ctc10,
    addWL0_175: ctc9,
    cBT0_175: ctc11,
    cCM0_175: ctc9,
    cST0_175: ctc11,
    dBT0_175: ctc12,
    remWL0_175: ctc9
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1522 = ctc.selfAddress();
  const v1524 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:97:72:application call to "runaddWL0_175" (defined at: ./index.rsh:108:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1528 = stdlib.addressEq(v1522, v1458);
  const v1529 = stdlib.addressEq(v1522, v1485);
  const v1530 = v1528 ? true : v1529;
  stdlib.assert(v1530, {
    at: './index.rsh:112:23:application',
    fs: ['at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:18:function exp)', 'at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:97:72:application call to "runaddWL0_175" (defined at: ./index.rsh:108:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1534 = ['addWL0_175', v1524];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1534],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:116:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:116:26:decimal', stdlib.UInt_max, '0'), v1462], [stdlib.checkedBigNumberify('./index.rsh:116:35:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2613 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2618 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2619 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2620 = [v2614, v2618, v2619];
          const v2621 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2620);
          ;
          const v2622 = v2621[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2623 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2627 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2628 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2629 = [v2623, v2627, v2628];
          const v2630 = stdlib.Array_set(v2621, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2629);
          ;
          const v2684 = v2498[stdlib.checkedBigNumberify('./index.rsh:108:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2684, null);
          const v2689 = true;
          const v2690 = await txn1.getOutput('addWL', 'v2689', ctc6, v2689);
          
          const v6613 = v1485;
          const v6614 = v1486;
          const v6615 = v1487;
          const v6616 = v1488;
          const v6617 = v1489;
          const v6619 = v2630;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      undefined /* setApiDetails */;
      ;
      const v2613 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2618 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2619 = v2613[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v2620 = [v2614, v2618, v2619];
      const v2621 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2620);
      ;
      const v2622 = v2621[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2623 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2627 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2628 = v2622[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v2629 = [v2623, v2627, v2628];
      const v2630 = stdlib.Array_set(v2621, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2629);
      ;
      const v2684 = v2498[stdlib.checkedBigNumberify('./index.rsh:108:13:spread', stdlib.UInt_max, '0')];
      const v2685 = stdlib.addressEq(v1858, v1458);
      const v2686 = stdlib.addressEq(v1858, v1485);
      const v2687 = v2685 ? true : v2686;
      stdlib.assert(v2687, {
        at: './index.rsh:119:24:application',
        fs: ['at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2684, null);
      const v2689 = true;
      const v2690 = await txn1.getOutput('addWL', 'v2689', ctc6, v2689);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v2498, v2690), {
          at: './index.rsh:109:13:application',
          fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)', 'at ./index.rsh:122:20:application call to "res" (defined at: ./index.rsh:118:13:function exp)', 'at ./index.rsh:118:13:application call to [unknown function] (defined at: ./index.rsh:118:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v6613 = v1485;
      const v6614 = v1486;
      const v6615 = v1487;
      const v6616 = v1488;
      const v6617 = v1489;
      const v6619 = v2630;
      return;
      
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cBT3 expects to receive an interact object as its second argument.`));}
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
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc10,
    aST0_175: ctc11,
    addWL0_175: ctc10,
    cBT0_175: ctc9,
    cCM0_175: ctc10,
    cST0_175: ctc9,
    dBT0_175: ctc12,
    remWL0_175: ctc10
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1605 = ctc.selfAddress();
  const v1607 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:97:72:application call to "runcBT0_175" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1609 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1605), null);
  let v1610;
  switch (v1609[0]) {
    case 'None': {
      const v1611 = v1609[1];
      v1610 = false;
      
      break;
      }
    case 'Some': {
      const v1612 = v1609[1];
      v1610 = true;
      
      break;
      }
    }
  stdlib.assert(v1610, {
    at: './index.rsh:217:23:application',
    fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:17:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:97:72:application call to "runcBT0_175" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1613 = v1492[stdlib.checkedBigNumberify('./index.rsh:218:31:application', stdlib.UInt_max, '1')];
  const v1614 = v1613[stdlib.checkedBigNumberify('./index.rsh:218:31:application', stdlib.UInt_max, '0')];
  const v1615 = stdlib.gt(v1614, stdlib.checkedBigNumberify('./index.rsh:218:38:decimal', stdlib.UInt_max, '0'));
  const v1616 = stdlib.gt(v1489, stdlib.checkedBigNumberify('./index.rsh:218:51:decimal', stdlib.UInt_max, '0'));
  const v1617 = v1615 ? v1616 : false;
  const v1618 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1605), null);
  const v1619 = stdlib.fromSome(v1618, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
  const v1620 = stdlib.ge(v1489, v1619);
  const v1621 = v1617 ? v1620 : false;
  stdlib.assert(v1621, {
    at: './index.rsh:218:23:application',
    fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:17:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:97:72:application call to "runcBT0_175" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1624 = ['cBT0_175', v1607];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1624],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:221:25:decimal', stdlib.UInt_max, '0'), v1462], [stdlib.checkedBigNumberify('./index.rsh:221:34:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2931 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2932 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2936 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2937 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2938 = [v2932, v2936, v2937];
          const v2939 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2938);
          ;
          const v2940 = v2939[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2941 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v2945 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v2946 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v2947 = [v2941, v2945, v2946];
          const v2948 = stdlib.Array_set(v2939, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2947);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1858), null);
          const v3020 = v2948[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
          const v3021 = v3020[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
          const v3025 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1858), null);
          const v3026 = stdlib.fromSome(v3025, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3033 = stdlib.mul(v3026, v3021);
          const v3034 = stdlib.div(v3033, v1489);
          const v3040 = stdlib.sub(v3021, v3034);
          const v3043 = v3020[stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '1')];
          const v3044 = v3020[stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '2')];
          const v3045 = [v3040, v3043, v3044];
          const v3046 = stdlib.Array_set(v2948, stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '1'), v3045);
          sim_r.txns.push({
            amt: v3034,
            kind: 'from',
            to: v1858,
            tok: v1463
            });
          const v3047 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1858), null);
          const v3048 = stdlib.fromSome(v3047, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3049 = stdlib.add(v3048, v3034);
          await stdlib.simMapSet(sim_r, 4, v1858, v3049);
          await stdlib.simMapSet(sim_r, 5, v1858, v1486);
          const v3050 = true;
          const v3051 = await txn1.getOutput('cBT', 'v3050', ctc6, v3050);
          
          const v6676 = v1485;
          const v6677 = v1486;
          const v6678 = v1487;
          const v6679 = v1488;
          const v6680 = v1489;
          const v6682 = v3046;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      undefined /* setApiDetails */;
      ;
      const v2931 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2932 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2936 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2937 = v2931[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v2938 = [v2932, v2936, v2937];
      const v2939 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v2938);
      ;
      const v2940 = v2939[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2941 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v2945 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v2946 = v2940[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v2947 = [v2941, v2945, v2946];
      const v2948 = stdlib.Array_set(v2939, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v2947);
      ;
      const v3016 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1858), null);
      let v3017;
      switch (v3016[0]) {
        case 'None': {
          const v3018 = v3016[1];
          v3017 = false;
          
          break;
          }
        case 'Some': {
          const v3019 = v3016[1];
          v3017 = true;
          
          break;
          }
        }
      stdlib.assert(v3017, {
        at: './index.rsh:224:24:application',
        fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3020 = v2948[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
      const v3021 = v3020[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
      const v3022 = stdlib.gt(v3021, stdlib.checkedBigNumberify('./index.rsh:225:39:decimal', stdlib.UInt_max, '0'));
      const v3023 = stdlib.gt(v1489, stdlib.checkedBigNumberify('./index.rsh:225:52:decimal', stdlib.UInt_max, '0'));
      const v3024 = v3022 ? v3023 : false;
      const v3025 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1858), null);
      const v3026 = stdlib.fromSome(v3025, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v3027 = stdlib.ge(v1489, v3026);
      const v3028 = v3024 ? v3027 : false;
      stdlib.assert(v3028, {
        at: './index.rsh:225:24:application',
        fs: ['at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3033 = stdlib.mul(v3026, v3021);
      const v3034 = stdlib.div(v3033, v1489);
      const v3040 = stdlib.sub(v3021, v3034);
      const v3043 = v3020[stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '1')];
      const v3044 = v3020[stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '2')];
      const v3045 = [v3040, v3043, v3044];
      const v3046 = stdlib.Array_set(v2948, stdlib.checkedBigNumberify('./index.rsh:228:44:application', stdlib.UInt_max, '1'), v3045);
      ;
      const v3047 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1858), null);
      const v3048 = stdlib.fromSome(v3047, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v3049 = stdlib.add(v3048, v3034);
      await stdlib.mapSet(map4, v1858, v3049);
      await stdlib.mapSet(map5, v1858, v1486);
      const v3050 = true;
      const v3051 = await txn1.getOutput('cBT', 'v3050', ctc6, v3050);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v2816, v3051), {
          at: './index.rsh:213:13:application',
          fs: ['at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:232:20:application call to "res" (defined at: ./index.rsh:223:13:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v6676 = v1485;
      const v6677 = v1486;
      const v6678 = v1487;
      const v6679 = v1488;
      const v6680 = v1489;
      const v6682 = v3046;
      return;
      
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cCM3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cCM3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cCM3 expects to receive an interact object as its second argument.`));}
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
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc9,
    aST0_175: ctc10,
    addWL0_175: ctc9,
    cBT0_175: ctc11,
    cCM0_175: ctc9,
    cST0_175: ctc11,
    dBT0_175: ctc12,
    remWL0_175: ctc9
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1644 = ctc.selfAddress();
  const v1646 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:263:13:application call to [unknown function] (defined at: ./index.rsh:263:13:function exp)', 'at ./index.rsh:97:72:application call to "runcCM0_175" (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1650 = stdlib.addressEq(v1644, v1458);
  const v1651 = stdlib.addressEq(v1644, v1485);
  const v1652 = v1650 ? true : v1651;
  stdlib.assert(v1652, {
    at: './index.rsh:264:23:application',
    fs: ['at ./index.rsh:263:13:application call to [unknown function] (defined at: ./index.rsh:263:21:function exp)', 'at ./index.rsh:263:13:application call to [unknown function] (defined at: ./index.rsh:263:13:function exp)', 'at ./index.rsh:97:72:application call to "runcCM0_175" (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1656 = ['cCM0_175', v1646];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1656],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:268:26:decimal', stdlib.UInt_max, '0'), v1462], [stdlib.checkedBigNumberify('./index.rsh:268:35:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v3249 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3250 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3254 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3255 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3256 = [v3250, v3254, v3255];
          const v3257 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3256);
          ;
          const v3258 = v3257[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3259 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3263 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3264 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3265 = [v3259, v3263, v3264];
          const v3266 = stdlib.Array_set(v3257, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3265);
          ;
          const v3376 = v3134[stdlib.checkedBigNumberify('./index.rsh:260:13:spread', stdlib.UInt_max, '0')];
          const v3380 = true;
          const v3381 = await txn1.getOutput('cCM', 'v3380', ctc6, v3380);
          
          const v6739 = v3376;
          const v6740 = v1486;
          const v6741 = v1487;
          const v6742 = v1488;
          const v6743 = v1489;
          const v6745 = v3266;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      undefined /* setApiDetails */;
      ;
      const v3249 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3250 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3254 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3255 = v3249[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v3256 = [v3250, v3254, v3255];
      const v3257 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3256);
      ;
      const v3258 = v3257[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3259 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3263 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3264 = v3258[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v3265 = [v3259, v3263, v3264];
      const v3266 = stdlib.Array_set(v3257, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3265);
      ;
      const v3376 = v3134[stdlib.checkedBigNumberify('./index.rsh:260:13:spread', stdlib.UInt_max, '0')];
      const v3377 = stdlib.addressEq(v1858, v1458);
      const v3378 = stdlib.addressEq(v1858, v1485);
      const v3379 = v3377 ? true : v3378;
      stdlib.assert(v3379, {
        at: './index.rsh:271:24:application',
        fs: ['at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v3380 = true;
      const v3381 = await txn1.getOutput('cCM', 'v3380', ctc6, v3380);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v3134, v3381), {
          at: './index.rsh:261:13:application',
          fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:273:20:application call to "res" (defined at: ./index.rsh:270:13:function exp)', 'at ./index.rsh:270:13:application call to [unknown function] (defined at: ./index.rsh:270:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6739 = v3376;
      const v6740 = v1486;
      const v6741 = v1487;
      const v6742 = v1488;
      const v6743 = v1489;
      const v6745 = v3266;
      return;
      
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cST3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cST3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cST3 expects to receive an interact object as its second argument.`));}
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
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc10,
    aST0_175: ctc11,
    addWL0_175: ctc10,
    cBT0_175: ctc9,
    cCM0_175: ctc10,
    cST0_175: ctc9,
    dBT0_175: ctc12,
    remWL0_175: ctc10
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1571 = ctc.selfAddress();
  const v1573 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:97:72:application call to "runcST0_175" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1575 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1571), null);
  const v1576 = stdlib.fromSome(v1575, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
  const v1577 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1571), null);
  let v1578;
  switch (v1577[0]) {
    case 'None': {
      const v1579 = v1577[1];
      v1578 = false;
      
      break;
      }
    case 'Some': {
      const v1580 = v1577[1];
      v1578 = true;
      
      break;
      }
    }
  stdlib.assert(v1578, {
    at: './index.rsh:175:23:application',
    fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:97:72:application call to "runcST0_175" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1581 = stdlib.gt(v1576, stdlib.checkedBigNumberify('./index.rsh:176:30:decimal', stdlib.UInt_max, '0'));
  const v1582 = v1492[stdlib.checkedBigNumberify('./index.rsh:176:42:application', stdlib.UInt_max, '0')];
  const v1583 = v1582[stdlib.checkedBigNumberify('./index.rsh:176:42:application', stdlib.UInt_max, '0')];
  const v1584 = stdlib.gt(v1583, v1576);
  const v1585 = v1581 ? v1584 : false;
  stdlib.assert(v1585, {
    at: './index.rsh:176:23:application',
    fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:97:72:application call to "runcST0_175" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1588 = ['cST0_175', v1573];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1588],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:179:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:179:25:decimal', stdlib.UInt_max, '0'), v1462], [stdlib.checkedBigNumberify('./index.rsh:179:34:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v3567 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3568 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3572 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3573 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3574 = [v3568, v3572, v3573];
          const v3575 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3574);
          ;
          const v3576 = v3575[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3577 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3581 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3582 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3583 = [v3577, v3581, v3582];
          const v3584 = stdlib.Array_set(v3575, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3583);
          ;
          const v3707 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1858), null);
          const v3708 = stdlib.fromSome(v3707, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1858), null);
          const v3714 = v3584[stdlib.checkedBigNumberify('./index.rsh:184:43:application', stdlib.UInt_max, '0')];
          const v3715 = v3714[stdlib.checkedBigNumberify('./index.rsh:184:43:application', stdlib.UInt_max, '0')];
          const v3723 = stdlib.sub(v3715, v3708);
          const v3726 = v3714[stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '1')];
          const v3727 = v3714[stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '2')];
          const v3728 = [v3723, v3726, v3727];
          const v3729 = stdlib.Array_set(v3584, stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '0'), v3728);
          sim_r.txns.push({
            amt: v3708,
            kind: 'from',
            to: v1858,
            tok: v1462
            });
          await stdlib.simMapSet(sim_r, 0, v1858, stdlib.checkedBigNumberify('./index.rsh:187:33:decimal', stdlib.UInt_max, '0'));
          const v3730 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1858), null);
          const v3731 = stdlib.fromSome(v3730, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
          const v3732 = stdlib.add(v3731, v3708);
          await stdlib.simMapSet(sim_r, 2, v1858, v3732);
          const v3733 = true;
          const v3734 = await txn1.getOutput('cST', 'v3733', ctc6, v3733);
          
          const v6802 = v1485;
          const v6803 = v1486;
          const v6804 = v1487;
          const v6805 = v1488;
          const v6806 = v1489;
          const v6808 = v3729;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      undefined /* setApiDetails */;
      ;
      const v3567 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3568 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3572 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3573 = v3567[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v3574 = [v3568, v3572, v3573];
      const v3575 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3574);
      ;
      const v3576 = v3575[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3577 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3581 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3582 = v3576[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v3583 = [v3577, v3581, v3582];
      const v3584 = stdlib.Array_set(v3575, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3583);
      ;
      const v3707 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1858), null);
      const v3708 = stdlib.fromSome(v3707, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v3709 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1858), null);
      let v3710;
      switch (v3709[0]) {
        case 'None': {
          const v3711 = v3709[1];
          v3710 = false;
          
          break;
          }
        case 'Some': {
          const v3712 = v3709[1];
          v3710 = true;
          
          break;
          }
        }
      stdlib.assert(v3710, {
        at: './index.rsh:183:24:application',
        fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3713 = stdlib.gt(v3708, stdlib.checkedBigNumberify('./index.rsh:184:31:decimal', stdlib.UInt_max, '0'));
      const v3714 = v3584[stdlib.checkedBigNumberify('./index.rsh:184:43:application', stdlib.UInt_max, '0')];
      const v3715 = v3714[stdlib.checkedBigNumberify('./index.rsh:184:43:application', stdlib.UInt_max, '0')];
      const v3716 = stdlib.gt(v3715, v3708);
      const v3717 = v3713 ? v3716 : false;
      stdlib.assert(v3717, {
        at: './index.rsh:184:24:application',
        fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3723 = stdlib.sub(v3715, v3708);
      const v3726 = v3714[stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '1')];
      const v3727 = v3714[stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '2')];
      const v3728 = [v3723, v3726, v3727];
      const v3729 = stdlib.Array_set(v3584, stdlib.checkedBigNumberify('./index.rsh:186:44:application', stdlib.UInt_max, '0'), v3728);
      ;
      await stdlib.mapSet(map0, v1858, stdlib.checkedBigNumberify('./index.rsh:187:33:decimal', stdlib.UInt_max, '0'));
      const v3730 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1858), null);
      const v3731 = stdlib.fromSome(v3730, stdlib.checkedBigNumberify('./index.rsh:83:39:decimal', stdlib.UInt_max, '0'));
      const v3732 = stdlib.add(v3731, v3708);
      await stdlib.mapSet(map2, v1858, v3732);
      const v3733 = true;
      const v3734 = await txn1.getOutput('cST', 'v3733', ctc6, v3733);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v3452, v3734), {
          at: './index.rsh:171:13:application',
          fs: ['at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)', 'at ./index.rsh:189:20:application call to "res" (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v6802 = v1485;
      const v6803 = v1486;
      const v6804 = v1487;
      const v6805 = v1488;
      const v6806 = v1489;
      const v6808 = v3729;
      return;
      
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _dBT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _dBT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _dBT3 expects to receive an interact object as its second argument.`));}
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
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc10,
    aST0_175: ctc11,
    addWL0_175: ctc10,
    cBT0_175: ctc12,
    cCM0_175: ctc10,
    cST0_175: ctc12,
    dBT0_175: ctc9,
    remWL0_175: ctc10
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1590 = ctc.selfAddress();
  const v1592 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:97:72:application call to "rundBT0_175" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1593 = v1592[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1596 = stdlib.addressEq(v1590, v1458);
  const v1597 = stdlib.addressEq(v1590, v1485);
  const v1598 = v1596 ? true : v1597;
  stdlib.assert(v1598, {
    at: './index.rsh:197:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:20:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:97:72:application call to "rundBT0_175" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1599 = stdlib.gt(v1593, stdlib.checkedBigNumberify('./index.rsh:198:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1599, {
    at: './index.rsh:198:23:application',
    fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:20:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:97:72:application call to "rundBT0_175" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1603 = ['dBT0_175', v1592];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1603],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:202:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:202:28:decimal', stdlib.UInt_max, '0'), v1462], [v1593, v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3841 = v3770[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3885 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3886 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3890 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3891 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3892 = [v3886, v3890, v3891];
          const v3893 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3892);
          ;
          const v3894 = v3893[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3895 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v3896 = stdlib.add(v3895, v3841);
          const v3899 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v3900 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v3901 = [v3896, v3899, v3900];
          const v3902 = stdlib.Array_set(v3893, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3901);
          sim_r.txns.push({
            amt: v3841,
            kind: 'to',
            tok: v1463
            });
          const v4064 = true;
          const v4065 = await txn1.getOutput('dBT', 'v4064', ctc6, v4064);
          
          const v4071 = stdlib.add(v1488, v3841);
          const v4072 = stdlib.add(v1486, stdlib.checkedBigNumberify('./index.rsh:209:76:decimal', stdlib.UInt_max, '1'));
          const v6865 = v1485;
          const v6866 = v4072;
          const v6867 = v1487;
          const v6868 = v4071;
          const v6869 = v1489;
          const v6871 = v3902;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      undefined /* setApiDetails */;
      const v3841 = v3770[stdlib.checkedBigNumberify('./index.rsh:193:13:spread', stdlib.UInt_max, '0')];
      ;
      const v3885 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3886 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3890 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3891 = v3885[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v3892 = [v3886, v3890, v3891];
      const v3893 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v3892);
      ;
      const v3894 = v3893[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3895 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v3896 = stdlib.add(v3895, v3841);
      const v3899 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v3900 = v3894[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v3901 = [v3896, v3899, v3900];
      const v3902 = stdlib.Array_set(v3893, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v3901);
      ;
      const v4060 = stdlib.addressEq(v1858, v1458);
      const v4061 = stdlib.addressEq(v1858, v1485);
      const v4062 = v4060 ? true : v4061;
      stdlib.assert(v4062, {
        at: './index.rsh:205:24:application',
        fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4063 = stdlib.gt(v3841, stdlib.checkedBigNumberify('./index.rsh:206:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4063, {
        at: './index.rsh:206:24:application',
        fs: ['at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4064 = true;
      const v4065 = await txn1.getOutput('dBT', 'v4064', ctc6, v4064);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v3770, v4065), {
          at: './index.rsh:194:13:application',
          fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:208:20:application call to "res" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:204:13:application call to [unknown function] (defined at: ./index.rsh:204:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v4071 = stdlib.add(v1488, v3841);
      const v4072 = stdlib.add(v1486, stdlib.checkedBigNumberify('./index.rsh:209:76:decimal', stdlib.UInt_max, '1'));
      const v6865 = v1485;
      const v6866 = v4072;
      const v6867 = v1487;
      const v6868 = v4071;
      const v6869 = v1489;
      const v6871 = v3902;
      return;
      
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      return;
      break;
      }
    }
  
  
  };
export async function _remWL3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _remWL3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _remWL3 expects to receive an interact object as its second argument.`));}
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
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_175: ctc9,
    aST0_175: ctc10,
    addWL0_175: ctc9,
    cBT0_175: ctc11,
    cCM0_175: ctc9,
    cST0_175: ctc11,
    dBT0_175: ctc12,
    remWL0_175: ctc9
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
  
  
  const [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1536 = ctc.selfAddress();
  const v1538 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:97:72:application call to "runremWL0_175" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1542 = stdlib.addressEq(v1536, v1458);
  const v1543 = stdlib.addressEq(v1536, v1485);
  const v1544 = v1542 ? true : v1543;
  stdlib.assert(v1544, {
    at: './index.rsh:130:23:application',
    fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:18:function exp)', 'at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:97:72:application call to "runremWL0_175" (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:97:72:application call to [unknown function] (defined at: ./index.rsh:97:72:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1548 = ['remWL0_175', v1538];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1458, v1462, v1463, v1485, v1486, v1487, v1488, v1489, v1492, v1548],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:134:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:134:26:decimal', stdlib.UInt_max, '0'), v1462], [stdlib.checkedBigNumberify('./index.rsh:134:35:decimal', stdlib.UInt_max, '0'), v1463]]],
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
      
      const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
      
      switch (v1859[0]) {
        case 'aBT0_175': {
          const v1862 = v1859[1];
          
          break;
          }
        case 'aST0_175': {
          const v2180 = v1859[1];
          
          break;
          }
        case 'addWL0_175': {
          const v2498 = v1859[1];
          
          break;
          }
        case 'cBT0_175': {
          const v2816 = v1859[1];
          
          break;
          }
        case 'cCM0_175': {
          const v3134 = v1859[1];
          
          break;
          }
        case 'cST0_175': {
          const v3452 = v1859[1];
          
          break;
          }
        case 'dBT0_175': {
          const v3770 = v1859[1];
          
          break;
          }
        case 'remWL0_175': {
          const v4088 = v1859[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v4203 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v4204 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v4208 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v4209 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v4210 = [v4204, v4208, v4209];
          const v4211 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v4210);
          ;
          const v4212 = v4211[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v4213 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
          const v4217 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
          const v4218 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
          const v4219 = [v4213, v4217, v4218];
          const v4220 = stdlib.Array_set(v4211, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v4219);
          ;
          const v4393 = v4088[stdlib.checkedBigNumberify('./index.rsh:126:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v4393, undefined /* Nothing */);
          const v4398 = true;
          const v4399 = await txn1.getOutput('remWL', 'v4398', ctc6, v4398);
          
          const v6928 = v1485;
          const v6929 = v1486;
          const v6930 = v1487;
          const v6931 = v1488;
          const v6932 = v1489;
          const v6934 = v4220;
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
  const {data: [v1859], secs: v1861, time: v1860, didSend: v881, from: v1858 } = txn1;
  switch (v1859[0]) {
    case 'aBT0_175': {
      const v1862 = v1859[1];
      return;
      break;
      }
    case 'aST0_175': {
      const v2180 = v1859[1];
      return;
      break;
      }
    case 'addWL0_175': {
      const v2498 = v1859[1];
      return;
      break;
      }
    case 'cBT0_175': {
      const v2816 = v1859[1];
      return;
      break;
      }
    case 'cCM0_175': {
      const v3134 = v1859[1];
      return;
      break;
      }
    case 'cST0_175': {
      const v3452 = v1859[1];
      return;
      break;
      }
    case 'dBT0_175': {
      const v3770 = v1859[1];
      return;
      break;
      }
    case 'remWL0_175': {
      const v4088 = v1859[1];
      undefined /* setApiDetails */;
      ;
      const v4203 = v1492[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v4204 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v4208 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v4209 = v4203[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v4210 = [v4204, v4208, v4209];
      const v4211 = stdlib.Array_set(v1492, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0'), v4210);
      ;
      const v4212 = v4211[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v4213 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '0')];
      const v4217 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1')];
      const v4218 = v4212[stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '2')];
      const v4219 = [v4213, v4217, v4218];
      const v4220 = stdlib.Array_set(v4211, stdlib.checkedBigNumberify('./index.rsh:97:72:dot', stdlib.UInt_max, '1'), v4219);
      ;
      const v4393 = v4088[stdlib.checkedBigNumberify('./index.rsh:126:13:spread', stdlib.UInt_max, '0')];
      const v4394 = stdlib.addressEq(v1858, v1458);
      const v4395 = stdlib.addressEq(v1858, v1485);
      const v4396 = v4394 ? true : v4395;
      stdlib.assert(v4396, {
        at: './index.rsh:137:24:application',
        fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v4393, undefined /* Nothing */);
      const v4398 = true;
      const v4399 = await txn1.getOutput('remWL', 'v4398', ctc6, v4398);
      if (v881) {
        stdlib.protect(ctc0, await interact.out(v4088, v4399), {
          at: './index.rsh:127:13:application',
          fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)', 'at ./index.rsh:140:20:application call to "res" (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v6928 = v1485;
      const v6929 = v1486;
      const v6930 = v1487;
      const v6931 = v1488;
      const v6932 = v1489;
      const v6934 = v4220;
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
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _aBT3(ctcTop, interact);}
  };
export async function aST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for aST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for aST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _aST3(ctcTop, interact);}
  };
export async function addWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _addWL3(ctcTop, interact);}
  };
export async function cBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cBT3(ctcTop, interact);}
  };
export async function cCM(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cCM expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cCM expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cCM3(ctcTop, interact);}
  };
export async function cST(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cST expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cST expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _cST3(ctcTop, interact);}
  };
export async function dBT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for dBT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for dBT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _dBT3(ctcTop, interact);}
  };
export async function remWL(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for remWL expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for remWL expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _remWL3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`aBT(address)byte`, `aST(address,address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `dBT(uint64)byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint64,uint64)`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `wlMember(address)byte`],
    sigs: [`aBT(address)byte`, `aST(address,address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `claimSTBT(address)(uint64,uint64)`, `dBT(uint64)byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `wlMember(address)byte`]
    },
  appApproval: `BiAfAAEDKAQINqCNBjfd0eGYCduqqNQM3e7QoA7YjpngDkC03LWsDevmhNMJsILfsAxInPiDiAK8rcerCM3F1YcJ+a70lQGwnePdAQL///////////8BIFBZYQcFJgMBAQEAACI1ADEYQQsbKmRJIls1ASEFWzUCMRkjEkEACjEAKSEIr2ZCCuc2GgAXSUECASI1BCM1BkkhCQxAARxJIQoMQACpSSELDEAAMkkhDAxAABUhDBJENhoBNf+AAQc0/1Alr1BCAkchCxJENhoBNf+AAQY0/1AhDa9QQgIxSSEODEAAUSEOEkQ0ASQSRDYaATX/IjT/iAqXVxIJSTX+I1s0/iJVTRYiNP+ICoNXJAlJNf4jWzT+IlVNFlAiNP+ICm5XLQlJNf4jWzT+IlVNFlA1B0IKSSEKEkQ2GgE2GgJQNhoDUDX/KDT/UEIBwUkhDwxAADRJIRAMQAAZIRASRDQBJBJEKWQoZFBJNQNXWAE1B0IKCiEPEkQqNf+AAQM0/1AhEa9QQgGGIQkSRDQBJBJENhoBiAn4VzYBSTX+IlVAAAYiNf9CAAYjNf9CAAA0/xZRBwg1B0IJxUkhEgxAAF1JIRMMQABBSSEUDEAAJSEUEkQ0ASQSRClkKGRQSTUDV2EINANXWQhQNANXUAhQNQdCCYshExJENhoBNf+AAQI0/1Alr1BCAQYhEhJENhoBNf+AAQQ0/1Alr1BCAPFJIRUMQABXSSEWDEAAFCEWEkQqNf+AAQU0/1AhEa9QQgDPIRUSRDQBJBJENhoBNf8iNP+ICTxXAAlJNf4jWzT+IlVNFiI0/4gJKFcJCUk1/iNbNP4iVU0WUDUHQgkDgd/2hgsSRDYaATX/KTT/UCWvUEIAfTYaAhc1BDYaAzYaARdJIRcMQAdUSSQMQABiJBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDVwAgNf+ABKdlxLSwMgYhGA9ENP8xABJENP80AyEZWzQDJVs0A1cwIDQDIRpbNANXWAEXNAMhG1s0AyEcWzIGNANXaSJCB9pIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSklXACA1/yEZWzX+JVs1/VcwIDX8IRpbNftXWAEXNfohG1s1+SEcWzX4V2kiNfdJNQU19oAEmMT3szT2ULAyBiEYDEQ09iJVSSEEDEACx0mBBgxAARtJIR0MQACGIR0SRDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jEANP8SMQA0/BIRRDT1KTT1iAfEIiEGTFZmgAkAAAAAAAARLgGwKDUHNP80/jT9NPw0+zT6NPk0+DIGNPNXABE08lcACDTyVwgIUDTyVxABUFBCBttINPZXAQg19TT1FzX0NPdXABFJNfNXAAg081cICFA081cQAVA091cREVA18jTyVxERNfE09DT9iAdwMQA0/xIxADT8EhFENPQiDUSACQAAAAAAAA/gAbAoNQc0/zT+NP00/DT7Iwg0+jT5NPQINPgyBjTyVwARNPEiWzT0CBY08VcICFA08VcQAVBQQgZNSSEeDEABKUg091cAEUk19VcACDT1VwgIUDT1VxABUDT3VxERUDX0NPRXERE18zT0VwARNPNXAAg081cICFA081cQAVBQNfIiMQCIBqhXAAlJNfAjWzTwIlVNNfExAIgGlFc2AUk17yJVQAAGIjXwQgAGIzXwQgAANPBENPJXABFJNe8iWzXuNPEiDTTuNPENEESxIrIBNPGyEiEEshAxALIUNP6yEbMxACkxAIgGRoAJAQAAAAAAAAAANe1XCS407UxQZjEAKTEAiAYpKCIxAIgGIlcSCUk17SNbNO0iVU008QgWUDXtSVcAEjTtUExXGxxQZoAJAAAAAAAADpUBsCg1BzT/NP40/TT8NPs0+jT5NPgyBjTuNPEJFjTvVwgIUDTvVxABUDTyVxERUEIFHUg09lcBIDX1NPdXABFJNfRXAAg09FcICFA09FcQAVA091cREVA18zTzVxERNfIxADT/EjEANPwSEUSACQAAAAAAAA00AbAoNQc0/zT+NP009TT7NPo0+TT4MgY081cAETTyVwAINPJXCAhQNPJXEAFQUEIEqEkhFwxAAcBJJAxAATdINPdXABFJNfVXAAg09VcICFA09VcQAVA091cREVA19DT0VxERNfM09FcAETTzVwAINPNXCAhQNPNXEAFQUDXyMQCIBP5XNgFJNfAiVUAABiI18UIABiM18UIAADTxRDTyVxERSTXwIls17yIxAIgE0lcbCUk17SNbNO0iVU017jTvIg00+CINEDT4NO4PEEQ07jTvCzT4CjXtsSKyATTtshIhBLIQMQCyFDT9shGzMQApMQCIBIwoIjEAiASFVyQJSTXsI1s07CJVTTTtCBZQNexJVwAkNOxQTFctClBmMQApMQCIBFwoNPsWUDXsSVcALTTsUExXNgFQZoAJAAAAAAAAC+oBsCg1BzT/NP40/TT8NPs0+jT5NPgyBjTyVwARNO807QkWNPBXCAhQNPBXEAFQUEIDZEg09lcBIDX1NPdXABFJNfRXAAg09FcICFA09FcQAVA091cREVA18zTzVxERNfIxADT/EjEANPwSEUQ09Sk09YgDyiMhBkxWZoAJAAAAAAAACoEBsCg1BzT/NP40/TT8NPs0+jT5NPgyBjTzVwARNPJXAAg08lcICFA08lcQAVBQQgLhSSMMQAEFSDT2VwFINfU09SENWzX0NPdXABFJNfMiWzT0CBY081cICFA081cQAVA091cREVA18jT0NP6IA3I08lcRETXxNPVXACA18DT1VyAgNe808DT/EjTwNPwSEUQ09CINRDTvKTTviAMdIyEGTFZmNO8pNO+IAw8oIjTviAMIVwAJSTXuI1s07iJVTTT0CBZQNe5XCS407kxQZjTvKTTviALkKCI074gC3VcbCUk17iNbNO4iVU009AgWUDXuSVcAGzTuUExXJBNQZoAJAAAAAAAACTIBsCg1BzT/NP40/TT8NPs0+jT5NPg09AgyBjTyVwARNPFXAAg08VcICFA08VcQAVBQQgHWSDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jTzVwARNPJXAAg08lcICFA08lcQAVBQNfE09TXwMQA0/xIxADT8EhFENPpEIjTwiAIeVxsJSTXvI1s07yJVTSINRCIxAIgCCFcbCUk17iNbNO4iVU008VcRESJbCzT4CjXvNPApNPCIAeYoIjTwiAHfVwkJSTXuI1s07iJVTTTvCBZQNe5JVwAJNO5QTFcSJVBmgAkAAAAAAAAH3AGwKDUHNP80/jT9NPw0+yM0+TT4NO8IMgY08UIA7iISRCI0ARJENARJIhJMNAISEURJNQVJSkpXAIA1/1eAARc1/leBIDX9gaEBWzX8gakBWzX7gbEBWzX6gATW4hCsNP9QNP4WUQcIUDT9UDT8FlA0+xZQNPoWULAhB4gBRYERr0k1+UlQNfg0/DT7E0Q0+FcAETX3IQWvNPdXCAhQNPdXEAFQNPhXERFQNfYhB4gBErEisgEishIhBLIQMgqyFDT8shGzNPZXERE19SEHiADysSKyASKyEiEEshAyCrIUNPuyEbMxADT8NPs0/SI0/iIiMgY09lcAESEFrzT1VwgIUDT1VxABUFBCAAA1/zX+Nf01/DX7Nfo1+TX4NfdJNfY09xZQNPgWUDT5UDT6FlA0+xZRBwhQNPwWUDT9FlA0/1ApSwFXAH9nKEsBV38MZ0gkNQEyBjUCQgAcMRkhHhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4kpYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
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
                "internalType": "struct T10",
                "name": "v1459",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1460",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1461",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1462",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1463",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1464",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "internalType": "struct T10",
                "name": "v1459",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1460",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1461",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1462",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1463",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1464",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
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
                    "internalType": "struct T13",
                    "name": "_aBT0_175",
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
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_aST0_175",
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
                    "internalType": "struct T13",
                    "name": "_addWL0_175",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_175",
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
                    "internalType": "struct T13",
                    "name": "_cCM0_175",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_175",
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
                    "internalType": "struct T16",
                    "name": "_dBT0_175",
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
                    "internalType": "struct T13",
                    "name": "_remWL0_175",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1859",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T21",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2012",
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
    "name": "_reach_oe_v2354",
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
    "name": "_reach_oe_v2689",
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
    "name": "_reach_oe_v3050",
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
    "name": "_reach_oe_v3380",
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
    "name": "_reach_oe_v3733",
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
    "name": "_reach_oe_v4064",
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
    "name": "_reach_oe_v4398",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
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
                    "internalType": "struct T13",
                    "name": "_aBT0_175",
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
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_aST0_175",
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
                    "internalType": "struct T13",
                    "name": "_addWL0_175",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_175",
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
                    "internalType": "struct T13",
                    "name": "_cCM0_175",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_175",
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
                    "internalType": "struct T16",
                    "name": "_dBT0_175",
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
                    "internalType": "struct T13",
                    "name": "_remWL0_175",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1859",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
        "internalType": "struct T21",
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
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
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
        "name": "v6935",
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
        "internalType": "struct T6",
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
        "name": "v6939",
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
        "internalType": "struct T6",
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
        "name": "v6941",
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
  Bytecode: `0x608060405260405162004b4c38038062004b4c8339810160408190526200002691620006c2565b6000805543600355620000386200038d565b7fb04f14c0bf31ccfa386f7572e6ce0e8f3d4da3c41a103b4754f337ac285b4cfb33836040516200006b929190620007af565b60405180910390a18051600090819052815160209081018290528251604001919091528151818301805191909152825190518201528201516080810151606090910151620000d9916001600160a01b03918216911614620000ce576001620000d1565b60005b600c62000214565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011b92906200023e565b60608201908152608082018051600090528151602090810151810151825182015291519091015160409081015191519115159101526200015e3415600d62000214565b6200016862000418565b80513390526020808401805160609081015184516001600160a01b0391821690850152825160809081015186519083166040918201528451810151868801805191909416905282516000908701819052945190950151825190151595019490945280518201839052805184019290925290514360a09091015283015190830151620001f791906001906200023e565b602082015160c001526200020b81620002c1565b5050506200099c565b816200023a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002486200044a565b60005b60028110156200029e578481600281106200026a576200026a6200084e565b60200201518282600281106200028457620002846200084e565b602002015280620002958162000864565b9150506200024b565b5081818460028110620002b557620002b56200084e565b60200201529392505050565b620002cb62000497565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301516080808701919091528451830151151560a087015284519091015160c08087019190915284519091015160e086015292519092015161010084015260036000554360015590516200036291839101620008d4565b60405160208183030381529060405260029080519060200190620003889291906200050b565b505050565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101620003c16200044a565b81526040805160608101825260008082526020828101829052928201529101908152602001620003f06200044a565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620004136200059a565b60405180604001604052806002905b62000480604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004595790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001620004136200044a565b82805462000519906200095f565b90600052602060002090601f0160209004810192826200053d576000855562000588565b82601f106200055857805160ff191683800117855562000588565b8280016001018555821562000588579182015b82811115620005885782518255916020019190600101906200056b565b5062000596929150620005e4565b5090565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001620004136200044a565b5b80821115620005965760008155600101620005e5565b604080519081016001600160401b03811182821017156200062c57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200062c57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200062c57634e487b7160e01b600052604160045260246000fd5b80518015158114620006a557600080fd5b919050565b80516001600160a01b0381168114620006a557600080fd5b6000818303610140811215620006d757600080fd5b620006e1620005fb565b83518152601f198201915061012080831215620006fd57600080fd5b6200070762000632565b60808412156200071657600080fd5b6200072062000663565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200075860a0870162000694565b60208201526200076b60c08701620006aa565b60408201526200077e60e08701620006aa565b6060820152620007926101008701620006aa565b608082015294015160a08501526020810193909352509092915050565b60006101608201905060018060a01b03841682528251602083015260208301518051805160408501526020810151606085015260408101516080850152606081015160a08501525060208101516200080b60c085018215159052565b5060408101516001600160a01b0390811660e08501526060820151811661010085015260808201511661012084015260a001516101409092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200088757634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b6002811015620008ce57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000892565b50505050565b81516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151918216908301526101c0820190506080830151608083015260a08301516200092d60a084018215159052565b5060c083015160c083015260e083015160e08301526101008084015162000957828501826200088e565b505092915050565b600181811c908216806200097457607f821691505b602082108114156200099657634e487b7160e01b600052602260045260246000fd5b50919050565b6141a080620009ac6000396000f3fe60806040526004361061015b5760003560e01c806373b4522c116100c8578063ab53f2c611610084578063cadc2e7a11610061578063cadc2e7a146103d5578063d1ad1a37146103f5578063dc01fb9d1461040a578063e9b451af1461042a57005b8063ab53f2c614610372578063abe9f98d14610395578063acf0cc22146103b557005b806373b4522c146102f157806374fcef1214610304578063817d57f3146103175780638323075714610337578063a153a9bd1461034c578063aa7601b51461035f57005b80632080ea1c116101175780632080ea1c146102465780632f42e509146102735780633bc5b7bf146102865780634acdd6cc146102a657806359cac3a4146102ae5780637333bd09146102e957005b806306dc92ff14610164578063125f48e41461019a57806312822a75146101bd5780631e3f5f07146101d25780631e93b0f1146101e55780631fa8b02f1461020457005b3661016257005b005b34801561017057600080fd5b5061018461017f36600461391f565b61043d565b6040516101919190613962565b60405180910390f35b6101ad6101a836600461391f565b610469565b6040519015158152602001610191565b3480156101c957600080fd5b506101ad6104ca565b6101ad6101e0366004613992565b610590565b3480156101f157600080fd5b506003545b604051908152602001610191565b34801561021057600080fd5b5061022461021f36600461391f565b610606565b6040805182518152602080840151908201529181015190820152606001610191565b34801561025257600080fd5b5061026661026136600461391f565b6107cb565b60405161019191906139d3565b6101ad61028136600461391f565b6107f1565b34801561029257600080fd5b506101846102a136600461391f565b61084e565b6101ad610874565b3480156102ba57600080fd5b506102ce6102c936600461391f565b6108c1565b60408051825181526020928301519281019290925201610191565b6101ad610a2d565b6101626102ff366004613a05565b610a7a565b6101ad61031236600461391f565b610a9e565b34801561032357600080fd5b5061018461033236600461391f565b610aff565b34801561034357600080fd5b506001546101f6565b6101ad61035a36600461391f565b610b25565b61016261036d366004613a1d565b610b87565b34801561037e57600080fd5b50610387610ba7565b604051610191929190613a5c565b3480156103a157600080fd5b506101ad6103b036600461391f565b610c44565b3480156103c157600080fd5b506101846103d036600461391f565b610d6b565b3480156103e157600080fd5b506101846103f036600461391f565b610d91565b34801561040157600080fd5b50610224610db7565b34801561041657600080fd5b5061018461042536600461391f565b610ee0565b6101ad610438366004613a96565b610f06565b604080516060810182526000808252602082018190529181019190915261046382610f5e565b92915050565b6000610473613249565b61047b61328d565b6104836132ac565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526104be8284611030565b50506040015192915050565b600060036000541415610581576000600280546104e690613aaf565b80601f016020809104026020016040519081016040528092919081815260200182805461051290613aaf565b801561055f5780601f106105345761010080835404028352916020019161055f565b820191906000526020600020905b81548152906001019060200180831161054257829003601f168201915b50505050508060200190518101906105779190613c3a565b60a0015192915050565b61058d60006008612966565b90565b600061059a613249565b6105a261328d565b6105aa6132ac565b604080516060810182526001600160a01b038981168252881660208201528082018790529082015260018181905250604080516020808201909252828152908301526105f68284611030565b50506020015190505b9392505050565b61062a60405180606001604052806000815260200160008152602001600081525090565b600360005414156107ba5760006002805461064490613aaf565b80601f016020809104026020016040519081016040528092919081815260200182805461067090613aaf565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b50505050508060200190518101906106d59190613c3a565b90506106fe60408051608081018252600060208201818152928201819052606082015290815290565b60016107098561298c565b51600181111561071b5761071b61393c565b14610727576000610735565b6107308461298c565b604001515b815152600161074385612a19565b5160018111156107555761075561393c565b1461076157600061076f565b61076a84612a19565b604001515b815160200152600161078085612aa6565b5160018111156107925761079261393c565b1461079e5760006107ac565b6107a784612aa6565b604001515b815160400152519392505050565b6107c66000600a612966565b919050565b604080516060810182526000808252602082018190529181019190915261046382612b33565b60006107fb613249565b61080361328d565b61080b6132ac565b60408051602080820183526001600160a01b0388168252838101919091526000835281518082019092528282528301526108458284611030565b50505192915050565b604080516060810182526000808252602082018190529181019190915261046382612bfc565b600061087e613249565b61088661328d565b61088e6132ac565b600060c082015260058152604080516020808201909252828152908301526108b68284611030565b505060a00151919050565b604080518082019091526000808252602082015260036000541415610a21576000600280546108ef90613aaf565b80601f016020809104026020016040519081016040528092919081815260200182805461091b90613aaf565b80156109685780601f1061093d57610100808354040283529160200191610968565b820191906000526020600020905b81548152906001019060200180831161094b57829003601f168201915b50505050508060200190518101906109809190613c3a565b90506109a2604080516060810182526000602082018181529282015290815290565b60016109ad85612bfc565b5160018111156109bf576109bf61393c565b146109cb5760006109d9565b6109d484612bfc565b604001515b81515260016109e785612c89565b5160018111156109f9576109f961393c565b14610a05576000610a13565b610a0e84612c89565b604001515b815160200152519392505050565b6107c660006007612966565b6000610a37613249565b610a3f61328d565b610a476132ac565b600060808201526003815260408051602080820190925282815290830152610a6f8284611030565b505060600151919050565b610a82613249565b610a9a610a9436849003840184613ce7565b82612d16565b5050565b6000610aa8613249565b610ab061328d565b610ab86132ac565b60408051602080820183526001600160a01b038816825260a0840191909152600483528151808201909252828252830152610af38284611030565b50506080015192915050565b60408051606081018252600080825260208201819052918101919091526104638261298c565b6000610b2f613249565b610b3761328d565b610b3f6132ac565b60408051602080820183526001600160a01b0388168252610100840191909152600783528151808201909252828252830152610b7b8284611030565b505060e0015192915050565b610b8f613249565b610a9a610ba136849003840184613dcf565b82611030565b600060606000546002808054610bbc90613aaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610be890613aaf565b8015610c355780601f10610c0a57610100808354040283529160200191610c35565b820191906000526020600020905b815481529060010190602001808311610c1857829003601f168201915b50505050509050915091509091565b600060036000541415610d5f57600060028054610c6090613aaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8c90613aaf565b8015610cd95780601f10610cae57610100808354040283529160200191610cd9565b820191906000526020600020905b815481529060010190602001808311610cbc57829003601f168201915b5050505050806020019051810190610cf19190613c3a565b6040805160208101909152600081529091506000610d0e85612b33565b516001811115610d2057610d2061393c565b1415610d2f5760008152610d57565b6001610d3a85612b33565b516001811115610d4c57610d4c61393c565b1415610d5757600181525b519392505050565b6107c66000600b612966565b604080516060810182526000808252602082018190529181019190915261046382612a19565b604080516060810182526000808252602082018190529181019190915261046382612c89565b610ddb60405180606001604052806000815260200160008152602001600081525090565b60036000541415610ed457600060028054610df590613aaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2190613aaf565b8015610e6e5780601f10610e4357610100808354040283529160200191610e6e565b820191906000526020600020905b815481529060010190602001808311610e5157829003601f168201915b5050505050806020019051810190610e869190613c3a565b9050610eaf60408051608081018252600060208201818152928201819052606082015290815290565b60e082015181515260c082015181516020015260809091015181516040015251919050565b61058d60006009612966565b604080516060810182526000808252602082018190529181019190915261046382612aa6565b6000610f10613249565b610f1861328d565b610f206132ac565b604080516020808201835287825260e0840191909152600683528151808201909252828252830152610f528284611030565b505060c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff166001811115610faa57610faa61393c565b1415611021576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff166001811115610feb57610feb61393c565b6001811115610ffc57610ffc61393c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6110406003600054146034612966565b815161105b90158061105457508251600154145b6035612966565b60008080556002805461106d90613aaf565b80601f016020809104026020016040519081016040528092919081815260200182805461109990613aaf565b80156110e65780601f106110bb576101008083540402835291602001916110e6565b820191906000526020600020905b8154815290600101906020018083116110c957829003601f168201915b50505050508060200190518101906110fe9190613c3a565b905061110861336e565b61111760001943106036612966565b7f8f382a1e46cd31633f33c863b4e3e983c37897d59e544a03e5564c24daae58d13385604051611148929190613ec5565b60405180910390a1600060208501515151600781111561116a5761116a61393c565b14156114c55760208085015151015181526111873415600e612966565b61010082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516111c99190600090612eff565b81604001819052506111eb6111e43384602001516000612f73565b600f612966565b6040818101805160209081015151606085018051919091528251820151820151815183015282519091015183015181519015159301929092525190516112349190600190612eff565b816080018190525061125661124f3384604001516000612f73565b6010612966565b8151611293906001600160a01b031633146112895782606001516001600160a01b0316336001600160a01b03161461128c565b60015b6011612966565b6112a28260a001516012612966565b6112ec600060018351516112b590610f5e565b5160018111156112c7576112c761393c565b146112d35760006112e4565b8251516112df90610f5e565b604001515b116013612966565b60e082015160808201516020015151600161130633610f5e565b5160018111156113185761131861393c565b14611324576000611332565b61132d33610f5e565b604001515b61133c9190613fe0565b6113469190613fff565b60a082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061138690612c89565b5160018111156113985761139861393c565b146113a45760006113b5565b8151516113b090612c89565b604001515b6113bf9190614021565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527f87fcde15a97985f78f955e682015815b823db35f06a34e20fb15c9d4abff3619910160405180910390a160018352611422613726565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808701518451909301929092528251600191015260c08501519151015260a082015160e08401516114949190614021565b60208201805160809081019290925280514360a09091015290830151905160c001526114bf81612f89565b50612960565b60016020850151515160078111156114df576114df61393c565b14156118bd576020840151516040015160c082015261150034156014612966565b60c081015160400151610100830151515161151b9190614021565b60e082018051919091526101008301805151602090810151835190910152805151604090810151835190151591015251905161155a9190600090612eff565b81610100018190525061158461157d3384602001518460c0015160400151612f73565b6015612966565b6101008101805160209081015151610120840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516115db906115d49033906000612f73565b6016612966565b815160c082015151611629916001600160a01b0391821691161461161f5782606001516001600160a01b03168260c00151600001516001600160a01b031614611622565b60015b6017612966565b61163f60008260c0015160400151116018612966565b60c0810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff000019169055865186015190941683526004855291819020805490931682179092559251908101519101519091906116ba90612bfc565b5160018111156116cc576116cc61393c565b146116d85760006116ee565b6116e98260c0015160200151612bfc565b604001515b6116f89190614021565b60c0820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff19168517905591519182015191015190919061175690610f5e565b5160018111156117685761176861393c565b1461177457600061178a565b6117858260c0015160200151610f5e565b604001515b6117949190614021565b60c08201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527fef0e0b1e764e6d3ce0b05d92e0f339d4c143c7010c66799939ee3570f541f890910160405180910390a1600160208401526117fe613726565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052608087015184519093019290925260a086015183519015159082015260c080870151935190920192909252830151015160e084015161187d9190614021565b60208201805160800191909152514360a0909101526101008201516101208301516118ab9190600190612eff565b602082015160c001526114bf81612f89565b60026020850151515160078111156118d7576118d761393c565b1415611b1457602084015151606001516101408201526118f934156019612966565b610100820180515151610160830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161193e9190600090612eff565b81610180018190525061196161195a3384602001516000612f73565b601a612966565b61018081018051602090810151516101a0840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516119b8906119b19033906000612f73565b601b612966565b81516119f5906001600160a01b031633146119eb5782606001516001600160a01b0316336001600160a01b0316146119ee565b60015b601c612966565b61014081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527f38fe3dee8bc09012c624d4a18fbb6785969c335e801276983a69a93f2b3f42d8910160405180910390a160016040840152611a7c613726565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526101808201516101a08301516118ab9190600190612eff565b6003602085015151516007811115611b2e57611b2e61393c565b1415611f0457611b403415601d612966565b6101008201805151516101c08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611b859190600090612eff565b816101e00181905250611ba8611ba13384602001516000612f73565b601e612966565b6101e08101805160209081015151610200840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611bf39190600190612eff565b816102200181905250611c16611c0f3384604001516000612f73565b601f612966565b6000611c2133612b33565b516001811115611c3357611c3361393c565b1415611c46576000610240820152611c72565b6001611c5133612b33565b516001811115611c6357611c6361393c565b1415611c725760016102408201525b611c828161024001516020612966565b6001611c8d33610f5e565b516001811115611c9f57611c9f61393c565b14611cab576000611cb9565b611cb433610f5e565b604001515b6102608201526102208101516020015151611d0290611cd9576000611ce2565b60008360e00151115b611ced576000611cfb565b8161026001518360e0015110155b6021612966565b60e08201516102208201516020015151610260830151611d229190613fe0565b611d2c9190613fff565b61028082018190526102208201516020015151611d499190614039565b6102a0820180519190915261022082018051602090810151810151835182015290510151604090810151915191151591810191909152820151610280820151611d949190339061304f565b336000818152600860205260409020805460ff1916600190811790915561028083015191611dc190612a19565b516001811115611dd357611dd361393c565b14611ddf576000611ded565b611de833612a19565b604001515b611df79190614021565b3360009081526008602090815260408083206001908101949094556009825291829020805460ff19168417815560808601519084015590519182527f9c2754d67af27e9a1645dfdcfd034ab7ba62e2152eb2135f0700f1879e2f8a1e910160405180910390a160016060840152611e6c613726565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526102208201516102a08301516118ab9190600190612eff565b6004602085015151516007811115611f1e57611f1e61393c565b14156121185760208401515160a001516102c0820152611f4034156022612966565b6101008201805151516102e08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611f859190600090612eff565b816103000181905250611fa8611fa13384602001516000612f73565b6023612966565b610300810180516020908101515161032084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611fff90611ff89033906000612f73565b6024612966565b815161203c906001600160a01b031633146120325782606001516001600160a01b0316336001600160a01b031614612035565b60015b6025612966565b604051600181527f8d761663ad9038c98ab3525575cdb4df5d5bab9a3530896bce518a1b3795840a9060200160405180910390a16001608084015261207f613726565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526102c085015151828501805191909416905260808087015184519093019290925260a080870151845190151592019190915260c086015183516060015260e08601518351909201919091529051439101526103008201516103208301516118ab9190600190612eff565b60056020850151515160078111156121325761213261393c565b14156124bf5761214434156026612966565b61010082018051515161034083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516121899190600090612eff565b8161036001819052506121ac6121a53384602001516000612f73565b6027612966565b61036081018051602090810151516103808401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516121f79190600190612eff565b816103a0018190525061221a6122133384604001516000612f73565b6028612966565b600161222533612bfc565b5160018111156122375761223761393c565b14612243576000612251565b61224c33612bfc565b604001515b6103c0820152600061226233612b33565b5160018111156122745761227461393c565b14156122875760006103e08201526122b3565b600161229233612b33565b5160018111156122a4576122a461393c565b14156122b35760016103e08201525b6122c3816103e001516029612966565b6122f16000826103c00151116122da5760006122ea565b6103c08201516103a08301515151115b602a612966565b6103c08101516103a082015151516123099190614039565b61040082018051919091526103a08201805151602090810151835182015290515160409081015192519215159201919091528201516103c08201516123509190339061304f565b3360008181526004602090815260408083208054600160ff1991821681178355918201859055600690935292208054909116821790556103c0830151916123969061298c565b5160018111156123a8576123a861393c565b146123b45760006123c2565b6123bd3361298c565b604001515b6123cc9190614021565b3360009081526006602090815260409182902060019081019390935590519182527fabc7eb932778f5d12c11c41ec82dffaa68882a366b76b52af1d9850d1b083f5a910160405180910390a1600160a0840152612427613726565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526103a08201516104008301516118ab9190600090612eff565b60066020850151515160078111156124d9576124d961393c565b14156127235760208401515160e001516104208201526124fb3415602b612966565b61010082018051515161044083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516125409190600090612eff565b81610460018190525061256361255c3384602001516000612f73565b602c612966565b61042081015151610460820151602001515161257f9190614021565b610480820180519190915261046082018051602090810151810151835182015290510151604090810151915191151591810191909152820151610420820151516125d6916125cf91339190612f73565b602d612966565b8151612613906001600160a01b031633146126095782606001516001600160a01b0316336001600160a01b03161461260c565b60015b602e612966565b61042081015151612627901515602f612966565b604051600181527f7f6eedd303c6effca4908386318e66d62947cba0d9d064fb048a91e8905186ec9060200160405180910390a1600160c084015261266a613726565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169101526060850151908301519116905260808301516126b690600190614021565b602080830180519091019190915260a084015190519015156040909101526104208201515160c08401516126ea9190614021565b6020820180516060019190915260e0840151815160800152514360a0909101526104608201516104808301516118ab9190600190612eff565b600760208501515151600781111561273d5761273d61393c565b14156129605760208401515161010001516104a082015261276034156030612966565b6101008201805151516104c083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516127a59190600090612eff565b816104e001819052506127c86127c13384602001516000612f73565b6031612966565b6104e081018051602090810151516105008401805191909152825182015182015181518301529151015160409081015191519115159181019190915282015161281f906128189033906000612f73565b6032612966565b815161285c906001600160a01b031633146128525782606001516001600160a01b0316336001600160a01b031614612855565b60015b6033612966565b6104a0810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527fb7c3fdd62525e885047cb10d3def3934a85bb494e204d18e07b802bc3324368c910160405180910390a1600160e08401526128c8613726565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526104e08201516105008301516118ab9190600190612eff565b50505050565b81610a9a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156129d8576129d861393c565b1415611021576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610feb57610feb61393c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612a6557612a6561393c565b1415611021576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff166001811115610feb57610feb61393c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115612af257612af261393c565b1415611021576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff166001811115610feb57610feb61393c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115612b7f57612b7f61393c565b1415611021576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115612bc057612bc061393c565b6001811115612bd157612bd161393c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115612c4857612c4861393c565b1415611021576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610feb57610feb61393c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612cd557612cd561393c565b1415611021576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610feb57610feb61393c565b612d266003600054146039612966565b8151612d41901580612d3a57508251600154145b603a612966565b600080805560028054612d5390613aaf565b80601f0160208091040260200160405190810160405280929190818152602001828054612d7f90613aaf565b8015612dcc5780601f10612da157610100808354040283529160200191612dcc565b820191906000526020600020905b815481529060010190602001808311612daf57829003601f168201915b5050505050806020019051810190612de49190613c3a565b9050612df6600019431015603b612966565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1612e4934156037612966565b8051612e61906001600160a01b031633146038612966565b612e69613726565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845190841690820152606080860151838601805191909516905260808087015185519094019390935260a080870151855190151593019290925260c08087015185519092019190915260e08601518451909301929092528251439101526101008401519151015261296081612f89565b612f07613756565b60005b6002811015612f5357848160028110612f2557612f25613fb4565b6020020151828260028110612f3c57612f3c613fb4565b602002015280612f4b81614050565b915050612f0a565b5081818460028110612f6757612f67613fb4565b60200201529392505050565b6000612f8183853085613063565b949350505050565b612f916137a1565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301516080808701919091528451830151151560a087015284519091015160c08087019190915284519091015160e08601529251909201516101008401526003600055436001559051613026918391016140a9565b6040516020818303038152906040526002908051906020019061304a929190613813565b505050565b61305a83838361313d565b61304a57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916130ca91614131565b60006040518083038185875af1925050503d8060008114613107576040519150601f19603f3d011682016040523d82523d6000602084013e61310c565b606091505b509150915061311d8282600161320e565b5080806020019051810190613132919061414d565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161319c91614131565b60006040518083038185875af1925050503d80600081146131d9576040519150601f19603f3d011682016040523d82523d6000602084013e6131de565b606091505b50915091506131ef8282600261320e565b5080806020019051810190613204919061414d565b9695505050505050565b6060831561321d5750816105ff565b82511561322d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401612983565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518060400160405280600081526020016132a7613897565b905290565b60408051610120810190915280600081526020016132d560408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200161330f60408051602081019091526000815290565b81526000602082015260400161333060408051602081019091526000815290565b81526020016000151581526020016133546040518060200160405280600081525090565b81526020016132a760408051602081019091526000815290565b60408051610540810182526000610520820181815282528251606081018452818152602080820183905281850192909252908201529081016133ae613756565b815260408051606081018252600080825260208281018290529282015291019081526020016133db613756565b81526020016000815260200161340a604080516060810182526000808252602082018190529181019190915290565b81526040805160608101825260008082526020828101829052928201529101908152602001613437613756565b8152604080516060810182526000808252602082810182905292820152910190815260200161347160408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200161349e613756565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016134eb613756565b81526040805160608101825260008082526020828101829052928201529101908152602001613518613756565b8152602001600015158152602001600081526020016000815260200161355a604051806060016040528060008152602001600081526020016000151581525090565b815260200161357460408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526020016135a1613756565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016135ee613756565b8152604080516060810182526000808252602082810182905292820152910190815260200161361b613756565b81526000602082018190526040820152606001613654604051806060016040528060008152602001600081526020016000151581525090565b815260200161366f6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161369c613756565b815260408051606081018252600080825260208281018290529282015291019081526020016136d660408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001613703613756565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016132a76138aa565b60405180604001604052806002905b61378b604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816137655790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160001515815260200160008152602001600081526020016132a7613756565b82805461381f90613aaf565b90600052602060002090601f0160209004810192826138415760008555613887565b82601f1061385a57805160ff1916838001178555613887565b82800160010185558215613887579182015b8281111561388757825182559160200191906001019061386c565b506138939291506138f2565b5090565b60405180602001604052806132a76132ac565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001600081526020016132a7613756565b5b8082111561389357600081556001016138f3565b6001600160a01b038116811461391c57600080fd5b50565b60006020828403121561393157600080fd5b81356105ff81613907565b634e487b7160e01b600052602160045260246000fd5b6002811061391c5761391c61393c565b8151606082019061397281613952565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156139a757600080fd5b83356139b281613907565b925060208401356139c281613907565b929592945050506040919091013590565b815160608201906139e381613952565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215613a1757600080fd5b50919050565b60006101808284031215613a1757600080fd5b60005b83811015613a4b578181015183820152602001613a33565b838111156129605750506000910152565b8281526040602082015260008251806040840152613a81816060850160208701613a30565b601f01601f1916919091016060019392505050565b600060208284031215613aa857600080fd5b5035919050565b600181811c90821680613ac357607f821691505b60208210811415613a1757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715613b1d57613b1d613ae4565b60405290565b6040516060810167ffffffffffffffff81118282101715613b1d57613b1d613ae4565b604051610120810167ffffffffffffffff81118282101715613b1d57613b1d613ae4565b6040516020810167ffffffffffffffff81118282101715613b1d57613b1d613ae4565b80516107c681613907565b801515811461391c57600080fd5b80516107c681613b98565b600082601f830112613bc257600080fd5b613bca613afa565b8060c0840185811115613bdc57600080fd5b845b81811015613c2f5760608188031215613bf75760008081fd5b613bff613b23565b8151815260208083015181830152604080840151613c1c81613b98565b9083015290855290930192606001613bde565b509095945050505050565b60006101c08284031215613c4d57600080fd5b613c55613b46565b613c5e83613b8d565b8152613c6c60208401613b8d565b6020820152613c7d60408401613b8d565b6040820152613c8e60608401613b8d565b606082015260808301516080820152613ca960a08401613ba6565b60a082015260c083015160c082015260e083015160e0820152610100613cd185828601613bb1565b908201529392505050565b80356107c681613b98565b600060408284031215613cf957600080fd5b613d01613afa565b823581526020830135613d1381613b98565b60208201529392505050565b8035600881106107c657600080fd5b600060208284031215613d4057600080fd5b613d48613b6a565b90508135613d5581613907565b815292915050565b600060608284031215613d6f57600080fd5b613d77613b23565b90508135613d8481613907565b81526020820135613d9481613907565b806020830152506040820135604082015292915050565b600060208284031215613dbd57600080fd5b613dc5613b6a565b9135825250919050565b6000818303610180811215613de357600080fd5b613deb613afa565b8335815261016080601f1984011215613e0357600080fd5b613e0b613b6a565b9250613e15613b46565b613e2160208701613d1f565b8152613e308760408801613d2e565b6020820152613e428760608801613d5d565b6040820152613e548760c08801613d2e565b6060820152613e6560e08701613cdc565b6080820152610100613e7988828901613d2e565b60a0830152613e8b6101208801613cdc565b60c0830152613e9e886101408901613dab565b60e0830152613eaf88848901613d2e565b9082015283525060208101919091529392505050565b6001600160a01b038316815281516020808301919091528201515180516101a08301919060088110613ef957613ef961393c565b6040840152602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e0850152506080810151610100613f6c8186018315159052565b60a0830151516001600160a01b0390811661012087015260c0840151151561014087015260e08401515161016087015292015151909116610180909301929092529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615613ffa57613ffa613fca565b500290565b60008261401c57634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561403457614034613fca565b500190565b60008282101561404b5761404b613fca565b500390565b600060001982141561406457614064613fca565b5060010190565b8060005b600281101561296057815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161406f565b81516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151918216908301526101c0820190506080830151608083015260a083015161410160a084018215159052565b5060c083015160c083015260e083015160e0830152610100808401516141298285018261406b565b505092915050565b60008251614143818460208701613a30565b9190910192915050565b60006020828403121561415f57600080fd5b81516105ff81613b9856fea2646970667358221220f15df194ee990b1e22835176856e6909807a481dab5b97ef66e265afab102ce164736f6c634300080c0033`,
  BytecodeLen: 19276,
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
  2: {
    at: './index.rsh:282:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:97:72:after expr stmt semicolon',
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
