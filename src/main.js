import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createIcons, ArrowUpRight, ArrowDown, ArrowUp, MoveDown, MoveRight, MessageSquare, MessagesSquare, Zap, Globe } from 'lucide';
import * as THREE from 'three';

createIcons({icons:{ArrowUpRight,ArrowDown,ArrowUp,MoveDown,MoveRight,MessageSquare,MessagesSquare,Zap,Globe},attrs:{'aria-hidden':'true'}});
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobileNav.hidden=!open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();menu.focus();}});
window.matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

gsap.registerPlugin(ScrollTrigger);
const animations=gsap.matchMedia();
animations.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.from('.hero h1 .line > span',{yPercent:108,duration:1.2,stagger:.12,ease:'power4.out',delay:.1});
  gsap.from('.hero-reveal',{y:20,opacity:0,duration:1,stagger:.08,ease:'power3.out',delay:.4});
  gsap.from('.hero-visual',{opacity:0,duration:1.4,delay:.25});
  gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:36,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 91%',once:true}}));
  gsap.to('.hero-visual .orbit-lines',{rotation:10,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
});
document.fonts.ready.then(()=>ScrollTrigger.refresh());

// Progressive enhancement: the branded fallback remains visible if WebGL is unavailable.
const stage=document.querySelector('#hero-visual');
const canvas=document.querySelector('#dragon-scene');
let renderer,scene,camera,coin,frame=0,disposed=false,visible=true;
let targetX=0,targetY=0,hoverX=0,hoverY=0;
let elapsed=0,lastTime=0;
const resources=[];
function release(){cancelAnimationFrame(frame);resources.forEach(r=>r.dispose?.());renderer?.dispose();stage.classList.remove('webgl-ready');}
try {
  renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65));
  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.15;
  scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(34,1,.1,50);camera.position.set(0,0,10.8);
  scene.add(new THREE.AmbientLight(0xffefd0,2.1));
  const key=new THREE.DirectionalLight(0xffe7a6,7);key.position.set(-3,5,6);scene.add(key);
  const fill=new THREE.DirectionalLight(0xe9f0ff,3);fill.position.set(4,-2,3);scene.add(fill);
  const edge=new THREE.PointLight(0xf0b90b,70,20);edge.position.set(0,1,-3);scene.add(edge);
  coin=new THREE.Group();scene.add(coin);
  const gold=new THREE.MeshStandardMaterial({color:0xe1a919,metalness:.87,roughness:.29});resources.push(gold);
  const edgeGold=new THREE.MeshStandardMaterial({color:0xf7ce54,metalness:.78,roughness:.22});resources.push(edgeGold);
  const dark=new THREE.MeshStandardMaterial({color:0x11120d,roughness:.48,metalness:.35});resources.push(dark);
  const bodyGeo=new THREE.CylinderGeometry(2.36,2.36,.37,128);resources.push(bodyGeo);const body=new THREE.Mesh(bodyGeo,gold);body.rotation.x=Math.PI/2;coin.add(body);
  const ringGeo=new THREE.TorusGeometry(2.30,.075,12,128);resources.push(ringGeo);const ring=new THREE.Mesh(ringGeo,edgeGold);ring.position.z=.205;coin.add(ring);
  const backRing=new THREE.Mesh(ringGeo,gold);backRing.position.z=-.20;coin.add(backRing);
  const innerRingGeo=new THREE.TorusGeometry(2.17,.018,8,128);resources.push(innerRingGeo);const innerRing=new THREE.Mesh(innerRingGeo,gold);innerRing.position.z=.24;coin.add(innerRing);
  const backGeo=new THREE.CircleGeometry(2.23,128);resources.push(backGeo);const back=new THREE.Mesh(backGeo,dark);back.rotation.y=Math.PI;back.position.z=-.19;coin.add(back);
  const ridgeGeo=new THREE.BoxGeometry(.016,.075,.28);resources.push(ridgeGeo);const ridges=new THREE.InstancedMesh(ridgeGeo,edgeGold,120);const dummy=new THREE.Object3D();for(let i=0;i<120;i++){const a=i/120*Math.PI*2;dummy.position.set(Math.cos(a)*2.364,Math.sin(a)*2.364,0);dummy.rotation.z=a;dummy.updateMatrix();ridges.setMatrixAt(i,dummy.matrix);}coin.add(ridges);
  const faceGeo=new THREE.CircleGeometry(2.20,128);resources.push(faceGeo);
  new THREE.TextureLoader().load('beploer-dragon.png',texture=>{if(disposed){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);resources.push(texture);const mat=new THREE.MeshBasicMaterial({map:texture,toneMapped:false});resources.push(mat);const face=new THREE.Mesh(faceGeo,mat);face.position.z=.222;coin.add(face);stage.classList.add('webgl-ready');render(performance.now());},undefined,()=>{release();});
  // Sculptural orbital lines sit behind the medallion.
  const orbitMat=new THREE.MeshBasicMaterial({color:0x8d6e1b,transparent:true,opacity:.23});resources.push(orbitMat);
  [3.12,3.47].forEach((radius,i)=>{const geo=new THREE.TorusGeometry(radius,.008,6,160);resources.push(geo);const orbit=new THREE.Mesh(geo,orbitMat);orbit.rotation.set(.9+i*.3,-.55,-.4+i*.3);orbit.position.z=-1;scene.add(orbit);});
  const resize=new ResizeObserver(()=>{const {width,height}=stage.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.position.z=width<450?10.5:11.2;camera.updateProjectionMatrix();if(motion.matches&&coin)render(performance.now());});resize.observe(stage);
  stage.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=stage.getBoundingClientRect();targetX=(e.clientX-r.left)/r.width-.5;targetY=(e.clientY-r.top)/r.height-.5;});stage.addEventListener('pointerleave',()=>{targetX=0;targetY=0;});
  function render(time){if(disposed)return;const delta=lastTime?Math.min((time-lastTime)/1000,.05):0;lastTime=time;if(visible&&!document.hidden){elapsed+=delta;hoverX+=(targetX-hoverX)*.035;hoverY+=(targetY-hoverY)*.035;coin.rotation.set(-.1+(motion.matches?0:Math.sin(elapsed*.5)*.035+hoverY*.14),-.30+(motion.matches?0:Math.sin(elapsed*.35)*.12+hoverX*.35),-.14);coin.position.y=motion.matches?0:Math.sin(elapsed*.8)*.075;renderer.render(scene,camera);}if(!motion.matches)frame=requestAnimationFrame(render);}
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;},{threshold:0}).observe(stage);
  motion.addEventListener('change',()=>{cancelAnimationFrame(frame);lastTime=0;render(performance.now());});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);stage.classList.remove('webgl-ready');});
  window.addEventListener('pagehide',()=>{disposed=true;resize.disconnect();release();},{once:true});
} catch { release(); }
