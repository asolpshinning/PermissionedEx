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
            const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = svs;
            return (await ((async (_v1491 ) => {
                const v1491 = stdlib.protect(ctc0, _v1491, null);
              
              const v1492 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1491), null);
              const v1493 = stdlib.fromSome(v1492, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1494 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1491), null);
              const v1495 = stdlib.fromSome(v1494, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1496 = [v1493, v1495];
              
              return v1496;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = svs;
            return (await ((async () => {
              
              
              return v1481;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = svs;
            return (await ((async () => {
              
              const v1490 = [v1483, v1482, v1480];
              
              return v1490;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = svs;
            return (await ((async (_v1498 ) => {
                const v1498 = stdlib.protect(ctc0, _v1498, null);
              
              const v1499 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1498), null);
              const v1500 = stdlib.fromSome(v1499, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1501 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1498), null);
              const v1502 = stdlib.fromSome(v1501, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1503 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1498), null);
              const v1504 = stdlib.fromSome(v1503, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
              const v1505 = [v1500, v1502, v1504];
              
              return v1505;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = svs;
            return (await ((async (_v1507 ) => {
                const v1507 = stdlib.protect(ctc0, _v1507, null);
              
              const v1508 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1507), null);
              let v1509;
              switch (v1508[0]) {
                case 'None': {
                  const v1510 = v1508[1];
                  v1509 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1511 = v1508[1];
                  v1509 = true;
                  
                  break;
                  }
                }
              
              return v1509;}))(...args));
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
    aBT0_172: ctc9,
    aST0_172: ctc10,
    addWL0_172: ctc9,
    cBT0_172: ctc11,
    cCM0_172: ctc9,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    remWL0_172: ctc9
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
      
      const v1479 = v1456;
      const v1480 = stdlib.checkedBigNumberify('./index.rsh:100:103:decimal', stdlib.UInt_max, '0');
      const v1481 = v1455;
      const v1482 = stdlib.checkedBigNumberify('./index.rsh:100:77:decimal', stdlib.UInt_max, '0');
      const v1483 = stdlib.checkedBigNumberify('./index.rsh:100:74:decimal', stdlib.UInt_max, '0');
      const v1484 = v1459;
      const v1486 = v1475;
      
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
  
  let v1479 = v1456;
  let v1480 = stdlib.checkedBigNumberify('./index.rsh:100:103:decimal', stdlib.UInt_max, '0');
  let v1481 = v1455;
  let v1482 = stdlib.checkedBigNumberify('./index.rsh:100:77:decimal', stdlib.UInt_max, '0');
  let v1483 = stdlib.checkedBigNumberify('./index.rsh:100:74:decimal', stdlib.UInt_max, '0');
  let v1484 = v1459;
  let v1486 = v1475;
  
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
        args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1484,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:281:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v4402, time: v4401, didSend: v1093, from: v4400 } = txn3;
          
          ;
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v1483;
          const cv1484 = v4401;
          const cv1486 = v1486;
          
          await (async () => {
            const v1479 = cv1479;
            const v1480 = cv1480;
            const v1481 = cv1481;
            const v1482 = cv1482;
            const v1483 = cv1483;
            const v1484 = cv1484;
            const v1486 = cv1486;
            
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
      const {data: [], secs: v4402, time: v4401, didSend: v1093, from: v4400 } = txn3;
      ;
      const v4403 = stdlib.addressEq(v1453, v4400);
      stdlib.assert(v4403, {
        at: './index.rsh:281:21:dot',
        fs: ['at ./index.rsh:280:40:application call to [unknown function] (defined at: ./index.rsh:280:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1479 = v1479;
      const cv1480 = v1480;
      const cv1481 = v1481;
      const cv1482 = v1482;
      const cv1483 = v1483;
      const cv1484 = v4401;
      const cv1486 = v1486;
      
      v1479 = cv1479;
      v1480 = cv1480;
      v1481 = cv1481;
      v1482 = cv1482;
      v1483 = cv1483;
      v1484 = cv1484;
      v1486 = cv1486;
      
      continue;
      }
    else {
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn2;
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          undefined /* setApiDetails */;
          ;
          const v1971 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1978 = [v1972, v1976, v1977];
          const v1979 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v1978);
          ;
          const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1987 = [v1981, v1985, v1986];
          const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v1987);
          ;
          const v1990 = v1856[stdlib.checkedBigNumberify('./index.rsh:240:13:spread', stdlib.UInt_max, '0')];
          const v1991 = stdlib.addressEq(v1852, v1453);
          const v1992 = stdlib.addressEq(v1852, v1479);
          const v1993 = v1991 ? true : v1992;
          stdlib.assert(v1993, {
            at: './index.rsh:252:24:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1481, {
            at: './index.rsh:253:24:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1994 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1990), null);
          const v1995 = stdlib.fromSome(v1994, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v1996 = stdlib.gt(v1995, stdlib.checkedBigNumberify('./index.rsh:254:71:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1996, {
            at: './index.rsh:254:24:application',
            fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1997 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1852), null);
          const v1998 = stdlib.fromSome(v1997, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v1999 = v1988[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '1')];
          const v2000 = v1999[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '0')];
          const v2001 = stdlib.mul(v1998, v2000);
          const v2002 = stdlib.div(v2001, v1483);
          const v2003 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1990), null);
          const v2004 = stdlib.fromSome(v2003, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2005 = stdlib.add(v2004, v2002);
          await stdlib.mapSet(map1, v1990, v2005);
          const v2006 = true;
          await txn2.getOutput('aBT', 'v2006', ctc6, v2006);
          const v2013 = stdlib.add(v1483, v2002);
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = true;
          const cv1482 = v1482;
          const cv1483 = v2013;
          const cv1484 = v1854;
          const cv1486 = v1988;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          undefined /* setApiDetails */;
          const v2192 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '2')];
          ;
          const v2289 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2290 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2291 = stdlib.add(v2290, v2192);
          const v2294 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2295 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2296 = [v2291, v2294, v2295];
          const v2297 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2296);
          ;
          const v2298 = v2297[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2299 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2303 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2304 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2305 = [v2299, v2303, v2304];
          const v2306 = stdlib.Array_set(v2297, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2305);
          ;
          const v2334 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '0')];
          const v2335 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '1')];
          const v2337 = stdlib.addressEq(v2334, v1453);
          const v2338 = stdlib.addressEq(v2334, v1479);
          const v2339 = v2337 ? true : v2338;
          stdlib.assert(v2339, {
            at: './index.rsh:160:24:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2340 = stdlib.gt(v2192, stdlib.checkedBigNumberify('./index.rsh:161:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v2340, {
            at: './index.rsh:161:24:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2335, null);
          const v2342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2335), null);
          const v2343 = stdlib.fromSome(v2342, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2344 = stdlib.add(v2343, v2192);
          await stdlib.mapSet(map0, v2335, v2344);
          const v2345 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2335), null);
          const v2346 = stdlib.fromSome(v2345, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2347 = stdlib.add(v2346, v2192);
          await stdlib.mapSet(map3, v2335, v2347);
          const v2348 = true;
          await txn2.getOutput('aST', 'v2348', ctc6, v2348);
          const v2357 = stdlib.add(v1483, v2192);
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v2357;
          const cv1484 = v1854;
          const cv1486 = v2306;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          undefined /* setApiDetails */;
          ;
          const v2607 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2608 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2612 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2613 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2614 = [v2608, v2612, v2613];
          const v2615 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2614);
          ;
          const v2616 = v2615[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2617 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2621 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2622 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2623 = [v2617, v2621, v2622];
          const v2624 = stdlib.Array_set(v2615, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2623);
          ;
          const v2678 = v2492[stdlib.checkedBigNumberify('./index.rsh:111:13:spread', stdlib.UInt_max, '0')];
          const v2679 = stdlib.addressEq(v1852, v1453);
          const v2680 = stdlib.addressEq(v1852, v1479);
          const v2681 = v2679 ? true : v2680;
          stdlib.assert(v2681, {
            at: './index.rsh:122:24:application',
            fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2678, null);
          const v2683 = true;
          await txn2.getOutput('addWL', 'v2683', ctc6, v2683);
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v1483;
          const cv1484 = v1854;
          const cv1486 = v2624;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          undefined /* setApiDetails */;
          ;
          const v2925 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2926 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2930 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2931 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2932 = [v2926, v2930, v2931];
          const v2933 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2932);
          ;
          const v2934 = v2933[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2935 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2939 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2940 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2941 = [v2935, v2939, v2940];
          const v2942 = stdlib.Array_set(v2933, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2941);
          ;
          const v3010 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1852), null);
          let v3011;
          switch (v3010[0]) {
            case 'None': {
              const v3012 = v3010[1];
              v3011 = false;
              
              break;
              }
            case 'Some': {
              const v3013 = v3010[1];
              v3011 = true;
              
              break;
              }
            }
          stdlib.assert(v3011, {
            at: './index.rsh:227:24:application',
            fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3014 = v2942[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '1')];
          const v3015 = v3014[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '0')];
          const v3016 = stdlib.gt(v3015, stdlib.checkedBigNumberify('./index.rsh:228:39:decimal', stdlib.UInt_max, '0'));
          const v3017 = stdlib.gt(v1483, stdlib.checkedBigNumberify('./index.rsh:228:52:decimal', stdlib.UInt_max, '0'));
          const v3018 = v3016 ? v3017 : false;
          const v3019 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1852), null);
          const v3020 = stdlib.fromSome(v3019, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3021 = stdlib.ge(v1483, v3020);
          const v3022 = v3018 ? v3021 : false;
          stdlib.assert(v3022, {
            at: './index.rsh:228:24:application',
            fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3027 = stdlib.mul(v3020, v3015);
          const v3028 = stdlib.div(v3027, v1483);
          const v3034 = stdlib.sub(v3015, v3028);
          const v3037 = v3014[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1')];
          const v3038 = v3014[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '2')];
          const v3039 = [v3034, v3037, v3038];
          const v3040 = stdlib.Array_set(v2942, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1'), v3039);
          ;
          const v3041 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1852), null);
          const v3042 = stdlib.fromSome(v3041, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3043 = stdlib.add(v3042, v3028);
          await stdlib.mapSet(map4, v1852, v3043);
          await stdlib.mapSet(map5, v1852, v1480);
          const v3044 = true;
          await txn2.getOutput('cBT', 'v3044', ctc6, v3044);
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v1483;
          const cv1484 = v1854;
          const cv1486 = v3040;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          undefined /* setApiDetails */;
          ;
          const v3243 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3244 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3248 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3249 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3250 = [v3244, v3248, v3249];
          const v3251 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3250);
          ;
          const v3252 = v3251[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3253 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3257 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3258 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3259 = [v3253, v3257, v3258];
          const v3260 = stdlib.Array_set(v3251, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3259);
          ;
          const v3370 = v3128[stdlib.checkedBigNumberify('./index.rsh:263:13:spread', stdlib.UInt_max, '0')];
          const v3371 = stdlib.addressEq(v1852, v1453);
          const v3372 = stdlib.addressEq(v1852, v1479);
          const v3373 = v3371 ? true : v3372;
          stdlib.assert(v3373, {
            at: './index.rsh:274:24:application',
            fs: ['at ./index.rsh:273:13:application call to [unknown function] (defined at: ./index.rsh:273:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3374 = true;
          await txn2.getOutput('cCM', 'v3374', ctc6, v3374);
          const cv1479 = v3370;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v1483;
          const cv1484 = v1854;
          const cv1486 = v3260;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          undefined /* setApiDetails */;
          ;
          const v3561 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3562 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3566 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3567 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3568 = [v3562, v3566, v3567];
          const v3569 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3568);
          ;
          const v3570 = v3569[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3571 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3575 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3576 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3577 = [v3571, v3575, v3576];
          const v3578 = stdlib.Array_set(v3569, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3577);
          ;
          const v3701 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1852), null);
          const v3702 = stdlib.fromSome(v3701, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3703 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1852), null);
          let v3704;
          switch (v3703[0]) {
            case 'None': {
              const v3705 = v3703[1];
              v3704 = false;
              
              break;
              }
            case 'Some': {
              const v3706 = v3703[1];
              v3704 = true;
              
              break;
              }
            }
          stdlib.assert(v3704, {
            at: './index.rsh:186:24:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3707 = stdlib.gt(v3702, stdlib.checkedBigNumberify('./index.rsh:187:31:decimal', stdlib.UInt_max, '0'));
          const v3708 = v3578[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3709 = v3708[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3710 = stdlib.gt(v3709, v3702);
          const v3711 = v3707 ? v3710 : false;
          stdlib.assert(v3711, {
            at: './index.rsh:187:24:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3717 = stdlib.sub(v3709, v3702);
          const v3720 = v3708[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '1')];
          const v3721 = v3708[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '2')];
          const v3722 = [v3717, v3720, v3721];
          const v3723 = stdlib.Array_set(v3578, stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '0'), v3722);
          ;
          await stdlib.mapSet(map0, v1852, stdlib.checkedBigNumberify('./index.rsh:190:33:decimal', stdlib.UInt_max, '0'));
          const v3724 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1852), null);
          const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3726 = stdlib.add(v3725, v3702);
          await stdlib.mapSet(map2, v1852, v3726);
          const v3727 = true;
          await txn2.getOutput('cST', 'v3727', ctc6, v3727);
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v1483;
          const cv1484 = v1854;
          const cv1486 = v3723;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          undefined /* setApiDetails */;
          const v3835 = v3764[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3879 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3880 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3884 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3885 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3886 = [v3880, v3884, v3885];
          const v3887 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3886);
          ;
          const v3888 = v3887[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3889 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3890 = stdlib.add(v3889, v3835);
          const v3893 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3894 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3895 = [v3890, v3893, v3894];
          const v3896 = stdlib.Array_set(v3887, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3895);
          ;
          const v4054 = stdlib.addressEq(v1852, v1453);
          const v4055 = stdlib.addressEq(v1852, v1479);
          const v4056 = v4054 ? true : v4055;
          stdlib.assert(v4056, {
            at: './index.rsh:208:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4057 = stdlib.gt(v3835, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v4057, {
            at: './index.rsh:209:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1481, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4058 = true;
          await txn2.getOutput('dBT', 'v4058', ctc6, v4058);
          const v4065 = stdlib.add(v1482, v3835);
          const v4066 = stdlib.add(v1480, stdlib.checkedBigNumberify('./index.rsh:212:76:decimal', stdlib.UInt_max, '1'));
          const cv1479 = v1479;
          const cv1480 = v4066;
          const cv1481 = true;
          const cv1482 = v4065;
          const cv1483 = v1483;
          const cv1484 = v1854;
          const cv1486 = v3896;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
          continue;
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          undefined /* setApiDetails */;
          ;
          const v4197 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4202 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4203 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4204 = [v4198, v4202, v4203];
          const v4205 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v4204);
          ;
          const v4206 = v4205[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4207 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4211 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4212 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4213 = [v4207, v4211, v4212];
          const v4214 = stdlib.Array_set(v4205, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v4213);
          ;
          const v4387 = v4082[stdlib.checkedBigNumberify('./index.rsh:129:13:spread', stdlib.UInt_max, '0')];
          const v4388 = stdlib.addressEq(v1852, v1453);
          const v4389 = stdlib.addressEq(v1852, v1479);
          const v4390 = v4388 ? true : v4389;
          stdlib.assert(v4390, {
            at: './index.rsh:140:24:application',
            fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v4387, undefined /* Nothing */);
          const v4392 = true;
          await txn2.getOutput('remWL', 'v4392', ctc6, v4392);
          const cv1479 = v1479;
          const cv1480 = v1480;
          const cv1481 = v1481;
          const cv1482 = v1482;
          const cv1483 = v1483;
          const cv1484 = v1854;
          const cv1486 = v4214;
          
          v1479 = cv1479;
          v1480 = cv1480;
          v1481 = cv1481;
          v1482 = cv1482;
          v1483 = cv1483;
          v1484 = cv1484;
          v1486 = cv1486;
          
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
    aBT0_172: ctc9,
    aST0_172: ctc10,
    addWL0_172: ctc9,
    cBT0_172: ctc11,
    cCM0_172: ctc9,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    remWL0_172: ctc9
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1620 = ctc.selfAddress();
  const v1622 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:100:72:application call to "runaBT0_172" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1623 = v1622[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1626 = stdlib.addressEq(v1620, v1453);
  const v1627 = stdlib.addressEq(v1620, v1479);
  const v1628 = v1626 ? true : v1627;
  stdlib.assert(v1628, {
    at: './index.rsh:244:23:application',
    fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:18:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:100:72:application call to "runaBT0_172" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1629 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1623), null);
  const v1630 = stdlib.fromSome(v1629, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
  const v1631 = stdlib.gt(v1630, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
  const v1632 = v1481 ? v1631 : false;
  stdlib.assert(v1632, {
    at: './index.rsh:246:23:application',
    fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:18:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:100:72:application call to "runaBT0_172" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1636 = ['aBT0_172', v1622];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1636],
    evt_cnt: 1,
    funcNum: 2,
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1971 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1978 = [v1972, v1976, v1977];
          const v1979 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v1978);
          ;
          const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v1987 = [v1981, v1985, v1986];
          const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v1987);
          ;
          const v1990 = v1856[stdlib.checkedBigNumberify('./index.rsh:240:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1990), null);
          const v1997 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1852), null);
          const v1998 = stdlib.fromSome(v1997, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v1999 = v1988[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '1')];
          const v2000 = v1999[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '0')];
          const v2001 = stdlib.mul(v1998, v2000);
          const v2002 = stdlib.div(v2001, v1483);
          const v2003 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1990), null);
          const v2004 = stdlib.fromSome(v2003, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2005 = stdlib.add(v2004, v2002);
          await stdlib.simMapSet(sim_r, 1, v1990, v2005);
          const v2006 = true;
          const v2007 = await txn1.getOutput('aBT', 'v2006', ctc6, v2006);
          
          const v2013 = stdlib.add(v1483, v2002);
          const v6481 = v1479;
          const v6482 = v1480;
          const v6483 = true;
          const v6484 = v1482;
          const v6485 = v2013;
          const v6487 = v1988;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      undefined /* setApiDetails */;
      ;
      const v1971 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v1978 = [v1972, v1976, v1977];
      const v1979 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v1978);
      ;
      const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v1987 = [v1981, v1985, v1986];
      const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v1987);
      ;
      const v1990 = v1856[stdlib.checkedBigNumberify('./index.rsh:240:13:spread', stdlib.UInt_max, '0')];
      const v1991 = stdlib.addressEq(v1852, v1453);
      const v1992 = stdlib.addressEq(v1852, v1479);
      const v1993 = v1991 ? true : v1992;
      stdlib.assert(v1993, {
        at: './index.rsh:252:24:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      stdlib.assert(v1481, {
        at: './index.rsh:253:24:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1994 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1990), null);
      const v1995 = stdlib.fromSome(v1994, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v1996 = stdlib.gt(v1995, stdlib.checkedBigNumberify('./index.rsh:254:71:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1996, {
        at: './index.rsh:254:24:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1997 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1852), null);
      const v1998 = stdlib.fromSome(v1997, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v1999 = v1988[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '1')];
      const v2000 = v1999[stdlib.checkedBigNumberify('./index.rsh:255:61:application', stdlib.UInt_max, '0')];
      const v2001 = stdlib.mul(v1998, v2000);
      const v2002 = stdlib.div(v2001, v1483);
      const v2003 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1990), null);
      const v2004 = stdlib.fromSome(v2003, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2005 = stdlib.add(v2004, v2002);
      await stdlib.mapSet(map1, v1990, v2005);
      const v2006 = true;
      const v2007 = await txn1.getOutput('aBT', 'v2006', ctc6, v2006);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v1856, v2007), {
          at: './index.rsh:241:13:application',
          fs: ['at ./index.rsh:241:13:application call to [unknown function] (defined at: ./index.rsh:241:13:function exp)', 'at ./index.rsh:259:20:application call to "res" (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v2013 = stdlib.add(v1483, v2002);
      const v6481 = v1479;
      const v6482 = v1480;
      const v6483 = true;
      const v6484 = v1482;
      const v6485 = v2013;
      const v6487 = v1988;
      return;
      
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc10,
    aST0_172: ctc9,
    addWL0_172: ctc10,
    cBT0_172: ctc11,
    cCM0_172: ctc10,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    remWL0_172: ctc10
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1546 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:100:72:application call to "runaST0_172" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1547 = v1546[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1549 = v1546[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1554 = stdlib.addressEq(v1547, v1453);
  const v1555 = stdlib.addressEq(v1547, v1479);
  const v1556 = v1554 ? true : v1555;
  stdlib.assert(v1556, {
    at: './index.rsh:152:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:29:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:100:72:application call to "runaST0_172" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1557 = stdlib.gt(v1549, stdlib.checkedBigNumberify('./index.rsh:153:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1557, {
    at: './index.rsh:153:23:application',
    fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:29:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:100:72:application call to "runaST0_172" (defined at: ./index.rsh:148:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1563 = ['aST0_172', v1546];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1563],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:157:30:decimal', stdlib.UInt_max, '0'), [[v1549, v1457], [stdlib.checkedBigNumberify('./index.rsh:157:45:decimal', stdlib.UInt_max, '0'), v1458]]],
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          const v2192 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '2')];
          ;
          const v2289 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2290 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2291 = stdlib.add(v2290, v2192);
          const v2294 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2295 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2296 = [v2291, v2294, v2295];
          const v2297 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2296);
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
          const v2335 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '1')];
          await stdlib.simMapSet(sim_r, 6, v2335, null);
          const v2342 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2335), null);
          const v2343 = stdlib.fromSome(v2342, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2344 = stdlib.add(v2343, v2192);
          await stdlib.simMapSet(sim_r, 0, v2335, v2344);
          const v2345 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2335), null);
          const v2346 = stdlib.fromSome(v2345, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v2347 = stdlib.add(v2346, v2192);
          await stdlib.simMapSet(sim_r, 3, v2335, v2347);
          const v2348 = true;
          const v2349 = await txn1.getOutput('aST', 'v2348', ctc6, v2348);
          
          const v2357 = stdlib.add(v1483, v2192);
          const v6544 = v1479;
          const v6545 = v1480;
          const v6546 = v1481;
          const v6547 = v1482;
          const v6548 = v2357;
          const v6550 = v2306;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      undefined /* setApiDetails */;
      const v2192 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '2')];
      ;
      const v2289 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2290 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2291 = stdlib.add(v2290, v2192);
      const v2294 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2295 = v2289[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2296 = [v2291, v2294, v2295];
      const v2297 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2296);
      ;
      const v2298 = v2297[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2299 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2303 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2304 = v2298[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2305 = [v2299, v2303, v2304];
      const v2306 = stdlib.Array_set(v2297, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2305);
      ;
      const v2334 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '0')];
      const v2335 = v2174[stdlib.checkedBigNumberify('./index.rsh:148:13:spread', stdlib.UInt_max, '1')];
      const v2337 = stdlib.addressEq(v2334, v1453);
      const v2338 = stdlib.addressEq(v2334, v1479);
      const v2339 = v2337 ? true : v2338;
      stdlib.assert(v2339, {
        at: './index.rsh:160:24:application',
        fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2340 = stdlib.gt(v2192, stdlib.checkedBigNumberify('./index.rsh:161:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2340, {
        at: './index.rsh:161:24:application',
        fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2335, null);
      const v2342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2335), null);
      const v2343 = stdlib.fromSome(v2342, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2344 = stdlib.add(v2343, v2192);
      await stdlib.mapSet(map0, v2335, v2344);
      const v2345 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2335), null);
      const v2346 = stdlib.fromSome(v2345, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v2347 = stdlib.add(v2346, v2192);
      await stdlib.mapSet(map3, v2335, v2347);
      const v2348 = true;
      const v2349 = await txn1.getOutput('aST', 'v2348', ctc6, v2348);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v2174, v2349), {
          at: './index.rsh:149:13:application',
          fs: ['at ./index.rsh:149:13:application call to [unknown function] (defined at: ./index.rsh:149:13:function exp)', 'at ./index.rsh:168:20:application call to "res" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2357 = stdlib.add(v1483, v2192);
      const v6544 = v1479;
      const v6545 = v1480;
      const v6546 = v1481;
      const v6547 = v1482;
      const v6548 = v2357;
      const v6550 = v2306;
      return;
      
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc9,
    aST0_172: ctc10,
    addWL0_172: ctc9,
    cBT0_172: ctc11,
    cCM0_172: ctc9,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    remWL0_172: ctc9
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1516 = ctc.selfAddress();
  const v1518 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:100:72:application call to "runaddWL0_172" (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1522 = stdlib.addressEq(v1516, v1453);
  const v1523 = stdlib.addressEq(v1516, v1479);
  const v1524 = v1522 ? true : v1523;
  stdlib.assert(v1524, {
    at: './index.rsh:115:23:application',
    fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:18:function exp)', 'at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:100:72:application call to "runaddWL0_172" (defined at: ./index.rsh:111:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1528 = ['addWL0_172', v1518];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1528],
    evt_cnt: 1,
    funcNum: 2,
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2607 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2608 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2612 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2613 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2614 = [v2608, v2612, v2613];
          const v2615 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2614);
          ;
          const v2616 = v2615[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2617 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2621 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2622 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2623 = [v2617, v2621, v2622];
          const v2624 = stdlib.Array_set(v2615, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2623);
          ;
          const v2678 = v2492[stdlib.checkedBigNumberify('./index.rsh:111:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2678, null);
          const v2683 = true;
          const v2684 = await txn1.getOutput('addWL', 'v2683', ctc6, v2683);
          
          const v6607 = v1479;
          const v6608 = v1480;
          const v6609 = v1481;
          const v6610 = v1482;
          const v6611 = v1483;
          const v6613 = v2624;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      undefined /* setApiDetails */;
      ;
      const v2607 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2608 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2612 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2613 = v2607[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2614 = [v2608, v2612, v2613];
      const v2615 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2614);
      ;
      const v2616 = v2615[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2617 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2621 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2622 = v2616[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2623 = [v2617, v2621, v2622];
      const v2624 = stdlib.Array_set(v2615, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2623);
      ;
      const v2678 = v2492[stdlib.checkedBigNumberify('./index.rsh:111:13:spread', stdlib.UInt_max, '0')];
      const v2679 = stdlib.addressEq(v1852, v1453);
      const v2680 = stdlib.addressEq(v1852, v1479);
      const v2681 = v2679 ? true : v2680;
      stdlib.assert(v2681, {
        at: './index.rsh:122:24:application',
        fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2678, null);
      const v2683 = true;
      const v2684 = await txn1.getOutput('addWL', 'v2683', ctc6, v2683);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v2492, v2684), {
          at: './index.rsh:112:13:application',
          fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:125:20:application call to "res" (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v6607 = v1479;
      const v6608 = v1480;
      const v6609 = v1481;
      const v6610 = v1482;
      const v6611 = v1483;
      const v6613 = v2624;
      return;
      
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc9,
    cCM0_172: ctc10,
    cST0_172: ctc9,
    dBT0_172: ctc12,
    remWL0_172: ctc10
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1599 = ctc.selfAddress();
  const v1601 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:100:72:application call to "runcBT0_172" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1603 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1599), null);
  let v1604;
  switch (v1603[0]) {
    case 'None': {
      const v1605 = v1603[1];
      v1604 = false;
      
      break;
      }
    case 'Some': {
      const v1606 = v1603[1];
      v1604 = true;
      
      break;
      }
    }
  stdlib.assert(v1604, {
    at: './index.rsh:220:23:application',
    fs: ['at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:17:function exp)', 'at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:100:72:application call to "runcBT0_172" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1607 = v1486[stdlib.checkedBigNumberify('./index.rsh:221:31:application', stdlib.UInt_max, '1')];
  const v1608 = v1607[stdlib.checkedBigNumberify('./index.rsh:221:31:application', stdlib.UInt_max, '0')];
  const v1609 = stdlib.gt(v1608, stdlib.checkedBigNumberify('./index.rsh:221:38:decimal', stdlib.UInt_max, '0'));
  const v1610 = stdlib.gt(v1483, stdlib.checkedBigNumberify('./index.rsh:221:51:decimal', stdlib.UInt_max, '0'));
  const v1611 = v1609 ? v1610 : false;
  const v1612 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1599), null);
  const v1613 = stdlib.fromSome(v1612, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
  const v1614 = stdlib.ge(v1483, v1613);
  const v1615 = v1611 ? v1614 : false;
  stdlib.assert(v1615, {
    at: './index.rsh:221:23:application',
    fs: ['at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:17:function exp)', 'at ./index.rsh:218:13:application call to [unknown function] (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:100:72:application call to "runcBT0_172" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1618 = ['cBT0_172', v1601];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1618],
    evt_cnt: 1,
    funcNum: 2,
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2925 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2926 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2930 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2931 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2932 = [v2926, v2930, v2931];
          const v2933 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2932);
          ;
          const v2934 = v2933[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2935 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v2939 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v2940 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v2941 = [v2935, v2939, v2940];
          const v2942 = stdlib.Array_set(v2933, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2941);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1852), null);
          const v3014 = v2942[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '1')];
          const v3015 = v3014[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '0')];
          const v3019 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1852), null);
          const v3020 = stdlib.fromSome(v3019, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3027 = stdlib.mul(v3020, v3015);
          const v3028 = stdlib.div(v3027, v1483);
          const v3034 = stdlib.sub(v3015, v3028);
          const v3037 = v3014[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1')];
          const v3038 = v3014[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '2')];
          const v3039 = [v3034, v3037, v3038];
          const v3040 = stdlib.Array_set(v2942, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1'), v3039);
          sim_r.txns.push({
            amt: v3028,
            kind: 'from',
            to: v1852,
            tok: v1458
            });
          const v3041 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1852), null);
          const v3042 = stdlib.fromSome(v3041, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3043 = stdlib.add(v3042, v3028);
          await stdlib.simMapSet(sim_r, 4, v1852, v3043);
          await stdlib.simMapSet(sim_r, 5, v1852, v1480);
          const v3044 = true;
          const v3045 = await txn1.getOutput('cBT', 'v3044', ctc6, v3044);
          
          const v6670 = v1479;
          const v6671 = v1480;
          const v6672 = v1481;
          const v6673 = v1482;
          const v6674 = v1483;
          const v6676 = v3040;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      undefined /* setApiDetails */;
      ;
      const v2925 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2926 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2930 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2931 = v2925[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2932 = [v2926, v2930, v2931];
      const v2933 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v2932);
      ;
      const v2934 = v2933[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2935 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v2939 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v2940 = v2934[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v2941 = [v2935, v2939, v2940];
      const v2942 = stdlib.Array_set(v2933, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v2941);
      ;
      const v3010 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1852), null);
      let v3011;
      switch (v3010[0]) {
        case 'None': {
          const v3012 = v3010[1];
          v3011 = false;
          
          break;
          }
        case 'Some': {
          const v3013 = v3010[1];
          v3011 = true;
          
          break;
          }
        }
      stdlib.assert(v3011, {
        at: './index.rsh:227:24:application',
        fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3014 = v2942[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '1')];
      const v3015 = v3014[stdlib.checkedBigNumberify('./index.rsh:228:32:application', stdlib.UInt_max, '0')];
      const v3016 = stdlib.gt(v3015, stdlib.checkedBigNumberify('./index.rsh:228:39:decimal', stdlib.UInt_max, '0'));
      const v3017 = stdlib.gt(v1483, stdlib.checkedBigNumberify('./index.rsh:228:52:decimal', stdlib.UInt_max, '0'));
      const v3018 = v3016 ? v3017 : false;
      const v3019 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1852), null);
      const v3020 = stdlib.fromSome(v3019, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3021 = stdlib.ge(v1483, v3020);
      const v3022 = v3018 ? v3021 : false;
      stdlib.assert(v3022, {
        at: './index.rsh:228:24:application',
        fs: ['at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v3027 = stdlib.mul(v3020, v3015);
      const v3028 = stdlib.div(v3027, v1483);
      const v3034 = stdlib.sub(v3015, v3028);
      const v3037 = v3014[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1')];
      const v3038 = v3014[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '2')];
      const v3039 = [v3034, v3037, v3038];
      const v3040 = stdlib.Array_set(v2942, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '1'), v3039);
      ;
      const v3041 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1852), null);
      const v3042 = stdlib.fromSome(v3041, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3043 = stdlib.add(v3042, v3028);
      await stdlib.mapSet(map4, v1852, v3043);
      await stdlib.mapSet(map5, v1852, v1480);
      const v3044 = true;
      const v3045 = await txn1.getOutput('cBT', 'v3044', ctc6, v3044);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v2810, v3045), {
          at: './index.rsh:216:13:application',
          fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:235:20:application call to "res" (defined at: ./index.rsh:226:13:function exp)', 'at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v6670 = v1479;
      const v6671 = v1480;
      const v6672 = v1481;
      const v6673 = v1482;
      const v6674 = v1483;
      const v6676 = v3040;
      return;
      
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc9,
    aST0_172: ctc10,
    addWL0_172: ctc9,
    cBT0_172: ctc11,
    cCM0_172: ctc9,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    remWL0_172: ctc9
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1638 = ctc.selfAddress();
  const v1640 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)', 'at ./index.rsh:100:72:application call to "runcCM0_172" (defined at: ./index.rsh:263:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1644 = stdlib.addressEq(v1638, v1453);
  const v1645 = stdlib.addressEq(v1638, v1479);
  const v1646 = v1644 ? true : v1645;
  stdlib.assert(v1646, {
    at: './index.rsh:267:23:application',
    fs: ['at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:21:function exp)', 'at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)', 'at ./index.rsh:100:72:application call to "runcCM0_172" (defined at: ./index.rsh:263:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1650 = ['cCM0_172', v1640];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1650],
    evt_cnt: 1,
    funcNum: 2,
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v3243 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3244 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3248 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3249 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3250 = [v3244, v3248, v3249];
          const v3251 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3250);
          ;
          const v3252 = v3251[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3253 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3257 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3258 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3259 = [v3253, v3257, v3258];
          const v3260 = stdlib.Array_set(v3251, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3259);
          ;
          const v3370 = v3128[stdlib.checkedBigNumberify('./index.rsh:263:13:spread', stdlib.UInt_max, '0')];
          const v3374 = true;
          const v3375 = await txn1.getOutput('cCM', 'v3374', ctc6, v3374);
          
          const v6733 = v3370;
          const v6734 = v1480;
          const v6735 = v1481;
          const v6736 = v1482;
          const v6737 = v1483;
          const v6739 = v3260;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      undefined /* setApiDetails */;
      ;
      const v3243 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3244 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3248 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3249 = v3243[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3250 = [v3244, v3248, v3249];
      const v3251 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3250);
      ;
      const v3252 = v3251[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3253 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3257 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3258 = v3252[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3259 = [v3253, v3257, v3258];
      const v3260 = stdlib.Array_set(v3251, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3259);
      ;
      const v3370 = v3128[stdlib.checkedBigNumberify('./index.rsh:263:13:spread', stdlib.UInt_max, '0')];
      const v3371 = stdlib.addressEq(v1852, v1453);
      const v3372 = stdlib.addressEq(v1852, v1479);
      const v3373 = v3371 ? true : v3372;
      stdlib.assert(v3373, {
        at: './index.rsh:274:24:application',
        fs: ['at ./index.rsh:273:13:application call to [unknown function] (defined at: ./index.rsh:273:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v3374 = true;
      const v3375 = await txn1.getOutput('cCM', 'v3374', ctc6, v3374);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v3128, v3375), {
          at: './index.rsh:264:13:application',
          fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:276:20:application call to "res" (defined at: ./index.rsh:273:13:function exp)', 'at ./index.rsh:273:13:application call to [unknown function] (defined at: ./index.rsh:273:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6733 = v3370;
      const v6734 = v1480;
      const v6735 = v1481;
      const v6736 = v1482;
      const v6737 = v1483;
      const v6739 = v3260;
      return;
      
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc9,
    cCM0_172: ctc10,
    cST0_172: ctc9,
    dBT0_172: ctc12,
    remWL0_172: ctc10
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1565 = ctc.selfAddress();
  const v1567 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:100:72:application call to "runcST0_172" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1569 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1565), null);
  const v1570 = stdlib.fromSome(v1569, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
  const v1571 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1565), null);
  let v1572;
  switch (v1571[0]) {
    case 'None': {
      const v1573 = v1571[1];
      v1572 = false;
      
      break;
      }
    case 'Some': {
      const v1574 = v1571[1];
      v1572 = true;
      
      break;
      }
    }
  stdlib.assert(v1572, {
    at: './index.rsh:178:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:17:function exp)', 'at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:100:72:application call to "runcST0_172" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1575 = stdlib.gt(v1570, stdlib.checkedBigNumberify('./index.rsh:179:30:decimal', stdlib.UInt_max, '0'));
  const v1576 = v1486[stdlib.checkedBigNumberify('./index.rsh:179:42:application', stdlib.UInt_max, '0')];
  const v1577 = v1576[stdlib.checkedBigNumberify('./index.rsh:179:42:application', stdlib.UInt_max, '0')];
  const v1578 = stdlib.gt(v1577, v1570);
  const v1579 = v1575 ? v1578 : false;
  stdlib.assert(v1579, {
    at: './index.rsh:179:23:application',
    fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:17:function exp)', 'at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:100:72:application call to "runcST0_172" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1582 = ['cST0_172', v1567];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1582],
    evt_cnt: 1,
    funcNum: 2,
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v3561 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3562 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3566 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3567 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3568 = [v3562, v3566, v3567];
          const v3569 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3568);
          ;
          const v3570 = v3569[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3571 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3575 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3576 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3577 = [v3571, v3575, v3576];
          const v3578 = stdlib.Array_set(v3569, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3577);
          ;
          const v3701 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1852), null);
          const v3702 = stdlib.fromSome(v3701, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1852), null);
          const v3708 = v3578[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3709 = v3708[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
          const v3717 = stdlib.sub(v3709, v3702);
          const v3720 = v3708[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '1')];
          const v3721 = v3708[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '2')];
          const v3722 = [v3717, v3720, v3721];
          const v3723 = stdlib.Array_set(v3578, stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '0'), v3722);
          sim_r.txns.push({
            amt: v3702,
            kind: 'from',
            to: v1852,
            tok: v1457
            });
          await stdlib.simMapSet(sim_r, 0, v1852, stdlib.checkedBigNumberify('./index.rsh:190:33:decimal', stdlib.UInt_max, '0'));
          const v3724 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1852), null);
          const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
          const v3726 = stdlib.add(v3725, v3702);
          await stdlib.simMapSet(sim_r, 2, v1852, v3726);
          const v3727 = true;
          const v3728 = await txn1.getOutput('cST', 'v3727', ctc6, v3727);
          
          const v6796 = v1479;
          const v6797 = v1480;
          const v6798 = v1481;
          const v6799 = v1482;
          const v6800 = v1483;
          const v6802 = v3723;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      undefined /* setApiDetails */;
      ;
      const v3561 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3562 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3566 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3567 = v3561[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3568 = [v3562, v3566, v3567];
      const v3569 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3568);
      ;
      const v3570 = v3569[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3571 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3575 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3576 = v3570[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3577 = [v3571, v3575, v3576];
      const v3578 = stdlib.Array_set(v3569, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3577);
      ;
      const v3701 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1852), null);
      const v3702 = stdlib.fromSome(v3701, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3703 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1852), null);
      let v3704;
      switch (v3703[0]) {
        case 'None': {
          const v3705 = v3703[1];
          v3704 = false;
          
          break;
          }
        case 'Some': {
          const v3706 = v3703[1];
          v3704 = true;
          
          break;
          }
        }
      stdlib.assert(v3704, {
        at: './index.rsh:186:24:application',
        fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3707 = stdlib.gt(v3702, stdlib.checkedBigNumberify('./index.rsh:187:31:decimal', stdlib.UInt_max, '0'));
      const v3708 = v3578[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
      const v3709 = v3708[stdlib.checkedBigNumberify('./index.rsh:187:43:application', stdlib.UInt_max, '0')];
      const v3710 = stdlib.gt(v3709, v3702);
      const v3711 = v3707 ? v3710 : false;
      stdlib.assert(v3711, {
        at: './index.rsh:187:24:application',
        fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3717 = stdlib.sub(v3709, v3702);
      const v3720 = v3708[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '1')];
      const v3721 = v3708[stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '2')];
      const v3722 = [v3717, v3720, v3721];
      const v3723 = stdlib.Array_set(v3578, stdlib.checkedBigNumberify('./index.rsh:189:44:application', stdlib.UInt_max, '0'), v3722);
      ;
      await stdlib.mapSet(map0, v1852, stdlib.checkedBigNumberify('./index.rsh:190:33:decimal', stdlib.UInt_max, '0'));
      const v3724 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1852), null);
      const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:86:39:decimal', stdlib.UInt_max, '0'));
      const v3726 = stdlib.add(v3725, v3702);
      await stdlib.mapSet(map2, v1852, v3726);
      const v3727 = true;
      const v3728 = await txn1.getOutput('cST', 'v3727', ctc6, v3727);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v3446, v3728), {
          at: './index.rsh:174:13:application',
          fs: ['at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:13:function exp)', 'at ./index.rsh:192:20:application call to "res" (defined at: ./index.rsh:184:13:function exp)', 'at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v6796 = v1479;
      const v6797 = v1480;
      const v6798 = v1481;
      const v6799 = v1482;
      const v6800 = v1483;
      const v6802 = v3723;
      return;
      
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc12,
    cCM0_172: ctc10,
    cST0_172: ctc12,
    dBT0_172: ctc9,
    remWL0_172: ctc10
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1584 = ctc.selfAddress();
  const v1586 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_172" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1590 = stdlib.addressEq(v1584, v1453);
  const v1591 = stdlib.addressEq(v1584, v1479);
  const v1592 = v1590 ? true : v1591;
  stdlib.assert(v1592, {
    at: './index.rsh:200:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_172" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1593 = stdlib.gt(v1587, stdlib.checkedBigNumberify('./index.rsh:201:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1593, {
    at: './index.rsh:201:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_172" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  stdlib.assert(v1481, {
    at: './index.rsh:202:23:application',
    fs: ['at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:20:function exp)', 'at ./index.rsh:199:13:application call to [unknown function] (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:100:72:application call to "rundBT0_172" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1597 = ['dBT0_172', v1586];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1597],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:24:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'), v1457], [v1587, v1458]]],
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3835 = v3764[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3879 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3880 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3884 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3885 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3886 = [v3880, v3884, v3885];
          const v3887 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3886);
          ;
          const v3888 = v3887[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3889 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v3890 = stdlib.add(v3889, v3835);
          const v3893 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v3894 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v3895 = [v3890, v3893, v3894];
          const v3896 = stdlib.Array_set(v3887, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3895);
          sim_r.txns.push({
            amt: v3835,
            kind: 'to',
            tok: v1458
            });
          const v4058 = true;
          const v4059 = await txn1.getOutput('dBT', 'v4058', ctc6, v4058);
          
          const v4065 = stdlib.add(v1482, v3835);
          const v4066 = stdlib.add(v1480, stdlib.checkedBigNumberify('./index.rsh:212:76:decimal', stdlib.UInt_max, '1'));
          const v6859 = v1479;
          const v6860 = v4066;
          const v6861 = true;
          const v6862 = v4065;
          const v6863 = v1483;
          const v6865 = v3896;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      undefined /* setApiDetails */;
      const v3835 = v3764[stdlib.checkedBigNumberify('./index.rsh:196:13:spread', stdlib.UInt_max, '0')];
      ;
      const v3879 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3880 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3884 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3885 = v3879[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3886 = [v3880, v3884, v3885];
      const v3887 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v3886);
      ;
      const v3888 = v3887[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3889 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v3890 = stdlib.add(v3889, v3835);
      const v3893 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v3894 = v3888[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v3895 = [v3890, v3893, v3894];
      const v3896 = stdlib.Array_set(v3887, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v3895);
      ;
      const v4054 = stdlib.addressEq(v1852, v1453);
      const v4055 = stdlib.addressEq(v1852, v1479);
      const v4056 = v4054 ? true : v4055;
      stdlib.assert(v4056, {
        at: './index.rsh:208:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4057 = stdlib.gt(v3835, stdlib.checkedBigNumberify('./index.rsh:209:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4057, {
        at: './index.rsh:209:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      stdlib.assert(v1481, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v4058 = true;
      const v4059 = await txn1.getOutput('dBT', 'v4058', ctc6, v4058);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v3764, v4059), {
          at: './index.rsh:197:13:application',
          fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:211:20:application call to "res" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v4065 = stdlib.add(v1482, v3835);
      const v4066 = stdlib.add(v1480, stdlib.checkedBigNumberify('./index.rsh:212:76:decimal', stdlib.UInt_max, '1'));
      const v6859 = v1479;
      const v6860 = v4066;
      const v6861 = true;
      const v6862 = v4065;
      const v6863 = v1483;
      const v6865 = v3896;
      return;
      
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
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
    aBT0_172: ctc9,
    aST0_172: ctc10,
    addWL0_172: ctc9,
    cBT0_172: ctc11,
    cCM0_172: ctc9,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    remWL0_172: ctc9
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
  
  
  const [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1530 = ctc.selfAddress();
  const v1532 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:100:72:application call to "runremWL0_172" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1536 = stdlib.addressEq(v1530, v1453);
  const v1537 = stdlib.addressEq(v1530, v1479);
  const v1538 = v1536 ? true : v1537;
  stdlib.assert(v1538, {
    at: './index.rsh:133:23:application',
    fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:18:function exp)', 'at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:100:72:application call to "runremWL0_172" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:100:72:application call to [unknown function] (defined at: ./index.rsh:100:72:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1542 = ['remWL0_172', v1532];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1457, v1458, v1479, v1480, v1481, v1482, v1483, v1486, v1542],
    evt_cnt: 1,
    funcNum: 2,
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
      
      const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
      
      switch (v1853[0]) {
        case 'aBT0_172': {
          const v1856 = v1853[1];
          
          break;
          }
        case 'aST0_172': {
          const v2174 = v1853[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2492 = v1853[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2810 = v1853[1];
          
          break;
          }
        case 'cCM0_172': {
          const v3128 = v1853[1];
          
          break;
          }
        case 'cST0_172': {
          const v3446 = v1853[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3764 = v1853[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4082 = v1853[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v4197 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4202 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4203 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4204 = [v4198, v4202, v4203];
          const v4205 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v4204);
          ;
          const v4206 = v4205[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4207 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
          const v4211 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
          const v4212 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
          const v4213 = [v4207, v4211, v4212];
          const v4214 = stdlib.Array_set(v4205, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v4213);
          ;
          const v4387 = v4082[stdlib.checkedBigNumberify('./index.rsh:129:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v4387, undefined /* Nothing */);
          const v4392 = true;
          const v4393 = await txn1.getOutput('remWL', 'v4392', ctc6, v4392);
          
          const v6922 = v1479;
          const v6923 = v1480;
          const v6924 = v1481;
          const v6925 = v1482;
          const v6926 = v1483;
          const v6928 = v4214;
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
  const {data: [v1853], secs: v1855, time: v1854, didSend: v878, from: v1852 } = txn1;
  switch (v1853[0]) {
    case 'aBT0_172': {
      const v1856 = v1853[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v2174 = v1853[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2492 = v1853[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2810 = v1853[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v3128 = v1853[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3446 = v1853[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3764 = v1853[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4082 = v1853[1];
      undefined /* setApiDetails */;
      ;
      const v4197 = v1486[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v4202 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v4203 = v4197[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v4204 = [v4198, v4202, v4203];
      const v4205 = stdlib.Array_set(v1486, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0'), v4204);
      ;
      const v4206 = v4205[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v4207 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '0')];
      const v4211 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1')];
      const v4212 = v4206[stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '2')];
      const v4213 = [v4207, v4211, v4212];
      const v4214 = stdlib.Array_set(v4205, stdlib.checkedBigNumberify('./index.rsh:100:72:dot', stdlib.UInt_max, '1'), v4213);
      ;
      const v4387 = v4082[stdlib.checkedBigNumberify('./index.rsh:129:13:spread', stdlib.UInt_max, '0')];
      const v4388 = stdlib.addressEq(v1852, v1453);
      const v4389 = stdlib.addressEq(v1852, v1479);
      const v4390 = v4388 ? true : v4389;
      stdlib.assert(v4390, {
        at: './index.rsh:140:24:application',
        fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v4387, undefined /* Nothing */);
      const v4392 = true;
      const v4393 = await txn1.getOutput('remWL', 'v4392', ctc6, v4392);
      if (v878) {
        stdlib.protect(ctc0, await interact.out(v4082, v4393), {
          at: './index.rsh:130:13:application',
          fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:13:function exp)', 'at ./index.rsh:143:20:application call to "res" (defined at: ./index.rsh:139:13:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v6922 = v1479;
      const v6923 = v1480;
      const v6924 = v1481;
      const v6925 = v1482;
      const v6926 = v1483;
      const v6928 = v4214;
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
  appApproval: `BiAfAAEDKAQINqCNBjfd0eGYCduqqNQM3e7QoA7YjpngDkC03LWsDevmhNMJsILfsAxInPiDiAK8rcerCM3F1YcJ+a70lQGwnePdAQL///////////8BIFBZYQcFJgMBAQEAACI1ADEYQQsTKmRJIls1ASEFWzUCMRkjEkEACjEAKSEIr2ZCCt82GgAXSUECASI1BCM1BkkhCQxAARxJIQoMQACpSSELDEAAMkkhDAxAABUhDBJENhoBNf+AAQc0/1Alr1BCAkchCxJENhoBNf+AAQY0/1AhDa9QQgIxSSEODEAAUSEOEkQ0ASQSRDYaATX/IjT/iAqPVxIJSTX+I1s0/iJVTRYiNP+ICntXJAlJNf4jWzT+IlVNFlAiNP+ICmZXLQlJNf4jWzT+IlVNFlA1B0IKQSEKEkQ2GgE2GgJQNhoDUDX/KDT/UEIBwUkhDwxAADRJIRAMQAAZIRASRDQBJBJEKWQoZFBJNQNXWAE1B0IKAiEPEkQqNf+AAQM0/1AhEa9QQgGGIQkSRDQBJBJENhoBiAnwVzYBSTX+IlVAAAYiNf9CAAYjNf9CAAA0/xZRBwg1B0IJvUkhEgxAAF1JIRMMQABBSSEUDEAAJSEUEkQ0ASQSRClkKGRQSTUDV2EINANXWQhQNANXUAhQNQdCCYMhExJENhoBNf+AAQI0/1Alr1BCAQYhEhJENhoBNf+AAQQ0/1Alr1BCAPFJIRUMQABXSSEWDEAAFCEWEkQqNf+AAQU0/1AhEa9QQgDPIRUSRDQBJBJENhoBNf8iNP+ICTRXAAlJNf4jWzT+IlVNFiI0/4gJIFcJCUk1/iNbNP4iVU0WUDUHQgj7gd/2hgsSRDYaATX/KTT/UCWvUEIAfTYaAhc1BDYaAzYaARdJIRcMQAdWSSQMQABiJBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDVwAgNf+ABKdlxLSwMgYhGA9ENP8xABJENP80AyEZWzQDJVs0A1cwIDQDIRpbNANXWAEXNAMhG1s0AyEcWzIGNANXaSJCB9JIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSklXACA1/yEZWzX+JVs1/VcwIDX8IRpbNftXWAEXNfohG1s1+SEcWzX4V2kiNfdJNQU19oAEmMT3szT2ULAyBiEYDEQ09iJVSSEEDEACyUmBBgxAAR1JIR0MQACGIR0SRDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jEANP8SMQA0/BIRRDT1KTT1iAe8IiEGTFZmgAkAAAAAAAARKAGwKDUHNP80/jT9NPw0+zT6NPk0+DIGNPNXABE08lcACDTyVwgIUDTyVxABUFBCBtNINPZXAQg19TT1FzX0NPdXABFJNfNXAAg081cICFA081cQAVA091cREVA18jTyVxERNfE09DT9iAdoMQA0/xIxADT8EhFENPQiDUQ0+kSACQAAAAAAAA/aAbAoNQc0/zT+NP00/DT7IwgjNPk09Ag0+DIGNPJXABE08SJbNPQIFjTxVwgIUDTxVxABUFBCBkNJIR4MQAEpSDT3VwARSTX1VwAINPVXCAhQNPVXEAFQNPdXERFQNfQ09FcRETXzNPRXABE081cACDTzVwgIUDTzVxABUFA18iIxAIgGnlcACUk18CNbNPAiVU018TEAiAaKVzYBSTXvIlVAAAYiNfBCAAYjNfBCAAA08EQ08lcAEUk17yJbNe408SINNO408Q0QRLEisgE08bISIQSyEDEAshQ0/rIRszEAKTEAiAY8gAkBAAAAAAAAAAA17VcJLjTtTFBmMQApMQCIBh8oIjEAiAYYVxIJSTXtI1s07SJVTTTxCBZQNe1JVwASNO1QTFcbHFBmgAkAAAAAAAAOjwGwKDUHNP80/jT9NPw0+zT6NPk0+DIGNO408QkWNO9XCAhQNO9XEAFQNPJXERFQQgUTSDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jEANP8SMQA0/BIRRIAJAAAAAAAADS4BsCg1BzT/NP40/TT1NPs0+jT5NPgyBjTzVwARNPJXAAg08lcICFA08lcQAVBQQgSeSSEXDEABwEkkDEABN0g091cAEUk19VcACDT1VwgIUDT1VxABUDT3VxERUDX0NPRXERE18zT0VwARNPNXAAg081cICFA081cQAVBQNfIxAIgE9Fc2AUk18CJVQAAGIjXxQgAGIzXxQgAANPFENPJXERFJNfAiWzXvIjEAiATIVxsJSTXtI1s07SJVTTXuNO8iDTT4Ig0QNPg07g8QRDTuNO8LNPgKNe2xIrIBNO2yEiEEshAxALIUNP2yEbMxACkxAIgEgigiMQCIBHtXJAlJNewjWzTsIlVNNO0IFlA17ElXACQ07FBMVy0KUGYxACkxAIgEUig0+xZQNexJVwAtNOxQTFc2AVBmgAkAAAAAAAAL5AGwKDUHNP80/jT9NPw0+zT6NPk0+DIGNPJXABE07zTtCRY08FcICFA08FcQAVBQQgNaSDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDT3VxERUDXzNPNXERE18jEANP8SMQA0/BIRRDT1KTT1iAPAIyEGTFZmgAkAAAAAAAAKewGwKDUHNP80/jT9NPw0+zT6NPk0+DIGNPNXABE08lcACDTyVwgIUDTyVxABUFBCAtdJIwxAAQVINPZXAUg19TT1IQ1bNfQ091cAEUk18yJbNPQIFjTzVwgIUDTzVxABUDT3VxERUDXyNPQ0/ogDaDTyVxERNfE09VcAIDXwNPVXICA17zTwNP8SNPA0/BIRRDT0Ig1ENO8pNO+IAxMjIQZMVmY07yk074gDBSgiNO+IAv5XAAlJNe4jWzTuIlVNNPQIFlA17lcJLjTuTFBmNO8pNO+IAtooIjTviALTVxsJSTXuI1s07iJVTTT0CBZQNe5JVwAbNO5QTFckE1BmgAkAAAAAAAAJLAGwKDUHNP80/jT9NPw0+zT6NPk0+DT0CDIGNPJXABE08VcACDTxVwgIUDTxVxABUFBCAcxINPZXASA19TT3VwARSTX0VwAINPRXCAhQNPRXEAFQNPdXERFQNfM081cRETXyNPNXABE08lcACDTyVwgIUDTyVxABUFA18TT1NfAxADT/EjEANPwSEUQ0+kQiNPCIAhRXGwlJNe8jWzTvIlVNIg1EIjEAiAH+VxsJSTXuI1s07iJVTTTxVxERIlsLNPgKNe808Ck08IgB3CgiNPCIAdVXCQlJNe4jWzTuIlVNNO8IFlA17klXAAk07lBMVxIlUGaACQAAAAAAAAfWAbAoNQc0/zT+NP00/DT7IzT5NPg07wgyBjTxQgDkIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfyBqQFbNfuABGcVpXg0/1A0/hZRBwhQNP1QNPwWUDT7FlCwIQeIAUWBEa9JNfpJUDX5NPw0+xNENPlXABE1+CEFrzT4VwgIUDT4VxABUDT5VxERUDX3IQeIARKxIrIBIrISIQSyEDIKshQ0/LIRszT3VxERNfYhB4gA8rEisgEishIhBLIQMgqyFDT7shGzMQA0/DT7NP0iNP4iIjIGNPdXABEhBa809lcICFA09lcQAVBQQgAANf81/jX9Nfw1+zX6Nfk1+DX3STX2NPcWUDT4FlA0+VA0+hZQNPsWUQcIUDT8FlA0/RZQNP9QKUsBVwB/ZyhLAVd/DGdIJDUBMgY1AkIAHDEZIR4SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCK+JKWKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
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
                    "name": "_aBT0_172",
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
                    "name": "_aST0_172",
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
                    "name": "_addWL0_172",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_172",
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
                    "name": "_cCM0_172",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_172",
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
                    "name": "_dBT0_172",
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
                    "name": "_remWL0_172",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1853",
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
    "name": "_reach_oe_v2006",
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
    "name": "_reach_oe_v2348",
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
    "name": "_reach_oe_v2683",
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
    "name": "_reach_oe_v3044",
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
    "name": "_reach_oe_v3374",
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
    "name": "_reach_oe_v3727",
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
    "name": "_reach_oe_v4058",
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
    "name": "_reach_oe_v4392",
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
                    "name": "_aBT0_172",
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
                    "name": "_aST0_172",
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
                    "name": "_addWL0_172",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_172",
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
                    "name": "_cCM0_172",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_172",
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
                    "name": "_dBT0_172",
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
                    "name": "_remWL0_172",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1853",
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
        "name": "v6929",
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
        "name": "v6933",
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
        "name": "v6935",
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
  Bytecode: `0x608060405260405162004b4638038062004b468339810160408190526200002691620006c2565b6000805543600355620000386200038d565b7fd127a3e17fe6f724f12ef4acd6cdf0ca7724d0fba65a0f126f1147692c404feb33836040516200006b929190620007a3565b60405180910390a18051600090819052815160209081018290528251604001919091528151818301805191909152825190518201528201516080810151606090910151620000d9916001600160a01b03918216911614620000ce576001620000d1565b60005b600c62000214565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011b92906200023e565b60608201908152608082018051600090528151602090810151810151825182015291519091015160409081015191519115159101526200015e3415600d62000214565b6200016862000418565b80513390526020808401805160609081015184516001600160a01b0391821690850152825160809081015186519083166040918201528451810151868801805191909416905282516000908701819052945190950151825190151595019490945280518201839052805184019290925290514360a09091015283015190830151620001f791906001906200023e565b602082015160c001526200020b81620002c1565b5050506200098e565b816200023a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002486200044a565b60005b60028110156200029e578481600281106200026a576200026a62000840565b602002015182826002811062000284576200028462000840565b602002015280620002958162000856565b9150506200024b565b5081818460028110620002b557620002b562000840565b60200201529392505050565b620002cb62000497565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301516080808701919091528451830151151560a087015284519091015160c08087019190915284519091015160e086015292519092015161010084015260036000554360015590516200036291839101620008c6565b60405160208183030381529060405260029080519060200190620003889291906200050b565b505050565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101620003c16200044a565b81526040805160608101825260008082526020828101829052928201529101908152602001620003f06200044a565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620004136200059a565b60405180604001604052806002905b62000480604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004595790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001620004136200044a565b828054620005199062000951565b90600052602060002090601f0160209004810192826200053d576000855562000588565b82601f106200055857805160ff191683800117855562000588565b8280016001018555821562000588579182015b82811115620005885782518255916020019190600101906200056b565b5062000596929150620005e4565b5090565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001620004136200044a565b5b80821115620005965760008155600101620005e5565b604080519081016001600160401b03811182821017156200062c57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200062c57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200062c57634e487b7160e01b600052604160045260246000fd5b80518015158114620006a557600080fd5b919050565b80516001600160a01b0381168114620006a557600080fd5b6000818303610120811215620006d757600080fd5b620006e1620005fb565b83518152601f198201915061010080831215620006fd57600080fd5b6200070762000632565b60808412156200071657600080fd5b6200072062000663565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200075860a0870162000694565b60208201526200076b60c08701620006aa565b60408201526200077e60e08701620006aa565b606082015262000790828701620006aa565b6080820152602083015250949350505050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620008226101008501836001600160a01b03169052565b608001516001600160a01b0381166101208501529050509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200087957634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b6002811015620008c057815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000884565b50505050565b81516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151918216908301526101c0820190506080830151608083015260a08301516200091f60a084018215159052565b5060c083015160c083015260e083015160e083015261010080840151620009498285018262000880565b505092915050565b600181811c908216806200096657607f821691505b602082108114156200098857634e487b7160e01b600052602260045260246000fd5b50919050565b6141a8806200099e6000396000f3fe60806040526004361061015b5760003560e01c806373b4522c116100c8578063ab53f2c611610084578063cadc2e7a11610061578063cadc2e7a146103d5578063d1ad1a37146103f5578063dc01fb9d1461040a578063e9b451af1461042a57005b8063ab53f2c614610372578063abe9f98d14610395578063acf0cc22146103b557005b806373b4522c146102f157806374fcef1214610304578063817d57f3146103175780638323075714610337578063a153a9bd1461034c578063aa7601b51461035f57005b80632080ea1c116101175780632080ea1c146102465780632f42e509146102735780633bc5b7bf146102865780634acdd6cc146102a657806359cac3a4146102ae5780637333bd09146102e957005b806306dc92ff14610164578063125f48e41461019a57806312822a75146101bd5780631e3f5f07146101d25780631e93b0f1146101e55780631fa8b02f1461020457005b3661016257005b005b34801561017057600080fd5b5061018461017f366004613927565b61043d565b604051610191919061396a565b60405180910390f35b6101ad6101a8366004613927565b610469565b6040519015158152602001610191565b3480156101c957600080fd5b506101ad6104ca565b6101ad6101e036600461399a565b610590565b3480156101f157600080fd5b506003545b604051908152602001610191565b34801561021057600080fd5b5061022461021f366004613927565b610606565b6040805182518152602080840151908201529181015190820152606001610191565b34801561025257600080fd5b50610266610261366004613927565b6107cb565b60405161019191906139db565b6101ad610281366004613927565b6107f1565b34801561029257600080fd5b506101846102a1366004613927565b61084e565b6101ad610874565b3480156102ba57600080fd5b506102ce6102c9366004613927565b6108c1565b60408051825181526020928301519281019290925201610191565b6101ad610a2d565b6101626102ff366004613a0d565b610a7a565b6101ad610312366004613927565b610a9e565b34801561032357600080fd5b50610184610332366004613927565b610aff565b34801561034357600080fd5b506001546101f6565b6101ad61035a366004613927565b610b25565b61016261036d366004613a25565b610b87565b34801561037e57600080fd5b50610387610ba7565b604051610191929190613a64565b3480156103a157600080fd5b506101ad6103b0366004613927565b610c44565b3480156103c157600080fd5b506101846103d0366004613927565b610d6b565b3480156103e157600080fd5b506101846103f0366004613927565b610d91565b34801561040157600080fd5b50610224610db7565b34801561041657600080fd5b50610184610425366004613927565b610ee0565b6101ad610438366004613a9e565b610f06565b604080516060810182526000808252602082018190529181019190915261046382610f5e565b92915050565b6000610473613251565b61047b613295565b6104836132b4565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526104be8284611030565b50506040015192915050565b600060036000541415610581576000600280546104e690613ab7565b80601f016020809104026020016040519081016040528092919081815260200182805461051290613ab7565b801561055f5780601f106105345761010080835404028352916020019161055f565b820191906000526020600020905b81548152906001019060200180831161054257829003601f168201915b50505050508060200190518101906105779190613c42565b60a0015192915050565b61058d6000600861296e565b90565b600061059a613251565b6105a2613295565b6105aa6132b4565b604080516060810182526001600160a01b038981168252881660208201528082018790529082015260018181905250604080516020808201909252828152908301526105f68284611030565b50506020015190505b9392505050565b61062a60405180606001604052806000815260200160008152602001600081525090565b600360005414156107ba5760006002805461064490613ab7565b80601f016020809104026020016040519081016040528092919081815260200182805461067090613ab7565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b50505050508060200190518101906106d59190613c42565b90506106fe60408051608081018252600060208201818152928201819052606082015290815290565b600161070985612994565b51600181111561071b5761071b613944565b14610727576000610735565b61073084612994565b604001515b815152600161074385612a21565b51600181111561075557610755613944565b1461076157600061076f565b61076a84612a21565b604001515b815160200152600161078085612aae565b51600181111561079257610792613944565b1461079e5760006107ac565b6107a784612aae565b604001515b815160400152519392505050565b6107c66000600a61296e565b919050565b604080516060810182526000808252602082018190529181019190915261046382612b3b565b60006107fb613251565b610803613295565b61080b6132b4565b60408051602080820183526001600160a01b0388168252838101919091526000835281518082019092528282528301526108458284611030565b50505192915050565b604080516060810182526000808252602082018190529181019190915261046382612c04565b600061087e613251565b610886613295565b61088e6132b4565b600060c082015260058152604080516020808201909252828152908301526108b68284611030565b505060a00151919050565b604080518082019091526000808252602082015260036000541415610a21576000600280546108ef90613ab7565b80601f016020809104026020016040519081016040528092919081815260200182805461091b90613ab7565b80156109685780601f1061093d57610100808354040283529160200191610968565b820191906000526020600020905b81548152906001019060200180831161094b57829003601f168201915b50505050508060200190518101906109809190613c42565b90506109a2604080516060810182526000602082018181529282015290815290565b60016109ad85612c04565b5160018111156109bf576109bf613944565b146109cb5760006109d9565b6109d484612c04565b604001515b81515260016109e785612c91565b5160018111156109f9576109f9613944565b14610a05576000610a13565b610a0e84612c91565b604001515b815160200152519392505050565b6107c66000600761296e565b6000610a37613251565b610a3f613295565b610a476132b4565b600060808201526003815260408051602080820190925282815290830152610a6f8284611030565b505060600151919050565b610a82613251565b610a9a610a9436849003840184613cef565b82612d1e565b5050565b6000610aa8613251565b610ab0613295565b610ab86132b4565b60408051602080820183526001600160a01b038816825260a0840191909152600483528151808201909252828252830152610af38284611030565b50506080015192915050565b604080516060810182526000808252602082018190529181019190915261046382612994565b6000610b2f613251565b610b37613295565b610b3f6132b4565b60408051602080820183526001600160a01b0388168252610100840191909152600783528151808201909252828252830152610b7b8284611030565b505060e0015192915050565b610b8f613251565b610a9a610ba136849003840184613dd7565b82611030565b600060606000546002808054610bbc90613ab7565b80601f0160208091040260200160405190810160405280929190818152602001828054610be890613ab7565b8015610c355780601f10610c0a57610100808354040283529160200191610c35565b820191906000526020600020905b815481529060010190602001808311610c1857829003601f168201915b50505050509050915091509091565b600060036000541415610d5f57600060028054610c6090613ab7565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8c90613ab7565b8015610cd95780601f10610cae57610100808354040283529160200191610cd9565b820191906000526020600020905b815481529060010190602001808311610cbc57829003601f168201915b5050505050806020019051810190610cf19190613c42565b6040805160208101909152600081529091506000610d0e85612b3b565b516001811115610d2057610d20613944565b1415610d2f5760008152610d57565b6001610d3a85612b3b565b516001811115610d4c57610d4c613944565b1415610d5757600181525b519392505050565b6107c66000600b61296e565b604080516060810182526000808252602082018190529181019190915261046382612a21565b604080516060810182526000808252602082018190529181019190915261046382612c91565b610ddb60405180606001604052806000815260200160008152602001600081525090565b60036000541415610ed457600060028054610df590613ab7565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2190613ab7565b8015610e6e5780601f10610e4357610100808354040283529160200191610e6e565b820191906000526020600020905b815481529060010190602001808311610e5157829003601f168201915b5050505050806020019051810190610e869190613c42565b9050610eaf60408051608081018252600060208201818152928201819052606082015290815290565b60e082015181515260c082015181516020015260809091015181516040015251919050565b61058d6000600961296e565b604080516060810182526000808252602082018190529181019190915261046382612aae565b6000610f10613251565b610f18613295565b610f206132b4565b604080516020808201835287825260e0840191909152600683528151808201909252828252830152610f528284611030565b505060c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff166001811115610faa57610faa613944565b1415611021576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff166001811115610feb57610feb613944565b6001811115610ffc57610ffc613944565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b611040600360005414603561296e565b815161105b90158061105457508251600154145b603661296e565b60008080556002805461106d90613ab7565b80601f016020809104026020016040519081016040528092919081815260200182805461109990613ab7565b80156110e65780601f106110bb576101008083540402835291602001916110e6565b820191906000526020600020905b8154815290600101906020018083116110c957829003601f168201915b50505050508060200190518101906110fe9190613c42565b9050611108613376565b6111176000194310603761296e565b7f8f382a1e46cd31633f33c863b4e3e983c37897d59e544a03e5564c24daae58d13385604051611148929190613ecd565b60405180910390a1600060208501515151600781111561116a5761116a613944565b14156114c55760208085015151015181526111873415600e61296e565b61010082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516111c99190600090612f07565b81604001819052506111eb6111e43384602001516000612f7b565b600f61296e565b6040818101805160209081015151606085018051919091528251820151820151815183015282519091015183015181519015159301929092525190516112349190600190612f07565b816080018190525061125661124f3384604001516000612f7b565b601061296e565b8151611293906001600160a01b031633146112895782606001516001600160a01b0316336001600160a01b03161461128c565b60015b601161296e565b6112a28260a00151601261296e565b6112ec600060018351516112b590610f5e565b5160018111156112c7576112c7613944565b146112d35760006112e4565b8251516112df90610f5e565b604001515b11601361296e565b60e082015160808201516020015151600161130633610f5e565b51600181111561131857611318613944565b14611324576000611332565b61132d33610f5e565b604001515b61133c9190613fe8565b6113469190614007565b60a082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061138690612c91565b51600181111561139857611398613944565b146113a45760006113b5565b8151516113b090612c91565b604001515b6113bf9190614029565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527f14ee52c87358a2d7b31ca417bd68ab0bee50d60d98c2cf395c8defc848519f3d910160405180910390a16001835261142261372e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808701518451909301929092528251600191015260c08501519151015260a082015160e08401516114949190614029565b60208201805160809081019290925280514360a09091015290830151905160c001526114bf81612f91565b50612968565b60016020850151515160078111156114df576114df613944565b14156118bd576020840151516040015160c08201526115003415601461296e565b60c081015160400151610100830151515161151b9190614029565b60e082018051919091526101008301805151602090810151835190910152805151604090810151835190151591015251905161155a9190600090612f07565b81610100018190525061158461157d3384602001518460c0015160400151612f7b565b601561296e565b6101008101805160209081015151610120840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516115db906115d49033906000612f7b565b601661296e565b815160c082015151611629916001600160a01b0391821691161461161f5782606001516001600160a01b03168260c00151600001516001600160a01b031614611622565b60015b601761296e565b61163f60008260c001516040015111601861296e565b60c0810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff000019169055865186015190941683526004855291819020805490931682179092559251908101519101519091906116ba90612c04565b5160018111156116cc576116cc613944565b146116d85760006116ee565b6116e98260c0015160200151612c04565b604001515b6116f89190614029565b60c0820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff19168517905591519182015191015190919061175690610f5e565b51600181111561176857611768613944565b1461177457600061178a565b6117858260c0015160200151610f5e565b604001515b6117949190614029565b60c08201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527f69fb4df86f58fe9490198b0ca8809a9ebec1792ca92564d737ff77cd94723eec910160405180910390a1600160208401526117fe61372e565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052608087015184519093019290925260a086015183519015159082015260c080870151935190920192909252830151015160e084015161187d9190614029565b60208201805160800191909152514360a0909101526101008201516101208301516118ab9190600190612f07565b602082015160c001526114bf81612f91565b60026020850151515160078111156118d7576118d7613944565b1415611b1457602084015151606001516101408201526118f93415601961296e565b610100820180515151610160830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161193e9190600090612f07565b81610180018190525061196161195a3384602001516000612f7b565b601a61296e565b61018081018051602090810151516101a0840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516119b8906119b19033906000612f7b565b601b61296e565b81516119f5906001600160a01b031633146119eb5782606001516001600160a01b0316336001600160a01b0316146119ee565b60015b601c61296e565b61014081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527fdbf4274ff3373bef07815594a5448f2967a0c4814f41eea103cb28fd931fe5b5910160405180910390a160016040840152611a7c61372e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526101808201516101a08301516118ab9190600190612f07565b6003602085015151516007811115611b2e57611b2e613944565b1415611f0457611b403415601d61296e565b6101008201805151516101c08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611b859190600090612f07565b816101e00181905250611ba8611ba13384602001516000612f7b565b601e61296e565b6101e08101805160209081015151610200840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611bf39190600190612f07565b816102200181905250611c16611c0f3384604001516000612f7b565b601f61296e565b6000611c2133612b3b565b516001811115611c3357611c33613944565b1415611c46576000610240820152611c72565b6001611c5133612b3b565b516001811115611c6357611c63613944565b1415611c725760016102408201525b611c82816102400151602061296e565b6001611c8d33610f5e565b516001811115611c9f57611c9f613944565b14611cab576000611cb9565b611cb433610f5e565b604001515b6102608201526102208101516020015151611d0290611cd9576000611ce2565b60008360e00151115b611ced576000611cfb565b8161026001518360e0015110155b602161296e565b60e08201516102208201516020015151610260830151611d229190613fe8565b611d2c9190614007565b61028082018190526102208201516020015151611d499190614041565b6102a0820180519190915261022082018051602090810151810151835182015290510151604090810151915191151591810191909152820151610280820151611d9491903390613057565b336000818152600860205260409020805460ff1916600190811790915561028083015191611dc190612a21565b516001811115611dd357611dd3613944565b14611ddf576000611ded565b611de833612a21565b604001515b611df79190614029565b3360009081526008602090815260408083206001908101949094556009825291829020805460ff19168417815560808601519084015590519182527f182f7ff1a2f96f99d07008f96e6af0ea618707246d76b9ea55fec27c1f3e9acc910160405180910390a160016060840152611e6c61372e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526102208201516102a08301516118ab9190600190612f07565b6004602085015151516007811115611f1e57611f1e613944565b14156121185760208401515160a001516102c0820152611f403415602261296e565b6101008201805151516102e08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611f859190600090612f07565b816103000181905250611fa8611fa13384602001516000612f7b565b602361296e565b610300810180516020908101515161032084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611fff90611ff89033906000612f7b565b602461296e565b815161203c906001600160a01b031633146120325782606001516001600160a01b0316336001600160a01b031614612035565b60015b602561296e565b604051600181527f7c2c630e3236d8fc4b0648470d83013e25bcbd5ece383f464fd3565c62ea76ff9060200160405180910390a16001608084015261207f61372e565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526102c085015151828501805191909416905260808087015184519093019290925260a080870151845190151592019190915260c086015183516060015260e08601518351909201919091529051439101526103008201516103208301516118ab9190600190612f07565b600560208501515151600781111561213257612132613944565b14156124bf576121443415602661296e565b61010082018051515161034083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516121899190600090612f07565b8161036001819052506121ac6121a53384602001516000612f7b565b602761296e565b61036081018051602090810151516103808401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516121f79190600190612f07565b816103a0018190525061221a6122133384604001516000612f7b565b602861296e565b600161222533612c04565b51600181111561223757612237613944565b14612243576000612251565b61224c33612c04565b604001515b6103c0820152600061226233612b3b565b51600181111561227457612274613944565b14156122875760006103e08201526122b3565b600161229233612b3b565b5160018111156122a4576122a4613944565b14156122b35760016103e08201525b6122c3816103e00151602961296e565b6122f16000826103c00151116122da5760006122ea565b6103c08201516103a08301515151115b602a61296e565b6103c08101516103a082015151516123099190614041565b61040082018051919091526103a08201805151602090810151835182015290515160409081015192519215159201919091528201516103c082015161235091903390613057565b3360008181526004602090815260408083208054600160ff1991821681178355918201859055600690935292208054909116821790556103c08301519161239690612994565b5160018111156123a8576123a8613944565b146123b45760006123c2565b6123bd33612994565b604001515b6123cc9190614029565b3360009081526006602090815260409182902060019081019390935590519182527f9f3638f4f55f367093bfded091672768ddcaf44f0058184de66bcbe58f13749a910160405180910390a1600160a084015261242761372e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526103a08201516104008301516118ab9190600090612f07565b60066020850151515160078111156124d9576124d9613944565b141561272b5760208401515160e001516104208201526124fb3415602b61296e565b61010082018051515161044083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516125409190600090612f07565b81610460018190525061256361255c3384602001516000612f7b565b602c61296e565b61042081015151610460820151602001515161257f9190614029565b610480820180519190915261046082018051602090810151810151835182015290510151604090810151915191151591810191909152820151610420820151516125d6916125cf91339190612f7b565b602d61296e565b8151612613906001600160a01b031633146126095782606001516001600160a01b0316336001600160a01b03161461260c565b60015b602e61296e565b61042081015151612627901515602f61296e565b6126368260a00151603061296e565b604051600181527f93dff0146afc78dcef4ebd78ef046d00dc4042a41975c55fd1158c2bd89470919060200160405180910390a1600160c084015261267961372e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169101526060850151908301519116905260808301516126c590600190614029565b60208083018051909101919091525160016040909101526104208201515160c08401516126f29190614029565b6020820180516060019190915260e0840151815160800152514360a0909101526104608201516104808301516118ab9190600190612f07565b600760208501515151600781111561274557612745613944565b14156129685760208401515161010001516104a08201526127683415603161296e565b6101008201805151516104c083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516127ad9190600090612f07565b816104e001819052506127d06127c93384602001516000612f7b565b603261296e565b6104e0810180516020908101515161050084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151612827906128209033906000612f7b565b603361296e565b8151612864906001600160a01b0316331461285a5782606001516001600160a01b0316336001600160a01b03161461285d565b60015b603461296e565b6104a0810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527f8279aaa30826f7e0279fe8879d6653085974b74bd9731627cfcf317351484dc5910160405180910390a1600160e08401526128d061372e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808088015185519094019390935260a080880151855190151593019290925260c087015184519091015260e08601518351909201919091529051439101526104e08201516105008301516118ab9190600190612f07565b50505050565b81610a9a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156129e0576129e0613944565b1415611021576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610feb57610feb613944565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612a6d57612a6d613944565b1415611021576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff166001811115610feb57610feb613944565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115612afa57612afa613944565b1415611021576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff166001811115610feb57610feb613944565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115612b8757612b87613944565b1415611021576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115612bc857612bc8613944565b6001811115612bd957612bd9613944565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115612c5057612c50613944565b1415611021576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610feb57610feb613944565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612cdd57612cdd613944565b1415611021576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610feb57610feb613944565b612d2e600360005414603a61296e565b8151612d49901580612d4257508251600154145b603b61296e565b600080805560028054612d5b90613ab7565b80601f0160208091040260200160405190810160405280929190818152602001828054612d8790613ab7565b8015612dd45780601f10612da957610100808354040283529160200191612dd4565b820191906000526020600020905b815481529060010190602001808311612db757829003601f168201915b5050505050806020019051810190612dec9190613c42565b9050612dfe600019431015603c61296e565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1612e513415603861296e565b8051612e69906001600160a01b03163314603961296e565b612e7161372e565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845190841690820152606080860151838601805191909516905260808087015185519094019390935260a080870151855190151593019290925260c08087015185519092019190915260e08601518451909301929092528251439101526101008401519151015261296881612f91565b612f0f61375e565b60005b6002811015612f5b57848160028110612f2d57612f2d613fbc565b6020020151828260028110612f4457612f44613fbc565b602002015280612f5381614058565b915050612f12565b5081818460028110612f6f57612f6f613fbc565b60200201529392505050565b6000612f898385308561306b565b949350505050565b612f996137a9565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301516080808701919091528451830151151560a087015284519091015160c08087019190915284519091015160e0860152925190920151610100840152600360005543600155905161302e918391016140b1565b6040516020818303038152906040526002908051906020019061305292919061381b565b505050565b613062838383613145565b61305257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916130d291614139565b60006040518083038185875af1925050503d806000811461310f576040519150601f19603f3d011682016040523d82523d6000602084013e613114565b606091505b509150915061312582826001613216565b508080602001905181019061313a9190614155565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916131a491614139565b60006040518083038185875af1925050503d80600081146131e1576040519150601f19603f3d011682016040523d82523d6000602084013e6131e6565b606091505b50915091506131f782826002613216565b508080602001905181019061320c9190614155565b9695505050505050565b606083156132255750816105ff565b8251156132355782518084602001fd5b60405163100960cb60e01b81526004810183905260240161298b565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518060400160405280600081526020016132af61389f565b905290565b60408051610120810190915280600081526020016132dd60408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200161331760408051602081019091526000815290565b81526000602082015260400161333860408051602081019091526000815290565b815260200160001515815260200161335c6040518060200160405280600081525090565b81526020016132af60408051602081019091526000815290565b60408051610540810182526000610520820181815282528251606081018452818152602080820183905281850192909252908201529081016133b661375e565b815260408051606081018252600080825260208281018290529282015291019081526020016133e361375e565b815260200160008152602001613412604080516060810182526000808252602082018190529181019190915290565b8152604080516060810182526000808252602082810182905292820152910190815260200161343f61375e565b8152604080516060810182526000808252602082810182905292820152910190815260200161347960408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526020016134a661375e565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016134f361375e565b8152604080516060810182526000808252602082810182905292820152910190815260200161352061375e565b81526020016000151581526020016000815260200160008152602001613562604051806060016040528060008152602001600081526020016000151581525090565b815260200161357c60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526020016135a961375e565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016135f661375e565b8152604080516060810182526000808252602082810182905292820152910190815260200161362361375e565b8152600060208201819052604082015260600161365c604051806060016040528060008152602001600081526020016000151581525090565b81526020016136776040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016136a461375e565b815260408051606081018252600080825260208281018290529282015291019081526020016136de60408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260200161370b61375e565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016132af6138b2565b60405180604001604052806002905b613793604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161376d5790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160001515815260200160008152602001600081526020016132af61375e565b82805461382790613ab7565b90600052602060002090601f016020900481019282613849576000855561388f565b82601f1061386257805160ff191683800117855561388f565b8280016001018555821561388f579182015b8281111561388f578251825591602001919060010190613874565b5061389b9291506138fa565b5090565b60405180602001604052806132af6132b4565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001600081526020016132af61375e565b5b8082111561389b57600081556001016138fb565b6001600160a01b038116811461392457600080fd5b50565b60006020828403121561393957600080fd5b81356105ff8161390f565b634e487b7160e01b600052602160045260246000fd5b6002811061392457613924613944565b8151606082019061397a8161395a565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156139af57600080fd5b83356139ba8161390f565b925060208401356139ca8161390f565b929592945050506040919091013590565b815160608201906139eb8161395a565b8083525060208301511515602083015260408301511515604083015292915050565b600060408284031215613a1f57600080fd5b50919050565b60006101808284031215613a1f57600080fd5b60005b83811015613a53578181015183820152602001613a3b565b838111156129685750506000910152565b8281526040602082015260008251806040840152613a89816060850160208701613a38565b601f01601f1916919091016060019392505050565b600060208284031215613ab057600080fd5b5035919050565b600181811c90821680613acb57607f821691505b60208210811415613a1f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715613b2557613b25613aec565b60405290565b6040516060810167ffffffffffffffff81118282101715613b2557613b25613aec565b604051610120810167ffffffffffffffff81118282101715613b2557613b25613aec565b6040516020810167ffffffffffffffff81118282101715613b2557613b25613aec565b80516107c68161390f565b801515811461392457600080fd5b80516107c681613ba0565b600082601f830112613bca57600080fd5b613bd2613b02565b8060c0840185811115613be457600080fd5b845b81811015613c375760608188031215613bff5760008081fd5b613c07613b2b565b8151815260208083015181830152604080840151613c2481613ba0565b9083015290855290930192606001613be6565b509095945050505050565b60006101c08284031215613c5557600080fd5b613c5d613b4e565b613c6683613b95565b8152613c7460208401613b95565b6020820152613c8560408401613b95565b6040820152613c9660608401613b95565b606082015260808301516080820152613cb160a08401613bae565b60a082015260c083015160c082015260e083015160e0820152610100613cd985828601613bb9565b908201529392505050565b80356107c681613ba0565b600060408284031215613d0157600080fd5b613d09613b02565b823581526020830135613d1b81613ba0565b60208201529392505050565b8035600881106107c657600080fd5b600060208284031215613d4857600080fd5b613d50613b72565b90508135613d5d8161390f565b815292915050565b600060608284031215613d7757600080fd5b613d7f613b2b565b90508135613d8c8161390f565b81526020820135613d9c8161390f565b806020830152506040820135604082015292915050565b600060208284031215613dc557600080fd5b613dcd613b72565b9135825250919050565b6000818303610180811215613deb57600080fd5b613df3613b02565b8335815261016080601f1984011215613e0b57600080fd5b613e13613b72565b9250613e1d613b4e565b613e2960208701613d27565b8152613e388760408801613d36565b6020820152613e4a8760608801613d65565b6040820152613e5c8760c08801613d36565b6060820152613e6d60e08701613ce4565b6080820152610100613e8188828901613d36565b60a0830152613e936101208801613ce4565b60c0830152613ea6886101408901613db3565b60e0830152613eb788848901613d36565b9082015283525060208101919091529392505050565b6001600160a01b038316815281516020808301919091528201515180516101a08301919060088110613f0157613f01613944565b6040840152602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e0850152506080810151610100613f748186018315159052565b60a0830151516001600160a01b0390811661012087015260c0840151151561014087015260e08401515161016087015292015151909116610180909301929092529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561400257614002613fd2565b500290565b60008261402457634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561403c5761403c613fd2565b500190565b60008282101561405357614053613fd2565b500390565b600060001982141561406c5761406c613fd2565b5060010190565b8060005b6002811015612968578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614077565b81516001600160a01b039081168252602080840151821690830152604080840151821690830152606080840151918216908301526101c0820190506080830151608083015260a083015161410960a084018215159052565b5060c083015160c083015260e083015160e08301526101008084015161413182850182614073565b505092915050565b6000825161414b818460208701613a38565b9190910192915050565b60006020828403121561416757600080fd5b81516105ff81613ba056fea2646970667358221220f81da7b07bac282527ef08af0b49c8bfee8d757e47605feeed605a4f068cde7564736f6c634300080c0033`,
  BytecodeLen: 19270,
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
    at: './index.rsh:285:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
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
