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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const map0_ctc = ctc2;
  
  const map1_ctc = ctc2;
  
  const map2_ctc = ctc2;
  
  
  return {
    infos: {
      vBtCtc: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v300, v301] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v300, v301] = svs;
            return (await ((async (_v326 ) => {
                const v326 = stdlib.protect(ctc0, _v326, null);
              
              const v327 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v326), null);
              const v328 = stdlib.fromSome(v327, v301);
              
              return v328;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      vManCtc: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v300, v301] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v300, v301] = svs;
            return (await ((async (_v323 ) => {
                const v323 = stdlib.protect(ctc0, _v323, null);
              
              const v324 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v323), null);
              const v325 = stdlib.fromSome(v324, v301);
              
              return v325;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      vStCtc: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v300, v301] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v300, v301] = svs;
            return (await ((async (_v329 ) => {
                const v329 = stdlib.protect(ctc0, _v329, null);
              
              const v330 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v329), null);
              const v331 = stdlib.fromSome(v330, v301);
              
              return v331;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        }
      },
    views: {
      1: [ctc0, ctc0],
      4: [ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  return {
    mapDataTy: ctc3
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    zeroAddress: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Data({
    btCtcId0_96: ctc4,
    manCtcId0_96: ctc4,
    stCtcId0_96: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  
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
  
  
  const v297 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './index.rsh:36:62:application',
    fs: ['at ./index.rsh:35:17:application call to [unknown function] (defined at: ./index.rsh:35:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v298 = v297.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v298],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v301], secs: v303, time: v302, didSend: v29, from: v300 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v301], secs: v303, time: v302, didSend: v29, from: v300 } = txn1;
  ;
  /* const v305 = 'I have deployed';
  stdlib.protect(ctc0, await interact.iDeployed(v305), {
    at: './index.rsh:40:31:application',
    fs: ['at ./index.rsh:40:31:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at ./index.rsh:40:31:application call to "liftedInteract" (defined at: ./index.rsh:40:31:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    }); */
  
  const txn2 = await (ctc.sendrecv({
    args: [v300, v301],
    evt_cnt: 0,
    funcNum: 1,
    lct: v302,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v308, time: v307, didSend: v39, from: v306 } = txn2;
      
      ;
      const v313 = v307;
      
      if (await (async () => {
        
        return true;})()) {
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
    tys: [ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v308, time: v307, didSend: v39, from: v306 } = txn2;
  ;
  const v309 = stdlib.addressEq(v300, v306);
  stdlib.assert(v309, {
    at: './index.rsh:44:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v313 = v307;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v300, v301],
        evt_cnt: 0,
        funcNum: 4,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:129:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          
          const {data: [], secs: v510, time: v509, didSend: v259, from: v508 } = txn4;
          
          ;
          const cv313 = v509;
          
          await (async () => {
            const v313 = cv313;
            
            if (await (async () => {
              
              return true;})()) {
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
        tys: [ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v510, time: v509, didSend: v259, from: v508 } = txn4;
      ;
      const v511 = stdlib.addressEq(v300, v508);
      stdlib.assert(v511, {
        at: './index.rsh:129:21:dot',
        fs: ['at ./index.rsh:128:40:application call to [unknown function] (defined at: ./index.rsh:128:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv313 = v509;
      
      v313 = cv313;
      
      continue;
      }
    else {
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn3;
      switch (v376[0]) {
        case 'btCtcId0_96': {
          const v379 = v376[1];
          undefined /* setApiDetails */;
          ;
          const v390 = v379[stdlib.checkedBigNumberify('./index.rsh:96:13:spread', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map1, v375, v390);
          const v391 = true;
          await txn3.getOutput('btCtcId', 'v391', ctc6, v391);
          const cv313 = v377;
          
          v313 = cv313;
          
          continue;
          break;
          }
        case 'manCtcId0_96': {
          const v422 = v376[1];
          undefined /* setApiDetails */;
          ;
          const v444 = v422[stdlib.checkedBigNumberify('./index.rsh:80:13:spread', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map0, v375, v444);
          const v445 = true;
          await txn3.getOutput('manCtcId', 'v445', ctc6, v445);
          const cv313 = v377;
          
          v313 = cv313;
          
          continue;
          break;
          }
        case 'stCtcId0_96': {
          const v465 = v376[1];
          undefined /* setApiDetails */;
          ;
          const v498 = v465[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map2, v375, v498);
          const v499 = true;
          await txn3.getOutput('stCtcId', 'v499', ctc6, v499);
          const cv313 = v377;
          
          v313 = cv313;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _btCtcId4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _btCtcId4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _btCtcId4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    btCtcId0_96: ctc3,
    manCtcId0_96: ctc3,
    stCtcId0_96: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  
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
  
  
  const [v300, v301] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1]);
  const v349 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:63:59:application call to "runbtCtcId0_96" (defined at: ./index.rsh:96:13:function exp)', 'at ./index.rsh:63:59:application call to [unknown function] (defined at: ./index.rsh:63:59:function exp)'],
    msg: 'in',
    who: 'btCtcId'
    });
  const v356 = ['btCtcId0_96', v349];
  
  const txn1 = await (ctc.sendrecv({
    args: [v300, v301, v356],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:103:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
      
      switch (v376[0]) {
        case 'btCtcId0_96': {
          const v379 = v376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "btCtcId"
            });
          ;
          const v390 = v379[stdlib.checkedBigNumberify('./index.rsh:96:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, v375, v390);
          const v391 = true;
          const v392 = await txn1.getOutput('btCtcId', 'v391', ctc5, v391);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'manCtcId0_96': {
          const v422 = v376[1];
          
          break;
          }
        case 'stCtcId0_96': {
          const v465 = v376[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
  switch (v376[0]) {
    case 'btCtcId0_96': {
      const v379 = v376[1];
      undefined /* setApiDetails */;
      ;
      const v390 = v379[stdlib.checkedBigNumberify('./index.rsh:96:13:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, v375, v390);
      const v391 = true;
      const v392 = await txn1.getOutput('btCtcId', 'v391', ctc5, v391);
      if (v204) {
        stdlib.protect(ctc0, await interact.out(v379, v392), {
          at: './index.rsh:97:13:application',
          fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:108:20:application call to "res" (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)'],
          msg: 'out',
          who: 'btCtcId'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'manCtcId0_96': {
      const v422 = v376[1];
      return;
      break;
      }
    case 'stCtcId0_96': {
      const v465 = v376[1];
      return;
      break;
      }
    }
  
  
  };
export async function _manCtcId4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _manCtcId4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _manCtcId4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    btCtcId0_96: ctc3,
    manCtcId0_96: ctc3,
    stCtcId0_96: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  
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
  
  
  const [v300, v301] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1]);
  const v338 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:13:function exp)', 'at ./index.rsh:63:59:application call to "runmanCtcId0_96" (defined at: ./index.rsh:80:13:function exp)', 'at ./index.rsh:63:59:application call to [unknown function] (defined at: ./index.rsh:63:59:function exp)'],
    msg: 'in',
    who: 'manCtcId'
    });
  const v345 = ['manCtcId0_96', v338];
  
  const txn1 = await (ctc.sendrecv({
    args: [v300, v301, v345],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
      
      switch (v376[0]) {
        case 'btCtcId0_96': {
          const v379 = v376[1];
          
          break;
          }
        case 'manCtcId0_96': {
          const v422 = v376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "manCtcId"
            });
          ;
          const v444 = v422[stdlib.checkedBigNumberify('./index.rsh:80:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v375, v444);
          const v445 = true;
          const v446 = await txn1.getOutput('manCtcId', 'v445', ctc5, v445);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'stCtcId0_96': {
          const v465 = v376[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
  switch (v376[0]) {
    case 'btCtcId0_96': {
      const v379 = v376[1];
      return;
      break;
      }
    case 'manCtcId0_96': {
      const v422 = v376[1];
      undefined /* setApiDetails */;
      ;
      const v444 = v422[stdlib.checkedBigNumberify('./index.rsh:80:13:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v375, v444);
      const v445 = true;
      const v446 = await txn1.getOutput('manCtcId', 'v445', ctc5, v445);
      if (v204) {
        stdlib.protect(ctc0, await interact.out(v422, v446), {
          at: './index.rsh:81:13:application',
          fs: ['at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)', 'at ./index.rsh:92:20:application call to "res" (defined at: ./index.rsh:89:13:function exp)', 'at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
          msg: 'out',
          who: 'manCtcId'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'stCtcId0_96': {
      const v465 = v376[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stCtcId4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stCtcId4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stCtcId4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Data({
    btCtcId0_96: ctc3,
    manCtcId0_96: ctc3,
    stCtcId0_96: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  
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
  
  
  const [v300, v301] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1]);
  const v360 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:13:function exp)', 'at ./index.rsh:63:59:application call to "runstCtcId0_96" (defined at: ./index.rsh:112:13:function exp)', 'at ./index.rsh:63:59:application call to [unknown function] (defined at: ./index.rsh:63:59:function exp)'],
    msg: 'in',
    who: 'stCtcId'
    });
  const v367 = ['stCtcId0_96', v360];
  
  const txn1 = await (ctc.sendrecv({
    args: [v300, v301, v367],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:119:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
      
      switch (v376[0]) {
        case 'btCtcId0_96': {
          const v379 = v376[1];
          
          break;
          }
        case 'manCtcId0_96': {
          const v422 = v376[1];
          
          break;
          }
        case 'stCtcId0_96': {
          const v465 = v376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stCtcId"
            });
          ;
          const v498 = v465[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, v375, v498);
          const v499 = true;
          const v500 = await txn1.getOutput('stCtcId', 'v499', ctc5, v499);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v376], secs: v378, time: v377, didSend: v204, from: v375 } = txn1;
  switch (v376[0]) {
    case 'btCtcId0_96': {
      const v379 = v376[1];
      return;
      break;
      }
    case 'manCtcId0_96': {
      const v422 = v376[1];
      return;
      break;
      }
    case 'stCtcId0_96': {
      const v465 = v376[1];
      undefined /* setApiDetails */;
      ;
      const v498 = v465[stdlib.checkedBigNumberify('./index.rsh:112:13:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, v375, v498);
      const v499 = true;
      const v500 = await txn1.getOutput('stCtcId', 'v499', ctc5, v499);
      if (v204) {
        stdlib.protect(ctc0, await interact.out(v465, v500), {
          at: './index.rsh:113:13:application',
          fs: ['at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:13:function exp)', 'at ./index.rsh:124:20:application call to "res" (defined at: ./index.rsh:121:13:function exp)', 'at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:13:function exp)'],
          msg: 'out',
          who: 'stCtcId'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function btCtcId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for btCtcId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for btCtcId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _btCtcId4(ctcTop, interact);}
  };
export async function manCtcId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for manCtcId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for manCtcId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _manCtcId4(ctcTop, interact);}
  };
export async function stCtcId(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stCtcId expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stCtcId expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _stCtcId4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`btCtcId(address)byte`, `manCtcId(address)byte`, `stCtcId(address)byte`],
    pure: [`vBtCtc(address)address`, `vManCtc(address)address`, `vStCtc(address)address`],
    sigs: [`btCtcId(address)byte`, `manCtcId(address)byte`, `stCtcId(address)byte`, `vBtCtc(address)address`, `vManCtc(address)address`, `vStCtc(address)address`]
    },
  appApproval: `BiALAAEEY8vKpYQFlPuChAih3MqsC4Kkz64C1Juo7gP///////////8BAiYDAQABAQAiNQAxGEEDLCpkSSJbNQGBCFs1AjEZIxJBAAkxACglr2ZCAvk2GgAXSUEA3CI1BCM1BkkhBAxAAFpJIQUMQAApSSEGDEAAECEGEkQ2GgE1/yg0/1BCAQghBRJENhoBNf+AAQI0/1BCAPYhBBJENAEkEkQoZEk1A1cgIDYaAYgCvVdCIUk1/1cBIDT/IlVNNQdCAplJIQcMQABBSSEIDEAAECEIEkQ2GgE1/yk0/1BCAK4hBxJENAEkEkQoZEk1A1cgIDYaAYgCdVcAIUk1/1cBIDT/IlVNNQdCAlGBtdXaBRJENAEkEkQoZEk1A1cgIDYaAYgCSFchIUk1/1cBIDT/IlVNNQdCAiQ2GgIXNQQ2GgM2GgEXSYEDDEABMkkkDEAAPCQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASRJzTzsDIGIQkPRDT/MQASRDT/NANXICAyBkIBakgkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XICA1/kk1BTX9gAQUkUDUNP1QsDIGIQkMRDT9IlVJIwxAAHVJIQoMQAA4IQoSRDT9VwEgNfwxACgxAIgBhSk0/FA1+1cAQjT7UGaACQAAAAAAAAHzAbApNQc0/zT+MgZCAOtINP1XASA1/DEAKDEAiAFQKTT8UDX7VyFCNPtMUGaACQAAAAAAAAG9AbApNQc0/zT+MgZCALVINP1XASA1/DEAKDEAiAEaKTT8UDX7SVcAITT7UExXQiFQZoAJAAAAAAAAAYcBsCk1BzT/NP4yBkIAekkjDEAANiMSRCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASai5F0sDT/MQASRDT/NANXICAyBkIAPkgiNAESRDQESSISTDQCEhFESTUFNf+ABPuGb+40/1CwgaCNBogAmjEANP9QKEsBVwBAZ0gjNQEyBjUCQgA4Nf81/kk1/TT+UChLAVcAQGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABEglr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 99,
  stateKeys: 1,
  stateSize: 64,
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
                "internalType": "address payable",
                "name": "v301",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "internalType": "address payable",
                "name": "v301",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
        "internalType": "struct T7",
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
                    "internalType": "enum _enum_T9",
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
                    "internalType": "struct T8",
                    "name": "_btCtcId0_96",
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
                    "internalType": "struct T8",
                    "name": "_manCtcId0_96",
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
                    "internalType": "struct T8",
                    "name": "_stCtcId0_96",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v376",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T7",
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
    "name": "_reach_oe_v391",
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
    "name": "_reach_oe_v445",
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
    "name": "_reach_oe_v499",
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
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
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
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
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
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
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
        "internalType": "struct T7",
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
                    "internalType": "enum _enum_T9",
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
                    "internalType": "struct T8",
                    "name": "_btCtcId0_96",
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
                    "internalType": "struct T8",
                    "name": "_manCtcId0_96",
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
                    "internalType": "struct T8",
                    "name": "_stCtcId0_96",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v376",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
        "internalType": "struct T7",
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
    "name": "btCtcId",
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
    "name": "manCtcId",
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
    "name": "stCtcId",
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
        "name": "v947",
        "type": "address"
      }
    ],
    "name": "vBtCtc",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v949",
        "type": "address"
      }
    ],
    "name": "vManCtc",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v951",
        "type": "address"
      }
    ],
    "name": "vStCtc",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
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
  Bytecode: `0x608060405260405162001c0038038062001c008339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600a62000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b61192380620002dd6000396000f3fe6080604052600436106100e05760003560e01c80638b82f14111610084578063b6af313611610056578063b6af313614610246578063ba492d7614610266578063cadc2e7a14610279578063f7bacc521461029957005b80638b82f141146101b8578063a23f4285146101f0578063a7661d5414610210578063ab53f2c61461022357005b8063496f1052116100bd578063496f10521461014d57806380eb4ac314610170578063817d57f31461018357806383230757146101a357005b80631e93b0f1146100e95780632c10a1591461010d5780633bc5b7bf1461012057005b366100e757005b005b3480156100f557600080fd5b506003545b6040519081526020015b60405180910390f35b6100e761011b36600461150a565b6102ac565b34801561012c57600080fd5b5061014061013b36600461153a565b6102e5565b604051610104919061156d565b61016061015b36600461153a565b610311565b6040519015158152602001610104565b61016061017e36600461153a565b610384565b34801561018f57600080fd5b5061014061019e36600461153a565b6103f3565b3480156101af57600080fd5b506001546100fa565b3480156101c457600080fd5b506101d86101d336600461153a565b610419565b6040516001600160a01b039091168152602001610104565b3480156101fc57600080fd5b506101d861020b36600461153a565b6105d5565b6100e761021e36600461150a565b610780565b34801561022f57600080fd5b506102386107b5565b6040516101049291906115ac565b34801561025257600080fd5b506101d861026136600461153a565b610852565b6100e7610274366004611609565b6109fd565b34801561028557600080fd5b5061014061029436600461153a565b610a32565b6101606102a736600461153a565b610a58565b60408051606081018252600080825260208201819052918101919091526102e16102db368490038401846116b4565b82610aca565b5050565b604080516060810182526000808252602082018190529181019190915261030b82610c46565b92915050565b60408051606081018252600080825260208201819052918101829052610335611398565b61033d6113b7565b60408051602080820183526001600160a01b038816825260608401919091526002835281518082019092528282528301526103788284610d21565b50506040015192915050565b604080516060810182526000808252602082018190529181018290526103a8611398565b6103b06113b7565b60408051602080820183526001600160a01b0388168252838101919091526000835281518082019092528282528301526103ea8284610d21565b50505192915050565b604080516060810182526000808252602082018190529181019190915261030b8261109b565b6000600160005414156104d657600060028054610435906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610461906116f1565b80156104ae5780601f10610483576101008083540402835291602001916104ae565b820191906000526020600020905b81548152906001019060200180831161049157829003601f168201915b50505050508060200190518101906104c69190611726565b90506104d460006009611128565b505b600460005414156105c4576000600280546104f0906116f1565b80601f016020809104026020016040519081016040528092919081815260200182805461051c906116f1565b80156105695780601f1061053e57610100808354040283529160200191610569565b820191906000526020600020905b81548152906001019060200180831161054c57829003601f168201915b50505050508060200190518101906105819190611726565b9050600161058e8461109b565b5160018111156105a0576105a0611557565b146105af5780602001516105bd565b6105b88361109b565b604001515b9392505050565b6105d060006009611128565b919050565b600060016000541415610692576000600280546105f1906116f1565b80601f016020809104026020016040519081016040528092919081815260200182805461061d906116f1565b801561066a5780601f1061063f5761010080835404028352916020019161066a565b820191906000526020600020905b81548152906001019060200180831161064d57829003601f168201915b50505050508060200190518101906106829190611726565b905061069060006008611128565b505b60046000541415610774576000600280546106ac906116f1565b80601f01602080910402602001604051908101604052809291908181526020018280546106d8906116f1565b80156107255780601f106106fa57610100808354040283529160200191610725565b820191906000526020600020905b81548152906001019060200180831161070857829003601f168201915b505050505080602001905181019061073d9190611726565b9050600161074a84610c46565b51600181111561075c5761075c611557565b1461076b5780602001516105bd565b6105b883610c46565b6105d060006008611128565b60408051606081018252600080825260208201819052918101919091526102e16107af368490038401846116b4565b8261114d565b6000606060005460028080546107ca906116f1565b80601f01602080910402602001604051908101604052809291908181526020018280546107f6906116f1565b80156108435780601f1061081857610100808354040283529160200191610843565b820191906000526020600020905b81548152906001019060200180831161082657829003601f168201915b50505050509050915091509091565b60006001600054141561090f5760006002805461086e906116f1565b80601f016020809104026020016040519081016040528092919081815260200182805461089a906116f1565b80156108e75780601f106108bc576101008083540402835291602001916108e7565b820191906000526020600020905b8154815290600101906020018083116108ca57829003601f168201915b50505050508060200190518101906108ff9190611726565b905061090d60006007611128565b505b600460005414156109f157600060028054610929906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610955906116f1565b80156109a25780601f10610977576101008083540402835291602001916109a2565b820191906000526020600020905b81548152906001019060200180831161098557829003601f168201915b50505050508060200190518101906109ba9190611726565b905060016109c784611298565b5160018111156109d9576109d9611557565b146109e85780602001516105bd565b6105b883611298565b6105d060006007611128565b60408051606081018252600080825260208201819052918101919091526102e1610a2c368490038401846117b7565b82610d21565b604080516060810182526000808252602082018190529181019190915261030b82611298565b60408051606081018252600080825260208201819052918101829052610a7c611398565b610a846113b7565b60408051602080820183526001600160a01b038816825283830191909152600183528151808201909252828252830152610abe8284610d21565b50506020015192915050565b610ada600160005414600d611128565b8151610af5901580610aee57508251600154145b600e611128565b600080805560028054610b07906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b33906116f1565b8015610b805780601f10610b5557610100808354040283529160200191610b80565b820191906000526020600020905b815481529060010190602001808311610b6357829003601f168201915b5050505050806020019051810190610b989190611726565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610bef3415600b611128565b8051610c07906001600160a01b03163314600c611128565b610c0f611413565b815181516001600160a01b0391821690526020808401518351921691810191909152810151439052610c4081611325565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c9257610c92611557565b1415610d12576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610cd357610cd3611557565b6001811115610ce457610ce4611557565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b60008082526020820152919050565b610d316004600054146012611128565b8151610d4c901580610d4557508251600154145b6013611128565b600080805560028054610d5e906116f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8a906116f1565b8015610dd75780601f10610dac57610100808354040283529160200191610dd7565b820191906000526020600020905b815481529060010190602001808311610dba57829003601f168201915b5050505050806020019051810190610def9190611726565b9050610df9611443565b610e0860001943106014611128565b7f5b4553f4e2facbf6aa06e8c3c582215fdfc1dd532cb5f37c785949be5c4161563385604051610e39929190611881565b60405180910390a16000602085015151516002811115610e5b57610e5b611557565b1415610f27576020808501515101518152610e783415600f611128565b3360009081526005602090815260409182902080548451516001600160a01b0316620100000261ff01600160b01b031990911617600190811790915591519182527f1fa9d6fd27f5621b5a60cc5058fea2575abb1f764de5f73e2eee28b35d804048910160405180910390a160018352610ef0611413565b825181516001600160a01b0391821690526020808501518351921691810191909152810151439052610f2181611325565b50610c40565b6001602085015151516002811115610f4157610f41611557565b1415610fdf57602080850151516040015190820152610f6234156010611128565b33600090815260046020908152604091829020805484830151516001600160a01b0316620100000261ff01600160b01b031990911617600190811790915591519182527fdacc1358516eeb06a3199f570794c2ae0f733fcc1893b4553d1c1832e1175f14910160405180910390a160016020840152610ef0611413565b6002602085015151516002811115610ff957610ff9611557565b1415610c405760208401515160600151604082015261101a34156011611128565b336000908152600660209081526040918290208054848401515160016001600160a01b03909116620100000261ff01600160b01b031990921691909117811790915591519182527f6e89973915d75da35bab0934082e72f2cdcfe270029c426726f5eb57330612a1910160405180910390a160016040840152610ef0611413565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156110e7576110e7611557565b1415610d12576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610cd357610cd3611557565b816102e15760405163100960cb60e01b81526004810182905260240160405180910390fd5b61115d6004600054146017611128565b815161117890158061117157508251600154145b6018611128565b60008080556002805461118a906116f1565b80601f01602080910402602001604051908101604052809291908181526020018280546111b6906116f1565b80156112035780601f106111d857610100808354040283529160200191611203565b820191906000526020600020905b8154815290600101906020018083116111e657829003601f168201915b505050505080602001905181019061121b9190611726565b905061122d6000194310156019611128565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161128034156015611128565b8051610c07906001600160a01b031633146016611128565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156112e4576112e4611557565b1415610d12576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610cd357610cd3611557565b604080518082018252600080825260208083018281528551516001600160a01b0390811680865287518401518216835260049094554360015585518084019490945290511682850152835180830385018152606090920190935280519192611393926002929091019061145e565b505050565b6040518060400160405280600081526020016113b26114e2565b905290565b604080516080810190915280600081526020016113df60408051602081019091526000815290565b81526020016113f960408051602081019091526000815290565b81526020016113b260408051602081019091526000815290565b60408051608081018252600081830181815260608301829052825282516020818101909452908152909182015290565b604080516080810190915260006060820190815281906113df565b82805461146a906116f1565b90600052602060002090601f01602090048101928261148c57600085556114d2565b82601f106114a557805160ff19168380011785556114d2565b828001600101855582156114d2579182015b828111156114d25782518255916020019190600101906114b7565b506114de9291506114f5565b5090565b60405180602001604052806113b26113b7565b5b808211156114de57600081556001016114f6565b60006040828403121561151c57600080fd5b50919050565b6001600160a01b038116811461153757600080fd5b50565b60006020828403121561154c57600080fd5b81356105bd81611522565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061158457611584611557565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b82815260006020604081840152835180604085015260005b818110156115e0578581018301518582016060015282016115c4565b818111156115f2576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561151c57600080fd5b6040805190810167ffffffffffffffff8111828210171561164c57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561164c57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561164c57634e487b7160e01b600052604160045260246000fd5b6000604082840312156116c657600080fd5b6116ce61161b565b82358152602083013580151581146116e557600080fd5b60208201529392505050565b600181811c9082168061170557607f821691505b6020821081141561151c57634e487b7160e01b600052602260045260246000fd5b60006040828403121561173857600080fd5b61174061161b565b825161174b81611522565b815260208301516116e581611522565b60006020828403121561176d57600080fd5b6040516020810181811067ffffffffffffffff8211171561179e57634e487b7160e01b600052604160045260246000fd5b60405290508082356117af81611522565b905292915050565b600081830360a08112156117ca57600080fd5b6040516040810181811067ffffffffffffffff821117156117fb57634e487b7160e01b600052604160045260246000fd5b604052833581526080601f198301121561181457600080fd5b61181c611652565b9150611826611683565b60208501356003811061183857600080fd5b8152611847866040870161175b565b6020820152611859866060870161175b565b604082015261186b866080870161175b565b6060820152825260208101919091529392505050565b6001600160a01b038381168252825160208084019190915283015151805160c08401929190600381106118b6576118b6611557565b806040860152508160208201515116606085015281604082015151166080850152816060820151511660a08501525050939250505056fea2646970667358221220892b00ded84a64fa90b21beb541af204d08f4169f846317b19a5c87c5e3c2a1d64736f6c634300080c0033`,
  BytecodeLen: 7168,
  Which: `oD`,
  version: 7,
  views: {
    vBtCtc: `vBtCtc`,
    vManCtc: `vManCtc`,
    vStCtc: `vStCtc`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:133:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:63:59:after expr stmt semicolon',
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
  "btCtcId": btCtcId,
  "manCtcId": manCtcId,
  "stCtcId": stCtcId
  };
export const _APIs = {
  btCtcId: btCtcId,
  manCtcId: manCtcId,
  stCtcId: stCtcId
  };
