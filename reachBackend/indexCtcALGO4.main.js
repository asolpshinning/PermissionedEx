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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc6, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Data({
    None: ctc12,
    Some: ctc3
    });
  const ctc14 = stdlib.T_Data({
    None: ctc12,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  const map1_ctc = ctc13;
  
  const map2_ctc = ctc13;
  
  const map3_ctc = ctc13;
  
  const map4_ctc = ctc13;
  
  const map5_ctc = ctc13;
  
  const map6_ctc = ctc14;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async (_v1345 ) => {
                const v1345 = stdlib.protect(ctc0, _v1345, null);
              
              const v1346 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1345), null);
              const v1347 = stdlib.fromSome(v1346, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1348 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1345), null);
              const v1349 = stdlib.fromSome(v1348, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1350 = [v1347, v1349];
              
              return v1350;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async () => {
              
              
              return v1329;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async () => {
              
              const v1344 = [v1331, v1330, v1327];
              
              return v1344;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async (_v1352 ) => {
                const v1352 = stdlib.protect(ctc0, _v1352, null);
              
              const v1353 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1352), null);
              const v1354 = stdlib.fromSome(v1353, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1355 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1352), null);
              const v1356 = stdlib.fromSome(v1355, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1357 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1352), null);
              const v1358 = stdlib.fromSome(v1357, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1359 = [v1354, v1356, v1358];
              
              return v1359;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      vBtBal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async () => {
              
              
              return v1368;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      vCcCm: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async () => {
              
              const v1369 = [v1306, v1325];
              
              return v1369;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async () => {
              
              
              return v1328;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      vcVersion: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async () => {
              
              
              return v1326;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = svs;
            return (await ((async (_v1361 ) => {
                const v1361 = stdlib.protect(ctc0, _v1361, null);
              
              const v1362 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1361), null);
              let v1363;
              switch (v1362[0]) {
                case 'None': {
                  const v1364 = v1362[1];
                  v1363 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1365 = v1362[1];
                  v1363 = true;
                  
                  break;
                  }
                }
              
              return v1363;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc5, ctc3, ctc3, ctc8, ctc7, ctc6, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
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
  const ctc1 = stdlib.T_UInt256;
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
    managerAddr: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Data({
    aBT0_183: ctc9,
    aST0_183: ctc10,
    addWL0_183: ctc9,
    cBT0_183: ctc11,
    cCM0_183: ctc9,
    cST0_183: ctc11,
    dBT0_183: ctc12,
    docHash0_183: ctc14,
    optIn0_183: ctc11,
    remWL0_183: ctc9
    });
  const ctc16 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc17 = stdlib.T_UInt;
  const ctc18 = stdlib.T_Tuple([ctc17, ctc17, ctc6]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v1288 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1289 = [v1288];
  const v1295 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:85:103:application',
    fs: ['at ./index.rsh:84:17:application call to [unknown function] (defined at: ./index.rsh:84:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1296 = v1295.authorizedST;
  const v1297 = v1295.bT;
  const v1298 = v1295.companyName;
  const v1299 = v1295.lockSale;
  const v1300 = v1295.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1298, v1299, v1300, v1297, v1296],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1307, v1308, v1309, v1310, v1311], secs: v1313, time: v1312, didSend: v41, from: v1306 } = txn1;
      
      const v1314 = v1289[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0')];
      const v1316 = v1314[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '1')];
      const v1317 = v1314[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '2')];
      const v1318 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1316, v1317];
      const v1319 = stdlib.Array_set(v1289, stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0'), v1318);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1310
        });
      ;
      
      const v1323 = '1.00';
      const v1324 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v1325 = v1309;
      const v1326 = v1323;
      const v1327 = stdlib.checkedBigNumberify('./index.rsh:109:150:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1328 = v1324;
      const v1329 = v1308;
      const v1330 = stdlib.checkedBigNumberify('./index.rsh:109:115:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1331 = stdlib.checkedBigNumberify('./index.rsh:109:103:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1332 = v1312;
      const v1334 = v1319;
      
      if (await (async () => {
        
        return true;})()) {
        const v1366 = v1334[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
        const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
        const v1368 = stdlib.cast(false, true, v1367);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1310
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
    tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1307, v1308, v1309, v1310, v1311], secs: v1313, time: v1312, didSend: v41, from: v1306 } = txn1;
  const v1314 = v1289[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0')];
  const v1316 = v1314[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '1')];
  const v1317 = v1314[stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '2')];
  const v1318 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1316, v1317];
  const v1319 = stdlib.Array_set(v1289, stdlib.checkedBigNumberify('./index.rsh:89:13:dot', stdlib.UInt_max, '0'), v1318);
  ;
  ;
  const v1322 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1322), {
    at: './index.rsh:91:31:application',
    fs: ['at ./index.rsh:91:31:application call to [unknown function] (defined at: ./index.rsh:91:31:function exp)', 'at ./index.rsh:91:31:application call to "liftedInteract" (defined at: ./index.rsh:91:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v1323 = '1.00';
  const v1324 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  let v1325 = v1309;
  let v1326 = v1323;
  let v1327 = stdlib.checkedBigNumberify('./index.rsh:109:150:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1328 = v1324;
  let v1329 = v1308;
  let v1330 = stdlib.checkedBigNumberify('./index.rsh:109:115:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1331 = stdlib.checkedBigNumberify('./index.rsh:109:103:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1332 = v1312;
  let v1334 = v1319;
  
  while (await (async () => {
    
    return true;})()) {
    const v1366 = v1334[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
    const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
    const v1368 = stdlib.cast(false, true, v1367);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1332,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:326:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v4634, time: v4633, didSend: v1044, from: v4632 } = txn3;
          
          ;
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v4633;
          const cv1334 = v1334;
          
          await (async () => {
            const v1325 = cv1325;
            const v1326 = cv1326;
            const v1327 = cv1327;
            const v1328 = cv1328;
            const v1329 = cv1329;
            const v1330 = cv1330;
            const v1331 = cv1331;
            const v1332 = cv1332;
            const v1334 = cv1334;
            
            if (await (async () => {
              
              return true;})()) {
              const v1366 = v1334[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
              const v1367 = v1366[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
              const v1368 = stdlib.cast(false, true, v1367);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1310
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
        tys: [ctc7, ctc4, ctc7, ctc16, ctc1, ctc13, ctc6, ctc1, ctc1, ctc19, ctc18, ctc17, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4634, time: v4633, didSend: v1044, from: v4632 } = txn3;
      ;
      const v4635 = stdlib.addressEq(v1306, v4632);
      stdlib.assert(v4635, {
        at: './index.rsh:326:21:dot',
        fs: ['at ./index.rsh:325:40:application call to [unknown function] (defined at: ./index.rsh:325:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1325 = v1325;
      const cv1326 = v1326;
      const cv1327 = v1327;
      const cv1328 = v1328;
      const cv1329 = v1329;
      const cv1330 = v1330;
      const cv1331 = v1331;
      const cv1332 = v4633;
      const cv1334 = v1334;
      
      v1325 = cv1325;
      v1326 = cv1326;
      v1327 = cv1327;
      v1328 = cv1328;
      v1329 = cv1329;
      v1330 = cv1330;
      v1331 = cv1331;
      v1332 = cv1332;
      v1334 = cv1334;
      
      continue;
      }
    else {
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn2;
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v1740 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v1741 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v1742 = [v1367, v1740, v1741];
          const v1743 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v1742);
          ;
          const v1745 = v1642[stdlib.checkedBigNumberify('./index.rsh:284:13:spread', stdlib.UInt_max, '0')];
          const v1746 = stdlib.addressEq(v1638, v1306);
          const v1747 = stdlib.addressEq(v1638, v1325);
          const v1748 = v1746 ? true : v1747;
          stdlib.assert(v1748, {
            at: './index.rsh:297:24:application',
            fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1749 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1745), null);
          const v1750 = stdlib.fromSome(v1749, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1751 = stdlib.gt256(v1750, stdlib.checkedBigNumberify('./index.rsh:299:79:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v1751, {
            at: './index.rsh:299:24:application',
            fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1752 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1638), null);
          const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1754 = stdlib.div256(v1753, v1331);
          const v1755 = v1743[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1756 = v1755[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1757 = stdlib.cast(false, true, v1756);
          const v1758 = stdlib.mul256(v1754, v1757);
          const v1759 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1745), null);
          const v1760 = stdlib.fromSome(v1759, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1761 = stdlib.add256(v1760, v1758);
          await stdlib.mapSet(map1, v1745, v1761);
          const v1762 = true;
          await txn2.getOutput('aBT', 'v1762', ctc6, v1762);
          const v1769 = stdlib.add256(v1331, v1758);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1769;
          const cv1332 = v1640;
          const cv1334 = v1743;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v2039 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2040 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2041 = [v1367, v2039, v2040];
          const v2042 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2041);
          ;
          const v2071 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '0')];
          const v2072 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '1')];
          const v2073 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '2')];
          const v2074 = stdlib.addressEq(v2071, v1306);
          const v2075 = stdlib.addressEq(v2071, v1325);
          const v2076 = v2074 ? true : v2075;
          stdlib.assert(v2076, {
            at: './index.rsh:191:24:application',
            fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2077 = stdlib.gt256(v2073, stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v2077, {
            at: './index.rsh:192:24:application',
            fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2072, null);
          const v2079 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2072), null);
          const v2080 = stdlib.fromSome(v2079, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2081 = stdlib.add256(v2080, v2073);
          await stdlib.mapSet(map0, v2072, v2081);
          const v2082 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2072), null);
          const v2083 = stdlib.fromSome(v2082, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2084 = stdlib.add256(v2083, v2073);
          await stdlib.mapSet(map3, v2072, v2084);
          const v2085 = true;
          await txn2.getOutput('aST', 'v2085', ctc6, v2085);
          const v2094 = stdlib.add256(v1331, v2073);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v2094;
          const cv1332 = v1640;
          const cv1334 = v2042;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v2338 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2339 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2340 = [v1367, v2338, v2339];
          const v2341 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2340);
          ;
          const v2396 = v2240[stdlib.checkedBigNumberify('./index.rsh:142:13:spread', stdlib.UInt_max, '0')];
          const v2397 = stdlib.addressEq(v1638, v1306);
          const v2398 = stdlib.addressEq(v1638, v1325);
          const v2399 = v2397 ? true : v2398;
          stdlib.assert(v2399, {
            at: './index.rsh:153:24:application',
            fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2396, null);
          const v2401 = true;
          await txn2.getOutput('addWL', 'v2401', ctc6, v2401);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v2341;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v2637 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2638 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2639 = [v1367, v2637, v2638];
          const v2640 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2639);
          ;
          const v2709 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1638), null);
          let v2710;
          switch (v2709[0]) {
            case 'None': {
              const v2711 = v2709[1];
              v2710 = false;
              
              break;
              }
            case 'Some': {
              const v2712 = v2709[1];
              v2710 = true;
              
              break;
              }
            }
          stdlib.assert(v2710, {
            at: './index.rsh:272:24:application',
            fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2713 = v2640[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2714 = v2713[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2715 = stdlib.gt(v2714, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '0'));
          const v2716 = stdlib.gt256(v1331, stdlib.checkedBigNumberify('./index.rsh:273:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2717 = v2715 ? v2716 : false;
          const v2718 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1638), null);
          const v2719 = stdlib.fromSome(v2718, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2720 = stdlib.ge256(v1331, v2719);
          const v2721 = v2717 ? v2720 : false;
          stdlib.assert(v2721, {
            at: './index.rsh:273:24:application',
            fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2724 = stdlib.div256(v2719, v1331);
          const v2727 = stdlib.cast(false, true, v2714);
          const v2728 = stdlib.mul256(v2724, v2727);
          const v2729 = stdlib.cast(true, false, v2728);
          const v2735 = stdlib.sub(v2714, v2729);
          const v2738 = v2713[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '1')];
          const v2739 = v2713[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '2')];
          const v2740 = [v2735, v2738, v2739];
          const v2741 = stdlib.Array_set(v2640, stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '0'), v2740);
          ;
          const v2742 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1638), null);
          const v2743 = stdlib.fromSome(v2742, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2744 = stdlib.add256(v2743, v2728);
          await stdlib.mapSet(map4, v1638, v2744);
          const v2745 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1638), null);
          const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2747 = stdlib.add256(v2746, stdlib.checkedBigNumberify('./index.rsh:278:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.mapSet(map5, v1638, v2747);
          const v2748 = true;
          await txn2.getOutput('cBT', 'v2748', ctc6, v2748);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v2741;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v2936 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2937 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2938 = [v1367, v2936, v2937];
          const v2939 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2938);
          ;
          const v3055 = v2838[stdlib.checkedBigNumberify('./index.rsh:308:13:spread', stdlib.UInt_max, '0')];
          const v3056 = stdlib.addressEq(v1638, v1306);
          const v3057 = stdlib.addressEq(v1638, v1325);
          const v3058 = v3056 ? true : v3057;
          stdlib.assert(v3058, {
            at: './index.rsh:319:24:application',
            fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3059 = true;
          await txn2.getOutput('cCM', 'v3059', ctc6, v3059);
          const cv1325 = v3055;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v2939;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v3235 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3236 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3237 = [v1367, v3235, v3236];
          const v3238 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3237);
          ;
          const v3367 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1638), null);
          const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3369 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1638), null);
          let v3370;
          switch (v3369[0]) {
            case 'None': {
              const v3371 = v3369[1];
              v3370 = false;
              
              break;
              }
            case 'Some': {
              const v3372 = v3369[1];
              v3370 = true;
              
              break;
              }
            }
          stdlib.assert(v3370, {
            at: './index.rsh:217:24:application',
            fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3373 = stdlib.gt256(v3368, stdlib.checkedBigNumberify('./index.rsh:218:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.assert(v3373, {
            at: './index.rsh:218:24:application',
            fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3374 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1638), null);
          const v3375 = stdlib.fromSome(v3374, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3376 = stdlib.add256(v3375, v3368);
          await stdlib.mapSet(map2, v1638, v3376);
          await stdlib.mapSet(map0, v1638, stdlib.checkedBigNumberify('./index.rsh:222:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3377 = true;
          await txn2.getOutput('cST', 'v3377', ctc6, v3377);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v3238;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          undefined /* setApiDetails */;
          const v3489 = v3436[stdlib.checkedBigNumberify('./index.rsh:242:13:spread', stdlib.UInt_max, '0')];
          const v3490 = stdlib.cast(true, false, v3489);
          ;
          const v3531 = stdlib.add(v1367, v3490);
          const v3534 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3535 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3536 = [v3531, v3534, v3535];
          const v3537 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3536);
          ;
          const v3685 = stdlib.addressEq(v1638, v1306);
          const v3686 = stdlib.addressEq(v1638, v1325);
          const v3687 = v3685 ? true : v3686;
          stdlib.assert(v3687, {
            at: './index.rsh:254:24:application',
            fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3689 = stdlib.gt(v3490, stdlib.checkedBigNumberify('./index.rsh:255:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3689, {
            at: './index.rsh:255:24:application',
            fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3690 = true;
          await txn2.getOutput('dBT', 'v3690', ctc6, v3690);
          const v3697 = stdlib.add256(v1330, v3489);
          const v3698 = stdlib.add256(v1327, stdlib.checkedBigNumberify('./index.rsh:258:88:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v3698;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v3697;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v3537;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v3833 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3834 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3835 = [v1367, v3833, v3834];
          const v3836 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3835);
          ;
          const v4000 = v3735[stdlib.checkedBigNumberify('./index.rsh:125:13:spread', stdlib.UInt_max, '0')];
          const v4001 = stdlib.addressEq(v1638, v1306);
          const v4002 = stdlib.addressEq(v1638, v1325);
          const v4003 = v4001 ? true : v4002;
          stdlib.assert(v4003, {
            at: './index.rsh:136:24:application',
            fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4004 = true;
          await txn2.getOutput('docHash', 'v4004', ctc6, v4004);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v4000;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v3836;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v4132 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4133 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4134 = [v1367, v4132, v4133];
          const v4135 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4134);
          ;
          const v4312 = true;
          await txn2.getOutput('optIn', 'v4312', ctc6, v4312);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v4135;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
          continue;
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          undefined /* setApiDetails */;
          ;
          const v4431 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4432 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4433 = [v1367, v4431, v4432];
          const v4434 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4433);
          ;
          const v4619 = v4333[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
          const v4620 = stdlib.addressEq(v1638, v1306);
          const v4621 = stdlib.addressEq(v1638, v1325);
          const v4622 = v4620 ? true : v4621;
          stdlib.assert(v4622, {
            at: './index.rsh:171:24:application',
            fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v4619, undefined /* Nothing */);
          const v4624 = true;
          await txn2.getOutput('remWL', 'v4624', ctc6, v4624);
          const cv1325 = v1325;
          const cv1326 = v1326;
          const cv1327 = v1327;
          const cv1328 = v1328;
          const cv1329 = v1329;
          const cv1330 = v1330;
          const cv1331 = v1331;
          const cv1332 = v1640;
          const cv1334 = v4434;
          
          v1325 = cv1325;
          v1326 = cv1326;
          v1327 = cv1327;
          v1328 = cv1328;
          v1329 = cv1329;
          v1330 = cv1330;
          v1331 = cv1331;
          v1332 = cv1332;
          v1334 = cv1334;
          
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1497 = ctc.selfAddress();
  const v1499 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:13:function exp)', 'at ./index.rsh:109:85:application call to "runaBT0_183" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1500 = v1499[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1503 = stdlib.addressEq(v1497, v1306);
  const v1504 = stdlib.addressEq(v1497, v1325);
  const v1505 = v1503 ? true : v1504;
  stdlib.assert(v1505, {
    at: './index.rsh:288:23:application',
    fs: ['at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:18:function exp)', 'at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:13:function exp)', 'at ./index.rsh:109:85:application call to "runaBT0_183" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1506 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1500), null);
  const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1508 = stdlib.gt256(v1507, stdlib.checkedBigNumberify('./index.rsh:291:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1508, {
    at: './index.rsh:291:23:application',
    fs: ['at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:18:function exp)', 'at ./index.rsh:287:13:application call to [unknown function] (defined at: ./index.rsh:287:13:function exp)', 'at ./index.rsh:109:85:application call to "runaBT0_183" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1512 = ['aBT0_183', v1499];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1512],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:294:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:294:26:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1740 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v1741 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v1742 = [v1367, v1740, v1741];
          const v1743 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v1742);
          ;
          const v1745 = v1642[stdlib.checkedBigNumberify('./index.rsh:284:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1745), null);
          const v1752 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1638), null);
          const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1754 = stdlib.div256(v1753, v1331);
          const v1755 = v1743[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1756 = v1755[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
          const v1757 = stdlib.cast(false, true, v1756);
          const v1758 = stdlib.mul256(v1754, v1757);
          const v1759 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1745), null);
          const v1760 = stdlib.fromSome(v1759, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1761 = stdlib.add256(v1760, v1758);
          await stdlib.simMapSet(sim_r, 1, v1745, v1761);
          const v1762 = true;
          const v1763 = await txn1.getOutput('aBT', 'v1762', ctc8, v1762);
          
          const v1769 = stdlib.add256(v1331, v1758);
          const v8110 = v1325;
          const v8111 = v1326;
          const v8112 = v1327;
          const v8113 = v1328;
          const v8114 = v1329;
          const v8115 = v1330;
          const v8116 = v1769;
          const v8118 = v1743;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v1740 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v1741 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v1742 = [v1367, v1740, v1741];
      const v1743 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v1742);
      ;
      const v1745 = v1642[stdlib.checkedBigNumberify('./index.rsh:284:13:spread', stdlib.UInt_max, '0')];
      const v1746 = stdlib.addressEq(v1638, v1306);
      const v1747 = stdlib.addressEq(v1638, v1325);
      const v1748 = v1746 ? true : v1747;
      stdlib.assert(v1748, {
        at: './index.rsh:297:24:application',
        fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1749 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1745), null);
      const v1750 = stdlib.fromSome(v1749, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1751 = stdlib.gt256(v1750, stdlib.checkedBigNumberify('./index.rsh:299:79:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v1751, {
        at: './index.rsh:299:24:application',
        fs: ['at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1752 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1638), null);
      const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1754 = stdlib.div256(v1753, v1331);
      const v1755 = v1743[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
      const v1756 = v1755[stdlib.checkedBigNumberify('./index.rsh:300:79:application', stdlib.UInt_max, '0')];
      const v1757 = stdlib.cast(false, true, v1756);
      const v1758 = stdlib.mul256(v1754, v1757);
      const v1759 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1745), null);
      const v1760 = stdlib.fromSome(v1759, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1761 = stdlib.add256(v1760, v1758);
      await stdlib.mapSet(map1, v1745, v1761);
      const v1762 = true;
      const v1763 = await txn1.getOutput('aBT', 'v1762', ctc8, v1762);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v1642, v1763), {
          at: './index.rsh:285:13:application',
          fs: ['at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)', 'at ./index.rsh:304:20:application call to "res" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v1769 = stdlib.add256(v1331, v1758);
      const v8110 = v1325;
      const v8111 = v1326;
      const v8112 = v1327;
      const v8113 = v1328;
      const v8114 = v1329;
      const v8115 = v1330;
      const v8116 = v1769;
      const v8118 = v1743;
      return;
      
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc12,
    addWL0_183: ctc13,
    cBT0_183: ctc14,
    cCM0_183: ctc13,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc13
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1418 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:109:85:application call to "runaST0_183" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1419 = v1418[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1421 = v1418[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1426 = stdlib.addressEq(v1419, v1306);
  const v1427 = stdlib.addressEq(v1419, v1325);
  const v1428 = v1426 ? true : v1427;
  stdlib.assert(v1428, {
    at: './index.rsh:183:23:application',
    fs: ['at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:29:function exp)', 'at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:109:85:application call to "runaST0_183" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1429 = stdlib.gt256(v1421, stdlib.checkedBigNumberify('./index.rsh:184:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1429, {
    at: './index.rsh:184:23:application',
    fs: ['at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:29:function exp)', 'at ./index.rsh:182:13:application call to [unknown function] (defined at: ./index.rsh:182:13:function exp)', 'at ./index.rsh:109:85:application call to "runaST0_183" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1435 = ['aST0_183', v1418];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1435],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:188:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:188:34:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v2039 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2040 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2041 = [v1367, v2039, v2040];
          const v2042 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2041);
          ;
          const v2072 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '1')];
          const v2073 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v2072, null);
          const v2079 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2072), null);
          const v2080 = stdlib.fromSome(v2079, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2081 = stdlib.add256(v2080, v2073);
          await stdlib.simMapSet(sim_r, 0, v2072, v2081);
          const v2082 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2072), null);
          const v2083 = stdlib.fromSome(v2082, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2084 = stdlib.add256(v2083, v2073);
          await stdlib.simMapSet(sim_r, 3, v2072, v2084);
          const v2085 = true;
          const v2086 = await txn1.getOutput('aST', 'v2085', ctc8, v2085);
          
          const v2094 = stdlib.add256(v1331, v2073);
          const v8275 = v1325;
          const v8276 = v1326;
          const v8277 = v1327;
          const v8278 = v1328;
          const v8279 = v1329;
          const v8280 = v1330;
          const v8281 = v2094;
          const v8283 = v2042;
          const v8284 = v2042[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8285 = v8284[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8286 = stdlib.cast(false, true, v8285);
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v2039 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2040 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2041 = [v1367, v2039, v2040];
      const v2042 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2041);
      ;
      const v2071 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '0')];
      const v2072 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '1')];
      const v2073 = v1941[stdlib.checkedBigNumberify('./index.rsh:179:13:spread', stdlib.UInt_max, '2')];
      const v2074 = stdlib.addressEq(v2071, v1306);
      const v2075 = stdlib.addressEq(v2071, v1325);
      const v2076 = v2074 ? true : v2075;
      stdlib.assert(v2076, {
        at: './index.rsh:191:24:application',
        fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2077 = stdlib.gt256(v2073, stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2077, {
        at: './index.rsh:192:24:application',
        fs: ['at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2072, null);
      const v2079 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2072), null);
      const v2080 = stdlib.fromSome(v2079, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2081 = stdlib.add256(v2080, v2073);
      await stdlib.mapSet(map0, v2072, v2081);
      const v2082 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2072), null);
      const v2083 = stdlib.fromSome(v2082, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2084 = stdlib.add256(v2083, v2073);
      await stdlib.mapSet(map3, v2072, v2084);
      const v2085 = true;
      const v2086 = await txn1.getOutput('aST', 'v2085', ctc8, v2085);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v1941, v2086), {
          at: './index.rsh:180:13:application',
          fs: ['at ./index.rsh:180:13:application call to [unknown function] (defined at: ./index.rsh:180:13:function exp)', 'at ./index.rsh:199:20:application call to "res" (defined at: ./index.rsh:190:13:function exp)', 'at ./index.rsh:190:13:application call to [unknown function] (defined at: ./index.rsh:190:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2094 = stdlib.add256(v1331, v2073);
      const v8275 = v1325;
      const v8276 = v1326;
      const v8277 = v1327;
      const v8278 = v1328;
      const v8279 = v1329;
      const v8280 = v1330;
      const v8281 = v2094;
      const v8283 = v2042;
      const v8284 = v2042[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8285 = v8284[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8286 = stdlib.cast(false, true, v8285);
      return;
      
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1388 = ctc.selfAddress();
  const v1390 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:109:85:application call to "runaddWL0_183" (defined at: ./index.rsh:142:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1394 = stdlib.addressEq(v1388, v1306);
  const v1395 = stdlib.addressEq(v1388, v1325);
  const v1396 = v1394 ? true : v1395;
  stdlib.assert(v1396, {
    at: './index.rsh:146:23:application',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:18:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:109:85:application call to "runaddWL0_183" (defined at: ./index.rsh:142:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1400 = ['addWL0_183', v1390];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1400],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:150:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:150:26:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2338 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2339 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2340 = [v1367, v2338, v2339];
          const v2341 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2340);
          ;
          const v2396 = v2240[stdlib.checkedBigNumberify('./index.rsh:142:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2396, null);
          const v2401 = true;
          const v2402 = await txn1.getOutput('addWL', 'v2401', ctc8, v2401);
          
          const v8440 = v1325;
          const v8441 = v1326;
          const v8442 = v1327;
          const v8443 = v1328;
          const v8444 = v1329;
          const v8445 = v1330;
          const v8446 = v1331;
          const v8448 = v2341;
          const v8449 = v2341[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8450 = v8449[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8451 = stdlib.cast(false, true, v8450);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v2338 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2339 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2340 = [v1367, v2338, v2339];
      const v2341 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2340);
      ;
      const v2396 = v2240[stdlib.checkedBigNumberify('./index.rsh:142:13:spread', stdlib.UInt_max, '0')];
      const v2397 = stdlib.addressEq(v1638, v1306);
      const v2398 = stdlib.addressEq(v1638, v1325);
      const v2399 = v2397 ? true : v2398;
      stdlib.assert(v2399, {
        at: './index.rsh:153:24:application',
        fs: ['at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2396, null);
      const v2401 = true;
      const v2402 = await txn1.getOutput('addWL', 'v2401', ctc8, v2401);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v2240, v2402), {
          at: './index.rsh:143:13:application',
          fs: ['at ./index.rsh:143:13:application call to [unknown function] (defined at: ./index.rsh:143:13:function exp)', 'at ./index.rsh:156:20:application call to "res" (defined at: ./index.rsh:152:13:function exp)', 'at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v8440 = v1325;
      const v8441 = v1326;
      const v8442 = v1327;
      const v8443 = v1328;
      const v8444 = v1329;
      const v8445 = v1330;
      const v8446 = v1331;
      const v8448 = v2341;
      const v8449 = v2341[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8450 = v8449[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8451 = stdlib.cast(false, true, v8450);
      return;
      
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc12,
    cCM0_183: ctc13,
    cST0_183: ctc12,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc12,
    remWL0_183: ctc13
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1476 = ctc.selfAddress();
  const v1478 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:109:85:application call to "runcBT0_183" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1480 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1476), null);
  let v1481;
  switch (v1480[0]) {
    case 'None': {
      const v1482 = v1480[1];
      v1481 = false;
      
      break;
      }
    case 'Some': {
      const v1483 = v1480[1];
      v1481 = true;
      
      break;
      }
    }
  stdlib.assert(v1481, {
    at: './index.rsh:265:23:application',
    fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:17:function exp)', 'at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:109:85:application call to "runcBT0_183" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1486 = stdlib.gt(v1367, stdlib.checkedBigNumberify('./index.rsh:266:38:decimal', stdlib.UInt_max, '0'));
  const v1487 = stdlib.gt256(v1331, stdlib.checkedBigNumberify('./index.rsh:266:59:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1488 = v1486 ? v1487 : false;
  const v1489 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1476), null);
  const v1490 = stdlib.fromSome(v1489, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1491 = stdlib.ge256(v1331, v1490);
  const v1492 = v1488 ? v1491 : false;
  stdlib.assert(v1492, {
    at: './index.rsh:266:23:application',
    fs: ['at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:17:function exp)', 'at ./index.rsh:264:13:application call to [unknown function] (defined at: ./index.rsh:264:13:function exp)', 'at ./index.rsh:109:85:application call to "runcBT0_183" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1495 = ['cBT0_183', v1478];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1495],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:269:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:269:25:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2637 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2638 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2639 = [v1367, v2637, v2638];
          const v2640 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2639);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1638), null);
          const v2713 = v2640[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2714 = v2713[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
          const v2718 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1638), null);
          const v2719 = stdlib.fromSome(v2718, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2724 = stdlib.div256(v2719, v1331);
          const v2727 = stdlib.cast(false, true, v2714);
          const v2728 = stdlib.mul256(v2724, v2727);
          const v2729 = stdlib.cast(true, false, v2728);
          const v2735 = stdlib.sub(v2714, v2729);
          const v2738 = v2713[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '1')];
          const v2739 = v2713[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '2')];
          const v2740 = [v2735, v2738, v2739];
          const v2741 = stdlib.Array_set(v2640, stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '0'), v2740);
          sim_r.txns.push({
            amt: v2729,
            kind: 'from',
            to: v1638,
            tok: v1310
            });
          const v2742 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1638), null);
          const v2743 = stdlib.fromSome(v2742, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2744 = stdlib.add256(v2743, v2728);
          await stdlib.simMapSet(sim_r, 4, v1638, v2744);
          const v2745 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1638), null);
          const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2747 = stdlib.add256(v2746, stdlib.checkedBigNumberify('./index.rsh:278:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 5, v1638, v2747);
          const v2748 = true;
          const v2749 = await txn1.getOutput('cBT', 'v2748', ctc8, v2748);
          
          const v8605 = v1325;
          const v8606 = v1326;
          const v8607 = v1327;
          const v8608 = v1328;
          const v8609 = v1329;
          const v8610 = v1330;
          const v8611 = v1331;
          const v8613 = v2741;
          const v8614 = v2741[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8615 = v8614[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8616 = stdlib.cast(false, true, v8615);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v2637 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2638 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2639 = [v1367, v2637, v2638];
      const v2640 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2639);
      ;
      const v2709 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1638), null);
      let v2710;
      switch (v2709[0]) {
        case 'None': {
          const v2711 = v2709[1];
          v2710 = false;
          
          break;
          }
        case 'Some': {
          const v2712 = v2709[1];
          v2710 = true;
          
          break;
          }
        }
      stdlib.assert(v2710, {
        at: './index.rsh:272:24:application',
        fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2713 = v2640[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
      const v2714 = v2713[stdlib.checkedBigNumberify('./index.rsh:273:32:application', stdlib.UInt_max, '0')];
      const v2715 = stdlib.gt(v2714, stdlib.checkedBigNumberify('./index.rsh:273:39:decimal', stdlib.UInt_max, '0'));
      const v2716 = stdlib.gt256(v1331, stdlib.checkedBigNumberify('./index.rsh:273:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2717 = v2715 ? v2716 : false;
      const v2718 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1638), null);
      const v2719 = stdlib.fromSome(v2718, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2720 = stdlib.ge256(v1331, v2719);
      const v2721 = v2717 ? v2720 : false;
      stdlib.assert(v2721, {
        at: './index.rsh:273:24:application',
        fs: ['at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2724 = stdlib.div256(v2719, v1331);
      const v2727 = stdlib.cast(false, true, v2714);
      const v2728 = stdlib.mul256(v2724, v2727);
      const v2729 = stdlib.cast(true, false, v2728);
      const v2735 = stdlib.sub(v2714, v2729);
      const v2738 = v2713[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '1')];
      const v2739 = v2713[stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '2')];
      const v2740 = [v2735, v2738, v2739];
      const v2741 = stdlib.Array_set(v2640, stdlib.checkedBigNumberify('./index.rsh:276:50:application', stdlib.UInt_max, '0'), v2740);
      ;
      const v2742 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1638), null);
      const v2743 = stdlib.fromSome(v2742, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2744 = stdlib.add256(v2743, v2728);
      await stdlib.mapSet(map4, v1638, v2744);
      const v2745 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1638), null);
      const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2747 = stdlib.add256(v2746, stdlib.checkedBigNumberify('./index.rsh:278:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map5, v1638, v2747);
      const v2748 = true;
      const v2749 = await txn1.getOutput('cBT', 'v2748', ctc8, v2748);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v2539, v2749), {
          at: './index.rsh:262:13:application',
          fs: ['at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)', 'at ./index.rsh:279:20:application call to "res" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v8605 = v1325;
      const v8606 = v1326;
      const v8607 = v1327;
      const v8608 = v1328;
      const v8609 = v1329;
      const v8610 = v1330;
      const v8611 = v1331;
      const v8613 = v2741;
      const v8614 = v2741[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8615 = v8614[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8616 = stdlib.cast(false, true, v8615);
      return;
      
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1514 = ctc.selfAddress();
  const v1516 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:13:function exp)', 'at ./index.rsh:109:85:application call to "runcCM0_183" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1520 = stdlib.addressEq(v1514, v1306);
  const v1521 = stdlib.addressEq(v1514, v1325);
  const v1522 = v1520 ? true : v1521;
  stdlib.assert(v1522, {
    at: './index.rsh:312:23:application',
    fs: ['at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:21:function exp)', 'at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:13:function exp)', 'at ./index.rsh:109:85:application call to "runcCM0_183" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1526 = ['cCM0_183', v1516];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1526],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:316:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:316:26:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v2936 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v2937 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v2938 = [v1367, v2936, v2937];
          const v2939 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2938);
          ;
          const v3055 = v2838[stdlib.checkedBigNumberify('./index.rsh:308:13:spread', stdlib.UInt_max, '0')];
          const v3059 = true;
          const v3060 = await txn1.getOutput('cCM', 'v3059', ctc8, v3059);
          
          const v8770 = v3055;
          const v8771 = v1326;
          const v8772 = v1327;
          const v8773 = v1328;
          const v8774 = v1329;
          const v8775 = v1330;
          const v8776 = v1331;
          const v8778 = v2939;
          const v8779 = v2939[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8780 = v8779[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8781 = stdlib.cast(false, true, v8780);
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v2936 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v2937 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v2938 = [v1367, v2936, v2937];
      const v2939 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v2938);
      ;
      const v3055 = v2838[stdlib.checkedBigNumberify('./index.rsh:308:13:spread', stdlib.UInt_max, '0')];
      const v3056 = stdlib.addressEq(v1638, v1306);
      const v3057 = stdlib.addressEq(v1638, v1325);
      const v3058 = v3056 ? true : v3057;
      stdlib.assert(v3058, {
        at: './index.rsh:319:24:application',
        fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v3059 = true;
      const v3060 = await txn1.getOutput('cCM', 'v3059', ctc8, v3059);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v2838, v3060), {
          at: './index.rsh:309:13:application',
          fs: ['at ./index.rsh:309:13:application call to [unknown function] (defined at: ./index.rsh:309:13:function exp)', 'at ./index.rsh:321:20:application call to "res" (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v8770 = v3055;
      const v8771 = v1326;
      const v8772 = v1327;
      const v8773 = v1328;
      const v8774 = v1329;
      const v8775 = v1330;
      const v8776 = v1331;
      const v8778 = v2939;
      const v8779 = v2939[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8780 = v8779[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8781 = stdlib.cast(false, true, v8780);
      return;
      
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc12,
    cCM0_183: ctc13,
    cST0_183: ctc12,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc12,
    remWL0_183: ctc13
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1437 = ctc.selfAddress();
  const v1439 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:109:85:application call to "runcST0_183" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1441 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1437), null);
  const v1442 = stdlib.fromSome(v1441, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1443 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1437), null);
  let v1444;
  switch (v1443[0]) {
    case 'None': {
      const v1445 = v1443[1];
      v1444 = false;
      
      break;
      }
    case 'Some': {
      const v1446 = v1443[1];
      v1444 = true;
      
      break;
      }
    }
  stdlib.assert(v1444, {
    at: './index.rsh:209:23:application',
    fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:109:85:application call to "runcST0_183" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1447 = stdlib.gt256(v1442, stdlib.checkedBigNumberify('./index.rsh:210:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1447, {
    at: './index.rsh:210:23:application',
    fs: ['at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:17:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:109:85:application call to "runcST0_183" (defined at: ./index.rsh:204:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1450 = ['cST0_183', v1439];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1450],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:213:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:213:25:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v3235 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3236 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3237 = [v1367, v3235, v3236];
          const v3238 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3237);
          ;
          const v3367 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1638), null);
          const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1638), null);
          const v3374 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1638), null);
          const v3375 = stdlib.fromSome(v3374, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3376 = stdlib.add256(v3375, v3368);
          await stdlib.simMapSet(sim_r, 2, v1638, v3376);
          await stdlib.simMapSet(sim_r, 0, v1638, stdlib.checkedBigNumberify('./index.rsh:222:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3377 = true;
          const v3378 = await txn1.getOutput('cST', 'v3377', ctc8, v3377);
          
          const v8935 = v1325;
          const v8936 = v1326;
          const v8937 = v1327;
          const v8938 = v1328;
          const v8939 = v1329;
          const v8940 = v1330;
          const v8941 = v1331;
          const v8943 = v3238;
          const v8944 = v3238[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8945 = v8944[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v8946 = stdlib.cast(false, true, v8945);
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v3235 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v3236 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v3237 = [v1367, v3235, v3236];
      const v3238 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3237);
      ;
      const v3367 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1638), null);
      const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3369 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1638), null);
      let v3370;
      switch (v3369[0]) {
        case 'None': {
          const v3371 = v3369[1];
          v3370 = false;
          
          break;
          }
        case 'Some': {
          const v3372 = v3369[1];
          v3370 = true;
          
          break;
          }
        }
      stdlib.assert(v3370, {
        at: './index.rsh:217:24:application',
        fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3373 = stdlib.gt256(v3368, stdlib.checkedBigNumberify('./index.rsh:218:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3373, {
        at: './index.rsh:218:24:application',
        fs: ['at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3374 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1638), null);
      const v3375 = stdlib.fromSome(v3374, stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3376 = stdlib.add256(v3375, v3368);
      await stdlib.mapSet(map2, v1638, v3376);
      await stdlib.mapSet(map0, v1638, stdlib.checkedBigNumberify('./index.rsh:222:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3377 = true;
      const v3378 = await txn1.getOutput('cST', 'v3377', ctc8, v3377);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v3137, v3378), {
          at: './index.rsh:205:13:application',
          fs: ['at ./index.rsh:205:13:application call to [unknown function] (defined at: ./index.rsh:205:13:function exp)', 'at ./index.rsh:223:20:application call to "res" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v8935 = v1325;
      const v8936 = v1326;
      const v8937 = v1327;
      const v8938 = v1328;
      const v8939 = v1329;
      const v8940 = v1330;
      const v8941 = v1331;
      const v8943 = v3238;
      const v8944 = v3238[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8945 = v8944[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v8946 = stdlib.cast(false, true, v8945);
      return;
      
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc15,
    cCM0_183: ctc13,
    cST0_183: ctc15,
    dBT0_183: ctc12,
    docHash0_183: ctc16,
    optIn0_183: ctc15,
    remWL0_183: ctc13
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1460 = ctc.selfAddress();
  const v1462 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:109:85:application call to "rundBT0_183" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1463 = v1462[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1466 = stdlib.addressEq(v1460, v1306);
  const v1467 = stdlib.addressEq(v1460, v1325);
  const v1468 = v1466 ? true : v1467;
  stdlib.assert(v1468, {
    at: './index.rsh:246:23:application',
    fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:20:function exp)', 'at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:109:85:application call to "rundBT0_183" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1469 = stdlib.cast(true, false, v1463);
  const v1470 = stdlib.gt(v1469, stdlib.checkedBigNumberify('./index.rsh:247:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1470, {
    at: './index.rsh:247:23:application',
    fs: ['at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:20:function exp)', 'at ./index.rsh:245:13:application call to [unknown function] (defined at: ./index.rsh:245:13:function exp)', 'at ./index.rsh:109:85:application call to "rundBT0_183" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1474 = ['dBT0_183', v1462];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1474],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:251:24:decimal', stdlib.UInt_max, '0'), [[v1469, v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3489 = v3436[stdlib.checkedBigNumberify('./index.rsh:242:13:spread', stdlib.UInt_max, '0')];
          const v3490 = stdlib.cast(true, false, v3489);
          ;
          const v3531 = stdlib.add(v1367, v3490);
          const v3534 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3535 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3536 = [v3531, v3534, v3535];
          const v3537 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3536);
          sim_r.txns.push({
            amt: v3490,
            kind: 'to',
            tok: v1310
            });
          const v3690 = true;
          const v3691 = await txn1.getOutput('dBT', 'v3690', ctc8, v3690);
          
          const v3697 = stdlib.add256(v1330, v3489);
          const v3698 = stdlib.add256(v1327, stdlib.checkedBigNumberify('./index.rsh:258:88:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v9100 = v1325;
          const v9101 = v1326;
          const v9102 = v3698;
          const v9103 = v1328;
          const v9104 = v1329;
          const v9105 = v3697;
          const v9106 = v1331;
          const v9108 = v3537;
          const v9109 = v3537[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9110 = v9109[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9111 = stdlib.cast(false, true, v9110);
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      undefined /* setApiDetails */;
      const v3489 = v3436[stdlib.checkedBigNumberify('./index.rsh:242:13:spread', stdlib.UInt_max, '0')];
      const v3490 = stdlib.cast(true, false, v3489);
      ;
      const v3531 = stdlib.add(v1367, v3490);
      const v3534 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v3535 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v3536 = [v3531, v3534, v3535];
      const v3537 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3536);
      ;
      const v3685 = stdlib.addressEq(v1638, v1306);
      const v3686 = stdlib.addressEq(v1638, v1325);
      const v3687 = v3685 ? true : v3686;
      stdlib.assert(v3687, {
        at: './index.rsh:254:24:application',
        fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3689 = stdlib.gt(v3490, stdlib.checkedBigNumberify('./index.rsh:255:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3689, {
        at: './index.rsh:255:24:application',
        fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3690 = true;
      const v3691 = await txn1.getOutput('dBT', 'v3690', ctc8, v3690);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v3436, v3691), {
          at: './index.rsh:243:13:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:257:20:application call to "res" (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v3697 = stdlib.add256(v1330, v3489);
      const v3698 = stdlib.add256(v1327, stdlib.checkedBigNumberify('./index.rsh:258:88:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v9100 = v1325;
      const v9101 = v1326;
      const v9102 = v3698;
      const v9103 = v1328;
      const v9104 = v1329;
      const v9105 = v3697;
      const v9106 = v1331;
      const v9108 = v3537;
      const v9109 = v3537[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9110 = v9109[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9111 = stdlib.cast(false, true, v9110);
      return;
      
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
      return;
      break;
      }
    }
  
  
  };
export async function _docHash3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _docHash3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _docHash3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc15,
    cCM0_183: ctc13,
    cST0_183: ctc15,
    dBT0_183: ctc16,
    docHash0_183: ctc12,
    optIn0_183: ctc15,
    remWL0_183: ctc13
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1374 = ctc.selfAddress();
  const v1376 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)', 'at ./index.rsh:109:85:application call to "rundocHash0_183" (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v1380 = stdlib.addressEq(v1374, v1306);
  const v1381 = stdlib.addressEq(v1374, v1325);
  const v1382 = v1380 ? true : v1381;
  stdlib.assert(v1382, {
    at: './index.rsh:129:23:application',
    fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:18:function exp)', 'at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)', 'at ./index.rsh:109:85:application call to "rundocHash0_183" (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'docHash'
    });
  const v1386 = ['docHash0_183', v1376];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1386],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:133:26:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v3833 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v3834 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v3835 = [v1367, v3833, v3834];
          const v3836 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3835);
          ;
          const v4000 = v3735[stdlib.checkedBigNumberify('./index.rsh:125:13:spread', stdlib.UInt_max, '0')];
          const v4004 = true;
          const v4005 = await txn1.getOutput('docHash', 'v4004', ctc8, v4004);
          
          const v9265 = v1325;
          const v9266 = v1326;
          const v9267 = v1327;
          const v9268 = v4000;
          const v9269 = v1329;
          const v9270 = v1330;
          const v9271 = v1331;
          const v9273 = v3836;
          const v9274 = v3836[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9275 = v9274[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9276 = stdlib.cast(false, true, v9275);
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v3833 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v3834 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v3835 = [v1367, v3833, v3834];
      const v3836 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v3835);
      ;
      const v4000 = v3735[stdlib.checkedBigNumberify('./index.rsh:125:13:spread', stdlib.UInt_max, '0')];
      const v4001 = stdlib.addressEq(v1638, v1306);
      const v4002 = stdlib.addressEq(v1638, v1325);
      const v4003 = v4001 ? true : v4002;
      stdlib.assert(v4003, {
        at: './index.rsh:136:24:application',
        fs: ['at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
        msg: null,
        who: 'docHash'
        });
      const v4004 = true;
      const v4005 = await txn1.getOutput('docHash', 'v4004', ctc8, v4004);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v3735, v4005), {
          at: './index.rsh:126:13:application',
          fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:138:20:application call to "res" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:135:13:application call to [unknown function] (defined at: ./index.rsh:135:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v9265 = v1325;
      const v9266 = v1326;
      const v9267 = v1327;
      const v9268 = v4000;
      const v9269 = v1329;
      const v9270 = v1330;
      const v9271 = v1331;
      const v9273 = v3836;
      const v9274 = v3836[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9275 = v9274[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9276 = stdlib.cast(false, true, v9275);
      return;
      
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
      return;
      break;
      }
    }
  
  
  };
export async function _optIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _optIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc13,
    aST0_183: ctc14,
    addWL0_183: ctc13,
    cBT0_183: ctc12,
    cCM0_183: ctc13,
    cST0_183: ctc12,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc12,
    remWL0_183: ctc13
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1454 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:109:85:application call to "runoptIn0_183" (defined at: ./index.rsh:228:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v1458 = ['optIn0_183', v1454];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1458],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:235:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:235:25:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v4132 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4133 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4134 = [v1367, v4132, v4133];
          const v4135 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4134);
          ;
          const v4312 = true;
          const v4313 = await txn1.getOutput('optIn', 'v4312', ctc8, v4312);
          
          const v9430 = v1325;
          const v9431 = v1326;
          const v9432 = v1327;
          const v9433 = v1328;
          const v9434 = v1329;
          const v9435 = v1330;
          const v9436 = v1331;
          const v9438 = v4135;
          const v9439 = v4135[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9440 = v9439[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9441 = stdlib.cast(false, true, v9440);
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v4132 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v4133 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v4134 = [v1367, v4132, v4133];
      const v4135 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4134);
      ;
      const v4312 = true;
      const v4313 = await txn1.getOutput('optIn', 'v4312', ctc8, v4312);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v4034, v4313), {
          at: './index.rsh:229:13:application',
          fs: ['at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:238:20:application call to "res" (defined at: ./index.rsh:237:13:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v9430 = v1325;
      const v9431 = v1326;
      const v9432 = v1327;
      const v9433 = v1328;
      const v9434 = v1329;
      const v9435 = v1330;
      const v9436 = v1331;
      const v9438 = v4135;
      const v9439 = v4135[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9440 = v9439[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9441 = stdlib.cast(false, true, v9440);
      return;
      
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
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
  const ctc1 = stdlib.T_UInt256;
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Data({
    aBT0_183: ctc12,
    aST0_183: ctc13,
    addWL0_183: ctc12,
    cBT0_183: ctc14,
    cCM0_183: ctc12,
    cST0_183: ctc14,
    dBT0_183: ctc15,
    docHash0_183: ctc16,
    optIn0_183: ctc14,
    remWL0_183: ctc12
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
  
  
  const [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1]);
  const v1402 = ctc.selfAddress();
  const v1404 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:109:85:application call to "runremWL0_183" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1408 = stdlib.addressEq(v1402, v1306);
  const v1409 = stdlib.addressEq(v1402, v1325);
  const v1410 = v1408 ? true : v1409;
  stdlib.assert(v1410, {
    at: './index.rsh:164:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:18:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:109:85:application call to "runremWL0_183" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:109:85:application call to [unknown function] (defined at: ./index.rsh:109:85:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1414 = ['remWL0_183', v1404];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1306, v1310, v1325, v1326, v1327, v1328, v1329, v1330, v1331, v1334, v1366, v1367, v1368, v1414],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:168:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:168:26:decimal', stdlib.UInt_max, '0'), v1310]]],
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
      
      const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
      
      switch (v1639[0]) {
        case 'aBT0_183': {
          const v1642 = v1639[1];
          
          break;
          }
        case 'aST0_183': {
          const v1941 = v1639[1];
          
          break;
          }
        case 'addWL0_183': {
          const v2240 = v1639[1];
          
          break;
          }
        case 'cBT0_183': {
          const v2539 = v1639[1];
          
          break;
          }
        case 'cCM0_183': {
          const v2838 = v1639[1];
          
          break;
          }
        case 'cST0_183': {
          const v3137 = v1639[1];
          
          break;
          }
        case 'dBT0_183': {
          const v3436 = v1639[1];
          
          break;
          }
        case 'docHash0_183': {
          const v3735 = v1639[1];
          
          break;
          }
        case 'optIn0_183': {
          const v4034 = v1639[1];
          
          break;
          }
        case 'remWL0_183': {
          const v4333 = v1639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v4431 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
          const v4432 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
          const v4433 = [v1367, v4431, v4432];
          const v4434 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4433);
          ;
          const v4619 = v4333[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v4619, undefined /* Nothing */);
          const v4624 = true;
          const v4625 = await txn1.getOutput('remWL', 'v4624', ctc8, v4624);
          
          const v9595 = v1325;
          const v9596 = v1326;
          const v9597 = v1327;
          const v9598 = v1328;
          const v9599 = v1329;
          const v9600 = v1330;
          const v9601 = v1331;
          const v9603 = v4434;
          const v9604 = v4434[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9605 = v9604[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
          const v9606 = stdlib.cast(false, true, v9605);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc6, ctc1, ctc7, ctc8, ctc1, ctc1, ctc11, ctc10, ctc9, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1639], secs: v1641, time: v1640, didSend: v803, from: v1638 } = txn1;
  switch (v1639[0]) {
    case 'aBT0_183': {
      const v1642 = v1639[1];
      return;
      break;
      }
    case 'aST0_183': {
      const v1941 = v1639[1];
      return;
      break;
      }
    case 'addWL0_183': {
      const v2240 = v1639[1];
      return;
      break;
      }
    case 'cBT0_183': {
      const v2539 = v1639[1];
      return;
      break;
      }
    case 'cCM0_183': {
      const v2838 = v1639[1];
      return;
      break;
      }
    case 'cST0_183': {
      const v3137 = v1639[1];
      return;
      break;
      }
    case 'dBT0_183': {
      const v3436 = v1639[1];
      return;
      break;
      }
    case 'docHash0_183': {
      const v3735 = v1639[1];
      return;
      break;
      }
    case 'optIn0_183': {
      const v4034 = v1639[1];
      return;
      break;
      }
    case 'remWL0_183': {
      const v4333 = v1639[1];
      undefined /* setApiDetails */;
      ;
      const v4431 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '1')];
      const v4432 = v1366[stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '2')];
      const v4433 = [v1367, v4431, v4432];
      const v4434 = stdlib.Array_set(v1334, stdlib.checkedBigNumberify('./index.rsh:109:85:dot', stdlib.UInt_max, '0'), v4433);
      ;
      const v4619 = v4333[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
      const v4620 = stdlib.addressEq(v1638, v1306);
      const v4621 = stdlib.addressEq(v1638, v1325);
      const v4622 = v4620 ? true : v4621;
      stdlib.assert(v4622, {
        at: './index.rsh:171:24:application',
        fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v4619, undefined /* Nothing */);
      const v4624 = true;
      const v4625 = await txn1.getOutput('remWL', 'v4624', ctc8, v4624);
      if (v803) {
        stdlib.protect(ctc0, await interact.out(v4333, v4625), {
          at: './index.rsh:161:13:application',
          fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:174:20:application call to "res" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v9595 = v1325;
      const v9596 = v1326;
      const v9597 = v1327;
      const v9598 = v1328;
      const v9599 = v1329;
      const v9600 = v1330;
      const v9601 = v1331;
      const v9603 = v4434;
      const v9604 = v4434[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9605 = v9604[stdlib.checkedBigNumberify('./index.rsh:121:45:application', stdlib.UInt_max, '0')];
      const v9606 = stdlib.cast(false, true, v9605);
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
export async function docHash(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for docHash expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for docHash expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _docHash3(ctcTop, interact);}
  };
export async function optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _optIn3(ctcTop, interact);}
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
    impure: [`aBT(address)byte`, `aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint256,uint256)`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`],
    sigs: [`aBT(address)byte`, `aST(address,address,uint256)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `claimSTBT(address)(uint256,uint256)`, `dBT(uint256)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint256,uint256,uint256)`, `totSTBTDRec(address)(uint256,uint256,uint256)`, `vBtBal()uint256`, `vCcCm()(address,address)`, `vHash()byte[96]`, `vcVersion()byte[4]`, `wlMember(address)byte`]
    },
  appApproval: `BiAlAAMBCEAYIBEEYMYBxwG8rcerCKG32tcK4OXDsAywgt+wDNiOmeAOv8rY8Ard0eGYCfnZnrwJ6+aE0wnx4ZPhCKHg7OcEyfyYvAX95qmlB4rSwpsI+YSKkQWwnePdAZz4g4gC9frfkgEC////////////AY0CBQkQoI0GJgUBAQEAAQIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIjUAMRhBDIsrZEkiWzUBJVs1AjEZJBJBABwxACELr0sBKUsCVwB/ZksBKEsCV39IZkhIQgxGNhoAF0lBAtciNQQkNQZJIQwMQAG/SSENDEAA5kkhDgxAAJRJIQ8MQAA5SSEQDEAAFiEQEkQ2GgE1/4ABCTT/UCEEr1BCAyAhDxJENAEjEkQpZChkUCpkUEk1A1fMATUHQgvyIQ4SRDQBIxJENhoBNf8yAzT/iAvuV0IhSTX+VwEgNP4iVU0yAzT/iAvZV4QhSTX+VwEgNP4iVU1QMgM0/4gLw1elIUk1/lcBIDT+IlVNUDUHQgueSSERDEAAHCEREkQ0ASMSRClkKGRQKmRQSTUDV0gENQdCC3shDRJENAEjEkQpZChkUCpkUEk1A1ftIDQDV80gUDQDV0wgUDUHQgtTSSESDEAAckkhEwxAADpJIRQMQAAUIRQSRCs1/4ABAzT/UCEJr1BCAjwhExJENAEjEkQpZChkUCpkUEk1A4G3AiEGWDUHQgsLIRISRDQBIxJENhoBiAsNV8YBSTX+IlVAAAYiNf9CAAYkNf9CAAA0/xZRBwg1B0IK2kkhFQxAAD4hFRJENAEjEkQ2GgE1/zIDNP+ICs9XACFJNf5XASA0/iJVTTIDNP+ICrpXISFJNf5XASA0/iJVTVA1B0IKlSEMEkQ2GgE1/yo0/1AhBK9QQgGTSSEWDEAAlkkhFwxAAFhJIRgMQAA/SSEZDEAAFiEZEkQ2GgE1/4ABBjT/UCEEr1BCAWEhGBJENAEjEkQpZChkUCpkUEk1A1cAIDQDVyggUDUHQgotIRcSRDYaATX/gAEHNP9QQgEtSSEaDEAAFCEaEkQrNf+AAQg0/1AhCa9QQgESIRYSRDQBIxJEKWQoZFAqZFBJNQNXbGA1B0IJ5EkhGwxAADFJIRwMQAAWIRwSRDYaATX/gAEENP9QIQSvUEIA0iEbEkQrNf+AAQU0/1AhCa9QQgC+SSEdDEAAGCEdEkQ2GgE2GgJQNhoDUDX/KDT/UEIAn4Hf9oYLEkQ2GgE1/yk0/1AhBK9QQgCINhoCFzUENhoDNhoBF0khHgxAB6JJIwxAAG0jEkQjNAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNXACA1/4AEp2XEtLAyBiEfD0Q0/zEAEkQ0/zQDIQZbNANXKCA0A1dIBDQDV0wgNANXbGA0A1fMARc0A1fNIDQDV+0gMgY0AyEgIQdYQggwSCM0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lKSkpKSlcAIDX/IQZbNf5XKCA1/VdIBDX8V0wgNftXbGA1+lfMARc1+VfNIDX4V+0gNfchICEHWDX2gZ4CIQdYNfWBrwJbNfRJNQU184AE47jRlTTzULAyBiEfDEQ08yJVSSEhDEAChEmBBwxAAPdJJQxAAKhJISIMQABrISISRDTzVwEgNfIxADT/EjEANP0SEUQ08kmICEoiIQpMVksBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAASEAGwKDUHNP80/jT9NPw0+zT6NPk0+DT3MgY09BY09VcICFA09VcQAVBCByxIgAkAAAAAAAAQ2AGwKDUHNP80/jT9NPw0+zT6NPk0+DT3MgY09BY09VcICFA09VcQAVBCBvZINPNXAWA18jEANP8SMQA0/RIRRIAJAAAAAAAAD6QBsCg1BzT/NP40/TT8NPs08jT5NPg09zIGNPQWNPVXCAhQNPVXEAFQQgatSYEGDEAAgEg081cBIDXyNPJJNfFJSiEjWyISRCVbIhJEIlsiEkQhBVs18DTwNP6IB3oxADT/EjEANP0SEUQ08CINRIAJAAAAAAAADmoBsCg1BzT/NP40/TT8NPsnBKCIB2o0+jT5NPg08aCIB1409zIGNPQ08AgWNPVXCAhQNPVXEAFQQgYmSDIDMQCIBu5XACFJNfFXASA08SJVTTXyMQCIBtlXxgFJNfAiVUAABiI18UIABiQ18UIAADTxRDTyMgOlRDEAMQCIBrIoMgMxAIgGqldCIUk18FcBIDTwIlVNNPKgiAblUDXwSVcAQjTwUExXY2RQSwEpSwJXAH9mSwEoSwJXf0hmSEgxADEAiAZsgCEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA18FchpjTwTFBLASlLAlcAf2ZLAShLAld/SGZISIAJAAAAAAAADTEBsCg1BzT/NP40/TT8NPs0+jT5NPg09zIGNPQWNPVXCAhQNPVXEAFQQgUnSSEeDEACKUkjDEABu0khCAxAAElINPNXASA18jEANP8SMQA0/RIRRIAJAAAAAAAAC/MBsCg1BzT/NP408jT8NPs0+jT5NPg09zIGNPQWNPVXCAhQNPVXEAFQQgTKSDT0FjT1VwgIUDT1VxABUDXyMQCIBYNXxgFJNfAiVUAABiI18UIABiQ18UIAADTxRDTyVwARSTXwIls17zIDMQCIBVZXYyFJNe1XASA07SJVTTXuNO8iDTT3MgOlEDT3NO6nEEQ07jT3oogFfCEFrzTvFlCjiAVxSTXtSUohI1siEkQlWyISRCJbIhJEIQVbNeyxIrIBNOyyEiEIshAxALIUNP6yEbMxADEAiATsKDIDMQCIBORXhCFJNetXASA06yJVTTTtoIgFH1A160lXAIQ061BMV6UiUEsBKUsCVwB/ZksBKEsCV39IZkhIMQAxAIgEpigyAzEAiASeV6UhSTXrVwEgNOsiVU0nBKCIBNlQNetJVwClNOtQTFfGAVBLASlLAlcAf2ZLAShLAld/SGZISIAJAAAAAAAACrwBsCg1BzT/NP40/TT8NPs0+jT5NPg09zIGNO807AkWNPBXCAhQNPBXEAFQQgNfSDTzVwEgNfIxADT/EjEANP0SEUQ08kmIBBUkIQpMVksBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAAJYQGwKDUHNP80/jT9NPw0+zT6NPk0+DT3MgY09BY09VcICFA09VcQAVBCAvdJJAxAAQ5INPNXAWA18jTyVwAgNfE08lcgIDXwNPJXQCA17zTxNP8SNPE0/RIRRDTvMgOlRDTwSYgDjCQhCkxWSwEpSwJXAH9mSwEoSwJXf0hmSEg08EmIA20oMgM08IgDZVcAIUk17lcBIDTuIlVNNO+giAOgUDXuVyGmNO5MUEsBKUsCVwB/ZksBKEsCV39IZkhINPBJiAMtKDIDNPCIAyVXYyFJNe5XASA07iJVTTTvoIgDYFA17klXAGM07lBMV4RDUEsBKUsCVwB/ZksBKEsCV39IZkhIgAkAAAAAAAAIJQGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NO+giAMWMgY09BY09VcICFA09VcQAVBCAeNINPNXASA18jT0FjT1VwgIUDT1VxABUDXxNPI18DEANP8SMQA0/RIRRDIDNPCIAoNXYyFJNe9XASA07yJVTTIDpUQyAzEAiAJqV2MhSTXuVwEgNO4iVU0096KIAqUhBa808VcAEVcACFCjiAKVNe808EmIAj4oMgM08IgCNlchIUk17lcBIDTuIlVNNO+giAJxUDXuSVcAITTuUExXQoVQSwEpSwJXAH9mSwEoSwJXf0hmSEiACQAAAAAAAAbiAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc076CIAicyBjTxQgEBIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfxXqSA1+4AEmjD5HTT/UDT+FlEHCFA0/VA0/BZQNPtQsCEkiAGUIQevSTX6VwARNfkhJIgBhLEisgEishIhCLIQMgqyFDT8shGzMQA0/DT9gAQxLjAwMgOAYGFqZG5hZWluYXdpbmRpYWVuZ3RuaWZyandyaXRuaXF3cm5pcmVmaW5kaW5pZ2FqZG5hZWluYXdpZGlhZW5ndG5paXRuaXF3cm5pcmVmaW5kaW5pZ2Z1YWViZnViYXd1cjT+MgMyAzIGJa80+VcICFA0+VcQAVBCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP9XABFJNfQiWzXzIQWvNPMWUDXyNPU09hZQNPdQNPhQNPlQNPpQNPsWUQcIUDT8UDT9UDT/UDT0UDTzFlA08lApSwFXAH9nKEsBV39/ZypLAVf+WWdIIzUBMgY1AkIAHDEZISESRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghC6+JSSliSwEoYlBMSIk0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECEIEkQ4EU8CEkQ4EhJEiUkVIQZMCa9MUIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 2,
  mapDataSize: 199,
  stateKeys: 3,
  stateSize: 343,
  unsupported: [],
  version: 10,
  warnings: []
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
                "internalType": "struct T13",
                "name": "v1307",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1308",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1309",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1310",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1311",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "internalType": "struct T13",
                "name": "v1307",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1308",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1309",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1310",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1311",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                    "internalType": "enum _enum_T21",
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
                    "name": "_aBT0_183",
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
                    "internalType": "struct T17",
                    "name": "_aST0_183",
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
                    "name": "_addWL0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_183",
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
                    "name": "_cCM0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_183",
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
                    "name": "_dBT0_183",
                    "type": "tuple"
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
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_docHash0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_183",
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
                    "name": "_remWL0_183",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1639",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
        "internalType": "struct T25",
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
    "name": "_reach_oe_v1762",
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
    "name": "_reach_oe_v2085",
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
    "name": "_reach_oe_v2401",
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
    "name": "_reach_oe_v2748",
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
    "name": "_reach_oe_v3059",
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
    "name": "_reach_oe_v3377",
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
    "name": "_reach_oe_v3690",
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
    "name": "_reach_oe_v4004",
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
    "name": "_reach_oe_v4312",
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
    "name": "_reach_oe_v4624",
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
                    "internalType": "enum _enum_T21",
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
                    "name": "_aBT0_183",
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
                    "internalType": "struct T17",
                    "name": "_aST0_183",
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
                    "name": "_addWL0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_183",
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
                    "name": "_cCM0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_183",
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
                    "name": "_dBT0_183",
                    "type": "tuple"
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
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_docHash0_183",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_183",
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
                    "name": "_remWL0_183",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1639",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
        "internalType": "struct T25",
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
        "name": "v9610",
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
          }
        ],
        "internalType": "struct T4",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "docHash",
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
    "name": "optIn",
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
        "internalType": "struct T8",
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
        "name": "v9614",
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
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vBtBal",
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
    "name": "vCcCm",
    "outputs": [
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
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vHash",
    "outputs": [
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
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vcVersion",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T3",
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
        "name": "v9620",
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
  Bytecode: `0x6080604052604051620054723803806200547283398101604081905262000026916200077e565b600080554360035562000038620003df565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b92919062000857565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415601062000214565b6060810151630312e30360e41b90526080810180517f616a646e6165696e6177696e646961656e67746e6966726a777269746e697177905280517f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e602090910152517f6969746e697177726e69726566696e64696e69676675616562667562617775726040909101526200016162000470565b80513390526020808401805160609081015184516001600160a01b0391821690850152825160409081015185870180519190931690528683015182518601528151600090820181905260808089015184519095019490945293518501518251901515930192909252805160a001839052805160c001839052514360e0909101529184015191840151620001f69291906200023e565b602082015161010001526200020b81620002c1565b50505062000ad0565b816200023a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002486200049b565b60005b60018110156200029e578481600181106200026a576200026a620008ea565b6020020151828260018110620002845762000284620008ea565b602002015280620002958162000900565b9150506200024b565b5081818460018110620002b557620002b5620008ea565b60200201529392505050565b6040805160208082019092526000815290820151610100015151518152620002e8620004e8565b8251516001600160a01b03908116825283516020908101518216818401528085018051519092166040808501919091528251820151606080860191909152835182015160808087019190915284519091015160a080870191909152845190910151151560c08087019190915284519091015160e086015283510151610100808601919091528351810151610120860152835181015151610140860152925190920151515161016084015283516101808401526003600055436001559051620003b39183910162000971565b60405160208183030381529060405260029080519060200190620003d992919062000599565b50505050565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101620004136200049b565b8152604080516060810182526000808252602082810182905292820152910190815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160808101825260009181018281526060820192909252908152602081016200046b62000628565b60405180602001604052806001905b620004d1604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004aa5790505090565b604080516101a0810182526000808252602080830182905282840182905283519081019093528252906060820190815260006020808301829052604080516060810182528381529182018390528181019290925291019081526020016000151581526020016000815260200160008152602001620005656200049b565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b828054620005a79062000a93565b90600052602060002090601f016020900481019282620005cb576000855562000616565b82601f10620005e657805160ff191683800117855562000616565b8280016001018555821562000616579182015b8281111562000616578251825591602001919060010190620005f9565b5062000624929150620006a0565b5090565b60408051610120810182526000808252825160208181019094529081529091820190815260006020808301829052604080516060810182528381529182018390528181019290925291019081526020016000151581526020016000815260200160008152602001600081526020016200046b6200049b565b5b80821115620006245760008155600101620006a1565b604080519081016001600160401b0381118282101715620006e857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620006e857634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620006e857634e487b7160e01b600052604160045260246000fd5b805180151581146200076157600080fd5b919050565b80516001600160a01b03811681146200076157600080fd5b60008183036101208112156200079357600080fd5b6200079d620006b7565b83518152601f198201915061010080831215620007b957600080fd5b620007c3620006ee565b6080841215620007d257600080fd5b620007dc6200071f565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200081460a0870162000750565b60208201526200082760c0870162000766565b60408201526200083a60e0870162000766565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620008d66101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200092357634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b6001811015620003d9576200095a84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200092e565b81516001600160a01b03168152610260810160208301516200099e60208401826001600160a01b03169052565b506040830151620009ba60408401826001600160a01b03169052565b506060830151620009d86060840182516001600160e01b0319169052565b506080830151608083015260a083015162000a0a60a08401828051825260208082015190830152604090810151910152565b5060c083015161010062000a218185018315159052565b60e085015161012085810191909152908501516101408086019190915290850151915061016062000a55818601846200092a565b9085015180516101c086015260208101516101e086015260400151151561020085015284015161022084015250610180909201516102409091015290565b600181811c9082168062000aa857607f821691505b6020821081141562000aca57634e487b7160e01b600052602260045260246000fd5b50919050565b6149928062000ae06000396000f3fe6080604052600436106101c45760003560e01c806359cac3a4116100f6578063a153a9bd1161008f578063cadc2e7a11610061578063cadc2e7a146104fa578063d1ad1a371461051a578063dc01fb9d1461052f578063e9b451af1461054f57005b8063a153a9bd14610484578063ab53f2c614610497578063abe9f98d146104ba578063acf0cc22146104da57005b806373b4522c116100c857806373b4522c1461042957806374fcef121461043c578063817d57f31461044f578063832307571461046f57005b806359cac3a4146103cb5780635b48684e146104065780635d3320a01461040e5780637333bd091461042157005b80631fa8b02f116101685780633bc5b7bf1161013a5780633bc5b7bf1461036e5780634acdd6cc1461038e57806354f2991c14610396578063573fa8a1146103a957005b80631fa8b02f146102be5780632080ea1c146103005780632152dd461461032d5780632f42e5091461035b57005b806312822a75116101a157806312822a751461025e5780631956a232146102735780631e3f5f07146102965780631e93b0f1146102a957005b8063046989b6146101cd57806306dc92ff1461020e578063125f48e41461023b57005b366101cb57005b005b3480156101d957600080fd5b506101e2610562565b6040805182516001600160a01b0390811682526020938401511692810192909252015b60405180910390f35b34801561021a57600080fd5b5061022e610229366004613e42565b61067c565b6040516102059190613e85565b61024e610249366004613e42565b6106a8565b6040519015158152602001610205565b34801561026a57600080fd5b5061024e610709565b34801561027f57600080fd5b506102886107cc565b604051908152602001610205565b61024e6102a4366004613eb5565b610890565b3480156102b557600080fd5b50600354610288565b3480156102ca57600080fd5b506102de6102d9366004613e42565b610906565b6040805182518152602080840151908201529181015190820152606001610205565b34801561030c57600080fd5b5061032061031b366004613e42565b610acb565b6040516102059190613ef6565b34801561033957600080fd5b50610342610af1565b60405190516001600160e01b0319168152602001610205565b61024e610369366004613e42565b610bc1565b34801561037a57600080fd5b5061022e610389366004613e42565b610c1e565b61024e610c44565b61024e6103a436600461402f565b610c91565b3480156103b557600080fd5b506103be610cea565b604051610205919061404b565b3480156103d757600080fd5b506103eb6103e6366004613e42565b610dc6565b60408051825181526020928301519281019290925201610205565b61024e610f32565b6101cb61041c36600461406c565b610f81565b61024e610fa5565b6101cb610437366004614085565b610ff2565b61024e61044a366004613e42565b611012565b34801561045b57600080fd5b5061022e61046a366004613e42565b611073565b34801561047b57600080fd5b50600154610288565b61024e610492366004613e42565b611099565b3480156104a357600080fd5b506104ac6110fc565b6040516102059291906140c3565b3480156104c657600080fd5b5061024e6104d5366004613e42565b611199565b3480156104e657600080fd5b5061022e6104f5366004613e42565b6112c0565b34801561050657600080fd5b5061022e610515366004613e42565b6112e6565b34801561052657600080fd5b506102de61130c565b34801561053b57600080fd5b5061022e61054a366004613e42565b611436565b61024e61055d3660046140fd565b61145c565b60408051808201909152600080825260208201526003600054141561066d5760006002805461059090614116565b80601f01602080910402602001604051908101604052809291908181526020018280546105bc90614116565b80156106095780601f106105de57610100808354040283529160200191610609565b820191906000526020600020905b8154815290600101906020018083116105ec57829003601f168201915b50505050508060200190518101906106219190614284565b9050610643604080516060810182526000602082018181529282015290815290565b815181516001600160a01b0391821690526040909201518151921660209092019190915251919050565b6106796000600c6114b4565b90565b60408051606081018252600080825260208201819052918101919091526106a2826114da565b92915050565b60006106b26137d3565b6106ba613827565b6106c2613841565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526106fd82846115ac565b50506040015192915050565b6000600360005414156107c05760006002805461072590614116565b80601f016020809104026020016040519081016040528092919081815260200182805461075190614116565b801561079e5780601f106107735761010080835404028352916020019161079e565b820191906000526020600020905b81548152906001019060200180831161078157829003601f168201915b50505050508060200190518101906107b69190614284565b60c0015192915050565b610679600060086114b4565b600060036000541415610884576000600280546107e890614116565b80601f016020809104026020016040519081016040528092919081815260200182805461081490614116565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b50505050508060200190518101906108799190614284565b610180015192915050565b6106796000600b6114b4565b600061089a6137d3565b6108a2613827565b6108aa613841565b604080516060810182526001600160a01b038981168252881660208201528082018790529082015260018181905250604080516020808201909252828152908301526108f682846115ac565b50506020015190505b9392505050565b61092a60405180606001604052806000815260200160008152602001600081525090565b60036000541415610aba5760006002805461094490614116565b80601f016020809104026020016040519081016040528092919081815260200182805461097090614116565b80156109bd5780601f10610992576101008083540402835291602001916109bd565b820191906000526020600020905b8154815290600101906020018083116109a057829003601f168201915b50505050508060200190518101906109d59190614284565b90506109fe60408051608081018252600060208201818152928201819052606082015290815290565b6001610a0985612eac565b516001811115610a1b57610a1b613e5f565b14610a27576000610a35565b610a3084612eac565b604001515b8151526001610a4385612f39565b516001811115610a5557610a55613e5f565b14610a61576000610a6f565b610a6a84612f39565b604001515b8151602001526001610a8085612fc6565b516001811115610a9257610a92613e5f565b14610a9e576000610aac565b610aa784612fc6565b604001515b815160400152519392505050565b610ac66000600a6114b4565b919050565b60408051606081018252600080825260208201819052918101919091526106a282613053565b60408051602081019091526000815260036000541415610bb557600060028054610b1a90614116565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4690614116565b8015610b935780601f10610b6857610100808354040283529160200191610b93565b820191906000526020600020905b815481529060010190602001808311610b7657829003601f168201915b5050505050806020019051810190610bab9190614284565b6060015192915050565b6106796000600e6114b4565b6000610bcb6137d3565b610bd3613827565b610bdb613841565b60408051602080820183526001600160a01b038816825283810191909152600083528151808201909252828252830152610c1582846115ac565b50505192915050565b60408051606081018252600080825260208201819052918101919091526106a28261311c565b6000610c4e6137d3565b610c56613827565b610c5e613841565b600060c08201526005815260408051602080820190925282815290830152610c8682846115ac565b505060a00151919050565b6000610c9b6137d3565b610ca3613827565b610cab613841565b6040805160208082018352878252610100840191909152600783528151808201909252828252830152610cde82846115ac565b505060e0015192915050565b60408051606081018252600080825260208201819052918101829052905460031415610dba57600060028054610d1f90614116565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4b90614116565b8015610d985780601f10610d6d57610100808354040283529160200191610d98565b820191906000526020600020905b815481529060010190602001808311610d7b57829003601f168201915b5050505050806020019051810190610db09190614284565b60a0015192915050565b6106796000600d6114b4565b604080518082019091526000808252602082015260036000541415610f2657600060028054610df490614116565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2090614116565b8015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050806020019051810190610e859190614284565b9050610ea7604080516060810182526000602082018181529282015290815290565b6001610eb28561311c565b516001811115610ec457610ec4613e5f565b14610ed0576000610ede565b610ed98461311c565b604001515b8151526001610eec856131a9565b516001811115610efe57610efe613e5f565b14610f0a576000610f18565b610f13846131a9565b604001515b815160200152519392505050565b610ac6600060076114b4565b6000610f3c6137d3565b610f44613827565b610f4c613841565b60006101208201526008815260408051602080820190925282815290830152610f7582846115ac565b50506101000151919050565b610f896137d3565b610fa1610f9b36849003840184614442565b826115ac565b5050565b6000610faf6137d3565b610fb7613827565b610fbf613841565b600060808201526003815260408051602080820190925282815290830152610fe782846115ac565b505060600151919050565b610ffa6137d3565b610fa161100c3684900384018461455f565b82613236565b600061101c6137d3565b611024613827565b61102c613841565b60408051602080820183526001600160a01b038816825260a084019190915260048352815180820190925282825283015261106782846115ac565b50506080015192915050565b60408051606081018252600080825260208201819052918101919091526106a282612eac565b60006110a36137d3565b6110ab613827565b6110b3613841565b60408051602080820183526001600160a01b03881682526101408401919091526009835281518082019092528282528301526110ef82846115ac565b5050610120015192915050565b60006060600054600280805461111190614116565b80601f016020809104026020016040519081016040528092919081815260200182805461113d90614116565b801561118a5780601f1061115f5761010080835404028352916020019161118a565b820191906000526020600020905b81548152906001019060200180831161116d57829003601f168201915b50505050509050915091509091565b6000600360005414156112b4576000600280546111b590614116565b80601f01602080910402602001604051908101604052809291908181526020018280546111e190614116565b801561122e5780601f106112035761010080835404028352916020019161122e565b820191906000526020600020905b81548152906001019060200180831161121157829003601f168201915b50505050508060200190518101906112469190614284565b604080516020810190915260008152909150600061126385613053565b51600181111561127557611275613e5f565b141561128457600081526112ac565b600161128f85613053565b5160018111156112a1576112a1613e5f565b14156112ac57600181525b519392505050565b610ac66000600f6114b4565b60408051606081018252600080825260208201819052918101919091526106a282612f39565b60408051606081018252600080825260208201819052918101919091526106a2826131a9565b61133060405180606001604052806000815260200160008152602001600081525090565b6003600054141561142a5760006002805461134a90614116565b80601f016020809104026020016040519081016040528092919081815260200182805461137690614116565b80156113c35780601f10611398576101008083540402835291602001916113c3565b820191906000526020600020905b8154815290600101906020018083116113a657829003601f168201915b50505050508060200190518101906113db9190614284565b905061140460408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260e082015181516020015260809091015181516040015251919050565b610679600060096114b4565b60408051606081018252600080825260208201819052918101919091526106a282612fc6565b60006114666137d3565b61146e613827565b611476613841565b604080516020808201835287825260e08401919091526006835281518082019092528282528301526114a882846115ac565b505060c0015192915050565b81610fa15760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561152657611526613e5f565b141561159d576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561156757611567613e5f565b600181111561157857611578613e5f565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6115bc60036000541460336114b4565b81516115d79015806115d057508251600154145b60346114b4565b6000808055600280546115e990614116565b80601f016020809104026020016040519081016040528092919081815260200182805461161590614116565b80156116625780601f1061163757610100808354040283529160200191611662565b820191906000526020600020905b81548152906001019060200180831161164557829003601f168201915b505050505080602001905181019061167a9190614284565b9050611684613936565b611693600019431060356114b4565b7fdeaa705abe1dc21ef36d9a05f3ddb8af96e27744aa5579dec36389567311d4b733856040516116c49291906145e8565b60405180910390a160006020850151515160098111156116e6576116e6613e5f565b14156119e2576020808501515101518152611703341560116114b4565b610160820151602080830180519290925261014084018051820151835190920191909152516040908101518251901515910152610120830151905161174b9190600090613433565b816040018190525061176d61176633846020015160006134a7565b60126114b4565b81516117aa906001600160a01b031633146117a05782604001516001600160a01b0316336001600160a01b0316146117a3565b60015b60136114b4565b6117f4600060018351516117bd906114da565b5160018111156117cf576117cf613e5f565b146117db5760006117ec565b8251516117e7906114da565b604001515b1160146114b4565b60408101515151610100830151600161180c336114da565b51600181111561181e5761181e613e5f565b1461182a576000611838565b611833336114da565b604001515b6118429190614739565b61184c919061475b565b606082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061188c906131a9565b51600181111561189e5761189e613e5f565b146118aa5760006118bb565b8151516118b6906131a9565b604001515b6118c5919061477a565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527fca54db4801b813ca582fa6cc2f79bef6e3f3bfc58db3e2ff76caa202d9a436e6910160405180910390a160018352611928613bd5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845184015260c0870151845190151592019190915260e0860151925101919091528201516101008401516119b1919061477a565b60208201805160c0019190915280514360e0909101526040830151905161010001526119dc816134bd565b50612ea6565b60016020850151515160098111156119fc576119fc613e5f565b1415611d5b57602084015151604001516080820152611a1d341560156114b4565b61016082015160a0820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151611a6d90611a6690339060006134a7565b60166114b4565b8151608082015151611abb916001600160a01b03918216911614611ab15782604001516001600160a01b03168260800151600001516001600160a01b031614611ab4565b60015b60176114b4565b611ad160008260800151604001511160186114b4565b6080810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff00001916905586518601519094168352600485529181902080549093168217909255925190810151910151909190611b4c9061311c565b516001811115611b5e57611b5e613e5f565b14611b6a576000611b80565b611b7b82608001516020015161311c565b604001515b611b8a919061477a565b6080820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff191685179055915191820151910151909190611be8906114da565b516001811115611bfa57611bfa613e5f565b14611c06576000611c1c565b611c178260800151602001516114da565b604001515b611c26919061477a565b60808201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527fed0de913c54e994247e07cac7dd73d19a7ddd959fcfae8d4c33368de52dd5260910160405180910390a160016020840152611c90613bd5565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845183015260a08088015185519094019390935260c087015184519015159082015260e08701519351909201929092528301510151610100840151611d1b919061477a565b60208201805160c00191909152514360e09091015261012083015160a0830151611d489190600090613433565b602082015161010001526119dc816134bd565b6002602085015151516009811115611d7557611d75613e5f565b1415611f51576020840151516060015160c0820152611d96341560196114b4565b61016082015160e0820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151611de690611ddf90339060006134a7565b601a6114b4565b8151611e23906001600160a01b03163314611e195782604001516001600160a01b0316336001600160a01b031614611e1c565b60015b601b6114b4565b60c081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527f81e4373291aad8cea31cffd220205ebc44db57da9fb406c1fa11b1aae82ab014910160405180910390a160016040840152611ea9613bd5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e0808701518451909301929092526101008601518351909101529051439082015261012084015190830151611d489190600090613433565b6003602085015151516009811115611f6b57611f6b613e5f565b141561233857611f7d3415601c6114b4565b6101608201516101008201805191909152610140830180516020908101518351909101525160409081015182519015159101526101208301519051611fc59190600090613433565b816101200181905250611fe8611fe133846020015160006134a7565b601d6114b4565b6000611ff333613053565b51600181111561200557612005613e5f565b1415612018576000610140820152612044565b600161202333613053565b51600181111561203557612035613e5f565b14156120445760016101408201525b612054816101400151601e6114b4565b600161205f336114da565b51600181111561207157612071613e5f565b1461207d57600061208b565b612086336114da565b604001515b61016082015261012081015151516120d3906120a85760006120b2565b6000836101000151115b6120bd5760006120cc565b81610160015183610100015110155b601f6114b4565b61012081015151516101008301516101608301516120f19190614739565b6120fb919061475b565b61018082018190526101a08201819052610120820151515161211d9190614792565b6101c082018051919091526101208201805151602090810151835182015290515160409081015192519215159201919091528201516101a0820151612164919033906135cf565b336000818152600860205260409020805460ff191660019081179091556101808301519161219190612f39565b5160018111156121a3576121a3613e5f565b146121af5760006121bd565b6121b833612f39565b604001515b6121c7919061477a565b33600081815260086020908152604080832060019081019590955560099091529020805460ff19168317905581906121fe90612fc6565b51600181111561221057612210613e5f565b1461221c57600061222a565b61222533612fc6565b604001515b612234919061477a565b3360009081526009602090815260409182902060019081019390935590519182527f5b5b1afd3b4008163956c319e91630ff8db8addac7d84f0dc50303b267d0eccc910160405180910390a16001606084015261228f613bd5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e0808701518451909301929092526101008601518351909101529051439101526101208201516101c0830151611d489190600090613433565b600460208501515151600981111561235257612352613e5f565b14156124ed576020808501515160a001516101e0830152612375903415906114b4565b6101608201516102008201805191909152610140830180516020908101518351820152905160409081015192519215159201919091528201516123c6906123bf90339060006134a7565b60216114b4565b8151612403906001600160a01b031633146123f95782604001516001600160a01b0316336001600160a01b0316146123fc565b60015b60226114b4565b604051600181527f88be49812478cf137dc0cb1738d0964601afed2793eb5fe27853c1a0d0fe09f79060200160405180910390a160016080840152612446613bd5565b825181516001600160a01b0391821690526020808501518351908316908201526101e084015151818401805191909316905260608086015183519092019190915260808086015183516040015260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610200830151611d489190600090613433565b600560208501515151600981111561250757612507613e5f565b14156127a357612519341560236114b4565b61016082015161022082018051919091526101408301805160209081015183518201529051604090810151925192151592019190915282015161256a9061256390339060006134a7565b60246114b4565b60016125753361311c565b51600181111561258757612587613e5f565b146125935760006125a1565b61259c3361311c565b604001515b61024082015260006125b233613053565b5160018111156125c4576125c4613e5f565b14156125d7576000610260820152612603565b60016125e233613053565b5160018111156125f4576125f4613e5f565b14156126035760016102608201525b61261381610260015160256114b4565b61262660008261024001511160266114b4565b336000818152600660205260409020805460ff191660019081179091556102408301519161265390612eac565b51600181111561266557612665613e5f565b1461267157600061267f565b61267a33612eac565b604001515b612689919061477a565b33600090815260066020908152604080832060019081019490945560048252808320805460ff19168517815584019290925590519182527fbbff143a68cfea24af5348ce5a7d2d11633383880dcc871ba7e5a8bae6142bed910160405180910390a1600160a08401526126fa613bd5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610220830151611d489190600090613433565b60066020850151515160098111156127bd576127bd613e5f565b14156129a35760208401515160e001516102808201819052516102a08201526127e8341560276114b4565b806102a001518261016001516127fe919061477a565b6102c08201805191909152610140830180516020908101518351820152905160409081015192519215159201919091528201516102a082015161284e91612847913391906134a7565b60286114b4565b815161288b906001600160a01b031633146128815782604001516001600160a01b0316336001600160a01b031614612884565b60015b60296114b4565b61289e6000826102a0015111602a6114b4565b604051600181527f0e9965e19e6f4b5079bc676c5824f343fc3355ea147243ae3fe9a0e93f978dbd9060200160405180910390a1600160c08401526128e1613bd5565b825181516001600160a01b03918216905260208085015183519083169082015260408501518184018051919093169052606085015191510152608083015161292b9060019061477a565b6020820180516040019190915260a084015181516060015260c084015190519015156080909101526102808201515160e0840151612969919061477a565b60208201805160a00191909152610100840151815160c00152514360e0909101526101208301516102c0830151611d489190600090613433565b60076020850151515160098111156129bd576129bd613e5f565b1415612b5b5760208401515161010001516102e08201526129e03415602b6114b4565b610160820151610300820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612a3190612a2a90339060006134a7565b602c6114b4565b8151612a6e906001600160a01b03163314612a645782604001516001600160a01b0316336001600160a01b031614612a67565b60015b602d6114b4565b604051600181527f3158d3b6801fd8f9b9cb3c00befd1316e1592d7d2a1d0ff2270359d3141e74609060200160405180910390a1600160e0840152612ab1613bd5565b825181516001600160a01b03918216905260208085015183519083169082015260408086015182850180519190941690526060808701518451909301929092526080808701518451909201919091526102e08501515183519092019190915260c080860151835190151592019190915260e080860151835160a00152610100860151835190920191909152905143910152610120830151610300830151611d489190600090613433565b6008602085015151516009811115612b7557612b75613e5f565b1415612cc557612b873415602e6114b4565b610160820151610320820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612bd890612bd190339060006134a7565b602f6114b4565b604051600181527f64814cead399fddc34fa832755898f106004f4f0fd005a80c484ad773ffc0cd09060200160405180910390a16001610100840152612c1c613bd5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610320830151611d489190600090613433565b6009602085015151516009811115612cdf57612cdf613e5f565b1415612ea6576020840151516101400151610340820152612d02341560306114b4565b610160820151610360820180519190915261014083018051602090810151835182015290516040908101519251921515920191909152820151612d5390612d4c90339060006134a7565b60316114b4565b8151612d90906001600160a01b03163314612d865782604001516001600160a01b0316336001600160a01b031614612d89565b60015b60326114b4565b610340810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527fe108e8e98d1f889faafaeeb091c036b86756ba0bcc3995b4082ff8bd74802862910160405180910390a16001610120840152612dfd613bd5565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a08087015184519093019290925260c080870151845190151592019190915260e080870151845190930192909252610100860151835190910152905143910152610120830151610360830151611d489190600090613433565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612ef857612ef8613e5f565b141561159d576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561156757611567613e5f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612f8557612f85613e5f565b141561159d576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561156757611567613e5f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111561301257613012613e5f565b141561159d576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561156757611567613e5f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff16600181111561309f5761309f613e5f565b141561159d576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff1660018111156130e0576130e0613e5f565b60018111156130f1576130f1613e5f565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561316857613168613e5f565b141561159d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561156757611567613e5f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156131f5576131f5613e5f565b141561159d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561156757611567613e5f565b61324660036000541460386114b4565b815161326190158061325a57508251600154145b60396114b4565b60008080556002805461327390614116565b80601f016020809104026020016040519081016040528092919081815260200182805461329f90614116565b80156132ec5780601f106132c1576101008083540402835291602001916132ec565b820191906000526020600020905b8154815290600101906020018083116132cf57829003601f168201915b50505050508060200190518101906133049190614284565b9050613316600019431015603a6114b4565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1613369341560366114b4565b8051613381906001600160a01b0316331460376114b4565b613389613bd5565b815181516001600160a01b039182169052602080840151835190831690820152604080850151828501805191909416905260608086015184519093019290925260808086015184519092019190915260a08086015184519093019290925260c080860151845190151592019190915260e0808601518451909301929092526101008086015184519092019190915282514392019190915261012084015191510152612ea6816134bd565b61343b613bfe565b60005b6001811015613487578481600181106134595761345961470d565b60200201518282600181106134705761347061470d565b60200201528061347f816147a9565b91505061343e565b508181846001811061349b5761349b61470d565b60200201529392505050565b60006134b5838530856135e8565b949350505050565b60408051602080820190925260008152908201516101000151515181526134e2613c49565b8251516001600160a01b03908116825283516020908101518216818401528085018051519092166040808501919091528251820151606080860191909152835182015160808087019190915284519091015160a080870191909152845190910151151560c08087019190915284519091015160e0860152835101516101008086019190915283518101516101208601528351810151516101408601529251909201515151610160840152835161018084015260036000554360015590516135ab91839101614808565b60405160208183030381529060405260029080519060200190612ea6929190613cf3565b6135da8383836136c2565b6135e357600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161364f91614923565b60006040518083038185875af1925050503d806000811461368c576040519150601f19603f3d011682016040523d82523d6000602084013e613691565b606091505b50915091506136a282826001613793565b50808060200190518101906136b7919061493f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161372191614923565b60006040518083038185875af1925050503d806000811461375e576040519150601f19603f3d011682016040523d82523d6000602084013e613763565b606091505b509150915061377482826002613793565b5080806020019051810190613789919061493f565b9695505050505050565b606083156137a25750816108ff565b8251156137b25782518084602001fd5b60405163100960cb60e01b8152600481018390526024016114d1565b905290565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b6040518060400160405280600081526020016137ce613d77565b604080516101608101909152806000815260200161386a60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526020016138a460408051602081019091526000815290565b8152600060208201526040016138c560408051602081019091526000815290565b81526020016000151581526020016138e96040518060200160405280600081525090565b815260200161391560408051608081018252600060208201818152928201819052606082015290815290565b8152600060208201526040016137ce60408051602081019091526000815290565b604080516103a081018252600061038082018181528252825160608101845281815260208082018390528185019290925290820152908101613976613bfe565b8152602001600081526020016139a5604080516060810182526000808252602082018190529181019190915290565b815260408051606081018252600080825260208281018290529282015291019081526020016139df60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613a2c613bfe565b8152602001600015158152602001600081526020016000815260200160008152602001613a75604051806060016040528060008152602001600081526020016000151581525090565b8152602001613a8f60408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600015158152602001613afa6040518060200160405280600081525090565b815260200160008152602001613b2c604051806060016040528060008152602001600081526020016000151581525090565b8152602001613b5860408051608081018252600060208201818152928201819052606082015290815290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613bb260408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160808101825260009181018281526060820192909252908152602081016137ce613d8a565b60405180602001604052806001905b613c33604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613c0d5790505090565b604080516101a08101825260008082526020808301829052828401829052835180820185528281526060808501919091526080840183905284519081018552828152908101829052928301529060a082019081526020016000151581526020016000815260200160008152602001613cbf613bfe565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b828054613cff90614116565b90600052602060002090601f016020900481019282613d215760008555613d67565b82601f10613d3a57805160ff1916838001178555613d67565b82800160010185558215613d67579182015b82811115613d67578251825591602001919060010190613d4c565b50613d73929150613e15565b5090565b60405180602001604052806137ce613841565b60405180610120016040528060006001600160a01b03168152602001613dbb60408051602081019091526000815290565b815260200160008152602001613dea604080516060810182526000808252602082018190529181019190915290565b81526020016000151581526020016000815260200160008152602001600081526020016137ce613bfe565b5b80821115613d735760008155600101613e16565b6001600160a01b0381168114613e3f57600080fd5b50565b600060208284031215613e5457600080fd5b81356108ff81613e2a565b634e487b7160e01b600052602160045260246000fd5b60028110613e3f57613e3f613e5f565b81516060820190613e9581613e75565b808352506020830151151560208301526040830151604083015292915050565b600080600060608486031215613eca57600080fd5b8335613ed581613e2a565b92506020840135613ee581613e2a565b929592945050506040919091013590565b81516060820190613f0681613e75565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715613f6157613f61613f28565b60405290565b6040516020810167ffffffffffffffff81118282101715613f6157613f61613f28565b6040516101a0810167ffffffffffffffff81118282101715613f6157613f61613f28565b6040805190810167ffffffffffffffff81118282101715613f6157613f61613f28565b604051610160810167ffffffffffffffff81118282101715613f6157613f61613f28565b60006060828403121561400757600080fd5b61400f613f3e565b905081358152602082013560208201526040820135604082015292915050565b60006060828403121561404157600080fd5b6108ff8383613ff5565b815181526020808301519082015260408083015190820152606081016106a2565b6000610200828403121561407f57600080fd5b50919050565b60006040828403121561407f57600080fd5b60005b838110156140b257818101518382015260200161409a565b83811115612ea65750506000910152565b82815260406020820152600082518060408401526140e8816060850160208701614097565b601f01601f1916919091016060019392505050565b60006020828403121561410f57600080fd5b5035919050565b600181811c9082168061412a57607f821691505b6020821081141561407f57634e487b7160e01b600052602260045260246000fd5b8051610ac681613e2a565b60006020828403121561416857600080fd5b614170613f67565b82519091506001600160e01b03198116811461418b57600080fd5b815292915050565b6000606082840312156141a557600080fd5b6141ad613f3e565b905081518152602082015160208201526040820151604082015292915050565b8015158114613e3f57600080fd5b8051610ac6816141cd565b6000606082840312156141f857600080fd5b614200613f3e565b90508151815260208201516020820152604082015161421e816141cd565b604082015292915050565b600082601f83011261423a57600080fd5b614242613f67565b8060608085018681111561425557600080fd5b855b818110156142785761426988826141e6565b85526020909401938201614257565b50919695505050505050565b6000610260828403121561429757600080fd5b61429f613f8a565b6142a88361414b565b81526142b66020840161414b565b60208201526142c76040840161414b565b60408201526142d98460608501614156565b6060820152608083015160808201526142f58460a08501614193565b60a08201526101006143088185016141db565b60c08301526101208085015160e08401526101408086015183850152610160925061433587848801614229565b82850152614347876101c088016141e6565b9084015250610220840151908201526102409092015161018083015250919050565b8035600a8110610ac657600080fd5b60006020828403121561438a57600080fd5b614392613f67565b9050813561418b81613e2a565b6000606082840312156143b157600080fd5b6143b9613f3e565b905081356143c681613e2a565b815260208201356143d681613e2a565b806020830152506040820135604082015292915050565b8035610ac6816141cd565b60006020828403121561440a57600080fd5b614412613f67565b9135825250919050565b60006060828403121561442e57600080fd5b614436613f67565b905061418b8383613ff5565b600081830361020081121561445657600080fd5b61445e613fae565b833581526101e080601f198401121561447657600080fd5b61447e613f67565b9250614488613fd1565b61449460208701614369565b81526144a38760408801614378565b60208201526144b5876060880161439f565b60408201526144c78760c08801614378565b60608201526144d860e087016143ed565b60808201526101006144ec88828901614378565b60a08301526101206144ff8189016143ed565b60c08401526101406145138a828b016143f8565b60e08501526145268a6101608b0161441c565b838501526145376101c08a016143ed565b828501526145478a868b01614378565b90840152505083525060208101919091529392505050565b60006040828403121561457157600080fd5b6040516040810181811067ffffffffffffffff8211171561459457614594613f28565b6040528235815260208301356145a9816141cd565b60208201529392505050565b600a81106145c5576145c5613e5f565b9052565b610fa18282518051825260208082015190830152604090810151910152565b60006102208201905060018060a01b0384168252825160208301526020830151516146176040840182516145b5565b602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e08501525060808101516101006146858186018315159052565b60a083015191506101206146a481870184516001600160a01b03169052565b60c084015192506101406146bb8188018515159052565b60e0850151516101608801528285015193506146db6101808801856145c9565b9084015115156101e08701529092015180516001600160a01b031661020086015291506147059050565b509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008261475657634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561477557614775614723565b500290565b6000821982111561478d5761478d614723565b500190565b6000828210156147a4576147a4614723565b500390565b60006000198214156147bd576147bd614723565b5060010190565b8060005b6001811015612ea6576147f284835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016147c8565b81516001600160a01b031681526102608101602083015161483460208401826001600160a01b03169052565b50604083015161484f60408401826001600160a01b03169052565b50606083015161486c6060840182516001600160e01b0319169052565b506080830151608083015260a083015161489d60a08401828051825260208082015190830152604090810151910152565b5060c08301516101006148b38185018315159052565b60e08501516101208581019190915290850151610140808601919091529085015191506101606148e5818601846147c4565b9085015180516101c086015260208101516101e086015260400151151561020085015284015161022084015250610180909201516102409091015290565b60008251614935818460208701614097565b9190910192915050565b60006020828403121561495157600080fd5b81516108ff816141cd56fea2646970667358221220ca84235805b08ce209b9593034bd88898eefbc9516b0894de6e66ed04fee492c64736f6c634300080c0033`,
  BytecodeLen: 21618,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    vBtBal: `vBtBal`,
    vCcCm: `vCcCm`,
    vHash: `vHash`,
    vcVersion: `vcVersion`,
    wlMember: `wlMember`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:330:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:109:85:after expr stmt semicolon',
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
  "docHash": docHash,
  "optIn": optIn,
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
  docHash: docHash,
  optIn: optIn,
  remWL: remWL
  };
