/* BEAT STUDIO Orchestra preview engine v1.8 — source: CC0 VSCO-2-CE, see orchestra/LICENSE_AND_NOTES.txt */
(()=>{'use strict';
const manifest={"title":"BEAT STUDIO Orchestral Starter","version":"0.1.0","license":"CC0-1.0","instruments":[{"id":"solo_violin","name":"Solo Violin","family":"strings","hold":true,"zones":[{"file":"samples/solo_violin/LLVln_ArcoVib_G3_p.wav","root_midi":55,"velocity_layer":"soft","low_midi":0,"high_midi":61,"velocity_min":1,"velocity_max":76},{"file":"samples/solo_violin/LLVln_ArcoVib_G3_f.wav","root_midi":55,"velocity_layer":"strong","low_midi":0,"high_midi":61,"velocity_min":77,"velocity_max":127},{"file":"samples/solo_violin/LLVln_ArcoVib_G4_p.wav","root_midi":67,"velocity_layer":"soft","low_midi":62,"high_midi":71,"velocity_min":1,"velocity_max":76},{"file":"samples/solo_violin/LLVln_ArcoVib_G4_f.wav","root_midi":67,"velocity_layer":"strong","low_midi":62,"high_midi":71,"velocity_min":77,"velocity_max":127},{"file":"samples/solo_violin/LLVln_ArcoVib_E5_p.wav","root_midi":76,"velocity_layer":"soft","low_midi":72,"high_midi":80,"velocity_min":1,"velocity_max":76},{"file":"samples/solo_violin/LLVln_ArcoVib_E5_f.wav","root_midi":76,"velocity_layer":"strong","low_midi":72,"high_midi":80,"velocity_min":77,"velocity_max":127},{"file":"samples/solo_violin/LLVln_ArcoVib_C6_p.wav","root_midi":84,"velocity_layer":"soft","low_midi":81,"high_midi":90,"velocity_min":1,"velocity_max":76},{"file":"samples/solo_violin/LLVln_ArcoVib_C6_f.wav","root_midi":84,"velocity_layer":"strong","low_midi":81,"high_midi":90,"velocity_min":77,"velocity_max":127},{"file":"samples/solo_violin/LLVln_ArcoVib_C7_p.wav","root_midi":96,"velocity_layer":"soft","low_midi":91,"high_midi":127,"velocity_min":1,"velocity_max":76},{"file":"samples/solo_violin/LLVln_ArcoVib_C7_f.wav","root_midi":96,"velocity_layer":"strong","low_midi":91,"high_midi":127,"velocity_min":77,"velocity_max":127}]},{"id":"violin_section","name":"Violin Section","family":"strings","hold":true,"zones":[{"file":"samples/violin_section/VlnEns_susVib_G2_v1.wav","root_midi":43,"velocity_layer":null,"low_midi":0,"high_midi":45,"velocity_min":1,"velocity_max":127},{"file":"samples/violin_section/VlnEns_susVib_B2_v1.wav","root_midi":47,"velocity_layer":null,"low_midi":46,"high_midi":52,"velocity_min":1,"velocity_max":127},{"file":"samples/violin_section/VlnEns_susVib_A3_v1.wav","root_midi":57,"velocity_layer":null,"low_midi":53,"high_midi":62,"velocity_min":1,"velocity_max":127},{"file":"samples/violin_section/VlnEns_susVib_G4_v1.wav","root_midi":67,"velocity_layer":null,"low_midi":63,"high_midi":70,"velocity_min":1,"velocity_max":127},{"file":"samples/violin_section/VlnEns_susVib_D5_v1.wav","root_midi":74,"velocity_layer":null,"low_midi":71,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"viola_section","name":"Viola Section","family":"strings","hold":true,"zones":[{"file":"samples/viola_section/ViolaEns_susvib_C2_v1_1.wav","root_midi":36,"velocity_layer":null,"low_midi":0,"high_midi":39,"velocity_min":1,"velocity_max":127},{"file":"samples/viola_section/ViolaEns_susvib_G2_v1_1.wav","root_midi":43,"velocity_layer":null,"low_midi":40,"high_midi":48,"velocity_min":1,"velocity_max":127},{"file":"samples/viola_section/ViolaEns_susvib_F3_v1_1.wav","root_midi":53,"velocity_layer":null,"low_midi":49,"high_midi":58,"velocity_min":1,"velocity_max":127},{"file":"samples/viola_section/ViolaEns_susvib_E4_v1_1.wav","root_midi":64,"velocity_layer":null,"low_midi":59,"high_midi":69,"velocity_min":1,"velocity_max":127},{"file":"samples/viola_section/ViolaEns_susvib_D5_v1_1.wav","root_midi":74,"velocity_layer":null,"low_midi":70,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"cello_section","name":"Cello Section","family":"strings","hold":true,"zones":[{"file":"samples/cello_section/susvib_C1_v1_1.wav","root_midi":24,"velocity_layer":null,"low_midi":0,"high_midi":29,"velocity_min":1,"velocity_max":127},{"file":"samples/cello_section/susvib_B1_v1_1.wav","root_midi":35,"velocity_layer":null,"low_midi":30,"high_midi":40,"velocity_min":1,"velocity_max":127},{"file":"samples/cello_section/susvib_A2_v1_1.wav","root_midi":45,"velocity_layer":null,"low_midi":41,"high_midi":50,"velocity_min":1,"velocity_max":127},{"file":"samples/cello_section/susvib_G3_v1_1.wav","root_midi":55,"velocity_layer":null,"low_midi":51,"high_midi":60,"velocity_min":1,"velocity_max":127},{"file":"samples/cello_section/susvib_F4_v1_1.wav","root_midi":65,"velocity_layer":null,"low_midi":61,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"double_bass","name":"Double Bass","family":"strings","hold":true,"zones":[{"file":"samples/double_bass/BKCtbss_SusVib_F#0_v1_rr1.wav","root_midi":18,"velocity_layer":null,"low_midi":0,"high_midi":21,"velocity_min":1,"velocity_max":127},{"file":"samples/double_bass/BKCtbss_SusVib_C1_v1_rr1.wav","root_midi":24,"velocity_layer":null,"low_midi":22,"high_midi":27,"velocity_min":1,"velocity_max":127},{"file":"samples/double_bass/BKCtbss_SusVib_F#1_v1_rr1.wav","root_midi":30,"velocity_layer":null,"low_midi":28,"high_midi":33,"velocity_min":1,"velocity_max":127},{"file":"samples/double_bass/BKCtbss_SusVib_C#2_v1_rr1.wav","root_midi":37,"velocity_layer":null,"low_midi":34,"high_midi":42,"velocity_min":1,"velocity_max":127},{"file":"samples/double_bass/BKCtbss_SusVib_B2_v1_rr1.wav","root_midi":47,"velocity_layer":null,"low_midi":43,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"harp","name":"Concert Harp","family":"strings","hold":false,"zones":[{"file":"samples/harp/KSHarp_E1_f.wav","root_midi":28,"velocity_layer":null,"low_midi":0,"high_midi":38,"velocity_min":1,"velocity_max":127},{"file":"samples/harp/KSHarp_C3_mf.wav","root_midi":48,"velocity_layer":null,"low_midi":39,"high_midi":56,"velocity_min":1,"velocity_max":127},{"file":"samples/harp/KSHarp_F4_mf.wav","root_midi":65,"velocity_layer":null,"low_midi":57,"high_midi":74,"velocity_min":1,"velocity_max":127},{"file":"samples/harp/KSHarp_B5_mf.wav","root_midi":83,"velocity_layer":null,"low_midi":75,"high_midi":92,"velocity_min":1,"velocity_max":127},{"file":"samples/harp/KSHarp_F7_f.wav","root_midi":101,"velocity_layer":null,"low_midi":93,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"flute","name":"Flute","family":"woodwinds","hold":true,"zones":[{"file":"samples/flute/LDFlute_susvib_C3_v1_1.wav","root_midi":48,"velocity_layer":null,"low_midi":0,"high_midi":52,"velocity_min":1,"velocity_max":127},{"file":"samples/flute/LDFlute_susvib_A3_v1_1.wav","root_midi":57,"velocity_layer":null,"low_midi":53,"high_midi":60,"velocity_min":1,"velocity_max":127},{"file":"samples/flute/LDFlute_susvib_E4_v1_1.wav","root_midi":64,"velocity_layer":null,"low_midi":61,"high_midi":70,"velocity_min":1,"velocity_max":127},{"file":"samples/flute/LDFlute_susvib_E5_v1_1.wav","root_midi":76,"velocity_layer":null,"low_midi":71,"high_midi":80,"velocity_min":1,"velocity_max":127},{"file":"samples/flute/LDFlute_susvib_C6_v1_1.wav","root_midi":84,"velocity_layer":null,"low_midi":81,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"piccolo","name":"Piccolo","family":"woodwinds","hold":true,"zones":[{"file":"samples/piccolo/piccolo_G4_sustain1.wav","root_midi":67,"velocity_layer":null,"low_midi":0,"high_midi":69,"velocity_min":1,"velocity_max":127},{"file":"samples/piccolo/piccolo_C5_sustain1.wav","root_midi":72,"velocity_layer":null,"low_midi":70,"high_midi":75,"velocity_min":1,"velocity_max":127},{"file":"samples/piccolo/piccolo_G5_sustain1.wav","root_midi":79,"velocity_layer":null,"low_midi":76,"high_midi":81,"velocity_min":1,"velocity_max":127},{"file":"samples/piccolo/piccolo_C6_sustain1.wav","root_midi":84,"velocity_layer":null,"low_midi":82,"high_midi":87,"velocity_min":1,"velocity_max":127},{"file":"samples/piccolo/piccolo_G6_sustain1.wav","root_midi":91,"velocity_layer":null,"low_midi":88,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"oboe","name":"Oboe","family":"woodwinds","hold":true,"zones":[{"file":"samples/oboe/Oboe_Sus_A#2_v1_Main.wav","root_midi":46,"velocity_layer":null,"low_midi":0,"high_midi":49,"velocity_min":1,"velocity_max":127},{"file":"samples/oboe/Oboe_Sus_F3_v1_Main.wav","root_midi":53,"velocity_layer":null,"low_midi":50,"high_midi":57,"velocity_min":1,"velocity_max":127},{"file":"samples/oboe/Oboe_Sus_D4_v1_Main.wav","root_midi":62,"velocity_layer":null,"low_midi":58,"high_midi":66,"velocity_min":1,"velocity_max":127},{"file":"samples/oboe/Oboe_Sus_A#4_v1_Main.wav","root_midi":70,"velocity_layer":null,"low_midi":67,"high_midi":73,"velocity_min":1,"velocity_max":127},{"file":"samples/oboe/Oboe_Sus_F5_v1_Main.wav","root_midi":77,"velocity_layer":null,"low_midi":74,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"clarinet","name":"Clarinet","family":"woodwinds","hold":true,"zones":[{"file":"samples/clarinet/DCClar_susLong_D2_v1_rr1_sum.wav","root_midi":38,"velocity_layer":null,"low_midi":0,"high_midi":42,"velocity_min":1,"velocity_max":127},{"file":"samples/clarinet/DCClar_susLong_A#2_v1_rr1_sum.wav","root_midi":46,"velocity_layer":null,"low_midi":43,"high_midi":52,"velocity_min":1,"velocity_max":127},{"file":"samples/clarinet/DCClar_susLong_A#3_v1_rr1_sum.wav","root_midi":58,"velocity_layer":null,"low_midi":53,"high_midi":64,"velocity_min":1,"velocity_max":127},{"file":"samples/clarinet/DCClar_susLong_A#4_v1_rr1_sum.wav","root_midi":70,"velocity_layer":null,"low_midi":65,"high_midi":74,"velocity_min":1,"velocity_max":127},{"file":"samples/clarinet/DCClar_susLong_F#5_v1_rr1_sum.wav","root_midi":78,"velocity_layer":null,"low_midi":75,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"bassoon","name":"Bassoon","family":"woodwinds","hold":true,"zones":[{"file":"samples/bassoon/PSBassoon_A#0_v1_1.wav","root_midi":22,"velocity_layer":null,"low_midi":0,"high_midi":27,"velocity_min":1,"velocity_max":127},{"file":"samples/bassoon/PSBassoon_A1_v1_1.wav","root_midi":33,"velocity_layer":null,"low_midi":28,"high_midi":38,"velocity_min":1,"velocity_max":127},{"file":"samples/bassoon/PSBassoon_G2_v1_1.wav","root_midi":43,"velocity_layer":null,"low_midi":39,"high_midi":49,"velocity_min":1,"velocity_max":127},{"file":"samples/bassoon/PSBassoon_G#3_v1_1.wav","root_midi":56,"velocity_layer":null,"low_midi":50,"high_midi":59,"velocity_min":1,"velocity_max":127},{"file":"samples/bassoon/PSBassoon_D#4_v2_1.wav","root_midi":63,"velocity_layer":null,"low_midi":60,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"trumpet","name":"Trumpet","family":"brass","hold":true,"zones":[{"file":"samples/trumpet/Sum_SHTrumpet_sus_F2_v1_rr1.wav","root_midi":41,"velocity_layer":null,"low_midi":0,"high_midi":44,"velocity_min":1,"velocity_max":127},{"file":"samples/trumpet/Sum_SHTrumpet_sus_C3_v1_rr1.wav","root_midi":48,"velocity_layer":null,"low_midi":45,"high_midi":51,"velocity_min":1,"velocity_max":127},{"file":"samples/trumpet/Sum_SHTrumpet_sus_G3_v1_rr1.wav","root_midi":55,"velocity_layer":null,"low_midi":52,"high_midi":60,"velocity_min":1,"velocity_max":127},{"file":"samples/trumpet/Sum_SHTrumpet_sus_F4_v1_rr1.wav","root_midi":65,"velocity_layer":null,"low_midi":61,"high_midi":68,"velocity_min":1,"velocity_max":127},{"file":"samples/trumpet/Sum_SHTrumpet_sus_C5_v1_rr1.wav","root_midi":72,"velocity_layer":null,"low_midi":69,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"french_horn","name":"French Horn","family":"brass","hold":true,"zones":[{"file":"samples/french_horn/MOHorn_sus_A0_v1_1.wav","root_midi":21,"velocity_layer":null,"low_midi":0,"high_midi":24,"velocity_min":1,"velocity_max":127},{"file":"samples/french_horn/MOHorn_sus_D#1_v1_1.wav","root_midi":27,"velocity_layer":null,"low_midi":25,"high_midi":32,"velocity_min":1,"velocity_max":127},{"file":"samples/french_horn/MOHorn_sus_D2_v1_1.wav","root_midi":38,"velocity_layer":null,"low_midi":33,"high_midi":43,"velocity_min":1,"velocity_max":127},{"file":"samples/french_horn/MOHorn_sus_C3_v1_1.wav","root_midi":48,"velocity_layer":null,"low_midi":44,"high_midi":56,"velocity_min":1,"velocity_max":127},{"file":"samples/french_horn/MOHorn_sus_F4_v1_1.wav","root_midi":65,"velocity_layer":null,"low_midi":57,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"trombone","name":"Trombone","family":"brass","hold":true,"zones":[{"file":"samples/trombone/tenortbn_sus_A#0_v1_1.wav","root_midi":22,"velocity_layer":null,"low_midi":0,"high_midi":24,"velocity_min":1,"velocity_max":127},{"file":"samples/trombone/tenortbn_sus_D#1_v1_1.wav","root_midi":27,"velocity_layer":null,"low_midi":25,"high_midi":32,"velocity_min":1,"velocity_max":127},{"file":"samples/trombone/tenortbn_sus_D2_v1_1.wav","root_midi":38,"velocity_layer":null,"low_midi":33,"high_midi":43,"velocity_min":1,"velocity_max":127},{"file":"samples/trombone/tenortbn_sus_C#3_v1_1.wav","root_midi":49,"velocity_layer":null,"low_midi":44,"high_midi":51,"velocity_min":1,"velocity_max":127},{"file":"samples/trombone/tenortbn_sus_F3_v1_1.wav","root_midi":53,"velocity_layer":null,"low_midi":52,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"tuba","name":"Tuba","family":"brass","hold":true,"zones":[{"file":"samples/tuba/Tuba3_sus_F0_v1_rr1_Mid.wav","root_midi":17,"velocity_layer":null,"low_midi":0,"high_midi":22,"velocity_min":1,"velocity_max":127},{"file":"samples/tuba/Tuba3_sus_D#1_v1_rr1_Mid.wav","root_midi":27,"velocity_layer":null,"low_midi":23,"high_midi":30,"velocity_min":1,"velocity_max":127},{"file":"samples/tuba/Tuba3_sus_A#1_v1_rr1_Mid.wav","root_midi":34,"velocity_layer":null,"low_midi":31,"high_midi":37,"velocity_min":1,"velocity_max":127},{"file":"samples/tuba/Tuba3_sus_F2_v1_rr1_Mid.wav","root_midi":41,"velocity_layer":null,"low_midi":38,"high_midi":45,"velocity_min":1,"velocity_max":127},{"file":"samples/tuba/Tuba3_sus_D3_v1_rr1_Mid.wav","root_midi":50,"velocity_layer":null,"low_midi":46,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"marimba","name":"Marimba","family":"percussion","hold":false,"zones":[{"file":"samples/marimba/Marimba_hit_Outrigger_F1_loud_01.wav","root_midi":29,"velocity_layer":null,"low_midi":0,"high_midi":36,"velocity_min":1,"velocity_max":127},{"file":"samples/marimba/Marimba_hit_Outrigger_G2_loud_01.wav","root_midi":43,"velocity_layer":null,"low_midi":37,"high_midi":48,"velocity_min":1,"velocity_max":127},{"file":"samples/marimba/Marimba_hit_Outrigger_F3_loud_01.wav","root_midi":53,"velocity_layer":null,"low_midi":49,"high_midi":62,"velocity_min":1,"velocity_max":127},{"file":"samples/marimba/Marimba_hit_Outrigger_B4_loud_01.wav","root_midi":71,"velocity_layer":null,"low_midi":63,"high_midi":77,"velocity_min":1,"velocity_max":127},{"file":"samples/marimba/Marimba_hit_Outrigger_C6_loud_01.wav","root_midi":84,"velocity_layer":null,"low_midi":78,"high_midi":127,"velocity_min":1,"velocity_max":127}]},{"id":"orchestral_percussion","name":"Orchestral Percussion","family":"percussion","hold":false,"zones":[{"file":"samples/orchestral_percussion/Timpani1_Hit_v3_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"timpani_1","trigger_midi":41},{"file":"samples/orchestral_percussion/Timpani2_Hit_v3_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"timpani_2","trigger_midi":43},{"file":"samples/orchestral_percussion/Timpani3_Hit_v3_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"timpani_3","trigger_midi":45},{"file":"samples/orchestral_percussion/Timpani4_Hit_v3_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"timpani_4","trigger_midi":47},{"file":"samples/orchestral_percussion/BDrumNewhit_v4_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"concert_bass_drum","trigger_midi":36},{"file":"samples/orchestral_percussion/Snare2-HitNS_v3_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"orchestral_snare","trigger_midi":38},{"file":"samples/orchestral_percussion/cymbal-crash1_mf_rr1.wav","root_midi":null,"velocity_layer":null,"id":"cymbal_crash","trigger_midi":49},{"file":"samples/orchestral_percussion/Triangle3-Hit_v2_rr1_Sum.wav","root_midi":null,"velocity_layer":null,"id":"triangle","trigger_midi":81},{"file":"samples/orchestral_percussion/gongHit_mf.wav","root_midi":null,"velocity_layer":null,"id":"gong","trigger_midi":52}]}]};
const instruments=Object.fromEntries(manifest.instruments.map(i=>[i.id,i]));
// Values may be AudioBuffers or in-flight Promises. No duplicate decoding / fetching.
const decoded=new Map(), loopCache=new WeakMap();
const is=type=>typeof type==='string'&&type.startsWith('orch_')&&!!instruments[type.slice(5)];
const instrument=type=>is(type)?instruments[type.slice(5)]:null;
const clamp=(v,lo,hi)=>Math.min(hi,Math.max(lo,Number.isFinite(v)?v:lo));
function zoneFor(type,pitch,velocity=1){
 const ins=instrument(type);if(!ins||!Number.isInteger(pitch)||pitch<0||pitch>127)return null;
 if(ins.id==='orchestral_percussion')return ins.zones.find(z=>z.trigger_midi===pitch)||null;
 const mv=clamp(Math.round(clamp(velocity,0,1)*127),1,127);
 const pool=ins.zones.filter(z=>(z.velocity_min??1)<=mv&&(z.velocity_max??127)>=mv);
 const zones=pool.length?pool:ins.zones;
 return zones.reduce((best,z)=>!best||Math.abs(z.root_midi-pitch)<Math.abs(best.root_midi-pitch)?z:best,null);
}
async function loadOne(ctx,zone){
 if(!zone)throw Error('ไม่มี Sample สำหรับโน้ตนี้');
 const path=zone.file;
 if(!decoded.has(path)){
  const task=(async()=>{
   const url=new URL('orchestra/'+path,document.baseURI);
   if(!['http:','https:'].includes(url.protocol)||url.origin!==location.origin)
    throw Error('ต้องเปิดผ่าน localhost หรือเว็บไซต์ ไม่ใช่ดับเบิลคลิก HTML');
   const resp=await fetch(url.toString());
   if(!resp.ok)throw Error('ไม่พบเสียง '+path+' (HTTP '+resp.status+')');
   const raw=await resp.arrayBuffer();
   const buf=await ctx.decodeAudioData(raw);
   if(!buf.length||!buf.numberOfChannels)throw Error('ไฟล์เสียงเสียหาย '+path);
   return buf;
  })();
  decoded.set(path,task);
  task.then(buf=>{if(decoded.get(path)===task)decoded.set(path,buf);},()=>{if(decoded.get(path)===task)decoded.delete(path);});
 }
 return await decoded.get(path);
}
async function ensure(ctx,tracks,progress){
 const list=new Map();
 for(const t of tracks){if(!is(t.type))continue;
  for(const n of t.notes||[]){const zone=zoneFor(t.type,n.p,n.v??1);if(zone)list.set(zone.file,zone);}
 }
 const items=[...list.values()];let next=0,completed=0,error=null;
 async function worker(){while(!error){const i=next++;if(i>=items.length)break;
  try{await loadOne(ctx,items[i]);completed++;progress?.(completed,items.length);}catch(e){error=e;}
 }}
 await Promise.all(Array.from({length:Math.min(4,items.length)},worker));
 if(error)throw error;
 return {loaded:completed,total:items.length};
}
async function preloadInstrument(ctx,type,progress){
 const ins=instrument(type);if(!ins)return;
 const list=new Map(ins.zones.map(z=>[z.file,z]));const items=[...list.values()];
 let next=0,done=0,error=null;
 async function worker(){while(!error){const i=next++;if(i>=items.length)break;
  try{await loadOne(ctx,items[i]);done++;progress?.(done,items.length);}catch(e){error=e;}
 }}
 await Promise.all(Array.from({length:Math.min(4,items.length)},worker));if(error)throw error;
}
function isLoaded(type,pitch,velocity=1){const z=zoneFor(type,pitch,velocity);return !!z&&decoded.get(z.file) instanceof AudioBuffer;}
// Build a periodic sustain section with an overlap-add seam: last N frames fade into first N.
// Start playback at N, then loop [N, length) so the seam meets phase-continuously.
function sustainPart(ctx,pcm){
 if(loopCache.has(pcm))return loopCache.get(pcm);
 const sr=pcm.sampleRate, duration=pcm.duration;
 const from=Math.floor(sr*Math.min(.42,Math.max(.12,duration*.27)));
 const to=Math.min(pcm.length,Math.floor(sr*Math.max(duration*.72,duration-.4)));
 const length=Math.max(0,to-from);
 const fade=Math.max(64,Math.min(Math.floor(sr*.065),Math.floor(length*.19)));
 if(length<fade*5||fade<64){loopCache.set(pcm,null);return null;}
 const part=ctx.createBuffer(pcm.numberOfChannels,length,sr);
 for(let ch=0;ch<pcm.numberOfChannels;ch++){
  const src=pcm.getChannelData(ch),dst=part.getChannelData(ch);
  dst.set(src.subarray(from,from+length));
  for(let j=0;j<fade;j++){
   const w=.5-.5*Math.cos(Math.PI*j/(fade-1));
   dst[length-fade+j]=src[from+length-fade+j]*(1-w)+src[from+j]*w;
  }
 }
 const out={buffer:part,loopStart:fade/sr,loopEnd:length/sr};
 loopCache.set(pcm,out);return out;
}
function play(ctx,dest,t,pitch,when,length,velocity=1){
 const zone=zoneFor(t.type,pitch,velocity);if(!zone)return null;
 const pcm=decoded.get(zone.file);
 if(!(pcm instanceof AudioBuffer))throw Error('เสียงยังไม่พร้อม: '+zone.file);
 const ins=instrument(t.type),hold=!!ins.hold;
 const p=t.patch||{},speed=zone.root_midi==null?1:Math.pow(2,(pitch-zone.root_midi)/12);
 const dur=Math.max(.035,length),release=hold?clamp(p.release??.3,.025,3):.12;
 const attack=hold?Math.min(clamp(p.attack??.035,.001,2),dur*.6):.003;
 const base=clamp(velocity,0,1)*.60*clamp(p.expression??1,.05,1);
 const output=ctx.createGain(),filter=ctx.createBiquadFilter();
 filter.type='lowpass';filter.frequency.value=clamp(p.cutoff??10500,150,12000);
 filter.Q.value=clamp(p.resonance??.8,0,14);
 output.connect(filter);filter.connect(dest);
 // Scheduled envelope has no instantaneous gain step at the swell point.
 if(hold){
  const peak=base,sustain=clamp(p.sustain??.95,0,1);
  const swell=clamp(p.swell??0,0,1);
  const first=peak*(1-swell*.62);
  const riseEnd=when+Math.min(dur,Math.max(attack+.045,dur*.6));
  output.gain.setValueAtTime(.00001,when);
  output.gain.linearRampToValueAtTime(Math.max(.00001,first),when+attack);
  if(swell>.001&&riseEnd>when+attack+.001){output.gain.linearRampToValueAtTime(peak,riseEnd);}
  const finalGain=peak*(1-swell*.08)*sustain;
  output.gain.linearRampToValueAtTime(Math.max(.00001,finalGain),when+dur);
  output.gain.linearRampToValueAtTime(.00001,when+dur+release);
 }else{
  output.gain.setValueAtTime(.00001,when);
  output.gain.linearRampToValueAtTime(Math.max(.00001,base),when+Math.min(.005,dur*.15));
 }
 const sources=[];let lfo=null,depth=null;
 const modulate=source=>{
  source.playbackRate.value=speed;
  if(hold&&clamp(p.vibrato??0,0,45)>0){
   if(!lfo){
    lfo=ctx.createOscillator();lfo.type='sine';lfo.frequency.value=clamp(p.rate??5,.5,12);
    depth=ctx.createGain();const wait=clamp(p.vibratoDelay??.22,0,2);
    depth.gain.setValueAtTime(0,when);
    depth.gain.linearRampToValueAtTime(clamp(p.vibrato,0,45),when+wait+.15);
    lfo.connect(depth);lfo.start(when);lfo.stop(when+dur+release+.08);
   }
   depth.connect(source.detune);
  }
 };
 function source(buffer,at,loop=false,offset=0){
  const src=ctx.createBufferSource();src.buffer=buffer;modulate(src);
  if(loop){src.loop=true;src.loopStart=loop.loopStart;src.loopEnd=loop.loopEnd;}
  src.connect(output);src.start(at,offset);sources.push(src);return src;
 }
 const natural=pcm.duration/speed;
 // Use original recording unmodified whenever the held note fits in the recorded performance.
 const sustain=hold&&dur+release>=natural-.1?sustainPart(ctx,pcm):null;
 const transition=sustain?Math.min(natural*.53,Math.max(.19,natural*.32)):null;
 const cross=sustain?Math.min(.11,Math.max(.025,natural*.075)):0;
 if(!sustain||transition+cross>=natural-.04||transition>=dur){
  const src=source(pcm,when);
  if(hold)src.stop(when+dur+release+.045);
 }else{
  const intro=source(pcm,when);
  const loop=ctx.createBufferSource(),ig=ctx.createGain(),lg=ctx.createGain();
  const at=when+transition;
  intro.disconnect();intro.connect(ig);ig.connect(output);
  loop.buffer=sustain.buffer;loop.loop=true;loop.loopStart=sustain.loopStart;loop.loopEnd=sustain.loopEnd;
  modulate(loop);loop.connect(lg);lg.connect(output);
  ig.gain.setValueAtTime(1,when);ig.gain.setValueAtTime(1,at);
  ig.gain.linearRampToValueAtTime(0,at+cross);
  lg.gain.setValueAtTime(0,when);lg.gain.setValueAtTime(0,at);
  lg.gain.linearRampToValueAtTime(1,at+cross);
  loop.start(at,sustain.loopStart);
  intro.stop(at+cross+.015);loop.stop(when+dur+release+.045);sources.push(loop);
 }
 if(!hold){
  const tail=Math.min(natural,10);
  if(tail>.1){output.gain.setValueAtTime(base,when+Math.min(.01,tail*.1));output.gain.setValueAtTime(base,when+Math.max(.03,tail-.05));output.gain.linearRampToValueAtTime(.00001,when+tail);}
 }
 return {stop(at){for(const src of sources){try{src.stop(Math.max(ctx.currentTime,at));}catch(_){}}if(lfo){try{lfo.stop(Math.max(ctx.currentTime,at));}catch(_){}}}};
}
window.BeatOrchestra={manifest,instruments,is,instrument,zoneFor,ensure,preloadInstrument,loadPitch:(ctx,type,pitch,vel)=>loadOne(ctx,zoneFor(type,pitch,vel)),play,isLoaded,loadedCount:()=>[...decoded.values()].filter(v=>v instanceof AudioBuffer).length};
})();
