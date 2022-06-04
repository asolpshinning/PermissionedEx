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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
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
            const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = svs;
            return (await ((async (_v1216 ) => {
                const v1216 = stdlib.protect(ctc0, _v1216, null);
              
              const v1217 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1216), null);
              const v1218 = stdlib.fromSome(v1217, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1219 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1216), null);
              const v1220 = stdlib.fromSome(v1219, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1221 = [v1218, v1220];
              
              return v1221;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = svs;
            return (await ((async () => {
              
              
              return v1206;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = svs;
            return (await ((async () => {
              
              const v1215 = [v1208, v1207, v1205];
              
              return v1215;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = svs;
            return (await ((async (_v1223 ) => {
                const v1223 = stdlib.protect(ctc0, _v1223, null);
              
              const v1224 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1223), null);
              const v1225 = stdlib.fromSome(v1224, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1226 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1223), null);
              const v1227 = stdlib.fromSome(v1226, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1228 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1223), null);
              const v1229 = stdlib.fromSome(v1228, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1230 = [v1225, v1227, v1229];
              
              return v1230;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = svs;
            return (await ((async (_v1232 ) => {
                const v1232 = stdlib.protect(ctc0, _v1232, null);
              
              const v1233 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1232), null);
              let v1234;
              switch (v1233[0]) {
                case 'None': {
                  const v1235 = v1233[1];
                  v1234 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1236 = v1233[1];
                  v1234 = true;
                  
                  break;
                  }
                }
              
              return v1234;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc2, ctc2, ctc5]
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
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc9,
    aST0_169: ctc10,
    addWL0_169: ctc9,
    cBT0_169: ctc11,
    cCM0_169: ctc9,
    cST0_169: ctc11,
    dBT0_169: ctc12,
    optIn0_169: ctc11,
    remWL0_169: ctc9
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v1169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1170 = [v1169];
  const v1176 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:78:103:application',
    fs: ['at ./index.rsh:77:17:application call to [unknown function] (defined at: ./index.rsh:77:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1177 = v1176.authorizedST;
  const v1178 = v1176.bT;
  const v1179 = v1176.companyName;
  const v1180 = v1176.lockSale;
  const v1181 = v1176.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1179, v1180, v1181, v1178, v1177],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc7, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1188, v1189, v1190, v1191, v1192], secs: v1194, time: v1193, didSend: v41, from: v1187 } = txn1;
      
      const v1195 = v1170[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0')];
      const v1197 = v1195[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '1')];
      const v1198 = v1195[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '2')];
      const v1199 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1197, v1198];
      const v1200 = stdlib.Array_set(v1170, stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0'), v1199);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1191
        });
      ;
      
      const v1204 = v1190;
      const v1205 = stdlib.checkedBigNumberify('./index.rsh:102:103:decimal', stdlib.UInt_max, '0');
      const v1206 = v1189;
      const v1207 = stdlib.checkedBigNumberify('./index.rsh:102:77:decimal', stdlib.UInt_max, '0');
      const v1208 = stdlib.checkedBigNumberify('./index.rsh:102:74:decimal', stdlib.UInt_max, '0');
      const v1209 = v1193;
      const v1211 = v1200;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1191
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
  const {data: [v1188, v1189, v1190, v1191, v1192], secs: v1194, time: v1193, didSend: v41, from: v1187 } = txn1;
  const v1195 = v1170[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0')];
  const v1197 = v1195[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '1')];
  const v1198 = v1195[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '2')];
  const v1199 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1197, v1198];
  const v1200 = stdlib.Array_set(v1170, stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0'), v1199);
  ;
  ;
  const v1203 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1203), {
    at: './index.rsh:84:31:application',
    fs: ['at ./index.rsh:84:31:application call to [unknown function] (defined at: ./index.rsh:84:31:function exp)', 'at ./index.rsh:84:31:application call to "liftedInteract" (defined at: ./index.rsh:84:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v1204 = v1190;
  let v1205 = stdlib.checkedBigNumberify('./index.rsh:102:103:decimal', stdlib.UInt_max, '0');
  let v1206 = v1189;
  let v1207 = stdlib.checkedBigNumberify('./index.rsh:102:77:decimal', stdlib.UInt_max, '0');
  let v1208 = stdlib.checkedBigNumberify('./index.rsh:102:74:decimal', stdlib.UInt_max, '0');
  let v1209 = v1193;
  let v1211 = v1200;
  
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
        args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1209,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:298:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v3915, time: v3914, didSend: v950, from: v3913 } = txn3;
          
          ;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v3914;
          const cv1211 = v1211;
          
          await (async () => {
            const v1204 = cv1204;
            const v1205 = cv1205;
            const v1206 = cv1206;
            const v1207 = cv1207;
            const v1208 = cv1208;
            const v1209 = cv1209;
            const v1211 = cv1211;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1191
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
        tys: [ctc7, ctc4, ctc7, ctc1, ctc6, ctc1, ctc1, ctc15],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v3915, time: v3914, didSend: v950, from: v3913 } = txn3;
      ;
      const v3916 = stdlib.addressEq(v1187, v3913);
      stdlib.assert(v3916, {
        at: './index.rsh:298:21:dot',
        fs: ['at ./index.rsh:297:40:application call to [unknown function] (defined at: ./index.rsh:297:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1204 = v1204;
      const cv1205 = v1205;
      const cv1206 = v1206;
      const cv1207 = v1207;
      const cv1208 = v1208;
      const cv1209 = v3914;
      const cv1211 = v1211;
      
      v1204 = cv1204;
      v1205 = cv1205;
      v1206 = cv1206;
      v1207 = cv1207;
      v1208 = cv1208;
      v1209 = cv1209;
      v1211 = cv1211;
      
      continue;
      }
    else {
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn2;
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v1567 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1568 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1572 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1573 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1574 = [v1568, v1572, v1573];
          const v1575 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1574);
          ;
          const v1577 = v1483[stdlib.checkedBigNumberify('./index.rsh:257:13:spread', stdlib.UInt_max, '0')];
          const v1578 = stdlib.addressEq(v1479, v1187);
          const v1579 = stdlib.addressEq(v1479, v1204);
          const v1580 = v1578 ? true : v1579;
          stdlib.assert(v1580, {
            at: './index.rsh:269:24:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1206, {
            at: './index.rsh:270:24:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1577), null);
          const v1582 = stdlib.fromSome(v1581, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1583 = stdlib.gt(v1582, stdlib.checkedBigNumberify('./index.rsh:271:71:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1583, {
            at: './index.rsh:271:24:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1584 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1479), null);
          const v1585 = stdlib.fromSome(v1584, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1586 = v1575[stdlib.checkedBigNumberify('./index.rsh:272:61:application', stdlib.UInt_max, '0')];
          const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:272:61:application', stdlib.UInt_max, '0')];
          const v1588 = stdlib.mul(v1585, v1587);
          const v1589 = stdlib.div(v1588, v1208);
          const v1590 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
          const v1591 = stdlib.fromSome(v1590, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1592 = stdlib.add(v1591, v1589);
          await stdlib.mapSet(map1, v1577, v1592);
          const v1593 = true;
          await txn2.getOutput('aBT', 'v1593', ctc6, v1593);
          const v1600 = stdlib.add(v1208, v1589);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = true;
          const cv1207 = v1207;
          const cv1208 = v1600;
          const cv1209 = v1481;
          const cv1211 = v1575;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v1837 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1838 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1842 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1843 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1844 = [v1838, v1842, v1843];
          const v1845 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1844);
          ;
          const v1873 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '0')];
          const v1874 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '1')];
          const v1875 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '2')];
          const v1876 = stdlib.addressEq(v1873, v1187);
          const v1877 = stdlib.addressEq(v1873, v1204);
          const v1878 = v1876 ? true : v1877;
          stdlib.assert(v1878, {
            at: './index.rsh:162:24:application',
            fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1879 = stdlib.gt(v1875, stdlib.checkedBigNumberify('./index.rsh:163:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1879, {
            at: './index.rsh:163:24:application',
            fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v1874, null);
          const v1881 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1874), null);
          const v1882 = stdlib.fromSome(v1881, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1883 = stdlib.add(v1882, v1875);
          await stdlib.mapSet(map0, v1874, v1883);
          const v1884 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1874), null);
          const v1885 = stdlib.fromSome(v1884, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1886 = stdlib.add(v1885, v1875);
          await stdlib.mapSet(map3, v1874, v1886);
          const v1887 = true;
          await txn2.getOutput('aST', 'v1887', ctc6, v1887);
          const v1896 = stdlib.add(v1208, v1875);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1896;
          const cv1209 = v1481;
          const cv1211 = v1845;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v2107 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2108 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2112 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2113 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2114 = [v2108, v2112, v2113];
          const v2115 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2114);
          ;
          const v2169 = v2023[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v2170 = stdlib.addressEq(v1479, v1187);
          const v2171 = stdlib.addressEq(v1479, v1204);
          const v2172 = v2170 ? true : v2171;
          stdlib.assert(v2172, {
            at: './index.rsh:124:24:application',
            fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2169, null);
          const v2174 = true;
          await txn2.getOutput('addWL', 'v2174', ctc6, v2174);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v2115;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v2377 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2378 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2382 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2383 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2384 = [v2378, v2382, v2383];
          const v2385 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2384);
          ;
          const v2453 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1479), null);
          let v2454;
          switch (v2453[0]) {
            case 'None': {
              const v2455 = v2453[1];
              v2454 = false;
              
              break;
              }
            case 'Some': {
              const v2456 = v2453[1];
              v2454 = true;
              
              break;
              }
            }
          stdlib.assert(v2454, {
            at: './index.rsh:244:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2457 = v2385[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2458 = v2457[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2459 = stdlib.gt(v2458, stdlib.checkedBigNumberify('./index.rsh:245:39:decimal', stdlib.UInt_max, '0'));
          const v2460 = stdlib.gt(v1208, stdlib.checkedBigNumberify('./index.rsh:245:52:decimal', stdlib.UInt_max, '0'));
          const v2461 = v2459 ? v2460 : false;
          const v2462 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1479), null);
          const v2463 = stdlib.fromSome(v2462, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2464 = stdlib.ge(v1208, v2463);
          const v2465 = v2461 ? v2464 : false;
          stdlib.assert(v2465, {
            at: './index.rsh:245:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2470 = stdlib.mul(v2463, v2458);
          const v2471 = stdlib.div(v2470, v1208);
          const v2477 = stdlib.sub(v2458, v2471);
          const v2480 = v2457[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '1')];
          const v2481 = v2457[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '2')];
          const v2482 = [v2477, v2480, v2481];
          const v2483 = stdlib.Array_set(v2385, stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '0'), v2482);
          ;
          const v2484 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1479), null);
          const v2485 = stdlib.fromSome(v2484, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2486 = stdlib.add(v2485, v2471);
          await stdlib.mapSet(map4, v1479, v2486);
          await stdlib.mapSet(map5, v1479, v1205);
          const v2487 = true;
          await txn2.getOutput('cBT', 'v2487', ctc6, v2487);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v2483;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v2647 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2648 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2652 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2653 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2654 = [v2648, v2652, v2653];
          const v2655 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2654);
          ;
          const v2765 = v2563[stdlib.checkedBigNumberify('./index.rsh:280:13:spread', stdlib.UInt_max, '0')];
          const v2766 = stdlib.addressEq(v1479, v1187);
          const v2767 = stdlib.addressEq(v1479, v1204);
          const v2768 = v2766 ? true : v2767;
          stdlib.assert(v2768, {
            at: './index.rsh:291:24:application',
            fs: ['at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2769 = true;
          await txn2.getOutput('cCM', 'v2769', ctc6, v2769);
          const cv1204 = v2765;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v2655;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v2917 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2918 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2922 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2923 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2924 = [v2918, v2922, v2923];
          const v2925 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2924);
          ;
          const v3048 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1479), null);
          const v3049 = stdlib.fromSome(v3048, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v3050 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1479), null);
          let v3051;
          switch (v3050[0]) {
            case 'None': {
              const v3052 = v3050[1];
              v3051 = false;
              
              break;
              }
            case 'Some': {
              const v3053 = v3050[1];
              v3051 = true;
              
              break;
              }
            }
          stdlib.assert(v3051, {
            at: './index.rsh:188:24:application',
            fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3054 = stdlib.gt(v3049, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3054, {
            at: './index.rsh:189:24:application',
            fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3055 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1479), null);
          const v3056 = stdlib.fromSome(v3055, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v3057 = stdlib.add(v3056, v3049);
          await stdlib.mapSet(map2, v1479, v3057);
          await stdlib.mapSet(map0, v1479, stdlib.checkedBigNumberify('./index.rsh:193:33:decimal', stdlib.UInt_max, '0'));
          const v3058 = true;
          await txn2.getOutput('cST', 'v3058', ctc6, v3058);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v2925;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          undefined /* setApiDetails */;
          const v3156 = v3103[stdlib.checkedBigNumberify('./index.rsh:213:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3187 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3188 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3189 = stdlib.add(v3188, v3156);
          const v3192 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3193 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3194 = [v3189, v3192, v3193];
          const v3195 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3194);
          ;
          const v3337 = stdlib.addressEq(v1479, v1187);
          const v3338 = stdlib.addressEq(v1479, v1204);
          const v3339 = v3337 ? true : v3338;
          stdlib.assert(v3339, {
            at: './index.rsh:225:24:application',
            fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3340 = stdlib.gt(v3156, stdlib.checkedBigNumberify('./index.rsh:226:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3340, {
            at: './index.rsh:226:24:application',
            fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          stdlib.assert(v1206, {
            at: './index.rsh:227:24:application',
            fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3341 = true;
          await txn2.getOutput('dBT', 'v3341', ctc6, v3341);
          const v3348 = stdlib.add(v1207, v3156);
          const v3349 = stdlib.add(v1205, stdlib.checkedBigNumberify('./index.rsh:229:76:decimal', stdlib.UInt_max, '1'));
          const cv1204 = v1204;
          const cv1205 = v3349;
          const cv1206 = true;
          const cv1207 = v3348;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v3195;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v3457 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3462 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3463 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3464 = [v3458, v3462, v3463];
          const v3465 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3464);
          ;
          const v3622 = true;
          await txn2.getOutput('optIn', 'v3622', ctc6, v3622);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v3465;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
          continue;
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          undefined /* setApiDetails */;
          ;
          const v3727 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3728 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3732 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3733 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3734 = [v3728, v3732, v3733];
          const v3735 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3734);
          ;
          const v3900 = v3643[stdlib.checkedBigNumberify('./index.rsh:131:13:spread', stdlib.UInt_max, '0')];
          const v3901 = stdlib.addressEq(v1479, v1187);
          const v3902 = stdlib.addressEq(v1479, v1204);
          const v3903 = v3901 ? true : v3902;
          stdlib.assert(v3903, {
            at: './index.rsh:142:24:application',
            fs: ['at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v3900, undefined /* Nothing */);
          const v3905 = true;
          await txn2.getOutput('remWL', 'v3905', ctc6, v3905);
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1207;
          const cv1208 = v1208;
          const cv1209 = v1481;
          const cv1211 = v3735;
          
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1208 = cv1208;
          v1209 = cv1209;
          v1211 = cv1211;
          
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc9,
    aST0_169: ctc10,
    addWL0_169: ctc9,
    cBT0_169: ctc11,
    cCM0_169: ctc9,
    cST0_169: ctc11,
    dBT0_169: ctc12,
    optIn0_169: ctc11,
    remWL0_169: ctc9
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1349 = ctc.selfAddress();
  const v1351 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:102:72:application call to "runaBT0_169" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1352 = v1351[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1355 = stdlib.addressEq(v1349, v1187);
  const v1356 = stdlib.addressEq(v1349, v1204);
  const v1357 = v1355 ? true : v1356;
  stdlib.assert(v1357, {
    at: './index.rsh:261:23:application',
    fs: ['at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:18:function exp)', 'at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:102:72:application call to "runaBT0_169" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1358 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1352), null);
  const v1359 = stdlib.fromSome(v1358, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
  const v1360 = stdlib.gt(v1359, stdlib.checkedBigNumberify('./index.rsh:263:60:decimal', stdlib.UInt_max, '0'));
  const v1361 = v1206 ? v1360 : false;
  stdlib.assert(v1361, {
    at: './index.rsh:263:23:application',
    fs: ['at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:18:function exp)', 'at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:102:72:application call to "runaBT0_169" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1365 = ['aBT0_169', v1351];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1365],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:266:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:266:26:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1567 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1568 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1572 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1573 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1574 = [v1568, v1572, v1573];
          const v1575 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1574);
          ;
          const v1577 = v1483[stdlib.checkedBigNumberify('./index.rsh:257:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1577), null);
          const v1584 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1479), null);
          const v1585 = stdlib.fromSome(v1584, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1586 = v1575[stdlib.checkedBigNumberify('./index.rsh:272:61:application', stdlib.UInt_max, '0')];
          const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:272:61:application', stdlib.UInt_max, '0')];
          const v1588 = stdlib.mul(v1585, v1587);
          const v1589 = stdlib.div(v1588, v1208);
          const v1590 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1577), null);
          const v1591 = stdlib.fromSome(v1590, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1592 = stdlib.add(v1591, v1589);
          await stdlib.simMapSet(sim_r, 1, v1577, v1592);
          const v1593 = true;
          const v1594 = await txn1.getOutput('aBT', 'v1593', ctc6, v1593);
          
          const v1600 = stdlib.add(v1208, v1589);
          const v6335 = v1204;
          const v6336 = v1205;
          const v6337 = true;
          const v6338 = v1207;
          const v6339 = v1600;
          const v6341 = v1575;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v1567 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1568 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1572 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v1573 = v1567[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v1574 = [v1568, v1572, v1573];
      const v1575 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1574);
      ;
      const v1577 = v1483[stdlib.checkedBigNumberify('./index.rsh:257:13:spread', stdlib.UInt_max, '0')];
      const v1578 = stdlib.addressEq(v1479, v1187);
      const v1579 = stdlib.addressEq(v1479, v1204);
      const v1580 = v1578 ? true : v1579;
      stdlib.assert(v1580, {
        at: './index.rsh:269:24:application',
        fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      stdlib.assert(v1206, {
        at: './index.rsh:270:24:application',
        fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1577), null);
      const v1582 = stdlib.fromSome(v1581, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1583 = stdlib.gt(v1582, stdlib.checkedBigNumberify('./index.rsh:271:71:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1583, {
        at: './index.rsh:271:24:application',
        fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1584 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1479), null);
      const v1585 = stdlib.fromSome(v1584, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1586 = v1575[stdlib.checkedBigNumberify('./index.rsh:272:61:application', stdlib.UInt_max, '0')];
      const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:272:61:application', stdlib.UInt_max, '0')];
      const v1588 = stdlib.mul(v1585, v1587);
      const v1589 = stdlib.div(v1588, v1208);
      const v1590 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
      const v1591 = stdlib.fromSome(v1590, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1592 = stdlib.add(v1591, v1589);
      await stdlib.mapSet(map1, v1577, v1592);
      const v1593 = true;
      const v1594 = await txn1.getOutput('aBT', 'v1593', ctc6, v1593);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v1483, v1594), {
          at: './index.rsh:258:13:application',
          fs: ['at ./index.rsh:258:13:application call to [unknown function] (defined at: ./index.rsh:258:13:function exp)', 'at ./index.rsh:276:20:application call to "res" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v1600 = stdlib.add(v1208, v1589);
      const v6335 = v1204;
      const v6336 = v1205;
      const v6337 = true;
      const v6338 = v1207;
      const v6339 = v1600;
      const v6341 = v1575;
      return;
      
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc10,
    aST0_169: ctc9,
    addWL0_169: ctc10,
    cBT0_169: ctc11,
    cCM0_169: ctc10,
    cST0_169: ctc11,
    dBT0_169: ctc12,
    optIn0_169: ctc11,
    remWL0_169: ctc10
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1271 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:102:72:application call to "runaST0_169" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1272 = v1271[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1274 = v1271[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1279 = stdlib.addressEq(v1272, v1187);
  const v1280 = stdlib.addressEq(v1272, v1204);
  const v1281 = v1279 ? true : v1280;
  stdlib.assert(v1281, {
    at: './index.rsh:154:23:application',
    fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:29:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:102:72:application call to "runaST0_169" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1282 = stdlib.gt(v1274, stdlib.checkedBigNumberify('./index.rsh:155:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1282, {
    at: './index.rsh:155:23:application',
    fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:29:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:102:72:application call to "runaST0_169" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1288 = ['aST0_169', v1271];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1288],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:159:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:159:34:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v1837 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1838 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1842 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1843 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1844 = [v1838, v1842, v1843];
          const v1845 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1844);
          ;
          const v1874 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '1')];
          const v1875 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v1874, null);
          const v1881 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1874), null);
          const v1882 = stdlib.fromSome(v1881, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1883 = stdlib.add(v1882, v1875);
          await stdlib.simMapSet(sim_r, 0, v1874, v1883);
          const v1884 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1874), null);
          const v1885 = stdlib.fromSome(v1884, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1886 = stdlib.add(v1885, v1875);
          await stdlib.simMapSet(sim_r, 3, v1874, v1886);
          const v1887 = true;
          const v1888 = await txn1.getOutput('aST', 'v1887', ctc6, v1887);
          
          const v1896 = stdlib.add(v1208, v1875);
          const v6405 = v1204;
          const v6406 = v1205;
          const v6407 = v1206;
          const v6408 = v1207;
          const v6409 = v1896;
          const v6411 = v1845;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v1837 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1838 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1842 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v1843 = v1837[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v1844 = [v1838, v1842, v1843];
      const v1845 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1844);
      ;
      const v1873 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '0')];
      const v1874 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '1')];
      const v1875 = v1753[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '2')];
      const v1876 = stdlib.addressEq(v1873, v1187);
      const v1877 = stdlib.addressEq(v1873, v1204);
      const v1878 = v1876 ? true : v1877;
      stdlib.assert(v1878, {
        at: './index.rsh:162:24:application',
        fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v1879 = stdlib.gt(v1875, stdlib.checkedBigNumberify('./index.rsh:163:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1879, {
        at: './index.rsh:163:24:application',
        fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v1874, null);
      const v1881 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1874), null);
      const v1882 = stdlib.fromSome(v1881, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1883 = stdlib.add(v1882, v1875);
      await stdlib.mapSet(map0, v1874, v1883);
      const v1884 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1874), null);
      const v1885 = stdlib.fromSome(v1884, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1886 = stdlib.add(v1885, v1875);
      await stdlib.mapSet(map3, v1874, v1886);
      const v1887 = true;
      const v1888 = await txn1.getOutput('aST', 'v1887', ctc6, v1887);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v1753, v1888), {
          at: './index.rsh:151:13:application',
          fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:170:20:application call to "res" (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v1896 = stdlib.add(v1208, v1875);
      const v6405 = v1204;
      const v6406 = v1205;
      const v6407 = v1206;
      const v6408 = v1207;
      const v6409 = v1896;
      const v6411 = v1845;
      return;
      
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc9,
    aST0_169: ctc10,
    addWL0_169: ctc9,
    cBT0_169: ctc11,
    cCM0_169: ctc9,
    cST0_169: ctc11,
    dBT0_169: ctc12,
    optIn0_169: ctc11,
    remWL0_169: ctc9
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1241 = ctc.selfAddress();
  const v1243 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:102:72:application call to "runaddWL0_169" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1247 = stdlib.addressEq(v1241, v1187);
  const v1248 = stdlib.addressEq(v1241, v1204);
  const v1249 = v1247 ? true : v1248;
  stdlib.assert(v1249, {
    at: './index.rsh:117:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:18:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:102:72:application call to "runaddWL0_169" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1253 = ['addWL0_169', v1243];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1253],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:121:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:121:26:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2107 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2108 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2112 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2113 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2114 = [v2108, v2112, v2113];
          const v2115 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2114);
          ;
          const v2169 = v2023[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2169, null);
          const v2174 = true;
          const v2175 = await txn1.getOutput('addWL', 'v2174', ctc6, v2174);
          
          const v6475 = v1204;
          const v6476 = v1205;
          const v6477 = v1206;
          const v6478 = v1207;
          const v6479 = v1208;
          const v6481 = v2115;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v2107 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2108 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2112 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2113 = v2107[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2114 = [v2108, v2112, v2113];
      const v2115 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2114);
      ;
      const v2169 = v2023[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
      const v2170 = stdlib.addressEq(v1479, v1187);
      const v2171 = stdlib.addressEq(v1479, v1204);
      const v2172 = v2170 ? true : v2171;
      stdlib.assert(v2172, {
        at: './index.rsh:124:24:application',
        fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2169, null);
      const v2174 = true;
      const v2175 = await txn1.getOutput('addWL', 'v2174', ctc6, v2174);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v2023, v2175), {
          at: './index.rsh:114:13:application',
          fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:127:20:application call to "res" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v6475 = v1204;
      const v6476 = v1205;
      const v6477 = v1206;
      const v6478 = v1207;
      const v6479 = v1208;
      const v6481 = v2115;
      return;
      
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc10,
    aST0_169: ctc11,
    addWL0_169: ctc10,
    cBT0_169: ctc9,
    cCM0_169: ctc10,
    cST0_169: ctc9,
    dBT0_169: ctc12,
    optIn0_169: ctc9,
    remWL0_169: ctc10
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1328 = ctc.selfAddress();
  const v1330 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:102:72:application call to "runcBT0_169" (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1332 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1328), null);
  let v1333;
  switch (v1332[0]) {
    case 'None': {
      const v1334 = v1332[1];
      v1333 = false;
      
      break;
      }
    case 'Some': {
      const v1335 = v1332[1];
      v1333 = true;
      
      break;
      }
    }
  stdlib.assert(v1333, {
    at: './index.rsh:237:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:102:72:application call to "runcBT0_169" (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1336 = v1211[stdlib.checkedBigNumberify('./index.rsh:238:31:application', stdlib.UInt_max, '0')];
  const v1337 = v1336[stdlib.checkedBigNumberify('./index.rsh:238:31:application', stdlib.UInt_max, '0')];
  const v1338 = stdlib.gt(v1337, stdlib.checkedBigNumberify('./index.rsh:238:38:decimal', stdlib.UInt_max, '0'));
  const v1339 = stdlib.gt(v1208, stdlib.checkedBigNumberify('./index.rsh:238:51:decimal', stdlib.UInt_max, '0'));
  const v1340 = v1338 ? v1339 : false;
  const v1341 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1328), null);
  const v1342 = stdlib.fromSome(v1341, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
  const v1343 = stdlib.ge(v1208, v1342);
  const v1344 = v1340 ? v1343 : false;
  stdlib.assert(v1344, {
    at: './index.rsh:238:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:102:72:application call to "runcBT0_169" (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1347 = ['cBT0_169', v1330];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1347],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:241:25:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2377 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2378 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2382 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2383 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2384 = [v2378, v2382, v2383];
          const v2385 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2384);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1479), null);
          const v2457 = v2385[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2458 = v2457[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2462 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1479), null);
          const v2463 = stdlib.fromSome(v2462, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2470 = stdlib.mul(v2463, v2458);
          const v2471 = stdlib.div(v2470, v1208);
          const v2477 = stdlib.sub(v2458, v2471);
          const v2480 = v2457[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '1')];
          const v2481 = v2457[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '2')];
          const v2482 = [v2477, v2480, v2481];
          const v2483 = stdlib.Array_set(v2385, stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '0'), v2482);
          sim_r.txns.push({
            amt: v2471,
            kind: 'from',
            to: v1479,
            tok: v1191
            });
          const v2484 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1479), null);
          const v2485 = stdlib.fromSome(v2484, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2486 = stdlib.add(v2485, v2471);
          await stdlib.simMapSet(sim_r, 4, v1479, v2486);
          await stdlib.simMapSet(sim_r, 5, v1479, v1205);
          const v2487 = true;
          const v2488 = await txn1.getOutput('cBT', 'v2487', ctc6, v2487);
          
          const v6545 = v1204;
          const v6546 = v1205;
          const v6547 = v1206;
          const v6548 = v1207;
          const v6549 = v1208;
          const v6551 = v2483;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v2377 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2378 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2382 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2383 = v2377[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2384 = [v2378, v2382, v2383];
      const v2385 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2384);
      ;
      const v2453 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1479), null);
      let v2454;
      switch (v2453[0]) {
        case 'None': {
          const v2455 = v2453[1];
          v2454 = false;
          
          break;
          }
        case 'Some': {
          const v2456 = v2453[1];
          v2454 = true;
          
          break;
          }
        }
      stdlib.assert(v2454, {
        at: './index.rsh:244:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2457 = v2385[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
      const v2458 = v2457[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
      const v2459 = stdlib.gt(v2458, stdlib.checkedBigNumberify('./index.rsh:245:39:decimal', stdlib.UInt_max, '0'));
      const v2460 = stdlib.gt(v1208, stdlib.checkedBigNumberify('./index.rsh:245:52:decimal', stdlib.UInt_max, '0'));
      const v2461 = v2459 ? v2460 : false;
      const v2462 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1479), null);
      const v2463 = stdlib.fromSome(v2462, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v2464 = stdlib.ge(v1208, v2463);
      const v2465 = v2461 ? v2464 : false;
      stdlib.assert(v2465, {
        at: './index.rsh:245:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2470 = stdlib.mul(v2463, v2458);
      const v2471 = stdlib.div(v2470, v1208);
      const v2477 = stdlib.sub(v2458, v2471);
      const v2480 = v2457[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '1')];
      const v2481 = v2457[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '2')];
      const v2482 = [v2477, v2480, v2481];
      const v2483 = stdlib.Array_set(v2385, stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '0'), v2482);
      ;
      const v2484 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1479), null);
      const v2485 = stdlib.fromSome(v2484, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v2486 = stdlib.add(v2485, v2471);
      await stdlib.mapSet(map4, v1479, v2486);
      await stdlib.mapSet(map5, v1479, v1205);
      const v2487 = true;
      const v2488 = await txn1.getOutput('cBT', 'v2487', ctc6, v2487);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v2293, v2488), {
          at: './index.rsh:233:13:application',
          fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:252:20:application call to "res" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v6545 = v1204;
      const v6546 = v1205;
      const v6547 = v1206;
      const v6548 = v1207;
      const v6549 = v1208;
      const v6551 = v2483;
      return;
      
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc9,
    aST0_169: ctc10,
    addWL0_169: ctc9,
    cBT0_169: ctc11,
    cCM0_169: ctc9,
    cST0_169: ctc11,
    dBT0_169: ctc12,
    optIn0_169: ctc11,
    remWL0_169: ctc9
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1367 = ctc.selfAddress();
  const v1369 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)', 'at ./index.rsh:102:72:application call to "runcCM0_169" (defined at: ./index.rsh:280:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1373 = stdlib.addressEq(v1367, v1187);
  const v1374 = stdlib.addressEq(v1367, v1204);
  const v1375 = v1373 ? true : v1374;
  stdlib.assert(v1375, {
    at: './index.rsh:284:23:application',
    fs: ['at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:21:function exp)', 'at ./index.rsh:283:13:application call to [unknown function] (defined at: ./index.rsh:283:13:function exp)', 'at ./index.rsh:102:72:application call to "runcCM0_169" (defined at: ./index.rsh:280:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1379 = ['cCM0_169', v1369];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1379],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:288:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:288:26:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v2647 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2648 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2652 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2653 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2654 = [v2648, v2652, v2653];
          const v2655 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2654);
          ;
          const v2765 = v2563[stdlib.checkedBigNumberify('./index.rsh:280:13:spread', stdlib.UInt_max, '0')];
          const v2769 = true;
          const v2770 = await txn1.getOutput('cCM', 'v2769', ctc6, v2769);
          
          const v6615 = v2765;
          const v6616 = v1205;
          const v6617 = v1206;
          const v6618 = v1207;
          const v6619 = v1208;
          const v6621 = v2655;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v2647 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2648 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2652 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2653 = v2647[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2654 = [v2648, v2652, v2653];
      const v2655 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2654);
      ;
      const v2765 = v2563[stdlib.checkedBigNumberify('./index.rsh:280:13:spread', stdlib.UInt_max, '0')];
      const v2766 = stdlib.addressEq(v1479, v1187);
      const v2767 = stdlib.addressEq(v1479, v1204);
      const v2768 = v2766 ? true : v2767;
      stdlib.assert(v2768, {
        at: './index.rsh:291:24:application',
        fs: ['at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v2769 = true;
      const v2770 = await txn1.getOutput('cCM', 'v2769', ctc6, v2769);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v2563, v2770), {
          at: './index.rsh:281:13:application',
          fs: ['at ./index.rsh:281:13:application call to [unknown function] (defined at: ./index.rsh:281:13:function exp)', 'at ./index.rsh:293:20:application call to "res" (defined at: ./index.rsh:290:13:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6615 = v2765;
      const v6616 = v1205;
      const v6617 = v1206;
      const v6618 = v1207;
      const v6619 = v1208;
      const v6621 = v2655;
      return;
      
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc10,
    aST0_169: ctc11,
    addWL0_169: ctc10,
    cBT0_169: ctc9,
    cCM0_169: ctc10,
    cST0_169: ctc9,
    dBT0_169: ctc12,
    optIn0_169: ctc9,
    remWL0_169: ctc10
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1290 = ctc.selfAddress();
  const v1292 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:102:72:application call to "runcST0_169" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1294 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1290), null);
  const v1295 = stdlib.fromSome(v1294, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
  const v1296 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1290), null);
  let v1297;
  switch (v1296[0]) {
    case 'None': {
      const v1298 = v1296[1];
      v1297 = false;
      
      break;
      }
    case 'Some': {
      const v1299 = v1296[1];
      v1297 = true;
      
      break;
      }
    }
  stdlib.assert(v1297, {
    at: './index.rsh:180:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:102:72:application call to "runcST0_169" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1300 = stdlib.gt(v1295, stdlib.checkedBigNumberify('./index.rsh:181:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1300, {
    at: './index.rsh:181:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:102:72:application call to "runcST0_169" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1303 = ['cST0_169', v1292];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1303],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:184:25:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v2917 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2918 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2922 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2923 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2924 = [v2918, v2922, v2923];
          const v2925 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2924);
          ;
          const v3048 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1479), null);
          const v3049 = stdlib.fromSome(v3048, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1479), null);
          const v3055 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1479), null);
          const v3056 = stdlib.fromSome(v3055, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v3057 = stdlib.add(v3056, v3049);
          await stdlib.simMapSet(sim_r, 2, v1479, v3057);
          await stdlib.simMapSet(sim_r, 0, v1479, stdlib.checkedBigNumberify('./index.rsh:193:33:decimal', stdlib.UInt_max, '0'));
          const v3058 = true;
          const v3059 = await txn1.getOutput('cST', 'v3058', ctc6, v3058);
          
          const v6685 = v1204;
          const v6686 = v1205;
          const v6687 = v1206;
          const v6688 = v1207;
          const v6689 = v1208;
          const v6691 = v2925;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v2917 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2918 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2922 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2923 = v2917[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2924 = [v2918, v2922, v2923];
      const v2925 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2924);
      ;
      const v3048 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1479), null);
      const v3049 = stdlib.fromSome(v3048, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v3050 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1479), null);
      let v3051;
      switch (v3050[0]) {
        case 'None': {
          const v3052 = v3050[1];
          v3051 = false;
          
          break;
          }
        case 'Some': {
          const v3053 = v3050[1];
          v3051 = true;
          
          break;
          }
        }
      stdlib.assert(v3051, {
        at: './index.rsh:188:24:application',
        fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3054 = stdlib.gt(v3049, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3054, {
        at: './index.rsh:189:24:application',
        fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3055 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1479), null);
      const v3056 = stdlib.fromSome(v3055, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v3057 = stdlib.add(v3056, v3049);
      await stdlib.mapSet(map2, v1479, v3057);
      await stdlib.mapSet(map0, v1479, stdlib.checkedBigNumberify('./index.rsh:193:33:decimal', stdlib.UInt_max, '0'));
      const v3058 = true;
      const v3059 = await txn1.getOutput('cST', 'v3058', ctc6, v3058);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v2833, v3059), {
          at: './index.rsh:176:13:application',
          fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:194:20:application call to "res" (defined at: ./index.rsh:186:13:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v6685 = v1204;
      const v6686 = v1205;
      const v6687 = v1206;
      const v6688 = v1207;
      const v6689 = v1208;
      const v6691 = v2925;
      return;
      
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc10,
    aST0_169: ctc11,
    addWL0_169: ctc10,
    cBT0_169: ctc12,
    cCM0_169: ctc10,
    cST0_169: ctc12,
    dBT0_169: ctc9,
    optIn0_169: ctc12,
    remWL0_169: ctc10
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1313 = ctc.selfAddress();
  const v1315 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1316 = v1315[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1319 = stdlib.addressEq(v1313, v1187);
  const v1320 = stdlib.addressEq(v1313, v1204);
  const v1321 = v1319 ? true : v1320;
  stdlib.assert(v1321, {
    at: './index.rsh:217:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1322 = stdlib.gt(v1316, stdlib.checkedBigNumberify('./index.rsh:218:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1322, {
    at: './index.rsh:218:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  stdlib.assert(v1206, {
    at: './index.rsh:219:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1326 = ['dBT0_169', v1315];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1326],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:222:24:decimal', stdlib.UInt_max, '0'), [[v1316, v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3156 = v3103[stdlib.checkedBigNumberify('./index.rsh:213:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3187 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3188 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3189 = stdlib.add(v3188, v3156);
          const v3192 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3193 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3194 = [v3189, v3192, v3193];
          const v3195 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3194);
          sim_r.txns.push({
            amt: v3156,
            kind: 'to',
            tok: v1191
            });
          const v3341 = true;
          const v3342 = await txn1.getOutput('dBT', 'v3341', ctc6, v3341);
          
          const v3348 = stdlib.add(v1207, v3156);
          const v3349 = stdlib.add(v1205, stdlib.checkedBigNumberify('./index.rsh:229:76:decimal', stdlib.UInt_max, '1'));
          const v6755 = v1204;
          const v6756 = v3349;
          const v6757 = true;
          const v6758 = v3348;
          const v6759 = v1208;
          const v6761 = v3195;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      undefined /* setApiDetails */;
      const v3156 = v3103[stdlib.checkedBigNumberify('./index.rsh:213:13:spread', stdlib.UInt_max, '0')];
      ;
      const v3187 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3188 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3189 = stdlib.add(v3188, v3156);
      const v3192 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v3193 = v3187[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v3194 = [v3189, v3192, v3193];
      const v3195 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3194);
      ;
      const v3337 = stdlib.addressEq(v1479, v1187);
      const v3338 = stdlib.addressEq(v1479, v1204);
      const v3339 = v3337 ? true : v3338;
      stdlib.assert(v3339, {
        at: './index.rsh:225:24:application',
        fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3340 = stdlib.gt(v3156, stdlib.checkedBigNumberify('./index.rsh:226:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3340, {
        at: './index.rsh:226:24:application',
        fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      stdlib.assert(v1206, {
        at: './index.rsh:227:24:application',
        fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3341 = true;
      const v3342 = await txn1.getOutput('dBT', 'v3341', ctc6, v3341);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v3103, v3342), {
          at: './index.rsh:214:13:application',
          fs: ['at ./index.rsh:214:13:application call to [unknown function] (defined at: ./index.rsh:214:13:function exp)', 'at ./index.rsh:228:20:application call to "res" (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v3348 = stdlib.add(v1207, v3156);
      const v3349 = stdlib.add(v1205, stdlib.checkedBigNumberify('./index.rsh:229:76:decimal', stdlib.UInt_max, '1'));
      const v6755 = v1204;
      const v6756 = v3349;
      const v6757 = true;
      const v6758 = v3348;
      const v6759 = v1208;
      const v6761 = v3195;
      return;
      
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc10,
    aST0_169: ctc11,
    addWL0_169: ctc10,
    cBT0_169: ctc9,
    cCM0_169: ctc10,
    cST0_169: ctc9,
    dBT0_169: ctc12,
    optIn0_169: ctc9,
    remWL0_169: ctc10
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1307 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:102:72:application call to "runoptIn0_169" (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v1311 = ['optIn0_169', v1307];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1311],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:206:25:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v3457 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3462 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3463 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3464 = [v3458, v3462, v3463];
          const v3465 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3464);
          ;
          const v3622 = true;
          const v3623 = await txn1.getOutput('optIn', 'v3622', ctc6, v3622);
          
          const v6825 = v1204;
          const v6826 = v1205;
          const v6827 = v1206;
          const v6828 = v1207;
          const v6829 = v1208;
          const v6831 = v3465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v3457 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3458 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3462 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v3463 = v3457[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v3464 = [v3458, v3462, v3463];
      const v3465 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3464);
      ;
      const v3622 = true;
      const v3623 = await txn1.getOutput('optIn', 'v3622', ctc6, v3622);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v3373, v3623), {
          at: './index.rsh:200:13:application',
          fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:209:20:application call to "res" (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v6825 = v1204;
      const v6826 = v1205;
      const v6827 = v1206;
      const v6828 = v1207;
      const v6829 = v1208;
      const v6831 = v3465;
      return;
      
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
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
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    aBT0_169: ctc9,
    aST0_169: ctc10,
    addWL0_169: ctc9,
    cBT0_169: ctc11,
    cCM0_169: ctc9,
    cST0_169: ctc11,
    dBT0_169: ctc12,
    optIn0_169: ctc11,
    remWL0_169: ctc9
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
  
  
  const [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1255 = ctc.selfAddress();
  const v1257 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:102:72:application call to "runremWL0_169" (defined at: ./index.rsh:131:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1261 = stdlib.addressEq(v1255, v1187);
  const v1262 = stdlib.addressEq(v1255, v1204);
  const v1263 = v1261 ? true : v1262;
  stdlib.assert(v1263, {
    at: './index.rsh:135:23:application',
    fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:18:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:102:72:application call to "runremWL0_169" (defined at: ./index.rsh:131:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1267 = ['remWL0_169', v1257];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1187, v1191, v1204, v1205, v1206, v1207, v1208, v1211, v1267],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:139:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:139:26:decimal', stdlib.UInt_max, '0'), v1191]]],
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
      
      const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
      
      switch (v1480[0]) {
        case 'aBT0_169': {
          const v1483 = v1480[1];
          
          break;
          }
        case 'aST0_169': {
          const v1753 = v1480[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2023 = v1480[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2293 = v1480[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2563 = v1480[1];
          
          break;
          }
        case 'cST0_169': {
          const v2833 = v1480[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3103 = v1480[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3373 = v1480[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3643 = v1480[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v3727 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3728 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3732 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3733 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3734 = [v3728, v3732, v3733];
          const v3735 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3734);
          ;
          const v3900 = v3643[stdlib.checkedBigNumberify('./index.rsh:131:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v3900, undefined /* Nothing */);
          const v3905 = true;
          const v3906 = await txn1.getOutput('remWL', 'v3905', ctc6, v3905);
          
          const v6895 = v1204;
          const v6896 = v1205;
          const v6897 = v1206;
          const v6898 = v1207;
          const v6899 = v1208;
          const v6901 = v3735;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1480], secs: v1482, time: v1481, didSend: v732, from: v1479 } = txn1;
  switch (v1480[0]) {
    case 'aBT0_169': {
      const v1483 = v1480[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1753 = v1480[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2023 = v1480[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2293 = v1480[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2563 = v1480[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2833 = v1480[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3103 = v1480[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3373 = v1480[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3643 = v1480[1];
      undefined /* setApiDetails */;
      ;
      const v3727 = v1211[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3728 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3732 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v3733 = v3727[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v3734 = [v3728, v3732, v3733];
      const v3735 = stdlib.Array_set(v1211, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3734);
      ;
      const v3900 = v3643[stdlib.checkedBigNumberify('./index.rsh:131:13:spread', stdlib.UInt_max, '0')];
      const v3901 = stdlib.addressEq(v1479, v1187);
      const v3902 = stdlib.addressEq(v1479, v1204);
      const v3903 = v3901 ? true : v3902;
      stdlib.assert(v3903, {
        at: './index.rsh:142:24:application',
        fs: ['at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v3900, undefined /* Nothing */);
      const v3905 = true;
      const v3906 = await txn1.getOutput('remWL', 'v3905', ctc6, v3905);
      if (v732) {
        stdlib.protect(ctc0, await interact.out(v3643, v3906), {
          at: './index.rsh:132:13:application',
          fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:145:20:application call to "res" (defined at: ./index.rsh:141:13:function exp)', 'at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v6895 = v1204;
      const v6896 = v1205;
      const v6897 = v1206;
      const v6898 = v1207;
      const v6899 = v1208;
      const v6901 = v3735;
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
    impure: [`aBT(address)byte`, `aST(address,address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `dBT(uint64)byte`, `optIn()byte`, `remWL(address)byte`],
    pure: [`claimSTBT(address)(uint64,uint64)`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `wlMember(address)byte`],
    sigs: [`aBT(address)byte`, `aST(address,address,uint64)byte`, `addWL(address)byte`, `cBT()byte`, `cCM(address)byte`, `cST()byte`, `claimSTBT(address)(uint64,uint64)`, `dBT(uint64)byte`, `optIn()byte`, `remWL(address)byte`, `saleLocked()byte`, `totSTBTD()(uint64,uint64,uint64)`, `totSTBTDRec(address)(uint64,uint64,uint64)`, `wlMember(address)byte`]
    },
  appApproval: `BiAeAAEDSAgoBDY33dHhmAnbqqjUDN3u0KAO2I6Z4A5AtNy1rA3r5oTTCbCC37AMnPiDiAK8rcerCM3F1YcJ+YSKkQX5rvSVAbCd490BAv///////////wEgUVkFoI0GJgMBAAEBACI1ADEYQQl3KmRJIls1ASEEWzUCMRkjEkEACjEAKCEIr2ZCCUM2GgAXSUECFyI1BCM1BkkhCQxAARlJIQoMQACqSSELDEAAM0khDAxAABYhDBJENhoBNf+AAQg0/1AhBa9QQgJUIQsSRDYaATX/gAEGNP9QIQ2vUEICPkkhDgxAAFEhDhJENAEkEkQ2GgE1/yI0/4gI8lcSCUk1/iNbNP4iVU0WIjT/iAjeVyQJSTX+I1s0/iJVTRZQIjT/iAjJVy0JSTX+I1s0/iJVTRZQNQdCCKQhChJENhoBNhoCUDYaA1A1/yk0/1BCAc5JIQ8MQAAwSSEQDEAAFiEQEkQ0ASQSRChkSTUDV1ABNQdCCGghDxJEKjX/gAEDNP9QJa9QQgGXIQkSRDQBJBJENhoBiAhXVzYBSTX+IlVAAAYiNf9CAAYjNf9CAAA0/xZRBwg1B0IIJEkhEQxAAHZJIRIMQAA/SSETDEAAIiETEkQ0ASQSRChkSTUDV1kINANXUQhQNANXSAhQNQdCB+0hEhJENhoBNf+AAQI0/1AhBa9QQgEZSSEUDEAAEyEUEkQqNf+AAQc0/1Alr1BCAP8hERJENhoBNf+AAQQ0/1AhBa9QQgDpSSEVDEAAVkkhFgxAABMhFhJEKjX/gAEFNP9QJa9QQgDIIRUSRDQBJBJENhoBNf8iNP+IB4NXAAlJNf4jWzT+IlVNFiI0/4gHb1cJCUk1/iNbNP4iVU0WUDUHQgdKgd/2hgsSRDYaATX/KDT/UCEFr1BCAHU2GgIXNQQ2GgM2GgEXSSEXDEAF/EkkDEAAWiQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASnZcS0sDIGIRgPRDT/MQASRDT/NAMhGVs0A1coIDQDJVs0A1dQARc0AyEaWzQDIRtbMgY0A1dhEUIGNUgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hGVs1/lcoIDX9JVs1/FdQARc1+yEaWzX6IRtbNflXYRE1+Ek1BTX3gASYxPezNPdQsDIGIRgMRDT3IlVJIQYMQAIuSYEGDEABEUmBBwxAAKFJIQQMQABfIQQSRDT3VwEgNfY0+FcAETX1MQA0/xIxADT9EhFENPYoNPaIBjMiIQdMVmaACQAAAAAAAA9BAbApNQc0/zT+NP00/DT7NPo0+TIGNPVXAAg09VcICFA09VcQAVBCBV9INPhXABE19oAJAAAAAAAADiYBsCk1BzT/NP40/TT8NPs0+jT5MgY09lcACDT2VwgIUDT2VxABUEIFJEg091cBCDX2NPYXNfU0+FcAETX0NPU0/ogFyzEANP8SMQA0/RIRRDT1Ig1ENPtEgAkAAAAAAAANDQGwKTUHNP80/jT9NPwjCCM0+jT1CDT5MgY09CJbNPUIFjT0VwgIUDT0VxABUEIEu0khHAxAAMFINPhXABE19iIxAIgFQVcACUk19CNbNPQiVU019TEAiAUtVzYBSTXzIlVAAAYiNfRCAAYjNfRCAAA09EQ09SINRDEAKDEAiAUGKSIxAIgE/1cSCUk18yNbNPMiVU009QgWUDXzSVcAEjTzUExXGxxQZjEAKDEAiATWgAkBAAAAAAAAAAA181cJLjTzTFBmgAkAAAAAAAAL8gGwKTUHNP80/jT9NPw0+zT6NPkyBjT2VwAINPZXCAhQNPZXEAFQQgPzSDT3VwEgNfY0+FcAETX1MQA0/xIxADT9EhFEgAkAAAAAAAAK0QGwKTUHNP80/jT2NPw0+zT6NPkyBjT1VwAINPVXCAhQNPVXEAFQQgOlSSEXDEABa0kkDEABCUg0+FcAEUk19lcACDT2VwgIUDT2VxABUDX1MQCIBBRXNgFJNfMiVUAABiI19EIABiM19EIAADT0RDT1VwARSTXzIls18iIxAIgD6FcbCUk18CNbNPAiVU018TTyIg00+SINEDT5NPEPEEQ08TTyCzT5CjXwsSKyATTwshIhBrIQMQCyFDT+shGzMQAoMQCIA6IpIjEAiAObVyQJSTXvI1s07yJVTTTwCBZQNe9JVwAkNO9QTFctClBmMQAoMQCIA3IpNPwWUDXvSVcALTTvUExXNgFQZoAJAAAAAAAACbcBsCk1BzT/NP40/TT8NPs0+jT5MgY08jTwCRY081cICFA081cQAVBCAo9INPdXASA19jT4VwARNfUxADT/EjEANP0SEUQ09ig09ogDByMhB0xWZoAJAAAAAAAACH4BsCk1BzT/NP40/TT8NPs0+jT5MgY09VcACDT1VwgIUDT1VxABUEICM0kjDEAA1Eg091cBSDX2NPhXABE19TT2VwAgNfQ09lcgIDXzNPYhDVs18jT0NP8SNPQ0/RIRRDTyIg1ENPMoNPOIAosjIQdMVmY08yg084gCfSkiNPOIAnZXAAlJNfEjWzTxIlVNNPIIFlA18VcJLjTxTFBmNPMoNPOIAlIpIjTziAJLVxsJSTXxI1s08SJVTTTyCBZQNfFJVwAbNPFQTFckE1BmgAkAAAAAAAAHXwGwKTUHNP80/jT9NPw0+zT6NPk08ggyBjT1VwAINPVXCAhQNPVXEAFQQgFZSDT3VwEgNfY0+FcAEUk19VcACDT1VwgIUDT1VxABUDX0NPY18zEANP8SMQA0/RIRRDT7RCI084gBulcbCUk18iNbNPIiVU0iDUQiMQCIAaRXGwlJNfEjWzTxIlVNNPRXABEiWws0+Qo18jTzKDTziAGCKSI084gBe1cJCUk18SNbNPEiVU008ggWUDXxSVcACTTxUExXEiVQZoAJAAAAAAAABjkBsCk1BzT/NP40/TT8IzT6NPk08ggyBjT0QgCZIhJEIjQBEkQ0BEkiEkw0AhIRREk1BUlKSVcAgDX/V4ABFzX+V4EgNf2BoQFbNfyBqQFbNfuABGcVpXg0/1A0/hZRBwhQNP1QNPwWUDT7FlCwIR2IAO2BEa9JNfpXABE1+SEdiADdsSKyASKyEiEGshAyCrIUNPyyEbMxADT8NP0iNP4iIjIGIQSvNPlXCAhQNPlXEAFQQgAANf81/jX9Nfw1+zX6Nfk1+Ek19zT4FlA0+VA0+hZQNPsWUQcIUDT8FlA0/RZQNP9QKEsBVwByZ0gkNQEyBjUCQgAcMRkhHBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEGEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 55,
  stateKeys: 1,
  stateSize: 114,
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
                "internalType": "struct T10",
                "name": "v1188",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1189",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1190",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1191",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1192",
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
                "name": "v1188",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1189",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1190",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1191",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1192",
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
                    "name": "_aBT0_169",
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
                    "name": "_aST0_169",
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
                    "name": "_addWL0_169",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_169",
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
                    "name": "_cCM0_169",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_169",
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
                    "name": "_dBT0_169",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_169",
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
                    "name": "_remWL0_169",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1480",
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
    "name": "_reach_oe_v1593",
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
    "name": "_reach_oe_v1887",
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
    "name": "_reach_oe_v2174",
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
    "name": "_reach_oe_v2487",
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
    "name": "_reach_oe_v2769",
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
    "name": "_reach_oe_v3058",
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
    "name": "_reach_oe_v3341",
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
    "name": "_reach_oe_v3622",
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
    "name": "_reach_oe_v3905",
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
                    "name": "_aBT0_169",
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
                    "name": "_aST0_169",
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
                    "name": "_addWL0_169",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cBT0_169",
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
                    "name": "_cCM0_169",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cST0_169",
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
                    "name": "_dBT0_169",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_optIn0_169",
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
                    "name": "_remWL0_169",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1480",
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
        "name": "v6902",
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
        "name": "v6906",
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
        "name": "v6908",
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
  Bytecode: `0x6080604052604051620045a8380380620045a88339810160408190526200002691620005ca565b600080554360035562000038620002dc565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b929190620006a3565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415600c62000170565b620000d862000337565b80513390526020808401805160609081015184516001600160a01b03918216908501528251604090810151858701805191909316905281516000908601819052935185015182519015159082015281519092018390528051608001839052514360a0909101529184015191840151620001539291906200019a565b602082015160c0015262000167816200021d565b50505062000857565b81620001965760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001a462000362565b60005b6001811015620001fa57848160018110620001c657620001c662000736565b6020020151828260018110620001e057620001e062000736565b602002015280620001f1816200074c565b915050620001a7565b508181846001811062000211576200021162000736565b60200201529392505050565b62000227620003af565b8151516001600160a01b039081168252825160209081015182168184015280840180515190921660408085019190915282518201516060808601919091528351820151151560808087019190915284519091015160a08601528351015160c08086019190915292519092015160e08401526003600055436001559051620002b19183910162000776565b60405160208183030381529060405260029080519060200190620002d792919062000413565b505050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200030f62000362565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b60408051608081018252600091810182815260608201929092529081526020810162000332620004a2565b60405180602001604052806001905b62000398604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003715790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160001515815260200160008152602001600081526020016200033262000362565b82805462000421906200081a565b90600052602060002090601f01602090048101928262000445576000855562000490565b82601f106200046057805160ff191683800117855562000490565b8280016001018555821562000490579182015b828111156200049057825182559160200191906001019062000473565b506200049e929150620004ec565b5090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001600081526020016200033262000362565b5b808211156200049e5760008155600101620004ed565b604080519081016001600160401b03811182821017156200053457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200053457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200053457634e487b7160e01b600052604160045260246000fd5b80518015158114620005ad57600080fd5b919050565b80516001600160a01b0381168114620005ad57600080fd5b6000818303610120811215620005df57600080fd5b620005e962000503565b83518152601f1982019150610100808312156200060557600080fd5b6200060f6200053a565b60808412156200061e57600080fd5b620006286200056b565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200066060a087016200059c565b60208201526200067360c08701620005b2565b60408201526200068660e08701620005b2565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620007226101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200076f57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006101408201905060018060a01b0380845116835260208181860151168185015260408281870151168186015260609250828601518386015260808601511515608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b60018110156200080e5782518051835285810151868401528401511515848301529184019190850190600101620007dc565b50505050505092915050565b600181811c908216806200082f57607f821691505b602082108114156200085157634e487b7160e01b600052602260045260246000fd5b50919050565b613d4180620008676000396000f3fe6080604052600436106101735760003560e01c806373b4522c116100c8578063ab53f2c611610084578063cadc2e7a11610061578063cadc2e7a146103f5578063d1ad1a3714610415578063dc01fb9d1461042a578063e9b451af1461044a57005b8063ab53f2c614610392578063abe9f98d146103b5578063acf0cc22146103d557005b806373b4522c1461031157806374fcef1214610324578063817d57f3146103375780638323075714610357578063970b46bf1461036c578063a153a9bd1461037f57005b80632080ea1c1161012f5780634acdd6cc1161010c5780634acdd6cc146102be57806359cac3a4146102c65780635b48684e146103015780637333bd091461030957005b80632080ea1c1461025e5780632f42e5091461028b5780633bc5b7bf1461029e57005b806306dc92ff1461017c578063125f48e4146101b257806312822a75146101d55780631e3f5f07146101ea5780631e93b0f1146101fd5780631fa8b02f1461021c57005b3661017a57005b005b34801561018857600080fd5b5061019c61019736600461347f565b61045d565b6040516101a991906134c2565b60405180910390f35b6101c56101c036600461347f565b610489565b60405190151581526020016101a9565b3480156101e157600080fd5b506101c56104ea565b6101c56101f83660046134f2565b6105b0565b34801561020957600080fd5b506003545b6040519081526020016101a9565b34801561022857600080fd5b5061023c61023736600461347f565b610626565b60408051825181526020808401519082015291810151908201526060016101a9565b34801561026a57600080fd5b5061027e61027936600461347f565b6107eb565b6040516101a99190613533565b6101c561029936600461347f565b610811565b3480156102aa57600080fd5b5061019c6102b936600461347f565b61086e565b6101c5610894565b3480156102d257600080fd5b506102e66102e136600461347f565b6108e1565b604080518251815260209283015192810192909252016101a9565b6101c5610a4d565b6101c5610a9b565b61017a61031f366004613565565b610ae8565b6101c561033236600461347f565b610b0c565b34801561034357600080fd5b5061019c61035236600461347f565b610b6d565b34801561036357600080fd5b5060015461020e565b61017a61037a36600461357d565b610b93565b6101c561038d36600461347f565b610bb3565b34801561039e57600080fd5b506103a7610c16565b6040516101a99291906135bc565b3480156103c157600080fd5b506101c56103d036600461347f565b610cb3565b3480156103e157600080fd5b5061019c6103f036600461347f565b610dda565b34801561040157600080fd5b5061019c61041036600461347f565b610e00565b34801561042157600080fd5b5061023c610e26565b34801561043657600080fd5b5061019c61044536600461347f565b610f4f565b6101c56104583660046135f6565b610f75565b604080516060810182526000808252602082018190529181019190915261048382610fcd565b92915050565b6000610493612f2f565b61049b612f7b565b6104a3612f9a565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526104de828461109f565b50506040015192915050565b6000600360005414156105a1576000600280546105069061360f565b80601f01602080910402602001604051908101604052809291908181526020018280546105329061360f565b801561057f5780601f106105545761010080835404028352916020019161057f565b820191906000526020600020905b81548152906001019060200180831161056257829003601f168201915b5050505050806020019051810190610597919061379a565b6080015192915050565b6105ad60006008612665565b90565b60006105ba612f2f565b6105c2612f7b565b6105ca612f9a565b604080516060810182526001600160a01b03898116825288166020820152808201879052908201526001818190525060408051602080820190925282815290830152610616828461109f565b50506020015190505b9392505050565b61064a60405180606001604052806000815260200160008152602001600081525090565b600360005414156107da576000600280546106649061360f565b80601f01602080910402602001604051908101604052809291908181526020018280546106909061360f565b80156106dd5780601f106106b2576101008083540402835291602001916106dd565b820191906000526020600020905b8154815290600101906020018083116106c057829003601f168201915b50505050508060200190518101906106f5919061379a565b905061071e60408051608081018252600060208201818152928201819052606082015290815290565b60016107298561268b565b51600181111561073b5761073b61349c565b14610747576000610755565b6107508461268b565b604001515b815152600161076385612718565b5160018111156107755761077561349c565b1461078157600061078f565b61078a84612718565b604001515b81516020015260016107a0856127a5565b5160018111156107b2576107b261349c565b146107be5760006107cc565b6107c7846127a5565b604001515b815160400152519392505050565b6107e66000600a612665565b919050565b604080516060810182526000808252602082018190529181019190915261048382612832565b600061081b612f2f565b610823612f7b565b61082b612f9a565b60408051602080820183526001600160a01b038816825283810191909152600083528151808201909252828252830152610865828461109f565b50505192915050565b6040805160608101825260008082526020820181905291810191909152610483826128fb565b600061089e612f2f565b6108a6612f7b565b6108ae612f9a565b600060c082015260058152604080516020808201909252828152908301526108d6828461109f565b505060a00151919050565b604080518082019091526000808252602082015260036000541415610a415760006002805461090f9061360f565b80601f016020809104026020016040519081016040528092919081815260200182805461093b9061360f565b80156109885780601f1061095d57610100808354040283529160200191610988565b820191906000526020600020905b81548152906001019060200180831161096b57829003601f168201915b50505050508060200190518101906109a0919061379a565b90506109c2604080516060810182526000602082018181529282015290815290565b60016109cd856128fb565b5160018111156109df576109df61349c565b146109eb5760006109f9565b6109f4846128fb565b604001515b8151526001610a0785612988565b516001811115610a1957610a1961349c565b14610a25576000610a33565b610a2e84612988565b604001515b815160200152519392505050565b6107e660006007612665565b6000610a57612f2f565b610a5f612f7b565b610a67612f9a565b60006101008201526007815260408051602080820190925282815290830152610a90828461109f565b505060e00151919050565b6000610aa5612f2f565b610aad612f7b565b610ab5612f9a565b600060808201526003815260408051602080820190925282815290830152610add828461109f565b505060600151919050565b610af0612f2f565b610b08610b0236849003840184613856565b82612a15565b5050565b6000610b16612f2f565b610b1e612f7b565b610b26612f9a565b60408051602080820183526001600160a01b038816825260a0840191909152600483528151808201909252828252830152610b61828461109f565b50506080015192915050565b60408051606081018252600080825260208201819052918101919091526104838261268b565b610b9b612f2f565b610b08610bad3684900384018461395c565b8261109f565b6000610bbd612f2f565b610bc5612f7b565b610bcd612f9a565b60408051602080820183526001600160a01b0388168252610120840191909152600883528151808201909252828252830152610c09828461109f565b5050610100015192915050565b600060606000546002808054610c2b9061360f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c579061360f565b8015610ca45780601f10610c7957610100808354040283529160200191610ca4565b820191906000526020600020905b815481529060010190602001808311610c8757829003601f168201915b50505050509050915091509091565b600060036000541415610dce57600060028054610ccf9061360f565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfb9061360f565b8015610d485780601f10610d1d57610100808354040283529160200191610d48565b820191906000526020600020905b815481529060010190602001808311610d2b57829003601f168201915b5050505050806020019051810190610d60919061379a565b6040805160208101909152600081529091506000610d7d85612832565b516001811115610d8f57610d8f61349c565b1415610d9e5760008152610dc6565b6001610da985612832565b516001811115610dbb57610dbb61349c565b1415610dc657600181525b519392505050565b6107e66000600b612665565b604080516060810182526000808252602082018190529181019190915261048382612718565b604080516060810182526000808252602082018190529181019190915261048382612988565b610e4a60405180606001604052806000815260200160008152602001600081525090565b60036000541415610f4357600060028054610e649061360f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e909061360f565b8015610edd5780601f10610eb257610100808354040283529160200191610edd565b820191906000526020600020905b815481529060010190602001808311610ec057829003601f168201915b5050505050806020019051810190610ef5919061379a565b9050610f1e60408051608081018252600060208201818152928201819052606082015290815290565b60c082015181515260a082015181516020015260609091015181516040015251919050565b6105ad60006009612665565b6040805160608101825260008082526020820181905291810191909152610483826127a5565b6000610f7f612f2f565b610f87612f7b565b610f8f612f9a565b604080516020808201835287825260e0840191909152600683528151808201909252828252830152610fc1828461109f565b505060c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156110195761101961349c565b1415611090576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561105a5761105a61349c565b600181111561106b5761106b61349c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6110af600360005414602e612665565b81516110ca9015806110c357508251600154145b602f612665565b6000808055600280546110dc9061360f565b80601f01602080910402602001604051908101604052809291908181526020018280546111089061360f565b80156111555780601f1061112a57610100808354040283529160200191611155565b820191906000526020600020905b81548152906001019060200180831161113857829003601f168201915b505050505080602001905181019061116d919061379a565b9050611177613063565b61118660001943106030612665565b7f30d4b5a278e5db8a37c70c8aa8f01e3e258485b09104554fcc889283d226baf633856040516111b7929190613a79565b60405180910390a160006020850151515160088111156111d9576111d961349c565b14156114b85760208085015151015181526111f63415600d612665565b60e082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516112379190600090612bf2565b81604001819052506112596112523384602001516000612c66565b600e612665565b8151611296906001600160a01b0316331461128c5782604001516001600160a01b0316336001600160a01b03161461128f565b60015b600f612665565b6112a582608001516010612665565b6112ef600060018351516112b890610fcd565b5160018111156112ca576112ca61349c565b146112d65760006112e7565b8251516112e290610fcd565b604001515b116011612665565b60c082015160408201515151600161130633610fcd565b5160018111156113185761131861349c565b14611324576000611332565b61132d33610fcd565b604001515b61133c9190613ba5565b6113469190613bc4565b606082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061138690612988565b5160018111156113985761139861349c565b146113a45760006113b5565b8151516113b090612988565b604001515b6113bf9190613be6565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527f4f1de05e4b23e12beb9b0bb6fbec244ea8d33fc4baebd7430e0f33bd507ee527910160405180910390a16001835261142261329d565b825181516001600160a01b03918216905260208085015183519083169082015260408086015182850180519190941690526060808701518451909301929092528251600191015260a0850151915181019190915282015160c08401516114889190613be6565b6020820180516080019190915280514360a0909101526040830151905160c001526114b281612c7c565b5061265f565b60016020850151515160088111156114d2576114d261349c565b1415611810576020840151516040015160808201526114f334156012612665565b60e082018051515160a083018051919091528151516020908101518251820152915151604090810151915191151591015282015161153f906115389033906000612c66565b6013612665565b815160808201515161158d916001600160a01b039182169116146115835782604001516001600160a01b03168260800151600001516001600160a01b031614611586565b60015b6014612665565b6115a36000826080015160400151116015612665565b6080810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff0000191690558651860151909416835260048552918190208054909316821790925592519081015191015190919061161e906128fb565b5160018111156116305761163061349c565b1461163c576000611652565b61164d8260800151602001516128fb565b604001515b61165c9190613be6565b6080820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff1916851790559151918201519101519091906116ba90610fcd565b5160018111156116cc576116cc61349c565b146116d85760006116ee565b6116e9826080015160200151610fcd565b604001515b6116f89190613be6565b60808201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527fbc3adb4e5cf69f423dd9243a8502abba921a77458f6336ef4238f23605d97f21910160405180910390a16001602084015261176261329d565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519015159083015260a0870151935190920192909252830151015160c08401516117d39190613be6565b60208201805160800191909152514360a09182015260e0840151908301516117fe9190600090612bf2565b602082015160c001526114b281612c7c565b600260208501515151600881111561182a5761182a61349c565b14156119e5576020840151516060015160c082015261184b34156016612665565b60e0828101805151519183018051929092528051516020908101518351820152905151604090810151925192151592019190915282015161189a906118939033906000612c66565b6017612665565b81516118d7906001600160a01b031633146118cd5782604001516001600160a01b0316336001600160a01b0316146118d0565b60015b6018612665565b60c081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527f6c46f2e37b53369f168930d51ec9b9b52201402f737cceff5862b39bd04c59b2910160405180910390a16001604084015261195d61329d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e080840151908301516117fe9190600090612bf2565b60036020850151515160088111156119ff576119ff61349c565b1415611d4b57611a1134156019612665565b60e08201805151516101008301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611a559190600090612bf2565b816101200181905250611a78611a713384602001516000612c66565b601a612665565b6000611a8333612832565b516001811115611a9557611a9561349c565b1415611aa8576000610140820152611ad4565b6001611ab333612832565b516001811115611ac557611ac561349c565b1415611ad45760016101408201525b611ae4816101400151601b612665565b6001611aef33610fcd565b516001811115611b0157611b0161349c565b14611b0d576000611b1b565b611b1633610fcd565b604001515b6101608201526101208101515151611b6190611b38576000611b41565b60008360c00151115b611b4c576000611b5a565b8161016001518360c0015110155b601c612665565b60c08201516101208201515151610160830151611b7e9190613ba5565b611b889190613bc4565b61018082018190526101208201515151611ba29190613bfe565b6101a08201805191909152610120820180515160209081015183518201529051516040908101519251921515920191909152820151610180820151611be991903390612d35565b336000818152600860205260409020805460ff1916600190811790915561018083015191611c1690612718565b516001811115611c2857611c2861349c565b14611c34576000611c42565b611c3d33612718565b604001515b611c4c9190613be6565b3360009081526008602090815260408083206001908101949094556009825291829020805460ff19168417815560608601519084015590519182527f45049b4f67ef8203bc1f7dd0f3174b25ad9f47f96429596e546316735693be07910160405180910390a160016060840152611cc161329d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c08601518351909101529051439101526101208201516101a08301516117fe9190600090612bf2565b6004602085015151516008811115611d6557611d6561349c565b1415611edf5760208401515160a001516101c0820152611d873415601d612665565b60e08201805151516101e0830180519190915281515160209081015182518201529151516040908101519151911515910152820151611dd490611dcd9033906000612c66565b601e612665565b8151611e11906001600160a01b03163314611e075782604001516001600160a01b0316336001600160a01b031614611e0a565b60015b601f612665565b604051600181527fa39990cc06bfe5568a44c32b04da74e230634c0b7d89195f91f2049cfe80fef09060200160405180910390a160016080840152611e5461329d565b825181516001600160a01b0391821690526020808501518351908316908201526101c084015151818401805191909316905260608086015183519092019190915260808086015183519015156040919091015260a08087015184519093019290925260c086015183519091015290514391015260e08301516101e08301516117fe9190600090612bf2565b6005602085015151516008811115611ef957611ef961349c565b141561217157611f0b34156020612665565b60e0820180515151610200830180519190915281515160209081015182518201529151516040908101519151911515910152820151611f5890611f519033906000612c66565b6021612665565b6001611f63336128fb565b516001811115611f7557611f7561349c565b14611f81576000611f8f565b611f8a336128fb565b604001515b6102208201526000611fa033612832565b516001811115611fb257611fb261349c565b1415611fc5576000610240820152611ff1565b6001611fd033612832565b516001811115611fe257611fe261349c565b1415611ff15760016102408201525b6120018161024001516022612665565b6120146000826102200151116023612665565b336000818152600660205260409020805460ff19166001908117909155610220830151916120419061268b565b5160018111156120535761205361349c565b1461205f57600061206d565b6120683361268b565b604001515b6120779190613be6565b33600090815260066020908152604080832060019081019490945560048252808320805460ff19168517815584019290925590519182527f9910d034c9e37980c14ae246da97c891a54401e357db1737882979e65d5359b5910160405180910390a1600160a08401526120e861329d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e08301516102008301516117fe9190600090612bf2565b600660208501515151600881111561218b5761218b61349c565b141561235d5760208401515160e001516102608201526121ad34156024612665565b6102608101515160e083015151516121c59190613be6565b610280820180519190915260e0830180515160209081015183518201529051516040908101519251921515920191909152820151610260820151516122179161221091339190612c66565b6025612665565b8151612254906001600160a01b0316331461224a5782604001516001600160a01b0316336001600160a01b03161461224d565b60015b6026612665565b610260810151516122689015156027612665565b61227782608001516028612665565b604051600181527f8742493d2bc09e8009aef4cd5ac4fef7e8e97020c848218d1d9b152ebd0f79d99060200160405180910390a1600160c08401526122ba61329d565b825181516001600160a01b0391821690526020808501518351908316908201526040850151908301519116905260608301516122f890600190613be6565b60208083018051909101919091525160016040909101526102608201515160a08401516123259190613be6565b6020820180516060019190915260c0840151815160800152514360a09091015260e08301516102808301516117fe9190600090612bf2565b60076020850151515160088111156123775761237761349c565b14156124a25761238934156029612665565b60e08201805151516102a08301805191909152815151602090810151825182015291515160409081015191519115159101528201516123d6906123cf9033906000612c66565b602a612665565b604051600181527fab44c63ae2c69c410e7ce9f390d649bbabcd92b010a98548458eb41aaa52ff549060200160405180910390a1600160e084015261241961329d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e08301516102a08301516117fe9190600090612bf2565b60086020850151515160088111156124bc576124bc61349c565b141561265f5760208401515161012001516102c08201526124df3415602b612665565b60e08201805151516102e083018051919091528151516020908101518251820152915151604090810151915191151591015282015161252c906125259033906000612c66565b602c612665565b8151612569906001600160a01b0316331461255f5782604001516001600160a01b0316336001600160a01b031614612562565b60015b602d612665565b6102c0810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527fee39d6de540e820f104872e2219c03e9f051a2ed677533935b8d1120d22ac7bc910160405180910390a160016101008401526125d661329d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e08301516102e08301516117fe9190600090612bf2565b50505050565b81610b085760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156126d7576126d761349c565b1415611090576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561105a5761105a61349c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff1660018111156127645761276461349c565b1415611090576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561105a5761105a61349c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff1660018111156127f1576127f161349c565b1415611090576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561105a5761105a61349c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff16600181111561287e5761287e61349c565b1415611090576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff1660018111156128bf576128bf61349c565b60018111156128d0576128d061349c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156129475761294761349c565b1415611090576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561105a5761105a61349c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156129d4576129d461349c565b1415611090576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561105a5761105a61349c565b612a256003600054146033612665565b8151612a40901580612a3957508251600154145b6034612665565b600080805560028054612a529061360f565b80601f0160208091040260200160405190810160405280929190818152602001828054612a7e9061360f565b8015612acb5780601f10612aa057610100808354040283529160200191612acb565b820191906000526020600020905b815481529060010190602001808311612aae57829003601f168201915b5050505050806020019051810190612ae3919061379a565b9050612af56000194310156035612665565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1612b4834156031612665565b8051612b60906001600160a01b031633146032612665565b612b6861329d565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518285018051919094169052606080860151845190930192909252608080860151845190151592019190915260a08086015184519093019290925260c08086015184519092019190915282514392019190915260e08401519151015261265f81612c7c565b612bfa6132c6565b60005b6001811015612c4657848160018110612c1857612c18613b79565b6020020151828260018110612c2f57612c2f613b79565b602002015280612c3e81613c15565b915050612bfd565b5081818460018110612c5a57612c5a613b79565b60200201529392505050565b6000612c7483853085612d49565b949350505050565b612c84613311565b8151516001600160a01b039081168252825160209081015182168184015280840180515190921660408085019190915282518201516060808601919091528351820151151560808087019190915284519091015160a08601528351015160c08086019190915292519092015160e08401526003600055436001559051612d0c91839101613c30565b60405160208183030381529060405260029080519060200190612d30929190613373565b505050565b612d40838383612e23565b612d3057600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612db091613cd2565b60006040518083038185875af1925050503d8060008114612ded576040519150601f19603f3d011682016040523d82523d6000602084013e612df2565b606091505b5091509150612e0382826001612ef4565b5080806020019051810190612e189190613cee565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612e8291613cd2565b60006040518083038185875af1925050503d8060008114612ebf576040519150601f19603f3d011682016040523d82523d6000602084013e612ec4565b606091505b5091509150612ed582826002612ef4565b5080806020019051810190612eea9190613cee565b9695505050505050565b60608315612f0357508161061f565b825115612f135782518084602001fd5b60405163100960cb60e01b815260048101839052602401612682565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b604051806040016040528060008152602001612f956133f7565b905290565b6040805161014081019091528060008152602001612fc360408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001612ffd60408051602081019091526000815290565b81526000602082015260400161301e60408051602081019091526000815290565b81526020016000151581526020016130426040518060200160405280600081525090565b815260006020820152604001612f9560408051602081019091526000815290565b60408051610320810182526000610300820181815282528251606081018452818152602080820183905281850192909252908201529081016130a36132c6565b8152602001600081526020016130d2604080516060810182526000808252602082018190529181019190915290565b8152604080516060810182526000808252602082810182905292820152910190815260200161310c60408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016131596132c6565b8152602001600015158152602001600081526020016000815260200161319b604051806060016040528060008152602001600081526020016000151581525090565b81526020016131b560408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000151581526020016132206040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260200161327a60408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b604080516080810182526000918101828152606082019290925290815260208101612f9561340a565b60405180602001604052806001905b6132fb604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816132d55790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001612f956132c6565b82805461337f9061360f565b90600052602060002090601f0160209004810192826133a157600085556133e7565b82601f106133ba57805160ff19168380011785556133e7565b828001600101855582156133e7579182015b828111156133e75782518255916020019190600101906133cc565b506133f3929150613452565b5090565b6040518060200160405280612f95612f9a565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001612f956132c6565b5b808211156133f35760008155600101613453565b6001600160a01b038116811461347c57600080fd5b50565b60006020828403121561349157600080fd5b813561061f81613467565b634e487b7160e01b600052602160045260246000fd5b6002811061347c5761347c61349c565b815160608201906134d2816134b2565b808352506020830151151560208301526040830151604083015292915050565b60008060006060848603121561350757600080fd5b833561351281613467565b9250602084013561352281613467565b929592945050506040919091013590565b81516060820190613543816134b2565b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561357757600080fd5b50919050565b60006101a0828403121561357757600080fd5b60005b838110156135ab578181015183820152602001613593565b8381111561265f5750506000910152565b82815260406020820152600082518060408401526135e1816060850160208701613590565b601f01601f1916919091016060019392505050565b60006020828403121561360857600080fd5b5035919050565b600181811c9082168061362357607f821691505b6020821081141561357757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561367d5761367d613644565b60405290565b6040516060810167ffffffffffffffff8111828210171561367d5761367d613644565b6040805190810167ffffffffffffffff8111828210171561367d5761367d613644565b604051610140810167ffffffffffffffff8111828210171561367d5761367d613644565b80516107e681613467565b801515811461347c57600080fd5b80516107e6816136f8565b600082601f83011261372257600080fd5b61372a61365a565b8060608085018681111561373d57600080fd5b855b8181101561378e578281890312156137575760008081fd5b61375f613683565b815181526020808301518183015260408084015161377c816136f8565b9083015290865290940193820161373f565b50919695505050505050565b600061014082840312156137ad57600080fd5b604051610100810181811067ffffffffffffffff821117156137d1576137d1613644565b60405282516137df81613467565b81526137ed602084016136ed565b60208201526137fe604084016136ed565b60408201526060830151606082015261381960808401613706565b608082015260a083015160a082015260c083015160c082015261383f8460e08501613711565b60e08201529392505050565b80356107e6816136f8565b60006040828403121561386857600080fd5b6040516040810181811067ffffffffffffffff8211171561388b5761388b613644565b6040528235815260208301356138a0816136f8565b60208201529392505050565b8035600981106107e657600080fd5b6000602082840312156138cd57600080fd5b6138d561365a565b905081356138e281613467565b815292915050565b6000606082840312156138fc57600080fd5b613904613683565b9050813561391181613467565b8152602082013561392181613467565b806020830152506040820135604082015292915050565b60006020828403121561394a57600080fd5b61395261365a565b9135825250919050565b60008183036101a081121561397057600080fd5b6139786136a6565b8335815261018080601f198401121561399057600080fd5b61399861365a565b92506139a26136c9565b6139ae602087016138ac565b81526139bd87604088016138bb565b60208201526139cf87606088016138ea565b60408201526139e18760c088016138bb565b60608201526139f260e0870161384b565b6080820152610100613a06888289016138bb565b60a0830152610120613a1981890161384b565b60c0840152613a2c896101408a01613938565b60e0840152613a3e610160890161384b565b82840152613a4e89858a016138bb565b908301525083525060208101919091529392505050565b60098110613a7557613a7561349c565b9052565b60006101c08201905060018060a01b038416825282516020830152602083015151613aa8604084018251613a65565b602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e0850152506080810151610100613b168186018315159052565b60a08301519150610120613b3581870184516001600160a01b03169052565b60c0840151151561014087015260e0840151516101608701529083015115156101808601529091015180516001600160a01b03166101a08501529050509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615613bbf57613bbf613b8f565b500290565b600082613be157634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115613bf957613bf9613b8f565b500190565b600082821015613c1057613c10613b8f565b500390565b6000600019821415613c2957613c29613b8f565b5060010190565b60006101408201905060018060a01b0380845116835260208181860151168185015260408281870151168186015260609250828601518386015260808601511515608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6001811015613cc65782518051835285810151868401528401511515848301529184019190850190600101613c96565b50505050505092915050565b60008251613ce4818460208701613590565b9190910192915050565b600060208284031215613d0057600080fd5b815161061f816136f856fea2646970667358221220e87fade74a045832781e22391d08ae2dd7307be33291d5c0d49e99e7b4bd5c7764736f6c634300080c0033`,
  BytecodeLen: 17832,
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
    at: './index.rsh:302:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:102:72:after expr stmt semicolon',
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
  optIn: optIn,
  remWL: remWL
  };
