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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  return {
    Approval: [ctc0, ctc0, ctc1],
    Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc5 = stdlib.T_Object({
    amt: ctc2,
    spender: ctc0
    });
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc5
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc4;
  
  
  return {
    infos: {
      allowance: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v948, v949, v950, v952, v954] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v948, v949, v950, v954, v977, v978, v995] = svs;
            return (await ((async (_v963, _v964 ) => {
                const v963 = stdlib.protect(ctc0, _v963, null);
                const v964 = stdlib.protect(ctc0, _v964, null);
              
              let v965;
              const v966 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v963), null);
              const v967 = {
                amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                spender: v948
                };
              const v968 = stdlib.fromSome(v966, v967);
              const v969 = v968.spender;
              const v970 = stdlib.addressEq(v969, v964);
              if (v970) {
                const v971 = v968.amt;
                v965 = v971;
                }
              else {
                v965 = stdlib.checkedBigNumberify('./index.rsh:108:23:decimal', stdlib.UInt_max, '0');
                }
              
              return v965;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      balanceOf: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v948, v949, v950, v952, v954] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v948, v949, v950, v954, v977, v978, v995] = svs;
            return (await ((async (_v972 ) => {
                const v972 = stdlib.protect(ctc0, _v972, null);
              
              const v973 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v972), null);
              const v974 = stdlib.fromSome(v973, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
              
              return v974;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      decimals: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v948, v949, v950, v952, v954] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v948, v949, v950, v954, v977, v978, v995] = svs;
            return (await ((async () => {
              
              
              return stdlib.checkedBigNumberify('./index.rsh:100:30:decimal', stdlib.UInt_max, '18');}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      name: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v948, v949, v950, v952, v954] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v948, v949, v950, v954, v977, v978, v995] = svs;
            return (await ((async () => {
              
              
              return v949;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      symbol: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v948, v949, v950, v952, v954] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v948, v949, v950, v954, v977, v978, v995] = svs;
            return (await ((async () => {
              
              
              return v950;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      totalSupply: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v948, v949, v950, v952, v954] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v948, v949, v950, v954, v977, v978, v995] = svs;
            return (await ((async () => {
              
              
              return v995;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0, ctc0],
      4: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc2]
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc5, ctc2]);
  return {
    mapDataTy: ctc6
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc8 = stdlib.T_Object({
    centralCtc: ctc3,
    managerAddr: ctc3,
    name: ctc6,
    symbol: ctc6,
    uri: ctc7,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_99: ctc9,
    burn0_99: ctc9,
    cCM0_99: ctc10,
    decreaseAllowance0_99: ctc9,
    docHash0_99: ctc12,
    increaseAllowance0_99: ctc9,
    mint0_99: ctc9,
    realCentralCtc0_99: ctc10,
    transfer0_99: ctc9,
    transferFrom0_99: ctc13
    });
  const ctc15 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const v935 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:77:106:application',
    fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v936 = v935.centralCtc;
  const v937 = v935.managerAddr;
  const v938 = v935.name;
  const v939 = v935.symbol;
  const v940 = v935.uri;
  const v941 = v935.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v938, v939, v940, v936, v937, v941],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:79:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc6, ctc7, ctc3, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v949, v950, v951, v952, v953, v954], secs: v956, time: v955, didSend: v44, from: v948 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc7, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v949, v950, v951, v952, v953, v954], secs: v956, time: v955, didSend: v44, from: v948 } = txn1;
  ;
  const v958 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v958), {
    at: './index.rsh:81:31:application',
    fs: ['at ./index.rsh:81:31:application call to [unknown function] (defined at: ./index.rsh:81:31:function exp)', 'at ./index.rsh:81:31:application call to "liftedInteract" (defined at: ./index.rsh:81:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v948, v949, v950, v952, v954],
    evt_cnt: 0,
    funcNum: 1,
    lct: v955,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v961, time: v960, didSend: v54, from: v959 } = txn2;
      
      ;
      const v977 = v948;
      const v978 = v952;
      const v980 = v960;
      
      if (await (async () => {
        
        return true;})()) {
        const v994 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
        const v995 = stdlib.fromSome(v994, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
        sim_r.isHalt = false;
        }
      else {
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
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v961, time: v960, didSend: v54, from: v959 } = txn2;
  ;
  const v962 = stdlib.addressEq(v948, v959);
  stdlib.assert(v962, {
    at: './index.rsh:85:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v977 = v948;
  let v978 = v952;
  let v980 = v960;
  
  while (await (async () => {
    
    return true;})()) {
    const v994 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
    const v995 = stdlib.fromSome(v994, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc14],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v948, v949, v950, v954, v977, v978, v995],
        evt_cnt: 0,
        funcNum: 4,
        lct: v980,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:326:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v3735, time: v3734, didSend: v909, from: v3733 } = txn4;
          
          ;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v3734;
          
          await (async () => {
            const v977 = cv977;
            const v978 = cv978;
            const v980 = cv980;
            
            if (await (async () => {
              
              return true;})()) {
              const v994 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
              const v995 = stdlib.fromSome(v994, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
              sim_r.isHalt = false;
              }
            else {
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
        tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v3735, time: v3734, didSend: v909, from: v3733 } = txn4;
      ;
      const v3736 = stdlib.addressEq(v948, v3733);
      stdlib.assert(v3736, {
        at: './index.rsh:326:21:dot',
        fs: ['at ./index.rsh:325:40:application call to [unknown function] (defined at: ./index.rsh:325:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv977 = v977;
      const cv978 = v978;
      const cv980 = v3734;
      
      v977 = cv977;
      v978 = cv978;
      v980 = cv980;
      
      continue;
      }
    else {
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn3;
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v1256 = v1223[stdlib.checkedBigNumberify('./index.rsh:171:13:spread', stdlib.UInt_max, '0')];
          const v1257 = v1223[stdlib.checkedBigNumberify('./index.rsh:171:13:spread', stdlib.UInt_max, '1')];
          const v1258 = stdlib.addressEq(v1219, v1256);
          const v1259 = v1258 ? false : true;
          stdlib.assert(v1259, {
            at: './index.rsh:182:24:application',
            fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1260 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1219), null);
          const v1261 = stdlib.fromSome(v1260, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v1262 = stdlib.le(v1257, v1261);
          stdlib.assert(v1262, {
            at: './index.rsh:183:24:application',
            fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1263 = {
            amt: v1257,
            spender: v1256
            };
          await stdlib.mapSet(map1, v1219, v1263);
          const v1264 = true;
          await txn3.getOutput('approve', 'v1264', ctc15, v1264);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v1525 = v1474[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '0')];
          const v1526 = v1474[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '1')];
          const v1527 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1525), null);
          const v1528 = stdlib.fromSome(v1527, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v1529 = stdlib.addressEq(v1219, v1525);
          stdlib.assert(v1529, {
            at: './index.rsh:263:24:application',
            fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1530 = stdlib.le(v1526, v1528);
          stdlib.assert(v1530, {
            at: './index.rsh:264:24:application',
            fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1533 = stdlib.sub(v1528, v1526);
          await stdlib.mapSet(map2, v1525, v1533);
          const v1536 = stdlib.sub(v995, v1526);
          await stdlib.mapSet(map0, v948, v1536);
          const v1537 = true;
          await txn3.getOutput('burn', 'v1537', ctc15, v1537);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v1799 = v1725[stdlib.checkedBigNumberify('./index.rsh:274:13:spread', stdlib.UInt_max, '0')];
          const v1800 = stdlib.addressEq(v1219, v948);
          const v1801 = stdlib.addressEq(v1219, v977);
          const v1802 = v1800 ? true : v1801;
          stdlib.assert(v1802, {
            at: './index.rsh:285:24:application',
            fs: ['at ./index.rsh:284:13:application call to [unknown function] (defined at: ./index.rsh:284:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1803 = true;
          await txn3.getOutput('cCM', 'v1803', ctc15, v1803);
          const cv977 = v1799;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v2063 = v1976[stdlib.checkedBigNumberify('./index.rsh:210:13:spread', stdlib.UInt_max, '0')];
          const v2064 = v1976[stdlib.checkedBigNumberify('./index.rsh:210:13:spread', stdlib.UInt_max, '1')];
          const v2065 = stdlib.addressEq(v1219, v2063);
          const v2066 = v2065 ? false : true;
          stdlib.assert(v2066, {
            at: './index.rsh:220:24:application',
            fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2067 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1219), null);
          const v2068 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v948
            };
          const v2069 = stdlib.fromSome(v2067, v2068);
          const v2070 = v2069.amt;
          const v2071 = stdlib.sub(v2070, v2064);
          const v2072 = {
            amt: v2071,
            spender: v2063
            };
          await stdlib.mapSet(map1, v1219, v2072);
          const v2073 = true;
          await txn3.getOutput('decreaseAllowance', 'v2073', ctc15, v2073);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v2337 = stdlib.addressEq(v1219, v948);
          const v2338 = stdlib.addressEq(v1219, v977);
          const v2339 = v2337 ? true : v2338;
          stdlib.assert(v2339, {
            at: './index.rsh:319:24:application',
            fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2340 = true;
          await txn3.getOutput('docHash', 'v2340', ctc15, v2340);
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v2600 = v2478[stdlib.checkedBigNumberify('./index.rsh:191:13:spread', stdlib.UInt_max, '0')];
          const v2601 = v2478[stdlib.checkedBigNumberify('./index.rsh:191:13:spread', stdlib.UInt_max, '1')];
          const v2602 = stdlib.addressEq(v1219, v2600);
          const v2603 = v2602 ? false : true;
          stdlib.assert(v2603, {
            at: './index.rsh:201:24:application',
            fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2604 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1219), null);
          const v2605 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v948
            };
          const v2606 = stdlib.fromSome(v2604, v2605);
          const v2607 = v2606.amt;
          const v2608 = stdlib.add(v2607, v2601);
          const v2609 = {
            amt: v2608,
            spender: v2600
            };
          await stdlib.mapSet(map1, v1219, v2609);
          const v2610 = true;
          await txn3.getOutput('increaseAllowance', 'v2610', ctc15, v2610);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v2873 = v2729[stdlib.checkedBigNumberify('./index.rsh:229:13:spread', stdlib.UInt_max, '0')];
          const v2874 = v2729[stdlib.checkedBigNumberify('./index.rsh:229:13:spread', stdlib.UInt_max, '1')];
          const v2875 = stdlib.addressEq(v1219, v948);
          const v2876 = stdlib.addressEq(v1219, v977);
          const v2877 = v2875 ? true : v2876;
          stdlib.assert(v2877, {
            at: './index.rsh:240:24:application',
            fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2878 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2873), null);
          const v2879 = stdlib.fromSome(v2878, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v2880 = stdlib.add(v2879, v2874);
          await stdlib.mapSet(map2, v2873, v2880);
          const v2883 = stdlib.add(v995, v2874);
          await stdlib.mapSet(map0, v948, v2883);
          const v2884 = true;
          await txn3.getOutput('mint', 'v2884', ctc15, v2884);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v3146 = v2980[stdlib.checkedBigNumberify('./index.rsh:291:13:spread', stdlib.UInt_max, '0')];
          const v3147 = stdlib.addressEq(v1219, v948);
          const v3148 = stdlib.addressEq(v1219, v977);
          const v3149 = v3147 ? true : v3148;
          stdlib.assert(v3149, {
            at: './index.rsh:302:24:application',
            fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3150 = true;
          await txn3.getOutput('realCentralCtc', 'v3150', ctc15, v3150);
          const cv977 = v977;
          const cv978 = v3146;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v3410 = v3231[stdlib.checkedBigNumberify('./index.rsh:123:13:spread', stdlib.UInt_max, '0')];
          const v3411 = v3231[stdlib.checkedBigNumberify('./index.rsh:123:13:spread', stdlib.UInt_max, '1')];
          const v3412 = stdlib.addressEq(v1219, v978);
          const v3413 = stdlib.addressEq(v3410, v978);
          const v3414 = v3413 ? false : true;
          const v3415 = v3412 ? v3414 : false;
          const v3419 = v3412 ? false : v3413;
          const v3420 = v3415 ? true : v3419;
          stdlib.assert(v3420, {
            at: './index.rsh:134:24:application',
            fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3421 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1219), null);
          const v3422 = stdlib.fromSome(v3421, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3423 = stdlib.le(v3411, v3422);
          stdlib.assert(v3423, {
            at: './index.rsh:135:24:application',
            fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3426 = stdlib.sub(v3422, v3411);
          await stdlib.mapSet(map2, v1219, v3426);
          const v3427 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3410), null);
          const v3428 = stdlib.fromSome(v3427, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3429 = stdlib.add(v3428, v3411);
          await stdlib.mapSet(map2, v3410, v3429);
          const v3430 = true;
          await txn3.getOutput('transfer', 'v3430', ctc15, v3430);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          undefined /* setApiDetails */;
          ;
          const v3691 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '0')];
          const v3692 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '1')];
          const v3693 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '2')];
          const v3694 = stdlib.addressEq(v3691, v978);
          const v3695 = stdlib.addressEq(v3692, v978);
          const v3696 = v3695 ? false : true;
          const v3697 = v3694 ? v3696 : false;
          const v3701 = v3694 ? false : v3695;
          const v3702 = v3697 ? true : v3701;
          stdlib.assert(v3702, {
            at: './index.rsh:157:24:application',
            fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3703 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3691), null);
          const v3704 = stdlib.fromSome(v3703, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3705 = stdlib.le(v3693, v3704);
          stdlib.assert(v3705, {
            at: './index.rsh:158:24:application',
            fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3706 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3691), null);
          const v3707 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v948
            };
          const v3708 = stdlib.fromSome(v3706, v3707);
          const v3709 = v3708.spender;
          const v3710 = stdlib.addressEq(v3709, v3692);
          const v3711 = v3708.amt;
          const v3712 = stdlib.ge(v3711, v3693);
          const v3713 = v3710 ? v3712 : false;
          stdlib.assert(v3713, {
            at: './index.rsh:160:24:application',
            fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3716 = stdlib.sub(v3704, v3693);
          await stdlib.mapSet(map2, v3691, v3716);
          const v3717 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3692), null);
          const v3718 = stdlib.fromSome(v3717, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3719 = stdlib.add(v3718, v3693);
          await stdlib.mapSet(map2, v3692, v3719);
          const v3721 = stdlib.sub(v3711, v3693);
          const v3722 = {
            amt: v3721,
            spender: v3692
            };
          await stdlib.mapSet(map1, v3691, v3722);
          const v3723 = true;
          await txn3.getOutput('transferFrom', 'v3723', ctc15, v3723);
          null;
          const cv977 = v977;
          const cv978 = v978;
          const cv980 = v1221;
          
          v977 = cv977;
          v978 = cv978;
          v980 = cv980;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _approve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc7,
    burn0_99: ctc7,
    cCM0_99: ctc8,
    decreaseAllowance0_99: ctc7,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc7,
    mint0_99: ctc7,
    realCentralCtc0_99: ctc8,
    transfer0_99: ctc7,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1063 = ctc.selfAddress();
  const v1065 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:13:function exp)', 'at ./index.rsh:116:75:application call to "runapprove0_99" (defined at: ./index.rsh:171:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v1066 = v1065[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1067 = v1065[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1071 = stdlib.addressEq(v1063, v1066);
  const v1072 = v1071 ? false : true;
  stdlib.assert(v1072, {
    at: './index.rsh:175:23:application',
    fs: ['at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:29:function exp)', 'at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:13:function exp)', 'at ./index.rsh:116:75:application call to "runapprove0_99" (defined at: ./index.rsh:171:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'approve'
    });
  const v1073 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1063), null);
  const v1074 = stdlib.fromSome(v1073, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
  const v1075 = stdlib.le(v1067, v1074);
  stdlib.assert(v1075, {
    at: './index.rsh:176:23:application',
    fs: ['at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:29:function exp)', 'at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:13:function exp)', 'at ./index.rsh:116:75:application call to "runapprove0_99" (defined at: ./index.rsh:171:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'approve'
    });
  const v1080 = ['approve0_99', v1065];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1080],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:179:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v1256 = v1223[stdlib.checkedBigNumberify('./index.rsh:171:13:spread', stdlib.UInt_max, '0')];
          const v1257 = v1223[stdlib.checkedBigNumberify('./index.rsh:171:13:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1219), null);
          const v1263 = {
            amt: v1257,
            spender: v1256
            };
          await stdlib.simMapSet(sim_r, 1, v1219, v1263);
          const v1264 = true;
          const v1265 = await txn1.getOutput('approve', 'v1264', ctc13, v1264);
          
          null;
          const v7164 = v977;
          const v7165 = v978;
          const v7167 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7168 = stdlib.fromSome(v7167, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v1256 = v1223[stdlib.checkedBigNumberify('./index.rsh:171:13:spread', stdlib.UInt_max, '0')];
      const v1257 = v1223[stdlib.checkedBigNumberify('./index.rsh:171:13:spread', stdlib.UInt_max, '1')];
      const v1258 = stdlib.addressEq(v1219, v1256);
      const v1259 = v1258 ? false : true;
      stdlib.assert(v1259, {
        at: './index.rsh:182:24:application',
        fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
        msg: null,
        who: 'approve'
        });
      const v1260 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1219), null);
      const v1261 = stdlib.fromSome(v1260, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v1262 = stdlib.le(v1257, v1261);
      stdlib.assert(v1262, {
        at: './index.rsh:183:24:application',
        fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
        msg: null,
        who: 'approve'
        });
      const v1263 = {
        amt: v1257,
        spender: v1256
        };
      await stdlib.mapSet(map1, v1219, v1263);
      const v1264 = true;
      const v1265 = await txn1.getOutput('approve', 'v1264', ctc13, v1264);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v1223, v1265), {
          at: './index.rsh:172:13:application',
          fs: ['at ./index.rsh:172:13:application call to [unknown function] (defined at: ./index.rsh:172:13:function exp)', 'at ./index.rsh:185:24:application call to "respond" (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      null;
      const v7164 = v977;
      const v7165 = v978;
      const v7167 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7168 = stdlib.fromSome(v7167, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _burn4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _burn4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _burn4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc7,
    burn0_99: ctc7,
    cCM0_99: ctc8,
    decreaseAllowance0_99: ctc7,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc7,
    mint0_99: ctc7,
    realCentralCtc0_99: ctc8,
    transfer0_99: ctc7,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1131 = ctc.selfAddress();
  const v1133 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:116:75:application call to "runburn0_99" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v1134 = v1133[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1135 = v1133[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1139 = stdlib.addressEq(v1131, v1134);
  stdlib.assert(v1139, {
    at: './index.rsh:254:23:application',
    fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:27:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:116:75:application call to "runburn0_99" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'burn'
    });
  const v1140 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1134), null);
  const v1141 = stdlib.fromSome(v1140, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
  const v1142 = stdlib.le(v1135, v1141);
  stdlib.assert(v1142, {
    at: './index.rsh:255:23:application',
    fs: ['at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:27:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:116:75:application call to "runburn0_99" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'burn'
    });
  const v1147 = ['burn0_99', v1133];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1147],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:259:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v1525 = v1474[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '0')];
          const v1526 = v1474[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '1')];
          const v1527 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1525), null);
          const v1528 = stdlib.fromSome(v1527, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v1533 = stdlib.sub(v1528, v1526);
          await stdlib.simMapSet(sim_r, 2, v1525, v1533);
          const v1536 = stdlib.sub(v995, v1526);
          await stdlib.simMapSet(sim_r, 0, v948, v1536);
          const v1537 = true;
          const v1538 = await txn1.getOutput('burn', 'v1537', ctc13, v1537);
          
          null;
          const v7241 = v977;
          const v7242 = v978;
          const v7244 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7245 = stdlib.fromSome(v7244, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v1525 = v1474[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '0')];
      const v1526 = v1474[stdlib.checkedBigNumberify('./index.rsh:250:13:spread', stdlib.UInt_max, '1')];
      const v1527 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1525), null);
      const v1528 = stdlib.fromSome(v1527, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v1529 = stdlib.addressEq(v1219, v1525);
      stdlib.assert(v1529, {
        at: './index.rsh:263:24:application',
        fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
        msg: null,
        who: 'burn'
        });
      const v1530 = stdlib.le(v1526, v1528);
      stdlib.assert(v1530, {
        at: './index.rsh:264:24:application',
        fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
        msg: null,
        who: 'burn'
        });
      const v1533 = stdlib.sub(v1528, v1526);
      await stdlib.mapSet(map2, v1525, v1533);
      const v1536 = stdlib.sub(v995, v1526);
      await stdlib.mapSet(map0, v948, v1536);
      const v1537 = true;
      const v1538 = await txn1.getOutput('burn', 'v1537', ctc13, v1537);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v1474, v1538), {
          at: './index.rsh:251:13:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:268:24:application call to "respond" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'out',
          who: 'burn'
          });
        }
      else {
        }
      
      null;
      const v7241 = v977;
      const v7242 = v978;
      const v7244 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7245 = stdlib.fromSome(v7244, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc8,
    burn0_99: ctc8,
    cCM0_99: ctc7,
    decreaseAllowance0_99: ctc8,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc8,
    mint0_99: ctc8,
    realCentralCtc0_99: ctc7,
    transfer0_99: ctc8,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1149 = ctc.selfAddress();
  const v1151 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:277:13:application call to [unknown function] (defined at: ./index.rsh:277:13:function exp)', 'at ./index.rsh:116:75:application call to "runcCM0_99" (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'cCM'
    });
  const v1155 = stdlib.addressEq(v1149, v948);
  const v1156 = stdlib.addressEq(v1149, v977);
  const v1157 = v1155 ? true : v1156;
  stdlib.assert(v1157, {
    at: './index.rsh:278:23:application',
    fs: ['at ./index.rsh:277:13:application call to [unknown function] (defined at: ./index.rsh:277:21:function exp)', 'at ./index.rsh:277:13:application call to [unknown function] (defined at: ./index.rsh:277:13:function exp)', 'at ./index.rsh:116:75:application call to "runcCM0_99" (defined at: ./index.rsh:274:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'cCM'
    });
  const v1161 = ['cCM0_99', v1151];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1161],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:282:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cCM"
            });
          ;
          const v1799 = v1725[stdlib.checkedBigNumberify('./index.rsh:274:13:spread', stdlib.UInt_max, '0')];
          const v1803 = true;
          const v1804 = await txn1.getOutput('cCM', 'v1803', ctc13, v1803);
          
          const v7318 = v1799;
          const v7319 = v978;
          const v7321 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7322 = stdlib.fromSome(v7321, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v1799 = v1725[stdlib.checkedBigNumberify('./index.rsh:274:13:spread', stdlib.UInt_max, '0')];
      const v1800 = stdlib.addressEq(v1219, v948);
      const v1801 = stdlib.addressEq(v1219, v977);
      const v1802 = v1800 ? true : v1801;
      stdlib.assert(v1802, {
        at: './index.rsh:285:24:application',
        fs: ['at ./index.rsh:284:13:application call to [unknown function] (defined at: ./index.rsh:284:13:function exp)'],
        msg: null,
        who: 'cCM'
        });
      const v1803 = true;
      const v1804 = await txn1.getOutput('cCM', 'v1803', ctc13, v1803);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v1725, v1804), {
          at: './index.rsh:275:13:application',
          fs: ['at ./index.rsh:275:13:application call to [unknown function] (defined at: ./index.rsh:275:13:function exp)', 'at ./index.rsh:287:20:application call to "res" (defined at: ./index.rsh:284:13:function exp)', 'at ./index.rsh:284:13:application call to [unknown function] (defined at: ./index.rsh:284:13:function exp)'],
          msg: 'out',
          who: 'cCM'
          });
        }
      else {
        }
      
      const v7318 = v1799;
      const v7319 = v978;
      const v7321 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7322 = stdlib.fromSome(v7321, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _decreaseAllowance4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _decreaseAllowance4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _decreaseAllowance4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc7,
    burn0_99: ctc7,
    cCM0_99: ctc8,
    decreaseAllowance0_99: ctc7,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc7,
    mint0_99: ctc7,
    realCentralCtc0_99: ctc8,
    transfer0_99: ctc7,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1098 = ctc.selfAddress();
  const v1100 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:116:75:application call to "rundecreaseAllowance0_99" (defined at: ./index.rsh:210:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'decreaseAllowance'
    });
  const v1101 = v1100[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1106 = stdlib.addressEq(v1098, v1101);
  const v1107 = v1106 ? false : true;
  stdlib.assert(v1107, {
    at: './index.rsh:214:23:application',
    fs: ['at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:29:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:116:75:application call to "rundecreaseAllowance0_99" (defined at: ./index.rsh:210:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'decreaseAllowance'
    });
  const v1112 = ['decreaseAllowance0_99', v1100];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1112],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:217:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "decreaseAllowance"
            });
          ;
          const v2063 = v1976[stdlib.checkedBigNumberify('./index.rsh:210:13:spread', stdlib.UInt_max, '0')];
          const v2064 = v1976[stdlib.checkedBigNumberify('./index.rsh:210:13:spread', stdlib.UInt_max, '1')];
          const v2067 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1219), null);
          const v2068 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v948
            };
          const v2069 = stdlib.fromSome(v2067, v2068);
          const v2070 = v2069.amt;
          const v2071 = stdlib.sub(v2070, v2064);
          const v2072 = {
            amt: v2071,
            spender: v2063
            };
          await stdlib.simMapSet(sim_r, 1, v1219, v2072);
          const v2073 = true;
          const v2074 = await txn1.getOutput('decreaseAllowance', 'v2073', ctc13, v2073);
          
          null;
          const v7395 = v977;
          const v7396 = v978;
          const v7398 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7399 = stdlib.fromSome(v7398, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v2063 = v1976[stdlib.checkedBigNumberify('./index.rsh:210:13:spread', stdlib.UInt_max, '0')];
      const v2064 = v1976[stdlib.checkedBigNumberify('./index.rsh:210:13:spread', stdlib.UInt_max, '1')];
      const v2065 = stdlib.addressEq(v1219, v2063);
      const v2066 = v2065 ? false : true;
      stdlib.assert(v2066, {
        at: './index.rsh:220:24:application',
        fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
        msg: null,
        who: 'decreaseAllowance'
        });
      const v2067 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1219), null);
      const v2068 = {
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        spender: v948
        };
      const v2069 = stdlib.fromSome(v2067, v2068);
      const v2070 = v2069.amt;
      const v2071 = stdlib.sub(v2070, v2064);
      const v2072 = {
        amt: v2071,
        spender: v2063
        };
      await stdlib.mapSet(map1, v1219, v2072);
      const v2073 = true;
      const v2074 = await txn1.getOutput('decreaseAllowance', 'v2073', ctc13, v2073);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v1976, v2074), {
          at: './index.rsh:211:13:application',
          fs: ['at ./index.rsh:211:13:application call to [unknown function] (defined at: ./index.rsh:211:13:function exp)', 'at ./index.rsh:223:24:application call to "respond" (defined at: ./index.rsh:219:13:function exp)', 'at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'out',
          who: 'decreaseAllowance'
          });
        }
      else {
        }
      
      null;
      const v7395 = v977;
      const v7396 = v978;
      const v7398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7399 = stdlib.fromSome(v7398, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _docHash4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _docHash4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _docHash4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc9,
    burn0_99: ctc9,
    cCM0_99: ctc10,
    decreaseAllowance0_99: ctc9,
    docHash0_99: ctc8,
    increaseAllowance0_99: ctc9,
    mint0_99: ctc9,
    realCentralCtc0_99: ctc10,
    transfer0_99: ctc9,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1177 = ctc.selfAddress();
  const v1179 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:13:function exp)', 'at ./index.rsh:116:75:application call to "rundocHash0_99" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'docHash'
    });
  const v1183 = stdlib.addressEq(v1177, v948);
  const v1184 = stdlib.addressEq(v1177, v977);
  const v1185 = v1183 ? true : v1184;
  stdlib.assert(v1185, {
    at: './index.rsh:312:23:application',
    fs: ['at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:18:function exp)', 'at ./index.rsh:311:13:application call to [unknown function] (defined at: ./index.rsh:311:13:function exp)', 'at ./index.rsh:116:75:application call to "rundocHash0_99" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'docHash'
    });
  const v1189 = ['docHash0_99', v1179];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1189],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:316:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "docHash"
            });
          ;
          const v2340 = true;
          const v2341 = await txn1.getOutput('docHash', 'v2340', ctc13, v2340);
          
          const v7472 = v977;
          const v7473 = v978;
          const v7475 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7476 = stdlib.fromSome(v7475, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v2337 = stdlib.addressEq(v1219, v948);
      const v2338 = stdlib.addressEq(v1219, v977);
      const v2339 = v2337 ? true : v2338;
      stdlib.assert(v2339, {
        at: './index.rsh:319:24:application',
        fs: ['at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
        msg: null,
        who: 'docHash'
        });
      const v2340 = true;
      const v2341 = await txn1.getOutput('docHash', 'v2340', ctc13, v2340);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v2227, v2341), {
          at: './index.rsh:309:13:application',
          fs: ['at ./index.rsh:309:13:application call to [unknown function] (defined at: ./index.rsh:309:13:function exp)', 'at ./index.rsh:321:20:application call to "res" (defined at: ./index.rsh:318:13:function exp)', 'at ./index.rsh:318:13:application call to [unknown function] (defined at: ./index.rsh:318:13:function exp)'],
          msg: 'out',
          who: 'docHash'
          });
        }
      else {
        }
      
      const v7472 = v977;
      const v7473 = v978;
      const v7475 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7476 = stdlib.fromSome(v7475, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _increaseAllowance4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _increaseAllowance4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _increaseAllowance4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc7,
    burn0_99: ctc7,
    cCM0_99: ctc8,
    decreaseAllowance0_99: ctc7,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc7,
    mint0_99: ctc7,
    realCentralCtc0_99: ctc8,
    transfer0_99: ctc7,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1082 = ctc.selfAddress();
  const v1084 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:116:75:application call to "runincreaseAllowance0_99" (defined at: ./index.rsh:191:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'increaseAllowance'
    });
  const v1085 = v1084[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1090 = stdlib.addressEq(v1082, v1085);
  const v1091 = v1090 ? false : true;
  stdlib.assert(v1091, {
    at: './index.rsh:195:23:application',
    fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:29:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:116:75:application call to "runincreaseAllowance0_99" (defined at: ./index.rsh:191:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'increaseAllowance'
    });
  const v1096 = ['increaseAllowance0_99', v1084];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1096],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:198:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "increaseAllowance"
            });
          ;
          const v2600 = v2478[stdlib.checkedBigNumberify('./index.rsh:191:13:spread', stdlib.UInt_max, '0')];
          const v2601 = v2478[stdlib.checkedBigNumberify('./index.rsh:191:13:spread', stdlib.UInt_max, '1')];
          const v2604 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1219), null);
          const v2605 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v948
            };
          const v2606 = stdlib.fromSome(v2604, v2605);
          const v2607 = v2606.amt;
          const v2608 = stdlib.add(v2607, v2601);
          const v2609 = {
            amt: v2608,
            spender: v2600
            };
          await stdlib.simMapSet(sim_r, 1, v1219, v2609);
          const v2610 = true;
          const v2611 = await txn1.getOutput('increaseAllowance', 'v2610', ctc13, v2610);
          
          null;
          const v7549 = v977;
          const v7550 = v978;
          const v7552 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7553 = stdlib.fromSome(v7552, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v2600 = v2478[stdlib.checkedBigNumberify('./index.rsh:191:13:spread', stdlib.UInt_max, '0')];
      const v2601 = v2478[stdlib.checkedBigNumberify('./index.rsh:191:13:spread', stdlib.UInt_max, '1')];
      const v2602 = stdlib.addressEq(v1219, v2600);
      const v2603 = v2602 ? false : true;
      stdlib.assert(v2603, {
        at: './index.rsh:201:24:application',
        fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)'],
        msg: null,
        who: 'increaseAllowance'
        });
      const v2604 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1219), null);
      const v2605 = {
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        spender: v948
        };
      const v2606 = stdlib.fromSome(v2604, v2605);
      const v2607 = v2606.amt;
      const v2608 = stdlib.add(v2607, v2601);
      const v2609 = {
        amt: v2608,
        spender: v2600
        };
      await stdlib.mapSet(map1, v1219, v2609);
      const v2610 = true;
      const v2611 = await txn1.getOutput('increaseAllowance', 'v2610', ctc13, v2610);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v2478, v2611), {
          at: './index.rsh:192:13:application',
          fs: ['at ./index.rsh:192:13:application call to [unknown function] (defined at: ./index.rsh:192:13:function exp)', 'at ./index.rsh:204:24:application call to "respond" (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)'],
          msg: 'out',
          who: 'increaseAllowance'
          });
        }
      else {
        }
      
      null;
      const v7549 = v977;
      const v7550 = v978;
      const v7552 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7553 = stdlib.fromSome(v7552, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _mint4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _mint4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _mint4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc7,
    burn0_99: ctc7,
    cCM0_99: ctc8,
    decreaseAllowance0_99: ctc7,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc7,
    mint0_99: ctc7,
    realCentralCtc0_99: ctc8,
    transfer0_99: ctc7,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1114 = ctc.selfAddress();
  const v1116 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:232:13:application call to [unknown function] (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:116:75:application call to "runmint0_99" (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'mint'
    });
  const v1122 = stdlib.addressEq(v1114, v948);
  const v1123 = stdlib.addressEq(v1114, v977);
  const v1124 = v1122 ? true : v1123;
  stdlib.assert(v1124, {
    at: './index.rsh:233:23:application',
    fs: ['at ./index.rsh:232:13:application call to [unknown function] (defined at: ./index.rsh:232:30:function exp)', 'at ./index.rsh:232:13:application call to [unknown function] (defined at: ./index.rsh:232:13:function exp)', 'at ./index.rsh:116:75:application call to "runmint0_99" (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'mint'
    });
  const v1129 = ['mint0_99', v1116];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1129],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:237:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mint"
            });
          ;
          const v2873 = v2729[stdlib.checkedBigNumberify('./index.rsh:229:13:spread', stdlib.UInt_max, '0')];
          const v2874 = v2729[stdlib.checkedBigNumberify('./index.rsh:229:13:spread', stdlib.UInt_max, '1')];
          const v2878 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2873), null);
          const v2879 = stdlib.fromSome(v2878, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v2880 = stdlib.add(v2879, v2874);
          await stdlib.simMapSet(sim_r, 2, v2873, v2880);
          const v2883 = stdlib.add(v995, v2874);
          await stdlib.simMapSet(sim_r, 0, v948, v2883);
          const v2884 = true;
          const v2885 = await txn1.getOutput('mint', 'v2884', ctc13, v2884);
          
          null;
          const v7626 = v977;
          const v7627 = v978;
          const v7629 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7630 = stdlib.fromSome(v7629, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v2873 = v2729[stdlib.checkedBigNumberify('./index.rsh:229:13:spread', stdlib.UInt_max, '0')];
      const v2874 = v2729[stdlib.checkedBigNumberify('./index.rsh:229:13:spread', stdlib.UInt_max, '1')];
      const v2875 = stdlib.addressEq(v1219, v948);
      const v2876 = stdlib.addressEq(v1219, v977);
      const v2877 = v2875 ? true : v2876;
      stdlib.assert(v2877, {
        at: './index.rsh:240:24:application',
        fs: ['at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
        msg: null,
        who: 'mint'
        });
      const v2878 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2873), null);
      const v2879 = stdlib.fromSome(v2878, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v2880 = stdlib.add(v2879, v2874);
      await stdlib.mapSet(map2, v2873, v2880);
      const v2883 = stdlib.add(v995, v2874);
      await stdlib.mapSet(map0, v948, v2883);
      const v2884 = true;
      const v2885 = await txn1.getOutput('mint', 'v2884', ctc13, v2884);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v2729, v2885), {
          at: './index.rsh:230:13:application',
          fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:244:24:application call to "respond" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:239:13:application call to [unknown function] (defined at: ./index.rsh:239:13:function exp)'],
          msg: 'out',
          who: 'mint'
          });
        }
      else {
        }
      
      null;
      const v7626 = v977;
      const v7627 = v978;
      const v7629 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7630 = stdlib.fromSome(v7629, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _realCentralCtc4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _realCentralCtc4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _realCentralCtc4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc8,
    burn0_99: ctc8,
    cCM0_99: ctc7,
    decreaseAllowance0_99: ctc8,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc8,
    mint0_99: ctc8,
    realCentralCtc0_99: ctc7,
    transfer0_99: ctc8,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1163 = ctc.selfAddress();
  const v1165 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:294:13:application call to [unknown function] (defined at: ./index.rsh:294:13:function exp)', 'at ./index.rsh:116:75:application call to "runrealCentralCtc0_99" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'realCentralCtc'
    });
  const v1169 = stdlib.addressEq(v1163, v948);
  const v1170 = stdlib.addressEq(v1163, v977);
  const v1171 = v1169 ? true : v1170;
  stdlib.assert(v1171, {
    at: './index.rsh:295:23:application',
    fs: ['at ./index.rsh:294:13:application call to [unknown function] (defined at: ./index.rsh:294:21:function exp)', 'at ./index.rsh:294:13:application call to [unknown function] (defined at: ./index.rsh:294:13:function exp)', 'at ./index.rsh:116:75:application call to "runrealCentralCtc0_99" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'realCentralCtc'
    });
  const v1175 = ['realCentralCtc0_99', v1165];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1175],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:299:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "realCentralCtc"
            });
          ;
          const v3146 = v2980[stdlib.checkedBigNumberify('./index.rsh:291:13:spread', stdlib.UInt_max, '0')];
          const v3150 = true;
          const v3151 = await txn1.getOutput('realCentralCtc', 'v3150', ctc13, v3150);
          
          const v7703 = v977;
          const v7704 = v3146;
          const v7706 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7707 = stdlib.fromSome(v7706, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v3146 = v2980[stdlib.checkedBigNumberify('./index.rsh:291:13:spread', stdlib.UInt_max, '0')];
      const v3147 = stdlib.addressEq(v1219, v948);
      const v3148 = stdlib.addressEq(v1219, v977);
      const v3149 = v3147 ? true : v3148;
      stdlib.assert(v3149, {
        at: './index.rsh:302:24:application',
        fs: ['at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)'],
        msg: null,
        who: 'realCentralCtc'
        });
      const v3150 = true;
      const v3151 = await txn1.getOutput('realCentralCtc', 'v3150', ctc13, v3150);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v2980, v3151), {
          at: './index.rsh:292:13:application',
          fs: ['at ./index.rsh:292:13:application call to [unknown function] (defined at: ./index.rsh:292:13:function exp)', 'at ./index.rsh:304:20:application call to "res" (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:301:13:application call to [unknown function] (defined at: ./index.rsh:301:13:function exp)'],
          msg: 'out',
          who: 'realCentralCtc'
          });
        }
      else {
        }
      
      const v7703 = v977;
      const v7704 = v3146;
      const v7706 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7707 = stdlib.fromSome(v7706, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transfer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transfer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transfer4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc7,
    burn0_99: ctc7,
    cCM0_99: ctc8,
    decreaseAllowance0_99: ctc7,
    docHash0_99: ctc10,
    increaseAllowance0_99: ctc7,
    mint0_99: ctc7,
    realCentralCtc0_99: ctc8,
    transfer0_99: ctc7,
    transferFrom0_99: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1000 = ctc.selfAddress();
  const v1002 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransfer0_99" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v1003 = v1002[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1004 = v1002[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1008 = stdlib.addressEq(v1000, v978);
  const v1009 = stdlib.addressEq(v1003, v978);
  const v1010 = v1009 ? false : true;
  const v1011 = v1008 ? v1010 : false;
  const v1015 = v1008 ? false : v1009;
  const v1016 = v1011 ? true : v1015;
  stdlib.assert(v1016, {
    at: './index.rsh:127:23:application',
    fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:30:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransfer0_99" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'transfer'
    });
  const v1017 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1000), null);
  const v1018 = stdlib.fromSome(v1017, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
  const v1019 = stdlib.le(v1004, v1018);
  stdlib.assert(v1019, {
    at: './index.rsh:128:23:application',
    fs: ['at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:30:function exp)', 'at ./index.rsh:126:13:application call to [unknown function] (defined at: ./index.rsh:126:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransfer0_99" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'transfer'
    });
  const v1024 = ['transfer0_99', v1002];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1024],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:131:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v3410 = v3231[stdlib.checkedBigNumberify('./index.rsh:123:13:spread', stdlib.UInt_max, '0')];
          const v3411 = v3231[stdlib.checkedBigNumberify('./index.rsh:123:13:spread', stdlib.UInt_max, '1')];
          const v3421 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1219), null);
          const v3422 = stdlib.fromSome(v3421, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3426 = stdlib.sub(v3422, v3411);
          await stdlib.simMapSet(sim_r, 2, v1219, v3426);
          const v3427 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3410), null);
          const v3428 = stdlib.fromSome(v3427, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3429 = stdlib.add(v3428, v3411);
          await stdlib.simMapSet(sim_r, 2, v3410, v3429);
          const v3430 = true;
          const v3431 = await txn1.getOutput('transfer', 'v3430', ctc13, v3430);
          
          null;
          const v7780 = v977;
          const v7781 = v978;
          const v7783 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7784 = stdlib.fromSome(v7783, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v3410 = v3231[stdlib.checkedBigNumberify('./index.rsh:123:13:spread', stdlib.UInt_max, '0')];
      const v3411 = v3231[stdlib.checkedBigNumberify('./index.rsh:123:13:spread', stdlib.UInt_max, '1')];
      const v3412 = stdlib.addressEq(v1219, v978);
      const v3413 = stdlib.addressEq(v3410, v978);
      const v3414 = v3413 ? false : true;
      const v3415 = v3412 ? v3414 : false;
      const v3419 = v3412 ? false : v3413;
      const v3420 = v3415 ? true : v3419;
      stdlib.assert(v3420, {
        at: './index.rsh:134:24:application',
        fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:13:function exp)'],
        msg: null,
        who: 'transfer'
        });
      const v3421 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1219), null);
      const v3422 = stdlib.fromSome(v3421, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v3423 = stdlib.le(v3411, v3422);
      stdlib.assert(v3423, {
        at: './index.rsh:135:24:application',
        fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:13:function exp)'],
        msg: null,
        who: 'transfer'
        });
      const v3426 = stdlib.sub(v3422, v3411);
      await stdlib.mapSet(map2, v1219, v3426);
      const v3427 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3410), null);
      const v3428 = stdlib.fromSome(v3427, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v3429 = stdlib.add(v3428, v3411);
      await stdlib.mapSet(map2, v3410, v3429);
      const v3430 = true;
      const v3431 = await txn1.getOutput('transfer', 'v3430', ctc13, v3430);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v3231, v3431), {
          at: './index.rsh:124:13:application',
          fs: ['at ./index.rsh:124:13:application call to [unknown function] (defined at: ./index.rsh:124:13:function exp)', 'at ./index.rsh:138:24:application call to "respond" (defined at: ./index.rsh:133:13:function exp)', 'at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:13:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      null;
      const v7780 = v977;
      const v7781 = v978;
      const v7783 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7784 = stdlib.fromSome(v7783, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    amt: ctc1,
    spender: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Data({
    approve0_99: ctc8,
    burn0_99: ctc8,
    cCM0_99: ctc9,
    decreaseAllowance0_99: ctc8,
    docHash0_99: ctc11,
    increaseAllowance0_99: ctc8,
    mint0_99: ctc8,
    realCentralCtc0_99: ctc9,
    transfer0_99: ctc8,
    transferFrom0_99: ctc7
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
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
  
  
  const [v948, v949, v950, v954, v977, v978, v995] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1]);
  const v1028 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransferFrom0_99" (defined at: ./index.rsh:144:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v1029 = v1028[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1030 = v1028[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1031 = v1028[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1036 = stdlib.addressEq(v1029, v978);
  const v1037 = stdlib.addressEq(v1030, v978);
  const v1038 = v1037 ? false : true;
  const v1039 = v1036 ? v1038 : false;
  const v1043 = v1036 ? false : v1037;
  const v1044 = v1039 ? true : v1043;
  stdlib.assert(v1044, {
    at: './index.rsh:148:23:application',
    fs: ['at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:38:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransferFrom0_99" (defined at: ./index.rsh:144:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v1045 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1029), null);
  const v1046 = stdlib.fromSome(v1045, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
  const v1047 = stdlib.le(v1031, v1046);
  stdlib.assert(v1047, {
    at: './index.rsh:149:23:application',
    fs: ['at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:38:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransferFrom0_99" (defined at: ./index.rsh:144:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v1048 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1029), null);
  const v1049 = {
    amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    spender: v948
    };
  const v1050 = stdlib.fromSome(v1048, v1049);
  const v1051 = v1050.spender;
  const v1052 = stdlib.addressEq(v1051, v1030);
  const v1053 = v1050.amt;
  const v1054 = stdlib.ge(v1053, v1031);
  const v1055 = v1052 ? v1054 : false;
  stdlib.assert(v1055, {
    at: './index.rsh:151:23:application',
    fs: ['at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:38:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:116:75:application call to "runtransferFrom0_99" (defined at: ./index.rsh:144:13:function exp)', 'at ./index.rsh:116:75:application call to [unknown function] (defined at: ./index.rsh:116:75:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v1061 = ['transferFrom0_99', v1028];
  
  const txn1 = await (ctc.sendrecv({
    args: [v948, v949, v950, v954, v977, v978, v995, v1061],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:27:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
      
      switch (v1220[0]) {
        case 'approve0_99': {
          const v1223 = v1220[1];
          
          break;
          }
        case 'burn0_99': {
          const v1474 = v1220[1];
          
          break;
          }
        case 'cCM0_99': {
          const v1725 = v1220[1];
          
          break;
          }
        case 'decreaseAllowance0_99': {
          const v1976 = v1220[1];
          
          break;
          }
        case 'docHash0_99': {
          const v2227 = v1220[1];
          
          break;
          }
        case 'increaseAllowance0_99': {
          const v2478 = v1220[1];
          
          break;
          }
        case 'mint0_99': {
          const v2729 = v1220[1];
          
          break;
          }
        case 'realCentralCtc0_99': {
          const v2980 = v1220[1];
          
          break;
          }
        case 'transfer0_99': {
          const v3231 = v1220[1];
          
          break;
          }
        case 'transferFrom0_99': {
          const v3482 = v1220[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v3691 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '0')];
          const v3692 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '1')];
          const v3693 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '2')];
          const v3703 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3691), null);
          const v3704 = stdlib.fromSome(v3703, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3706 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v3691), null);
          const v3707 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v948
            };
          const v3708 = stdlib.fromSome(v3706, v3707);
          const v3711 = v3708.amt;
          const v3716 = stdlib.sub(v3704, v3693);
          await stdlib.simMapSet(sim_r, 2, v3691, v3716);
          const v3717 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3692), null);
          const v3718 = stdlib.fromSome(v3717, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          const v3719 = stdlib.add(v3718, v3693);
          await stdlib.simMapSet(sim_r, 2, v3692, v3719);
          const v3721 = stdlib.sub(v3711, v3693);
          const v3722 = {
            amt: v3721,
            spender: v3692
            };
          await stdlib.simMapSet(sim_r, 1, v3691, v3722);
          const v3723 = true;
          const v3724 = await txn1.getOutput('transferFrom', 'v3723', ctc13, v3723);
          
          null;
          const v7857 = v977;
          const v7858 = v978;
          const v7860 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v948), null);
          const v7861 = stdlib.fromSome(v7860, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc3, ctc3, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1220], secs: v1222, time: v1221, didSend: v632, from: v1219 } = txn1;
  switch (v1220[0]) {
    case 'approve0_99': {
      const v1223 = v1220[1];
      return;
      break;
      }
    case 'burn0_99': {
      const v1474 = v1220[1];
      return;
      break;
      }
    case 'cCM0_99': {
      const v1725 = v1220[1];
      return;
      break;
      }
    case 'decreaseAllowance0_99': {
      const v1976 = v1220[1];
      return;
      break;
      }
    case 'docHash0_99': {
      const v2227 = v1220[1];
      return;
      break;
      }
    case 'increaseAllowance0_99': {
      const v2478 = v1220[1];
      return;
      break;
      }
    case 'mint0_99': {
      const v2729 = v1220[1];
      return;
      break;
      }
    case 'realCentralCtc0_99': {
      const v2980 = v1220[1];
      return;
      break;
      }
    case 'transfer0_99': {
      const v3231 = v1220[1];
      return;
      break;
      }
    case 'transferFrom0_99': {
      const v3482 = v1220[1];
      undefined /* setApiDetails */;
      ;
      const v3691 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '0')];
      const v3692 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '1')];
      const v3693 = v3482[stdlib.checkedBigNumberify('./index.rsh:144:13:spread', stdlib.UInt_max, '2')];
      const v3694 = stdlib.addressEq(v3691, v978);
      const v3695 = stdlib.addressEq(v3692, v978);
      const v3696 = v3695 ? false : true;
      const v3697 = v3694 ? v3696 : false;
      const v3701 = v3694 ? false : v3695;
      const v3702 = v3697 ? true : v3701;
      stdlib.assert(v3702, {
        at: './index.rsh:157:24:application',
        fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v3703 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3691), null);
      const v3704 = stdlib.fromSome(v3703, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v3705 = stdlib.le(v3693, v3704);
      stdlib.assert(v3705, {
        at: './index.rsh:158:24:application',
        fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v3706 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3691), null);
      const v3707 = {
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        spender: v948
        };
      const v3708 = stdlib.fromSome(v3706, v3707);
      const v3709 = v3708.spender;
      const v3710 = stdlib.addressEq(v3709, v3692);
      const v3711 = v3708.amt;
      const v3712 = stdlib.ge(v3711, v3693);
      const v3713 = v3710 ? v3712 : false;
      stdlib.assert(v3713, {
        at: './index.rsh:160:24:application',
        fs: ['at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v3716 = stdlib.sub(v3704, v3693);
      await stdlib.mapSet(map2, v3691, v3716);
      const v3717 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3692), null);
      const v3718 = stdlib.fromSome(v3717, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      const v3719 = stdlib.add(v3718, v3693);
      await stdlib.mapSet(map2, v3692, v3719);
      const v3721 = stdlib.sub(v3711, v3693);
      const v3722 = {
        amt: v3721,
        spender: v3692
        };
      await stdlib.mapSet(map1, v3691, v3722);
      const v3723 = true;
      const v3724 = await txn1.getOutput('transferFrom', 'v3723', ctc13, v3723);
      if (v632) {
        stdlib.protect(ctc0, await interact.out(v3482, v3724), {
          at: './index.rsh:145:13:application',
          fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:165:24:application call to "respond" (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      null;
      const v7857 = v977;
      const v7858 = v978;
      const v7860 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v948), null);
      const v7861 = stdlib.fromSome(v7860, stdlib.checkedBigNumberify('./index.rsh:91:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    }
  
  
  };
export async function approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _approve4(ctcTop, interact);}
  };
export async function burn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for burn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for burn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _burn4(ctcTop, interact);}
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
export async function decreaseAllowance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for decreaseAllowance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for decreaseAllowance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _decreaseAllowance4(ctcTop, interact);}
  };
export async function docHash(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for docHash expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for docHash expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _docHash4(ctcTop, interact);}
  };
export async function increaseAllowance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for increaseAllowance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for increaseAllowance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _increaseAllowance4(ctcTop, interact);}
  };
export async function mint(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for mint expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for mint expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _mint4(ctcTop, interact);}
  };
export async function realCentralCtc(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for realCentralCtc expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for realCentralCtc expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _realCentralCtc4(ctcTop, interact);}
  };
export async function transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _transfer4(ctcTop, interact);}
  };
export async function transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _transferFrom4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`approve(address,uint64)byte`, `burn(address,uint64)byte`, `cCM(address)byte`, `decreaseAllowance(address,uint64)byte`, `docHash(byte[96])byte`, `increaseAllowance(address,uint64)byte`, `mint(address,uint64)byte`, `realCentralCtc(address)byte`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`],
    pure: [`allowance(address,address)uint64`, `balanceOf(address)uint64`, `decimals()uint64`, `name()byte[32]`, `symbol()byte[32]`, `totalSupply()uint64`],
    sigs: [`allowance(address,address)uint64`, `approve(address,uint64)byte`, `balanceOf(address)uint64`, `burn(address,uint64)byte`, `cCM(address)byte`, `decimals()uint64`, `decreaseAllowance(address,uint64)byte`, `docHash(byte[96])byte`, `increaseAllowance(address,uint64)byte`, `mint(address,uint64)byte`, `name()byte[32]`, `realCentralCtc(address)byte`, `symbol()byte[32]`, `totalSupply()uint64`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`]
    },
  appApproval: `BiAbAAEEIAg4QDukj++zBJ74z6ALo4LUiwykyPClD+e93sMLyfyYvAXC+azmBvmH5eIEnPiDiAKy8KPZAtODlbEE/N3+ogK9lZS4AZWygO8BnsjAfQP///////////8BBQkmBQEBAQAEseE0rASx9fPiACI1ADEYQQniJwRkSSJbNQEhBFs1AjEZIxJBAAoxACkhB69mQgmtNhoAF0lBAjoiNQQjNQZJIQgMQAEoSSEJDEAAekkhCgxAADpJIQsMQAAZIQsSRDQBJBJEKWQoZFBJNQNXwAg1B0IJeSEKEkQ2GgE2GgJQNf+AAQY0/1AhBa9QQgJTSSEMDEAAGCEMEkQ0ASQSRIAIAAAAAAAAABI1B0IJQCEJEkQ2GgE2GgJQNf+AAQM0/1AhBa9QQgIaSSENDEAAMkkhDgxAABkhDhJENAEkEkQpZChkUEk1A1cgIDUHQgj/IQ0SRDYaATX/gAEENP9QQgHhSSEPDEAAGSEPEkQ0ASQSRClkKGRQSTUDV0AgNQdCCM0hCBJENAEkEkQpZChkUDUDIQSvNANXACBQNhoBiAi/VwkpSTX9VwEoNP0iVU1JNf5XCCA2GgISQQAJNP4iWzX/QgADIjX/NP8WNQdCCH9JIRAMQABxSSERDEAAN0khEgxAABghEhJENhoBNhoCUDX/KTT/UCEFr1BCAUYhERJENhoBNhoCUDX/KDT/UCEFr1BCAS5JIRMMQAAWIRMSRDYaATX/gAEHNP9QIQavUEIBESEQEkQ2GgE1/4ABAjT/UCEGr1BCAPtJIRQMQABISSEVDEAAHiEVEkQ2GgE2GgJQNhoDUDX/gAEJNP9QgRivUEIAzyEUEkQ0ASQSRCI2GgGIB9xXMglJNf8jWzT/IlVNFjUHQge4SSEWDEAAGiEWEkQ2GgE2GgJQNf+AAQg0/1AhBa9QQgCLgdHSpW4SRDYaATYaAlA1/4ABBTT/UCEFr1BCAG42GgIXNQQ2GgM2GgEXSSEXDEAF/kkkDEAAUyQSRCQ0ARJENARJIhJMNAISEUQpZChkUEk1A1cAIDX/gASRJzTzsDIGIRgPRDT/MQASRDT/NANXICA0A1dAIDQDV2AgNANXgCA0A1egIDIGQgZzSCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSklXACA1/1cgIDX+V0AgNf1XYCA1/FeAIDX7V6AgNfqBwAFbNflJNQU1+IAEJqm6PzT4ULAyBiEYDEQ0+CJVSSEZDEADNUmBBwxAAhRJIQQMQAHZSSEaDEABFyEaEkQ0+FcBSDX3NPdXACA19jT3VyAgNfU09yEGWzX0NPY0+hI18zT1NPoSNfI08zTyFBA08xQ08hARRCI09ogGZlcyCUk18CNbNPAiVU018TT0NPEORCEErzT/UDT2iAZGVwkpSTXvVwEoNO8iVU1JNfAiWzXvNPBXCCA09RI07zT0DxBENPYpNPaIBhooNPE09AkWUDXuVwAyNO5QZjT1KTT1iAYBKCI09YgF+lcyCUk17iNbNO4iVU009AgWUDXuVwAyNO5QZjT2KTT2iAXXKDTvNPQJFjT1UFA17klXAAk07lBMVzIJUGaACQAAAAAAAA6LAbAoNQcqNPZQNPVQNPQWULA0/zT+NP00/DT7NPoyBkIE5kg0+FcBKDX3NPdXACA19jT3JVs19TEANPoSNfQ09jT6EjXzNPQ08xQQNPQUNPMQEUQiMQCIBVpXMglJNfEjWzTxIlVNNfI09TTyDkQxACkxAIgFPSg08jT1CRZQNfFXADI08VBmNPYpNPaIBSQoIjT2iAUdVzIJSTXxI1s08SJVTTT1CBZQNfFXADI08VBmgAkAAAAAAAANZgGwKDUHKjEAUDT2UDT1FlCwNP80/jT9NPw0+zT6MgZCBCtINPhXASA19zEANP8SMQA0+xIRRIAJAAAAAAAADE4BsCg1BzT/NP40/TT8NPs09zIGQgP3SYEGDEAAkUg0+FcBKDX3NPdXACA19jT3JVs19TEANP8SMQA0+xIRRDT2KTT2iARyKCI09ogEa1cyCUk19CNbNPQiVU009QgWUDX0VwAyNPRQZjT/KTT/iARIKDT5NPUIFlA19FcJMjT0TFBmgAkAAAAAAAALRAGwKDUHKjT8UDT2UDT1FlCwNP80/jT9NPw0+zT6MgZCA19INPhXASg19zT3VwAgNfYxADT2E0QhBK80/1AxAIgD6lcJKUk19FcBKDT0IlVNIls09yVbCDX1MQApMQCIA8soNPUWNPZQUDX0SVcACTT0UExXMglQZoAJAAAAAAAACjIBsCg1BysxAFA09lA09RZQsDT/NP40/TT8NPs0+jIGQgLdSYECDEAA8EkhFwxAALVJJAxAAC1IMQA0/xIxADT7EhFEgAkAAAAAAAAJJAGwKDUHNP80/jT9NPw0+zT6MgZCApxINPhXASg19zT3VwAgNfYxADT2E0QhBK80/1AxAIgDJ1cJKUk19FcBKDT0IlVNIls09yVbCTX1MQApMQCIAwgoNPUWNPZQUDX0SVcACTT0UExXMglQZoAJAAAAAAAACBkBsCg1BysxAFA09lA09RZQsDT/NP40/TT8NPs0+jIGQgIaSDT4VwEgNfcxADT/EjEANPsSEUSACQAAAAAAAAcLAbAoNQc0/zT+NP00/DT3NPoyBkIB5kkjDEAAlUg0+FcBKDX3NPdXACA19jT3JVs19SI09ogCcFcyCUk18yNbNPMiVU019DEANPYSRDT1NPQORDT2KTT2iAJNKDT0NPUJFlA181cAMjTzUGY0/yk0/4gCNCg0+TT1CRZQNfNXCTI080xQZoAJAAAAAAAABgEBsCg1Byo09lA0/FA09RZQsDT/NP40/TT8NPs0+jIGQgFLSDT4VwEoNfc091cAIDX2NPclWzX1MQA09hNENPUiMQCIAdNXMglJNfQjWzT0IlVNDkQxACkxAIgBvCg09RY09lBQNfRJVwAJNPRQTFcyCVBmgAkAAAAAAAAE8AGwKDUHKzEAUDT2UDT1FlCwNP80/jT9NPw0+zT6MgZCAM5JIwxAAEojEkQjNAESRDQESSISTDQCEhFEKWQoZFBJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDVyAgNANXQCA0A1eAIDT/NANXYCAyBkIAfkgiNAESRDQESSISTDQCEhFESTUFSUpKVwAgNf9XICA1/ldAgDX9V8AgNfxX4CA1+4GAAiVYNfqABNUmk2o0/1A0/lA0/VA0/FA0+1A0+lCwgaCNBogA4TEANP9QNP5QNPxQNPpQKUsBVwB/ZyhLAVd/IWdIIzUBMgY1AkIAbTX/Nf41/TX8Nfs1+jX5IjT5iACXVwAJSTX3I1s09yJVTTX4NPk0+lA0+1A0/FA0/VA0/lA0+BZQKUsBVwB/ZyhLAVd/SWdIJDUBMgY1AkIAHDEZIRkSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wkkxGGFAAAVIIQeviSliiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 59,
  stateKeys: 2,
  stateSize: 200,
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
                  }
                ],
                "internalType": "struct T3",
                "name": "v949",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v950",
                "type": "tuple"
              },
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
                "internalType": "struct T6",
                "name": "v951",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v952",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v953",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v954",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v949",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v950",
                "type": "tuple"
              },
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
                "internalType": "struct T6",
                "name": "v951",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v952",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v953",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v954",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
        "internalType": "struct T13",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_approve0_99",
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
                    "internalType": "struct T14",
                    "name": "_burn0_99",
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
                    "internalType": "struct T15",
                    "name": "_cCM0_99",
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
                    "internalType": "struct T14",
                    "name": "_decreaseAllowance0_99",
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
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_docHash0_99",
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
                    "internalType": "struct T14",
                    "name": "_increaseAllowance0_99",
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
                    "internalType": "struct T14",
                    "name": "_mint0_99",
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
                    "internalType": "struct T15",
                    "name": "_realCentralCtc0_99",
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
                    "internalType": "struct T14",
                    "name": "_transfer0_99",
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
                    "internalType": "struct T18",
                    "name": "_transferFrom0_99",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1220",
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
        "internalType": "struct T13",
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
    "name": "_reach_oe_v1264",
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
    "name": "_reach_oe_v1537",
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
    "name": "_reach_oe_v1803",
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
    "name": "_reach_oe_v2073",
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
    "name": "_reach_oe_v2340",
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
    "name": "_reach_oe_v2610",
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
    "name": "_reach_oe_v2884",
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
    "name": "_reach_oe_v3150",
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
    "name": "_reach_oe_v3430",
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
    "name": "_reach_oe_v3723",
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
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_amt",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "_spender",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
        "internalType": "struct T13",
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
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_approve0_99",
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
                    "internalType": "struct T14",
                    "name": "_burn0_99",
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
                    "internalType": "struct T15",
                    "name": "_cCM0_99",
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
                    "internalType": "struct T14",
                    "name": "_decreaseAllowance0_99",
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
                        "internalType": "struct T16",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_docHash0_99",
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
                    "internalType": "struct T14",
                    "name": "_increaseAllowance0_99",
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
                    "internalType": "struct T14",
                    "name": "_mint0_99",
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
                    "internalType": "struct T15",
                    "name": "_realCentralCtc0_99",
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
                    "internalType": "struct T14",
                    "name": "_transfer0_99",
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
                    "internalType": "struct T18",
                    "name": "_transferFrom0_99",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1220",
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
        "internalType": "struct T13",
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
        "name": "v7864",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "v7865",
        "type": "address"
      }
    ],
    "name": "allowance",
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
    "name": "approve",
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
        "name": "v7867",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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
    "name": "burn",
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
    "name": "decimals",
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
    "name": "decreaseAllowance",
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
        "internalType": "struct T16",
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
    "name": "increaseAllowance",
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
    "name": "mint",
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
    "name": "name",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
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
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "realCentralCtc",
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
    "name": "symbol",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
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
    "inputs": [],
    "name": "totalSupply",
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
    "name": "transfer",
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
    "name": "transferFrom",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620041bf380380620041bf833981016040819052620000269162000321565b60008055436003556040517f1c915ae825cec1d0020298db77b25387a47a53daea50c53e3872ad9a2c46893c9062000062903390849062000419565b60405180910390a1620000783415600d6200014a565b6040805160a080820183526000808352835160208082018652828252808501918252855180820187528381528587019081526060808701858152608080890187815233808b528c870180515189528051880151875280518601516001600160a01b03908116865290518b0151811683526001998a9055439099558b5180880191909152965151878c0152935151928601929092525185169084015251909216818401528451808203909301835260c0019093528051919262000141926002929091019062000174565b50505062000503565b81620001705760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018290620004c6565b90600052602060002090601f016020900481019282620001a65760008555620001f1565b82601f10620001c157805160ff1916838001178555620001f1565b82800160010185558215620001f1579182015b82811115620001f1578251825591602001919060010190620001d4565b50620001ff92915062000203565b5090565b5b80821115620001ff576000815560010162000204565b604080519081016001600160401b03811182821017156200024b57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200024b57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200024b57634e487b7160e01b600052604160045260246000fd5b600060208284031215620002c657600080fd5b604051602081016001600160401b0381118282101715620002f757634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b80516001600160a01b03811681146200031c57600080fd5b919050565b60008183036101408112156200033657600080fd5b620003406200021a565b8351815261012080601f19840112156200035957600080fd5b6200036362000251565b620003728760208801620002b3565b8152620003838760408801620002b3565b60208201526080605f19850112156200039b57600080fd5b620003a562000282565b9350606086015184526080860151602085015260a0860151604085015260c08601516060850152836040820152620003e060e0870162000304565b6060820152620003f4610100870162000304565b60808201526200040682870162000304565b60a0820152602083015250949350505050565b60006101608201905060018060a01b038416825282516020830152602083015180515160408401526020810151516060840152604081015180516080850152602081015160a0850152604081015160c0850152606081015160e0850152506060810151620004936101008501826001600160a01b03169052565b5060808101516001600160a01b0381166101208501525060a001516001600160a01b038116610140840152509392505050565b600181811c90821680620004db57607f821691505b60208210811415620004fd57634e487b7160e01b600052602260045260246000fd5b50919050565b613cac80620005136000396000f3fe60806040526004361061015b5760003560e01c806354f2991c116100c85780639dc29fac11610084578063a9059cbb11610061578063a9059cbb14610365578063ab53f2c614610378578063cadc2e7a1461039b578063dd62ed3e146103c857005b80639dc29fac1461032c578063a457c2d71461033f578063a7661d541461035257005b806354f2991c1461029c57806370a08231146102af57806374fcef12146102cf578063817d57f3146102e2578063832307571461030257806395d89b411461031757005b80632c10a159116101175780632c10a1591461020e578063313ce56714610221578063375797651461023657806339509351146102495780633bc5b7bf1461025c57806340c10f191461028957005b806306fdde0314610164578063095ea7b31461018d57806318160ddd146101b05780631e93b0f1146101d357806323b872dd146101e85780632644a4bc146101fb57005b3661016257005b005b34801561017057600080fd5b506101796103e8565b604051905181526020015b60405180910390f35b6101a061019b366004613338565b610576565b6040519015158152602001610184565b3480156101bc57600080fd5b506101c56105dc565b604051908152602001610184565b3480156101df57600080fd5b506003546101c5565b6101a06101f6366004613364565b61075a565b6101626102093660046133a5565b6107d1565b61016261021c3660046133be565b6107f5565b34801561022d57600080fd5b506101c5610815565b6101a06102443660046133d0565b610992565b6101a0610257366004613338565b6109f4565b34801561026857600080fd5b5061027c6102773660046133d0565b610a5c565b6040516101849190613413565b6101a0610297366004613338565b610a82565b6101a06102aa366004613548565b610aea565b3480156102bb57600080fd5b506101c56102ca3660046133d0565b610b42565b6101a06102dd3660046133d0565b610cfb565b3480156102ee57600080fd5b5061027c6102fd3660046133d0565b610d5c565b34801561030e57600080fd5b506001546101c5565b34801561032357600080fd5b50610179610d82565b6101a061033a366004613338565b610f0d565b6101a061034d366004613338565b610f74565b6101626103603660046133be565b610fdc565b6101a0610373366004613338565b610ffc565b34801561038457600080fd5b5061038d611066565b604051610184929190613564565b3480156103a757600080fd5b506103bb6103b63660046133d0565b611103565b60405161018491906135c1565b3480156103d457600080fd5b506101c56103e3366004613605565b611114565b604080516020810190915260008152600160005414156104b2576000600280546104119061363e565b80601f016020809104026020016040519081016040528092919081815260200182805461043d9061363e565b801561048a5780601f1061045f5761010080835404028352916020019161048a565b820191906000526020600020905b81548152906001019060200180831161046d57829003601f168201915b50505050508060200190518101906104a29190613697565b90506104b06000600a61131f565b505b60046000541415610567576000600280546104cc9061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546104f89061363e565b80156105455780601f1061051a57610100808354040283529160200191610545565b820191906000526020600020905b81548152906001019060200180831161052857829003601f168201915b505050505080602001905181019061055d919061373b565b6020015192915050565b6105736000600a61131f565b90565b6000610580612dc5565b610588612e19565b610590612e38565b6040805180820182526001600160a01b03881681526020808201889052838101919091526000835281518082019092528282528301526105d08284611344565b50505190505b92915050565b600060016000541415610699576000600280546105f89061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546106249061363e565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b50505050508060200190518101906106899190613697565b90506106976000600c61131f565b505b6004600054141561074e576000600280546106b39061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546106df9061363e565b801561072c5780601f106107015761010080835404028352916020019161072c565b820191906000526020600020905b81548152906001019060200180831161070f57829003601f168201915b5050505050806020019051810190610744919061373b565b60c0015192915050565b6105736000600c61131f565b6000610764612dc5565b61076c612e19565b610774612e38565b604080516060810182526001600160a01b0389811682528816602082015290810186905261014082015260098181905250604080516020808201909252828152908301526107c28284611344565b50506101200151949350505050565b6107d9612dc5565b6107f16107eb368490038401846138eb565b82611344565b5050565b6107fd612dc5565b6107f161080f36849003840184613a0b565b826126c4565b6000600160005414156108d2576000600280546108319061363e565b80601f016020809104026020016040519081016040528092919081815260200182805461085d9061363e565b80156108aa5780601f1061087f576101008083540402835291602001916108aa565b820191906000526020600020905b81548152906001019060200180831161088d57829003601f168201915b50505050508060200190518101906108c29190613697565b90506108d06000600961131f565b505b60046000541415610986576000600280546108ec9061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546109189061363e565b80156109655780601f1061093a57610100808354040283529160200191610965565b820191906000526020600020905b81548152906001019060200180831161094857829003601f168201915b505050505080602001905181019061097d919061373b565b50601292915050565b6105736000600961131f565b600061099c612dc5565b6109a4612e19565b6109ac612e38565b60408051602080820183526001600160a01b03881682526101008401919091526007835281518082019092528282528301526109e88284611344565b505060e0015192915050565b60006109fe612dc5565b610a06612e19565b610a0e612e38565b6040805180820182526001600160a01b0388168152602080820188905260c0840191909152600583528151808201909252828252830152610a4f8284611344565b505060a001519392505050565b60408051606081018252600080825260208201819052918101919091526105d68261286b565b6000610a8c612dc5565b610a94612e19565b610a9c612e38565b6040805180820182526001600160a01b0388168152602080820188905260e0840191909152600683528151808201909252828252830152610add8284611344565b505060c001519392505050565b6000610af4612dc5565b610afc612e19565b610b04612e38565b604080516020808201835287825260a0840191909152600483528151808201909252828252830152610b368284611344565b50506080015192915050565b600060016000541415610bff57600060028054610b5e9061363e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8a9061363e565b8015610bd75780601f10610bac57610100808354040283529160200191610bd7565b820191906000526020600020905b815481529060010190602001808311610bba57829003601f168201915b5050505050806020019051810190610bef9190613697565b9050610bfd6000600861131f565b505b60046000541415610cea57600060028054610c199061363e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c459061363e565b8015610c925780601f10610c6757610100808354040283529160200191610c92565b820191906000526020600020905b815481529060010190602001808311610c7557829003601f168201915b5050505050806020019051810190610caa919061373b565b90506001610cb78461293d565b516001811115610cc957610cc96133ed565b14610cd5576000610ce3565b610cde8361293d565b604001515b9392505050565b610cf66000600861131f565b919050565b6000610d05612dc5565b610d0d612e19565b610d15612e38565b60408051602080820183526001600160a01b03881682526060840191909152600283528151808201909252828252830152610d508284611344565b50506040015192915050565b60408051606081018252600080825260208201819052918101919091526105d68261293d565b60408051602081019091526000815260016000541415610e4c57600060028054610dab9061363e565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd79061363e565b8015610e245780601f10610df957610100808354040283529160200191610e24565b820191906000526020600020905b815481529060010190602001808311610e0757829003601f168201915b5050505050806020019051810190610e3c9190613697565b9050610e4a6000600b61131f565b505b60046000541415610f0157600060028054610e669061363e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e929061363e565b8015610edf5780601f10610eb457610100808354040283529160200191610edf565b820191906000526020600020905b815481529060010190602001808311610ec257829003601f168201915b5050505050806020019051810190610ef7919061373b565b6040015192915050565b6105736000600b61131f565b6000610f17612dc5565b610f1f612e19565b610f27612e38565b6040805180820182526001600160a01b0388168152602080820188905283830191909152600183528151808201909252828252830152610f678284611344565b5050602001519392505050565b6000610f7e612dc5565b610f86612e19565b610f8e612e38565b6040805180820182526001600160a01b038816815260208082018890526080840191909152600383528151808201909252828252830152610fcf8284611344565b5050606001519392505050565b610fe4612dc5565b6107f1610ff636849003840184613a0b565b826129ca565b6000611006612dc5565b61100e612e19565b611016612e38565b6040805180820182526001600160a01b038816815260208082018890526101208401919091526008835281518082019092528282528301526110588284611344565b505061010001519392505050565b60006060600054600280805461107b9061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546110a79061363e565b80156110f45780601f106110c9576101008083540402835291602001916110f4565b820191906000526020600020905b8154815290600101906020018083116110d757829003601f168201915b50505050509050915091509091565b61110b612f7a565b6105d682612b81565b6000600160005414156111d1576000600280546111309061363e565b80601f016020809104026020016040519081016040528092919081815260200182805461115c9061363e565b80156111a95780601f1061117e576101008083540402835291602001916111a9565b820191906000526020600020905b81548152906001019060200180831161118c57829003601f168201915b50505050508060200190518101906111c19190613697565b90506111cf6000600761131f565b505b60046000541415611317576000600280546111eb9061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546112179061363e565b80156112645780601f1061123957610100808354040283529160200191611264565b820191906000526020600020905b81548152906001019060200180831161124757829003601f168201915b505050505080602001905181019061127c919061373b565b9050611286612fae565b6020808201805160009052835190516001600160a01b0390911691015260016112ae86612b81565b5160018111156112c0576112c06133ed565b146112cf5780602001516112dd565b6112d885612b81565b604001515b60408201819052602001516001600160a01b038581169116141561130857604081015151815261130d565b600081525b5191506105d69050565b6105d6600060075b816107f15760405163100960cb60e01b81526004810182905260240160405180910390fd5b611354600460005414602b61131f565b815161136f90158061136857508251600154145b602c61131f565b6000808055600280546113819061363e565b80601f01602080910402602001604051908101604052809291908181526020018280546113ad9061363e565b80156113fa5780601f106113cf576101008083540402835291602001916113fa565b820191906000526020600020905b8154815290600101906020018083116113dd57829003601f168201915b5050505050806020019051810190611412919061373b565b905061141c612ff9565b61142b6000194310602d61131f565b7fd953d7b0baf03d2b96ce8e27dd2e14f869206a02a995c498e145f8f1bdc6b9fc338560405161145c929190613a88565b60405180910390a1600060208501515151600981111561147e5761147e6133ed565b141561165a57602080850151510151815261149b3415601261131f565b8051516114c2906001600160a01b031633146114b85760016114bb565b60005b601361131f565b61150b60016114d03361293d565b5160018111156114e2576114e26133ed565b146114ee5760006114fc565b6114f73361293d565b604001515b8251602001511115601461131f565b805160209081015181830180519190915282515181516001600160a01b039182169084015233600090815260058452604090819020805460ff191660019081178255935180518583015585015160029091018054919093166001600160a01b031990911617909155519081527f7ed7fe3c55245ab10f0c657f73bd67de3ff671aec4fc6d87167d657d35051498910160405180910390a160018352805180516020909101516040517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925926115e0923392613bed565b60405180910390a16115f061322e565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519085169101526080860151828501805191851690915260a0870151815194169390920192909252514391015261165481612c4f565b506126be565b6001602085015151516009811115611674576116746133ed565b141561183b57602084015151604090810151908201526116963415601561131f565b60016040820151516116a79061293d565b5160018111156116b9576116b96133ed565b146116c55760006116d9565b6040810151516116d49061293d565b604001515b60608201526040810151516116fa906001600160a01b03163314601661131f565b61171481606001518260400151602001511115601761131f565b60408181018051516001600160a01b0316600090815260066020908152929020805460ff1916600117905551015160608201516117519190613c27565b60408281018051516001600160a01b03908116600090815260066020908152848220600190810196909655875190921681526004825292909220805460ff19169093179092559051015160c08301516117aa9190613c27565b82516001600160a01b031660009081526004602090815260409182902060019081019390935590519182527fd3c1ca5383bc5de20a21ba078fdf7922dabba4ff4dde0b4004d52d8d318b9e6f910160405180910390a160016020808501919091526040808301518051606086015191909301519151600080516020613c57833981519152936115e093909291613bed565b6002602085015151516009811115611855576118556133ed565b141561195b576020840151516060015160808201526118763415601861131f565b81516118b3906001600160a01b031633146118a95782608001516001600160a01b0316336001600160a01b0316146118ac565b60015b601961131f565b604051600181527fc640253c89995bb6ef62dd0ba611b52dd3652e768f406e3370eb20fb28aaf9d79060200160405180910390a1600160408401526118f661322e565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551908516910152608085015151828501805191851690915260a0870151815194169390920192909252514391015261165481612c4f565b6003602085015151516009811115611975576119756133ed565b1415611b0b576020840151516080015160a08201526119963415601a61131f565b60a0810151516119c0906001600160a01b031633146119b65760016119b9565b60005b601b61131f565b60c08101805160009052825190516001600160a01b0390911660209182015260a0820151015160016119f133612b81565b516001811115611a0357611a036133ed565b14611a12578160c00151611a20565b611a1b33612b81565b604001515b51611a2b9190613c27565b60e08201819052610100820180519190915260a08201515181516001600160a01b0391821660209182015233600090815260058252604090819020805460ff191660019081178255945180518683015583015160029091018054919094166001600160a01b03199091161790925590519182527f777100ae955bf9fa908be81de917d6b910788911caadc85d438e58b8df67357a910160405180910390a16001606084015260a08101515160e08201516040517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925926115e0923392613bed565b6004602085015151516009811115611b2557611b256133ed565b1415611bb757611b373415601c61131f565b8151611b74906001600160a01b03163314611b6a5782608001516001600160a01b0316336001600160a01b031614611b6d565b60015b601d61131f565b604051600181527faf45c55096c59176dad377f42b6044047b85b40b27443a0f02a6cb4e10daadcd9060200160405180910390a1600160808401526115f061322e565b6005602085015151516009811115611bd157611bd16133ed565b1415611d705760208401515160c00151610120820152611bf33415601e61131f565b61012081015151611c1e906001600160a01b03163314611c14576001611c17565b60005b601f61131f565b6101408101805160009052825190516001600160a01b0390911660209182015261012082015101516001611c5133612b81565b516001811115611c6357611c636133ed565b14611c7357816101400151611c81565b611c7c33612b81565b604001515b51611c8c9190613c3e565b610160820181905261018082018051919091526101208201515181516001600160a01b0391821660209182015233600090815260058252604090819020805460ff191660019081178255945180518683015583015160029091018054919094166001600160a01b03199091161790925590519182527f06537aa9ad563b70512173f9d3ae0f2036749005884b38c3615f73246b9638d4910160405180910390a1600160a0840152610120810151516101608201516040517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925926115e0923392613bed565b6006602085015151516009811115611d8a57611d8a6133ed565b1415611f54576020808501515160e001516101a0830152611dad9034159061131f565b8151611dea906001600160a01b03163314611de05782608001516001600160a01b0316336001600160a01b031614611de3565b60015b602161131f565b6101a081018051516001600160a01b03166000908152600660209081526040909120805460ff191660019081179091559151908101519051909190611e2e9061293d565b516001811115611e4057611e406133ed565b14611e4c576000611e61565b6101a082015151611e5c9061293d565b604001515b611e6b9190613c3e565b6101a082018051516001600160a01b0390811660009081526006602090815260408083206001908101969096558751909316825260048152919020805460ff191690931790925551015160c0830151611ec49190613c3e565b82516001600160a01b031660009081526004602090815260409182902060019081019390935590519182527f411e0fd66d13bc1bda8b57f1db305f5486cb1dec99913ae49623d82892cff960910160405180910390a1600160c084015260608201516101a08201518051602090910151604051600080516020613c57833981519152936115e09390929091613bed565b6007602085015151516009811115611f6e57611f6e6133ed565b14156120775760208401515161010001516101c0820152611f913415602261131f565b8151611fce906001600160a01b03163314611fc45782608001516001600160a01b0316336001600160a01b031614611fc7565b60015b602361131f565b604051600181527f7279cc4769205264d9a3ca5baa146a16b9ba69c555780c435190d335dd9875fa9060200160405180910390a1600160e084015261201161322e565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551908516910152608086015182850180519185169091526101c086015151815194169390920192909252514391015261165481612c4f565b6008602085015151516009811115612091576120916133ed565b14156122d55760208401515161012001516101e08201526120b43415602461131f565b60a082018051336001600160a01b0391821614610200840181905291516101e0840151518216911614610220830152612130906120f2576000612106565b816102200151612103576001612106565b60005b6121265781610200015161211f57816102200151612129565b6000612129565b60015b602561131f565b600161213b3361293d565b51600181111561214d5761214d6133ed565b14612159576000612167565b6121623361293d565b604001515b61024082018190526101e082015160200151612186911015602661131f565b336000908152600660209081526040909120805460ff191660011790556101e082015101516102408201516121bb9190613c27565b3360009081526006602090815260408083206001908101949094556101e085018051516001600160a01b031684529220805460ff19168417905590519081015190519091906122099061293d565b51600181111561221b5761221b6133ed565b1461222757600061223c565b6101e0820151516122379061293d565b604001515b6122469190613c3e565b6101e0820151516001600160a01b031660009081526006602090815260409182902060019081019390935590519182527fa03872813cb281db17bd6bbbc4c59cfdddad80921ea17ba8b4e338dbd40d05f1910160405180910390a160016101008401526101e08101518051602090910151604051600080516020613c57833981519152926115e0923392613bed565b60096020850151515160098111156122ef576122ef6133ed565b14156126be5760208401515161014001516102608201526123123415602761131f565b60a08201805161026083015180516001600160a01b0392831690831614610280850181905292516020909101519082169116146102a08301526123989061235a57600061236e565b816102a0015161236b57600161236e565b60005b61238e5781610280015161238757816102a00151612391565b6000612391565b60015b602861131f565b6001610260820151516123aa9061293d565b5160018111156123bc576123bc6133ed565b146123c85760006123dd565b610260810151516123d89061293d565b604001515b6102c08201819052610260820151604001516123fc911015602961131f565b6102e08101805160009052825190516001600160a01b0390911660209091015260016102608201515161242e90612b81565b516001811115612440576124406133ed565b1461245057806102e00151612465565b6102608101515161246090612b81565b604001515b8161030001819052506124be816102600151602001516001600160a01b0316826103000151602001516001600160a01b0316146124a35760006124b7565b610260820151604001516103008301515110155b602a61131f565b61026081018051516001600160a01b031660009081526006602052604090819020805460ff19166001179055905101516102c08201516124fe9190613c27565b61026082018051516001600160a01b0390811660009081526006602090815260408083206001908101969096558451820151909316825290829020805460ff1916851790559151908101519101519091906125589061293d565b51600181111561256a5761256a6133ed565b1461257657600061258d565b6125888261026001516020015161293d565b604001515b6125979190613c3e565b610260820180516020908101516001600160a01b03166000908152600690915260409081902060010192909255510151610300820151516125d89190613c27565b61032082018051919091526102608201805160209081015183516001600160a01b039182169083015282515181166000908152600583526040808220805460ff19166001908117909155955194515183168252908190208451818701559383015160029094018054949092166001600160a01b031990941693909317905590519182527fb146449d77bff126e23416531c87aa5394f6dcf3a320ad0ea6b0e3991d93baa4910160405180910390a16001610120840152610260810151805160208201516040928301519251600080516020613c57833981519152936115e0939291613bed565b50505050565b6126d4600160005414601061131f565b81516126ef9015806126e857508251600154145b601161131f565b6000808055600280546127019061363e565b80601f016020809104026020016040519081016040528092919081815260200182805461272d9061363e565b801561277a5780601f1061274f5761010080835404028352916020019161277a565b820191906000526020600020905b81548152906001019060200180831161275d57829003601f168201915b50505050508060200190518101906127929190613697565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16127e93415600e61131f565b8051612801906001600160a01b03163314600f61131f565b61280961322e565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260808501518451908416606091820152855183860180519186169091529086015181519416939092019290925251439101526126be81612c4f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156128b7576128b76133ed565b141561292e576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156128f8576128f86133ed565b6001811115612909576129096133ed565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612989576129896133ed565b141561292e576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156128f8576128f86133ed565b6129da600460005414603061131f565b81516129f59015806129ee57508251600154145b603161131f565b600080805560028054612a079061363e565b80601f0160208091040260200160405190810160405280929190818152602001828054612a339061363e565b8015612a805780601f10612a5557610100808354040283529160200191612a80565b820191906000526020600020905b815481529060010190602001808311612a6357829003601f168201915b5050505050806020019051810190612a98919061373b565b9050612aaa600019431015603261131f565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1612afd3415602e61131f565b8051612b15906001600160a01b03163314602f61131f565b612b1d61322e565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260608086015185519085169101526080850151828501805191851690915260a086015181519416939092019290925251439101526126be81612c4f565b612b89612f7a565b60016001600160a01b03831660009081526005602052604090205460ff166001811115612bb857612bb86133ed565b141561292e576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115612bf957612bf96133ed565b6001811115612c0a57612c0a6133ed565b81528154610100900460ff161515602080830191909152604080518082018252600185015481526002909401546001600160a01b031691840191909152015292915050565b6040805160208101909152600081526001825151612c6c9061286b565b516001811115612c7e57612c7e6133ed565b14612c8a576000612c9b565b815151612c969061286b565b604001515b81526040805160e0810182526000808252825160208082018552828252808401919091528351908101845281815292820192909252606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b0180515189166080808c0191825291518801518a1660a0808d019182528d5160c0808f0191825260046000554360015589519b8c019c909c52985151978a0197909752945151938801939093529051881690860152518616918401919091525190931691810191909152905160e082015261010001604051602081830303815290604052600290805190602001906126be929190613274565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b604051806040016040528060008152602001612e336132f8565b905290565b6040805161016081019091528060008152602001612e66604080518082019091526000808252602082015290565b8152602001612e85604080518082019091526000808252602082015290565b8152604080516020818101909252600081529101908152602001612eb9604080518082019091526000808252602082015290565b8152602001612ee560408051608081018252600060208201818152928201819052606082015290815290565b8152602001612f04604080518082019091526000808252602082015290565b8152602001612f23604080518082019091526000808252602082015290565b8152604080516020818101909252600081529101908152602001612f57604080518082019091526000808252602082015290565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160608101909152806000815260006020820152604001612e33604080518082019091526000808252602082015290565b604051806060016040528060008152602001612fda604080518082019091526000808252602082015290565b8152602001612e33604080518082019091526000808252602082015290565b6040805161038081019091526000610340820181815261036083019190915281908152602001613039604080518082019091526000808252602082015290565b8152602001613058604080518082019091526000808252602082015290565b815260200160008152602001613083604051806020016040528060006001600160a01b031681525090565b81526020016130a2604080518082019091526000808252602082015290565b81526020016130c1604080518082019091526000808252602082015290565b8152602001600081526020016130e7604080518082019091526000808252602082015290565b8152602001613106604080518082019091526000808252602082015290565b8152602001613125604080518082019091526000808252602082015290565b81526020016000815260200161314b604080518082019091526000808252602082015290565b815260200161316a604080518082019091526000808252602082015290565b815260408051602081810190925260008152910190815260200161319e604080518082019091526000808252602082015290565b81526000602082018190526040820181905260608201526080016131db604080516060810182526000808252602082018190529181019190915290565b815260006020820181905260408201819052606082015260800161320f604080518082019091526000808252602082015290565b8152602001612fda604080518082019091526000808252602082015290565b6040805160c081018252600081830181815283516020808201865283825260608501919091528451908101909452818452608083019390935260a0820152908190612f57565b8280546132809061363e565b90600052602060002090601f0160209004810192826132a257600085556132e8565b82601f106132bb57805160ff19168380011785556132e8565b828001600101855582156132e8579182015b828111156132e85782518255916020019190600101906132cd565b506132f492915061330b565b5090565b6040518060200160405280612e33612e38565b5b808211156132f4576000815560010161330c565b6001600160a01b038116811461333557600080fd5b50565b6000806040838503121561334b57600080fd5b823561335681613320565b946020939093013593505050565b60008060006060848603121561337957600080fd5b833561338481613320565b9250602084013561339481613320565b929592945050506040919091013590565b60006102c082840312156133b857600080fd5b50919050565b6000604082840312156133b857600080fd5b6000602082840312156133e257600080fd5b8135610ce381613320565b634e487b7160e01b600052602160045260246000fd5b60028110613335576133356133ed565b8151606082019061342381613403565b808352506020830151151560208301526040830151604083015292915050565b6040516060810167ffffffffffffffff8111828210171561347457634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561347457634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561347457634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561347457634e487b7160e01b600052604160045260246000fd5b60006060828403121561352057600080fd5b613528613443565b905081358152602082013560208201526040820135604082015292915050565b60006060828403121561355a57600080fd5b610ce3838361350e565b82815260006020604081840152835180604085015260005b818110156135985785810183015185820160600152820161357c565b818111156135aa576000606083870101525b50601f01601f191692909201606001949350505050565b815160808201906135d181613403565b825260208381015115158184015260409384015180519484019490945292909201516001600160a01b031660609091015290565b6000806040838503121561361857600080fd5b823561362381613320565b9150602083013561363381613320565b809150509250929050565b600181811c9082168061365257607f821691505b602082108114156133b857634e487b7160e01b600052602260045260246000fd5b60006020828403121561368557600080fd5b61368d61347a565b9151825250919050565b600060a082840312156136a957600080fd5b60405160a0810181811067ffffffffffffffff821117156136da57634e487b7160e01b600052604160045260246000fd5b60405282516136e881613320565b81526136f78460208501613673565b60208201526137098460408501613673565b6040820152606083015161371c81613320565b6060820152608083015161372f81613320565b60808201529392505050565b600060e0828403121561374d57600080fd5b60405160e0810181811067ffffffffffffffff8211171561377e57634e487b7160e01b600052604160045260246000fd5b604052825161378c81613320565b815261379b8460208501613673565b60208201526137ad8460408501613673565b604082015260608301516137c081613320565b606082015260808301516137d381613320565b608082015260a08301516137e681613320565b60a082015260c0928301519281019290925250919050565b8035600a8110610cf657600080fd5b60006040828403121561381f57600080fd5b6138276134ab565b9050813561383481613320565b808252506020820135602082015292915050565b60006020828403121561385a57600080fd5b61386261347a565b9050813561386f81613320565b815292915050565b60006060828403121561388957600080fd5b61389161347a565b905061386f838361350e565b6000606082840312156138af57600080fd5b6138b7613443565b905081356138c481613320565b815260208201356138d481613320565b806020830152506040820135604082015292915050565b60008183036102c08112156138ff57600080fd5b6139076134ab565b833581526102a0601f198301121561391e57600080fd5b61392661347a565b91506139306134dc565b61393c602086016137fe565b815261394b866040870161380d565b602082015261395d866080870161380d565b604082015261396f8660c08701613848565b60608201526139818660e0870161380d565b608082015261012061399587828801613877565b60a08301526139a887610180880161380d565b60c08301526139bb876101c0880161380d565b60e08301526139ce876102008801613848565b6101008301526139e287610220880161380d565b908201526139f486610260870161389d565b610140820152825260208101919091529392505050565b600060408284031215613a1d57600080fd5b6040516040810181811067ffffffffffffffff82111715613a4e57634e487b7160e01b600052604160045260246000fd5b6040528235815260208301358015158114613a6857600080fd5b60208201529392505050565b600a8110613a8457613a846133ed565b9052565b60006102e08201905060018060a01b038416825282516020830152602083015151613ab7604084018251613a74565b60208181015180516001600160a01b0316606086015290810151608085015250604081015180516001600160a01b031660a0850152602081015160c085015250606081015180516001600160a01b031660e0850152506080810151610100613b348186018380516001600160a01b03168252602090810151910152565b60a08301519150610140613b5f81870184518051825260208082015190830152604090810151910152565b60c084015180516001600160a01b039081166101a08901526020918201516101c089015260e0860151805182166101e08a015282015161020089015292850151518316610220880152610120850151805184166102408901528101516102608801529301518051821661028087015292830151166102a08501525060408101516102c0840152509392505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015613c3957613c39613c11565b500390565b60008219821115613c5157613c51613c11565b50019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208539e4127b3780b19db7f7bbb1a84b699035c34b75b3df4cdaaf34c1c821a26564736f6c634300080c0033`,
  BytecodeLen: 16831,
  Which: `oD`,
  version: 7,
  views: {
    allowance: `allowance`,
    balanceOf: `balanceOf`,
    decimals: `decimals`,
    name: `name`,
    symbol: `symbol`,
    totalSupply: `totalSupply`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:330:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:116:75:after expr stmt semicolon',
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
  "approve": approve,
  "burn": burn,
  "cCM": cCM,
  "decreaseAllowance": decreaseAllowance,
  "docHash": docHash,
  "increaseAllowance": increaseAllowance,
  "mint": mint,
  "realCentralCtc": realCentralCtc,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  burn: burn,
  cCM: cCM,
  decreaseAllowance: decreaseAllowance,
  docHash: docHash,
  increaseAllowance: increaseAllowance,
  mint: mint,
  realCentralCtc: realCentralCtc,
  transfer: transfer,
  transferFrom: transferFrom
  };
