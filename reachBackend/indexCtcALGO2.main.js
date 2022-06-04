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
            const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = svs;
            return (await ((async (_v1214 ) => {
                const v1214 = stdlib.protect(ctc0, _v1214, null);
              
              const v1215 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1214), null);
              const v1216 = stdlib.fromSome(v1215, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1217 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1214), null);
              const v1218 = stdlib.fromSome(v1217, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1219 = [v1216, v1218];
              
              return v1219;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      saleLocked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = svs;
            return (await ((async () => {
              
              
              return v1204;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      totSTBTD: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = svs;
            return (await ((async () => {
              
              const v1213 = [v1206, v1205, v1203];
              
              return v1213;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      totSTBTDRec: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = svs;
            return (await ((async (_v1221 ) => {
                const v1221 = stdlib.protect(ctc0, _v1221, null);
              
              const v1222 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1221), null);
              const v1223 = stdlib.fromSome(v1222, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1224 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, v1221), null);
              const v1225 = stdlib.fromSome(v1224, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1226 = stdlib.protect(map5_ctc, await viewlib.viewMapRef(5, v1221), null);
              const v1227 = stdlib.fromSome(v1226, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
              const v1228 = [v1223, v1225, v1227];
              
              return v1228;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      wlMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = svs;
            return (await ((async (_v1230 ) => {
                const v1230 = stdlib.protect(ctc0, _v1230, null);
              
              const v1231 = stdlib.protect(map6_ctc, await viewlib.viewMapRef(6, v1230), null);
              let v1232;
              switch (v1231[0]) {
                case 'None': {
                  const v1233 = v1231[1];
                  v1232 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v1234 = v1231[1];
                  v1232 = true;
                  
                  break;
                  }
                }
              
              return v1232;}))(...args));
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
  
  
  const v1167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1168 = [v1167];
  const v1174 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:78:103:application',
    fs: ['at ./index.rsh:77:17:application call to [unknown function] (defined at: ./index.rsh:77:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1175 = v1174.authorizedST;
  const v1176 = v1174.bT;
  const v1177 = v1174.companyName;
  const v1178 = v1174.lockSale;
  const v1179 = v1174.managerAddr;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1177, v1178, v1179, v1176, v1175],
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
      
      const {data: [v1186, v1187, v1188, v1189, v1190], secs: v1192, time: v1191, didSend: v41, from: v1185 } = txn1;
      
      const v1193 = v1168[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0')];
      const v1195 = v1193[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '1')];
      const v1196 = v1193[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '2')];
      const v1197 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1195, v1196];
      const v1198 = stdlib.Array_set(v1168, stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0'), v1197);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1189
        });
      ;
      
      const v1202 = v1188;
      const v1203 = stdlib.checkedBigNumberify('./index.rsh:102:103:decimal', stdlib.UInt_max, '0');
      const v1204 = v1187;
      const v1205 = stdlib.checkedBigNumberify('./index.rsh:102:77:decimal', stdlib.UInt_max, '0');
      const v1206 = stdlib.checkedBigNumberify('./index.rsh:102:74:decimal', stdlib.UInt_max, '0');
      const v1207 = v1191;
      const v1209 = v1198;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1189
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
  const {data: [v1186, v1187, v1188, v1189, v1190], secs: v1192, time: v1191, didSend: v41, from: v1185 } = txn1;
  const v1193 = v1168[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0')];
  const v1195 = v1193[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '1')];
  const v1196 = v1193[stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '2')];
  const v1197 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1195, v1196];
  const v1198 = stdlib.Array_set(v1168, stdlib.checkedBigNumberify('./index.rsh:82:13:dot', stdlib.UInt_max, '0'), v1197);
  ;
  ;
  const v1201 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v1201), {
    at: './index.rsh:84:31:application',
    fs: ['at ./index.rsh:84:31:application call to [unknown function] (defined at: ./index.rsh:84:31:function exp)', 'at ./index.rsh:84:31:application call to "liftedInteract" (defined at: ./index.rsh:84:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v1202 = v1188;
  let v1203 = stdlib.checkedBigNumberify('./index.rsh:102:103:decimal', stdlib.UInt_max, '0');
  let v1204 = v1187;
  let v1205 = stdlib.checkedBigNumberify('./index.rsh:102:77:decimal', stdlib.UInt_max, '0');
  let v1206 = stdlib.checkedBigNumberify('./index.rsh:102:74:decimal', stdlib.UInt_max, '0');
  let v1207 = v1191;
  let v1209 = v1198;
  
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
        args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209],
        evt_cnt: 0,
        funcNum: 3,
        lct: v1207,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:299:21:decimal', stdlib.UInt_max, '0'), []],
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
          
          const {data: [], secs: v3912, time: v3911, didSend: v948, from: v3910 } = txn3;
          
          ;
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v3911;
          const cv1209 = v1209;
          
          await (async () => {
            const v1202 = cv1202;
            const v1203 = cv1203;
            const v1204 = cv1204;
            const v1205 = cv1205;
            const v1206 = cv1206;
            const v1207 = cv1207;
            const v1209 = cv1209;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1189
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
      const {data: [], secs: v3912, time: v3911, didSend: v948, from: v3910 } = txn3;
      ;
      const v3913 = stdlib.addressEq(v1185, v3910);
      stdlib.assert(v3913, {
        at: './index.rsh:299:21:dot',
        fs: ['at ./index.rsh:298:40:application call to [unknown function] (defined at: ./index.rsh:298:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv1202 = v1202;
      const cv1203 = v1203;
      const cv1204 = v1204;
      const cv1205 = v1205;
      const cv1206 = v1206;
      const cv1207 = v3911;
      const cv1209 = v1209;
      
      v1202 = cv1202;
      v1203 = cv1203;
      v1204 = cv1204;
      v1205 = cv1205;
      v1206 = cv1206;
      v1207 = cv1207;
      v1209 = cv1209;
      
      continue;
      }
    else {
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn2;
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v1564 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1565 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1569 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1570 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1571 = [v1565, v1569, v1570];
          const v1572 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1571);
          ;
          const v1574 = v1480[stdlib.checkedBigNumberify('./index.rsh:257:13:spread', stdlib.UInt_max, '0')];
          const v1575 = stdlib.addressEq(v1476, v1185);
          const v1576 = stdlib.addressEq(v1476, v1202);
          const v1577 = v1575 ? true : v1576;
          stdlib.assert(v1577, {
            at: './index.rsh:270:24:application',
            fs: ['at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1578 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1574), null);
          const v1579 = stdlib.fromSome(v1578, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1580 = stdlib.gt(v1579, stdlib.checkedBigNumberify('./index.rsh:272:71:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1580, {
            at: './index.rsh:272:24:application',
            fs: ['at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1476), null);
          const v1582 = stdlib.fromSome(v1581, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1583 = v1572[stdlib.checkedBigNumberify('./index.rsh:273:61:application', stdlib.UInt_max, '0')];
          const v1584 = v1583[stdlib.checkedBigNumberify('./index.rsh:273:61:application', stdlib.UInt_max, '0')];
          const v1585 = stdlib.mul(v1582, v1584);
          const v1586 = stdlib.div(v1585, v1206);
          const v1587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1574), null);
          const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1589 = stdlib.add(v1588, v1586);
          await stdlib.mapSet(map1, v1574, v1589);
          const v1590 = true;
          await txn2.getOutput('aBT', 'v1590', ctc6, v1590);
          const v1597 = stdlib.add(v1206, v1586);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1597;
          const cv1207 = v1478;
          const cv1209 = v1572;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v1834 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1835 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1839 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1840 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1841 = [v1835, v1839, v1840];
          const v1842 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1841);
          ;
          const v1870 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '0')];
          const v1871 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '1')];
          const v1872 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '2')];
          const v1873 = stdlib.addressEq(v1870, v1185);
          const v1874 = stdlib.addressEq(v1870, v1202);
          const v1875 = v1873 ? true : v1874;
          stdlib.assert(v1875, {
            at: './index.rsh:162:24:application',
            fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1876 = stdlib.gt(v1872, stdlib.checkedBigNumberify('./index.rsh:163:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v1876, {
            at: './index.rsh:163:24:application',
            fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v1871, null);
          const v1878 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1871), null);
          const v1879 = stdlib.fromSome(v1878, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1880 = stdlib.add(v1879, v1872);
          await stdlib.mapSet(map0, v1871, v1880);
          const v1881 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1871), null);
          const v1882 = stdlib.fromSome(v1881, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1883 = stdlib.add(v1882, v1872);
          await stdlib.mapSet(map3, v1871, v1883);
          const v1884 = true;
          await txn2.getOutput('aST', 'v1884', ctc6, v1884);
          const v1893 = stdlib.add(v1206, v1872);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1893;
          const cv1207 = v1478;
          const cv1209 = v1842;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v2104 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2105 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2109 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2110 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2111 = [v2105, v2109, v2110];
          const v2112 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2111);
          ;
          const v2166 = v2020[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          const v2167 = stdlib.addressEq(v1476, v1185);
          const v2168 = stdlib.addressEq(v1476, v1202);
          const v2169 = v2167 ? true : v2168;
          stdlib.assert(v2169, {
            at: './index.rsh:124:24:application',
            fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v2166, null);
          const v2171 = true;
          await txn2.getOutput('addWL', 'v2171', ctc6, v2171);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v2112;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v2374 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2375 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2379 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2380 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2381 = [v2375, v2379, v2380];
          const v2382 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2381);
          ;
          const v2450 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1476), null);
          let v2451;
          switch (v2450[0]) {
            case 'None': {
              const v2452 = v2450[1];
              v2451 = false;
              
              break;
              }
            case 'Some': {
              const v2453 = v2450[1];
              v2451 = true;
              
              break;
              }
            }
          stdlib.assert(v2451, {
            at: './index.rsh:244:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2454 = v2382[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2455 = v2454[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2456 = stdlib.gt(v2455, stdlib.checkedBigNumberify('./index.rsh:245:39:decimal', stdlib.UInt_max, '0'));
          const v2457 = stdlib.gt(v1206, stdlib.checkedBigNumberify('./index.rsh:245:52:decimal', stdlib.UInt_max, '0'));
          const v2458 = v2456 ? v2457 : false;
          const v2459 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1476), null);
          const v2460 = stdlib.fromSome(v2459, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2461 = stdlib.ge(v1206, v2460);
          const v2462 = v2458 ? v2461 : false;
          stdlib.assert(v2462, {
            at: './index.rsh:245:24:application',
            fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2467 = stdlib.mul(v2460, v2455);
          const v2468 = stdlib.div(v2467, v1206);
          const v2474 = stdlib.sub(v2455, v2468);
          const v2477 = v2454[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '1')];
          const v2478 = v2454[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '2')];
          const v2479 = [v2474, v2477, v2478];
          const v2480 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '0'), v2479);
          ;
          const v2481 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1476), null);
          const v2482 = stdlib.fromSome(v2481, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2483 = stdlib.add(v2482, v2468);
          await stdlib.mapSet(map4, v1476, v2483);
          await stdlib.mapSet(map5, v1476, v1203);
          const v2484 = true;
          await txn2.getOutput('cBT', 'v2484', ctc6, v2484);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v2480;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v2644 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2645 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2649 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2650 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2651 = [v2645, v2649, v2650];
          const v2652 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2651);
          ;
          const v2762 = v2560[stdlib.checkedBigNumberify('./index.rsh:281:13:spread', stdlib.UInt_max, '0')];
          const v2763 = stdlib.addressEq(v1476, v1185);
          const v2764 = stdlib.addressEq(v1476, v1202);
          const v2765 = v2763 ? true : v2764;
          stdlib.assert(v2765, {
            at: './index.rsh:292:24:application',
            fs: ['at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2766 = true;
          await txn2.getOutput('cCM', 'v2766', ctc6, v2766);
          const cv1202 = v2762;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v2652;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v2914 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2915 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2919 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2920 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2921 = [v2915, v2919, v2920];
          const v2922 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2921);
          ;
          const v3045 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1476), null);
          const v3046 = stdlib.fromSome(v3045, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v3047 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1476), null);
          let v3048;
          switch (v3047[0]) {
            case 'None': {
              const v3049 = v3047[1];
              v3048 = false;
              
              break;
              }
            case 'Some': {
              const v3050 = v3047[1];
              v3048 = true;
              
              break;
              }
            }
          stdlib.assert(v3048, {
            at: './index.rsh:188:24:application',
            fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3051 = stdlib.gt(v3046, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3051, {
            at: './index.rsh:189:24:application',
            fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3052 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1476), null);
          const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v3054 = stdlib.add(v3053, v3046);
          await stdlib.mapSet(map2, v1476, v3054);
          await stdlib.mapSet(map0, v1476, stdlib.checkedBigNumberify('./index.rsh:193:33:decimal', stdlib.UInt_max, '0'));
          const v3055 = true;
          await txn2.getOutput('cST', 'v3055', ctc6, v3055);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v2922;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          undefined /* setApiDetails */;
          const v3153 = v3100[stdlib.checkedBigNumberify('./index.rsh:213:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3184 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3185 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3186 = stdlib.add(v3185, v3153);
          const v3189 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3190 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3191 = [v3186, v3189, v3190];
          const v3192 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3191);
          ;
          const v3334 = stdlib.addressEq(v1476, v1185);
          const v3335 = stdlib.addressEq(v1476, v1202);
          const v3336 = v3334 ? true : v3335;
          stdlib.assert(v3336, {
            at: './index.rsh:225:24:application',
            fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3337 = stdlib.gt(v3153, stdlib.checkedBigNumberify('./index.rsh:226:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3337, {
            at: './index.rsh:226:24:application',
            fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3338 = true;
          await txn2.getOutput('dBT', 'v3338', ctc6, v3338);
          const v3345 = stdlib.add(v1205, v3153);
          const v3346 = stdlib.add(v1203, stdlib.checkedBigNumberify('./index.rsh:229:76:decimal', stdlib.UInt_max, '1'));
          const cv1202 = v1202;
          const cv1203 = v3346;
          const cv1204 = v1204;
          const cv1205 = v3345;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v3192;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v3454 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3455 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3459 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3460 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3461 = [v3455, v3459, v3460];
          const v3462 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3461);
          ;
          const v3619 = true;
          await txn2.getOutput('optIn', 'v3619', ctc6, v3619);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v3462;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
          continue;
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          undefined /* setApiDetails */;
          ;
          const v3724 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3725 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3729 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3730 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3731 = [v3725, v3729, v3730];
          const v3732 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3731);
          ;
          const v3897 = v3640[stdlib.checkedBigNumberify('./index.rsh:131:13:spread', stdlib.UInt_max, '0')];
          const v3898 = stdlib.addressEq(v1476, v1185);
          const v3899 = stdlib.addressEq(v1476, v1202);
          const v3900 = v3898 ? true : v3899;
          stdlib.assert(v3900, {
            at: './index.rsh:142:24:application',
            fs: ['at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          await stdlib.mapSet(map6, v3897, undefined /* Nothing */);
          const v3902 = true;
          await txn2.getOutput('remWL', 'v3902', ctc6, v3902);
          const cv1202 = v1202;
          const cv1203 = v1203;
          const cv1204 = v1204;
          const cv1205 = v1205;
          const cv1206 = v1206;
          const cv1207 = v1478;
          const cv1209 = v3732;
          
          v1202 = cv1202;
          v1203 = cv1203;
          v1204 = cv1204;
          v1205 = cv1205;
          v1206 = cv1206;
          v1207 = cv1207;
          v1209 = cv1209;
          
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1347 = ctc.selfAddress();
  const v1349 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:102:72:application call to "runaBT0_169" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'aBT'
    });
  const v1350 = v1349[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1353 = stdlib.addressEq(v1347, v1185);
  const v1354 = stdlib.addressEq(v1347, v1202);
  const v1355 = v1353 ? true : v1354;
  stdlib.assert(v1355, {
    at: './index.rsh:261:23:application',
    fs: ['at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:18:function exp)', 'at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:102:72:application call to "runaBT0_169" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1356 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1350), null);
  const v1357 = stdlib.fromSome(v1356, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
  const v1358 = stdlib.gt(v1357, stdlib.checkedBigNumberify('./index.rsh:264:46:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1358, {
    at: './index.rsh:264:23:application',
    fs: ['at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:18:function exp)', 'at ./index.rsh:260:13:application call to [unknown function] (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:102:72:application call to "runaBT0_169" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aBT'
    });
  const v1362 = ['aBT0_169', v1349];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1362],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:267:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:267:26:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aBT"
            });
          ;
          const v1564 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1565 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1569 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1570 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1571 = [v1565, v1569, v1570];
          const v1572 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1571);
          ;
          const v1574 = v1480[stdlib.checkedBigNumberify('./index.rsh:257:13:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1574), null);
          const v1581 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1476), null);
          const v1582 = stdlib.fromSome(v1581, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1583 = v1572[stdlib.checkedBigNumberify('./index.rsh:273:61:application', stdlib.UInt_max, '0')];
          const v1584 = v1583[stdlib.checkedBigNumberify('./index.rsh:273:61:application', stdlib.UInt_max, '0')];
          const v1585 = stdlib.mul(v1582, v1584);
          const v1586 = stdlib.div(v1585, v1206);
          const v1587 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1574), null);
          const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1589 = stdlib.add(v1588, v1586);
          await stdlib.simMapSet(sim_r, 1, v1574, v1589);
          const v1590 = true;
          const v1591 = await txn1.getOutput('aBT', 'v1590', ctc6, v1590);
          
          const v1597 = stdlib.add(v1206, v1586);
          const v6332 = v1202;
          const v6333 = v1203;
          const v6334 = v1204;
          const v6335 = v1205;
          const v6336 = v1597;
          const v6338 = v1572;
          sim_r.isHalt = false;
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v1564 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1565 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1569 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v1570 = v1564[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v1571 = [v1565, v1569, v1570];
      const v1572 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1571);
      ;
      const v1574 = v1480[stdlib.checkedBigNumberify('./index.rsh:257:13:spread', stdlib.UInt_max, '0')];
      const v1575 = stdlib.addressEq(v1476, v1185);
      const v1576 = stdlib.addressEq(v1476, v1202);
      const v1577 = v1575 ? true : v1576;
      stdlib.assert(v1577, {
        at: './index.rsh:270:24:application',
        fs: ['at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1578 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1574), null);
      const v1579 = stdlib.fromSome(v1578, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1580 = stdlib.gt(v1579, stdlib.checkedBigNumberify('./index.rsh:272:71:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1580, {
        at: './index.rsh:272:24:application',
        fs: ['at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)'],
        msg: null,
        who: 'aBT'
        });
      const v1581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1476), null);
      const v1582 = stdlib.fromSome(v1581, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1583 = v1572[stdlib.checkedBigNumberify('./index.rsh:273:61:application', stdlib.UInt_max, '0')];
      const v1584 = v1583[stdlib.checkedBigNumberify('./index.rsh:273:61:application', stdlib.UInt_max, '0')];
      const v1585 = stdlib.mul(v1582, v1584);
      const v1586 = stdlib.div(v1585, v1206);
      const v1587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1574), null);
      const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1589 = stdlib.add(v1588, v1586);
      await stdlib.mapSet(map1, v1574, v1589);
      const v1590 = true;
      const v1591 = await txn1.getOutput('aBT', 'v1590', ctc6, v1590);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v1480, v1591), {
          at: './index.rsh:258:13:application',
          fs: ['at ./index.rsh:258:13:application call to [unknown function] (defined at: ./index.rsh:258:13:function exp)', 'at ./index.rsh:277:20:application call to "res" (defined at: ./index.rsh:269:13:function exp)', 'at ./index.rsh:269:13:application call to [unknown function] (defined at: ./index.rsh:269:13:function exp)'],
          msg: 'out',
          who: 'aBT'
          });
        }
      else {
        }
      
      const v1597 = stdlib.add(v1206, v1586);
      const v6332 = v1202;
      const v6333 = v1203;
      const v6334 = v1204;
      const v6335 = v1205;
      const v6336 = v1597;
      const v6338 = v1572;
      return;
      
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1269 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:102:72:application call to "runaST0_169" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'aST'
    });
  const v1270 = v1269[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1272 = v1269[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1277 = stdlib.addressEq(v1270, v1185);
  const v1278 = stdlib.addressEq(v1270, v1202);
  const v1279 = v1277 ? true : v1278;
  stdlib.assert(v1279, {
    at: './index.rsh:154:23:application',
    fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:29:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:102:72:application call to "runaST0_169" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1280 = stdlib.gt(v1272, stdlib.checkedBigNumberify('./index.rsh:155:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1280, {
    at: './index.rsh:155:23:application',
    fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:29:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:102:72:application call to "runaST0_169" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'aST'
    });
  const v1286 = ['aST0_169', v1269];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1286],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:159:30:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:159:34:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "aST"
            });
          ;
          const v1834 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1835 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v1839 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v1840 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v1841 = [v1835, v1839, v1840];
          const v1842 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1841);
          ;
          const v1871 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '1')];
          const v1872 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '2')];
          await stdlib.simMapSet(sim_r, 6, v1871, null);
          const v1878 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1871), null);
          const v1879 = stdlib.fromSome(v1878, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1880 = stdlib.add(v1879, v1872);
          await stdlib.simMapSet(sim_r, 0, v1871, v1880);
          const v1881 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1871), null);
          const v1882 = stdlib.fromSome(v1881, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v1883 = stdlib.add(v1882, v1872);
          await stdlib.simMapSet(sim_r, 3, v1871, v1883);
          const v1884 = true;
          const v1885 = await txn1.getOutput('aST', 'v1884', ctc6, v1884);
          
          const v1893 = stdlib.add(v1206, v1872);
          const v6402 = v1202;
          const v6403 = v1203;
          const v6404 = v1204;
          const v6405 = v1205;
          const v6406 = v1893;
          const v6408 = v1842;
          sim_r.isHalt = false;
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v1834 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1835 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v1839 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v1840 = v1834[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v1841 = [v1835, v1839, v1840];
      const v1842 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v1841);
      ;
      const v1870 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '0')];
      const v1871 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '1')];
      const v1872 = v1750[stdlib.checkedBigNumberify('./index.rsh:150:13:spread', stdlib.UInt_max, '2')];
      const v1873 = stdlib.addressEq(v1870, v1185);
      const v1874 = stdlib.addressEq(v1870, v1202);
      const v1875 = v1873 ? true : v1874;
      stdlib.assert(v1875, {
        at: './index.rsh:162:24:application',
        fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      const v1876 = stdlib.gt(v1872, stdlib.checkedBigNumberify('./index.rsh:163:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1876, {
        at: './index.rsh:163:24:application',
        fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
        msg: null,
        who: 'aST'
        });
      await stdlib.mapSet(map6, v1871, null);
      const v1878 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1871), null);
      const v1879 = stdlib.fromSome(v1878, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1880 = stdlib.add(v1879, v1872);
      await stdlib.mapSet(map0, v1871, v1880);
      const v1881 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1871), null);
      const v1882 = stdlib.fromSome(v1881, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v1883 = stdlib.add(v1882, v1872);
      await stdlib.mapSet(map3, v1871, v1883);
      const v1884 = true;
      const v1885 = await txn1.getOutput('aST', 'v1884', ctc6, v1884);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v1750, v1885), {
          at: './index.rsh:151:13:application',
          fs: ['at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:13:function exp)', 'at ./index.rsh:170:20:application call to "res" (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)'],
          msg: 'out',
          who: 'aST'
          });
        }
      else {
        }
      
      const v1893 = stdlib.add(v1206, v1872);
      const v6402 = v1202;
      const v6403 = v1203;
      const v6404 = v1204;
      const v6405 = v1205;
      const v6406 = v1893;
      const v6408 = v1842;
      return;
      
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1239 = ctc.selfAddress();
  const v1241 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:102:72:application call to "runaddWL0_169" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'addWL'
    });
  const v1245 = stdlib.addressEq(v1239, v1185);
  const v1246 = stdlib.addressEq(v1239, v1202);
  const v1247 = v1245 ? true : v1246;
  stdlib.assert(v1247, {
    at: './index.rsh:117:23:application',
    fs: ['at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:18:function exp)', 'at ./index.rsh:116:13:application call to [unknown function] (defined at: ./index.rsh:116:13:function exp)', 'at ./index.rsh:102:72:application call to "runaddWL0_169" (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'addWL'
    });
  const v1251 = ['addWL0_169', v1241];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1251],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:121:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:121:26:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addWL"
            });
          ;
          const v2104 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2105 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2109 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2110 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2111 = [v2105, v2109, v2110];
          const v2112 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2111);
          ;
          const v2166 = v2020[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v2166, null);
          const v2171 = true;
          const v2172 = await txn1.getOutput('addWL', 'v2171', ctc6, v2171);
          
          const v6472 = v1202;
          const v6473 = v1203;
          const v6474 = v1204;
          const v6475 = v1205;
          const v6476 = v1206;
          const v6478 = v2112;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v2104 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2105 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2109 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2110 = v2104[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2111 = [v2105, v2109, v2110];
      const v2112 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2111);
      ;
      const v2166 = v2020[stdlib.checkedBigNumberify('./index.rsh:113:13:spread', stdlib.UInt_max, '0')];
      const v2167 = stdlib.addressEq(v1476, v1185);
      const v2168 = stdlib.addressEq(v1476, v1202);
      const v2169 = v2167 ? true : v2168;
      stdlib.assert(v2169, {
        at: './index.rsh:124:24:application',
        fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: null,
        who: 'addWL'
        });
      await stdlib.mapSet(map6, v2166, null);
      const v2171 = true;
      const v2172 = await txn1.getOutput('addWL', 'v2171', ctc6, v2171);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v2020, v2172), {
          at: './index.rsh:114:13:application',
          fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:13:function exp)', 'at ./index.rsh:127:20:application call to "res" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'out',
          who: 'addWL'
          });
        }
      else {
        }
      
      const v6472 = v1202;
      const v6473 = v1203;
      const v6474 = v1204;
      const v6475 = v1205;
      const v6476 = v1206;
      const v6478 = v2112;
      return;
      
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1326 = ctc.selfAddress();
  const v1328 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:102:72:application call to "runcBT0_169" (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'cBT'
    });
  const v1330 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1326), null);
  let v1331;
  switch (v1330[0]) {
    case 'None': {
      const v1332 = v1330[1];
      v1331 = false;
      
      break;
      }
    case 'Some': {
      const v1333 = v1330[1];
      v1331 = true;
      
      break;
      }
    }
  stdlib.assert(v1331, {
    at: './index.rsh:237:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:102:72:application call to "runcBT0_169" (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1334 = v1209[stdlib.checkedBigNumberify('./index.rsh:238:31:application', stdlib.UInt_max, '0')];
  const v1335 = v1334[stdlib.checkedBigNumberify('./index.rsh:238:31:application', stdlib.UInt_max, '0')];
  const v1336 = stdlib.gt(v1335, stdlib.checkedBigNumberify('./index.rsh:238:38:decimal', stdlib.UInt_max, '0'));
  const v1337 = stdlib.gt(v1206, stdlib.checkedBigNumberify('./index.rsh:238:51:decimal', stdlib.UInt_max, '0'));
  const v1338 = v1336 ? v1337 : false;
  const v1339 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1326), null);
  const v1340 = stdlib.fromSome(v1339, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
  const v1341 = stdlib.ge(v1206, v1340);
  const v1342 = v1338 ? v1341 : false;
  stdlib.assert(v1342, {
    at: './index.rsh:238:23:application',
    fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:17:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:102:72:application call to "runcBT0_169" (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cBT'
    });
  const v1345 = ['cBT0_169', v1328];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1345],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:241:25:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cBT"
            });
          ;
          const v2374 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2375 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2379 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2380 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2381 = [v2375, v2379, v2380];
          const v2382 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2381);
          ;
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1476), null);
          const v2454 = v2382[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2455 = v2454[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
          const v2459 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1476), null);
          const v2460 = stdlib.fromSome(v2459, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2467 = stdlib.mul(v2460, v2455);
          const v2468 = stdlib.div(v2467, v1206);
          const v2474 = stdlib.sub(v2455, v2468);
          const v2477 = v2454[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '1')];
          const v2478 = v2454[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '2')];
          const v2479 = [v2474, v2477, v2478];
          const v2480 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '0'), v2479);
          sim_r.txns.push({
            amt: v2468,
            kind: 'from',
            to: v1476,
            tok: v1189
            });
          const v2481 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1476), null);
          const v2482 = stdlib.fromSome(v2481, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v2483 = stdlib.add(v2482, v2468);
          await stdlib.simMapSet(sim_r, 4, v1476, v2483);
          await stdlib.simMapSet(sim_r, 5, v1476, v1203);
          const v2484 = true;
          const v2485 = await txn1.getOutput('cBT', 'v2484', ctc6, v2484);
          
          const v6542 = v1202;
          const v6543 = v1203;
          const v6544 = v1204;
          const v6545 = v1205;
          const v6546 = v1206;
          const v6548 = v2480;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v2374 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2375 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2379 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2380 = v2374[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2381 = [v2375, v2379, v2380];
      const v2382 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2381);
      ;
      const v2450 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1476), null);
      let v2451;
      switch (v2450[0]) {
        case 'None': {
          const v2452 = v2450[1];
          v2451 = false;
          
          break;
          }
        case 'Some': {
          const v2453 = v2450[1];
          v2451 = true;
          
          break;
          }
        }
      stdlib.assert(v2451, {
        at: './index.rsh:244:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2454 = v2382[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
      const v2455 = v2454[stdlib.checkedBigNumberify('./index.rsh:245:32:application', stdlib.UInt_max, '0')];
      const v2456 = stdlib.gt(v2455, stdlib.checkedBigNumberify('./index.rsh:245:39:decimal', stdlib.UInt_max, '0'));
      const v2457 = stdlib.gt(v1206, stdlib.checkedBigNumberify('./index.rsh:245:52:decimal', stdlib.UInt_max, '0'));
      const v2458 = v2456 ? v2457 : false;
      const v2459 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1476), null);
      const v2460 = stdlib.fromSome(v2459, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v2461 = stdlib.ge(v1206, v2460);
      const v2462 = v2458 ? v2461 : false;
      stdlib.assert(v2462, {
        at: './index.rsh:245:24:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: null,
        who: 'cBT'
        });
      const v2467 = stdlib.mul(v2460, v2455);
      const v2468 = stdlib.div(v2467, v1206);
      const v2474 = stdlib.sub(v2455, v2468);
      const v2477 = v2454[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '1')];
      const v2478 = v2454[stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '2')];
      const v2479 = [v2474, v2477, v2478];
      const v2480 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./index.rsh:248:44:application', stdlib.UInt_max, '0'), v2479);
      ;
      const v2481 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1476), null);
      const v2482 = stdlib.fromSome(v2481, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v2483 = stdlib.add(v2482, v2468);
      await stdlib.mapSet(map4, v1476, v2483);
      await stdlib.mapSet(map5, v1476, v1203);
      const v2484 = true;
      const v2485 = await txn1.getOutput('cBT', 'v2484', ctc6, v2484);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v2290, v2485), {
          at: './index.rsh:233:13:application',
          fs: ['at ./index.rsh:233:13:application call to [unknown function] (defined at: ./index.rsh:233:13:function exp)', 'at ./index.rsh:252:20:application call to "res" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'out',
          who: 'cBT'
          });
        }
      else {
        }
      
      const v6542 = v1202;
      const v6543 = v1203;
      const v6544 = v1204;
      const v6545 = v1205;
      const v6546 = v1206;
      const v6548 = v2480;
      return;
      
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1364 = ctc.selfAddress();
  const v1366 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:284:13:application call to [unknown function] (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:102:72:application call to "runcCM0_169" (defined at: ./index.rsh:281:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1370 = stdlib.addressEq(v1364, v1185);
  const v1371 = stdlib.addressEq(v1364, v1202);
  const v1372 = v1370 ? true : v1371;
  stdlib.assert(v1372, {
    at: './index.rsh:285:23:application',
    fs: ['at ./index.rsh:284:13:application call to [unknown function] (defined at: ./index.rsh:284:21:function exp)', 'at ./index.rsh:284:13:application call to [unknown function] (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:102:72:application call to "runcCM0_169" (defined at: ./index.rsh:281:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1376 = ['cCM0_169', v1366];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1376],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:289:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:289:26:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v2644 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2645 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2649 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2650 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2651 = [v2645, v2649, v2650];
          const v2652 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2651);
          ;
          const v2762 = v2560[stdlib.checkedBigNumberify('./index.rsh:281:13:spread', stdlib.UInt_max, '0')];
          const v2766 = true;
          const v2767 = await txn1.getOutput('cCM', 'v2766', ctc6, v2766);
          
          const v6612 = v2762;
          const v6613 = v1203;
          const v6614 = v1204;
          const v6615 = v1205;
          const v6616 = v1206;
          const v6618 = v2652;
          sim_r.isHalt = false;
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v2644 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2645 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2649 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2650 = v2644[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2651 = [v2645, v2649, v2650];
      const v2652 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2651);
      ;
      const v2762 = v2560[stdlib.checkedBigNumberify('./index.rsh:281:13:spread', stdlib.UInt_max, '0')];
      const v2763 = stdlib.addressEq(v1476, v1185);
      const v2764 = stdlib.addressEq(v1476, v1202);
      const v2765 = v2763 ? true : v2764;
      stdlib.assert(v2765, {
        at: './index.rsh:292:24:application',
        fs: ['at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v2766 = true;
      const v2767 = await txn1.getOutput('cCM', 'v2766', ctc6, v2766);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v2560, v2767), {
          at: './index.rsh:282:13:application',
          fs: ['at ./index.rsh:282:13:application call to [unknown function] (defined at: ./index.rsh:282:13:function exp)', 'at ./index.rsh:294:20:application call to "res" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:291:13:application call to [unknown function] (defined at: ./index.rsh:291:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v6612 = v2762;
      const v6613 = v1203;
      const v6614 = v1204;
      const v6615 = v1205;
      const v6616 = v1206;
      const v6618 = v2652;
      return;
      
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1288 = ctc.selfAddress();
  const v1290 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:102:72:application call to "runcST0_169" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'cST'
    });
  const v1292 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1288), null);
  const v1293 = stdlib.fromSome(v1292, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
  const v1294 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1288), null);
  let v1295;
  switch (v1294[0]) {
    case 'None': {
      const v1296 = v1294[1];
      v1295 = false;
      
      break;
      }
    case 'Some': {
      const v1297 = v1294[1];
      v1295 = true;
      
      break;
      }
    }
  stdlib.assert(v1295, {
    at: './index.rsh:180:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:102:72:application call to "runcST0_169" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1298 = stdlib.gt(v1293, stdlib.checkedBigNumberify('./index.rsh:181:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1298, {
    at: './index.rsh:181:23:application',
    fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:102:72:application call to "runcST0_169" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'cST'
    });
  const v1301 = ['cST0_169', v1290];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1301],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:184:25:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cST"
            });
          ;
          const v2914 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2915 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v2919 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v2920 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v2921 = [v2915, v2919, v2920];
          const v2922 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2921);
          ;
          const v3045 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1476), null);
          const v3046 = stdlib.fromSome(v3045, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          stdlib.protect(map6_ctc, await stdlib.simMapRef(sim_r, 6, v1476), null);
          const v3052 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1476), null);
          const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
          const v3054 = stdlib.add(v3053, v3046);
          await stdlib.simMapSet(sim_r, 2, v1476, v3054);
          await stdlib.simMapSet(sim_r, 0, v1476, stdlib.checkedBigNumberify('./index.rsh:193:33:decimal', stdlib.UInt_max, '0'));
          const v3055 = true;
          const v3056 = await txn1.getOutput('cST', 'v3055', ctc6, v3055);
          
          const v6682 = v1202;
          const v6683 = v1203;
          const v6684 = v1204;
          const v6685 = v1205;
          const v6686 = v1206;
          const v6688 = v2922;
          sim_r.isHalt = false;
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v2914 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2915 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v2919 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v2920 = v2914[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v2921 = [v2915, v2919, v2920];
      const v2922 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v2921);
      ;
      const v3045 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1476), null);
      const v3046 = stdlib.fromSome(v3045, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v3047 = stdlib.protect(map6_ctc, await stdlib.mapRef(map6, v1476), null);
      let v3048;
      switch (v3047[0]) {
        case 'None': {
          const v3049 = v3047[1];
          v3048 = false;
          
          break;
          }
        case 'Some': {
          const v3050 = v3047[1];
          v3048 = true;
          
          break;
          }
        }
      stdlib.assert(v3048, {
        at: './index.rsh:188:24:application',
        fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3051 = stdlib.gt(v3046, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3051, {
        at: './index.rsh:189:24:application',
        fs: ['at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: null,
        who: 'cST'
        });
      const v3052 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1476), null);
      const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:88:39:decimal', stdlib.UInt_max, '0'));
      const v3054 = stdlib.add(v3053, v3046);
      await stdlib.mapSet(map2, v1476, v3054);
      await stdlib.mapSet(map0, v1476, stdlib.checkedBigNumberify('./index.rsh:193:33:decimal', stdlib.UInt_max, '0'));
      const v3055 = true;
      const v3056 = await txn1.getOutput('cST', 'v3055', ctc6, v3055);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v2830, v3056), {
          at: './index.rsh:176:13:application',
          fs: ['at ./index.rsh:176:13:application call to [unknown function] (defined at: ./index.rsh:176:13:function exp)', 'at ./index.rsh:194:20:application call to "res" (defined at: ./index.rsh:186:13:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
          msg: 'out',
          who: 'cST'
          });
        }
      else {
        }
      
      const v6682 = v1202;
      const v6683 = v1203;
      const v6684 = v1204;
      const v6685 = v1205;
      const v6686 = v1206;
      const v6688 = v2922;
      return;
      
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1311 = ctc.selfAddress();
  const v1313 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'dBT'
    });
  const v1314 = v1313[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1317 = stdlib.addressEq(v1311, v1185);
  const v1318 = stdlib.addressEq(v1311, v1202);
  const v1319 = v1317 ? true : v1318;
  stdlib.assert(v1319, {
    at: './index.rsh:217:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1320 = stdlib.gt(v1314, stdlib.checkedBigNumberify('./index.rsh:218:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1320, {
    at: './index.rsh:218:23:application',
    fs: ['at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:20:function exp)', 'at ./index.rsh:216:13:application call to [unknown function] (defined at: ./index.rsh:216:13:function exp)', 'at ./index.rsh:102:72:application call to "rundBT0_169" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'dBT'
    });
  const v1324 = ['dBT0_169', v1313];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1324],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:222:24:decimal', stdlib.UInt_max, '0'), [[v1314, v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "dBT"
            });
          const v3153 = v3100[stdlib.checkedBigNumberify('./index.rsh:213:13:spread', stdlib.UInt_max, '0')];
          ;
          const v3184 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3185 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3186 = stdlib.add(v3185, v3153);
          const v3189 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3190 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3191 = [v3186, v3189, v3190];
          const v3192 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3191);
          sim_r.txns.push({
            amt: v3153,
            kind: 'to',
            tok: v1189
            });
          const v3338 = true;
          const v3339 = await txn1.getOutput('dBT', 'v3338', ctc6, v3338);
          
          const v3345 = stdlib.add(v1205, v3153);
          const v3346 = stdlib.add(v1203, stdlib.checkedBigNumberify('./index.rsh:229:76:decimal', stdlib.UInt_max, '1'));
          const v6752 = v1202;
          const v6753 = v3346;
          const v6754 = v1204;
          const v6755 = v3345;
          const v6756 = v1206;
          const v6758 = v3192;
          sim_r.isHalt = false;
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      undefined /* setApiDetails */;
      const v3153 = v3100[stdlib.checkedBigNumberify('./index.rsh:213:13:spread', stdlib.UInt_max, '0')];
      ;
      const v3184 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3185 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3186 = stdlib.add(v3185, v3153);
      const v3189 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v3190 = v3184[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v3191 = [v3186, v3189, v3190];
      const v3192 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3191);
      ;
      const v3334 = stdlib.addressEq(v1476, v1185);
      const v3335 = stdlib.addressEq(v1476, v1202);
      const v3336 = v3334 ? true : v3335;
      stdlib.assert(v3336, {
        at: './index.rsh:225:24:application',
        fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3337 = stdlib.gt(v3153, stdlib.checkedBigNumberify('./index.rsh:226:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3337, {
        at: './index.rsh:226:24:application',
        fs: ['at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: null,
        who: 'dBT'
        });
      const v3338 = true;
      const v3339 = await txn1.getOutput('dBT', 'v3338', ctc6, v3338);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v3100, v3339), {
          at: './index.rsh:214:13:application',
          fs: ['at ./index.rsh:214:13:application call to [unknown function] (defined at: ./index.rsh:214:13:function exp)', 'at ./index.rsh:228:20:application call to "res" (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'out',
          who: 'dBT'
          });
        }
      else {
        }
      
      const v3345 = stdlib.add(v1205, v3153);
      const v3346 = stdlib.add(v1203, stdlib.checkedBigNumberify('./index.rsh:229:76:decimal', stdlib.UInt_max, '1'));
      const v6752 = v1202;
      const v6753 = v3346;
      const v6754 = v1204;
      const v6755 = v3345;
      const v6756 = v1206;
      const v6758 = v3192;
      return;
      
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1305 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:102:72:application call to "runoptIn0_169" (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'optIn'
    });
  const v1309 = ['optIn0_169', v1305];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1309],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:206:25:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "optIn"
            });
          ;
          const v3454 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3455 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3459 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3460 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3461 = [v3455, v3459, v3460];
          const v3462 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3461);
          ;
          const v3619 = true;
          const v3620 = await txn1.getOutput('optIn', 'v3619', ctc6, v3619);
          
          const v6822 = v1202;
          const v6823 = v1203;
          const v6824 = v1204;
          const v6825 = v1205;
          const v6826 = v1206;
          const v6828 = v3462;
          sim_r.isHalt = false;
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v3454 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3455 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3459 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v3460 = v3454[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v3461 = [v3455, v3459, v3460];
      const v3462 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3461);
      ;
      const v3619 = true;
      const v3620 = await txn1.getOutput('optIn', 'v3619', ctc6, v3619);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v3370, v3620), {
          at: './index.rsh:200:13:application',
          fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:209:20:application call to "res" (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
          msg: 'out',
          who: 'optIn'
          });
        }
      else {
        }
      
      const v6822 = v1202;
      const v6823 = v1203;
      const v6824 = v1204;
      const v6825 = v1205;
      const v6826 = v1206;
      const v6828 = v3462;
      return;
      
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
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
  
  
  const [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc4, ctc1, ctc6, ctc1, ctc1, ctc8]);
  const v1253 = ctc.selfAddress();
  const v1255 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:102:72:application call to "runremWL0_169" (defined at: ./index.rsh:131:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: 'in',
    who: 'remWL'
    });
  const v1259 = stdlib.addressEq(v1253, v1185);
  const v1260 = stdlib.addressEq(v1253, v1202);
  const v1261 = v1259 ? true : v1260;
  stdlib.assert(v1261, {
    at: './index.rsh:135:23:application',
    fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:18:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:102:72:application call to "runremWL0_169" (defined at: ./index.rsh:131:13:function exp)', 'at ./index.rsh:102:72:application call to [unknown function] (defined at: ./index.rsh:102:72:function exp)'],
    msg: null,
    who: 'remWL'
    });
  const v1265 = ['remWL0_169', v1255];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1185, v1189, v1202, v1203, v1204, v1205, v1206, v1209, v1265],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:139:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:139:26:decimal', stdlib.UInt_max, '0'), v1189]]],
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
      
      const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
      
      switch (v1477[0]) {
        case 'aBT0_169': {
          const v1480 = v1477[1];
          
          break;
          }
        case 'aST0_169': {
          const v1750 = v1477[1];
          
          break;
          }
        case 'addWL0_169': {
          const v2020 = v1477[1];
          
          break;
          }
        case 'cBT0_169': {
          const v2290 = v1477[1];
          
          break;
          }
        case 'cCM0_169': {
          const v2560 = v1477[1];
          
          break;
          }
        case 'cST0_169': {
          const v2830 = v1477[1];
          
          break;
          }
        case 'dBT0_169': {
          const v3100 = v1477[1];
          
          break;
          }
        case 'optIn0_169': {
          const v3370 = v1477[1];
          
          break;
          }
        case 'remWL0_169': {
          const v3640 = v1477[1];
          sim_r.txns.push({
            kind: 'api',
            who: "remWL"
            });
          ;
          const v3724 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3725 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
          const v3729 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
          const v3730 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
          const v3731 = [v3725, v3729, v3730];
          const v3732 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3731);
          ;
          const v3897 = v3640[stdlib.checkedBigNumberify('./index.rsh:131:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 6, v3897, undefined /* Nothing */);
          const v3902 = true;
          const v3903 = await txn1.getOutput('remWL', 'v3902', ctc6, v3902);
          
          const v6892 = v1202;
          const v6893 = v1203;
          const v6894 = v1204;
          const v6895 = v1205;
          const v6896 = v1206;
          const v6898 = v3732;
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
  const {data: [v1477], secs: v1479, time: v1478, didSend: v730, from: v1476 } = txn1;
  switch (v1477[0]) {
    case 'aBT0_169': {
      const v1480 = v1477[1];
      return;
      break;
      }
    case 'aST0_169': {
      const v1750 = v1477[1];
      return;
      break;
      }
    case 'addWL0_169': {
      const v2020 = v1477[1];
      return;
      break;
      }
    case 'cBT0_169': {
      const v2290 = v1477[1];
      return;
      break;
      }
    case 'cCM0_169': {
      const v2560 = v1477[1];
      return;
      break;
      }
    case 'cST0_169': {
      const v2830 = v1477[1];
      return;
      break;
      }
    case 'dBT0_169': {
      const v3100 = v1477[1];
      return;
      break;
      }
    case 'optIn0_169': {
      const v3370 = v1477[1];
      return;
      break;
      }
    case 'remWL0_169': {
      const v3640 = v1477[1];
      undefined /* setApiDetails */;
      ;
      const v3724 = v1209[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3725 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0')];
      const v3729 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '1')];
      const v3730 = v3724[stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '2')];
      const v3731 = [v3725, v3729, v3730];
      const v3732 = stdlib.Array_set(v1209, stdlib.checkedBigNumberify('./index.rsh:102:72:dot', stdlib.UInt_max, '0'), v3731);
      ;
      const v3897 = v3640[stdlib.checkedBigNumberify('./index.rsh:131:13:spread', stdlib.UInt_max, '0')];
      const v3898 = stdlib.addressEq(v1476, v1185);
      const v3899 = stdlib.addressEq(v1476, v1202);
      const v3900 = v3898 ? true : v3899;
      stdlib.assert(v3900, {
        at: './index.rsh:142:24:application',
        fs: ['at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)'],
        msg: null,
        who: 'remWL'
        });
      await stdlib.mapSet(map6, v3897, undefined /* Nothing */);
      const v3902 = true;
      const v3903 = await txn1.getOutput('remWL', 'v3902', ctc6, v3902);
      if (v730) {
        stdlib.protect(ctc0, await interact.out(v3640, v3903), {
          at: './index.rsh:132:13:application',
          fs: ['at ./index.rsh:132:13:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)', 'at ./index.rsh:145:20:application call to "res" (defined at: ./index.rsh:141:13:function exp)', 'at ./index.rsh:141:13:application call to [unknown function] (defined at: ./index.rsh:141:13:function exp)'],
          msg: 'out',
          who: 'remWL'
          });
        }
      else {
        }
      
      const v6892 = v1202;
      const v6893 = v1203;
      const v6894 = v1204;
      const v6895 = v1205;
      const v6896 = v1206;
      const v6898 = v3732;
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
  appApproval: `BiAeAAEDSAgoBDY33dHhmAnbqqjUDN3u0KAO2I6Z4A5AtNy1rA3r5oTTCbCC37AMnPiDiAK8rcerCM3F1YcJ+YSKkQX5rvSVAbCd490BAv///////////wEgUVkFoI0GJgMBAAEBACI1ADEYQQlzKmRJIls1ASEEWzUCMRkjEkEACjEAKCEIr2ZCCT82GgAXSUECFyI1BCM1BkkhCQxAARlJIQoMQACqSSELDEAAM0khDAxAABYhDBJENhoBNf+AAQg0/1AhBa9QQgJUIQsSRDYaATX/gAEGNP9QIQ2vUEICPkkhDgxAAFEhDhJENAEkEkQ2GgE1/yI0/4gI7lcSCUk1/iNbNP4iVU0WIjT/iAjaVyQJSTX+I1s0/iJVTRZQIjT/iAjFVy0JSTX+I1s0/iJVTRZQNQdCCKAhChJENhoBNhoCUDYaA1A1/yk0/1BCAc5JIQ8MQAAwSSEQDEAAFiEQEkQ0ASQSRChkSTUDV1ABNQdCCGQhDxJEKjX/gAEDNP9QJa9QQgGXIQkSRDQBJBJENhoBiAhTVzYBSTX+IlVAAAYiNf9CAAYjNf9CAAA0/xZRBwg1B0IIIEkhEQxAAHZJIRIMQAA/SSETDEAAIiETEkQ0ASQSRChkSTUDV1kINANXUQhQNANXSAhQNQdCB+khEhJENhoBNf+AAQI0/1AhBa9QQgEZSSEUDEAAEyEUEkQqNf+AAQc0/1Alr1BCAP8hERJENhoBNf+AAQQ0/1AhBa9QQgDpSSEVDEAAVkkhFgxAABMhFhJEKjX/gAEFNP9QJa9QQgDIIRUSRDQBJBJENhoBNf8iNP+IB39XAAlJNf4jWzT+IlVNFiI0/4gHa1cJCUk1/iNbNP4iVU0WUDUHQgdGgd/2hgsSRDYaATX/KDT/UCEFr1BCAHU2GgIXNQQ2GgM2GgEXSSEXDEAF+EkkDEAAWiQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASnZcS0sDIGIRgPRDT/MQASRDT/NAMhGVs0A1coIDQDJVs0A1dQARc0AyEaWzQDIRtbMgY0A1dhEUIGMUgkNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hGVs1/lcoIDX9JVs1/FdQARc1+yEaWzX6IRtbNflXYRE1+Ek1BTX3gASYxPezNPdQsDIGIRgMRDT3IlVJIQYMQAIsSYEGDEABD0mBBwxAAKFJIQQMQABfIQQSRDT3VwEgNfY0+FcAETX1MQA0/xIxADT9EhFENPYoNPaIBi8iIQdMVmaACQAAAAAAAA8+AbApNQc0/zT+NP00/DT7NPo0+TIGNPVXAAg09VcICFA09VcQAVBCBVtINPhXABE19oAJAAAAAAAADiMBsCk1BzT/NP40/TT8NPs0+jT5MgY09lcACDT2VwgIUDT2VxABUEIFIEg091cBCDX2NPYXNfU0+FcAETX0NPU0/ogFxzEANP8SMQA0/RIRRDT1Ig1EgAkAAAAAAAANCgGwKTUHNP80/jT9NPwjCDT7NPo09Qg0+TIGNPQiWzT1CBY09FcICFA09FcQAVBCBLlJIRwMQADBSDT4VwARNfYiMQCIBT9XAAlJNfQjWzT0IlVNNfUxAIgFK1c2AUk18yJVQAAGIjX0QgAGIzX0QgAANPRENPUiDUQxACgxAIgFBCkiMQCIBP1XEglJNfMjWzTzIlVNNPUIFlA180lXABI081BMVxscUGYxACgxAIgE1IAJAQAAAAAAAAAANfNXCS4080xQZoAJAAAAAAAAC+8BsCk1BzT/NP40/TT8NPs0+jT5MgY09lcACDT2VwgIUDT2VxABUEID8Ug091cBIDX2NPhXABE19TEANP8SMQA0/RIRRIAJAAAAAAAACs4BsCk1BzT/NP409jT8NPs0+jT5MgY09VcACDT1VwgIUDT1VxABUEIDo0khFwxAAWtJJAxAAQlINPhXABFJNfZXAAg09lcICFA09lcQAVA19TEAiAQSVzYBSTXzIlVAAAYiNfRCAAYjNfRCAAA09EQ09VcAEUk18yJbNfIiMQCIA+ZXGwlJNfAjWzTwIlVNNfE08iINNPkiDRA0+TTxDxBENPE08gs0+Qo18LEisgE08LISIQayEDEAshQ0/rIRszEAKDEAiAOgKSIxAIgDmVckCUk17yNbNO8iVU008AgWUDXvSVcAJDTvUExXLQpQZjEAKDEAiANwKTT8FlA170lXAC0071BMVzYBUGaACQAAAAAAAAm0AbApNQc0/zT+NP00/DT7NPo0+TIGNPI08AkWNPNXCAhQNPNXEAFQQgKNSDT3VwEgNfY0+FcAETX1MQA0/xIxADT9EhFENPYoNPaIAwUjIQdMVmaACQAAAAAAAAh7AbApNQc0/zT+NP00/DT7NPo0+TIGNPVXAAg09VcICFA09VcQAVBCAjFJIwxAANRINPdXAUg19jT4VwARNfU09lcAIDX0NPZXICA18zT2IQ1bNfI09DT/EjT0NP0SEUQ08iINRDTzKDTziAKJIyEHTFZmNPMoNPOIAnspIjTziAJ0VwAJSTXxI1s08SJVTTTyCBZQNfFXCS408UxQZjTzKDTziAJQKSI084gCSVcbCUk18SNbNPEiVU008ggWUDXxSVcAGzTxUExXJBNQZoAJAAAAAAAAB1wBsCk1BzT/NP40/TT8NPs0+jT5NPIIMgY09VcACDT1VwgIUDT1VxABUEIBV0g091cBIDX2NPhXABFJNfVXAAg09VcICFA09VcQAVA19DT2NfMxADT/EjEANP0SEUQiNPOIAbtXGwlJNfIjWzTyIlVNIg1EIjEAiAGlVxsJSTXxI1s08SJVTTT0VwARIlsLNPkKNfI08yg084gBgykiNPOIAXxXCQlJNfEjWzTxIlVNNPIIFlA18UlXAAk08VBMVxIlUGaACQAAAAAAAAY2AbApNQc0/zT+NP00/DT7NPo0+TTyCDIGNPRCAJkiEkQiNAESRDQESSISTDQCEhFESTUFSUpJVwCANf9XgAEXNf5XgSA1/YGhAVs1/IGpAVs1+4AEZxWleDT/UDT+FlEHCFA0/VA0/BZQNPsWULAhHYgA7YERr0k1+lcAETX5IR2IAN2xIrIBIrISIQayEDIKshQ0/LIRszEANPw0/SI0/iIiMgYhBK80+VcICFA0+VcQAVBCAAA1/zX+Nf01/DX7Nfo1+TX4STX3NPgWUDT5UDT6FlA0+xZRBwhQNPwWUDT9FlA0/1AoSwFXAHJnSCQ1ATIGNQJCABwxGSEcEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAAVIIQiviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQYSRDgRTwISRDgSEkSJ`,
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
                "name": "v1186",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1187",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1188",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1189",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1190",
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
                "name": "v1186",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v1187",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v1188",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1189",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1190",
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
                "name": "v1477",
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
    "name": "_reach_oe_v1590",
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
    "name": "_reach_oe_v1884",
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
    "name": "_reach_oe_v2171",
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
    "name": "_reach_oe_v2484",
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
    "name": "_reach_oe_v2766",
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
    "name": "_reach_oe_v3055",
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
    "name": "_reach_oe_v3338",
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
    "name": "_reach_oe_v3619",
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
    "name": "_reach_oe_v3902",
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
                "name": "v1477",
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
        "name": "v6899",
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
        "name": "v6903",
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
        "name": "v6905",
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
  Bytecode: `0x608060405260405162004597380380620045978339810160408190526200002691620005ca565b600080554360035562000038620002dc565b7f02b022aadaf3519406008b26ba04539ab684bf46cb83f65dee6845a03a66bdf033836040516200006b929190620006a3565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ce3415600c62000170565b620000d862000337565b80513390526020808401805160609081015184516001600160a01b03918216908501528251604090810151858701805191909316905281516000908601819052935185015182519015159082015281519092018390528051608001839052514360a0909101529184015191840151620001539291906200019a565b602082015160c0015262000167816200021d565b50505062000857565b81620001965760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001a462000362565b60005b6001811015620001fa57848160018110620001c657620001c662000736565b6020020151828260018110620001e057620001e062000736565b602002015280620001f1816200074c565b915050620001a7565b508181846001811062000211576200021162000736565b60200201529392505050565b62000227620003af565b8151516001600160a01b039081168252825160209081015182168184015280840180515190921660408085019190915282518201516060808601919091528351820151151560808087019190915284519091015160a08601528351015160c08086019190915292519092015160e08401526003600055436001559051620002b19183910162000776565b60405160208183030381529060405260029080519060200190620002d792919062000413565b505050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200030f62000362565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b60408051608081018252600091810182815260608201929092529081526020810162000332620004a2565b60405180602001604052806001905b62000398604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003715790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160001515815260200160008152602001600081526020016200033262000362565b82805462000421906200081a565b90600052602060002090601f01602090048101928262000445576000855562000490565b82601f106200046057805160ff191683800117855562000490565b8280016001018555821562000490579182015b828111156200049057825182559160200191906001019062000473565b506200049e929150620004ec565b5090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001600081526020016200033262000362565b5b808211156200049e5760008155600101620004ed565b604080519081016001600160401b03811182821017156200053457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200053457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200053457634e487b7160e01b600052604160045260246000fd5b80518015158114620005ad57600080fd5b919050565b80516001600160a01b0381168114620005ad57600080fd5b6000818303610120811215620005df57600080fd5b620005e962000503565b83518152601f1982019150610100808312156200060557600080fd5b6200060f6200053a565b60808412156200061e57600080fd5b620006286200056b565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200066060a087016200059c565b60208201526200067360c08701620005b2565b60408201526200068660e08701620005b2565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b0380851683528351602084015260208401518051805160408601526020810151606086015260408101516080860152606081015160a0860152506020810151151560c08501528160408201511660e085015260608101519150620007226101008501836001600160a01b03169052565b608081015161012085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200076f57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006101408201905060018060a01b0380845116835260208181860151168185015260408281870151168186015260609250828601518386015260808601511515608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b60018110156200080e5782518051835285810151868401528401511515848301529184019190850190600101620007dc565b50505050505092915050565b600181811c908216806200082f57607f821691505b602082108114156200085157634e487b7160e01b600052602260045260246000fd5b50919050565b613d3080620008676000396000f3fe6080604052600436106101735760003560e01c806373b4522c116100c8578063ab53f2c611610084578063cadc2e7a11610061578063cadc2e7a146103f5578063d1ad1a3714610415578063dc01fb9d1461042a578063e9b451af1461044a57005b8063ab53f2c614610392578063abe9f98d146103b5578063acf0cc22146103d557005b806373b4522c1461031157806374fcef1214610324578063817d57f3146103375780638323075714610357578063970b46bf1461036c578063a153a9bd1461037f57005b80632080ea1c1161012f5780634acdd6cc1161010c5780634acdd6cc146102be57806359cac3a4146102c65780635b48684e146103015780637333bd091461030957005b80632080ea1c1461025e5780632f42e5091461028b5780633bc5b7bf1461029e57005b806306dc92ff1461017c578063125f48e4146101b257806312822a75146101d55780631e3f5f07146101ea5780631e93b0f1146101fd5780631fa8b02f1461021c57005b3661017a57005b005b34801561018857600080fd5b5061019c61019736600461346e565b61045d565b6040516101a991906134b1565b60405180910390f35b6101c56101c036600461346e565b610489565b60405190151581526020016101a9565b3480156101e157600080fd5b506101c56104ea565b6101c56101f83660046134e1565b6105b0565b34801561020957600080fd5b506003545b6040519081526020016101a9565b34801561022857600080fd5b5061023c61023736600461346e565b610626565b60408051825181526020808401519082015291810151908201526060016101a9565b34801561026a57600080fd5b5061027e61027936600461346e565b6107eb565b6040516101a99190613522565b6101c561029936600461346e565b610811565b3480156102aa57600080fd5b5061019c6102b936600461346e565b61086e565b6101c5610894565b3480156102d257600080fd5b506102e66102e136600461346e565b6108e1565b604080518251815260209283015192810192909252016101a9565b6101c5610a4d565b6101c5610a9b565b61017a61031f366004613554565b610ae8565b6101c561033236600461346e565b610b0c565b34801561034357600080fd5b5061019c61035236600461346e565b610b6d565b34801561036357600080fd5b5060015461020e565b61017a61037a36600461356c565b610b93565b6101c561038d36600461346e565b610bb3565b34801561039e57600080fd5b506103a7610c16565b6040516101a99291906135ab565b3480156103c157600080fd5b506101c56103d036600461346e565b610cb3565b3480156103e157600080fd5b5061019c6103f036600461346e565b610dda565b34801561040157600080fd5b5061019c61041036600461346e565b610e00565b34801561042157600080fd5b5061023c610e26565b34801561043657600080fd5b5061019c61044536600461346e565b610f4f565b6101c56104583660046135e5565b610f75565b604080516060810182526000808252602082018190529181019190915261048382610fcd565b92915050565b6000610493612f1e565b61049b612f6a565b6104a3612f89565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526104de828461109f565b50506040015192915050565b6000600360005414156105a157600060028054610506906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610532906135fe565b801561057f5780601f106105545761010080835404028352916020019161057f565b820191906000526020600020905b81548152906001019060200180831161056257829003601f168201915b50505050508060200190518101906105979190613789565b6080015192915050565b6105ad60006008612654565b90565b60006105ba612f1e565b6105c2612f6a565b6105ca612f89565b604080516060810182526001600160a01b03898116825288166020820152808201879052908201526001818190525060408051602080820190925282815290830152610616828461109f565b50506020015190505b9392505050565b61064a60405180606001604052806000815260200160008152602001600081525090565b600360005414156107da57600060028054610664906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610690906135fe565b80156106dd5780601f106106b2576101008083540402835291602001916106dd565b820191906000526020600020905b8154815290600101906020018083116106c057829003601f168201915b50505050508060200190518101906106f59190613789565b905061071e60408051608081018252600060208201818152928201819052606082015290815290565b60016107298561267a565b51600181111561073b5761073b61348b565b14610747576000610755565b6107508461267a565b604001515b815152600161076385612707565b5160018111156107755761077561348b565b1461078157600061078f565b61078a84612707565b604001515b81516020015260016107a085612794565b5160018111156107b2576107b261348b565b146107be5760006107cc565b6107c784612794565b604001515b815160400152519392505050565b6107e66000600a612654565b919050565b604080516060810182526000808252602082018190529181019190915261048382612821565b600061081b612f1e565b610823612f6a565b61082b612f89565b60408051602080820183526001600160a01b038816825283810191909152600083528151808201909252828252830152610865828461109f565b50505192915050565b6040805160608101825260008082526020820181905291810191909152610483826128ea565b600061089e612f1e565b6108a6612f6a565b6108ae612f89565b600060c082015260058152604080516020808201909252828152908301526108d6828461109f565b505060a00151919050565b604080518082019091526000808252602082015260036000541415610a415760006002805461090f906135fe565b80601f016020809104026020016040519081016040528092919081815260200182805461093b906135fe565b80156109885780601f1061095d57610100808354040283529160200191610988565b820191906000526020600020905b81548152906001019060200180831161096b57829003601f168201915b50505050508060200190518101906109a09190613789565b90506109c2604080516060810182526000602082018181529282015290815290565b60016109cd856128ea565b5160018111156109df576109df61348b565b146109eb5760006109f9565b6109f4846128ea565b604001515b8151526001610a0785612977565b516001811115610a1957610a1961348b565b14610a25576000610a33565b610a2e84612977565b604001515b815160200152519392505050565b6107e660006007612654565b6000610a57612f1e565b610a5f612f6a565b610a67612f89565b60006101008201526007815260408051602080820190925282815290830152610a90828461109f565b505060e00151919050565b6000610aa5612f1e565b610aad612f6a565b610ab5612f89565b600060808201526003815260408051602080820190925282815290830152610add828461109f565b505060600151919050565b610af0612f1e565b610b08610b0236849003840184613845565b82612a04565b5050565b6000610b16612f1e565b610b1e612f6a565b610b26612f89565b60408051602080820183526001600160a01b038816825260a0840191909152600483528151808201909252828252830152610b61828461109f565b50506080015192915050565b60408051606081018252600080825260208201819052918101919091526104838261267a565b610b9b612f1e565b610b08610bad3684900384018461394b565b8261109f565b6000610bbd612f1e565b610bc5612f6a565b610bcd612f89565b60408051602080820183526001600160a01b0388168252610120840191909152600883528151808201909252828252830152610c09828461109f565b5050610100015192915050565b600060606000546002808054610c2b906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610c57906135fe565b8015610ca45780601f10610c7957610100808354040283529160200191610ca4565b820191906000526020600020905b815481529060010190602001808311610c8757829003601f168201915b50505050509050915091509091565b600060036000541415610dce57600060028054610ccf906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfb906135fe565b8015610d485780601f10610d1d57610100808354040283529160200191610d48565b820191906000526020600020905b815481529060010190602001808311610d2b57829003601f168201915b5050505050806020019051810190610d609190613789565b6040805160208101909152600081529091506000610d7d85612821565b516001811115610d8f57610d8f61348b565b1415610d9e5760008152610dc6565b6001610da985612821565b516001811115610dbb57610dbb61348b565b1415610dc657600181525b519392505050565b6107e66000600b612654565b604080516060810182526000808252602082018190529181019190915261048382612707565b604080516060810182526000808252602082018190529181019190915261048382612977565b610e4a60405180606001604052806000815260200160008152602001600081525090565b60036000541415610f4357600060028054610e64906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610e90906135fe565b8015610edd5780601f10610eb257610100808354040283529160200191610edd565b820191906000526020600020905b815481529060010190602001808311610ec057829003601f168201915b5050505050806020019051810190610ef59190613789565b9050610f1e60408051608081018252600060208201818152928201819052606082015290815290565b60c082015181515260a082015181516020015260609091015181516040015251919050565b6105ad60006009612654565b604080516060810182526000808252602082018190529181019190915261048382612794565b6000610f7f612f1e565b610f87612f6a565b610f8f612f89565b604080516020808201835287825260e0840191909152600683528151808201909252828252830152610fc1828461109f565b505060c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156110195761101961348b565b1415611090576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561105a5761105a61348b565b600181111561106b5761106b61348b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6110af600360005414602c612654565b81516110ca9015806110c357508251600154145b602d612654565b6000808055600280546110dc906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054611108906135fe565b80156111555780601f1061112a57610100808354040283529160200191611155565b820191906000526020600020905b81548152906001019060200180831161113857829003601f168201915b505050505080602001905181019061116d9190613789565b9050611177613052565b6111866000194310602e612654565b7f30d4b5a278e5db8a37c70c8aa8f01e3e258485b09104554fcc889283d226baf633856040516111b7929190613a68565b60405180910390a160006020850151515160088111156111d9576111d961348b565b14156114af5760208085015151015181526111f63415600d612654565b60e082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516112379190600090612be1565b81604001819052506112596112523384602001516000612c55565b600e612654565b8151611296906001600160a01b0316331461128c5782604001516001600160a01b0316336001600160a01b03161461128f565b60015b600f612654565b6112e0600060018351516112a990610fcd565b5160018111156112bb576112bb61348b565b146112c75760006112d8565b8251516112d390610fcd565b604001515b116010612654565b60c08201516040820151515160016112f733610fcd565b5160018111156113095761130961348b565b14611315576000611323565b61131e33610fcd565b604001515b61132d9190613b94565b6113379190613bb3565b606082019081528151516001600160a01b03166000908152600560205260409020805460ff19166001908117909155905182515190919061137790612977565b5160018111156113895761138961348b565b146113955760006113a6565b8151516113a190612977565b604001515b6113b09190613bd5565b8151516001600160a01b031660009081526005602090815260409182902060019081019390935590519182527f2283042950d63c333470582010e1753fd34eb3c29600ec709b709f89633406f8910160405180910390a16001835261141361328c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015182850180519190941690526060808701518451909301929092526080860151835190151591015260a0850151915181019190915282015160c084015161147f9190613bd5565b6020820180516080019190915280514360a0909101526040830151905160c001526114a981612c6b565b5061264e565b60016020850151515160088111156114c9576114c961348b565b1415611807576020840151516040015160808201526114ea34156011612654565b60e082018051515160a08301805191909152815151602090810151825182015291515160409081015191519115159101528201516115369061152f9033906000612c55565b6012612654565b8151608082015151611584916001600160a01b0391821691161461157a5782604001516001600160a01b03168260800151600001516001600160a01b03161461157d565b60015b6013612654565b61159a6000826080015160400151116014612654565b6080810180516020908101516001600160a01b039081166000908152600a835260408082208054600160ff199182168117909255865186015185168452828420805462ff00001916905586518601519094168352600485529181902080549093168217909255925190810151910151909190611615906128ea565b5160018111156116275761162761348b565b14611633576000611649565b6116448260800151602001516128ea565b604001515b6116539190613bd5565b6080820180516020908101516001600160a01b0390811660009081526004835260408082206001908101969096558451840151909216815260078352819020805460ff1916851790559151918201519101519091906116b190610fcd565b5160018111156116c3576116c361348b565b146116cf5760006116e5565b6116e0826080015160200151610fcd565b604001515b6116ef9190613bd5565b60808201516020908101516001600160a01b0316600090815260078252604090819020600190810193909355519182527fdc76a7146df6621442018d4a51b17dc7501ec910e8d13b3ef3b2308270c2e713910160405180910390a16001602084015261175961328c565b825181516001600160a01b039182169052602080850151835190831690820152604080860151828501805191909416905260608087015184519093019290925260808087015184519015159083015260a0870151935190920192909252830151015160c08401516117ca9190613bd5565b60208201805160800191909152514360a09182015260e0840151908301516117f59190600090612be1565b602082015160c001526114a981612c6b565b60026020850151515160088111156118215761182161348b565b14156119dc576020840151516060015160c082015261184234156015612654565b60e082810180515151918301805192909252805151602090810151835182015290515160409081015192519215159201919091528201516118919061188a9033906000612c55565b6016612654565b81516118ce906001600160a01b031633146118c45782604001516001600160a01b0316336001600160a01b0316146118c7565b60015b6017612654565b60c081018051516001600160a01b039081166000908152600a60209081526040808320805460ff19166001908117909155945151909316825290829020805462ff00001916905590519182527f92ccb62738805f29840eb556464f3bd39e93890d4c00b45e8387058b94a91da5910160405180910390a16001604084015261195461328c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e080840151908301516117f59190600090612be1565b60036020850151515160088111156119f6576119f661348b565b1415611d4257611a0834156018612654565b60e08201805151516101008301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611a4c9190600090612be1565b816101200181905250611a6f611a683384602001516000612c55565b6019612654565b6000611a7a33612821565b516001811115611a8c57611a8c61348b565b1415611a9f576000610140820152611acb565b6001611aaa33612821565b516001811115611abc57611abc61348b565b1415611acb5760016101408201525b611adb816101400151601a612654565b6001611ae633610fcd565b516001811115611af857611af861348b565b14611b04576000611b12565b611b0d33610fcd565b604001515b6101608201526101208101515151611b5890611b2f576000611b38565b60008360c00151115b611b43576000611b51565b8161016001518360c0015110155b601b612654565b60c08201516101208201515151610160830151611b759190613b94565b611b7f9190613bb3565b61018082018190526101208201515151611b999190613bed565b6101a08201805191909152610120820180515160209081015183518201529051516040908101519251921515920191909152820151610180820151611be091903390612d24565b336000818152600860205260409020805460ff1916600190811790915561018083015191611c0d90612707565b516001811115611c1f57611c1f61348b565b14611c2b576000611c39565b611c3433612707565b604001515b611c439190613bd5565b3360009081526008602090815260408083206001908101949094556009825291829020805460ff19168417815560608601519084015590519182527fc559c0ebabd79177b325259d93a86d706c7a1614e513a1e8d558e4e87dab019b910160405180910390a160016060840152611cb861328c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c08601518351909101529051439101526101208201516101a08301516117f59190600090612be1565b6004602085015151516008811115611d5c57611d5c61348b565b1415611ed65760208401515160a001516101c0820152611d7e3415601c612654565b60e08201805151516101e0830180519190915281515160209081015182518201529151516040908101519151911515910152820151611dcb90611dc49033906000612c55565b601d612654565b8151611e08906001600160a01b03163314611dfe5782604001516001600160a01b0316336001600160a01b031614611e01565b60015b601e612654565b604051600181527fa45692977bf3be47e522645454ee7e4e71bbbe40c71389365f04f31f3c42b6599060200160405180910390a160016080840152611e4b61328c565b825181516001600160a01b0391821690526020808501518351908316908201526101c084015151818401805191909316905260608086015183519092019190915260808086015183519015156040919091015260a08087015184519093019290925260c086015183519091015290514391015260e08301516101e08301516117f59190600090612be1565b6005602085015151516008811115611ef057611ef061348b565b141561216857611f023415601f612654565b60e0820180515151610200830180519190915281515160209081015182518201529151516040908101519151911515910152820151611f4f90611f489033906000612c55565b6020612654565b6001611f5a336128ea565b516001811115611f6c57611f6c61348b565b14611f78576000611f86565b611f81336128ea565b604001515b6102208201526000611f9733612821565b516001811115611fa957611fa961348b565b1415611fbc576000610240820152611fe8565b6001611fc733612821565b516001811115611fd957611fd961348b565b1415611fe85760016102408201525b611ff88161024001516021612654565b61200b6000826102200151116022612654565b336000818152600660205260409020805460ff19166001908117909155610220830151916120389061267a565b51600181111561204a5761204a61348b565b14612056576000612064565b61205f3361267a565b604001515b61206e9190613bd5565b33600090815260066020908152604080832060019081019490945560048252808320805460ff19168517815584019290925590519182527fe0d5ba3f3302b229bca0aadaa67d65efd0174bde2cec7bb18857d04ac967ff1b910160405180910390a1600160a08401526120df61328c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e08301516102008301516117f59190600090612be1565b60066020850151515160088111156121825761218261348b565b141561234c5760208401515160e001516102608201526121a434156023612654565b6102608101515160e083015151516121bc9190613bd5565b610280820180519190915260e08301805151602090810151835182015290515160409081015192519215159201919091528201516102608201515161220e9161220791339190612c55565b6024612654565b815161224b906001600160a01b031633146122415782604001516001600160a01b0316336001600160a01b031614612244565b60015b6025612654565b6102608101515161225f9015156026612654565b604051600181527fec04eec5635b02dde23680d431e4f2984ca2fa4c00b76a35701dd694a8fbca0b9060200160405180910390a1600160c08401526122a261328c565b825181516001600160a01b0391821690526020808501518351908316908201526040850151908301519116905260608301516122e090600190613bd5565b6020808301805190910191909152608084015190519015156040909101526102608201515160a08401516123149190613bd5565b6020820180516060019190915260c0840151815160800152514360a09091015260e08301516102808301516117f59190600090612be1565b60076020850151515160088111156123665761236661348b565b14156124915761237834156027612654565b60e08201805151516102a08301805191909152815151602090810151825182015291515160409081015191519115159101528201516123c5906123be9033906000612c55565b6028612654565b604051600181527f526b6a9ea7bf3e9896b533d5a3bc1623e4186690002dc9c3ff2402ce44f372659060200160405180910390a1600160e084015261240861328c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e08301516102a08301516117f59190600090612be1565b60086020850151515160088111156124ab576124ab61348b565b141561264e5760208401515161012001516102c08201526124ce34156029612654565b60e08201805151516102e083018051919091528151516020908101518251820152915151604090810151915191151591015282015161251b906125149033906000612c55565b602a612654565b8151612558906001600160a01b0316331461254e5782604001516001600160a01b0316336001600160a01b031614612551565b60015b602b612654565b6102c0810151516001600160a01b03166000908152600a6020908152604091829020805462ffffff191690559051600181527f114d1fd20ebdc8b3fdccccabe0a27c0f5ccc173ca53b8286c30963f8ca1d6a64910160405180910390a160016101008401526125c561328c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518285018051919094169052606080870151845190930192909252608080870151845190151592019190915260a08087015184519093019290925260c086015183519091015290514391015260e08301516102e08301516117f59190600090612be1565b50505050565b81610b085760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156126c6576126c661348b565b1415611090576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561105a5761105a61348b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff1660018111156127535761275361348b565b1415611090576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561105a5761105a61348b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff1660018111156127e0576127e061348b565b1415611090576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561105a5761105a61348b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff16600181111561286d5761286d61348b565b1415611090576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff1660018111156128ae576128ae61348b565b60018111156128bf576128bf61348b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156129365761293661348b565b1415611090576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561105a5761105a61348b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156129c3576129c361348b565b1415611090576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561105a5761105a61348b565b612a146003600054146031612654565b8151612a2f901580612a2857508251600154145b6032612654565b600080805560028054612a41906135fe565b80601f0160208091040260200160405190810160405280929190818152602001828054612a6d906135fe565b8015612aba5780601f10612a8f57610100808354040283529160200191612aba565b820191906000526020600020905b815481529060010190602001808311612a9d57829003601f168201915b5050505050806020019051810190612ad29190613789565b9050612ae46000194310156033612654565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a1612b373415602f612654565b8051612b4f906001600160a01b031633146030612654565b612b5761328c565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518285018051919094169052606080860151845190930192909252608080860151845190151592019190915260a08086015184519093019290925260c08086015184519092019190915282514392019190915260e08401519151015261264e81612c6b565b612be96132b5565b60005b6001811015612c3557848160018110612c0757612c07613b68565b6020020151828260018110612c1e57612c1e613b68565b602002015280612c2d81613c04565b915050612bec565b5081818460018110612c4957612c49613b68565b60200201529392505050565b6000612c6383853085612d38565b949350505050565b612c73613300565b8151516001600160a01b039081168252825160209081015182168184015280840180515190921660408085019190915282518201516060808601919091528351820151151560808087019190915284519091015160a08601528351015160c08086019190915292519092015160e08401526003600055436001559051612cfb91839101613c1f565b60405160208183030381529060405260029080519060200190612d1f929190613362565b505050565b612d2f838383612e12565b612d1f57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612d9f91613cc1565b60006040518083038185875af1925050503d8060008114612ddc576040519150601f19603f3d011682016040523d82523d6000602084013e612de1565b606091505b5091509150612df282826001612ee3565b5080806020019051810190612e079190613cdd565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612e7191613cc1565b60006040518083038185875af1925050503d8060008114612eae576040519150601f19603f3d011682016040523d82523d6000602084013e612eb3565b606091505b5091509150612ec482826002612ee3565b5080806020019051810190612ed99190613cdd565b9695505050505050565b60608315612ef257508161061f565b825115612f025782518084602001fd5b60405163100960cb60e01b815260048101839052602401612671565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b604051806040016040528060008152602001612f846133e6565b905290565b6040805161014081019091528060008152602001612fb260408051602081019091526000815290565b81526040805160608101825260008082526020828101829052928201529101908152602001612fec60408051602081019091526000815290565b81526000602082015260400161300d60408051602081019091526000815290565b81526020016000151581526020016130316040518060200160405280600081525090565b815260006020820152604001612f8460408051602081019091526000815290565b60408051610320810182526000610300820181815282528251606081018452818152602080820183905281850192909252908201529081016130926132b5565b8152602001600081526020016130c1604080516060810182526000808252602082018190529181019190915290565b815260408051606081018252600080825260208281018290529282015291019081526020016130fb60408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016131486132b5565b8152602001600015158152602001600081526020016000815260200161318a604051806060016040528060008152602001600081526020016000151581525090565b81526020016131a460408051602081019091526000815290565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160001515815260200161320f6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260200161326960408051602081019091526000815290565b815260408051606081018252600080825260208281018290529282015291015290565b604080516080810182526000918101828152606082019290925290815260208101612f846133f9565b60405180602001604052806001905b6132ea604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816132c45790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000151581526020016000815260200160008152602001612f846132b5565b82805461336e906135fe565b90600052602060002090601f01602090048101928261339057600085556133d6565b82601f106133a957805160ff19168380011785556133d6565b828001600101855582156133d6579182015b828111156133d65782518255916020019190600101906133bb565b506133e2929150613441565b5090565b6040518060200160405280612f84612f89565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001612f846132b5565b5b808211156133e25760008155600101613442565b6001600160a01b038116811461346b57600080fd5b50565b60006020828403121561348057600080fd5b813561061f81613456565b634e487b7160e01b600052602160045260246000fd5b6002811061346b5761346b61348b565b815160608201906134c1816134a1565b808352506020830151151560208301526040830151604083015292915050565b6000806000606084860312156134f657600080fd5b833561350181613456565b9250602084013561351181613456565b929592945050506040919091013590565b81516060820190613532816134a1565b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561356657600080fd5b50919050565b60006101a0828403121561356657600080fd5b60005b8381101561359a578181015183820152602001613582565b8381111561264e5750506000910152565b82815260406020820152600082518060408401526135d081606085016020870161357f565b601f01601f1916919091016060019392505050565b6000602082840312156135f757600080fd5b5035919050565b600181811c9082168061361257607f821691505b6020821081141561356657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561366c5761366c613633565b60405290565b6040516060810167ffffffffffffffff8111828210171561366c5761366c613633565b6040805190810167ffffffffffffffff8111828210171561366c5761366c613633565b604051610140810167ffffffffffffffff8111828210171561366c5761366c613633565b80516107e681613456565b801515811461346b57600080fd5b80516107e6816136e7565b600082601f83011261371157600080fd5b613719613649565b8060608085018681111561372c57600080fd5b855b8181101561377d578281890312156137465760008081fd5b61374e613672565b815181526020808301518183015260408084015161376b816136e7565b9083015290865290940193820161372e565b50919695505050505050565b6000610140828403121561379c57600080fd5b604051610100810181811067ffffffffffffffff821117156137c0576137c0613633565b60405282516137ce81613456565b81526137dc602084016136dc565b60208201526137ed604084016136dc565b604082015260608301516060820152613808608084016136f5565b608082015260a083015160a082015260c083015160c082015261382e8460e08501613700565b60e08201529392505050565b80356107e6816136e7565b60006040828403121561385757600080fd5b6040516040810181811067ffffffffffffffff8211171561387a5761387a613633565b60405282358152602083013561388f816136e7565b60208201529392505050565b8035600981106107e657600080fd5b6000602082840312156138bc57600080fd5b6138c4613649565b905081356138d181613456565b815292915050565b6000606082840312156138eb57600080fd5b6138f3613672565b9050813561390081613456565b8152602082013561391081613456565b806020830152506040820135604082015292915050565b60006020828403121561393957600080fd5b613941613649565b9135825250919050565b60008183036101a081121561395f57600080fd5b613967613695565b8335815261018080601f198401121561397f57600080fd5b613987613649565b92506139916136b8565b61399d6020870161389b565b81526139ac87604088016138aa565b60208201526139be87606088016138d9565b60408201526139d08760c088016138aa565b60608201526139e160e0870161383a565b60808201526101006139f5888289016138aa565b60a0830152610120613a0881890161383a565b60c0840152613a1b896101408a01613927565b60e0840152613a2d610160890161383a565b82840152613a3d89858a016138aa565b908301525083525060208101919091529392505050565b60098110613a6457613a6461348b565b9052565b60006101c08201905060018060a01b038416825282516020830152602083015151613a97604084018251613a54565b602081015180516001600160a01b031660608501525060408181015180516001600160a01b03908116608087015260208201511660a08601529081015160c085015250606081015180516001600160a01b031660e0850152506080810151610100613b058186018315159052565b60a08301519150610120613b2481870184516001600160a01b03169052565b60c0840151151561014087015260e0840151516101608701529083015115156101808601529091015180516001600160a01b03166101a08501529050509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615613bae57613bae613b7e565b500290565b600082613bd057634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115613be857613be8613b7e565b500190565b600082821015613bff57613bff613b7e565b500390565b6000600019821415613c1857613c18613b7e565b5060010190565b60006101408201905060018060a01b0380845116835260208181860151168185015260408281870151168186015260609250828601518386015260808601511515608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6001811015613cb55782518051835285810151868401528401511515848301529184019190850190600101613c85565b50505050505092915050565b60008251613cd381846020870161357f565b9190910192915050565b600060208284031215613cef57600080fd5b815161061f816136e756fea264697066735822122061748b21cf34cd6c9e23dc1a165d7e055ec536756649ad17e07daea95252b24e64736f6c634300080c0033`,
  BytecodeLen: 17815,
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
    at: './index.rsh:303:13:after expr stmt semicolon',
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
