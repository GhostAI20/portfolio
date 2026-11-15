"use client";
import { useState, useEffect, useRef } from "react";

const LINKS = {
  github: "https://github.com/GhostAI20",
  linkedin: "https://www.linkedin.com/in/naduni-umeda",
  cyberLab: "https://github.com/GhostAI20/NETWORKWALKS-NADUNI-UMEDA-B084-WK1-PM1-CYBERSECURITY-LAB-SETUP",
  week02Report: "https://lnkd.in/gjacRDru",
  mathSolver: "https://github.com/GhostAI20/partial-fraction-calculator",
  gumroadCricket: "https://umeda6.gumroad.com/l/cricket-score-app",
  email: "mailto:naduni@example.com"
};

const projectsData = [
  { 
    id:1, title:"CYBER LAB", sub:"Isolated Cybersecurity Lab", 
    desc:"Week 01 - Built isolated lab with VirtualBox + Kali Linux. NAT Network, Static IP 10.0.0.2/24, Gateway 10.0.0.1, Ping + DNS check, Recovery Snapshot. Week 02 - Footprinting with whois, whatweb, nslookup, curl, wafw00f, dnsrecon + Zenmap nmap -T4 -A -v scan. NetworkWalks B084.",
    img:"/cyber-lab.png", tech:["Kali","VirtualBox","Networking"],
    link: LINKS.cyberLab
  },
  { 
    id:2, title:"CRICKET SCORE", sub:"Cricket Score App - Flutter App • Available on Gumroad", 
    desc:"Real-time Cricket Score Tracking app. Live score: Runs, Wickets, Overs, Target & Need to win. Batsman/Bowler stats, Controls: 1,2,4,6,WICKET,NO BALL,WIDE,UNDO, MATCH AWASANAI auto detection, Edit Details screen, Clean Dark UI. Now available on Gumroad - Click to Get The App!",
    img:"/cricket-score.png", tech:["Flutter","Dart","Gumroad"],
    link: "https://umeda6.gumroad.com/l/cricket-score-app"
  },
  { 
    id:3, title:"MATH SOLVER", sub:"Partial Fraction Calculator", 
    desc:"Flask app for A/L students to calculate partial fractions - built to help my batch.",
    img:"/math-solver.png", tech:["Python","Flask","Math"],
    link: LINKS.mathSolver
  },
];

const certsData = [
  { title:"Introduction to Critical Infrastructure Protection", org:"OPSWAT Academy • ICIP", img:"/cert1.jpeg" },
  { title:"Python Developer", org:"Sololearn", img:"/cert2.jpeg" },
  { title:"Prompt Engineering", org:"Sololearn", img:"/cert3.jpeg" },
  { title:"Database Management Systems & SQL", org:"SuhuruSara • Nov 1, 2026", img:"/cert4.jpeg" },
  { title:"Ethical Hacking 101 - Beginners Guide", org:"Simplilearn SkillUp • Sep 2024", img:"/cert5.jpeg" },
  { title:"Creative Design Free Workshop", org:"Creative Design • 2 Days Workshop", img:"/cert6.jpeg" },
  { title:"Introduction to Java", org:"Sololearn", img:"/cert7.jpeg" },
  { title:"CS406: Information Security", org:"Saylor Academy • Mar 15, 2026", img:"/cert8.jpeg" },
  { title:"Foundations of Cybersecurity", org:"Google • Coursera • Nov 11, 2026", img:"/cert9.png" },
  { title:"Introduction to Cybersecurity Awareness", org:"HP LIFE", img:"/cert10.png" },
  { title:"Python for Beginners", org:"University of Moratuwa • Centre for Open & Distance Learning (CODL)", img:"/cert11.png" },
];

const techStack = [
  { name:"React", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name:"JavaScript", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name:"HTML5", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name:"CSS3", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name:"Python", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name:"PHP", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name:"MySQL", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name:"Supabase", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name:"Firebase", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name:"Git", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name:"Flutter", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name:"Linux", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name:"Wireshark", icon:"/wireshark.png" },
  { name:"Nmap", icon:"/nmap.png" },
  { name:"VirtualBox", icon:"https://cdn.simpleicons.org/virtualbox" },
  { name:"Kali", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [tab, setTab] = useState("Projects");
  const [active, setActive] = useState("Home");
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playClick = () => {
    try {
      if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(); osc.stop(ctx.currentTime + 0.15);
    } catch {}
  };

  useEffect(() => {
    let p=0;
    const i=setInterval(()=>{ p+=Math.floor(Math.random()*18)+5; if(p>=100){ p=100; clearInterval(i); setTimeout(()=>setLoading(false),600);} setPercent(p); },120);
    return ()=>clearInterval(i);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const stars: any[] = [];
    for (let i=0; i<150; i++) stars.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, size: Math.random()*2+0.5, speed: Math.random()*1.5+0.3, opacity: Math.random()*0.8+0.2 });
    let anim: number;
    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      stars.forEach(s => {
        s.y += s.speed; if (s.y > canvas.height) { s.y = -10; s.x = Math.random()*canvas.width; }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
        ctx.fillStyle = `rgba(96, 165, 250, ${s.opacity})`; ctx.fill();
        if (s.speed > 1.2) { ctx.fillStyle = `rgba(96, 165, 250, ${s.opacity*0.3})`; ctx.fillRect(s.x, s.y-15, 0.5, 15); }
      });
      anim = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(anim);
  }, [loading]);

  if(loading){
    return (
      <div className="fixed inset-0 bg-[#06080F] flex flex-col items-center justify-center z-[100]">
        <div className="text-[80px] font-black tracking-tighter">{percent}<span className="text-[#3B82F6] text-[40px]">%</span></div>
        <div className="w-[300px] h-[2px] bg-white/10 mt-4"><div className="h-full bg-[#3B82F6]" style={{width:`${percent}%`}} /></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#06080F] text-white relative overflow-hidden">
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0px) rotate(-6deg)}50%{transform:translateY(-18px) rotate(-6deg)}}
        .animate-float{animation:float 3.5s ease-in-out infinite}
        @keyframes border-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes shine{0%{left:-100%}100%{left:200%}}
      `}</style>
      
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {selectedCert && (<div onClick={()=>{ playClick(); setSelectedCert(null)}} className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"><img src={selectedCert} className="max-w-[90%] max-h-[90%] rounded-[16px]" /></div>)}

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 flex gap-1">
        {["Home","About","Experience","Portfolio","Contact"].map(m=>(
          <button key={m} onClick={()=>{ playClick(); setActive(m); document.getElementById(m)?.scrollIntoView({behavior:'smooth'}) }} className={`px-5 py-2 rounded-full font-mono text-[11px] ${active===m ? "bg-white text-black font-bold" : "opacity-60"}`}>{m}</button>
        ))}
      </nav>

      <section id="Home" className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28 grid md:grid-cols-2 gap-10 items-center min-h-[90vh]">
        <div>
          <div className="inline-flex bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 font-mono text-[10px] text-blue-300">AVAILABLE FOR INTERNSHIP</div>
          <h1 className="mt-6 text-[50px] leading-[0.9] font-bold"><span className="text-[#60A5FA]">Welcome to</span><br/>My Portfolio</h1>
          <p className="mt-5 text-[14px] text-white/60 max-w-[460px]">I'm <span className="text-white font-bold">R.M. Naduni Umeda</span> — A/L 2026 Physical Science at Ananda Sastralaya, Mathugama. Cybersecurity Intern @ NetworkWalks.</p>
          <div className="mt-6 flex gap-3">
            <a href={LINKS.linkedin} target="_blank" onClick={playClick} className="bg-[#3B82F6] px-6 py-3 rounded-full font-bold text-[12px]">LINKEDIN →</a>
            <a href={LINKS.github} target="_blank" onClick={playClick} className="bg-white/10 border border-white/10 px-6 py-3 rounded-full font-bold text-[12px]">GITHUB</a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-16 bg-blue-600/20 blur-[90px] rounded-full" />
          <div className="animate-float relative w-[320px] h-[440px] bg-gradient-to-br from-[#0F172A] to-[#020617] border border-white/10 rounded-[28px] p-3 shadow-[0_0_100px_rgba(59,130,246,0.35)]">
            <div className="w-full h-full bg-[#0B1220] rounded-[20px] border border-white/10 overflow-hidden flex flex-col">
              <div className="flex justify-between p-3 font-mono text-[8px] opacity-40"><span>DEVELOPER_ID</span><span>NU_2026 • VERIFIED</span></div>
              <div className="flex-1 mx-3 rounded-[16px] overflow-hidden bg-black"><img src="/naduni.jpg" alt="Naduni" className="w-full h-full object-cover" /></div>
              <div className="p-4 text-center"><div className="font-bold text-[15px]">R.M. Naduni Umeda</div><div className="font-mono text-[9px] opacity-50 mt-1">CYBERSECURITY INTERN @ NETWORKWALKS</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="relative z-10 max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#0F172A]/60 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
          <div>
            <div className="inline-flex bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-4 py-1 font-mono text-[10px] text-[#60A5FA] tracking-widest">ABOUT ME</div>
            <h2 className="mt-6 text-[38px] md:text-[48px] font-black leading-[0.9] tracking-tighter">Passionate<br/><span className="text-[#60A5FA]">Cybersecurity</span><br/>Learner</h2>
            <p className="mt-6 text-[14px] leading-[1.7] text-white/60">
              I'm <span className="text-white font-bold">R.M. Naduni Umeda</span>, an A/L 2026 Physical Science student at <span className="text-white">Ananda Sastralaya, Mathugama</span>. Currently working as a <span className="text-[#60A5FA] font-bold">Cybersecurity Intern at NetworkWalks</span> while exploring Networking, Ethical Hacking, and Full-Stack Development.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="bg-[#020617] border border-white/10 rounded-[16px] p-4"><div className="font-mono text-[10px] opacity-40">EDUCATION</div><div className="mt-2 font-bold text-[13px]">A/L 2026 - Physical</div><div className="text-[11px] opacity-60">Ananda Sastralaya, Mathugama</div></div>
              <div className="bg-[#020617] border border-white/10 rounded-[16px] p-4"><div className="font-mono text-[10px] opacity-40">INTERNSHIP</div><div className="mt-2 font-bold text-[13px]">Cyber Intern</div><div className="text-[11px] opacity-60">NetworkWalks • 2026</div></div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={LINKS.linkedin} target="_blank" onClick={playClick} className="bg-[#0077B5] px-5 py-2.5 rounded-full font-bold text-[11px]">LINKEDIN</a>
              <a href={LINKS.github} target="_blank" onClick={playClick} className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-[11px]">GITHUB - GhostAI20</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-[#3B82F6]/20 blur-[60px] rounded-full" />
            <div className="relative bg-[#020617] border border-white/10 rounded-[24px] p-6">
              <div className="font-mono text-[10px] opacity-40 mb-4">MY JOURNEY</div>
              <div className="space-y-5">
                <div className="flex gap-4"><div className="w-[2px] bg-[#3B82F6] rounded-full" /><div><div className="font-bold text-[13px]">2026 - Present</div><div className="text-[12px] text-white/60 mt-1">Cybersecurity Intern at NetworkWalks. Building labs, learning enterprise security.</div></div></div>
                <div className="flex gap-4"><div className="w-[2px] bg-white/10 rounded-full" /><div><div className="font-bold text-[13px]">2024 - 2026</div><div className="text-[12px] text-white/60 mt-1">A/L Physical Science + 11 certs in Python, Security, Networking, Java.</div></div></div>
                <div className="flex gap-4"><div className="w-[2px] bg-white/10 rounded-full" /><div><div className="font-bold text-[13px]">Future Goal</div><div className="text-[12px] text-white/60 mt-1">Become a Security Engineer & help secure Sri Lankan infrastructure.</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-4 py-1 font-mono text-[10px] text-[#60A5FA] tracking-widest">EXPERIENCE</div>
          <h2 className="mt-4 text-[42px] font-black tracking-tighter">My <span className="text-[#60A5FA]">Experience</span></h2>
        </div>
        <div className="space-y-6">
          <div className="bg-[#0F172A]/60 border border-white/10 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <p className="text-[#60A5FA] font-bold text-[13px]">2026 - Present</p>
              <p className="text-white/60 text-[12px] mt-1">Remote - Batch B084</p>
              <p className="text-white/60 text-[12px] mt-2">Mentor: Sir Waqas Karim (CCIE)</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-black">Cybersecurity Intern</h3>
              <p className="text-[#60A5FA] font-mono text-[12px] mt-1">NetworkWalks</p>
              <p className="text-white font-bold text-[13px] mt-5">Week 01 - Cybersecurity Lab Setup</p>
              <ul className="text-white/60 text-[13px] space-y-1 list-disc list-inside mt-2">
                <li>Built isolated penetration testing lab from scratch using VirtualBox and Kali Linux</li>
                <li>Configured VirtualBox with NAT Network</li>
                <li>Imported and set up Kali Linux VM</li>
                <li>Assigned static IP 10.0.0.2/24 with gateway 10.0.0.1</li>
                <li>Verified connectivity with ping and DNS (nslookup / 8.8.8.8)</li>
                <li>Created a clean recovery snapshot</li>
                <li>Learned NAT vs NAT Network, VM networking & importance of documentation</li>
              </ul>
              <p className="text-white font-bold text-[13px] mt-5">Week 02 - Penetration Testing Report</p>
              <ul className="text-white/60 text-[13px] space-y-1 list-disc list-inside mt-2">
                <li>Footprinting with 6 Kali tools: whois, whatweb, nslookup, curl, wafw00f, dnsrecon</li>
                <li>Network Scanning with Zenmap Intense Scan - Topology, OS Detection & Ports</li>
                <li>Command: nmap -T4 -A -v</li>
                <li>Learned how to gather public info legally & document findings like a professional report</li>
                <li>Biggest Lesson: Recon is not hacking. It is understanding the target before testing it.</li>
              </ul>
              <a href={LINKS.week02Report} target="_blank" onClick={playClick} className="inline-block mt-5 text-[12px] bg-[#3B82F6] px-5 py-2.5 rounded-full font-bold">View Week 02 Report on GitHub →</a>
              <div className="flex gap-2 mt-4 flex-wrap">
                {["Kali Linux","VirtualBox","Nmap","Zenmap","Footprinting"].map(t=>(
                  <span key={t} className="text-[11px] bg-white/10 px-3 py-1 rounded-full text-white/80">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#0F172A]/60 border border-white/10 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <p className="text-[#60A5FA] font-bold text-[13px]">2024 - 2026</p>
              <p className="text-white/60 text-[12px] mt-1">Mathugama</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-black">G.C.E. A/L - Physical Science</h3>
              <p className="text-[#60A5FA] font-mono text-[12px] mt-1">Ananda Sastralaya, Mathugama</p>
              <ul className="text-white/60 text-[13px] space-y-1 list-disc list-inside mt-3">
                <li>Python & Flask Developer</li>
                <li>Built Cricket Score App, Math Solver & Cyber Lab projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="Portfolio" className="relative z-10 max-w-[1200px] mx-auto px-6 py-10">
        <h2 className="text-center text-[42px] font-black tracking-tighter">Portfolio</h2>
        <div className="mt-6 flex justify-center gap-2 bg-white/[0.05] border border-white/10 rounded-full p-1.5 w-fit mx-auto">
          {["Projects","Certificates","Tech Stack"].map(t=>(<button key={t} onClick={()=>{ playClick(); setTab(t)}} className={`px-6 py-2 rounded-full font-mono text-[11px] ${tab===t ? "bg-[#3B82F6] text-white font-bold" : "opacity-50"}`}>{t}</button>))}
        </div>
        <div className="mt-10">
          {tab==="Projects" && (
            <div className="grid md:grid-cols-3 gap-6">
              {projectsData.map((p)=>(
                <a key={p.id} href={p.link} target="_blank" onClick={playClick} className="group bg-[#0F172A]/70 border border-white/10 rounded-[24px] overflow-hidden hover:border-[#3B82F6]/50 hover:-translate-y-1 transition-all">
                  <div className="h-[200px] bg-black overflow-hidden relative"><img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /><div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"><span className="bg-white text-black px-4 py-2 rounded-full font-bold text-[11px]">{p.id===2 ? "GET ON GUMROAD →" : "VIEW ON GITHUB →"}</span></div></div>
                  <div className="p-5"><h3 className="font-black text-[16px]">{p.title}</h3><p className="mt-1 font-mono text-[10px] text-[#60A5FA]">{p.sub}</p><p className="mt-3 text-[12px] text-white/60">{p.desc}</p></div>
                </a>
              ))}
            </div>
          )}
          {tab==="Tech Stack" && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
              {techStack.map((t, idx) => (
                <div key={t.name} className="group relative rounded-[18px] p-[1.5px] overflow-hidden">
                  <div className="absolute inset-0" style={{ animation: `border-spin ${3 + (idx % 3)}s linear infinite` }}>
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#3B82F6_320deg,#60A5FA_360deg)]" />
                  </div>
                  <div className="relative bg-[#0F172A] rounded-[16px] h-[118px] flex flex-col items-center justify-center gap-3 border border-white/5 group-hover:bg-[#111C32] transition-colors">
                    <div className="absolute inset-0 overflow-hidden rounded-[16px]"><div className="absolute top-0 w-[60px] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" style={{ animation: `shine ${2.5 + (idx % 2)}s ease-in-out infinite` }} /></div>
                    <div className="relative z-10 w-12 h-12 bg-white rounded-[10px] p-1.5 shadow-[0_0_20px_rgba(59,130,246,0.3)]"><img src={t.icon} className="w-full h-full object-contain" /></div>
                    <div className="relative z-10 font-mono text-[11px] font-bold">{t.name}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab==="Certificates" && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">{certsData.map((c, idx)=>(<div key={idx} onClick={()=>{ playClick(); setSelectedCert(c.img)}} className="bg-[#0F172A]/60 border border-white/10 rounded-[20px] p-3 cursor-pointer"><div className="h-[200px] rounded-[12px] overflow-hidden bg-white"><img src={c.img} className="w-full h-full object-contain" /></div><div className="mt-3"><div className="font-bold text-[12px]">{c.title}</div></div></div>))}</div>)}
        </div>
      </section>

      <section id="Contact" className="relative z-10 max-w-[1200px] mx-auto px-6 py-24">
        <div className="bg-[#0F172A]/60 border border-white/10 rounded-[32px] p-8 md:p-12 text-center backdrop-blur-xl">
          <div className="inline-flex bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-4 py-1 font-mono text-[10px] text-[#60A5FA] tracking-widest">CONTACT</div>
          <h2 className="mt-6 text-[36px] md:text-[52px] font-black tracking-tighter leading-[0.9]">Let's Build<br/><span className="text-[#60A5FA]">Something Secure</span></h2>
          <p className="mt-4 text-white/60 text-[14px] max-w-[500px] mx-auto">Available for Cybersecurity Internship • Mathugama, Sri Lanka. Let's connect on LinkedIn & GitHub!</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={LINKS.linkedin} target="_blank" onClick={playClick} className="flex items-center gap-3 bg-[#0077B5] hover:bg-[#006399] px-8 py-4 rounded-full font-bold text-[13px] hover:scale-105 transition"><span className="w-6 h-6 bg-white text-[#0077B5] rounded-full flex items-center justify-center font-black text-[12px]">in</span> LINKEDIN • CONNECT</a>
            <a href={LINKS.github} target="_blank" onClick={playClick} className="flex items-center gap-3 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full font-bold text-[13px] hover:scale-105 transition">⬡ GITHUB • GhostAI20</a>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] opacity-40"><span>© 2026 R.M. Naduni Umeda • Ananda Sastralaya, Mathugama</span><span>BUILT WITH NEXT.JS • SECURED BY PASSION</span></div>
        </div>
      </section>
    </main>
  );
}