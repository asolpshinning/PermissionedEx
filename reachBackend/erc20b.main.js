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
            const [v712, v713, v714, v716] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v712, v713, v714, v716, v753] = svs;
            return (await ((async (_v725, _v726 ) => {
                const v725 = stdlib.protect(ctc0, _v725, null);
                const v726 = stdlib.protect(ctc0, _v726, null);
              
              let v727;
              const v728 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v725), null);
              const v729 = {
                amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                spender: v712
                };
              const v730 = stdlib.fromSome(v728, v729);
              const v731 = v730.spender;
              const v732 = stdlib.addressEq(v731, v726);
              if (v732) {
                const v733 = v730.amt;
                v727 = v733;
                }
              else {
                v727 = stdlib.checkedBigNumberify('./index.rsh:97:23:decimal', stdlib.UInt_max, '0');
                }
              
              return v727;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      balanceOf: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v712, v713, v714, v716] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v712, v713, v714, v716, v753] = svs;
            return (await ((async (_v734 ) => {
                const v734 = stdlib.protect(ctc0, _v734, null);
              
              const v735 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v734), null);
              const v736 = stdlib.fromSome(v735, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
              
              return v736;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      decimals: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v712, v713, v714, v716] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v712, v713, v714, v716, v753] = svs;
            return (await ((async () => {
              
              
              return stdlib.checkedBigNumberify('./index.rsh:89:31:decimal', stdlib.UInt_max, '18');}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      name: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v712, v713, v714, v716] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v712, v713, v714, v716, v753] = svs;
            return (await ((async () => {
              
              
              return v713;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      symbol: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v712, v713, v714, v716] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v712, v713, v714, v716, v753] = svs;
            return (await ((async () => {
              
              
              return v714;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      totalSupply: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v712, v713, v714, v716] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v712, v713, v714, v716, v753] = svs;
            return (await ((async () => {
              
              
              return v753;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc0],
      4: [ctc0, ctc1, ctc1, ctc0, ctc2]
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
    name: ctc6,
    symbol: ctc6,
    uri: ctc7,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    approve0_86: ctc9,
    burn0_86: ctc9,
    decreaseAllowance0_86: ctc9,
    increaseAllowance0_86: ctc9,
    mint0_86: ctc9,
    transfer0_86: ctc9,
    transferFrom0_86: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  
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
  
  
  const v703 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:66:81:application',
    fs: ['at ./index.rsh:65:17:application call to [unknown function] (defined at: ./index.rsh:65:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v704 = v703.name;
  const v705 = v703.symbol;
  const v706 = v703.uri;
  const v707 = v703.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v704, v705, v706, v707],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:68:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc6, ctc7, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v713, v714, v715, v716], secs: v718, time: v717, didSend: v38, from: v712 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc7, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v713, v714, v715, v716], secs: v718, time: v717, didSend: v38, from: v712 } = txn1;
  ;
  const v720 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v720), {
    at: './index.rsh:70:31:application',
    fs: ['at ./index.rsh:70:31:application call to [unknown function] (defined at: ./index.rsh:70:31:function exp)', 'at ./index.rsh:70:31:application call to "liftedInteract" (defined at: ./index.rsh:70:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716],
    evt_cnt: 0,
    funcNum: 1,
    lct: v717,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v723, time: v722, didSend: v48, from: v721 } = txn2;
      
      ;
      const v738 = v722;
      
      if (await (async () => {
        
        return true;})()) {
        const v752 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
        const v753 = stdlib.fromSome(v752, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
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
    tys: [ctc3, ctc6, ctc6, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v723, time: v722, didSend: v48, from: v721 } = txn2;
  ;
  const v724 = stdlib.addressEq(v712, v721);
  stdlib.assert(v724, {
    at: './index.rsh:74:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v738 = v722;
  
  while (await (async () => {
    
    return true;})()) {
    const v752 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
    const v753 = stdlib.fromSome(v752, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v712, v713, v714, v716, v753],
        evt_cnt: 0,
        funcNum: 4,
        lct: v738,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:262:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v2241, time: v2240, didSend: v677, from: v2239 } = txn4;
          
          ;
          const cv738 = v2240;
          
          await (async () => {
            const v738 = cv738;
            
            if (await (async () => {
              
              return true;})()) {
              const v752 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
              const v753 = stdlib.fromSome(v752, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
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
        tys: [ctc3, ctc6, ctc6, ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2241, time: v2240, didSend: v677, from: v2239 } = txn4;
      ;
      const v2242 = stdlib.addressEq(v712, v2239);
      stdlib.assert(v2242, {
        at: './index.rsh:262:21:dot',
        fs: ['at ./index.rsh:261:40:application call to [unknown function] (defined at: ./index.rsh:261:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv738 = v2240;
      
      v738 = cv738;
      
      continue;
      }
    else {
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn3;
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v943 = v916[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
          const v944 = v916[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '1')];
          const v945 = stdlib.addressEq(v912, v943);
          const v946 = v945 ? false : true;
          stdlib.assert(v946, {
            at: './index.rsh:171:24:application',
            fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v947 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v912), null);
          const v948 = stdlib.fromSome(v947, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v949 = stdlib.le(v944, v948);
          stdlib.assert(v949, {
            at: './index.rsh:172:24:application',
            fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v950 = {
            amt: v944,
            spender: v943
            };
          await stdlib.mapSet(map1, v912, v950);
          const v951 = true;
          await txn3.getOutput('approve', 'v951', ctc12, v951);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
          continue;
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v1150 = v1105[stdlib.checkedBigNumberify('./index.rsh:239:13:spread', stdlib.UInt_max, '0')];
          const v1151 = v1105[stdlib.checkedBigNumberify('./index.rsh:239:13:spread', stdlib.UInt_max, '1')];
          const v1152 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1150), null);
          const v1153 = stdlib.fromSome(v1152, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v1154 = stdlib.le(v1151, v1153);
          stdlib.assert(v1154, {
            at: './index.rsh:251:24:application',
            fs: ['at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1157 = stdlib.sub(v1153, v1151);
          await stdlib.mapSet(map2, v1150, v1157);
          const v1160 = stdlib.sub(v753, v1151);
          await stdlib.mapSet(map0, v712, v1160);
          const v1161 = true;
          await txn3.getOutput('burn', 'v1161', ctc12, v1161);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
          continue;
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v1361 = v1294[stdlib.checkedBigNumberify('./index.rsh:199:13:spread', stdlib.UInt_max, '0')];
          const v1362 = v1294[stdlib.checkedBigNumberify('./index.rsh:199:13:spread', stdlib.UInt_max, '1')];
          const v1363 = stdlib.addressEq(v912, v1361);
          const v1364 = v1363 ? false : true;
          stdlib.assert(v1364, {
            at: './index.rsh:209:24:application',
            fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1365 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v912), null);
          const v1366 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v712
            };
          const v1367 = stdlib.fromSome(v1365, v1366);
          const v1368 = v1367.amt;
          const v1369 = stdlib.sub(v1368, v1362);
          const v1370 = {
            amt: v1369,
            spender: v1361
            };
          await stdlib.mapSet(map1, v912, v1370);
          const v1371 = true;
          await txn3.getOutput('decreaseAllowance', 'v1371', ctc12, v1371);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
          continue;
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v1572 = v1483[stdlib.checkedBigNumberify('./index.rsh:180:13:spread', stdlib.UInt_max, '0')];
          const v1573 = v1483[stdlib.checkedBigNumberify('./index.rsh:180:13:spread', stdlib.UInt_max, '1')];
          const v1574 = stdlib.addressEq(v912, v1572);
          const v1575 = v1574 ? false : true;
          stdlib.assert(v1575, {
            at: './index.rsh:190:24:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1576 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v912), null);
          const v1577 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v712
            };
          const v1578 = stdlib.fromSome(v1576, v1577);
          const v1579 = v1578.amt;
          const v1580 = stdlib.add(v1579, v1573);
          const v1581 = {
            amt: v1580,
            spender: v1572
            };
          await stdlib.mapSet(map1, v912, v1581);
          const v1582 = true;
          await txn3.getOutput('increaseAllowance', 'v1582', ctc12, v1582);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
          continue;
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v1783 = v1672[stdlib.checkedBigNumberify('./index.rsh:218:13:spread', stdlib.UInt_max, '0')];
          const v1784 = v1672[stdlib.checkedBigNumberify('./index.rsh:218:13:spread', stdlib.UInt_max, '1')];
          const v1785 = stdlib.addressEq(v912, v712);
          stdlib.assert(v1785, {
            at: './index.rsh:229:24:application',
            fs: ['at ./index.rsh:228:13:application call to [unknown function] (defined at: ./index.rsh:228:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1786 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1783), null);
          const v1787 = stdlib.fromSome(v1786, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v1788 = stdlib.add(v1787, v1784);
          await stdlib.mapSet(map2, v1783, v1788);
          const v1791 = stdlib.add(v753, v1784);
          await stdlib.mapSet(map0, v712, v1791);
          const v1792 = true;
          await txn3.getOutput('mint', 'v1792', ctc12, v1792);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
          continue;
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v1992 = v1861[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '0')];
          const v1993 = v1861[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '1')];
          const v1994 = stdlib.addressEq(v912, v1992);
          const v1995 = v1994 ? false : true;
          stdlib.assert(v1995, {
            at: './index.rsh:123:24:application',
            fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v1996 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v912), null);
          const v1997 = stdlib.fromSome(v1996, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v1998 = stdlib.le(v1993, v1997);
          stdlib.assert(v1998, {
            at: './index.rsh:124:24:application',
            fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2001 = stdlib.sub(v1997, v1993);
          await stdlib.mapSet(map2, v912, v2001);
          const v2002 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1992), null);
          const v2003 = stdlib.fromSome(v2002, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2004 = stdlib.add(v2003, v1993);
          await stdlib.mapSet(map2, v1992, v2004);
          const v2005 = true;
          await txn3.getOutput('transfer', 'v2005', ctc12, v2005);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
          continue;
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          undefined /* setApiDetails */;
          ;
          const v2204 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '0')];
          const v2205 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '1')];
          const v2206 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '2')];
          const v2207 = stdlib.addressEq(v2204, v2205);
          const v2208 = v2207 ? false : true;
          stdlib.assert(v2208, {
            at: './index.rsh:146:24:application',
            fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2209 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2204), null);
          const v2210 = stdlib.fromSome(v2209, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2211 = stdlib.le(v2206, v2210);
          stdlib.assert(v2211, {
            at: './index.rsh:147:24:application',
            fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2212 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2204), null);
          const v2213 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v712
            };
          const v2214 = stdlib.fromSome(v2212, v2213);
          const v2215 = v2214.spender;
          const v2216 = stdlib.addressEq(v2215, v2205);
          const v2217 = v2214.amt;
          const v2218 = stdlib.ge(v2217, v2206);
          const v2219 = v2216 ? v2218 : false;
          stdlib.assert(v2219, {
            at: './index.rsh:149:24:application',
            fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2222 = stdlib.sub(v2210, v2206);
          await stdlib.mapSet(map2, v2204, v2222);
          const v2223 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2205), null);
          const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2225 = stdlib.add(v2224, v2206);
          await stdlib.mapSet(map2, v2205, v2225);
          const v2227 = stdlib.sub(v2217, v2206);
          const v2228 = {
            amt: v2227,
            spender: v2205
            };
          await stdlib.mapSet(map1, v2204, v2228);
          const v2229 = true;
          await txn3.getOutput('transferFrom', 'v2229', ctc12, v2229);
          null;
          const cv738 = v914;
          
          v738 = cv738;
          
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
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc7,
    burn0_86: ctc7,
    decreaseAllowance0_86: ctc7,
    increaseAllowance0_86: ctc7,
    mint0_86: ctc7,
    transfer0_86: ctc7,
    transferFrom0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v807 = ctc.selfAddress();
  const v809 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:105:41:application call to "runapprove0_86" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v810 = v809[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v811 = v809[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v815 = stdlib.addressEq(v807, v810);
  const v816 = v815 ? false : true;
  stdlib.assert(v816, {
    at: './index.rsh:164:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:105:41:application call to "runapprove0_86" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'approve'
    });
  const v817 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v807), null);
  const v818 = stdlib.fromSome(v817, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
  const v819 = stdlib.le(v811, v818);
  stdlib.assert(v819, {
    at: './index.rsh:165:23:application',
    fs: ['at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:13:function exp)', 'at ./index.rsh:105:41:application call to "runapprove0_86" (defined at: ./index.rsh:160:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'approve'
    });
  const v824 = ['approve0_86', v809];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v824],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:168:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v943 = v916[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
          const v944 = v916[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v912), null);
          const v950 = {
            amt: v944,
            spender: v943
            };
          await stdlib.simMapSet(sim_r, 1, v912, v950);
          const v951 = true;
          const v952 = await txn1.getOutput('approve', 'v951', ctc10, v951);
          
          null;
          const v3781 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v3782 = stdlib.fromSome(v3781, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v943 = v916[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '0')];
      const v944 = v916[stdlib.checkedBigNumberify('./index.rsh:160:13:spread', stdlib.UInt_max, '1')];
      const v945 = stdlib.addressEq(v912, v943);
      const v946 = v945 ? false : true;
      stdlib.assert(v946, {
        at: './index.rsh:171:24:application',
        fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: null,
        who: 'approve'
        });
      const v947 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v912), null);
      const v948 = stdlib.fromSome(v947, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v949 = stdlib.le(v944, v948);
      stdlib.assert(v949, {
        at: './index.rsh:172:24:application',
        fs: ['at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: null,
        who: 'approve'
        });
      const v950 = {
        amt: v944,
        spender: v943
        };
      await stdlib.mapSet(map1, v912, v950);
      const v951 = true;
      const v952 = await txn1.getOutput('approve', 'v951', ctc10, v951);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v916, v952), {
          at: './index.rsh:161:13:application',
          fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:174:24:application call to "respond" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      null;
      const v3781 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v3782 = stdlib.fromSome(v3781, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      return;
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      return;
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      return;
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      return;
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      return;
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc7,
    burn0_86: ctc7,
    decreaseAllowance0_86: ctc7,
    increaseAllowance0_86: ctc7,
    mint0_86: ctc7,
    transfer0_86: ctc7,
    transferFrom0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v875 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:105:41:application call to "runburn0_86" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v876 = v875[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v877 = v875[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v881 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v876), null);
  const v882 = stdlib.fromSome(v881, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
  const v883 = stdlib.le(v877, v882);
  stdlib.assert(v883, {
    at: './index.rsh:243:23:application',
    fs: ['at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:27:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:105:41:application call to "runburn0_86" (defined at: ./index.rsh:239:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'burn'
    });
  const v888 = ['burn0_86', v875];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v888],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:247:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v1150 = v1105[stdlib.checkedBigNumberify('./index.rsh:239:13:spread', stdlib.UInt_max, '0')];
          const v1151 = v1105[stdlib.checkedBigNumberify('./index.rsh:239:13:spread', stdlib.UInt_max, '1')];
          const v1152 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1150), null);
          const v1153 = stdlib.fromSome(v1152, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v1157 = stdlib.sub(v1153, v1151);
          await stdlib.simMapSet(sim_r, 2, v1150, v1157);
          const v1160 = stdlib.sub(v753, v1151);
          await stdlib.simMapSet(sim_r, 0, v712, v1160);
          const v1161 = true;
          const v1162 = await txn1.getOutput('burn', 'v1161', ctc10, v1161);
          
          null;
          const v3821 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v3822 = stdlib.fromSome(v3821, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      return;
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v1150 = v1105[stdlib.checkedBigNumberify('./index.rsh:239:13:spread', stdlib.UInt_max, '0')];
      const v1151 = v1105[stdlib.checkedBigNumberify('./index.rsh:239:13:spread', stdlib.UInt_max, '1')];
      const v1152 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1150), null);
      const v1153 = stdlib.fromSome(v1152, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v1154 = stdlib.le(v1151, v1153);
      stdlib.assert(v1154, {
        at: './index.rsh:251:24:application',
        fs: ['at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
        msg: null,
        who: 'burn'
        });
      const v1157 = stdlib.sub(v1153, v1151);
      await stdlib.mapSet(map2, v1150, v1157);
      const v1160 = stdlib.sub(v753, v1151);
      await stdlib.mapSet(map0, v712, v1160);
      const v1161 = true;
      const v1162 = await txn1.getOutput('burn', 'v1161', ctc10, v1161);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v1105, v1162), {
          at: './index.rsh:240:13:application',
          fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:255:24:application call to "respond" (defined at: ./index.rsh:249:13:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
          msg: 'out',
          who: 'burn'
          });
        }
      else {
        }
      
      null;
      const v3821 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v3822 = stdlib.fromSome(v3821, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      return;
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      return;
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      return;
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      return;
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc7,
    burn0_86: ctc7,
    decreaseAllowance0_86: ctc7,
    increaseAllowance0_86: ctc7,
    mint0_86: ctc7,
    transfer0_86: ctc7,
    transferFrom0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v842 = ctc.selfAddress();
  const v844 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:105:41:application call to "rundecreaseAllowance0_86" (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'decreaseAllowance'
    });
  const v845 = v844[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v850 = stdlib.addressEq(v842, v845);
  const v851 = v850 ? false : true;
  stdlib.assert(v851, {
    at: './index.rsh:203:23:application',
    fs: ['at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:29:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:105:41:application call to "rundecreaseAllowance0_86" (defined at: ./index.rsh:199:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'decreaseAllowance'
    });
  const v856 = ['decreaseAllowance0_86', v844];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v856],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:206:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "decreaseAllowance"
            });
          ;
          const v1361 = v1294[stdlib.checkedBigNumberify('./index.rsh:199:13:spread', stdlib.UInt_max, '0')];
          const v1362 = v1294[stdlib.checkedBigNumberify('./index.rsh:199:13:spread', stdlib.UInt_max, '1')];
          const v1365 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v912), null);
          const v1366 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v712
            };
          const v1367 = stdlib.fromSome(v1365, v1366);
          const v1368 = v1367.amt;
          const v1369 = stdlib.sub(v1368, v1362);
          const v1370 = {
            amt: v1369,
            spender: v1361
            };
          await stdlib.simMapSet(sim_r, 1, v912, v1370);
          const v1371 = true;
          const v1372 = await txn1.getOutput('decreaseAllowance', 'v1371', ctc10, v1371);
          
          null;
          const v3861 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v3862 = stdlib.fromSome(v3861, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      return;
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      return;
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v1361 = v1294[stdlib.checkedBigNumberify('./index.rsh:199:13:spread', stdlib.UInt_max, '0')];
      const v1362 = v1294[stdlib.checkedBigNumberify('./index.rsh:199:13:spread', stdlib.UInt_max, '1')];
      const v1363 = stdlib.addressEq(v912, v1361);
      const v1364 = v1363 ? false : true;
      stdlib.assert(v1364, {
        at: './index.rsh:209:24:application',
        fs: ['at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
        msg: null,
        who: 'decreaseAllowance'
        });
      const v1365 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v912), null);
      const v1366 = {
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        spender: v712
        };
      const v1367 = stdlib.fromSome(v1365, v1366);
      const v1368 = v1367.amt;
      const v1369 = stdlib.sub(v1368, v1362);
      const v1370 = {
        amt: v1369,
        spender: v1361
        };
      await stdlib.mapSet(map1, v912, v1370);
      const v1371 = true;
      const v1372 = await txn1.getOutput('decreaseAllowance', 'v1371', ctc10, v1371);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v1294, v1372), {
          at: './index.rsh:200:13:application',
          fs: ['at ./index.rsh:200:13:application call to [unknown function] (defined at: ./index.rsh:200:13:function exp)', 'at ./index.rsh:212:24:application call to "respond" (defined at: ./index.rsh:208:13:function exp)', 'at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)'],
          msg: 'out',
          who: 'decreaseAllowance'
          });
        }
      else {
        }
      
      null;
      const v3861 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v3862 = stdlib.fromSome(v3861, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      return;
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      return;
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      return;
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc7,
    burn0_86: ctc7,
    decreaseAllowance0_86: ctc7,
    increaseAllowance0_86: ctc7,
    mint0_86: ctc7,
    transfer0_86: ctc7,
    transferFrom0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v826 = ctc.selfAddress();
  const v828 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)', 'at ./index.rsh:105:41:application call to "runincreaseAllowance0_86" (defined at: ./index.rsh:180:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'increaseAllowance'
    });
  const v829 = v828[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v834 = stdlib.addressEq(v826, v829);
  const v835 = v834 ? false : true;
  stdlib.assert(v835, {
    at: './index.rsh:184:23:application',
    fs: ['at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:29:function exp)', 'at ./index.rsh:183:13:application call to [unknown function] (defined at: ./index.rsh:183:13:function exp)', 'at ./index.rsh:105:41:application call to "runincreaseAllowance0_86" (defined at: ./index.rsh:180:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'increaseAllowance'
    });
  const v840 = ['increaseAllowance0_86', v828];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v840],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:187:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "increaseAllowance"
            });
          ;
          const v1572 = v1483[stdlib.checkedBigNumberify('./index.rsh:180:13:spread', stdlib.UInt_max, '0')];
          const v1573 = v1483[stdlib.checkedBigNumberify('./index.rsh:180:13:spread', stdlib.UInt_max, '1')];
          const v1576 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v912), null);
          const v1577 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v712
            };
          const v1578 = stdlib.fromSome(v1576, v1577);
          const v1579 = v1578.amt;
          const v1580 = stdlib.add(v1579, v1573);
          const v1581 = {
            amt: v1580,
            spender: v1572
            };
          await stdlib.simMapSet(sim_r, 1, v912, v1581);
          const v1582 = true;
          const v1583 = await txn1.getOutput('increaseAllowance', 'v1582', ctc10, v1582);
          
          null;
          const v3901 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v3902 = stdlib.fromSome(v3901, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      return;
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      return;
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      return;
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v1572 = v1483[stdlib.checkedBigNumberify('./index.rsh:180:13:spread', stdlib.UInt_max, '0')];
      const v1573 = v1483[stdlib.checkedBigNumberify('./index.rsh:180:13:spread', stdlib.UInt_max, '1')];
      const v1574 = stdlib.addressEq(v912, v1572);
      const v1575 = v1574 ? false : true;
      stdlib.assert(v1575, {
        at: './index.rsh:190:24:application',
        fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
        msg: null,
        who: 'increaseAllowance'
        });
      const v1576 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v912), null);
      const v1577 = {
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        spender: v712
        };
      const v1578 = stdlib.fromSome(v1576, v1577);
      const v1579 = v1578.amt;
      const v1580 = stdlib.add(v1579, v1573);
      const v1581 = {
        amt: v1580,
        spender: v1572
        };
      await stdlib.mapSet(map1, v912, v1581);
      const v1582 = true;
      const v1583 = await txn1.getOutput('increaseAllowance', 'v1582', ctc10, v1582);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v1483, v1583), {
          at: './index.rsh:181:13:application',
          fs: ['at ./index.rsh:181:13:application call to [unknown function] (defined at: ./index.rsh:181:13:function exp)', 'at ./index.rsh:193:24:application call to "respond" (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
          msg: 'out',
          who: 'increaseAllowance'
          });
        }
      else {
        }
      
      null;
      const v3901 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v3902 = stdlib.fromSome(v3901, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      return;
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      return;
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc7,
    burn0_86: ctc7,
    decreaseAllowance0_86: ctc7,
    increaseAllowance0_86: ctc7,
    mint0_86: ctc7,
    transfer0_86: ctc7,
    transferFrom0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v858 = ctc.selfAddress();
  const v860 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:13:application call to [unknown function] (defined at: ./index.rsh:221:13:function exp)', 'at ./index.rsh:105:41:application call to "runmint0_86" (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'mint'
    });
  const v866 = stdlib.addressEq(v858, v712);
  stdlib.assert(v866, {
    at: './index.rsh:222:23:application',
    fs: ['at ./index.rsh:221:13:application call to [unknown function] (defined at: ./index.rsh:221:30:function exp)', 'at ./index.rsh:221:13:application call to [unknown function] (defined at: ./index.rsh:221:13:function exp)', 'at ./index.rsh:105:41:application call to "runmint0_86" (defined at: ./index.rsh:218:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'mint'
    });
  const v871 = ['mint0_86', v860];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v871],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:226:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mint"
            });
          ;
          const v1783 = v1672[stdlib.checkedBigNumberify('./index.rsh:218:13:spread', stdlib.UInt_max, '0')];
          const v1784 = v1672[stdlib.checkedBigNumberify('./index.rsh:218:13:spread', stdlib.UInt_max, '1')];
          const v1786 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1783), null);
          const v1787 = stdlib.fromSome(v1786, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v1788 = stdlib.add(v1787, v1784);
          await stdlib.simMapSet(sim_r, 2, v1783, v1788);
          const v1791 = stdlib.add(v753, v1784);
          await stdlib.simMapSet(sim_r, 0, v712, v1791);
          const v1792 = true;
          const v1793 = await txn1.getOutput('mint', 'v1792', ctc10, v1792);
          
          null;
          const v3941 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v3942 = stdlib.fromSome(v3941, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      return;
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      return;
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      return;
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      return;
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v1783 = v1672[stdlib.checkedBigNumberify('./index.rsh:218:13:spread', stdlib.UInt_max, '0')];
      const v1784 = v1672[stdlib.checkedBigNumberify('./index.rsh:218:13:spread', stdlib.UInt_max, '1')];
      const v1785 = stdlib.addressEq(v912, v712);
      stdlib.assert(v1785, {
        at: './index.rsh:229:24:application',
        fs: ['at ./index.rsh:228:13:application call to [unknown function] (defined at: ./index.rsh:228:13:function exp)'],
        msg: null,
        who: 'mint'
        });
      const v1786 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1783), null);
      const v1787 = stdlib.fromSome(v1786, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v1788 = stdlib.add(v1787, v1784);
      await stdlib.mapSet(map2, v1783, v1788);
      const v1791 = stdlib.add(v753, v1784);
      await stdlib.mapSet(map0, v712, v1791);
      const v1792 = true;
      const v1793 = await txn1.getOutput('mint', 'v1792', ctc10, v1792);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v1672, v1793), {
          at: './index.rsh:219:13:application',
          fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)', 'at ./index.rsh:233:24:application call to "respond" (defined at: ./index.rsh:228:13:function exp)', 'at ./index.rsh:228:13:application call to [unknown function] (defined at: ./index.rsh:228:13:function exp)'],
          msg: 'out',
          who: 'mint'
          });
        }
      else {
        }
      
      null;
      const v3941 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v3942 = stdlib.fromSome(v3941, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      return;
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
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
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc7,
    burn0_86: ctc7,
    decreaseAllowance0_86: ctc7,
    increaseAllowance0_86: ctc7,
    mint0_86: ctc7,
    transfer0_86: ctc7,
    transferFrom0_86: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v758 = ctc.selfAddress();
  const v760 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransfer0_86" (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v761 = v760[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v762 = v760[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v766 = stdlib.addressEq(v758, v761);
  const v767 = v766 ? false : true;
  stdlib.assert(v767, {
    at: './index.rsh:116:23:application',
    fs: ['at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:30:function exp)', 'at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransfer0_86" (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'transfer'
    });
  const v768 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v758), null);
  const v769 = stdlib.fromSome(v768, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
  const v770 = stdlib.le(v762, v769);
  stdlib.assert(v770, {
    at: './index.rsh:117:23:application',
    fs: ['at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:30:function exp)', 'at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransfer0_86" (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'transfer'
    });
  const v775 = ['transfer0_86', v760];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v775],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v1992 = v1861[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '0')];
          const v1993 = v1861[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '1')];
          const v1996 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v912), null);
          const v1997 = stdlib.fromSome(v1996, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2001 = stdlib.sub(v1997, v1993);
          await stdlib.simMapSet(sim_r, 2, v912, v2001);
          const v2002 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1992), null);
          const v2003 = stdlib.fromSome(v2002, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2004 = stdlib.add(v2003, v1993);
          await stdlib.simMapSet(sim_r, 2, v1992, v2004);
          const v2005 = true;
          const v2006 = await txn1.getOutput('transfer', 'v2005', ctc10, v2005);
          
          null;
          const v3981 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v3982 = stdlib.fromSome(v3981, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      return;
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      return;
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      return;
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      return;
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      return;
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v1992 = v1861[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '0')];
      const v1993 = v1861[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '1')];
      const v1994 = stdlib.addressEq(v912, v1992);
      const v1995 = v1994 ? false : true;
      stdlib.assert(v1995, {
        at: './index.rsh:123:24:application',
        fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
        msg: null,
        who: 'transfer'
        });
      const v1996 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v912), null);
      const v1997 = stdlib.fromSome(v1996, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v1998 = stdlib.le(v1993, v1997);
      stdlib.assert(v1998, {
        at: './index.rsh:124:24:application',
        fs: ['at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
        msg: null,
        who: 'transfer'
        });
      const v2001 = stdlib.sub(v1997, v1993);
      await stdlib.mapSet(map2, v912, v2001);
      const v2002 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1992), null);
      const v2003 = stdlib.fromSome(v2002, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v2004 = stdlib.add(v2003, v1993);
      await stdlib.mapSet(map2, v1992, v2004);
      const v2005 = true;
      const v2006 = await txn1.getOutput('transfer', 'v2005', ctc10, v2005);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v1861, v2006), {
          at: './index.rsh:113:13:application',
          fs: ['at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:127:24:application call to "respond" (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      null;
      const v3981 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v3982 = stdlib.fromSome(v3981, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      return;
      
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
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
  const ctc9 = stdlib.T_Data({
    approve0_86: ctc8,
    burn0_86: ctc8,
    decreaseAllowance0_86: ctc8,
    increaseAllowance0_86: ctc8,
    mint0_86: ctc8,
    transfer0_86: ctc8,
    transferFrom0_86: ctc7
    });
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const [v712, v713, v714, v716, v753] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc6, ctc6, ctc3, ctc1]);
  const v779 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransferFrom0_86" (defined at: ./index.rsh:133:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v780 = v779[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v781 = v779[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v782 = v779[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v787 = stdlib.addressEq(v780, v781);
  const v788 = v787 ? false : true;
  stdlib.assert(v788, {
    at: './index.rsh:137:23:application',
    fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:38:function exp)', 'at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransferFrom0_86" (defined at: ./index.rsh:133:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v789 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v780), null);
  const v790 = stdlib.fromSome(v789, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
  const v791 = stdlib.le(v782, v790);
  stdlib.assert(v791, {
    at: './index.rsh:138:23:application',
    fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:38:function exp)', 'at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransferFrom0_86" (defined at: ./index.rsh:133:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v792 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v780), null);
  const v793 = {
    amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    spender: v712
    };
  const v794 = stdlib.fromSome(v792, v793);
  const v795 = v794.spender;
  const v796 = stdlib.addressEq(v795, v781);
  const v797 = v794.amt;
  const v798 = stdlib.ge(v797, v782);
  const v799 = v796 ? v798 : false;
  stdlib.assert(v799, {
    at: './index.rsh:140:23:application',
    fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:38:function exp)', 'at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:105:41:application call to "runtransferFrom0_86" (defined at: ./index.rsh:133:13:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)'],
    msg: null,
    who: 'transferFrom'
    });
  const v805 = ['transferFrom0_86', v779];
  
  const txn1 = await (ctc.sendrecv({
    args: [v712, v713, v714, v716, v753, v805],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:143:27:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
      
      switch (v913[0]) {
        case 'approve0_86': {
          const v916 = v913[1];
          
          break;
          }
        case 'burn0_86': {
          const v1105 = v913[1];
          
          break;
          }
        case 'decreaseAllowance0_86': {
          const v1294 = v913[1];
          
          break;
          }
        case 'increaseAllowance0_86': {
          const v1483 = v913[1];
          
          break;
          }
        case 'mint0_86': {
          const v1672 = v913[1];
          
          break;
          }
        case 'transfer0_86': {
          const v1861 = v913[1];
          
          break;
          }
        case 'transferFrom0_86': {
          const v2050 = v913[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v2204 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '0')];
          const v2205 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '1')];
          const v2206 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '2')];
          const v2209 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2204), null);
          const v2210 = stdlib.fromSome(v2209, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2212 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2204), null);
          const v2213 = {
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            spender: v712
            };
          const v2214 = stdlib.fromSome(v2212, v2213);
          const v2217 = v2214.amt;
          const v2222 = stdlib.sub(v2210, v2206);
          await stdlib.simMapSet(sim_r, 2, v2204, v2222);
          const v2223 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2205), null);
          const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          const v2225 = stdlib.add(v2224, v2206);
          await stdlib.simMapSet(sim_r, 2, v2205, v2225);
          const v2227 = stdlib.sub(v2217, v2206);
          const v2228 = {
            amt: v2227,
            spender: v2205
            };
          await stdlib.simMapSet(sim_r, 1, v2204, v2228);
          const v2229 = true;
          const v2230 = await txn1.getOutput('transferFrom', 'v2229', ctc10, v2229);
          
          null;
          const v4021 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v712), null);
          const v4022 = stdlib.fromSome(v4021, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc6, ctc3, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v913], secs: v915, time: v914, didSend: v464, from: v912 } = txn1;
  switch (v913[0]) {
    case 'approve0_86': {
      const v916 = v913[1];
      return;
      break;
      }
    case 'burn0_86': {
      const v1105 = v913[1];
      return;
      break;
      }
    case 'decreaseAllowance0_86': {
      const v1294 = v913[1];
      return;
      break;
      }
    case 'increaseAllowance0_86': {
      const v1483 = v913[1];
      return;
      break;
      }
    case 'mint0_86': {
      const v1672 = v913[1];
      return;
      break;
      }
    case 'transfer0_86': {
      const v1861 = v913[1];
      return;
      break;
      }
    case 'transferFrom0_86': {
      const v2050 = v913[1];
      undefined /* setApiDetails */;
      ;
      const v2204 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '0')];
      const v2205 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '1')];
      const v2206 = v2050[stdlib.checkedBigNumberify('./index.rsh:133:13:spread', stdlib.UInt_max, '2')];
      const v2207 = stdlib.addressEq(v2204, v2205);
      const v2208 = v2207 ? false : true;
      stdlib.assert(v2208, {
        at: './index.rsh:146:24:application',
        fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v2209 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2204), null);
      const v2210 = stdlib.fromSome(v2209, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v2211 = stdlib.le(v2206, v2210);
      stdlib.assert(v2211, {
        at: './index.rsh:147:24:application',
        fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v2212 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2204), null);
      const v2213 = {
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        spender: v712
        };
      const v2214 = stdlib.fromSome(v2212, v2213);
      const v2215 = v2214.spender;
      const v2216 = stdlib.addressEq(v2215, v2205);
      const v2217 = v2214.amt;
      const v2218 = stdlib.ge(v2217, v2206);
      const v2219 = v2216 ? v2218 : false;
      stdlib.assert(v2219, {
        at: './index.rsh:149:24:application',
        fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
        msg: null,
        who: 'transferFrom'
        });
      const v2222 = stdlib.sub(v2210, v2206);
      await stdlib.mapSet(map2, v2204, v2222);
      const v2223 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2205), null);
      const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
      const v2225 = stdlib.add(v2224, v2206);
      await stdlib.mapSet(map2, v2205, v2225);
      const v2227 = stdlib.sub(v2217, v2206);
      const v2228 = {
        amt: v2227,
        spender: v2205
        };
      await stdlib.mapSet(map1, v2204, v2228);
      const v2229 = true;
      const v2230 = await txn1.getOutput('transferFrom', 'v2229', ctc10, v2229);
      if (v464) {
        stdlib.protect(ctc0, await interact.out(v2050, v2230), {
          at: './index.rsh:134:13:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:154:24:application call to "respond" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      null;
      const v4021 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v712), null);
      const v4022 = stdlib.fromSome(v4021, stdlib.checkedBigNumberify('./index.rsh:80:39:decimal', stdlib.UInt_max, '0'));
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
    impure: [`approve(address,uint64)byte`, `burn(address,uint64)byte`, `decreaseAllowance(address,uint64)byte`, `increaseAllowance(address,uint64)byte`, `mint(address,uint64)byte`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`],
    pure: [`allowance(address,address)uint64`, `balanceOf(address)uint64`, `decimals()uint64`, `name()byte[32]`, `symbol()byte[32]`, `totalSupply()uint64`],
    sigs: [`allowance(address,address)uint64`, `approve(address,uint64)byte`, `balanceOf(address)uint64`, `burn(address,uint64)byte`, `decimals()uint64`, `decreaseAllowance(address,uint64)byte`, `increaseAllowance(address,uint64)byte`, `mint(address,uint64)byte`, `name()byte[32]`, `symbol()byte[32]`, `totalSupply()uint64`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`]
    },
  appApproval: `BiAWAAEEIAg7pI/vswSe+M+gC6OC1IsMpMjwpQ/nvd7DC/mH5eIEwvms5gaVsoDvAbLwo9kC04OVsQSeyMB9vZWUuAED////////////AQUGJgUBAQEABLHhNKwEsfXz4gAiNQAxGEEISycEZEkiWzUBIQRbNQIxGSMSQQAKMQApIQWvZkIIFjYaABdJQQHdIjUEIzUGSSEGDEABDUkhBwxAAHhJIQgMQAA5SSEJDEAAGSEJEkQ0ASQSRClkKGRQSTUDV4AINQdCB+IhCBJENhoBNhoCUDX/gAEENP9QMgNQQgHtSSEKDEAAGCEKEkQ0ASQSRIAIAAAAAAAAABI1B0IHqiEHEkQ2GgE2GgJQNf+AAQI0/1AyA1BCAbVJIQsMQAA5SSEMDEAAGSEMEkQ0ASQSRClkKGRQSTUDVyAgNQdCB2ohCxJENAEkEkQpZChkUEk1A1dAIDUHQgdRIQYSRDQBJBJEKWQoZFA1AyEErzQDVwAgUDYaAYgHQ1cJKUk1/VcBKDT9IlVNSTX+VwggNhoCEkEACTT+Ils1/0IAAyI1/zT/FjUHQgcDSSENDEAAVkkhDgxAADVJIQ8MQAAXIQ8SRDYaATYaAlA1/yk0/1AyA1BCAPshDhJENhoBNhoCUDX/KDT/UDIDUEIA5CENEkQ2GgE2GgJQNhoDUDX/gAEGNP9QQgDKSSEQDEAAQ0khEQxAACMhERJENAEkEkQiNhoBiAaZVzIJSTX/I1s0/yJVTRY1B0IGdSEQEkQ2GgE2GgJQNf+AAQU0/1AyA1BCAICB0dKlbhJENhoBNhoCUDX/gAEDNP9QMgNQQgBkNhoCFzUENhoDNhoBF0khEgxABOtJJAxAAEkkEkQkNAESRDQESSISTDQCEhFEKWQoZFBJNQNXACA1/4AEkSc087AyBiETD0Q0/zEAEkQ0/zQDVyAgNANXQCA0A1dgIDIGQgVNSCQ0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/VyAgNf5XQCA1/VdgIDX8gYABWzX7STUFNfqABD784sE0+lCwMgYhEwxENPoiVUkhEgxAArdJIRQMQAGlSSEVDEAA/SEVEkQ0+lcBSDX5NPlXACA1+DT5VyAgNfc0+YFAWzX2NPg09xNEIjT4iAVeVzIJSTX0I1s09CJVTTX1NPY09Q5EIQSvNP9QNPiIBT5XCSlJNfNXASg08yJVTUk19CJbNfM09FcIIDT3EjTzNPYPEEQ0+Ck0+IgFEig09TT2CRZQNfJXADI08lBmNPcpNPeIBPkoIjT3iATyVzIJSTXyI1s08iJVTTT2CBZQNfJXADI08lBmNPgpNPiIBM8oNPM09gkWNPdQUDXySVcACTTyUExXMglQZoAJAAAAAAAACLUBsCg1Byo0+FA091A09hZQsDT/NP40/TT8MgZCA+xINPpXASg1+TT5VwAgNfg0+SVbNfcxADT4E0QiMQCIBGxXMglJNfUjWzT1IlVNNfY09zT2DkQxACkxAIgETyg09jT3CRZQNfVXADI09VBmNPgpNPiIBDYoIjT4iAQvVzIJSTX1I1s09SJVTTT3CBZQNfVXADI09VBmgAkAAAAAAAAH1QGwKDUHKjEAUDT4UDT3FlCwNP80/jT9NPwyBkIDS0kkDEAAh0g0+lcBKDX5NPlXACA1+DT5JVs19zEANP8SRDT4KTT4iAPDKCI0+IgDvFcyCUk19iNbNPYiVU009wgWUDX2VwAyNPZQZjT/KTT/iAOZKDT7NPcIFlA19lcJMjT2TFBmgAkAAAAAAAAHAAGwKDUHKjT8UDT4UDT3FlCwNP80/jT9NPwyBkICvkg0+lcBKDX5NPlXACA1+DEANPgTRCEErzT/UDEAiAM/VwkpSTX2VwEoNPYiVU0iWzT5JVsINfcxACkxAIgDICg09xY0+FBQNfZJVwAJNPZQTFcyCVBmgAkAAAAAAAAGLgGwKDUHKzEAUDT4UDT3FlCwNP80/jT9NPwyBkICQEkjDEABEEmBAgxAAH5INPpXASg1+TT5VwAgNfgxADT4E0QhBK80/1AxAIgCtFcJKUk19lcBKDT2IlVNIls0+SVbCTX3MQApMQCIApUoNPcWNPhQUDX2SVcACTT2UExXMglQZoAJAAAAAAAABVsBsCg1BysxAFA0+FA09xZQsDT/NP40/TT8MgZCAbVINPpXASg1+TT5VwAgNfg0+SVbNfciNPiIAjtXMglJNfUjWzT1IlVNNfY09zT2DkQ0+Ck0+IgCHig09jT3CRZQNfVXADI09VBmNP8pNP+IAgUoNPs09wkWUDX1VwkyNPVMUGaACQAAAAAAAASJAbAoNQcqNPhQNPxQNPcWULA0/zT+NP00/DIGQgEqSDT6VwEoNfk0+VcAIDX4NPklWzX3MQA0+BNENPciMQCIAahXMglJNfYjWzT2IlVNDkQxACkxAIgBkSg09xY0+FBQNfZJVwAJNPZQTFcyCVBmgAkAAAAAAAADtwGwKDUHKzEAUDT4UDT3FlCwNP80/jT9NPwyBkIAsUkjDEAAQyMSRCM0ARJENARJIhJMNAISEUQpZChkUEk1A1cAIDX/gASai5F0sDT/MQASRDT/NANXICA0A1dAIDQDV2AgMgZCAGhIIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf9XICA1/ldAgDX9V8AgNfyABAjkEnM0/1A0/lA0/VA0/FCwgaCNBogA1DEANP9QNP5QNPxQKUsBVwB/ZyhLAVd/AWdIIzUBMgY1AkIAYzX/Nf41/TX8NfsiNPuIAJFXAAlJNfkjWzT5IlVNNfo0+zT8UDT9UDT+UDT6FlApSwFXAH9nKEsBV38JZ0gkNQEyBjUCQgAcMRkhFBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwQ0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/CSTEYYUAABUghBa+JKWKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 59,
  stateKeys: 2,
  stateSize: 136,
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
                "name": "v713",
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
                "name": "v714",
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
                "name": "v715",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v716",
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
                "name": "v713",
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
                "name": "v714",
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
                "name": "v715",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v716",
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
        "internalType": "struct T12",
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
                    "internalType": "enum _enum_T15",
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
                    "internalType": "struct T13",
                    "name": "_approve0_86",
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
                    "internalType": "struct T13",
                    "name": "_burn0_86",
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
                    "internalType": "struct T13",
                    "name": "_decreaseAllowance0_86",
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
                    "internalType": "struct T13",
                    "name": "_increaseAllowance0_86",
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
                    "internalType": "struct T13",
                    "name": "_mint0_86",
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
                    "internalType": "struct T13",
                    "name": "_transfer0_86",
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
                    "name": "_transferFrom0_86",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v913",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "struct T12",
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
    "name": "_reach_oe_v1161",
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
    "name": "_reach_oe_v1371",
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
    "name": "_reach_oe_v1582",
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
    "name": "_reach_oe_v1792",
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
    "name": "_reach_oe_v2005",
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
    "name": "_reach_oe_v2229",
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
    "name": "_reach_oe_v951",
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
        "internalType": "struct T12",
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
                    "internalType": "enum _enum_T15",
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
                    "internalType": "struct T13",
                    "name": "_approve0_86",
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
                    "internalType": "struct T13",
                    "name": "_burn0_86",
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
                    "internalType": "struct T13",
                    "name": "_decreaseAllowance0_86",
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
                    "internalType": "struct T13",
                    "name": "_increaseAllowance0_86",
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
                    "internalType": "struct T13",
                    "name": "_mint0_86",
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
                    "internalType": "struct T13",
                    "name": "_transfer0_86",
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
                    "name": "_transferFrom0_86",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v913",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
        "internalType": "struct T12",
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
        "name": "v4025",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "v4026",
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
        "name": "v4028",
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
  Bytecode: `0x6080604052604051620038a1380380620038a1833981016040819052620000269162000327565b60008055436003556040805133815282516020808301919091528084015180515183850152808201515160608085019190915281850151805160808601529283015160a08501528285015160c08501529182015160e084015201516001600160a01b031661010082015290517fca9fd29363ed9f0a4e4cb054a749ec428ca49271d21165fc69c573d027043e32918190036101200190a1620000cb3415600d62000181565b60408051608080820183526000808352835160208082018652828252808501918252855180820187528381528587019081526060808701858152338089528a8501805151875280518601518552518301516001600160a01b03908116835260019788905543909755895180860191909152945151858a01529151519084015251909216818401528451808203909301835260a00190935280519192620001789260029290910190620001ab565b50505062000433565b81620001a75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b990620003f6565b90600052602060002090601f016020900481019282620001dd576000855562000228565b82601f10620001f857805160ff191683800117855562000228565b8280016001018555821562000228579182015b82811115620002285782518255916020019190600101906200020b565b50620002369291506200023a565b5090565b5b808211156200023657600081556001016200023b565b604080519081016001600160401b03811182821017156200028257634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200028257634e487b7160e01b600052604160045260246000fd5b600060208284031215620002cc57600080fd5b604051602081016001600160401b0381118282101715620002fd57634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b80516001600160a01b03811681146200032257600080fd5b919050565b60008183036101008112156200033c57600080fd5b6200034662000251565b8351815260e0601f19830112156200035d57600080fd5b6200036762000288565b620003768660208701620002b9565b8152620003878660408701620002b9565b60208201526080605f19840112156200039f57600080fd5b620003a962000288565b9250606085015183526080850151602084015260a0850151604084015260c08501516060840152826040820152620003e460e086016200030a565b60608201526020820152949350505050565b600181811c908216806200040b57607f821691505b602082108114156200042d57634e487b7160e01b600052602260045260246000fd5b50919050565b61345e80620004436000396000f3fe60806040526004361061012d5760003560e01c806370a08231116100a5578063a457c2d71161006c578063a457c2d7146102d8578063a7661d54146102eb578063a9059cbb146102fe578063ab53f2c614610311578063cadc2e7a14610334578063dd62ed3e1461036157005b806370a082311461025b578063817d57f31461027b578063832307571461029b57806395d89b41146102b05780639dc29fac146102c557005b806323b872dd116100f457806323b872dd146101cd5780632c10a159146101e0578063313ce567146101f357806339509351146102085780633bc5b7bf1461021b57806340c10f191461024857005b806306fdde0314610136578063095ea7b31461015f57806318160ddd146101825780631e93b0f1146101a55780631ee3788f146101ba57005b3661013457005b005b34801561014257600080fd5b5061014b610381565b604051905181526020015b60405180910390f35b61017261016d366004612c24565b61050f565b6040519015158152602001610156565b34801561018e57600080fd5b50610197610575565b604051908152602001610156565b3480156101b157600080fd5b50600354610197565b6101346101c8366004612c50565b6106f3565b6101726101db366004612c69565b610717565b6101346101ee366004612caa565b61078c565b3480156101ff57600080fd5b506101976107ac565b610172610216366004612c24565b610929565b34801561022757600080fd5b5061023b610236366004612cbc565b610991565b6040516101569190612cff565b610172610256366004612c24565b6109b7565b34801561026757600080fd5b50610197610276366004612cbc565b610a1f565b34801561028757600080fd5b5061023b610296366004612cbc565b610bd8565b3480156102a757600080fd5b50600154610197565b3480156102bc57600080fd5b5061014b610bfe565b6101726102d3366004612c24565b610d89565b6101726102e6366004612c24565b610df0565b6101346102f9366004612caa565b610e58565b61017261030c366004612c24565b610e78565b34801561031d57600080fd5b50610326610ee0565b604051610156929190612d2f565b34801561034057600080fd5b5061035461034f366004612cbc565b610f7d565b6040516101569190612d8c565b34801561036d57600080fd5b5061019761037c366004612dd0565b610f8e565b6040805160208101909152600081526001600054141561044b576000600280546103aa90612e09565b80601f01602080910402602001604051908101604052809291908181526020018280546103d690612e09565b80156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b505050505080602001905181019061043b9190612f28565b90506104496000600a611199565b505b600460005414156105005760006002805461046590612e09565b80601f016020809104026020016040519081016040528092919081815260200182805461049190612e09565b80156104de5780601f106104b3576101008083540402835291602001916104de565b820191906000526020600020905b8154815290600101906020018083116104c157829003601f168201915b50505050508060200190518101906104f69190612fb9565b6020015192915050565b61050c6000600a611199565b90565b6000610519612767565b6105216127a3565b6105296127c2565b6040805180820182526001600160a01b038816815260208082018890528381019190915260008352815180820190925282825283015261056982846111be565b50505190505b92915050565b6000600160005414156106325760006002805461059190612e09565b80601f01602080910402602001604051908101604052809291908181526020018280546105bd90612e09565b801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b50505050508060200190518101906106229190612f28565b90506106306000600c611199565b505b600460005414156106e75760006002805461064c90612e09565b80601f016020809104026020016040519081016040528092919081815260200182805461067890612e09565b80156106c55780601f1061069a576101008083540402835291602001916106c5565b820191906000526020600020905b8154815290600101906020018083116106a857829003601f168201915b50505050508060200190518101906106dd9190612fb9565b6080015192915050565b61050c6000600c611199565b6106fb612767565b61071361070d3684900384018461311a565b826111be565b5050565b6000610721612767565b6107296127a3565b6107316127c2565b604080516060810182526001600160a01b0389811682528816602082015290810186905260e0820152600681819052506040805160208082019092528281529083015261077e82846111be565b505060c00151949350505050565b610794612767565b6107136107a636849003840184613200565b8261214d565b600060016000541415610869576000600280546107c890612e09565b80601f01602080910402602001604051908101604052809291908181526020018280546107f490612e09565b80156108415780601f1061081657610100808354040283529160200191610841565b820191906000526020600020905b81548152906001019060200180831161082457829003601f168201915b50505050508060200190518101906108599190612f28565b905061086760006009611199565b505b6004600054141561091d5760006002805461088390612e09565b80601f01602080910402602001604051908101604052809291908181526020018280546108af90612e09565b80156108fc5780601f106108d1576101008083540402835291602001916108fc565b820191906000526020600020905b8154815290600101906020018083116108df57829003601f168201915b50505050508060200190518101906109149190612fb9565b50601292915050565b61050c60006009611199565b6000610933612767565b61093b6127a3565b6109436127c2565b6040805180820182526001600160a01b03881681526020808201889052608084019190915260038352815180820190925282825283015261098482846111be565b5050606001519392505050565b604080516060810182526000808252602082018190529181019190915261056f826122d9565b60006109c1612767565b6109c96127a3565b6109d16127c2565b6040805180820182526001600160a01b0388168152602080820188905260a0840191909152600483528151808201909252828252830152610a1282846111be565b5050608001519392505050565b600060016000541415610adc57600060028054610a3b90612e09565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6790612e09565b8015610ab45780601f10610a8957610100808354040283529160200191610ab4565b820191906000526020600020905b815481529060010190602001808311610a9757829003601f168201915b5050505050806020019051810190610acc9190612f28565b9050610ada60006008611199565b505b60046000541415610bc757600060028054610af690612e09565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2290612e09565b8015610b6f5780601f10610b4457610100808354040283529160200191610b6f565b820191906000526020600020905b815481529060010190602001808311610b5257829003601f168201915b5050505050806020019051810190610b879190612fb9565b90506001610b94846123ab565b516001811115610ba657610ba6612cd9565b14610bb2576000610bc0565b610bbb836123ab565b604001515b9392505050565b610bd360006008611199565b919050565b604080516060810182526000808252602082018190529181019190915261056f826123ab565b60408051602081019091526000815260016000541415610cc857600060028054610c2790612e09565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5390612e09565b8015610ca05780601f10610c7557610100808354040283529160200191610ca0565b820191906000526020600020905b815481529060010190602001808311610c8357829003601f168201915b5050505050806020019051810190610cb89190612f28565b9050610cc66000600b611199565b505b60046000541415610d7d57600060028054610ce290612e09565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0e90612e09565b8015610d5b5780601f10610d3057610100808354040283529160200191610d5b565b820191906000526020600020905b815481529060010190602001808311610d3e57829003601f168201915b5050505050806020019051810190610d739190612fb9565b6040015192915050565b61050c6000600b611199565b6000610d93612767565b610d9b6127a3565b610da36127c2565b6040805180820182526001600160a01b0388168152602080820188905283830191909152600183528151808201909252828252830152610de382846111be565b5050602001519392505050565b6000610dfa612767565b610e026127a3565b610e0a6127c2565b6040805180820182526001600160a01b038816815260208082018890526060840191909152600283528151808201909252828252830152610e4b82846111be565b5050604001519392505050565b610e60612767565b610713610e7236849003840184613200565b82612438565b6000610e82612767565b610e8a6127a3565b610e926127c2565b6040805180820182526001600160a01b0388168152602080820188905260c0840191909152600583528151808201909252828252830152610ed382846111be565b505060a001519392505050565b600060606000546002808054610ef590612e09565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2190612e09565b8015610f6e5780601f10610f4357610100808354040283529160200191610f6e565b820191906000526020600020905b815481529060010190602001808311610f5157829003601f168201915b50505050509050915091509091565b610f856128ae565b61056f82612583565b60006001600054141561104b57600060028054610faa90612e09565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd690612e09565b80156110235780601f10610ff857610100808354040283529160200191611023565b820191906000526020600020905b81548152906001019060200180831161100657829003601f168201915b505050505080602001905181019061103b9190612f28565b905061104960006007611199565b505b600460005414156111915760006002805461106590612e09565b80601f016020809104026020016040519081016040528092919081815260200182805461109190612e09565b80156110de5780601f106110b3576101008083540402835291602001916110de565b820191906000526020600020905b8154815290600101906020018083116110c157829003601f168201915b50505050508060200190518101906110f69190612fb9565b90506111006128e2565b6020808201805160009052835190516001600160a01b03909116910152600161112886612583565b51600181111561113a5761113a612cd9565b14611149578060200151611157565b61115285612583565b604001515b60408201819052602001516001600160a01b0385811691161415611182576040810151518152611187565b600081525b51915061056f9050565b61056f600060075b816107135760405163100960cb60e01b81526004810182905260240160405180910390fd5b6111ce6004600054146024611199565b81516111e99015806111e257508251600154145b6025611199565b6000808055600280546111fb90612e09565b80601f016020809104026020016040519081016040528092919081815260200182805461122790612e09565b80156112745780601f1061124957610100808354040283529160200191611274565b820191906000526020600020905b81548152906001019060200180831161125757829003601f168201915b505050505080602001905181019061128c9190612fb9565b905061129661292d565b6112a560001943106026611199565b7f8b925d29e8b21b722cc2e0950ddd2bddd36661b5a999b82cded4d2c7fb45230d33856040516112d6929190613269565b60405180910390a160006020850151515160068111156112f8576112f8612cd9565b14156114b757602080850151510151815261131534156012611199565b80515161133c906001600160a01b03163314611332576001611335565b60005b6013611199565b611385600161134a336123ab565b51600181111561135c5761135c612cd9565b14611368576000611376565b611371336123ab565b604001515b82516020015111156014611199565b805160209081015181830180519190915282515181516001600160a01b039182169084015233600090815260058452604090819020805460ff191660019081178255935180518583015585015160029091018054919093166001600160a01b031990911617909155519081527f71b25430a475d5462bba4f95517f75efc371c925ca452b596a91b7ccfabcbf9a910160405180910390a160018352805180516020909101516040517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259261145a92339261339f565b60405180910390a161146a612b0d565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845193169201919091528101514390526114b181612651565b50612147565b60016020850151515160068111156114d1576114d1612cd9565b141561167a57602084015151604090810151908201526114f334156015611199565b6001604082015151611504906123ab565b51600181111561151657611516612cd9565b14611522576000611536565b604081015151611531906123ab565b604001515b606082018190526040820151602001516115539110156016611199565b60408181018051516001600160a01b0316600090815260066020908152929020805460ff19166001179055510151606082015161159091906133d9565b60408281018051516001600160a01b03908116600090815260066020908152848220600190810196909655875190921681526004825292909220805460ff19169093179092559051015160808301516115e991906133d9565b82516001600160a01b031660009081526004602090815260409182902060019081019390935590519182527f5a51dfbb3511bb0bb56eefcae596cf25f57120fa8278cb79483471c9f2c30ede910160405180910390a1600160208085019190915260408083015180516060860151919093015191516000805160206134098339815191529361145a9390929161339f565b600260208501515151600681111561169457611694612cd9565b141561182f576020840151516060015160808201526116b534156017611199565b6080810151516116df906001600160a01b031633146116d55760016116d8565b60005b6018611199565b60a08101805160009052825190516001600160a01b0390911660209182015260808201510151600161171033612583565b51600181111561172257611722612cd9565b14611731578160a0015161173f565b61173a33612583565b604001515b5161174a91906133d9565b60c0820181905260e0820180519190915260808201515181516001600160a01b0391821660209182015233600090815260058252604090819020805460ff191660019081178255945180518683015583015160029091018054919094166001600160a01b03199091161790925590519182527fd6837a412962f457c3589e1968bec42065428749b0dd7c4d105727d85863db4e910160405180910390a1600160408085019190915260808201515160c083015191517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259261145a92339290919061339f565b600360208501515151600681111561184957611849612cd9565b14156119e8576020840151516080015161010082015261186b34156019611199565b61010081015151611896906001600160a01b0316331461188c57600161188f565b60005b601a611199565b6101208101805160009052825190516001600160a01b03909116602091820152610100820151015160016118c933612583565b5160018111156118db576118db612cd9565b146118eb578161012001516118f9565b6118f433612583565b604001515b5161190491906133f0565b610140820181905261016082018051919091526101008201515181516001600160a01b0391821660209182015233600090815260058252604090819020805460ff191660019081178255945180518683015583015160029091018054919094166001600160a01b03199091161790925590519182527fa2f63f031ac87b9be762c62ab0d72655699d19de51bdc7b079e367a0f8b575a2910160405180910390a160016060840152610100810151516101408201516040517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259261145a92339261339f565b6004602085015151516006811115611a0257611a02612cd9565b1415611ba65760208401515160a00151610180820152611a243415601b611199565b8151611a3c906001600160a01b03163314601c611199565b61018081018051516001600160a01b03166000908152600660209081526040909120805460ff191660019081179091559151908101519051909190611a80906123ab565b516001811115611a9257611a92612cd9565b14611a9e576000611ab3565b61018082015151611aae906123ab565b604001515b611abd91906133f0565b61018082018051516001600160a01b0390811660009081526006602090815260408083206001908101969096558751909316825260048152919020805460ff19169093179092555101516080830151611b1691906133f0565b82516001600160a01b031660009081526004602090815260409182902060019081019390935590519182527f4ce818133b7d9ff5bd13d15235bfa0f6d1a05045a3d91536b16d54ad626af85a910160405180910390a160016080840152606082015161018082015180516020909101516040516000805160206134098339815191529361145a939092909161339f565b6005602085015151516006811115611bc057611bc0612cd9565b1415611db15760208401515160c001516101a0820152611be23415601d611199565b6101a081015151611c0d906001600160a01b03163314611c03576001611c06565b60005b601e611199565b6001611c18336123ab565b516001811115611c2a57611c2a612cd9565b14611c36576000611c44565b611c3f336123ab565b604001515b6101c082018190526101a082015160200151611c63911015601f611199565b336000908152600660209081526040909120805460ff191660011790556101a082015101516101c0820151611c9891906133d9565b3360009081526006602090815260408083206001908101949094556101a085018051516001600160a01b031684529220805460ff1916841790559051908101519051909190611ce6906123ab565b516001811115611cf857611cf8612cd9565b14611d04576000611d19565b6101a082015151611d14906123ab565b604001515b611d2391906133f0565b6101a0820151516001600160a01b031660009081526006602090815260409182902060019081019390935590519182527f91f2f502e58fd030400cc13d1acc140467c4d9d070fe4f81eded105b6884ace4910160405180910390a1600160a08401526101a081015180516020909101516040516000805160206134098339815191529261145a92339261339f565b6006602085015151516006811115611dcb57611dcb612cd9565b1415612147576020808501515160e001516101e0830152611dee90341590611199565b6101e081015160208101519051611e22916001600160a01b03918216911614611e18576001611e1b565b60005b6021611199565b60016101e082015151611e34906123ab565b516001811115611e4657611e46612cd9565b14611e52576000611e67565b6101e081015151611e62906123ab565b604001515b61020082018190526101e082015160400151611e869110156022611199565b6102208101805160009052825190516001600160a01b0390911660209091015260016101e082015151611eb890612583565b516001811115611eca57611eca612cd9565b14611eda57806102200151611eef565b6101e081015151611eea90612583565b604001515b816102400181905250611f48816101e00151602001516001600160a01b0316826102400151602001516001600160a01b031614611f2d576000611f41565b6101e0820151604001516102408301515110155b6023611199565b6101e081018051516001600160a01b031660009081526006602052604090819020805460ff1916600117905590510151610200820151611f8891906133d9565b6101e082018051516001600160a01b0390811660009081526006602090815260408083206001908101969096558451820151909316825290829020805460ff191685179055915190810151910151909190611fe2906123ab565b516001811115611ff457611ff4612cd9565b14612000576000612017565b612012826101e00151602001516123ab565b604001515b61202191906133f0565b6101e0820180516020908101516001600160a01b031660009081526006909152604090819020600101929092555101516102408201515161206291906133d9565b61026082018051919091526101e08201805160209081015183516001600160a01b039182169083015282515181166000908152600583526040808220805460ff19166001908117909155955194515183168252908190208451818701559383015160029094018054949092166001600160a01b031990941693909317905590519182527fb638d763cb0590be0debb95bc8feac466f29149f864a0e9dff68175a819eced4910160405180910390a1600160c08401526101e08101518051602082015160409283015192516000805160206134098339815191529361145a93929161339f565b50505050565b61215d6001600054146010611199565b815161217890158061217157508251600154145b6011611199565b60008080556002805461218a90612e09565b80601f01602080910402602001604051908101604052809291908181526020018280546121b690612e09565b80156122035780601f106121d857610100808354040283529160200191612203565b820191906000526020600020905b8154815290600101906020018083116121e657829003601f168201915b505050505080602001905181019061221b9190612f28565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16122723415600e611199565b805161228a906001600160a01b03163314600f611199565b612292612b0d565b815181516001600160a01b03918216905260208084015183518201526040808501518451909101526060808501518451931692019190915281015143905261214781612651565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561232557612325612cd9565b141561239c576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561236657612366612cd9565b600181111561237757612377612cd9565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156123f7576123f7612cd9565b141561239c576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561236657612366612cd9565b6124486004600054146029611199565b815161246390158061245c57508251600154145b602a611199565b60008080556002805461247590612e09565b80601f01602080910402602001604051908101604052809291908181526020018280546124a190612e09565b80156124ee5780601f106124c3576101008083540402835291602001916124ee565b820191906000526020600020905b8154815290600101906020018083116124d157829003601f168201915b50505050508060200190518101906125069190612fb9565b9050612518600019431015602b611199565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161256b34156027611199565b805161228a906001600160a01b031633146028611199565b61258b6128ae565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156125ba576125ba612cd9565b141561239c576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156125fb576125fb612cd9565b600181111561260c5761260c612cd9565b81528154610100900460ff161515602080830191909152604080518082018252600185015481526002909401546001600160a01b031691840191909152015292915050565b604080516020810190915260008152600182515161266e906122d9565b51600181111561268057612680612cd9565b1461268c57600061269d565b815151612698906122d9565b604001515b81526040805160a08082018352600080835283516020808201865282825280850191825285518082018752838152858701908152606080870185815260808089018781528c51516001600160a01b03908116808c528e5188015189528e518d015187528e51860151821685528d5183526004909955436001558b5180880199909952965151888c01529351519287019290925251909316928401929092529051828401528451808303909301835260c0909101909352805191926121479260029290910190612b60565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040518060400160405280600081526020016127bd612be4565b905290565b60408051610100810190915280600081526020016127f0604080518082019091526000808252602082015290565b815260200161280f604080518082019091526000808252602082015290565b815260200161282e604080518082019091526000808252602082015290565b815260200161284d604080518082019091526000808252602082015290565b815260200161286c604080518082019091526000808252602082015290565b815260200161288b604080518082019091526000808252602082015290565b815260408051606081018252600080825260208281018290529282015291015290565b60408051606081019091528060008152600060208201526040016127bd604080518082019091526000808252602082015290565b60405180606001604052806000815260200161290e604080518082019091526000808252602082015290565b81526020016127bd604080518082019091526000808252602082015290565b604080516102c08101909152600061028082018181526102a08301919091528190815260200161296d604080518082019091526000808252602082015290565b815260200161298c604080518082019091526000808252602082015290565b8152602001600081526020016129b2604080518082019091526000808252602082015290565b81526020016129d1604080518082019091526000808252602082015290565b8152602001600081526020016129f7604080518082019091526000808252602082015290565b8152602001612a16604080518082019091526000808252602082015290565b8152602001612a35604080518082019091526000808252602082015290565b815260200160008152602001612a5b604080518082019091526000808252602082015290565b8152602001612a7a604080518082019091526000808252602082015290565b8152602001612a99604080518082019091526000808252602082015290565b815260200160008152602001612ac8604080516060810182526000808252602082018190529181019190915290565b815260200160008152602001612aee604080518082019091526000808252602082015290565b815260200161290e604080518082019091526000808252602082015290565b6040805160c0810182526000818301818152835160208082018652838252606085019190915284518082018652838152608085015260a08401839052908352835180820190945290835290919082015290565b828054612b6c90612e09565b90600052602060002090601f016020900481019282612b8e5760008555612bd4565b82601f10612ba757805160ff1916838001178555612bd4565b82800160010185558215612bd4579182015b82811115612bd4578251825591602001919060010190612bb9565b50612be0929150612bf7565b5090565b60405180602001604052806127bd6127c2565b5b80821115612be05760008155600101612bf8565b6001600160a01b0381168114612c2157600080fd5b50565b60008060408385031215612c3757600080fd5b8235612c4281612c0c565b946020939093013593505050565b60006102208284031215612c6357600080fd5b50919050565b600080600060608486031215612c7e57600080fd5b8335612c8981612c0c565b92506020840135612c9981612c0c565b929592945050506040919091013590565b600060408284031215612c6357600080fd5b600060208284031215612cce57600080fd5b8135610bc081612c0c565b634e487b7160e01b600052602160045260246000fd5b60028110612c2157612c21612cd9565b81516060820190612d0f81612cef565b808352506020830151151560208301526040830151604083015292915050565b82815260006020604081840152835180604085015260005b81811015612d6357858101830151858201606001528201612d47565b81811115612d75576000606083870101525b50601f01601f191692909201606001949350505050565b81516080820190612d9c81612cef565b825260208381015115158184015260409384015180519484019490945292909201516001600160a01b031660609091015290565b60008060408385031215612de357600080fd5b8235612dee81612c0c565b91506020830135612dfe81612c0c565b809150509250929050565b600181811c90821680612e1d57607f821691505b60208210811415612c6357634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff81118282101715612e6f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715612e6f57634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715612e6f57634e487b7160e01b600052604160045260246000fd5b600060208284031215612eea57600080fd5b6040516020810181811067ffffffffffffffff82111715612f1b57634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b600060808284031215612f3a57600080fd5b6040516080810181811067ffffffffffffffff82111715612f6b57634e487b7160e01b600052604160045260246000fd5b6040528251612f7981612c0c565b8152612f888460208501612ed8565b6020820152612f9a8460408501612ed8565b60408201526060830151612fad81612c0c565b60608201529392505050565b600060a08284031215612fcb57600080fd5b60405160a0810181811067ffffffffffffffff82111715612ffc57634e487b7160e01b600052604160045260246000fd5b604052825161300a81612c0c565b81526130198460208501612ed8565b602082015261302b8460408501612ed8565b6040820152606083015161303e81612c0c565b60608201526080928301519281019290925250919050565b803560078110610bd357600080fd5b60006040828403121561307757600080fd5b61307f612e3e565b9050813561308c81612c0c565b808252506020820135602082015292915050565b6000606082840312156130b257600080fd5b6040516060810181811067ffffffffffffffff821117156130e357634e487b7160e01b600052604160045260246000fd5b60405290508082356130f481612c0c565b8152602083013561310481612c0c565b6020820152604092830135920191909152919050565b600081830361022081121561312e57600080fd5b613136612e3e565b83358152610200601f198301121561314d57600080fd5b613155612e75565b915061315f612ea6565b61316b60208601613056565b815261317a8660408701613065565b602082015261318c8660808701613065565b604082015261319e8660c08701613065565b60608201526131b1866101008701613065565b60808201526131c4866101408701613065565b60a08201526131d7866101808701613065565b60c08201526131ea866101c087016130a0565b60e0820152825260208101919091529392505050565b60006040828403121561321257600080fd5b6040516040810181811067ffffffffffffffff8211171561324357634e487b7160e01b600052604160045260246000fd5b604052823581526020830135801515811461325d57600080fd5b60208201529392505050565b6001600160a01b03831681528151602080830191909152820151518051610240830191906007811061329d5761329d612cd9565b604084015260208181015180516001600160a01b0316606086015290810151608085015250604081015180516001600160a01b031660a0850152602081015160c085015250606081015180516001600160a01b031660e0850152602081015161010085015250608081015180516001600160a01b031661012085015260208101516101408501525060a081015180516001600160a01b031661016085015260208101516101808501525060c081015180516001600160a01b03166101a085015260208101516101c08501525060e0015180516001600160a01b039081166101e08501526020820151166102008401526040810151610220840152509392505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156133eb576133eb6133c3565b500390565b60008219821115613403576134036133c3565b50019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122086b7a1c73e5fb62acf3f001bf7449ffca189438508e4760de8e80a143a67dab264736f6c634300080c0033`,
  BytecodeLen: 14497,
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
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:266:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:105:41:after expr stmt semicolon',
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
  "decreaseAllowance": decreaseAllowance,
  "increaseAllowance": increaseAllowance,
  "mint": mint,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  burn: burn,
  decreaseAllowance: decreaseAllowance,
  increaseAllowance: increaseAllowance,
  mint: mint,
  transfer: transfer,
  transferFrom: transferFrom
  };
