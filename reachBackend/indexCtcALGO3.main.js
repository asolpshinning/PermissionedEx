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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc9
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc10;
  
  const map2_ctc = ctc10;
  
  const map3_ctc = ctc10;
  
  const map4_ctc = ctc10;
  
  const map5_ctc = ctc10;
  
  const map6_ctc = ctc11;
  
  
  return {
    infos: {
      claimSTBT: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = svs;
            return (await ((async (_v1307 ) => {
                const v1307 = stdlib.protect(ctc0, _v1307, null);
              
              const v1308 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1307), null);
              const v1309 = stdlib.fromSome(v1308, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
              const v1310 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1307), null);
              const v1311 = stdlib.fromSome(v1310, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
              const v1312 = [v1309, v1311];
              
              return v1312;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = svs;
            return (await ((async () => {
              
              
              return v1297;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = svs;
            return (await ((async () => {
              
              const v1306 = [v1299, v1298, v1295];
              
              return v1306;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = svs;
            return (await ((async (_v1314 ) => {
                const v1314 = stdlib.protect(ctc0, _v1314, null);
              
              const v1315 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1314), null);
              const v1316 = stdlib.fromSome(v1315, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
              const v1317 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1314), null);
              const v1318 = stdlib.fromSome(v1317, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
              const v1319 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1314), null);
              const v1320 = stdlib.fromSome(v1319, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
              const v1321 = [v1316, v1318, v1320];
              
              return v1321;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      vHash: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = svs;
            return (await ((async () => {
              
              
              return v1296;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = svs;
            return (await ((async (_v1323 ) => {
                const v1323 = stdlib.protect(ctc0, _v1323, null);
              
              const v1324 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1323), null);
              let v1325;
              switch (v1324[0]) {
                case 'None': {
                  const v1326 = v1324[1];
                  v1325 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1327 = v1324[1];
                  v1325 = true;
                  
                  break;
                  }
                }
              
              return v1325;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc2, ctc2, ctc6]
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
    managerAddr: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc9,
    aST0_172: ctc10,
    addWL0_172: ctc9,
    cBT0_172: ctc11,
    cCM0_172: ctc9,
    cST0_172: ctc11,
    dBT0_172: ctc12,
    docHash0_172: ctc14,
    optIn0_172: ctc11,
    remWL0_172: ctc9
    });
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v1258 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1259 = [v1258];
  const v1265 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:82:103:application',
    fs: ['at ./index.rsh:81:17:application call to [unknown function] (defined at: ./index.rsh:81:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1266 = v1265.authorizedST;
  const v1267 = v1265.bT;
  const v1268 = v1265.companyName;
  const v1269 = v1265.lockSale;
  const v1270 = v1265.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1268, v1269, v1270, v1267, v1266],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1277, v1278, v1279, v1280, v1281], secs: v1283, time: v1282, didSend: v41, from: v1276 } = txn1;
      
      const v1284 = v1259[stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '0')];
      const v1286 = v1284[stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '1')];
      const v1287 = v1284[stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '2')];
      const v1288 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1286, v1287];
      const v1289 = stdlib.Array_set(v1259, stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '0'), v1288);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1280
        });
      ;
      
      const v1293 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
      const v1294 = v1279;
      const v1295 = stdlib.checkedBigNumberify('./index.rsh:106:112:decimal', stdlib.UInt_max, '0');
      const v1296 = v1293;
      const v1297 = v1278;
      const v1298 = stdlib.checkedBigNumberify('./index.rsh:106:86:decimal', stdlib.UInt_max, '0');
      const v1299 = stdlib.checkedBigNumberify('./index.rsh:106:83:decimal', stdlib.UInt_max, '0');
      const v1300 = v1282;
      const v1302 = v1289;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1280
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
  const {data: [v1277, v1278, v1279, v1280, v1281], secs: v1283, time: v1282, didSend: v41, from: v1276 } = txn1;
  const v1284 = v1259[stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '0')];
  const v1286 = v1284[stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '1')];
  const v1287 = v1284[stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '2')];
  const v1288 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1286, v1287];
  const v1289 = stdlib.Array_set(v1259, stdlib.checkedBigNumberify('./index.rsh:86:13:dot', stdlib.UInt_max, '0'), v1288);
  ;
  ;
  const v1292 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1292), {
    at: './index.rsh:88:31:application',
    fs: ['at ./index.rsh:88:31:application call to [unknown function] (defined at: ./index.rsh:88:31:function exp)', 'at ./index.rsh:88:31:application call to "liftedInteract" (defined at: ./index.rsh:88:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const v1293 = 'ajdnaeinawindiaengtnifrjwritniqwrnirefindinigajdnaeinawidiaengtniitniqwrnirefindinigfuaebfubawur';
  let v1294 = v1279;
  let v1295 = stdlib.checkedBigNumberify('./index.rsh:106:112:decimal', stdlib.UInt_max, '0');
  let v1296 = v1293;
  let v1297 = v1278;
  let v1298 = stdlib.checkedBigNumberify('./index.rsh:106:86:decimal', stdlib.UInt_max, '0');
  let v1299 = stdlib.checkedBigNumberify('./index.rsh:106:83:decimal', stdlib.UInt_max, '0');
  let v1300 = v1282;
  let v1302 = v1289;
  
  while (await (async () => {
    
    return true;})()) {
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
        args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1300,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:321:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v4510, time: v4509, didSend: v1021, from: v4508 } = txn3;
          
          ;
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v4509;
          const cv1302 = v1302;
          
          await (async () => {
            const v1294 = cv1294;
            const v1295 = cv1295;
            const v1296 = cv1296;
            const v1297 = cv1297;
            const v1298 = cv1298;
            const v1299 = cv1299;
            const v1300 = cv1300;
            const v1302 = cv1302;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1280
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
        tys: [ctc7, ctc4, ctc7, ctc1, ctc13, ctc6, ctc1, ctc1, ctc17],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4510, time: v4509, didSend: v1021, from: v4508 } = txn3;
      ;
      const v4511 = stdlib.addressEq(v1276, v4508);
      stdlib.assert(v4511, {
        at: './index.rsh:321:21:dot',
        fs: ['at ./index.rsh:320:40:application call to [unknown function] (defined at: ./index.rsh:320:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1294 = v1294;
      const cv1295 = v1295;
      const cv1296 = v1296;
      const cv1297 = v1297;
      const cv1298 = v1298;
      const cv1299 = v1299;
      const cv1300 = v4509;
      const cv1302 = v1302;
      
      v1294 = cv1294;
      v1295 = cv1295;
      v1296 = cv1296;
      v1297 = cv1297;
      v1298 = cv1298;
      v1299 = cv1299;
      v1300 = cv1300;
      v1302 = cv1302;
      
      continue;
      }
    else {
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn2;
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v1690 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1691 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1695 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v1696 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v1697 = [v1691, v1695, v1696];
          const v1698 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v1697);
          ;
          const v1700 = v1598[stdlib.checkedBigNumberify('./index.rsh:279:13:spread', stdlib.UInt_max, '0')];
          const v1701 = stdlib.addressEq(v1594, v1276);
          const v1702 = stdlib.addressEq(v1594, v1294);
          const v1703 = v1701 ? true : v1702;
          stdlib.assert(v1703, {
            at: './index.rsh:292:24:application',
            fs: ['at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1704 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1700), null);
          const v1705 = stdlib.fromSome(v1704, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v1706 = stdlib.gt(v1705, stdlib.checkedBigNumberify('./index.rsh:294:71:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1706, {
            at: './index.rsh:294:24:application',
            fs: ['at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1707 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1594), null);
          const v1708 = stdlib.fromSome(v1707, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v1709 = v1698[stdlib.checkedBigNumberify('./index.rsh:295:61:application', stdlib.UInt_max, '0')];
          const v1710 = v1709[stdlib.checkedBigNumberify('./index.rsh:295:61:application', stdlib.UInt_max, '0')];
          const v1711 = stdlib.mul(v1708, v1710);
          const v1712 = stdlib.div(v1711, v1299);
          const v1713 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1700), null);
          const v1714 = stdlib.fromSome(v1713, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v1715 = stdlib.add(v1714, v1712);
          await stdlib.mapSet(map1, v1700, v1715);
          const v1716 = true;
          await txn2.getOutput('aBT', 'v1716', ctc6, v1716);
          const v1723 = stdlib.add(v1299, v1712);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1723;
          const cv1300 = v1596;
          const cv1302 = v1698;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v1981 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1982 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1986 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v1987 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v1988 = [v1982, v1986, v1987];
          const v1989 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v1988);
          ;
          const v2017 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
          const v2018 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '1')];
          const v2019 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '2')];
          const v2020 = stdlib.addressEq(v2017, v1276);
          const v2021 = stdlib.addressEq(v2017, v1294);
          const v2022 = v2020 ? true : v2021;
          stdlib.assert(v2022, {
            at: './index.rsh:184:24:application',
            fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2023 = stdlib.gt(v2019, stdlib.checkedBigNumberify('./index.rsh:185:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v2023, {
            at: './index.rsh:185:24:application',
            fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2018, null);
          const v2025 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2018), null);
          const v2026 = stdlib.fromSome(v2025, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2027 = stdlib.add(v2026, v2019);
          await stdlib.mapSet(map0, v2018, v2027);
          const v2028 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2018), null);
          const v2029 = stdlib.fromSome(v2028, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2030 = stdlib.add(v2029, v2019);
          await stdlib.mapSet(map3, v2018, v2030);
          const v2031 = true;
          await txn2.getOutput('aST', 'v2031', ctc6, v2031);
          const v2040 = stdlib.add(v1299, v2019);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v2040;
          const cv1300 = v1596;
          const cv1302 = v1989;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v2272 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2277 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v2278 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v2279 = [v2273, v2277, v2278];
          const v2280 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2279);
          ;
          const v2334 = v2180[stdlib.checkedBigNumberify('./index.rsh:135:13:spread', stdlib.UInt_max, '0')];
          const v2335 = stdlib.addressEq(v1594, v1276);
          const v2336 = stdlib.addressEq(v1594, v1294);
          const v2337 = v2335 ? true : v2336;
          stdlib.assert(v2337, {
            at: './index.rsh:146:24:application',
            fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2334, null);
          const v2339 = true;
          await txn2.getOutput('addWL', 'v2339', ctc6, v2339);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v2280;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v2563 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2564 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2568 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v2569 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v2570 = [v2564, v2568, v2569];
          const v2571 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2570);
          ;
          const v2639 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1594), null);
          let v2640;
          switch (v2639[0]) {
            case 'None': {
              const v2641 = v2639[1];
              v2640 = false;
              
              break;
              }
            case 'Some': {
              const v2642 = v2639[1];
              v2640 = true;
              
              break;
              }
            }
          stdlib.assert(v2640, {
            at: './index.rsh:266:24:application',
            fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2643 = v2571[stdlib.checkedBigNumberify('./index.rsh:267:32:application', stdlib.UInt_max, '0')];
          const v2644 = v2643[stdlib.checkedBigNumberify('./index.rsh:267:32:application', stdlib.UInt_max, '0')];
          const v2645 = stdlib.gt(v2644, stdlib.checkedBigNumberify('./index.rsh:267:39:decimal', stdlib.UInt_max, '0'));
          const v2646 = stdlib.gt(v1299, stdlib.checkedBigNumberify('./index.rsh:267:52:decimal', stdlib.UInt_max, '0'));
          const v2647 = v2645 ? v2646 : false;
          const v2648 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1594), null);
          const v2649 = stdlib.fromSome(v2648, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2650 = stdlib.ge(v1299, v2649);
          const v2651 = v2647 ? v2650 : false;
          stdlib.assert(v2651, {
            at: './index.rsh:267:24:application',
            fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2656 = stdlib.mul(v2649, v2644);
          const v2657 = stdlib.div(v2656, v1299);
          const v2663 = stdlib.sub(v2644, v2657);
          const v2666 = v2643[stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '1')];
          const v2667 = v2643[stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '2')];
          const v2668 = [v2663, v2666, v2667];
          const v2669 = stdlib.Array_set(v2571, stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '0'), v2668);
          ;
          const v2670 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1594), null);
          const v2671 = stdlib.fromSome(v2670, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2672 = stdlib.add(v2671, v2657);
          await stdlib.mapSet(map4, v1594, v2672);
          await stdlib.mapSet(map5, v1594, v1295);
          const v2673 = true;
          await txn2.getOutput('cBT', 'v2673', ctc6, v2673);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v2669;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v2854 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2855 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2859 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v2860 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v2861 = [v2855, v2859, v2860];
          const v2862 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2861);
          ;
          const v2972 = v2762[stdlib.checkedBigNumberify('./index.rsh:303:13:spread', stdlib.UInt_max, '0')];
          const v2973 = stdlib.addressEq(v1594, v1276);
          const v2974 = stdlib.addressEq(v1594, v1294);
          const v2975 = v2973 ? true : v2974;
          stdlib.assert(v2975, {
            at: './index.rsh:314:24:application',
            fs: ['at ./index.rsh:313:13:application call to [unknown function] (defined at: ./index.rsh:313:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2976 = true;
          await txn2.getOutput('cCM', 'v2976', ctc6, v2976);
          const cv1294 = v2972;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v2862;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v3145 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3146 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3150 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v3151 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v3152 = [v3146, v3150, v3151];
          const v3153 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3152);
          ;
          const v3276 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1594), null);
          const v3277 = stdlib.fromSome(v3276, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v3278 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1594), null);
          let v3279;
          switch (v3278[0]) {
            case 'None': {
              const v3280 = v3278[1];
              v3279 = false;
              
              break;
              }
            case 'Some': {
              const v3281 = v3278[1];
              v3279 = true;
              
              break;
              }
            }
          stdlib.assert(v3279, {
            at: './index.rsh:210:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3282 = stdlib.gt(v3277, stdlib.checkedBigNumberify('./index.rsh:211:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3282, {
            at: './index.rsh:211:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3283 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1594), null);
          const v3284 = stdlib.fromSome(v3283, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v3285 = stdlib.add(v3284, v3277);
          await stdlib.mapSet(map2, v1594, v3285);
          await stdlib.mapSet(map0, v1594, stdlib.checkedBigNumberify('./index.rsh:215:33:decimal', stdlib.UInt_max, '0'));
          const v3286 = true;
          await txn2.getOutput('cST', 'v3286', ctc6, v3286);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v3153;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          undefined /* setApiDetails */;
          const v3397 = v3344[stdlib.checkedBigNumberify('./index.rsh:235:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3436 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3437 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3438 = stdlib.add(v3437, v3397);
          const v3441 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v3442 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v3443 = [v3438, v3441, v3442];
          const v3444 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3443);
          ;
          const v3586 = stdlib.addressEq(v1594, v1276);
          const v3587 = stdlib.addressEq(v1594, v1294);
          const v3588 = v3586 ? true : v3587;
          stdlib.assert(v3588, {
            at: './index.rsh:247:24:application',
            fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3589 = stdlib.gt(v3397, stdlib.checkedBigNumberify('./index.rsh:248:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3589, {
            at: './index.rsh:248:24:application',
            fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3590 = true;
          await txn2.getOutput('dBT', 'v3590', ctc6, v3590);
          const v3597 = stdlib.add(v1298, v3397);
          const v3598 = stdlib.add(v1295, stdlib.checkedBigNumberify('./index.rsh:251:76:decimal', stdlib.UInt_max, '1'));
          const cv1294 = v1294;
          const cv1295 = v3598;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v3597;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v3444;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v3727 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3728 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3732 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v3733 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v3734 = [v3728, v3732, v3733];
          const v3735 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3734);
          ;
          const v3892 = v3635[stdlib.checkedBigNumberify('./index.rsh:118:13:spread', stdlib.UInt_max, '0')];
          const v3893 = stdlib.addressEq(v1594, v1276);
          const v3894 = stdlib.addressEq(v1594, v1294);
          const v3895 = v3893 ? true : v3894;
          stdlib.assert(v3895, {
            at: './index.rsh:129:24:application',
            fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3896 = true;
          await txn2.getOutput('docHash', 'v3896', ctc6, v3896);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v3892;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v3735;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v4018 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4019 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4023 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v4024 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v4025 = [v4019, v4023, v4024];
          const v4026 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v4025);
          ;
          const v4196 = true;
          await txn2.getOutput('optIn', 'v4196', ctc6, v4196);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v4026;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
          continue;
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          undefined /* setApiDetails */;
          ;
          const v4309 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4310 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4314 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v4315 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v4316 = [v4310, v4314, v4315];
          const v4317 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v4316);
          ;
          const v4495 = v4217[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '0')];
          const v4496 = stdlib.addressEq(v1594, v1276);
          const v4497 = stdlib.addressEq(v1594, v1294);
          const v4498 = v4496 ? true : v4497;
          stdlib.assert(v4498, {
            at: './index.rsh:164:24:application',
            fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v4495, undefined /* Nothing */);
          const v4500 = true;
          await txn2.getOutput('remWL', 'v4500', ctc6, v4500);
          const cv1294 = v1294;
          const cv1295 = v1295;
          const cv1296 = v1296;
          const cv1297 = v1297;
          const cv1298 = v1298;
          const cv1299 = v1299;
          const cv1300 = v1596;
          const cv1302 = v4317;
          
          v1294 = cv1294;
          v1295 = cv1295;
          v1296 = cv1296;
          v1297 = cv1297;
          v1298 = cv1298;
          v1299 = cv1299;
          v1300 = cv1300;
          v1302 = cv1302;
          
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc12,
    cCM0_172: ctc10,
    cST0_172: ctc12,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc12,
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1454 = ctc.selfAddress();
  const v1456 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:282:13:application call to [unknown function] (defined at: ./index.rsh:282:13:function exp)', 'at ./index.rsh:106:81:application call to "runaBT0_172" (defined at: ./index.rsh:279:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1457 = v1456[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1460 = stdlib.addressEq(v1454, v1276);
  const v1461 = stdlib.addressEq(v1454, v1294);
  const v1462 = v1460 ? true : v1461;
  stdlib.assert(v1462, {
    at: './index.rsh:283:23:application',
    fs: ['at ./index.rsh:282:13:application call to [unknown function] (defined at: ./index.rsh:282:18:function exp)', 'at ./index.rsh:282:13:application call to [unknown function] (defined at: ./index.rsh:282:13:function exp)', 'at ./index.rsh:106:81:application call to "runaBT0_172" (defined at: ./index.rsh:279:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1463 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1457), null);
  const v1464 = stdlib.fromSome(v1463, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
  const v1465 = stdlib.gt(v1464, stdlib.checkedBigNumberify('./index.rsh:286:46:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1465, {
    at: './index.rsh:286:23:application',
    fs: ['at ./index.rsh:282:13:application call to [unknown function] (defined at: ./index.rsh:282:18:function exp)', 'at ./index.rsh:282:13:application call to [unknown function] (defined at: ./index.rsh:282:13:function exp)', 'at ./index.rsh:106:81:application call to "runaBT0_172" (defined at: ./index.rsh:279:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1469 = ['aBT0_172', v1456];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1469],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:289:26:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1690 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1691 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1695 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v1696 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v1697 = [v1691, v1695, v1696];
          const v1698 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v1697);
          ;
          const v1700 = v1598[stdlib.checkedBigNumberify('./index.rsh:279:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1700), null);
          const v1707 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1594), null);
          const v1708 = stdlib.fromSome(v1707, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v1709 = v1698[stdlib.checkedBigNumberify('./index.rsh:295:61:application', stdlib.UInt_max, '0')];
          const v1710 = v1709[stdlib.checkedBigNumberify('./index.rsh:295:61:application', stdlib.UInt_max, '0')];
          const v1711 = stdlib.mul(v1708, v1710);
          const v1712 = stdlib.div(v1711, v1299);
          const v1713 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1700), null);
          const v1714 = stdlib.fromSome(v1713, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v1715 = stdlib.add(v1714, v1712);
          await stdlib.simMapSet(sim_r, 1, v1700, v1715);
          const v1716 = true;
          const v1717 = await txn1.getOutput('aBT', 'v1716', ctc7, v1716);
          
          const v1723 = stdlib.add(v1299, v1712);
          const v7648 = v1294;
          const v7649 = v1295;
          const v7650 = v1296;
          const v7651 = v1297;
          const v7652 = v1298;
          const v7653 = v1723;
          const v7655 = v1698;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v1690 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v1691 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v1695 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v1696 = v1690[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v1697 = [v1691, v1695, v1696];
      const v1698 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v1697);
      ;
      const v1700 = v1598[stdlib.checkedBigNumberify('./index.rsh:279:13:spread', stdlib.UInt_max, '0')];
      const v1701 = stdlib.addressEq(v1594, v1276);
      const v1702 = stdlib.addressEq(v1594, v1294);
      const v1703 = v1701 ? true : v1702;
      stdlib.assert(v1703, {
        at: './index.rsh:292:24:application',
        fs: ['at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1704 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1700), null);
      const v1705 = stdlib.fromSome(v1704, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v1706 = stdlib.gt(v1705, stdlib.checkedBigNumberify('./index.rsh:294:71:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1706, {
        at: './index.rsh:294:24:application',
        fs: ['at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1707 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1594), null);
      const v1708 = stdlib.fromSome(v1707, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v1709 = v1698[stdlib.checkedBigNumberify('./index.rsh:295:61:application', stdlib.UInt_max, '0')];
      const v1710 = v1709[stdlib.checkedBigNumberify('./index.rsh:295:61:application', stdlib.UInt_max, '0')];
      const v1711 = stdlib.mul(v1708, v1710);
      const v1712 = stdlib.div(v1711, v1299);
      const v1713 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1700), null);
      const v1714 = stdlib.fromSome(v1713, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v1715 = stdlib.add(v1714, v1712);
      await stdlib.mapSet(map1, v1700, v1715);
      const v1716 = true;
      const v1717 = await txn1.getOutput('aBT', 'v1716', ctc7, v1716);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v1598, v1717), {
          at: './index.rsh:280:13:application',
          fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)', 'at ./index.rsh:299:20:application call to "res" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v1723 = stdlib.add(v1299, v1712);
      const v7648 = v1294;
      const v7649 = v1295;
      const v7650 = v1296;
      const v7651 = v1297;
      const v7652 = v1298;
      const v7653 = v1723;
      const v7655 = v1698;
      return;
      
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc11,
    aST0_172: ctc10,
    addWL0_172: ctc11,
    cBT0_172: ctc12,
    cCM0_172: ctc11,
    cST0_172: ctc12,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc12,
    remWL0_172: ctc11
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1376 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:106:81:application call to "runaST0_172" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1377 = v1376[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1379 = v1376[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1384 = stdlib.addressEq(v1377, v1276);
  const v1385 = stdlib.addressEq(v1377, v1294);
  const v1386 = v1384 ? true : v1385;
  stdlib.assert(v1386, {
    at: './index.rsh:176:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:106:81:application call to "runaST0_172" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1387 = stdlib.gt(v1379, stdlib.checkedBigNumberify('./index.rsh:177:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1387, {
    at: './index.rsh:177:23:application',
    fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:106:81:application call to "runaST0_172" (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1393 = ['aST0_172', v1376];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1393],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:181:34:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v1981 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1982 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v1986 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v1987 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v1988 = [v1982, v1986, v1987];
          const v1989 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v1988);
          ;
          const v2018 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '1')];
          const v2019 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v2018, null);
          const v2025 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2018), null);
          const v2026 = stdlib.fromSome(v2025, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2027 = stdlib.add(v2026, v2019);
          await stdlib.simMapSet(sim_r, 0, v2018, v2027);
          const v2028 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2018), null);
          const v2029 = stdlib.fromSome(v2028, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2030 = stdlib.add(v2029, v2019);
          await stdlib.simMapSet(sim_r, 3, v2018, v2030);
          const v2031 = true;
          const v2032 = await txn1.getOutput('aST', 'v2031', ctc7, v2031);
          
          const v2040 = stdlib.add(v1299, v2019);
          const v7736 = v1294;
          const v7737 = v1295;
          const v7738 = v1296;
          const v7739 = v1297;
          const v7740 = v1298;
          const v7741 = v2040;
          const v7743 = v1989;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v1981 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v1982 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v1986 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v1987 = v1981[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v1988 = [v1982, v1986, v1987];
      const v1989 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v1988);
      ;
      const v2017 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '0')];
      const v2018 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '1')];
      const v2019 = v1889[stdlib.checkedBigNumberify('./index.rsh:172:13:spread', stdlib.UInt_max, '2')];
      const v2020 = stdlib.addressEq(v2017, v1276);
      const v2021 = stdlib.addressEq(v2017, v1294);
      const v2022 = v2020 ? true : v2021;
      stdlib.assert(v2022, {
        at: './index.rsh:184:24:application',
        fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v2023 = stdlib.gt(v2019, stdlib.checkedBigNumberify('./index.rsh:185:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2023, {
        at: './index.rsh:185:24:application',
        fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v2018, null);
      const v2025 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2018), null);
      const v2026 = stdlib.fromSome(v2025, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v2027 = stdlib.add(v2026, v2019);
      await stdlib.mapSet(map0, v2018, v2027);
      const v2028 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2018), null);
      const v2029 = stdlib.fromSome(v2028, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v2030 = stdlib.add(v2029, v2019);
      await stdlib.mapSet(map3, v2018, v2030);
      const v2031 = true;
      const v2032 = await txn1.getOutput('aST', 'v2031', ctc7, v2031);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v1889, v2032), {
          at: './index.rsh:173:13:application',
          fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:192:20:application call to "res" (defined at: ./index.rsh:183:13:function exp)', 'at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v2040 = stdlib.add(v1299, v2019);
      const v7736 = v1294;
      const v7737 = v1295;
      const v7738 = v1296;
      const v7739 = v1297;
      const v7740 = v1298;
      const v7741 = v2040;
      const v7743 = v1989;
      return;
      
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc12,
    cCM0_172: ctc10,
    cST0_172: ctc12,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc12,
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1346 = ctc.selfAddress();
  const v1348 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:138:13:application call to [unknown function] (defined at: ./index.rsh:138:13:function exp)', 'at ./index.rsh:106:81:application call to "runaddWL0_172" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1352 = stdlib.addressEq(v1346, v1276);
  const v1353 = stdlib.addressEq(v1346, v1294);
  const v1354 = v1352 ? true : v1353;
  stdlib.assert(v1354, {
    at: './index.rsh:139:23:application',
    fs: ['at ./index.rsh:138:13:application call to [unknown function] (defined at: ./index.rsh:138:18:function exp)', 'at ./index.rsh:138:13:application call to [unknown function] (defined at: ./index.rsh:138:13:function exp)', 'at ./index.rsh:106:81:application call to "runaddWL0_172" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1358 = ['addWL0_172', v1348];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1358],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:143:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:143:26:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2272 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2277 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v2278 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v2279 = [v2273, v2277, v2278];
          const v2280 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2279);
          ;
          const v2334 = v2180[stdlib.checkedBigNumberify('./index.rsh:135:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2334, null);
          const v2339 = true;
          const v2340 = await txn1.getOutput('addWL', 'v2339', ctc7, v2339);
          
          const v7824 = v1294;
          const v7825 = v1295;
          const v7826 = v1296;
          const v7827 = v1297;
          const v7828 = v1298;
          const v7829 = v1299;
          const v7831 = v2280;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v2272 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v2277 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v2278 = v2272[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v2279 = [v2273, v2277, v2278];
      const v2280 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2279);
      ;
      const v2334 = v2180[stdlib.checkedBigNumberify('./index.rsh:135:13:spread', stdlib.UInt_max, '0')];
      const v2335 = stdlib.addressEq(v1594, v1276);
      const v2336 = stdlib.addressEq(v1594, v1294);
      const v2337 = v2335 ? true : v2336;
      stdlib.assert(v2337, {
        at: './index.rsh:146:24:application',
        fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2334, null);
      const v2339 = true;
      const v2340 = await txn1.getOutput('addWL', 'v2339', ctc7, v2339);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v2180, v2340), {
          at: './index.rsh:136:13:application',
          fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:149:20:application call to "res" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v7824 = v1294;
      const v7825 = v1295;
      const v7826 = v1296;
      const v7827 = v1297;
      const v7828 = v1298;
      const v7829 = v1299;
      const v7831 = v2280;
      return;
      
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc11,
    aST0_172: ctc12,
    addWL0_172: ctc11,
    cBT0_172: ctc10,
    cCM0_172: ctc11,
    cST0_172: ctc10,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc10,
    remWL0_172: ctc11
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1433 = ctc.selfAddress();
  const v1435 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:106:81:application call to "runcBT0_172" (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1437 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1433), null);
  let v1438;
  switch (v1437[0]) {
    case 'None': {
      const v1439 = v1437[1];
      v1438 = false;
      
      break;
      }
    case 'Some': {
      const v1440 = v1437[1];
      v1438 = true;
      
      break;
      }
    }
  stdlib.assert(v1438, {
    at: './index.rsh:259:23:application',
    fs: ['at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:17:function exp)', 'at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:106:81:application call to "runcBT0_172" (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1441 = v1302[stdlib.checkedBigNumberify('./index.rsh:260:31:application', stdlib.UInt_max, '0')];
  const v1442 = v1441[stdlib.checkedBigNumberify('./index.rsh:260:31:application', stdlib.UInt_max, '0')];
  const v1443 = stdlib.gt(v1442, stdlib.checkedBigNumberify('./index.rsh:260:38:decimal', stdlib.UInt_max, '0'));
  const v1444 = stdlib.gt(v1299, stdlib.checkedBigNumberify('./index.rsh:260:51:decimal', stdlib.UInt_max, '0'));
  const v1445 = v1443 ? v1444 : false;
  const v1446 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1433), null);
  const v1447 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
  const v1448 = stdlib.ge(v1299, v1447);
  const v1449 = v1445 ? v1448 : false;
  stdlib.assert(v1449, {
    at: './index.rsh:260:23:application',
    fs: ['at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:17:function exp)', 'at ./index.rsh:257:13:application call to [unknown function] (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:106:81:application call to "runcBT0_172" (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1452 = ['cBT0_172', v1435];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1452],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:263:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:263:25:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2563 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2564 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2568 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v2569 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v2570 = [v2564, v2568, v2569];
          const v2571 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2570);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1594), null);
          const v2643 = v2571[stdlib.checkedBigNumberify('./index.rsh:267:32:application', stdlib.UInt_max, '0')];
          const v2644 = v2643[stdlib.checkedBigNumberify('./index.rsh:267:32:application', stdlib.UInt_max, '0')];
          const v2648 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1594), null);
          const v2649 = stdlib.fromSome(v2648, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2656 = stdlib.mul(v2649, v2644);
          const v2657 = stdlib.div(v2656, v1299);
          const v2663 = stdlib.sub(v2644, v2657);
          const v2666 = v2643[stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '1')];
          const v2667 = v2643[stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '2')];
          const v2668 = [v2663, v2666, v2667];
          const v2669 = stdlib.Array_set(v2571, stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '0'), v2668);
          sim_r.txns.push({
            amt: v2657,
            kind: 'from',
            to: v1594,
            tok: v1280
            });
          const v2670 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1594), null);
          const v2671 = stdlib.fromSome(v2670, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v2672 = stdlib.add(v2671, v2657);
          await stdlib.simMapSet(sim_r, 4, v1594, v2672);
          await stdlib.simMapSet(sim_r, 5, v1594, v1295);
          const v2673 = true;
          const v2674 = await txn1.getOutput('cBT', 'v2673', ctc7, v2673);
          
          const v7912 = v1294;
          const v7913 = v1295;
          const v7914 = v1296;
          const v7915 = v1297;
          const v7916 = v1298;
          const v7917 = v1299;
          const v7919 = v2669;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v2563 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v2564 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v2568 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v2569 = v2563[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v2570 = [v2564, v2568, v2569];
      const v2571 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2570);
      ;
      const v2639 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1594), null);
      let v2640;
      switch (v2639[0]) {
        case 'None': {
          const v2641 = v2639[1];
          v2640 = false;
          
          break;
          }
        case 'Some': {
          const v2642 = v2639[1];
          v2640 = true;
          
          break;
          }
        }
      stdlib.assert(v2640, {
        at: './index.rsh:266:24:application',
        fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2643 = v2571[stdlib.checkedBigNumberify('./index.rsh:267:32:application', stdlib.UInt_max, '0')];
      const v2644 = v2643[stdlib.checkedBigNumberify('./index.rsh:267:32:application', stdlib.UInt_max, '0')];
      const v2645 = stdlib.gt(v2644, stdlib.checkedBigNumberify('./index.rsh:267:39:decimal', stdlib.UInt_max, '0'));
      const v2646 = stdlib.gt(v1299, stdlib.checkedBigNumberify('./index.rsh:267:52:decimal', stdlib.UInt_max, '0'));
      const v2647 = v2645 ? v2646 : false;
      const v2648 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1594), null);
      const v2649 = stdlib.fromSome(v2648, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v2650 = stdlib.ge(v1299, v2649);
      const v2651 = v2647 ? v2650 : false;
      stdlib.assert(v2651, {
        at: './index.rsh:267:24:application',
        fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2656 = stdlib.mul(v2649, v2644);
      const v2657 = stdlib.div(v2656, v1299);
      const v2663 = stdlib.sub(v2644, v2657);
      const v2666 = v2643[stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '1')];
      const v2667 = v2643[stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '2')];
      const v2668 = [v2663, v2666, v2667];
      const v2669 = stdlib.Array_set(v2571, stdlib.checkedBigNumberify('./index.rsh:270:44:application', stdlib.UInt_max, '0'), v2668);
      ;
      const v2670 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1594), null);
      const v2671 = stdlib.fromSome(v2670, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v2672 = stdlib.add(v2671, v2657);
      await stdlib.mapSet(map4, v1594, v2672);
      await stdlib.mapSet(map5, v1594, v1295);
      const v2673 = true;
      const v2674 = await txn1.getOutput('cBT', 'v2673', ctc7, v2673);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v2471, v2674), {
          at: './index.rsh:255:13:application',
          fs: ['at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:274:20:application call to "res" (defined at: ./index.rsh:265:13:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v7912 = v1294;
      const v7913 = v1295;
      const v7914 = v1296;
      const v7915 = v1297;
      const v7916 = v1298;
      const v7917 = v1299;
      const v7919 = v2669;
      return;
      
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc12,
    cCM0_172: ctc10,
    cST0_172: ctc12,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc12,
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1471 = ctc.selfAddress();
  const v1473 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:13:function exp)', 'at ./index.rsh:106:81:application call to "runcCM0_172" (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1477 = stdlib.addressEq(v1471, v1276);
  const v1478 = stdlib.addressEq(v1471, v1294);
  const v1479 = v1477 ? true : v1478;
  stdlib.assert(v1479, {
    at: './index.rsh:307:23:application',
    fs: ['at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:13:function exp)', 'at ./index.rsh:106:81:application call to "runcCM0_172" (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1483 = ['cCM0_172', v1473];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1483],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:311:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:311:26:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v2854 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2855 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v2859 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v2860 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v2861 = [v2855, v2859, v2860];
          const v2862 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2861);
          ;
          const v2972 = v2762[stdlib.checkedBigNumberify('./index.rsh:303:13:spread', stdlib.UInt_max, '0')];
          const v2976 = true;
          const v2977 = await txn1.getOutput('cCM', 'v2976', ctc7, v2976);
          
          const v8000 = v2972;
          const v8001 = v1295;
          const v8002 = v1296;
          const v8003 = v1297;
          const v8004 = v1298;
          const v8005 = v1299;
          const v8007 = v2862;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v2854 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v2855 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v2859 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v2860 = v2854[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v2861 = [v2855, v2859, v2860];
      const v2862 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v2861);
      ;
      const v2972 = v2762[stdlib.checkedBigNumberify('./index.rsh:303:13:spread', stdlib.UInt_max, '0')];
      const v2973 = stdlib.addressEq(v1594, v1276);
      const v2974 = stdlib.addressEq(v1594, v1294);
      const v2975 = v2973 ? true : v2974;
      stdlib.assert(v2975, {
        at: './index.rsh:314:24:application',
        fs: ['at ./index.rsh:313:13:application call to [unknown function] (defined at: ./index.rsh:313:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v2976 = true;
      const v2977 = await txn1.getOutput('cCM', 'v2976', ctc7, v2976);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v2762, v2977), {
          at: './index.rsh:304:13:application',
          fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)', 'at ./index.rsh:316:20:application call to "res" (defined at: ./index.rsh:313:13:function exp)', 'at ./index.rsh:313:13:application call to [unknown function] (defined at: ./index.rsh:313:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v8000 = v2972;
      const v8001 = v1295;
      const v8002 = v1296;
      const v8003 = v1297;
      const v8004 = v1298;
      const v8005 = v1299;
      const v8007 = v2862;
      return;
      
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc11,
    aST0_172: ctc12,
    addWL0_172: ctc11,
    cBT0_172: ctc10,
    cCM0_172: ctc11,
    cST0_172: ctc10,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc10,
    remWL0_172: ctc11
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1395 = ctc.selfAddress();
  const v1397 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:106:81:application call to "runcST0_172" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1399 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1395), null);
  const v1400 = stdlib.fromSome(v1399, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
  const v1401 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1395), null);
  let v1402;
  switch (v1401[0]) {
    case 'None': {
      const v1403 = v1401[1];
      v1402 = false;
      
      break;
      }
    case 'Some': {
      const v1404 = v1401[1];
      v1402 = true;
      
      break;
      }
    }
  stdlib.assert(v1402, {
    at: './index.rsh:202:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:17:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:106:81:application call to "runcST0_172" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1405 = stdlib.gt(v1400, stdlib.checkedBigNumberify('./index.rsh:203:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1405, {
    at: './index.rsh:203:23:application',
    fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:17:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:106:81:application call to "runcST0_172" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1408 = ['cST0_172', v1397];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1408],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:206:25:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v3145 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3146 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3150 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v3151 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v3152 = [v3146, v3150, v3151];
          const v3153 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3152);
          ;
          const v3276 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1594), null);
          const v3277 = stdlib.fromSome(v3276, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1594), null);
          const v3283 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1594), null);
          const v3284 = stdlib.fromSome(v3283, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
          const v3285 = stdlib.add(v3284, v3277);
          await stdlib.simMapSet(sim_r, 2, v1594, v3285);
          await stdlib.simMapSet(sim_r, 0, v1594, stdlib.checkedBigNumberify('./index.rsh:215:33:decimal', stdlib.UInt_max, '0'));
          const v3286 = true;
          const v3287 = await txn1.getOutput('cST', 'v3286', ctc7, v3286);
          
          const v8088 = v1294;
          const v8089 = v1295;
          const v8090 = v1296;
          const v8091 = v1297;
          const v8092 = v1298;
          const v8093 = v1299;
          const v8095 = v3153;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v3145 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v3146 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v3150 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v3151 = v3145[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v3152 = [v3146, v3150, v3151];
      const v3153 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3152);
      ;
      const v3276 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1594), null);
      const v3277 = stdlib.fromSome(v3276, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v3278 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1594), null);
      let v3279;
      switch (v3278[0]) {
        case 'None': {
          const v3280 = v3278[1];
          v3279 = false;
          
          break;
          }
        case 'Some': {
          const v3281 = v3278[1];
          v3279 = true;
          
          break;
          }
        }
      stdlib.assert(v3279, {
        at: './index.rsh:210:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3282 = stdlib.gt(v3277, stdlib.checkedBigNumberify('./index.rsh:211:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3282, {
        at: './index.rsh:211:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3283 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1594), null);
      const v3284 = stdlib.fromSome(v3283, stdlib.checkedBigNumberify('./index.rsh:92:39:decimal', stdlib.UInt_max, '0'));
      const v3285 = stdlib.add(v3284, v3277);
      await stdlib.mapSet(map2, v1594, v3285);
      await stdlib.mapSet(map0, v1594, stdlib.checkedBigNumberify('./index.rsh:215:33:decimal', stdlib.UInt_max, '0'));
      const v3286 = true;
      const v3287 = await txn1.getOutput('cST', 'v3286', ctc7, v3286);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v3053, v3287), {
          at: './index.rsh:198:13:application',
          fs: ['at ./index.rsh:198:13:application call to [unknown function] (defined at: ./index.rsh:198:13:function exp)', 'at ./index.rsh:216:20:application call to "res" (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v8088 = v1294;
      const v8089 = v1295;
      const v8090 = v1296;
      const v8091 = v1297;
      const v8092 = v1298;
      const v8093 = v1299;
      const v8095 = v3153;
      return;
      
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc11,
    aST0_172: ctc12,
    addWL0_172: ctc11,
    cBT0_172: ctc13,
    cCM0_172: ctc11,
    cST0_172: ctc13,
    dBT0_172: ctc10,
    docHash0_172: ctc14,
    optIn0_172: ctc13,
    remWL0_172: ctc11
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1418 = ctc.selfAddress();
  const v1420 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:238:13:application call to [unknown function] (defined at: ./index.rsh:238:13:function exp)', 'at ./index.rsh:106:81:application call to "rundBT0_172" (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1421 = v1420[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1424 = stdlib.addressEq(v1418, v1276);
  const v1425 = stdlib.addressEq(v1418, v1294);
  const v1426 = v1424 ? true : v1425;
  stdlib.assert(v1426, {
    at: './index.rsh:239:23:application',
    fs: ['at ./index.rsh:238:13:application call to [unknown function] (defined at: ./index.rsh:238:20:function exp)', 'at ./index.rsh:238:13:application call to [unknown function] (defined at: ./index.rsh:238:13:function exp)', 'at ./index.rsh:106:81:application call to "rundBT0_172" (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1427 = stdlib.gt(v1421, stdlib.checkedBigNumberify('./index.rsh:240:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1427, {
    at: './index.rsh:240:23:application',
    fs: ['at ./index.rsh:238:13:application call to [unknown function] (defined at: ./index.rsh:238:20:function exp)', 'at ./index.rsh:238:13:application call to [unknown function] (defined at: ./index.rsh:238:13:function exp)', 'at ./index.rsh:106:81:application call to "rundBT0_172" (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1431 = ['dBT0_172', v1420];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1431],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:244:24:decimal', stdlib.UInt_max, '0'), [[v1421, v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3397 = v3344[stdlib.checkedBigNumberify('./index.rsh:235:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3436 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3437 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3438 = stdlib.add(v3437, v3397);
          const v3441 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v3442 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v3443 = [v3438, v3441, v3442];
          const v3444 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3443);
          sim_r.txns.push({
            amt: v3397,
            kind: 'to',
            tok: v1280
            });
          const v3590 = true;
          const v3591 = await txn1.getOutput('dBT', 'v3590', ctc7, v3590);
          
          const v3597 = stdlib.add(v1298, v3397);
          const v3598 = stdlib.add(v1295, stdlib.checkedBigNumberify('./index.rsh:251:76:decimal', stdlib.UInt_max, '1'));
          const v8176 = v1294;
          const v8177 = v3598;
          const v8178 = v1296;
          const v8179 = v1297;
          const v8180 = v3597;
          const v8181 = v1299;
          const v8183 = v3444;
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      undefined /* setApiDetails */;
      const v3397 = v3344[stdlib.checkedBigNumberify('./index.rsh:235:13:spread', stdlib.UInt_max, '0')];
      ;
      const v3436 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v3437 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v3438 = stdlib.add(v3437, v3397);
      const v3441 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v3442 = v3436[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v3443 = [v3438, v3441, v3442];
      const v3444 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3443);
      ;
      const v3586 = stdlib.addressEq(v1594, v1276);
      const v3587 = stdlib.addressEq(v1594, v1294);
      const v3588 = v3586 ? true : v3587;
      stdlib.assert(v3588, {
        at: './index.rsh:247:24:application',
        fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3589 = stdlib.gt(v3397, stdlib.checkedBigNumberify('./index.rsh:248:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3589, {
        at: './index.rsh:248:24:application',
        fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3590 = true;
      const v3591 = await txn1.getOutput('dBT', 'v3590', ctc7, v3590);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v3344, v3591), {
          at: './index.rsh:236:13:application',
          fs: ['at ./index.rsh:236:13:application call to [unknown function] (defined at: ./index.rsh:236:13:function exp)', 'at ./index.rsh:250:20:application call to "res" (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v3597 = stdlib.add(v1298, v3397);
      const v3598 = stdlib.add(v1295, stdlib.checkedBigNumberify('./index.rsh:251:76:decimal', stdlib.UInt_max, '1'));
      const v8176 = v1294;
      const v8177 = v3598;
      const v8178 = v1296;
      const v8179 = v1297;
      const v8180 = v3597;
      const v8181 = v1299;
      const v8183 = v3444;
      return;
      
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc11,
    aST0_172: ctc12,
    addWL0_172: ctc11,
    cBT0_172: ctc13,
    cCM0_172: ctc11,
    cST0_172: ctc13,
    dBT0_172: ctc14,
    docHash0_172: ctc10,
    optIn0_172: ctc13,
    remWL0_172: ctc11
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1332 = ctc.selfAddress();
  const v1334 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:106:81:application call to "rundocHash0_172" (defined at: ./index.rsh:118:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v1338 = stdlib.addressEq(v1332, v1276);
  const v1339 = stdlib.addressEq(v1332, v1294);
  const v1340 = v1338 ? true : v1339;
  stdlib.assert(v1340, {
    at: './index.rsh:122:23:application',
    fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:18:function exp)', 'at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:106:81:application call to "rundocHash0_172" (defined at: ./index.rsh:118:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'docHash'
    });
  const v1344 = ['docHash0_172', v1334];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1344],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:126:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:126:26:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v3727 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3728 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v3732 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v3733 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v3734 = [v3728, v3732, v3733];
          const v3735 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3734);
          ;
          const v3892 = v3635[stdlib.checkedBigNumberify('./index.rsh:118:13:spread', stdlib.UInt_max, '0')];
          const v3896 = true;
          const v3897 = await txn1.getOutput('docHash', 'v3896', ctc7, v3896);
          
          const v8264 = v1294;
          const v8265 = v1295;
          const v8266 = v3892;
          const v8267 = v1297;
          const v8268 = v1298;
          const v8269 = v1299;
          const v8271 = v3735;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v3727 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v3728 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v3732 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v3733 = v3727[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v3734 = [v3728, v3732, v3733];
      const v3735 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v3734);
      ;
      const v3892 = v3635[stdlib.checkedBigNumberify('./index.rsh:118:13:spread', stdlib.UInt_max, '0')];
      const v3893 = stdlib.addressEq(v1594, v1276);
      const v3894 = stdlib.addressEq(v1594, v1294);
      const v3895 = v3893 ? true : v3894;
      stdlib.assert(v3895, {
        at: './index.rsh:129:24:application',
        fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)'],
        msg: null,
        who: 'docHash'
        });
      const v3896 = true;
      const v3897 = await txn1.getOutput('docHash', 'v3896', ctc7, v3896);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v3635, v3897), {
          at: './index.rsh:119:13:application',
          fs: ['at ./index.rsh:119:13:application call to [unknown function] (defined at: ./index.rsh:119:13:function exp)', 'at ./index.rsh:131:20:application call to "res" (defined at: ./index.rsh:128:13:function exp)', 'at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v8264 = v1294;
      const v8265 = v1295;
      const v8266 = v3892;
      const v8267 = v1297;
      const v8268 = v1298;
      const v8269 = v1299;
      const v8271 = v3735;
      return;
      
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc11,
    aST0_172: ctc12,
    addWL0_172: ctc11,
    cBT0_172: ctc10,
    cCM0_172: ctc11,
    cST0_172: ctc10,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc10,
    remWL0_172: ctc11
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1412 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:106:81:application call to "runoptIn0_172" (defined at: ./index.rsh:221:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v1416 = ['optIn0_172', v1412];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1416],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:228:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:228:25:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v4018 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4019 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4023 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v4024 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v4025 = [v4019, v4023, v4024];
          const v4026 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v4025);
          ;
          const v4196 = true;
          const v4197 = await txn1.getOutput('optIn', 'v4196', ctc7, v4196);
          
          const v8352 = v1294;
          const v8353 = v1295;
          const v8354 = v1296;
          const v8355 = v1297;
          const v8356 = v1298;
          const v8357 = v1299;
          const v8359 = v4026;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v4018 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v4019 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v4023 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v4024 = v4018[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v4025 = [v4019, v4023, v4024];
      const v4026 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v4025);
      ;
      const v4196 = true;
      const v4197 = await txn1.getOutput('optIn', 'v4196', ctc7, v4196);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v3926, v4197), {
          at: './index.rsh:222:13:application',
          fs: ['at ./index.rsh:222:13:application call to [unknown function] (defined at: ./index.rsh:222:13:function exp)', 'at ./index.rsh:231:20:application call to "res" (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v8352 = v1294;
      const v8353 = v1295;
      const v8354 = v1296;
      const v8355 = v1297;
      const v8356 = v1298;
      const v8357 = v1299;
      const v8359 = v4026;
      return;
      
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
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
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Data({
    aBT0_172: ctc10,
    aST0_172: ctc11,
    addWL0_172: ctc10,
    cBT0_172: ctc12,
    cCM0_172: ctc10,
    cST0_172: ctc12,
    dBT0_172: ctc13,
    docHash0_172: ctc14,
    optIn0_172: ctc12,
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
  
  
  const [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9]);
  const v1360 = ctc.selfAddress();
  const v1362 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:106:81:application call to "runremWL0_172" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1366 = stdlib.addressEq(v1360, v1276);
  const v1367 = stdlib.addressEq(v1360, v1294);
  const v1368 = v1366 ? true : v1367;
  stdlib.assert(v1368, {
    at: './index.rsh:157:23:application',
    fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:18:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:106:81:application call to "runremWL0_172" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:106:81:application call to [unknown function] (defined at: ./index.rsh:106:81:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1372 = ['remWL0_172', v1362];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1276, v1280, v1294, v1295, v1296, v1297, v1298, v1299, v1302, v1372],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:161:26:decimal', stdlib.UInt_max, '0'), v1280]]],
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
      
      const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
      
      switch (v1595[0]) {
        case 'aBT0_172': {
          const v1598 = v1595[1];
          
          break;
          }
        case 'aST0_172': {
          const v1889 = v1595[1];
          
          break;
          }
        case 'addWL0_172': {
          const v2180 = v1595[1];
          
          break;
          }
        case 'cBT0_172': {
          const v2471 = v1595[1];
          
          break;
          }
        case 'cCM0_172': {
          const v2762 = v1595[1];
          
          break;
          }
        case 'cST0_172': {
          const v3053 = v1595[1];
          
          break;
          }
        case 'dBT0_172': {
          const v3344 = v1595[1];
          
          break;
          }
        case 'docHash0_172': {
          const v3635 = v1595[1];
          
          break;
          }
        case 'optIn0_172': {
          const v3926 = v1595[1];
          
          break;
          }
        case 'remWL0_172': {
          const v4217 = v1595[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v4309 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4310 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
          const v4314 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
          const v4315 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
          const v4316 = [v4310, v4314, v4315];
          const v4317 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v4316);
          ;
          const v4495 = v4217[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v4495, undefined /* Nothing */);
          const v4500 = true;
          const v4501 = await txn1.getOutput('remWL', 'v4500', ctc7, v4500);
          
          const v8440 = v1294;
          const v8441 = v1295;
          const v8442 = v1296;
          const v8443 = v1297;
          const v8444 = v1298;
          const v8445 = v1299;
          const v8447 = v4317;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc7, ctc1, ctc1, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1595], secs: v1597, time: v1596, didSend: v788, from: v1594 } = txn1;
  switch (v1595[0]) {
    case 'aBT0_172': {
      const v1598 = v1595[1];
      return;
      break;
      }
    case 'aST0_172': {
      const v1889 = v1595[1];
      return;
      break;
      }
    case 'addWL0_172': {
      const v2180 = v1595[1];
      return;
      break;
      }
    case 'cBT0_172': {
      const v2471 = v1595[1];
      return;
      break;
      }
    case 'cCM0_172': {
      const v2762 = v1595[1];
      return;
      break;
      }
    case 'cST0_172': {
      const v3053 = v1595[1];
      return;
      break;
      }
    case 'dBT0_172': {
      const v3344 = v1595[1];
      return;
      break;
      }
    case 'docHash0_172': {
      const v3635 = v1595[1];
      return;
      break;
      }
    case 'optIn0_172': {
      const v3926 = v1595[1];
      return;
      break;
      }
    case 'remWL0_172': {
      const v4217 = v1595[1];
      undefined /* setApiDetails */;
      ;
      const v4309 = v1302[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v4310 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0')];
      const v4314 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '1')];
      const v4315 = v4309[stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '2')];
      const v4316 = [v4310, v4314, v4315];
      const v4317 = stdlib.Array_set(v1302, stdlib.checkedBigNumberify('./index.rsh:106:81:dot', stdlib.UInt_max, '0'), v4316);
      ;
      const v4495 = v4217[stdlib.checkedBigNumberify('./index.rsh:153:13:spread', stdlib.UInt_max, '0')];
      const v4496 = stdlib.addressEq(v1594, v1276);
      const v4497 = stdlib.addressEq(v1594, v1294);
      const v4498 = v4496 ? true : v4497;
      stdlib.assert(v4498, {
        at: './index.rsh:164:24:application',
        fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v4495, undefined /* Nothing */);
      const v4500 = true;
      const v4501 = await txn1.getOutput('remWL', 'v4500', ctc7, v4500);
      if (v788) {
        stdlib.protect(ctc0, await interact.out(v4217, v4501), {
          at: './index.rsh:154:13:application',
          fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:167:20:application call to "res" (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v8440 = v1294;
      const v8441 = v1295;
      const v8442 = v1296;
      const v8443 = v1297;
      const v8444 = v1298;
      const v8445 = v1299;
      const v8447 = v4317;
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
    impure: [`aBT(address)byte`, `aST(address,address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `dBT(uint64)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint64,uint64)`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `vHash()byte[96]`, `wlMember(address)byte`],
    sigs: [`aBT(address)byte`, `aST(address,address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `claimSTBT(address)(uint64,uint64)`, `dBT(uint64)byte`, `docHash(byte[96])byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `vHash()byte[96]`, `wlMember(address)byte`]
    },
  appApproval: `BiAhAAEDQAQIYDY3zcXVhwnbqqjUDN3u0KAO2I6Z4A603LWsDevmhNMJsILfsAzd0eGYCaHg7OcEyfyYvAW8rcerCPmEipEFsJ3j3QGc+IOIAvmu9JUBAv///////////wEgSLEBuQEFCaCNBiYDAQEBAAAiNQAxGEEKnipkSSJbNQEhBVs1AjEZIxJBAAoxACkhCK9mQgpqNhoAF0lBAlkiNQQjNQZJIQkMQAFMSSEKDEAArUkhCwxAADJJIQwMQAAVIQwSRDYaATX/gAEJNP9QJa9QQgKgIQsSRDYaATX/gAEGNP9QgVivUEICikkhDQxAAFEhDRJENAEkEkQ2GgE1/yI0/4gKGlcSCUk1/iNbNP4iVU0WIjT/iAoGVyQJSTX+I1s0/iJVTRZQIjT/iAnxVy0JSTX+I1s0/iJVTRZQNQdCCcwhChJENhoBNhoCUDYaA1A1/yg0/1CBGK9QQgIWSSEODEAANEkhDwxAABkhDxJENAEkEkQpZChkUEk1A1ewATUHQgmJIQ4SRCo1/4ABAzT/UCEGr1BCAdtJIRAMQAAxIRASRDQBJBJENhoBiAlwVzYBSTX+IlVAAAYiNf9CAAYjNf9CAAA0/xZRBwg1B0IJPSEJEkQ0ASQSRClkKGRQSTUDV7kINANXsQhQNANXSAhQNQdCCRhJIREMQABpSSESDEAALkkhEwxAABUhExJENhoBNf+AAQI0/1Alr1BCAVQhEhJENhoBNf+AAQc0/1BCAUJJIRQMQAAUIRQSRCo1/4ABCDT/UCEGr1BCASchERJENAEkEkQpZChkUEk1A1dQYDUHQgioSSEVDEAAMEkhFgxAABUhFhJENhoBNf+AAQQ0/1Alr1BCAOshFRJEKjX/gAEFNP9QIQavUEIA10khFwxAADwhFxJENAEkEkQ2GgE1/yI0/4gIZ1cACUk1/iNbNP4iVU0WIjT/iAhTVwkJSTX+I1s0/iJVTRZQNQdCCC6B3/aGCxJENhoBNf8pNP9QJa9QQgB+NhoCFzUENhoDNhoBF0khGAxABnNJJAxAAGMkEkQkNAESRDQESSISTDQCEhFEKWQoZFBJNQNXACA1/4AEp2XEtLAyBiEZD0Q0/zEAEkQ0/zQDIRpbNANXKCA0AyEbWzQDV1BgNANXsAEXNAMhHFs0AyEdWzIGNANXwRFCBwVIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSklXACA1/yEaWzX+VyggNf0hG1s1/FdQYDX7V7ABFzX6IRxbNfkhHVs1+FfBETX3STUFNfaABOO40ZU09lCwMgYhGQxENPYiVUkhHgxAAjZJgQcMQAD8SSEFDEAApUkhHwxAAGEhHxJENPZXASA19TT3VwARNfQxADT/EjEANP0SEUQ09Sk09YgHBSIhB0xWZoAJAAAAAAAAEZQBsCg1BzT/NP40/TT8NPs0+jT5NPgyBjT0VwAINPRXCAhQNPRXEAFQQgYjSDT3VwARNfWACQAAAAAAABBkAbAoNQc0/zT+NP00/DT7NPo0+TT4MgY09VcACDT1VwgIUDT1VxABUEIF5kg09lcBYDX1NPdXABE19DEANP8SMQA0/RIRRIAJAAAAAAAADzgBsCg1BzT/NP40/TT8NPU0+jT5NPgyBjT0VwAINPRXCAhQNPRXEAFQQgWWSYEGDEAAaUg09lcBCDX1NPUXNfQ091cAETXzNPQ0/ogGQjEANP8SMQA0/RIRRDT0Ig1EgAkAAAAAAAAOBgGwKDUHNP80/jT9NPwjCDT7NPo0+TT0CDT4MgY08yJbNPQIFjTzVwgIUDTzVxABUEIFJkg091cAETX1IjEAiAW/VwAJSTXzI1s08yJVTTX0MQCIBatXNgFJNfIiVUAABiI180IABiM180IAADTzRDT0Ig1EMQApMQCIBYQoIjEAiAV9VxIJSTXyI1s08iJVTTT0CBZQNfJJVwASNPJQTFcbHFBmMQApMQCIBVSACQEAAAAAAAAAADXyVwkuNPJMUGaACQAAAAAAAAzWAbAoNQc0/zT+NP00/DT7NPo0+TT4MgY09VcACDT1VwgIUDT1VxABUEIEY0khGAxAAcZJJAxAAWJJIQQMQABQSDT2VwEgNfU091cAETX0MQA0/xIxADT9EhFEgAkAAAAAAAALoAGwKDUHNP80/jT1NPw0+zT6NPk0+DIGNPRXAAg09FcICFA09FcQAVBCA/9INPdXABFJNfVXAAg09VcICFA09VcQAVA19DEAiASHVzYBSTXyIlVAAAYiNfNCAAYjNfNCAAA080Q09FcAEUk18iJbNfEiMQCIBFtXGwlJNe8jWzTvIlVNNfA08SINNPgiDRA0+DTwDxBENPA08Qs0+Ao177EisgE077ISIQSyEDEAshQ0/rIRszEAKTEAiAQVKCIxAIgEDlckCUk17iNbNO4iVU007wgWUDXuSVcAJDTuUExXLQpQZjEAKTEAiAPlKDT8FlA17klXAC007lBMVzYBUGaACQAAAAAAAApxAbAoNQc0/zT+NP00/DT7NPo0+TT4MgY08TTvCRY08lcICFA08lcQAVBCAvRINPZXASA19TT3VwARNfQxADT/EjEANP0SEUQ09Sk09YgDeCMhB0xWZoAJAAAAAAAACSMBsCg1BzT/NP40/TT8NPs0+jT5NPgyBjT0VwAINPRXCAhQNPRXEAFQQgKWSSMMQADVSDT2VwFINfU091cAETX0NPVXACA18zT1VyAgNfI09SVbNfE08zT/EjTzNP0SEUQ08SINRDTyKTTyiAL7IyEHTFZmNPIpNPKIAu0oIjTyiALmVwAJSTXwI1s08CJVTTTxCBZQNfBXCS408ExQZjTyKTTyiALCKCI08ogCu1cbCUk18CNbNPAiVU008QgWUDXwSVcAGzTwUExXJBNQZoAJAAAAAAAAB+8BsCg1BzT/NP40/TT8NPs0+jT5NPg08QgyBjT0VwAINPRXCAhQNPRXEAFQQgG7SDT2VwEgNfU091cAEUk19FcACDT0VwgIUDT0VxABUDXzNPU18jEANP8SMQA0/RIRRCI08ogCK1cbCUk18SNbNPEiVU0iDUQiMQCIAhVXGwlJNfAjWzTwIlVNNPNXABEiWws0+Ao18TTyKTTyiAHzKCI08ogB7FcJCUk18CNbNPAiVU008QgWUDXwSVcACTTwUExXEiVQZoAJAAAAAAAABrQBsCg1BzT/NP40/TT8NPs0+jT5NPg08QgyBjTzQgD7IhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfyBqQFbNfuABGcVpXg0/1A0/hZRBwhQNP1QNPwWUDT7FlCwISCIAVuBEa9JNfpXABE1+SEgiAFLsSKyASKyEiEEshAyCrIUNPyyEbMxADT8NP0igGBhamRuYWVpbmF3aW5kaWFlbmd0bmlmcmp3cml0bmlxd3JuaXJlZmluZGluaWdhamRuYWVpbmF3aWRpYWVuZ3RuaWl0bmlxd3JuaXJlZmluZGluaWdmdWFlYmZ1YmF3dXI0/iIiMgYhBa80+VcICFA0+VcQAVBCAAA1/zX+Nf01/DX7Nfo1+TX4NfdJNfY09xZQNPhQNPkWUDT6UDT7FlEHCFA0/BZQNP0WUDT/UClLAVcAf2coSwFXf1NnSCQ1ATIGNQJCABwxGSEeEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAAVIIQiviSliiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 55,
  stateKeys: 2,
  stateSize: 210,
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
                "internalType": "struct T11",
                "name": "v1277",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1278",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1279",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1280",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1281",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "internalType": "struct T11",
                "name": "v1277",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1278",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1279",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1280",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1281",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T19",
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
                    "internalType": "struct T14",
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
                    "internalType": "struct T15",
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
                    "internalType": "struct T14",
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
                    "internalType": "struct T14",
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
                    "internalType": "struct T17",
                    "name": "_dBT0_172",
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
                        "internalType": "struct T3",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_docHash0_172",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_172",
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
                    "internalType": "struct T14",
                    "name": "_remWL0_172",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1595",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
        "internalType": "struct T23",
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
    "name": "_reach_oe_v1716",
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
    "name": "_reach_oe_v2031",
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
    "name": "_reach_oe_v2339",
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
    "name": "_reach_oe_v2673",
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
    "name": "_reach_oe_v2976",
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
    "name": "_reach_oe_v3286",
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
    "name": "_reach_oe_v3590",
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
    "name": "_reach_oe_v3896",
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
    "name": "_reach_oe_v4196",
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
    "name": "_reach_oe_v4500",
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
                    "internalType": "enum _enum_T19",
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
                    "internalType": "struct T14",
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
                    "internalType": "struct T15",
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
                    "internalType": "struct T14",
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
                    "internalType": "struct T14",
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
                    "internalType": "struct T17",
                    "name": "_dBT0_172",
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
                        "internalType": "struct T3",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_docHash0_172",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_172",
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
                    "internalType": "struct T14",
                    "name": "_remWL0_172",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1595",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
        "internalType": "struct T23",
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
        "name": "v8448",
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
        "internalType": "struct T3",
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
        "name": "v8452",
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
        "name": "v8455",
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
  Bytecode: `0x608060405260405162004d0038038062004d0083398101604081905262000026916200069a565b60008055436003556200003862000372565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b92919062000773565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415600d620001f6565b6060810180517f616a646e6165696e6177696e646961656e67746e6966726a777269746e697177905280517f726e69726566696e64696e6967616a646e6165696e617769646961656e67746e602090910152517f6969746e697177726e69726566696e64696e69676675616562667562617775726040919091015262000153620003ed565b80513390526020808401805160609081015184516001600160a01b03918216908501528251604090810151858701805191909316905281516000908601819052878401518351830152935185015182519015159301929092528051608001839052805160a001839052514360c0909101529184015191840151620001d992919062000220565b602082015160e00152620001ed81620002a3565b50505062000988565b816200021c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200022a62000418565b60005b600181101562000280578481600181106200024c576200024c62000806565b602002015182826001811062000266576200026662000806565b60200201528062000277816200081c565b9150506200022d565b508181846001811062000297576200029762000806565b60200201529392505050565b620002ad62000465565b8151516001600160a01b039081168252825160209081015182168184015280840180515190921660408085019190915282518201516060808601919091528351820151608080870191909152845190910151151560a08087019190915284519091015160c08601528351015160e080860191909152925190920151610100840152600360005543600155905162000347918391016200088c565b604051602081830303815290604052600290805190602001906200036d929190620004cb565b505050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620003a562000418565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291015290565b905290565b604080516080810182526000918101828152606082019290925290815260208101620003e86200055a565b60405180602001604052806001905b6200044e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004275790505090565b6040805161012081018252600080825260208083018290528284018290526060808401839052845190810185528281529081018290529283015290608082019081526020016000151581526020016000815260200160008152602001620003e862000418565b828054620004d9906200094b565b90600052602060002090601f016020900481019282620004fd576000855562000548565b82601f106200051857805160ff191683800117855562000548565b8280016001018555821562000548579182015b82811115620005485782518255916020019190600101906200052b565b5062000556929150620005bc565b5090565b60408051610100810182526000808252602080830182905283516060810185528281529081018290528084019190915290918201908152602001600015158152602001600081526020016000815260200160008152602001620003e862000418565b5b80821115620005565760008155600101620005bd565b604080519081016001600160401b03811182821017156200060457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200060457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200060457634e487b7160e01b600052604160045260246000fd5b805180151581146200067d57600080fd5b919050565b80516001600160a01b03811681146200067d57600080fd5b6000818303610120811215620006af57600080fd5b620006b9620005d3565b83518152601f198201915061010080831215620006d557600080fd5b620006df6200060a565b6080841215620006ee57600080fd5b620006f86200063b565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200073060a087016200066c565b60208201526200074360c0870162000682565b60408201526200075660e0870162000682565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620007f26101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200083f57634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b6001811015620008865781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016200084a565b50505050565b81516001600160a01b031681526020808301516101a0830191620008ba908401826001600160a01b03169052565b506040830151620008d660408401826001600160a01b03169052565b506060830151606083015260808301516200090860808401828051825260208082015190830152604090810151910152565b5060a083015180151560e08401525060c08301516101008381019190915260e08401516101208401528301516200094461014084018262000846565b5092915050565b600181811c908216806200096057607f821691505b602082108114156200098257634e487b7160e01b600052602260045260246000fd5b50919050565b61436880620009986000396000f3fe6080604052600436106101a35760003560e01c80635d3320a0116100e0578063ab53f2c611610084578063cadc2e7a11610061578063cadc2e7a1461045a578063d1ad1a371461047a578063dc01fb9d1461048f578063e9b451af146104af57005b8063ab53f2c6146103f7578063abe9f98d1461041a578063acf0cc221461043a57005b806374fcef12116100bd57806374fcef121461039c578063817d57f3146103af57806383230757146103cf578063a153a9bd146103e457005b80635d3320a01461036e5780637333bd091461038157806373b4522c1461038957005b80632f42e5091161014757806354f2991c1161012457806354f2991c146102f6578063573fa8a11461030957806359cac3a41461032b5780635b48684e1461036657005b80632f42e509146102bb5780633bc5b7bf146102ce5780634acdd6cc146102ee57005b80631e3f5f07116101805780631e3f5f071461021a5780631e93b0f11461022d5780631fa8b02f1461024c5780632080ea1c1461028e57005b806306dc92ff146101ac578063125f48e4146101e257806312822a751461020557005b366101aa57005b005b3480156101b857600080fd5b506101cc6101c7366004613909565b6104c2565b6040516101d9919061394c565b60405180910390f35b6101f56101f0366004613909565b6104ee565b60405190151581526020016101d9565b34801561021157600080fd5b506101f561054f565b6101f561022836600461397c565b610615565b34801561023957600080fd5b506003545b6040519081526020016101d9565b34801561025857600080fd5b5061026c610267366004613909565b61068b565b60408051825181526020808401519082015291810151908201526060016101d9565b34801561029a57600080fd5b506102ae6102a9366004613909565b610850565b6040516101d991906139bd565b6101f56102c9366004613909565b610876565b3480156102da57600080fd5b506101cc6102e9366004613909565b6108d3565b6101f56108f9565b6101f5610304366004613af6565b610946565b34801561031557600080fd5b5061031e61099f565b6040516101d99190613b12565b34801561033757600080fd5b5061034b610346366004613909565b610a7b565b604080518251815260209283015192810192909252016101d9565b6101f5610be7565b6101aa61037c366004613b33565b610c36565b6101f5610c5a565b6101aa610397366004613b4c565b610ca7565b6101f56103aa366004613909565b610cc7565b3480156103bb57600080fd5b506101cc6103ca366004613909565b610d28565b3480156103db57600080fd5b5060015461023e565b6101f56103f2366004613909565b610d4e565b34801561040357600080fd5b5061040c610db1565b6040516101d9929190613b8a565b34801561042657600080fd5b506101f5610435366004613909565b610e4e565b34801561044657600080fd5b506101cc610455366004613909565b610f75565b34801561046657600080fd5b506101cc610475366004613909565b610f9b565b34801561048657600080fd5b5061026c610fc1565b34801561049b57600080fd5b506101cc6104aa366004613909565b6110ea565b6101f56104bd366004613bc4565b611110565b60408051606081018252600080825260208201819052918101919091526104e882611168565b92915050565b60006104f8613319565b61050061336d565b61050861338c565b60408051602080820183526001600160a01b03881682526060840191909152600283528151808201909252828252830152610543828461123a565b50506040015192915050565b6000600360005414156106065760006002805461056b90613bdd565b80601f016020809104026020016040519081016040528092919081815260200182805461059790613bdd565b80156105e45780601f106105b9576101008083540402835291602001916105e4565b820191906000526020600020905b8154815290600101906020018083116105c757829003601f168201915b50505050508060200190518101906105fc9190613cf9565b60a0015192915050565b61061260006008612a32565b90565b600061061f613319565b61062761336d565b61062f61338c565b604080516060810182526001600160a01b0389811682528816602082015280820187905290820152600181819052506040805160208082019092528281529083015261067b828461123a565b50506020015190505b9392505050565b6106af60405180606001604052806000815260200160008152602001600081525090565b6003600054141561083f576000600280546106c990613bdd565b80601f01602080910402602001604051908101604052809291908181526020018280546106f590613bdd565b80156107425780601f1061071757610100808354040283529160200191610742565b820191906000526020600020905b81548152906001019060200180831161072557829003601f168201915b505050505080602001905181019061075a9190613cf9565b905061078360408051608081018252600060208201818152928201819052606082015290815290565b600161078e85612a58565b5160018111156107a0576107a0613926565b146107ac5760006107ba565b6107b584612a58565b604001515b81515260016107c885612ae5565b5160018111156107da576107da613926565b146107e65760006107f4565b6107ef84612ae5565b604001515b815160200152600161080585612b72565b51600181111561081757610817613926565b14610823576000610831565b61082c84612b72565b604001515b815160400152519392505050565b61084b6000600a612a32565b919050565b60408051606081018252600080825260208201819052918101919091526104e882612bff565b6000610880613319565b61088861336d565b61089061338c565b60408051602080820183526001600160a01b0388168252838101919091526000835281518082019092528282528301526108ca828461123a565b50505192915050565b60408051606081018252600080825260208201819052918101919091526104e882612cc8565b6000610903613319565b61090b61336d565b61091361338c565b600060c0820152600581526040805160208082019092528281529083015261093b828461123a565b505060a00151919050565b6000610950613319565b61095861336d565b61096061338c565b6040805160208082018352878252610100840191909152600783528151808201909252828252830152610993828461123a565b505060e0015192915050565b60408051606081018252600080825260208201819052918101829052905460031415610a6f576000600280546109d490613bdd565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0090613bdd565b8015610a4d5780601f10610a2257610100808354040283529160200191610a4d565b820191906000526020600020905b815481529060010190602001808311610a3057829003601f168201915b5050505050806020019051810190610a659190613cf9565b6080015192915050565b6106126000600b612a32565b604080518082019091526000808252602082015260036000541415610bdb57600060028054610aa990613bdd565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad590613bdd565b8015610b225780601f10610af757610100808354040283529160200191610b22565b820191906000526020600020905b815481529060010190602001808311610b0557829003601f168201915b5050505050806020019051810190610b3a9190613cf9565b9050610b5c604080516060810182526000602082018181529282015290815290565b6001610b6785612cc8565b516001811115610b7957610b79613926565b14610b85576000610b93565b610b8e84612cc8565b604001515b8151526001610ba185612d55565b516001811115610bb357610bb3613926565b14610bbf576000610bcd565b610bc884612d55565b604001515b815160200152519392505050565b61084b60006007612a32565b6000610bf1613319565b610bf961336d565b610c0161338c565b60006101208201526008815260408051602080820190925282815290830152610c2a828461123a565b50506101000151919050565b610c3e613319565b610c56610c5036849003840184613e7f565b8261123a565b5050565b6000610c64613319565b610c6c61336d565b610c7461338c565b600060808201526003815260408051602080820190925282815290830152610c9c828461123a565b505060600151919050565b610caf613319565b610c56610cc136849003840184613f9c565b82612de2565b6000610cd1613319565b610cd961336d565b610ce161338c565b60408051602080820183526001600160a01b038816825260a0840191909152600483528151808201909252828252830152610d1c828461123a565b50506080015192915050565b60408051606081018252600080825260208201819052918101919091526104e882612a58565b6000610d58613319565b610d6061336d565b610d6861338c565b60408051602080820183526001600160a01b0388168252610140840191909152600983528151808201909252828252830152610da4828461123a565b5050610120015192915050565b600060606000546002808054610dc690613bdd565b80601f0160208091040260200160405190810160405280929190818152602001828054610df290613bdd565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b50505050509050915091509091565b600060036000541415610f6957600060028054610e6a90613bdd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9690613bdd565b8015610ee35780601f10610eb857610100808354040283529160200191610ee3565b820191906000526020600020905b815481529060010190602001808311610ec657829003601f168201915b5050505050806020019051810190610efb9190613cf9565b6040805160208101909152600081529091506000610f1885612bff565b516001811115610f2a57610f2a613926565b1415610f395760008152610f61565b6001610f4485612bff565b516001811115610f5657610f56613926565b1415610f6157600181525b519392505050565b61084b6000600c612a32565b60408051606081018252600080825260208201819052918101919091526104e882612ae5565b60408051606081018252600080825260208201819052918101919091526104e882612d55565b610fe560405180606001604052806000815260200160008152602001600081525090565b600360005414156110de57600060028054610fff90613bdd565b80601f016020809104026020016040519081016040528092919081815260200182805461102b90613bdd565b80156110785780601f1061104d57610100808354040283529160200191611078565b820191906000526020600020905b81548152906001019060200180831161105b57829003601f168201915b50505050508060200190518101906110909190613cf9565b90506110b960408051608081018252600060208201818152928201819052606082015290815290565b60e082015181515260c082015181516020015260609091015181516040015251919050565b61061260006009612a32565b60408051606081018252600080825260208201819052918101919091526104e882612b72565b600061111a613319565b61112261336d565b61112a61338c565b604080516020808201835287825260e084019190915260068352815180820190925282825283015261115c828461123a565b505060c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156111b4576111b4613926565b141561122b576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156111f5576111f5613926565b600181111561120657611206613926565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b61124a6003600054146030612a32565b815161126590158061125e57508251600154145b6031612a32565b60008080556002805461127790613bdd565b80601f01602080910402602001604051908101604052809291908181526020018280546112a390613bdd565b80156112f05780601f106112c5576101008083540402835291602001916112f0565b820191906000526020600020905b8154815290600101906020018083116112d357829003601f168201915b50505050508060200190518101906113089190613cf9565b9050611312613481565b61132160001943106032612a32565b7fdeaa705abe1dc21ef36d9a05f3ddb8af96e27744aa5579dec36389567311d4b73385604051611352929190614025565b60405180910390a1600060208501515151600981111561137457611374613926565b141561165a5760208085015151015181526113913415600e612a32565b61010082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516113d39190600090612fcc565b81604001819052506113f56113ee3384602001516000613040565b600f612a32565b8151611432906001600160a01b031633146114285782604001516001600160a01b0316336001600160a01b03161461142b565b60015b6010612a32565b61147c6000600183515161144590611168565b51600181111561145757611457613926565b14611463576000611474565b82515161146f90611168565b604001515b116011612a32565b60e082015160408201515151600161149333611168565b5160018111156114a5576114a5613926565b146114b15760006114bf565b6114ba33611168565b604001515b6114c99190614176565b6114d39190614195565b606082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061151390612d55565b51600181111561152557611525613926565b14611531576000611542565b81515161153d90612d55565b604001515b61154c91906141b7565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527fc3180bbab2dabdc45c8ba789aa2a41727332aec33ef5868d18fb70797761010e910160405180910390a1600183526115af613707565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a086015183519015159083015260c08601519251019190915282015160e084015161162a91906141b7565b60208201805160a0019190915280514360c0909101526040830151905160e0015261165481613056565b50612a2c565b600160208501515151600981111561167457611674613926565b14156119c35760208401515160400151608082015261169534156012612a32565b61010082018051515160a08301805191909152815151602090810151825182015291515160409081015191519115159101528201516116e2906116db9033906000613040565b6013612a32565b8151608082015151611730916001600160a01b039182169116146117265782604001516001600160a01b03168260800151600001516001600160a01b031614611729565b60015b6014612a32565b6117466000826080015160400151116015612a32565b6080810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff000019169055865186015190941683526004855291819020805490931682179092559251908101519101519091906117c190612cc8565b5160018111156117d3576117d3613926565b146117df5760006117f5565b6117f0826080015160200151612cc8565b604001515b6117ff91906141b7565b6080820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff19168517905591519182015191015190919061185d90611168565b51600181111561186f5761186f613926565b1461187b576000611891565b61188c826080015160200151611168565b604001515b61189b91906141b7565b60808201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527f917cf497e92c6a619d893c309ea6453e517e4abb079765363e14268397dad82e910160405180910390a160016020840152611905613707565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845183015260a0870151845190151593019290925260c08601519251820192909252830151015160e084015161198191906141b7565b816020015160a001818152505043816020015160c00181815250506119b183610100015160008460a00151612fcc565b602082015160e0015261165481613056565b60026020850151515160098111156119dd576119dd613926565b1415611bac576020840151516060015160c08201526119fe34156016612a32565b61010082018051515160e0830180519190915281515160209081015182518201529151516040908101519151911515910152820151611a4b90611a449033906000613040565b6017612a32565b8151611a88906001600160a01b03163314611a7e5782604001516001600160a01b0316336001600160a01b031614611a81565b60015b6018612a32565b60c081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527f51d63f37403d597c51bc1ae604dc899a05c3818b31b6ffedcac723bdc03ba31a910160405180910390a160016040840152611b0e613707565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845190151593019290925260c08087015184519092019190915260e080870151845190930192909252915143920191909152610100840151908301516119b19190600090612fcc565b6003602085015151516009811115611bc657611bc6613926565b1415611f2357611bd834156019612a32565b610100828101805151519183018051929092528051516020908101518351909101528051516040908101518351901515910152519051611c1b9190600090612fcc565b816101200181905250611c3e611c373384602001516000613040565b601a612a32565b6000611c4933612bff565b516001811115611c5b57611c5b613926565b1415611c6e576000610140820152611c9a565b6001611c7933612bff565b516001811115611c8b57611c8b613926565b1415611c9a5760016101408201525b611caa816101400151601b612a32565b6001611cb533611168565b516001811115611cc757611cc7613926565b14611cd3576000611ce1565b611cdc33611168565b604001515b6101608201526101208101515151611d2790611cfe576000611d07565b60008360e00151115b611d12576000611d20565b8161016001518360e0015110155b601c612a32565b60e08201516101208201515151610160830151611d449190614176565b611d4e9190614195565b61018082018190526101208201515151611d6891906141cf565b6101a08201805191909152610120820180515160209081015183518201529051516040908101519251921515920191909152820151610180820151611daf9190339061311f565b336000818152600860205260409020805460ff1916600190811790915561018083015191611ddc90612ae5565b516001811115611dee57611dee613926565b14611dfa576000611e08565b611e0333612ae5565b604001515b611e1291906141b7565b3360009081526008602090815260408083206001908101949094556009825291829020805460ff19168417815560608601519084015590519182527f7ab5f944267a0e928f94eefb139febddba364dc80e426c71d929beb140829dc0910160405180910390a160016060840152611e87613707565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845190151593019290925260c08087015184519092019190915260e08601518351909201919091529051439101526101208201516101a08301516119b19190600090612fcc565b6004602085015151516009811115611f3d57611f3d613926565b14156120c75760208401515160a001516101c0820152611f5f3415601d612a32565b6101008201805151516101e0830180519190915281515160209081015182518201529151516040908101519151911515910152820151611fad90611fa69033906000613040565b601e612a32565b8151611fea906001600160a01b03163314611fe05782604001516001600160a01b0316336001600160a01b031614611fe3565b60015b601f612a32565b604051600181527fb86a5b88bacb822525bb24f3f5c8f300be8c0588d3e661c4927cecbcbd2b1ddf9060200160405180910390a16001608084015261202d613707565b825181516001600160a01b0391821690526020808501518351908316908201526101c084015151818401805191909316905260608086015183519092019190915260808086015183516040015260a080870151845190151593019290925260c08087015184519092019190915260e08601518351909201919091529051439101526101008301516101e08301516119b19190600090612fcc565b60056020850151515160098111156120e1576120e1613926565b141561236d576120f334156020612a32565b6101008201805151516102008301805191909152815151602090810151825182015291515160409081015191519115159101528201516121419061213a9033906000613040565b6021612a32565b600161214c33612cc8565b51600181111561215e5761215e613926565b1461216a576000612178565b61217333612cc8565b604001515b610220820152600061218933612bff565b51600181111561219b5761219b613926565b14156121ae5760006102408201526121da565b60016121b933612bff565b5160018111156121cb576121cb613926565b14156121da5760016102408201525b6121ea8161024001516022612a32565b6121fd6000826102200151116023612a32565b336000818152600660205260409020805460ff191660019081179091556102208301519161222a90612a58565b51600181111561223c5761223c613926565b14612248576000612256565b61225133612a58565b604001515b61226091906141b7565b33600090815260066020908152604080832060019081019490945560048252808320805460ff19168517815584019290925590519182527fab7a05491b49e4be413caa962d904311c4a5afb304b4eda2b9a05bddb26f58a1910160405180910390a1600160a08401526122d1613707565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845190151593019290925260c08087015184519092019190915260e08601518351909201919091529051439101526101008301516102008301516119b19190600090612fcc565b600660208501515151600981111561238757612387613926565b141561255f5760208401515160e001516102608201526123a934156024612a32565b6102608101515161010083015151516123c291906141b7565b6102808201805191909152610100830180515160209081015183518201529051516040908101519251921515920191909152820151610260820151516124159161240e91339190613040565b6025612a32565b8151612452906001600160a01b031633146124485782604001516001600160a01b0316336001600160a01b03161461244b565b60015b6026612a32565b610260810151516124669015156027612a32565b604051600181527f5fa09a6ad39d3af118c3693dd5fe1ab09303fba69f6df6f3dfeb9e86e2f386e49060200160405180910390a1600160c08401526124a9613707565b825181516001600160a01b0391821690526020808501518351908316908201526040850151908301519116905260608301516124e7906001906141b7565b6020808301805190910191909152608084015181516040015260a084015190519015156060909101526102608201515160c084015161252691906141b7565b6020820180516080019190915260e0840151815160a00152514360c0909101526101008301516102808301516119b19190600090612fcc565b600760208501515151600981111561257957612579613926565b14156127015760208401515161010001516102a082015261259c34156028612a32565b6101008201805151516102c08301805191909152815151602090810151825182015291515160409081015191519115159101528201516125ea906125e39033906000613040565b6029612a32565b8151612627906001600160a01b0316331461261d5782604001516001600160a01b0316336001600160a01b031614612620565b60015b602a612a32565b604051600181527f2475e22c7e4dcb56937f0429b560207978ac08e4c630fb385a34c67e066a22299060200160405180910390a1600160e084015261266a613707565b825181516001600160a01b03918216905260208085015183519083169082015260408086015182850180519190941690526060808701518451909301929092526102a08501515183519091015260a080860151835190151592019190915260c08086015183516080015260e08601518351909201919091529051439101526101008301516102c08301516119b19190600090612fcc565b600860208501515151600981111561271b5761271b613926565b141561285b5761272d3415602b612a32565b6101008201805151516102e083018051919091528151516020908101518251820152915151604090810151915191151591015282015161277b906127749033906000613040565b602c612a32565b604051600181527f3e87b75b1deb194fb5d8ebefa48cf961b276d595c7cb53b3abe504506c15fdc39060200160405180910390a160016101008401526127bf613707565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845190151593019290925260c08087015184519092019190915260e08601518351909201919091529051439101526101008301516102e08301516119b19190600090612fcc565b600960208501515151600981111561287557612875613926565b1415612a2c5760208401515161014001516103008201526128983415602d612a32565b6101008201805151516103208301805191909152815151602090810151825182015291515160409081015191519115159101528201516128e6906128df9033906000613040565b602e612a32565b8151612923906001600160a01b031633146129195782604001516001600160a01b0316336001600160a01b03161461291c565b60015b602f612a32565b610300810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527fac33458f96437d4e5daefb116e5d69e4e50a946838147225f6b105017c9919a5910160405180910390a16001610120840152612990613707565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519092019190915260a080870151845190151593019290925260c08087015184519092019190915260e08601518351909201919091529051439101526101008301516103208301516119b19190600090612fcc565b50505050565b81610c565760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612aa457612aa4613926565b141561122b576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156111f5576111f5613926565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff166001811115612b3157612b31613926565b141561122b576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156111f5576111f5613926565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff166001811115612bbe57612bbe613926565b141561122b576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff1660018111156111f5576111f5613926565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff166001811115612c4b57612c4b613926565b141561122b576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff166001811115612c8c57612c8c613926565b6001811115612c9d57612c9d613926565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115612d1457612d14613926565b141561122b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156111f5576111f5613926565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612da157612da1613926565b141561122b576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156111f5576111f5613926565b612df26003600054146035612a32565b8151612e0d901580612e0657508251600154145b6036612a32565b600080805560028054612e1f90613bdd565b80601f0160208091040260200160405190810160405280929190818152602001828054612e4b90613bdd565b8015612e985780601f10612e6d57610100808354040283529160200191612e98565b820191906000526020600020905b815481529060010190602001808311612e7b57829003601f168201915b5050505050806020019051810190612eb09190613cf9565b9050612ec26000194310156037612a32565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1612f1534156033612a32565b8051612f2d906001600160a01b031633146034612a32565b612f35613707565b815181516001600160a01b039182169052602080840151835190831690820152604080850151828501805191909416905260608086015184519093019290925260808086015184519092019190915260a080860151845190151593019290925260c08086015184519092019190915260e08086015184519093019290925282514391015261010084015191510152612a2c81613056565b612fd4613730565b60005b600181101561302057848160018110612ff257612ff261414a565b60200201518282600181106130095761300961414a565b602002015280613018816141e6565b915050612fd7565b50818184600181106130345761303461414a565b60200201529392505050565b600061304e83853085613133565b949350505050565b61305e61377b565b8151516001600160a01b039081168252825160209081015182168184015280840180515190921660408085019190915282518201516060808601919091528351820151608080870191909152845190910151151560a08087019190915284519091015160c08601528351015160e08086019190915292519092015161010084015260036000554360015590516130f69183910161423f565b6040516020818303038152906040526002908051906020019061311a9291906137df565b505050565b61312a83838361320d565b61311a57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161319a916142f9565b60006040518083038185875af1925050503d80600081146131d7576040519150601f19603f3d011682016040523d82523d6000602084013e6131dc565b606091505b50915091506131ed828260016132de565b50808060200190518101906132029190614315565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161326c916142f9565b60006040518083038185875af1925050503d80600081146132a9576040519150601f19603f3d011682016040523d82523d6000602084013e6132ae565b606091505b50915091506132bf828260026132de565b50808060200190518101906132d49190614315565b9695505050505050565b606083156132ed575081610684565b8251156132fd5782518084602001fd5b60405163100960cb60e01b815260048101839052602401612a4f565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b604051806040016040528060008152602001613387613863565b905290565b60408051610160810190915280600081526020016133b560408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526020016133ef60408051602081019091526000815290565b81526000602082015260400161341060408051602081019091526000815290565b81526020016000151581526020016134346040518060200160405280600081525090565b815260200161346060408051608081018252600060208201818152928201819052606082015290815290565b81526000602082015260400161338760408051602081019091526000815290565b60408051610360810182526000610340820181815282528251606081018452818152602080820183905281850192909252908201529081016134c1613730565b8152602001600081526020016134f0604080516060810182526000808252602082018190529181019190915290565b8152604080516060810182526000808252602082810182905292820152910190815260200161352a60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001613577613730565b815260200160001515815260200160008152602001600081526020016135b9604051806060016040528060008152602001600081526020016000151581525090565b81526020016135d360408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160001515815260200161363e6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161368a60408051608081018252600060208201818152928201819052606082015290815290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016136e460408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b604080516080810182526000918101828152606082019290925290815260208101613387613876565b60405180602001604052806001905b613765604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161373f5790505090565b6040805161012081018252600080825260208083018290528284018290526060808401839052845190810185528281529081018290529283015290608082019081526020016000151581526020016000815260200160008152602001613387613730565b8280546137eb90613bdd565b90600052602060002090601f01602090048101928261380d5760008555613853565b82601f1061382657805160ff1916838001178555613853565b82800160010185558215613853579182015b82811115613853578251825591602001919060010190613838565b5061385f9291506138dc565b5090565b604051806020016040528061338761338c565b6040805161010081018252600080825260208201529081016138b1604080516060810182526000808252602082018190529181019190915290565b8152602001600015158152602001600081526020016000815260200160008152602001613387613730565b5b8082111561385f57600081556001016138dd565b6001600160a01b038116811461390657600080fd5b50565b60006020828403121561391b57600080fd5b8135610684816138f1565b634e487b7160e01b600052602160045260246000fd5b6002811061390657613906613926565b8151606082019061395c8161393c565b808352506020830151151560208301526040830151604083015292915050565b60008060006060848603121561399157600080fd5b833561399c816138f1565b925060208401356139ac816138f1565b929592945050506040919091013590565b815160608201906139cd8161393c565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715613a2857613a286139ef565b60405290565b6040516020810167ffffffffffffffff81118282101715613a2857613a286139ef565b604051610120810167ffffffffffffffff81118282101715613a2857613a286139ef565b6040805190810167ffffffffffffffff81118282101715613a2857613a286139ef565b604051610160810167ffffffffffffffff81118282101715613a2857613a286139ef565b600060608284031215613ace57600080fd5b613ad6613a05565b905081358152602082013560208201526040820135604082015292915050565b600060608284031215613b0857600080fd5b6106848383613abc565b815181526020808301519082015260408083015190820152606081016104e8565b60006102008284031215613b4657600080fd5b50919050565b600060408284031215613b4657600080fd5b60005b83811015613b79578181015183820152602001613b61565b83811115612a2c5750506000910152565b8281526040602082015260008251806040840152613baf816060850160208701613b5e565b601f01601f1916919091016060019392505050565b600060208284031215613bd657600080fd5b5035919050565b600181811c90821680613bf157607f821691505b60208210811415613b4657634e487b7160e01b600052602260045260246000fd5b805161084b816138f1565b600060608284031215613c2f57600080fd5b613c37613a05565b905081518152602082015160208201526040820151604082015292915050565b801515811461390657600080fd5b805161084b81613c57565b600082601f830112613c8157600080fd5b613c89613a2e565b80606080850186811115613c9c57600080fd5b855b81811015613ced57828189031215613cb65760008081fd5b613cbe613a05565b8151815260208083015181830152604080840151613cdb81613c57565b90830152908652909401938201613c9e565b50919695505050505050565b60006101a08284031215613d0c57600080fd5b613d14613a51565b613d1d83613c12565b8152613d2b60208401613c12565b6020820152613d3c60408401613c12565b604082015260608301516060820152613d588460808501613c1d565b6080820152613d6960e08401613c65565b60a08201526101008084015160c083015261012084015160e0830152613d93856101408601613c70565b908201529392505050565b8035600a811061084b57600080fd5b600060208284031215613dbf57600080fd5b613dc7613a2e565b90508135613dd4816138f1565b815292915050565b600060608284031215613dee57600080fd5b613df6613a05565b90508135613e03816138f1565b81526020820135613e13816138f1565b806020830152506040820135604082015292915050565b803561084b81613c57565b600060208284031215613e4757600080fd5b613e4f613a2e565b9135825250919050565b600060608284031215613e6b57600080fd5b613e73613a2e565b9050613dd48383613abc565b6000818303610200811215613e9357600080fd5b613e9b613a75565b833581526101e080601f1984011215613eb357600080fd5b613ebb613a2e565b9250613ec5613a98565b613ed160208701613d9e565b8152613ee08760408801613dad565b6020820152613ef28760608801613ddc565b6040820152613f048760c08801613dad565b6060820152613f1560e08701613e2a565b6080820152610100613f2988828901613dad565b60a0830152610120613f3c818901613e2a565b60c0840152610140613f508a828b01613e35565b60e0850152613f638a6101608b01613e59565b83850152613f746101c08a01613e2a565b82850152613f848a868b01613dad565b90840152505083525060208101919091529392505050565b600060408284031215613fae57600080fd5b6040516040810181811067ffffffffffffffff82111715613fd157613fd16139ef565b604052823581526020830135613fe681613c57565b60208201529392505050565b600a811061400257614002613926565b9052565b610c568282518051825260208082015190830152604090810151910152565b60006102208201905060018060a01b038416825282516020830152602083015151614054604084018251613ff2565b602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e08501525060808101516101006140c28186018315159052565b60a083015191506101206140e181870184516001600160a01b03169052565b60c084015192506101406140f88188018515159052565b60e085015151610160880152828501519350614118610180880185614006565b9084015115156101e08701529092015180516001600160a01b031661020086015291506141429050565b509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561419057614190614160565b500290565b6000826141b257634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156141ca576141ca614160565b500190565b6000828210156141e1576141e1614160565b500390565b60006000198214156141fa576141fa614160565b5060010190565b8060005b6001811015612a2c578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614205565b81516001600160a01b031681526020808301516101a083019161426c908401826001600160a01b03169052565b50604083015161428760408401826001600160a01b03169052565b506060830151606083015260808301516142b860808401828051825260208082015190830152604090810151910152565b5060a083015180151560e08401525060c08301516101008381019190915260e08401516101208401528301516142f2610140840182614201565b5092915050565b6000825161430b818460208701613b5e565b9190910192915050565b60006020828403121561432757600080fd5b815161068481613c5756fea2646970667358221220ec54bd14e8163564dce2892d2d70b35631b9e66cfa10c6bc7a68e01c3ad8689864736f6c634300080c0033`,
  BytecodeLen: 19712,
  Which: `oD`,
  version: 7,
  views: {
    claimSTBT: `claimSTBT`,
    saleLocked: `saleLocked`,
    totSTBTD: `totSTBTD`,
    totSTBTDRec: `totSTBTDRec`,
    vHash: `vHash`,
    wlMember: `wlMember`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:325:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:106:81:after expr stmt semicolon',
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
